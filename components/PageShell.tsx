import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { Locale } from "@/lib/i18n";

export function PageShell({
  locale,
  active,
  activeCategory,
  pathWithoutLocale,
  children,
}: {
  locale: Locale;
  active?: string;
  activeCategory?: string;
  pathWithoutLocale?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader
        locale={locale}
        active={active}
        activeCategory={activeCategory}
        pathWithoutLocale={pathWithoutLocale}
      />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
