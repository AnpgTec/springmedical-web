/**
 * Append demo longevity articles 33–36 into content/knowledge/articles.ts
 * (does not rewrite existing aesthetic articles).
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const root = path.resolve(__dirname, "../..");
const require = createRequire(import.meta.url);
const OpenCC = require("opencc-js");
const converter = OpenCC.Converter({ from: "hk", to: "cn" });

const ARTICLE_EN = {
  "33": {
    title: "What Are Stem Cells? A Longevity Primer on Cell Regeneration",
    excerpt:
      "Stem cells self-renew and can differentiate. Understanding their role in tissue repair helps you see anti-ageing and regeneration clearly.",
    body: "Stem cells are the body’s repair reserve. In longevity talk, adult MSCs and their paracrine products (exosomes, growth factors) matter more than growing new organs. Lab findings are not clinical guarantees; any cell-based plan needs a qualified medical team.",
  },
  "34": {
    title: "Mesenchymal Stem Cells (MSC): Repair, Immune Modulation and Inflammaging",
    excerpt:
      "MSC is among the most discussed stem-cell types in longevity medicine — less about new organs, more about inflammation and the repair niche.",
    body: "MSCs from marrow, fat or umbilical tissue act mainly via paracrine signals. Source, viability and preparation differ widely. They are not fillers; evidence must be separated from marketing.",
  },
  "35": {
    title: "Exosomes and Stem-Cell Factors: Why Regenerative Medicine Is Watching",
    excerpt:
      "Exosomes are message parcels between cells. Knowing how they relate to stem cells helps separate science from marketing.",
    body: "Exosomes carry proteins and nucleic acids that may influence inflammation and repair signalling. Mechanism hypotheses are not proven indications. Ask about source, purification, trial design and route of use.",
  },
  "36": {
    title: "Before a Stem-Cell Treatment: Source, Expectations and Safety",
    excerpt:
      "Compliant source, suitable candidates and realistic expectations matter more than any reverse-age slogan.",
    body: "Safety and regulation come before results. Distinguish live cells, lysates, exosomes and growth factors. Red flags include no consultation, guaranteed youth, and replacing all medical or aesthetic care.",
  },
};

function extractJsObject(html, varName) {
  const re = new RegExp(`const ${varName} = (\\{[\\s\\S]*?\\n\\s*\\});`);
  const m = html.match(re);
  if (!m) throw new Error(`Could not find ${varName}`);
  return new Function(`return (${m[1]})`)();
}

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function toImg(p) {
  if (!p) return undefined;
  return p.replace(/^\.\.\/images\//, "/images/").replace(/\?.*$/, "");
}

const html = fs.readFileSync(path.join(root, "demo/website/knowledge/article.html"), "utf8");
const map = extractJsObject(html, "articles");

let block = "";
for (const id of ["33", "34", "35", "36"]) {
  const raw = map[id];
  if (!raw) throw new Error(`Missing demo article ${id}`);
  const en = ARTICLE_EN[id];
  block += `  {
    id: ${JSON.stringify(id)},
    slug: ${JSON.stringify(id)},
    section: "longevity",
    eyebrow: ${JSON.stringify(raw.eyebrow)},
    image: ${JSON.stringify(toImg(raw.image))},
    title: { "zh-HK": \`${esc(raw.title)}\`, "zh-CN": \`${esc(converter(raw.title))}\`, en: \`${esc(en.title)}\` },
    excerpt: { "zh-HK": \`${esc(raw.lede)}\`, "zh-CN": \`${esc(converter(raw.lede))}\`, en: \`${esc(en.excerpt)}\` },
    body: { "zh-HK": \`${esc(raw.body)}\`, "zh-CN": \`${esc(converter(raw.body))}\`, en: \`${esc(`<p>${en.body}</p>`)}\` },
  },
`;
}

const dest = path.join(webRoot, "content/knowledge/articles.ts");
let src = fs.readFileSync(dest, "utf8");
if (src.includes('id: "33"')) {
  console.log("articles 33–36 already present; skip append");
  process.exit(0);
}
if (!src.includes("  },\n];")) {
  throw new Error("Could not find articles array closing");
}
src = src.replace("  },\n];", `  },\n${block}];`);
fs.writeFileSync(dest, src, "utf8");
console.log("appended articles 33–36");
