import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { t } from "@/content/i18n/ui";
import { termsBodyHtml } from "@/content/terms";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";

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
  return { title: `${t(raw as Locale, "terms_link")}｜Spring Medical` };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <PageShell locale={locale} pathWithoutLocale="terms">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{t(locale, "terms_link")}</span>
          </div>
          <span className="eyebrow">Terms &amp; Privacy</span>
          <h1>{t(locale, "terms_link")}</h1>
        </div>
      </section>
      <section className="section">
        <div
          className="container terms-body reveal"
          dangerouslySetInnerHTML={{ __html: pick(termsBodyHtml, locale) }}
        />
      </section>
    </PageShell>
  );
}
