export const locales = ["zh-HK", "zh-CN", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-HK";

export type LocalizedString = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function pick<T>(map: Record<Locale, T>, locale: Locale): T {
  return map[locale] ?? map[defaultLocale];
}

export function loc(zhHK: string, zhCN: string, en: string): LocalizedString {
  return { "zh-HK": zhHK, "zh-CN": zhCN, en };
}
