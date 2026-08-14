import { readFileSync, writeFileSync } from "node:fs";

const payload = JSON.parse(readFileSync("scripts/seed-payload.json", "utf8"));

function toAsciiJson(obj) {
  return JSON.stringify(obj).replace(/[\u007f-\uffff]/g, (ch) => {
    return "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0");
  });
}

function insertSql(rows) {
  const json = toAsciiJson(rows);
  return `insert into public.products (
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
}

function wrap(name, slugs) {
  const rows = slugs.map((slug) => payload.find((p) => p.slug === slug));
  if (rows.some((r) => !r)) throw new Error(name);
  const sql = insertSql(rows);
  const b64 = Buffer.from(sql, "utf8").toString("base64");
  const wrapper = `do $body$\nbegin\n  execute convert_from(decode('${b64}', 'base64'), 'utf8');\nend\n$body$;`;
  writeFileSync(`scripts/seed-b64-${name}.sql`, wrapper, "utf8");
  console.log(name, rows.length, wrapper.length);
}

wrap("m1", ["4ha-hydrating-filler-serum", "follicle-repair-serum"]);
wrap("m2", ["centella-anti-inflammatory-repair-serum", "fast-growing-bamboo-serum", "hydra-magnet-mask"]);
wrap("e1", ["dry-or-normal-skin-kit", "hydrating-firming-mask", "rapid-recovery-treatment-kit"]);
wrap("e2", ["lytic-gel-cleanser", "gentle-cream-cleanser", "normal-or-combination-skin-kit", "anti-inflammatory-acne-cream"]);
