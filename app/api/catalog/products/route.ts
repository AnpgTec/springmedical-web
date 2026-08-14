import { NextResponse } from "next/server";
import {
  productImageUrl,
  productTitle,
  type ProductRow,
} from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = (searchParams.get("ids") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const localeRaw = searchParams.get("locale") || "zh-HK";
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "zh-HK";

  if (ids.length === 0) {
    return NextResponse.json({ products: [] });
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", ids)
    .eq("status", "on_sale");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const products = ((data || []) as ProductRow[]).map((p) => ({
    productId: p.id,
    slug: p.slug,
    title: productTitle(p, locale),
    price: Number(p.price_hkd),
    image: productImageUrl(p.image_paths),
    qty: 1,
  }));

  return NextResponse.json({ products });
}
