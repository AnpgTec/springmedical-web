import { NextResponse } from "next/server";
import { isFulfillment, isPaymentMethod } from "@/lib/checkout-options";
import { isHkShippingRegion } from "@/lib/hk-regions";
import { makeOrderNo } from "@/lib/orders";
import { createServiceClient } from "@/lib/supabase/server";
import { isLocale, type Locale } from "@/lib/i18n";

type CartLine = { productId: string; qty: number };

type Body = {
  items: CartLine[];
  customer_name: string;
  email: string;
  phone: string;
  fulfillment?: string;
  payment_method?: string;
  address?: {
    line1?: string;
    district?: string;
    region?: string;
    postal_code?: string;
  };
  note?: string;
  locale?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (body.customer_name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const fulfillment = isFulfillment(body.fulfillment || "pickup")
    ? body.fulfillment || "pickup"
    : null;
  const payment_method = isPaymentMethod(body.payment_method || "in_store")
    ? body.payment_method || "in_store"
    : null;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!fulfillment) {
    return NextResponse.json({ error: "invalid_fulfillment" }, { status: 400 });
  }
  if (!payment_method) {
    return NextResponse.json({ error: "invalid_payment_method" }, { status: 400 });
  }

  const line1 = (body.address?.line1 || "").trim();
  const district = (body.address?.district || "").trim();
  if (fulfillment === "delivery") {
    if (!line1 || !district) {
      return NextResponse.json({ error: "missing_address" }, { status: 400 });
    }
    if (!isHkShippingRegion(district)) {
      return NextResponse.json({ error: "invalid_district" }, { status: 400 });
    }
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: "empty_cart" }, { status: 400 });
  }

  const locale: Locale = isLocale(body.locale || "") ? (body.locale as Locale) : "zh-HK";

  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return NextResponse.json(
      { error: "server_misconfigured", detail: "SUPABASE_SERVICE_ROLE_KEY required" },
      { status: 500 }
    );
  }

  const ids = body.items.map((i) => i.productId);
  const { data: products, error: pErr } = await supabase
    .from("products")
    .select(
      "id, slug, title_zh_hk, title_zh_cn, title_en, price_hkd, stock, status"
    )
    .in("id", ids)
    .eq("status", "on_sale");

  if (pErr) {
    return NextResponse.json({ error: "catalog_failed", detail: pErr.message }, { status: 500 });
  }

  const byId = new Map((products || []).map((p) => [p.id, p]));
  const lines: Array<{
    product_id: string;
    title_snapshot_zh_hk: string;
    title_snapshot_zh_cn: string;
    title_snapshot_en: string;
    unit_price_hkd: number;
    qty: number;
    line_amount_hkd: number;
  }> = [];

  let amount = 0;
  for (const item of body.items) {
    const qty = Math.floor(Number(item.qty));
    if (!item.productId || qty < 1) {
      return NextResponse.json({ error: "invalid_item" }, { status: 400 });
    }
    const p = byId.get(item.productId);
    if (!p) {
      return NextResponse.json({ error: "product_unavailable", productId: item.productId }, { status: 400 });
    }
    const unit = Number(p.price_hkd);
    const lineAmount = Math.round(unit * qty * 100) / 100;
    amount += lineAmount;
    lines.push({
      product_id: p.id,
      title_snapshot_zh_hk: p.title_zh_hk,
      title_snapshot_zh_cn: p.title_zh_cn,
      title_snapshot_en: p.title_en,
      unit_price_hkd: unit,
      qty,
      line_amount_hkd: lineAmount,
    });
  }
  amount = Math.round(amount * 100) / 100;
  if (amount <= 0) {
    return NextResponse.json({ error: "invalid_amount" }, { status: 400 });
  }

  const orderNo = makeOrderNo();
  const address_json =
    fulfillment === "delivery"
      ? {
          fulfillment,
          line1,
          district,
          region: "HK",
          postal_code: (body.address?.postal_code || "").trim().slice(0, 16),
        }
      : { fulfillment: "pickup" };

  const { data: order, error: oErr } = await supabase
    .from("orders")
    .insert({
      order_no: orderNo,
      status: "pending_payment",
      currency: "HKD",
      amount_hkd: amount,
      customer_name: name,
      email,
      phone,
      address_json,
      fulfillment,
      payment_method,
      locale,
      note: (body.note || "").trim() || null,
    })
    .select("id, order_no, amount_hkd")
    .single();

  if (oErr || !order) {
    return NextResponse.json(
      { error: "order_create_failed", detail: oErr?.message },
      { status: 500 }
    );
  }

  const { error: iErr } = await supabase.from("order_items").insert(
    lines.map((l) => ({
      order_id: order.id,
      ...l,
    }))
  );
  if (iErr) {
    await supabase.from("orders").delete().eq("id", order.id);
    return NextResponse.json({ error: "items_failed", detail: iErr.message }, { status: 500 });
  }

  await supabase.from("payments").insert({
    order_id: order.id,
    provider: "in_store",
    amount_hkd: order.amount_hkd,
    status: "created",
  });

  return NextResponse.json({
    ok: true,
    orderNo: order.order_no,
    orderId: order.id,
    amountHkd: Number(order.amount_hkd),
  });
}
