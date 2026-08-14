"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CART_COOKIE } from "@/lib/cart";
import { formatHKD } from "@/lib/catalog";
import { fulfillmentLabel, paymentMethodLabel } from "@/lib/checkout-options";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

type OrderView = {
  order_no: string;
  status: string;
  amount_hkd: number;
  customer_name: string;
  email: string;
  paid_at: string | null;
  fulfillment?: string;
  payment_method?: string;
};

type ItemView = {
  title_snapshot_zh_hk: string;
  title_snapshot_zh_cn: string;
  title_snapshot_en: string;
  unit_price_hkd: number;
  qty: number;
  line_amount_hkd: number;
};

function titleFor(item: ItemView, locale: Locale) {
  if (locale === "zh-CN") return item.title_snapshot_zh_cn;
  if (locale === "en") return item.title_snapshot_en;
  return item.title_snapshot_zh_hk;
}

export function SuccessClient({
  locale,
  orderNo,
}: {
  locale: Locale;
  orderNo: string;
}) {
  const [order, setOrder] = useState<OrderView | null>(null);
  const [items, setItems] = useState<ItemView[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    document.cookie = `${CART_COOKIE}=; path=/; max-age=0; samesite=lax`;
    window.dispatchEvent(new Event("sm-cart-change"));
  }, []);

  useEffect(() => {
    if (!orderNo) {
      setError("missing");
      return;
    }
    fetch(`/api/orders/lookup?order_no=${encodeURIComponent(orderNo)}`)
      .then(async (r) => {
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || "not_found");
        setOrder(data.order);
        setItems(data.items || []);
      })
      .catch(() => setError("not_found"));
  }, [orderNo]);

  if (error) {
    return (
      <div>
        <p className="lede">
          {locale === "en"
            ? "Order not found. Please check your order number."
            : locale === "zh-CN"
              ? "找不到订单，请核对订单号。"
              : "找不到訂單，請核對訂單號。"}
        </p>
        <Link className="btn btn-primary" href={href(locale, "shop")} style={{ marginTop: 16 }}>
          {locale === "en" ? "Back to shop" : "返回商店"}
        </Link>
      </div>
    );
  }

  if (!order) return <p className="muted">…</p>;

  const paid = order.status === "paid" || order.status === "fulfilled";
  const pickup = order.fulfillment !== "delivery";

  return (
    <div>
      <p className="lede">
        {paid
          ? locale === "en"
            ? "Payment received. Thank you!"
            : locale === "zh-CN"
              ? "已收到付款，谢谢！"
              : "已收到付款，謝謝！"
          : pickup
            ? locale === "en"
              ? "Order placed. Please pay and collect at the clinic."
              : locale === "zh-CN"
                ? "订单已提交。请到店支付并取货。"
                : "訂單已提交。請到店支付並取貨。"
            : locale === "en"
              ? "Order placed. Please pay at the clinic; we will arrange delivery afterwards."
              : locale === "zh-CN"
                ? "订单已提交。请先到店支付，我们再安排配送。"
                : "訂單已提交。請先到店支付，我們再安排配送。"}
      </p>
      <p>
        <strong>
          {locale === "en" ? "Order no." : locale === "zh-CN" ? "订单号" : "訂單號"}:
        </strong>{" "}
        {order.order_no}
      </p>
      <p>
        <strong>{locale === "en" ? "Total" : locale === "zh-CN" ? "合计" : "合計"}:</strong>{" "}
        {formatHKD(Number(order.amount_hkd))}
      </p>
      <p>
        <strong>{locale === "en" ? "Email" : "電郵"}:</strong> {order.email}
      </p>
      <p>
        <strong>{locale === "en" ? "Fulfillment" : locale === "zh-CN" ? "邮寄方式" : "郵寄方式"}:</strong>{" "}
        {fulfillmentLabel(order.fulfillment || "pickup", locale)}
      </p>
      <p>
        <strong>{locale === "en" ? "Payment" : locale === "zh-CN" ? "支付方式" : "支付方式"}:</strong>{" "}
        {paymentMethodLabel(order.payment_method || "in_store", locale)}
      </p>
      <ul style={{ marginTop: 20 }}>
        {items.map((it, i) => (
          <li key={i}>
            {titleFor(it, locale)} × {it.qty} — {formatHKD(Number(it.line_amount_hkd))}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link className="btn btn-primary" href={href(locale, "shop")}>
          {locale === "en" ? "Continue shopping" : locale === "zh-CN" ? "继续购物" : "繼續購物"}
        </Link>
        <Link className="btn btn-ghost" href={href(locale)}>
          {locale === "en" ? "Home" : locale === "zh-CN" ? "首页" : "主頁"}
        </Link>
      </div>
    </div>
  );
}
