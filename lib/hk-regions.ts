import type { Locale } from "@/lib/i18n";

export const HK_SHIPPING_REGIONS = [
  { value: "hong_kong_island", zhHK: "香港島", zhCN: "香港岛", en: "Hong Kong Island" },
  { value: "kowloon", zhHK: "九龍", zhCN: "九龙", en: "Kowloon" },
  { value: "new_territories", zhHK: "新界", zhCN: "新界", en: "New Territories" },
] as const;

export type HkShippingRegion = (typeof HK_SHIPPING_REGIONS)[number]["value"];

export function isHkShippingRegion(value: string): value is HkShippingRegion {
  return HK_SHIPPING_REGIONS.some((r) => r.value === value);
}

export function hkRegionLabel(value: string, locale: Locale): string {
  const region = HK_SHIPPING_REGIONS.find((r) => r.value === value);
  if (!region) return value;
  if (locale === "zh-CN") return region.zhCN;
  if (locale === "en") return region.en;
  return region.zhHK;
}
