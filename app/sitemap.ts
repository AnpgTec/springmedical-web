import type { MetadataRoute } from "next";
import { articles } from "@/content/knowledge/articles";
import { treatments } from "@/content/treatments/catalog";
import { treatmentCategories } from "@/content/treatments/categories";
import { locales } from "@/lib/i18n";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.springmedical.hk";

const staticPaths = ["", "about", "contact", "terms", "treatments", "knowledge", "shop"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of staticPaths) {
      entries.push({
        url: `${site}/${locale}${p ? `/${p}` : ""}`,
        changeFrequency: "weekly",
        priority: p === "" ? 1 : 0.7,
      });
    }
    for (const c of treatmentCategories) {
      entries.push({
        url: `${site}/${locale}/treatments/${c.id}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const t of treatments) {
      entries.push({
        url: `${site}/${locale}/treatments/${t.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const a of articles) {
      entries.push({
        url: `${site}/${locale}/knowledge/${a.id}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
