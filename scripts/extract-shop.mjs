import fs from "fs";

const s = fs.readFileSync(
  "H:/work-springmedical/demo/website/assets/site.js",
  "utf8"
);
const brandMatch = s.match(/const shopBrands = (\[[\s\S]*?\]);/);
const prodMatch = s.match(/const shopProducts = (\[[\s\S]*?\]);/);
if (!brandMatch || !prodMatch) {
  console.error("parse fail");
  process.exit(1);
}
const brands = eval(brandMatch[1]);
const products = eval(prodMatch[1]).map((p) => ({
  ...p,
  image: p.image.replace("../images/", "/images/"),
}));

const out = `export type ShopBrand = { id: string; name: string };

export type ShopProduct = {
  id: string;
  brand: string;
  title: string;
  price: number;
  image: string;
  desc: string;
};

/** Product titles temporarily zh-HK for all locales. */
export const shopBrands: ShopBrand[] = ${JSON.stringify(brands, null, 2)};

export const shopProducts: ShopProduct[] = ${JSON.stringify(products, null, 2)};

export function getBrand(id: string) {
  return shopBrands.find((b) => b.id === id);
}

export function productsByBrand(id: string) {
  return shopProducts.filter((p) => p.brand === id);
}

export function featuredProducts(limit = 3) {
  return shopBrands
    .map((b) => productsByBrand(b.id)[0])
    .filter(Boolean)
    .slice(0, limit) as ShopProduct[];
}

export function formatHKD(n: number) {
  return "HK$ " + n.toLocaleString("en-HK");
}
`;

fs.writeFileSync(
  "H:/work-springmedical/SpringMedical-Web/content/shop.ts",
  out
);
console.log("ok", brands.length, products.length);
