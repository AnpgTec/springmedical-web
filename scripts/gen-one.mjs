import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const payload = JSON.parse(readFileSync("scripts/seed-payload.json", "utf8"));

function toAsciiJson(obj) {
  return JSON.stringify(obj).replace(/[\u007f-\uffff]/g, (ch) => {
    return "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0");
  });
}

mkdirSync("scripts/seed-one", { recursive: true });

for (const p of payload) {
  const json = toAsciiJson([p]);
  const sql = `insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, x.slug, x.title_zh_hk, x.title_zh_cn, x.title_en,
  x.description_zh_hk, x.description_zh_cn, x.description_en,
  x.price_hkd, x.stock, x.image_paths, 'on_sale', x.sort
from jsonb_to_recordset($json$${json}$json$::jsonb) as x(
  brand_slug text, slug text, title_zh_hk text, title_zh_cn text, title_en text,
  description_zh_hk text, description_zh_cn text, description_en text,
  price_hkd numeric, stock int, image_paths jsonb, sort int
)
join public.brands b on b.slug = x.brand_slug;`;
  const name = `${String(230 - p.sort).padStart(2, "0")}-${p.slug}.sql`;
  writeFileSync(`scripts/seed-one/${name}`, sql, "utf8");
  console.log(name, Buffer.byteLength(sql));
}
