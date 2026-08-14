import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { aboutContent } from "@/content/about";
import { t } from "@/content/i18n/ui";
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
    title: pick(aboutContent.metaTitle, locale),
    description: pick(aboutContent.metaDescription, locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = aboutContent;

  return (
    <PageShell locale={locale} active="about" pathWithoutLocale="about">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{pick(c.crumb, locale)}</span>
          </div>
          <span className="eyebrow">{c.eyebrow}</span>
          <h1>{pick(c.title, locale)}</h1>
          <p className="lede">{pick(c.heroLead, locale)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>{pick(c.philosophyTitle, locale)}</h2>
            <hr className="gold-rule" />
            <p>{pick(c.philosophyBody, locale)}</p>
            <p className="muted">{pick(c.philosophyMuted, locale)}</p>
          </div>
          <div className="media-frame media-frame--img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/clinic-indoor.png" alt="Spring Medical" />
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2>{pick(c.whyTitle, locale)}</h2>
            </div>
          </div>
          <div className="grid-3">
            {c.reasons.map((r) => (
              <article key={r.num} className="feature-tile text-tile reveal">
                <div className="num">{r.num}</div>
                <h3>{pick(r.title, locale)}</h3>
                <p>{pick(r.desc, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Official Partners</span>
              <h2>{pick(c.partnersTitle, locale)}</h2>
            </div>
          </div>
          <div className="brand-wall reveal">
            <div className="brand-track">
              <div className="brand-group">
                {c.partnerLogos.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={logo.src} src={logo.src} alt={logo.alt} />
                ))}
              </div>
              <div className="brand-group" aria-hidden="true">
                {c.partnerLogos.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={`dup-${logo.src}`} src={logo.src} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <h2>{pick(c.ctaTitle, locale)}</h2>
          <p className="lede" style={{ marginTop: 12 }}>
            {pick(c.ctaHours, locale)}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" href={href(locale, "contact")}>
              {t(locale, "cta_consult")}
            </Link>
            <Link
              className="btn btn-ghost"
              style={{ borderColor: "rgba(255,252,250,.3)", color: "#fff" }}
              href={href(locale, "treatments")}
            >
              {t(locale, "cta_explore")}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
