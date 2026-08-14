import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckoutClient } from "@/components/CheckoutClient";
import { PageShell } from "@/components/PageShell";
import { L } from "@/content/i18n/ui";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

const copy = {
  metaTitle: L("結帳｜Spring Medical", "结账｜Spring Medical", "Checkout｜Spring Medical"),
  crumbShop: L("網上商店", "网上商店", "Shop"),
  crumbCheckout: L("結帳", "结账", "Checkout"),
  title: L("訂單填寫", "订单填写", "Checkout"),
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

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <PageShell locale={locale} active="shop" pathWithoutLocale="shop/checkout">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <Link href={href(locale, "shop")}>{pick(copy.crumbShop, locale)}</Link>
            <span>/</span>
            <span>{pick(copy.crumbCheckout, locale)}</span>
          </div>
          <span className="eyebrow">Checkout</span>
          <h1>{pick(copy.title, locale)}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CheckoutClient locale={locale} />
        </div>
      </section>
    </PageShell>
  );
}
