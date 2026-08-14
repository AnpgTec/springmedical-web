"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CART_COOKIE,
  cartAmount,
  cartQty,
  parseCart,
  type CartPayload,
} from "@/lib/cart";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

function readCart(): CartPayload {
  if (typeof document === "undefined") return { items: [], updatedAt: "" };
  const match = document.cookie.match(new RegExp(`(?:^|; )${CART_COOKIE}=([^;]*)`));
  const raw = match ? decodeURIComponent(match[1]) : "";
  return parseCart(raw);
}

function formatCartHKD(amount: number): string {
  return `HK$ ${Number(amount).toLocaleString("en-HK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export function CartBadge({ locale }: { locale: Locale }) {
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const sync = async () => {
      const cart = readCart();
      const nextQty = cartQty(cart);
      const cached = cartAmount(cart);
      setQty(nextQty);
      if (cached !== null) {
        setTotal(cached);
        return;
      }
      if (cart.items.length === 0) {
        setTotal(0);
        return;
      }
      try {
        const ids = cart.items.map((i) => i.productId).join(",");
        const res = await fetch(
          `/api/catalog/products?ids=${encodeURIComponent(ids)}&locale=${locale}`
        );
        const data = (await res.json()) as { products?: { productId: string; price: number }[] };
        if (cancelled) return;
        const byId = new Map((data.products || []).map((p) => [p.productId, p.price]));
        setTotal(
          cart.items.reduce((s, i) => s + (byId.get(i.productId) || 0) * i.qty, 0)
        );
      } catch {
        if (!cancelled) setTotal(0);
      }
    };

    void sync();
    const onChange = () => void sync();
    window.addEventListener("sm-cart-change", onChange);
    window.addEventListener("focus", onChange);
    return () => {
      cancelled = true;
      window.removeEventListener("sm-cart-change", onChange);
      window.removeEventListener("focus", onChange);
    };
  }, [locale]);

  return (
    <Link className="cart-btn" href={href(locale, "shop/checkout")} aria-label="Shopping cart">
      <span className="cart-icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7.2 14h9.9c.9 0 1.7-.6 1.9-1.5l1.6-6.2A1 1 0 0 0 19.7 5H6.2L5.8 3.4A1 1 0 0 0 4.8 2.7H2.5a1 1 0 1 0 0 2h1.5l2.6 10.2A2.9 2.9 0 0 0 7.2 16H18a1 1 0 1 0 0-2H7.2Z"
          />
        </svg>
        <span className={`cart-badge${qty > 0 ? "" : " is-hidden"}`}>{qty}</span>
      </span>
      <span className="cart-meta">
        <strong>{formatCartHKD(total)}</strong>
      </span>
    </Link>
  );
}
