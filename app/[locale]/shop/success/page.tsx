import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SuccessClient } from "@/components/SuccessClient";
import { L } from "@/content/i18n/ui";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";

const copy = {
  metaTitle: L("訂單成功｜Spring Medical", "订单成功｜Spring Medical", "Order success｜Spring Medical"),
  title: L("謝謝您的訂購", "谢谢您的订购", "Thank you for your order"),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: pick(copy.metaTitle, raw as Locale) };
}

export default async function SuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ order_no?: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const sp = await searchParams;
  const orderNo = (sp.order_no || "").trim();

  return (
    <PageShell locale={locale} active="shop" pathWithoutLocale="shop/success">
      <section className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">Success</span>
          <h1>{pick(copy.title, locale)}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container reveal">
          <SuccessClient locale={locale} orderNo={orderNo} />
        </div>
      </section>
    </PageShell>
  );
}
