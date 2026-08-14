import { readFileSync, writeFileSync } from "node:fs";

const sql = readFileSync("scripts/seed-shop-products.sql", "utf8");
const insertStart = sql.indexOf("insert into");
const header = sql.slice(insertStart, sql.indexOf("from (values") + "from (values".length);
const footer = sql.slice(sql.indexOf(") as v("));
const body = sql.slice(
  sql.indexOf("from (values") + "from (values".length,
  sql.indexOf(") as v(")
);

const brands = ["dermaquest", "mesoestetic", "epionce", "lanluis"];
const chunks = Object.fromEntries(brands.map((b) => [b, []]));
let cur = null;
let buf = [];

for (const line of body.split("\n")) {
  const m = line.match(/^  \(\$sm\$([^$]+)\$sm\$/);
  if (m) {
    if (cur && buf.length) chunks[cur].push(buf.join("\n"));
    cur = m[1];
    buf = [line];
  } else {
    buf.push(line);
  }
}
if (cur && buf.length) chunks[cur].push(buf.join("\n"));

for (const b of brands) {
  const vals = chunks[b].map((v, i, a) => {
    let s = v.replace(/,\s*$/, "").trimEnd();
    if (s.endsWith(",")) s = s.slice(0, -1);
    return s + (i === a.length - 1 ? "" : ",");
  });
  const out = `${header}\n${vals.join("\n")}\n${footer}`;
  writeFileSync(`scripts/seed-${b}.sql`, out);
  console.log(b, chunks[b].length, out.length);
}
