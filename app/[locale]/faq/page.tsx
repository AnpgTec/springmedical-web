import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { clinicFaqs, faqPage, faqTreatmentIds, type FaqItem } from "@/content/faq";
import { t } from "@/content/i18n/ui";
import { getTreatment } from "@/content/treatments/catalog";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

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
  const locale = raw as Locale;
  return {
    title: pick(faqPage.metaTitle, locale),
    description: pick(faqPage.metaDescription, locale),
    alternates: {
      languages: {
        "zh-HK": "/zh-HK/faq",
        "zh-CN": "/zh-CN/faq",
        en: "/en/faq",
      },
    },
  };
}

function FaqList({ items, locale }: { items: FaqItem[]; locale: Locale }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={pick(item.q, locale)}>
          <summary>{pick(item.q, locale)}</summary>
          <p>{pick(item.a, locale)}</p>
        </details>
      ))}
    </div>
  );
}

export default async function FaqRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const treatmentBlocks = faqTreatmentIds.flatMap((id) => {
    const treatment = getTreatment(id);
    if (!treatment) return [];
    return [{ treatment, faqs: treatment.faqs }];
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...clinicFaqs.map((item) => ({
        "@type": "Question",
        name: pick(item.q, locale),
        acceptedAnswer: { "@type": "Answer", text: pick(item.a, locale) },
      })),
      ...treatmentBlocks.flatMap(({ faqs }) =>
        faqs.map((item) => ({
          "@type": "Question",
          name: pick(item.q, locale),
          acceptedAnswer: { "@type": "Answer", text: pick(item.a, locale) },
        }))
      ),
    ],
  };

  return (
    <PageShell locale={locale} pathWithoutLocale="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{pick(faqPage.crumb, locale)}</span>
          </div>
          <span className="eyebrow">{faqPage.eyebrow}</span>
          <h1>{pick(faqPage.title, locale)}</h1>
          <p className="lede">{pick(faqPage.lead, locale)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2>{pick(faqPage.clinicTitle, locale)}</h2>
            </div>
          </div>
          <div className="reveal">
            <FaqList items={clinicFaqs} locale={locale} />
            <p style={{ marginTop: 20 }}>
              <Link href={href(locale, "treatments")}>{t(locale, "nav_treatments")}</Link>
              {" · "}
              <Link href={href(locale, "contact")}>{t(locale, "nav_contact")}</Link>
            </p>
          </div>

          <div className="section-head reveal" style={{ marginTop: 64 }}>
            <div>
              <h2>{pick(faqPage.treatmentsTitle, locale)}</h2>
            </div>
          </div>
          {treatmentBlocks.map(({ treatment, faqs }) => (
            <div key={treatment.id} className="faq-block reveal">
              <h3>
                <Link href={href(locale, `treatments/${treatment.slug}`)}>
                  {pick(treatment.title, locale)}
                </Link>
              </h3>
              <FaqList items={faqs} locale={locale} />
              <p style={{ marginTop: 8 }}>
                <Link href={href(locale, `treatments/${treatment.slug}`)}>
                  {pick(faqPage.viewTreatment, locale)}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
