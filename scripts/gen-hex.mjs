import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const payload = JSON.parse(readFileSync("scripts/seed-payload.json", "utf8"));
const remaining = [
  "fast-growing-bamboo-serum",
  "hydra-magnet-mask",
  "hydrating-firming-mask",
  "rapid-recovery-treatment-kit",
  "anti-inflammatory-acne-cream",
];

mkdirSync("scripts/seed-hex", { recursive: true });

function hex(s) {
  return Buffer.from(s, "utf8").toString("hex");
}

function stubSql(row) {
  return `insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id,
  '${row.slug}',
  convert_from(decode('${hex(row.title_zh_hk)}','hex'),'utf8'),
  convert_from(decode('${hex(row.title_zh_cn)}','hex'),'utf8'),
  '${row.title_en.replace(/'/g, "''")}',
  '', '', '',
  ${row.price_hkd}, ${row.stock},
  '${JSON.stringify(row.image_paths)}'::jsonb,
  'on_sale', ${row.sort}
from public.brands b
where b.slug = '${row.brand_slug}';`;
}

function updSql(row, col) {
  const val = hex(row[col]);
  return `update public.products
set ${col} = convert_from(decode('${val}','hex'),'utf8')
where slug = '${row.slug}';`;
}

const stubs = remaining.map((slug) => {
  const row = payload.find((p) => p.slug === slug);
  if (!row) throw new Error(slug);
  writeFileSync(`scripts/seed-hex/${slug}.stub.sql`, stubSql(row));
  for (const col of ["description_zh_hk", "description_zh_cn", "description_en"]) {
    writeFileSync(`scripts/seed-hex/${slug}.${col}.sql`, updSql(row, col));
    console.log(slug, col, updSql(row, col).length);
  }
  return stubSql(row);
});

writeFileSync("scripts/seed-hex/all-stubs.sql", stubs.join("\n\n"));
console.log("--- stubs ---");
console.log(stubs.join("\n\n"));
