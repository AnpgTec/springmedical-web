import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { L } from "@/content/i18n/ui";
import { treatmentCategories } from "@/content/treatments/categories";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

const copy = {
  metaTitle: L("療程導航｜Spring Medical", "疗程导航｜Spring Medical", "Treatments｜Spring Medical"),
  crumb: L("療程導航", "疗程导航", "Treatments"),
  title: L("按需求探索專業方案", "按需求探索专业方案", "Explore treatments by need"),
  leads: {
    signature: L(
      "BTL 系列、Thermage FLX、Ultherapy PRIME、二氧化碳激光、M22 光子嫩膚、凹凸洞疤痕修復、頑固性色素治療等。",
      "BTL 系列、Thermage FLX、Ultherapy PRIME、二氧化碳激光、M22 光子嫩肤、凹凸洞疤痕修复、顽固性色素治疗等。",
      "BTL devices, Thermage FLX, Ultherapy PRIME, CO₂ laser, M22, acne-scar repair, resistant pigment and more."
    ),
    hair: L(
      "強化毛囊增髮，改善脫髮相關困擾。",
      "强化毛囊增发，改善脱发相关困扰。",
      "Follicle support and hair-loss care."
    ),
    injectables: L(
      "透明質酸、肉毒桿菌、童顏針、少女針等。",
      "透明质酸、肉毒杆菌、童颜针、少女针等。",
      "HA fillers, toxins and biostimulators."
    ),
    wellness: L(
      "Virtual Gym 激纖易。",
      "Virtual Gym 激纤易。",
      "Virtual Gym body contouring."
    ),
    beauty: L(
      "豐胸、微針、孕睫術、回甲療程。",
      "丰胸、微针、孕睫术、回甲疗程。",
      "Breast care, microneedling, lash and nail therapies."
    ),
  } as Record<string, ReturnType<typeof L>>,
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

export default async function TreatmentsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <PageShell locale={locale} active="treatments" pathWithoutLocale="treatments">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{pick(copy.crumb, locale)}</span>
          </div>
          <span className="eyebrow">Treatments</span>
          <h1>{pick(copy.title, locale)}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container grid-3">
          {treatmentCategories.map((cat, i) => (
            <Link
              key={cat.id}
              className="feature-tile text-tile reveal"
              href={href(locale, `treatments/${cat.id}`)}
            >
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{pick(cat.title, locale)}</h3>
              <p>{pick(copy.leads[cat.id], locale)}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
