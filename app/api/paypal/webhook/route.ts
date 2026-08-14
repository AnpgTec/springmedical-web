import { NextResponse } from "next/server";
import { markOrderPaid } from "@/lib/orders";
import { verifyPaypalWebhook } from "@/lib/paypal";
import { createServiceClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const raw = await request.text();
  const ok = await verifyPaypalWebhook(request.headers, raw);
  if (!ok) {
    return NextResponse.json({ error: "invalid_signature" }, { status: 401 });
  }

  let event: {
    event_type?: string;
    resource?: {
      id?: string;
      supplementary_data?: { related_ids?: { order_id?: string } };
      custom_id?: string;
    };
  };
  try {
    event = JSON.parse(raw) as typeof event;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (event.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
    return NextResponse.json({ ok: true, ignored: event.event_type });
  }

  const captureId = event.resource?.id || null;
  const paypalOrderId =
    event.resource?.supplementary_data?.related_ids?.order_id || null;

  if (!paypalOrderId) {
    return NextResponse.json({ ok: true, skipped: "no_order_id" });
  }

  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  try {
    const result = await markOrderPaid(supabase, {
      paypalOrderId,
      captureId,
      rawPayload: event,
    });
    return NextResponse.json({ ok: true, orderNo: result?.orderNo ?? null });
  } catch (e) {
    console.error("webhook mark paid", e);
    return NextResponse.json({ error: "db_failed" }, { status: 500 });
  }
}
