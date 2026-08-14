"use client";

import { useState } from "react";
import { CART_COOKIE, parseCart, serializeCart, upsertItem } from "@/lib/cart";
import type { Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

function writeCartCookie(value: string) {
  const maxAge = 60 * 60 * 24 * 14;
  document.cookie = `${CART_COOKIE}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
  window.dispatchEvent(new Event("sm-cart-change"));
}

export function AddToCartButton({
  locale,
  productId,
  price,
}: {
  locale: Locale;
  productId: string;
  price: number;
}) {
  const [msg, setMsg] = useState("");

  function add() {
    const match = document.cookie.match(new RegExp(`(?:^|; )${CART_COOKIE}=([^;]*)`));
    const raw = match ? decodeURIComponent(match[1]) : "";
    const next = upsertItem(parseCart(raw), productId, 1, price);
    writeCartCookie(serializeCart(next));
    setMsg(t(locale, "added_cart"));
    setTimeout(() => setMsg(""), 2000);
  }

  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={add}>
        {locale === "en" ? "Add to cart" : locale === "zh-CN" ? "加入购物车" : "加入購物車"}
      </button>
      {msg ? <p className="muted" style={{ marginTop: 10 }}>{msg}</p> : null}
    </div>
  );
}
