import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PageShell } from "@/components/PageShell";
import { ProductGallery } from "@/components/ProductGallery";
import {
  brandName,
  formatHKD,
  getProductBySlug,
  productDescription,
  productImageUrls,
  productTitle,
  resolveBrand,
} from "@/lib/catalog";
import { isLocale, pick, type Locale } from "@/lib/i18n";
import { href } from "@/lib/paths";
import { L } from "@/content/i18n/ui";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const p = await getProductBySlug(slug);
  if (!p) return {};
  return { title: `${productTitle(p, raw as Locale)}｜Spring Medical` };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const brand = resolveBrand(product);
  const description = productDescription(product, locale);

  return (
    <PageShell locale={locale} active="shop" pathWithoutLocale={`shop/product/${slug}`}>
      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <ProductGallery images={productImageUrls(product.image_paths)} alt={productTitle(product, locale)} />
          </div>
          <div className="reveal">
            <div className="crumbs">
              <Link href={href(locale, "shop")}>
                {pick(L("網上商店", "网上商店", "Shop"), locale)}
              </Link>
              {brand ? (
                <>
                  <span> / </span>
                  <Link href={href(locale, `shop/category/${brand.slug}`)}>
                    {brandName(brand, locale)}
                  </Link>
                </>
              ) : null}
            </div>
            <span className="eyebrow">{brand ? brandName(brand, locale) : ""}</span>
            <h1>{productTitle(product, locale)}</h1>
            <p className="price" style={{ fontSize: 22, margin: "12px 0 20px" }}>
              {formatHKD(Number(product.price_hkd))}
            </p>
            <div style={{ marginTop: 24 }}>
              <AddToCartButton locale={locale} productId={product.id} price={Number(product.price_hkd)} />
            </div>
            <p className="muted" style={{ marginTop: 16 }}>
              <Link href={href(locale, "shop/checkout")}>
                {locale === "en"
                  ? "View cart / checkout"
                  : locale === "zh-CN"
                    ? "查看购物车 / 结账"
                    : "查看購物車 / 結帳"}
              </Link>
            </p>
          </div>
        </div>
      </section>
      {description ? (
        <section className="section mist">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Product Details</span>
                <h2>{pick(L("詳情", "详情", "Details"), locale)}</h2>
              </div>
            </div>
            <div
              className="rich-content muted reveal"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
