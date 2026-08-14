import { NextResponse } from "next/server";
import { markOrderPaid } from "@/lib/orders";
import { capturePaypalOrder } from "@/lib/paypal";
import { createServiceClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let body: { paypalOrderId?: string };
  try {
    body = (await request.json()) as { paypalOrderId?: string };
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const paypalOrderId = (body.paypalOrderId || "").trim();
  if (!paypalOrderId) {
    return NextResponse.json({ error: "missing_paypal_order_id" }, { status: 400 });
  }

  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  let capture;
  try {
    capture = await capturePaypalOrder(paypalOrderId);
  } catch (e) {
    return NextResponse.json(
      { error: "capture_failed", detail: e instanceof Error ? e.message : "unknown" },
      { status: 502 }
    );
  }

  const captureId =
    capture.purchase_units?.[0]?.payments?.captures?.[0]?.id || null;
  const captureStatus =
    capture.purchase_units?.[0]?.payments?.captures?.[0]?.status || capture.status;

  if (captureStatus !== "COMPLETED" && capture.status !== "COMPLETED") {
    return NextResponse.json(
      { error: "not_completed", status: captureStatus },
      { status: 409 }
    );
  }

  try {
    const result = await markOrderPaid(supabase, {
      paypalOrderId,
      captureId,
      rawPayload: capture,
    });
    if (!result) {
      return NextResponse.json({ error: "order_not_found" }, { status: 404 });
    }
    return NextResponse.json({
      ok: true,
      orderNo: result.orderNo,
      alreadyPaid: result.alreadyPaid,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "db_failed", detail: e instanceof Error ? e.message : "unknown" },
      { status: 500 }
    );
  }
}
