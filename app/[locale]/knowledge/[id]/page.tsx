import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { t } from "@/content/i18n/ui";
import { articleNeighbors, articles, getArticle } from "@/content/knowledge/articles";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles.map((a) => ({ locale, id: a.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale: raw, id } = await params;
  if (!isLocale(raw)) return {};
  const article = getArticle(id);
  if (!article) return {};
  const locale = raw as Locale;
  return {
    title: `${pick(article.title, locale)}｜Spring Medical`,
    description: pick(article.excerpt, locale),
  };
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: raw, id } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const article = getArticle(id);
  if (!article) notFound();
  const { prev, next } = articleNeighbors(article.id);

  return (
    <PageShell
      locale={locale}
      active="knowledge"
      pathWithoutLocale={`knowledge/${article.id}`}
    >
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <Link href={href(locale, "knowledge")}>{t(locale, "nav_knowledge")}</Link>
            <span>/</span>
            <span>{pick(article.title, locale)}</span>
          </div>
          {article.eyebrow ? <span className="eyebrow">{article.eyebrow}</span> : null}
          <h1>{pick(article.title, locale)}</h1>
          <p className="lede">{pick(article.excerpt, locale)}</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {article.image ? (
            <div className="media-frame media-frame--img reveal" style={{ height: 360, marginBottom: 28 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt={pick(article.title, locale)} />
            </div>
          ) : null}
          <div
            className="rich-content reveal"
            dangerouslySetInnerHTML={{ __html: pick(article.body, locale) }}
          />
          <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href={href(locale, "contact")}>
              {t(locale, "cta_consult")}
            </Link>
            <Link className="btn btn-ghost" href={href(locale, "knowledge")}>
              {t(locale, "back_knowledge")}
            </Link>
          </div>
          <nav className="article-pager" aria-label={t(locale, "nav_knowledge")}>
            {prev ? (
              <Link className="pager-link pager-prev" href={href(locale, `knowledge/${prev.id}`)}>
                <span className="pager-arrow">←</span>
                <span className="pager-meta">
                  <span className="pager-label">{t(locale, "pager_prev")}</span>
                  <span className="pager-title">{pick(prev.title, locale)}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="pager-link pager-next" href={href(locale, `knowledge/${next.id}`)}>
                <span className="pager-meta">
                  <span className="pager-label">{t(locale, "pager_next")}</span>
                  <span className="pager-title">{pick(next.title, locale)}</span>
                </span>
                <span className="pager-arrow">→</span>
              </Link>
            ) : null}
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
