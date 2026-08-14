import type { Locale } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/server";

export type BrandRow = {
  id: string;
  slug: string;
  name_zh_hk: string;
  name_zh_cn: string;
  name_en: string;
  sort: number;
  status: number;
};

export type ProductRow = {
  id: string;
  brand_id: string;
  slug: string;
  title_zh_hk: string;
  title_zh_cn: string;
  title_en: string;
  description_zh_hk: string | null;
  description_zh_cn: string | null;
  description_en: string | null;
  price_hkd: number;
  stock: number;
  image_paths: string[];
  status: string;
  sort: number;
  brands?: BrandRow | BrandRow[] | null;
};

export function brandName(b: BrandRow, locale: Locale): string {
  if (locale === "zh-CN") return b.name_zh_cn;
  if (locale === "en") return b.name_en;
  return b.name_zh_hk;
}

export function productTitle(p: ProductRow, locale: Locale): string {
  if (locale === "zh-CN") return p.title_zh_cn;
  if (locale === "en") return p.title_en;
  return p.title_zh_hk;
}

export function productDescription(p: ProductRow, locale: Locale): string {
  if (locale === "zh-CN") return p.description_zh_cn || p.description_zh_hk || "";
  if (locale === "en") return p.description_en || p.description_zh_hk || "";
  return p.description_zh_hk || "";
}

const PRODUCT_IMAGE_FALLBACK = "/images/products/p1.svg";

function productImageSrc(path: string | undefined | null): string {
  if (!path) return PRODUCT_IMAGE_FALLBACK;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return PRODUCT_IMAGE_FALLBACK;
  let key = path;
  if (key.startsWith("/images/products/")) {
    key = `seed/${key.slice("/images/products/".length)}`;
  } else if (key.startsWith("/")) {
    return PRODUCT_IMAGE_FALLBACK;
  }
  return `${base}/storage/v1/object/public/product-images/${key}`;
}

/** Cover image: first `image_paths` entry. */
export function productImageUrl(paths: string[] | null | undefined): string {
  return productImageSrc(paths?.[0]);
}

/** All product images for detail gallery / carousel. */
export function productImageUrls(paths: string[] | null | undefined): string[] {
  const list = (paths || []).map((p) => p?.trim()).filter(Boolean) as string[];
  if (!list.length) return [PRODUCT_IMAGE_FALLBACK];
  return list.map((p) => productImageSrc(p));
}

export function formatHKD(amount: number): string {
  return `HK$${Number(amount).toLocaleString("en-HK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export async function listActiveBrands(): Promise<BrandRow[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("status", 1)
    .order("sort", { ascending: false });
  if (error) throw error;
  return (data ?? []) as BrandRow[];
}

export async function getBrandBySlug(slug: string): Promise<BrandRow | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("slug", slug)
    .eq("status", 1)
    .maybeSingle();
  if (error) throw error;
  return data as BrandRow | null;
}

export async function listOnSaleProducts(opts?: {
  brandId?: string;
  limit?: number;
}): Promise<ProductRow[]> {
  const supabase = createClient();
  let q = supabase
    .from("products")
    .select("*, brands(*)")
    .eq("status", "on_sale")
    .order("sort", { ascending: false });
  if (opts?.brandId) q = q.eq("brand_id", opts.brandId);
  if (opts?.limit) q = q.limit(opts.limit);
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as ProductRow[];
}

export async function getProductBySlug(slug: string): Promise<ProductRow | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(*)")
    .eq("slug", slug)
    .eq("status", "on_sale")
    .maybeSingle();
  if (error) throw error;
  return data as ProductRow | null;
}

export function resolveBrand(p: ProductRow): BrandRow | null {
  const b = p.brands;
  if (!b) return null;
  return Array.isArray(b) ? b[0] ?? null : b;
}
