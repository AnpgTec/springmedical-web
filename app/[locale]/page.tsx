import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { homeContent } from "@/content/home";
import { t } from "@/content/i18n/ui";
import { isLocale, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  return {
    title: pick(homeContent.metaTitle, locale),
    description: pick(homeContent.metaDescription, locale),
    alternates: {
      languages: {
        "zh-HK": "/zh-HK",
        "zh-CN": "/zh-CN",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = homeContent;

  return (
    <PageShell locale={locale} active="home" pathWithoutLocale="">
      <section className="hero">
        <div className="hero-slides" aria-hidden="true">
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-slide-1.jpg')" }} />
          <div className="hero-slide" style={{ backgroundImage: "url('/images/hero-slide-2.jpg')" }} />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-copy">
          <span className="eyebrow">{c.heroEyebrow}</span>
          <h1>{c.heroTitle}</h1>
          <p>{pick(c.heroLead, locale)}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={href(locale, "treatments")}>
              {t(locale, "cta_explore")}
            </Link>
            <Link className="btn btn-ghost" href={href(locale, "contact")}>
              {t(locale, "cta_consult")}
            </Link>
          </div>
        </div>
        <div className="hero-brand-mark" aria-hidden="true">
          SM
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <span className="eyebrow">{c.aboutEyebrow}</span>
            <h2>{pick(c.aboutTitle, locale)}</h2>
            <hr className="gold-rule" />
            <p className="lede">{pick(c.aboutLead, locale)}</p>
            {pick(c.aboutBody, locale) ? (
              <p className="muted">{pick(c.aboutBody, locale)}</p>
            ) : null}
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href={href(locale, "about")}>
                {t(locale, "know_brand")}
              </Link>
              <Link className="btn btn-ghost" href={href(locale, "treatments")}>
                {t(locale, "cta_explore")}
              </Link>
            </div>
          </div>
          <div className="media-frame media-frame--img about-carousel reveal">
            <div className="about-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-1.jpg" alt="Spring Medical" />
            </div>
            <div className="about-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-2.jpg" alt="Spring Medical" />
            </div>
            <div className="about-dots" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{c.catsEyebrow}</span>
              <h2>{pick(c.catsTitle, locale)}</h2>
              <p className="lede">{pick(c.catsLead, locale)}</p>
            </div>
            <Link className="btn btn-ghost" href={href(locale, "treatments")}>
              {t(locale, "view_all")}
            </Link>
          </div>
          <div className="grid-3">
            {c.categoryCards.map((card) => (
              <Link key={card.id} className="feature-tile reveal" href={href(locale, card.href)}>
                <div className="tile-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={t(locale, card.titleKey)} />
                </div>
                <div className="tile-body">
                  <div className="num">{card.num}</div>
                  <h3>{t(locale, card.titleKey)}</h3>
                  <p>{pick(card.desc, locale)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="media-frame media-frame--img reveal" style={{ height: 360 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/antiaging-1.jpg" alt="" />
          </div>
          <div className="reveal">
            <span className="eyebrow">{c.longevityEyebrow}</span>
            <h2>{pick(c.longevityTitle, locale)}</h2>
            <hr className="gold-rule" />
            <p className="lede">{pick(c.longevityLead, locale)}</p>
            <Link className="btn btn-primary" href={href(locale, "knowledge")} style={{ marginTop: 24 }}>
              {t(locale, "read_knowledge")}
            </Link>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{c.popularEyebrow}</span>
              <h2>{pick(c.popularTitle, locale)}</h2>
            </div>
          </div>
          <div className="treatment-list">
            {c.popular.map((item) => (
              <Link
                key={item.id}
                className="treatment-row reveal"
                href={href(locale, `treatments/${item.id}`)}
              >
                <div>
                  <h3>{pick(item.title, locale)}</h3>
                  <p>{pick(item.desc, locale)}</p>
                </div>
                <span className="btn btn-ghost">{t(locale, "learn_more")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <span className="eyebrow" style={{ color: "#e8d5c4" }}>
            {c.ctaEyebrow}
          </span>
          <h2 style={{ margin: "12px 0 14px" }}>{pick(c.ctaTitle, locale)}</h2>
          <hr className="gold-rule" />
          <p className="lede">{pick(c.ctaLead, locale)}</p>
          <div className="hero-actions">
            <Link className="btn btn-light" href={href(locale, "contact")}>
              {t(locale, "cta_consult")}
            </Link>
            <Link
              className="btn btn-ghost"
              style={{ borderColor: "rgba(255,252,250,.3)", color: "#fff" }}
              href={href(locale, "shop")}
            >
              {t(locale, "nav_shop")}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
