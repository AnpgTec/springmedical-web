import type { Locale } from "@/lib/i18n";

export const FULFILLMENTS = ["pickup", "delivery"] as const;
export type Fulfillment = (typeof FULFILLMENTS)[number];

export const PAYMENT_METHODS = ["in_store"] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export function isFulfillment(value: string): value is Fulfillment {
  return (FULFILLMENTS as readonly string[]).includes(value);
}

export function isPaymentMethod(value: string): value is PaymentMethod {
  return (PAYMENT_METHODS as readonly string[]).includes(value);
}

export function fulfillmentLabel(value: string, locale: Locale): string {
  if (value === "delivery") {
    return locale === "en" ? "Delivery" : locale === "zh-CN" ? "邮寄配送" : "郵寄配送";
  }
  return locale === "en" ? "Store pickup" : locale === "zh-CN" ? "自行取货" : "自行取貨";
}

export function paymentMethodLabel(value: string, locale: Locale): string {
  if (value === "paypal") return "PayPal";
  return locale === "en" ? "Pay in store" : locale === "zh-CN" ? "到店支付" : "到店支付";
}
