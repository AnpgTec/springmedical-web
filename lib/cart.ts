export const CART_COOKIE = "sm_cart_v1";

export type CartItem = { productId: string; qty: number; price?: number };
export type CartPayload = { items: CartItem[]; updatedAt: string };

export function emptyCart(): CartPayload {
  return { items: [], updatedAt: new Date().toISOString() };
}

export function parseCart(raw: string | undefined | null): CartPayload {
  if (!raw) return emptyCart();
  try {
    const data = JSON.parse(raw) as CartPayload;
    if (!Array.isArray(data.items)) return emptyCart();
    return {
      items: data.items
        .filter((i) => i && typeof i.productId === "string" && Number(i.qty) > 0)
        .map((i) => ({
          productId: i.productId,
          qty: Math.min(99, Math.floor(Number(i.qty))),
          price: Number(i.price) > 0 ? Number(i.price) : undefined,
        })),
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  } catch {
    return emptyCart();
  }
}

export function serializeCart(cart: CartPayload): string {
  return JSON.stringify({
    items: cart.items,
    updatedAt: new Date().toISOString(),
  });
}

export function upsertItem(
  cart: CartPayload,
  productId: string,
  qtyDelta: number,
  price?: number
): CartPayload {
  const items = [...cart.items];
  const idx = items.findIndex((i) => i.productId === productId);
  if (idx === -1) {
    if (qtyDelta > 0) items.push({ productId, qty: Math.min(99, qtyDelta), price });
  } else {
    const next = items[idx].qty + qtyDelta;
    if (next <= 0) items.splice(idx, 1);
    else {
      items[idx] = {
        productId,
        qty: Math.min(99, next),
        price: price ?? items[idx].price,
      };
    }
  }
  return { items, updatedAt: new Date().toISOString() };
}

export function cartQty(cart: CartPayload): number {
  return cart.items.reduce((s, i) => s + i.qty, 0);
}

export function cartAmount(cart: CartPayload): number | null {
  if (cart.items.some((i) => !(Number(i.price) > 0))) return null;
  return cart.items.reduce((s, i) => s + Number(i.price) * i.qty, 0);
}
