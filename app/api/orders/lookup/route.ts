import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const orderNo = new URL(request.url).searchParams.get("order_no")?.trim();
  if (!orderNo) {
    return NextResponse.json({ error: "missing_order_no" }, { status: 400 });
  }

  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const { data: order, error } = await supabase
    .from("orders")
    .select(
      "id, order_no, status, amount_hkd, currency, customer_name, email, paid_at, created_at, locale, fulfillment, payment_method"
    )
    .eq("order_no", orderNo)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!order) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const { data: orderItems } = await supabase
    .from("order_items")
    .select(
      "title_snapshot_zh_hk, title_snapshot_zh_cn, title_snapshot_en, unit_price_hkd, qty, line_amount_hkd"
    )
    .eq("order_id", order.id);

  const { id: _id, ...safeOrder } = order;
  return NextResponse.json({
    order: safeOrder,
    items: orderItems || [],
  });
}
