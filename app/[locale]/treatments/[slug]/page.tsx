import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
import { PageShell } from "@/components/PageShell";
import { TreatmentGallery } from "@/components/TreatmentGallery";
import { t } from "@/content/i18n/ui";
import { getCategory, treatmentCategories } from "@/content/treatments/categories";
import {
  getTreatment,
  treatments,
  type Treatment,
} from "@/content/treatments/catalog";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

export function generateStaticParams() {
  const slugs = [
    ...treatmentCategories.map((c) => c.id),
    ...treatments.map((tr) => tr.slug),
  ];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const cat = getCategory(slug);
  if (cat) {
    return { title: `${pick(cat.title, locale)}｜Spring Medical` };
  }
  const tr = getTreatment(slug);
  if (tr) {
    return {
      title: `${pick(tr.title, locale)}｜Spring Medical`,
      description: pick(tr.summary, locale),
    };
  }
  return {};
}

function CategoryView({
  locale,
  categoryId,
}: {
  locale: Locale;
  categoryId: string;
}) {
  const cat = getCategory(categoryId)!;
  const items = cat.treatmentIds
    .map((id) => treatments.find((x) => x.id === id))
    .filter((x): x is Treatment => Boolean(x));

  return (
    <PageShell
      locale={locale}
      active="treatments"
      activeCategory={cat.id}
      pathWithoutLocale={`treatments/${cat.id}`}
    >
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <Link href={href(locale, "treatments")}>{t(locale, "nav_treatments")}</Link>
            <span>/</span>
            <span>{pick(cat.title, locale)}</span>
          </div>
          <span className="eyebrow">{pick(cat.title, "en")}</span>
          <h1>{pick(cat.title, locale)}</h1>
          <p className="lede">{pick(cat.lede, locale)}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="treatment-list">
            {items.map((item) => (
              <Link
                key={item.id}
                className="treatment-row reveal"
                href={href(locale, `treatments/${item.slug}`)}
              >
                <div>
                  <h3>{pick(item.title, locale)}</h3>
                  <p>{pick(item.summary, locale)}</p>
                </div>
                <span className="btn btn-ghost">{t(locale, "learn_more")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function DetailView({ locale, treatment }: { locale: Locale; treatment: Treatment }) {
  const cat = getCategory(treatment.category);

  return (
    <PageShell
      locale={locale}
      active="treatments"
      activeCategory={treatment.category}
      pathWithoutLocale={`treatments/${treatment.slug}`}
    >
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            {cat ? (
              <Link href={href(locale, `treatments/${cat.id}`)}>
                {pick(cat.title, locale)}
              </Link>
            ) : (
              <Link href={href(locale, "treatments")}>{t(locale, "nav_treatments")}</Link>
            )}
            <span>/</span>
            <span>{pick(treatment.title, locale)}</span>
          </div>
          <span className="eyebrow">{cat ? pick(cat.title, locale) : "Treatment"}</span>
          <h1>{pick(treatment.title, locale)}</h1>
          <p className="lede">{pick(treatment.summary, locale)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2 detail-grid">
          <div className="reveal">
            {treatment.image ? (
              <div
                className="media-frame media-frame--img"
                style={
                  treatment.id === "ultherapy" || treatment.id === "thermage"
                    ? { height: "auto", aspectRatio: "1 / 1" }
                    : treatment.id === "scar-repair" || treatment.id === "pigmentation" || treatment.id === "pico"
                      ? { height: "auto", aspectRatio: "4 / 5" }
                      : treatment.id === "m22"
                        ? { height: "auto", aspectRatio: "2358 / 2780" }
                        : { height: 380 }
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={treatment.image} alt={pick(treatment.title, locale)} />
              </div>
            ) : null}
            <h2 style={{ marginTop: 28 }}>
              {locale === "en" ? "About this treatment" : locale === "zh-CN" ? "疗程说明" : "療程說明"}
            </h2>
            <hr className="gold-rule" />
            <div
              className="rich-content muted"
              dangerouslySetInnerHTML={{ __html: pick(treatment.bodyHtml, locale) }}
            />
            {treatment.points?.length ? (
              <ul className="treatment-points muted">
                {treatment.points.map((point, i) => (
                  <li key={i}>{pick(point, locale)}</li>
                ))}
              </ul>
            ) : null}
            {treatment.gallery?.length ? (
              <TreatmentGallery images={treatment.gallery} locale={locale} />
            ) : null}
          </div>
          <div className="reveal">
            <div className="feature-tile" style={{ padding: 28 }}>
              <h3>
                {locale === "en"
                  ? "Book this treatment"
                  : locale === "zh-CN"
                    ? "预约此疗程"
                    : "預約此療程"}
              </h3>
              <BookingForm
                locale={locale}
                options={[]}
                defaultProduct={pick(treatment.title, locale)}
                compact
                source="treatment"
                sourceRef={treatment.slug}
              />
            </div>
          </div>
        </div>
      </section>

      {treatment.faqs.length > 0 ? (
        <section className="section mist">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2>
                  {locale === "en" ? "FAQ" : locale === "zh-CN" ? "常见问题" : "常見問題"}
                </h2>
              </div>
            </div>
            <div className="faq reveal">
              {treatment.faqs.map((f, i) => (
                <details key={i}>
                  <summary>{pick(f.q, locale)}</summary>
                  <p>{pick(f.a, locale)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}

export default async function TreatmentSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  if (getCategory(slug)) {
    return <CategoryView locale={locale} categoryId={slug} />;
  }
  const treatment = getTreatment(slug);
  if (treatment) {
    return <DetailView locale={locale} treatment={treatment} />;
  }
  notFound();
}
