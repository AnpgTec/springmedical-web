import type { SupabaseClient } from "@supabase/supabase-js";

export function makeOrderNo(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `SM${y}${m}${day}${rand}`;
}

export type MarkPaidResult = {
  orderId: string;
  orderNo: string;
  alreadyPaid: boolean;
};

/** Idempotent: mark order paid + payment completed by PayPal capture */
export async function markOrderPaid(
  supabase: SupabaseClient,
  opts: {
    paypalOrderId: string;
    captureId?: string | null;
    rawPayload?: unknown;
  }
): Promise<MarkPaidResult | null> {
  const { data: order, error } = await supabase
    .from("orders")
    .select("id, order_no, status, amount_hkd")
    .eq("paypal_order_id", opts.paypalOrderId)
    .maybeSingle();

  if (error) throw error;
  if (!order) return null;

  if (order.status === "paid" || order.status === "fulfilled") {
    return { orderId: order.id, orderNo: order.order_no, alreadyPaid: true };
  }

  const now = new Date().toISOString();
  const { error: uErr } = await supabase
    .from("orders")
    .update({
      status: "paid",
      paid_at: now,
      updated_at: now,
    })
    .eq("id", order.id)
    .eq("status", "pending_payment");

  if (uErr) throw uErr;

  // Update existing payment row or insert
  const { data: payRows } = await supabase
    .from("payments")
    .select("id")
    .eq("order_id", order.id)
    .eq("provider_order_id", opts.paypalOrderId)
    .limit(1);

  if (payRows && payRows.length > 0) {
    await supabase
      .from("payments")
      .update({
        status: "completed",
        provider_capture_id: opts.captureId || null,
        raw_payload: opts.rawPayload ?? null,
        updated_at: now,
      })
      .eq("id", payRows[0].id);
  } else {
    // unique capture id may be null once — use insert with capture if present
    const insert: Record<string, unknown> = {
      order_id: order.id,
      provider: "paypal",
      provider_order_id: opts.paypalOrderId,
      provider_capture_id: opts.captureId || null,
      amount_hkd: order.amount_hkd,
      status: "completed",
      raw_payload: opts.rawPayload ?? null,
    };
    const { error: pErr } = await supabase.from("payments").insert(insert);
    if (pErr && opts.captureId) {
      // duplicate capture — treat as success
      if (!pErr.message.includes("duplicate") && pErr.code !== "23505") throw pErr;
    } else if (pErr) throw pErr;
  }

  return { orderId: order.id, orderNo: order.order_no, alreadyPaid: false };
}
