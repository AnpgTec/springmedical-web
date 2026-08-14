import { notFound } from "next/navigation";
import { SiteEffects } from "@/components/SiteEffects";
import { WhatsAppFloat } from "@/components/SiteHeader";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return (
    <>
      {children}
      <WhatsAppFloat />
      <SiteEffects />
    </>
  );
}
