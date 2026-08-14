/**
 * Upload seed shop photos to Supabase Storage and point products.image_paths at storage keys.
 * Reads SpringMedical-Web/.env.local (service role). Staging only unless env points elsewhere.
 */
import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const imagesDir = path.join(webRoot, "public/images/products");

function loadEnv(file) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

loadEnv(path.join(webRoot, ".env.local"));

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error("Need NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");

const supabase = createClient(url, key, { auth: { persistSession: false } });

const files = fs
  .readdirSync(imagesDir)
  .filter((n) => /^prod-\d+@2x\.jpg$/i.test(n))
  .sort((a, b) => {
    const na = Number(a.match(/\d+/)[0]);
    const nb = Number(b.match(/\d+/)[0]);
    return na - nb;
  });

if (files.length !== 22) {
  console.warn(`expected 22 @2x jpg files, found ${files.length}`);
}

for (const name of files) {
  const local = path.join(imagesDir, name);
  const keyPath = `seed/${name}`;
  const buf = fs.readFileSync(local);
  const { error } = await supabase.storage.from("product-images").upload(keyPath, buf, {
    contentType: "image/jpeg",
    upsert: true,
  });
  if (error) throw new Error(`${keyPath}: ${error.message}`);
  console.log("uploaded", keyPath, buf.length);
}

const { data: rows, error: qErr } = await supabase
  .from("products")
  .select("id, slug, image_paths");
if (qErr) throw qErr;

let updated = 0;
for (const row of rows || []) {
  const paths = Array.isArray(row.image_paths) ? row.image_paths : [];
  const next = paths.map((p) => {
    if (typeof p !== "string") return p;
    if (p.startsWith("/images/products/")) return `seed/${p.slice("/images/products/".length)}`;
    return p;
  });
  if (JSON.stringify(next) === JSON.stringify(paths)) continue;
  const { error } = await supabase.from("products").update({ image_paths: next }).eq("id", row.id);
  if (error) throw new Error(`${row.slug}: ${error.message}`);
  updated += 1;
  console.log("updated", row.slug, next.join(", "));
}

const sample = "seed/prod-1@2x.jpg";
const publicUrl = `${url}/storage/v1/object/public/product-images/${sample}`;
const res = await fetch(publicUrl, { method: "HEAD" });
console.log("verify", publicUrl, res.status);
if (!res.ok) throw new Error(`public read failed: ${res.status}`);
console.log(`done. files=${files.length} rows_updated=${updated}`);
