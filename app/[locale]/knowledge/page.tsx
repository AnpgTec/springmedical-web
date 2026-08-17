import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { L } from "@/content/i18n/ui";
import {
  articleCover,
  articlesBySection,
  type KnowledgeArticle,
} from "@/content/knowledge/articles";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

const copy = {
  metaTitle: L("知識庫｜Spring Medical", "知识库｜Spring Medical", "Knowledge Base｜Spring Medical"),
  crumb: L("知識庫", "知识库", "Knowledge"),
  title: L("知識庫", "知识库", "Knowledge Base"),
  lead: L(
    "醫美知識與長壽醫學並存，幫助你理解療程原理、細胞再生與長期健康管理。",
    "医美知识与长寿医学并存，帮助你理解疗程原理、细胞再生与长期健康管理。",
    "Aesthetic knowledge and longevity medicine together — treatments, cell regeneration and long-term health."
  ),
  jumpAesthetic: L("醫美知識專區", "医美知识专区", "Aesthetic knowledge"),
  jumpLongevity: L("長壽醫學專區", "长寿医学专区", "Longevity medicine"),
  aestheticEyebrow: "Aesthetic Knowledge",
  aestheticTitle: L("醫美知識專區", "医美知识专区", "Aesthetic knowledge"),
  aestheticLead: L(
    "儀器、針劑與皮膚修復相關文章，協助你理解療程原理與選擇重點。",
    "仪器、针剂与皮肤修复相关文章，协助你理解疗程原理与选择重点。",
    "Devices, injectables and skin repair — how treatments work and what to consider."
  ),
  longevityEyebrow: "Longevity Medicine",
  longevityTitle: L("長壽醫學專區", "长寿医学专区", "Longevity medicine"),
  longevityLead: L(
    "以幹細胞與再生醫學為起點，認識細胞層面的抗衰老思維。內容屬知識分享，實際方案需經專業評估。",
    "以干细胞与再生医学为起点，认识细胞层面的抗衰老思维。内容属知识分享，实际方案需经专业评估。",
    "Stem cells and regenerative medicine as a starting point. Educational only — plans need clinical assessment."
  ),
};

function JumpArrow() {
  return (
    <span className="knowledge-jump-arrow" aria-hidden="true">
      <svg
        viewBox="0 0 48 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h36M32 4l12 8-12 8" />
      </svg>
    </span>
  );
}

function ArticleGrid({
  locale,
  items,
}: {
  locale: Locale;
  items: KnowledgeArticle[];
}) {
  return (
    <div className="grid-3">
      {items.map((a) => (
        <Link
          key={a.id}
          className="article-card reveal"
          href={href(locale, `knowledge/${a.id}`)}
        >
          <div
            className="thumb"
            style={{
              backgroundImage: `url('${articleCover(a) || "/images/knowledge-cover-1.jpg"}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="body">
            {a.eyebrow ? <span className="eyebrow">{a.eyebrow}</span> : null}
            <h3>{pick(a.title, locale)}</h3>
            <p className="muted">{pick(a.excerpt, locale)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

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

export default async function KnowledgeIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const aesthetic = articlesBySection("aesthetic");
  const longevity = articlesBySection("longevity");

  return (
    <PageShell locale={locale} active="knowledge" pathWithoutLocale="knowledge">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{pick(copy.crumb, locale)}</span>
          </div>
          <span className="eyebrow">Knowledge Base</span>
          <h1>{pick(copy.title, locale)}</h1>
          <p className="lede">{pick(copy.lead, locale)}</p>
          <div className="knowledge-jump">
            <a className="knowledge-jump-link" href="#aesthetic">
              <span>{pick(copy.jumpAesthetic, locale)}</span>
              <JumpArrow />
            </a>
            <a className="knowledge-jump-link" href="#longevity">
              <span>{pick(copy.jumpLongevity, locale)}</span>
              <JumpArrow />
            </a>
          </div>
        </div>
      </section>
      <section className="section" id="aesthetic">
        <div className="container">
          <div className="knowledge-zone-head reveal">
            <span className="eyebrow">{copy.aestheticEyebrow}</span>
            <h2>{pick(copy.aestheticTitle, locale)}</h2>
            <p className="lede">{pick(copy.aestheticLead, locale)}</p>
          </div>
          <ArticleGrid locale={locale} items={aesthetic} />
        </div>
      </section>
      <section className="section mist" id="longevity">
        <div className="container">
          <div className="knowledge-zone-head reveal">
            <span className="eyebrow">{copy.longevityEyebrow}</span>
            <h2>{pick(copy.longevityTitle, locale)}</h2>
            <p className="lede">{pick(copy.longevityLead, locale)}</p>
          </div>
          <ArticleGrid locale={locale} items={longevity} />
        </div>
      </section>
    </PageShell>
  );
}
