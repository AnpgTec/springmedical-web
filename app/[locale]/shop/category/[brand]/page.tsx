import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { L, t } from "@/content/i18n/ui";
import {
  brandName,
  formatHKD,
  getBrandBySlug,
  listOnSaleProducts,
  productImageUrl,
  productTitle,
} from "@/lib/catalog";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

export const revalidate = 60;

export async function generateStaticParams() {
  // Brands are dynamic from DB — prerender locale shells only
  return locales.map((locale) => ({ locale, brand: "dermaquest" }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}): Promise<Metadata> {
  const { locale: raw, brand: slug } = await params;
  if (!isLocale(raw)) return {};
  const b = await getBrandBySlug(slug);
  if (!b) return {};
  const locale = raw as Locale;
  return { title: `${brandName(b, locale)}｜Spring Medical` };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  const { locale: raw, brand: slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const brand = await getBrandBySlug(slug);
  if (!brand) notFound();
  const products = await listOnSaleProducts({ brandId: brand.id });

  return (
    <PageShell locale={locale} active="shop" pathWithoutLocale={`shop/category/${slug}`}>
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <Link href={href(locale, "shop")}>{t(locale, "nav_shop")}</Link>
            <span> / </span>
            <span>{brandName(brand, locale)}</span>
          </div>
          <span className="eyebrow">Brand</span>
          <h1>{brandName(brand, locale)}</h1>
          <p className="lede muted">
            {pick(
              L(
                `共 ${products.length} 件商品`,
                `共 ${products.length} 件商品`,
                `${products.length} products`
              ),
              locale
            )}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid-3">
          {products.map((p) => (
            <Link
              key={p.id}
              className="shop-card reveal"
              href={href(locale, `shop/product/${p.slug}`)}
            >
              <div
                className="thumb"
                style={{
                  backgroundImage: `url('${productImageUrl(p.image_paths)}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="body">
                <h3>{productTitle(p, locale)}</h3>
                <div className="price">{formatHKD(Number(p.price_hkd))}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
