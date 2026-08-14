"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CART_COOKIE,
  emptyCart,
  parseCart,
  serializeCart,
  upsertItem,
  type CartPayload,
} from "@/lib/cart";
import { formatHKD } from "@/lib/catalog";
import {
  fulfillmentLabel,
  paymentMethodLabel,
  type Fulfillment,
} from "@/lib/checkout-options";
import { HK_SHIPPING_REGIONS, isHkShippingRegion } from "@/lib/hk-regions";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";
import { t } from "@/content/i18n/ui";

type Line = {
  productId: string;
  qty: number;
  slug: string;
  title: string;
  price: number;
  image: string;
};

type GuestForm = {
  customer_name: string;
  email: string;
  phone: string;
  fulfillment: Fulfillment;
  district: string;
  line1: string;
  postal_code: string;
  note: string;
};

function txt(locale: Locale, zhHK: string, zhCN: string, en: string): string {
  if (locale === "en") return en;
  if (locale === "zh-CN") return zhCN;
  return zhHK;
}

function readRawCookie(): string {
  const match = document.cookie.match(new RegExp(`(?:^|; )${CART_COOKIE}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function writeCart(cart: CartPayload) {
  const maxAge = 60 * 60 * 24 * 14;
  document.cookie = `${CART_COOKIE}=${encodeURIComponent(serializeCart(cart))}; path=/; max-age=${maxAge}; samesite=lax`;
  window.dispatchEvent(new Event("sm-cart-change"));
}

function clearCartCookie() {
  document.cookie = `${CART_COOKIE}=; path=/; max-age=0; samesite=lax`;
  window.dispatchEvent(new Event("sm-cart-change"));
}

export function CheckoutClient({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [cart, setCart] = useState<CartPayload>(emptyCart());
  const [lines, setLines] = useState<Line[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<GuestForm>({
    customer_name: "",
    email: "",
    phone: "",
    fulfillment: "pickup",
    district: "",
    line1: "",
    postal_code: "",
    note: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const delivery = form.fulfillment === "delivery";

  const refresh = useCallback(async () => {
    const c = parseCart(readRawCookie());
    setCart(c);
    if (c.items.length === 0) {
      setLines([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const ids = c.items.map((i) => i.productId).join(",");
    try {
      const res = await fetch(
        `/api/catalog/products?ids=${encodeURIComponent(ids)}&locale=${locale}`
      );
      const data = (await res.json()) as { products?: Omit<Line, "qty">[] };
      const byId = new Map((data.products || []).map((p) => [p.productId, p]));
      setLines(
        c.items
          .map((i) => {
            const p = byId.get(i.productId);
            if (!p) return null;
            return { ...p, qty: i.qty };
          })
          .filter(Boolean) as Line[]
      );
    } finally {
      setLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const total = useMemo(
    () => lines.reduce((s, l) => s + l.price * l.qty, 0),
    [lines]
  );

  async function changeQty(productId: string, delta: number) {
    const next = upsertItem(parseCart(readRawCookie()), productId, delta);
    writeCart(next);
    setCart(next);
    await refresh();
  }

  async function minusQty(line: Line) {
    if (line.qty <= 1) {
      const ok = window.confirm(
        txt(
          locale,
          `確定要從購物車移除「${line.title}」嗎？`,
          `确定要从购物车移除「${line.title}」吗？`,
          `Remove “${line.title}” from the cart?`
        )
      );
      if (!ok) return;
    }
    await changeQty(line.productId, -1);
  }

  function updateField<K extends keyof GuestForm>(key: K, value: GuestForm[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submitOrder() {
    setError("");
    if (!form.customer_name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError(
        txt(
          locale,
          "請填寫姓名、電郵與電話。",
          "请填写姓名、电邮与电话。",
          "Please fill in name, email and phone."
        )
      );
      return;
    }
    if (delivery && (!form.line1.trim() || !isHkShippingRegion(form.district))) {
      setError(
        txt(
          locale,
          "請填寫郵寄地區與詳細地址。",
          "请填写邮寄地区与详细地址。",
          "Please fill in shipping region and address."
        )
      );
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/checkout/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.items,
          customer_name: form.customer_name,
          email: form.email,
          phone: form.phone,
          fulfillment: form.fulfillment,
          payment_method: "in_store",
          address: delivery
            ? {
                line1: form.line1,
                district: form.district,
                region: "HK",
                postal_code: form.postal_code,
              }
            : undefined,
          note: form.note,
          locale,
        }),
      });
      const data = (await res.json()) as {
        error?: string;
        detail?: string;
        orderNo?: string;
      };
      if (!res.ok || !data.orderNo) {
        throw new Error(data.detail || data.error || "create_failed");
      }
      clearCartCookie();
      router.push(href(locale, `shop/success?order_no=${data.orderNo}`));
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : txt(locale, "無法建立訂單。", "无法建立订单。", "Could not create the order.")
      );
    } finally {
      setBusy(false);
    }
  }

  if (loading && lines.length === 0 && cart.items.length > 0) {
    return <p className="muted">…</p>;
  }

  if (lines.length === 0) {
    return (
      <div>
        <p className="lede">{t(locale, "cart_empty")}</p>
        <Link className="btn btn-primary" href={href(locale, "shop")} style={{ marginTop: 16 }}>
          {t(locale, "nav_shop")}
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-layout">
      <div className="feature-tile reveal" style={{ padding: 28 }}>
        <h3>{txt(locale, "聯絡資料", "联络资料", "Contact details")}</h3>
        <div className="form-grid" style={{ marginTop: 20 }}>
          <div className="field">
            <label>{t(locale, "name_label")}</label>
            <input
              required
              placeholder={txt(locale, "請輸入姓名", "请输入姓名", "Your name")}
              value={form.customer_name}
              onChange={(e) => updateField("customer_name", e.target.value)}
            />
          </div>
          <div className="field">
            <label>{t(locale, "phone_field")}</label>
            <input
              required
              placeholder={txt(locale, "請輸入電話", "请输入电话", "Phone number")}
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>
          <div className="field full">
            <label>{t(locale, "email_label")} *</label>
            <input
              type="email"
              required
              placeholder="name@email.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>
        </div>

        <h3 style={{ margin: "28px 0 12px" }}>{txt(locale, "郵寄方式", "邮寄方式", "Fulfillment")}</h3>
        <label className="pay-option">
          <input
            type="radio"
            name="fulfillment"
            value="pickup"
            checked={form.fulfillment === "pickup"}
            onChange={() => updateField("fulfillment", "pickup")}
          />
          <span>
            <strong>{fulfillmentLabel("pickup", locale)}</strong>
          </span>
        </label>
        <label className="pay-option">
          <input
            type="radio"
            name="fulfillment"
            value="delivery"
            checked={form.fulfillment === "delivery"}
            onChange={() => updateField("fulfillment", "delivery")}
          />
          <span>
            <strong>{fulfillmentLabel("delivery", locale)}</strong>
          </span>
        </label>
        {!delivery ? (
          <p className="muted" style={{ marginTop: 12, fontSize: 13 }}>
            {txt(locale, "取貨地點：", "取货地点：", "Pickup at: ")}
            {t(locale, "footer_address")}
          </p>
        ) : (
          <div className="form-grid" style={{ marginTop: 16 }}>
            <div className="field">
              <label>{txt(locale, "郵寄地區（香港） *", "邮寄地区（香港） *", "Shipping region (Hong Kong) *")}</label>
              <select
                required
                value={form.district}
                onChange={(e) => updateField("district", e.target.value)}
              >
                <option value="">{txt(locale, "請選擇大區", "请选择大区", "Select region")}</option>
                {HK_SHIPPING_REGIONS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {locale === "en" ? r.en : locale === "zh-CN" ? r.zhCN : r.zhHK}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>{txt(locale, "郵政編碼（選填）", "邮政编码（选填）", "Postcode (optional)")}</label>
              <input
                value={form.postal_code}
                onChange={(e) => updateField("postal_code", e.target.value)}
                autoComplete="postal-code"
              />
            </div>
            <div className="field full">
              <label>{txt(locale, "詳細地址 *", "详细地址 *", "Address *")}</label>
              <input
                required
                placeholder={txt(locale, "街道、大廈、室號", "街道、大厦、室号", "Street, building, unit")}
                value={form.line1}
                onChange={(e) => updateField("line1", e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="form-grid" style={{ marginTop: 16 }}>
          <div className="field full">
            <label>{t(locale, "note_label")}</label>
            <textarea value={form.note} onChange={(e) => updateField("note", e.target.value)} />
          </div>
        </div>

        <h3 style={{ margin: "28px 0 12px" }}>{txt(locale, "支付方式", "支付方式", "Payment")}</h3>
        <label className="pay-option">
          <input type="radio" name="payment" value="in_store" checked readOnly />
          <span>
            <strong>{paymentMethodLabel("in_store", locale)}</strong>
          </span>
        </label>

        {error ? (
          <p className="form-note" style={{ color: "#b33", marginTop: 12 }}>
            {error}
          </p>
        ) : null}

        <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            className="btn btn-primary"
            type="button"
            disabled={busy}
            onClick={() => void submitOrder()}
          >
            {busy
              ? txt(locale, "提交中…", "提交中…", "Submitting…")
              : txt(locale, "確認訂單", "确认订单", "Confirm order")}
          </button>
          <Link className="btn btn-ghost" href={href(locale, "shop")}>
            {txt(locale, "繼續購物", "继续购物", "Continue shopping")}
          </Link>
        </div>
      </div>

      <aside className="order-summary reveal">
        <h3>{txt(locale, "訂單摘要", "订单摘要", "Order summary")}</h3>
        {lines.map((l) => (
          <div key={l.productId} className="cart-line">
            <div className="cart-line-row">
              <strong>
                <Link href={href(locale, `shop/product/${l.slug}`)}>{l.title}</Link>
              </strong>
              <span className="cart-unit">{formatHKD(l.price)}</span>
            </div>
            <div className="cart-line-row">
              <div className="qty-control">
                <button type="button" aria-label="−" onClick={() => void minusQty(l)}>
                  −
                </button>
                <span className="qty-num">{l.qty}</span>
                <button type="button" aria-label="＋" onClick={() => void changeQty(l.productId, 1)}>
                  ＋
                </button>
              </div>
              <strong className="cart-subtotal">{formatHKD(l.price * l.qty)}</strong>
            </div>
          </div>
        ))}
        <div className="cart-line cart-line-total">
          <strong>{txt(locale, "合計", "合计", "Total")}</strong>
          <strong>{formatHKD(total)}</strong>
        </div>
      </aside>
    </div>
  );
}
