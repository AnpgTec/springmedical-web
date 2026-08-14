import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { L, t } from "@/content/i18n/ui";
import {
  brandName,
  formatHKD,
  listActiveBrands,
  listOnSaleProducts,
  productImageUrl,
  productTitle,
  resolveBrand,
} from "@/lib/catalog";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";

export const revalidate = 60;

const copy = {
  metaTitle: L("網上商店｜Spring Medical", "网上商店｜Spring Medical", "Shop｜Spring Medical"),
  crumb: L("網上商店", "网上商店", "Shop"),
  title: L("精選護膚品牌", "精选护肤品牌", "Curated skincare brands"),
  brandsTitle: L("產品分類", "产品分类", "Categories"),
  featuredTitle: L("熱門商品", "热门商品", "Featured products"),
  empty: L(
    "暫無上架商品，請稍後再試。",
    "暂无上架商品，请稍后再试。",
    "No products on sale yet. Please check back soon."
  ),
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

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const [brands, products] = await Promise.all([
    listActiveBrands(),
    listOnSaleProducts({ limit: 6 }),
  ]);

  return (
    <PageShell locale={locale} active="shop" pathWithoutLocale="shop">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{pick(copy.crumb, locale)}</span>
          </div>
          <span className="eyebrow">Online Shop</span>
          <h1>{pick(copy.title, locale)}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Brands</span>
              <h2>{pick(copy.brandsTitle, locale)}</h2>
            </div>
          </div>
          <div className="brand-circles">
            {brands.map((b) => (
              <Link
                key={b.id}
                className="brand-circle reveal"
                href={href(locale, `shop/category/${b.slug}`)}
              >
                <h3>{brandName(b, locale)}</h3>
              </Link>
            ))}
          </div>
          <div className="section-head reveal" style={{ marginTop: 48 }}>
            <div>
              <span className="eyebrow">Featured</span>
              <h2>{pick(copy.featuredTitle, locale)}</h2>
            </div>
          </div>
          {products.length === 0 ? (
            <p className="muted">{pick(copy.empty, locale)}</p>
          ) : (
            <div className="grid-3">
              {products.map((p) => {
                const brand = resolveBrand(p);
                return (
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
                      <span className="eyebrow">
                        {brand ? brandName(brand, locale) : ""}
                      </span>
                      <h3>{productTitle(p, locale)}</h3>
                      <div className="price">{formatHKD(Number(p.price_hkd))}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          <p className="muted" style={{ marginTop: 24 }}>
            {t(locale, "shop_items_count", { n: products.length })}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
