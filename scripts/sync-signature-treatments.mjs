/**
 * Append demo signature treatments missing from the Web catalog
 * (ultherapy, scar-repair, pigmentation) without rewriting existing entries.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const root = path.resolve(__dirname, "../..");
const detailPath = path.join(root, "demo/website/treatments/detail.html");
const demoImages = path.join(root, "demo/website/images");
const webImages = path.join(webRoot, "public/images");

const IDS = ["ultherapy", "scar-repair", "pigmentation"];

const EN = {
  ultherapy: {
    title: "Ultherapy PRIME Second-Generation Ultrasound",
    summary:
      "FDA-cleared non-invasive ultrasound lift with DeepSEE™ real-time imaging, delivering energy to the SMAS layer to stimulate gradual collagen renewal, improve laxity and reshape contours.",
    body: "Ultherapy PRIME is an FDA-cleared non-invasive ultrasound lift. DeepSEE™ real-time imaging helps the physician visualise tissue (to about 6 mm) and place micro-focused ultrasound (MFU-V) at the SMAS and dermis to stimulate collagen and elastin. Different transducer depths support SMAS structure, deep dermal firming, and finer work on thinner areas such as around the eyes. Results typically build over weeks to months, with no specific downtime.",
    faq: [
      [
        "How soon will I see improvement after Ultherapy PRIME?",
        "Collagen renewal is gradual. Some notice subtle change early; clearer results often appear over weeks to months, depending on your skin and aftercare.",
      ],
      [
        "Does Ultherapy PRIME hurt?",
        "You may feel brief warmth or a dull ache when energy reaches the target layer. The physician can adjust settings and comfort measures to your tolerance.",
      ],
      [
        "How does Ultherapy differ from radiofrequency?",
        "Ultherapy focuses ultrasound at deeper SMAS for structural support and contour; RF typically heats a broader dermal volume for overall firmness and texture. A consultation can advise one or a combination.",
      ],
      [
        "What is new in Ultherapy PRIME?",
        "PRIME upgrades DeepSEE™ imaging and the operating system so the physician can see tissue more clearly and place energy more precisely, often with a more comfortable session.",
      ],
    ],
  },
  "scar-repair": {
    title: "Atrophic Acne Scar Repair",
    summary:
      "Ice-pick, boxcar and rolling scars are structural dermal collapse — not surface pigment. We type the scar first, then rebuild with staged combination care.",
    body: "Atrophic acne scars form when dermal collagen and elastin collapse. Ice-pick, boxcar and rolling types need different tactics; a single laser for every scar often fails. Care may include subcision for tethered rolling scars, fractional CO₂ for ice-pick and boxcar pits, and personalised aftercare while new collagen organises. Interval and course depend on skin thickness and healing — not a one-size package.",
    faq: [
      [
        "How do acne scars differ from leftover marks?",
        "True pitted scars are structural dermal collapse, not surface pigment. Whitening creams cannot rebuild the dermis; treatment starts with typing the scar.",
      ],
      [
        "Why did several laser courses not help?",
        "Using one device for every pit type is a common reason. Ice-pick, boxcar and rolling scars need different plans; we assess morphology before treating.",
      ],
      [
        "How many sessions are needed?",
        "It varies. Review is often every 4–6 months. Some need yearly maintenance; more fragile skin may need longer between sessions for collagen to settle.",
      ],
      [
        "What aftercare is required?",
        "The first month is key for collagen remodelling. We prescribe repair products and review progress rather than ending care after a single visit.",
      ],
    ],
  },
  pigmentation: {
    title: "Resistant Pigment Disorders",
    summary:
      "A last-resort approach for PIH, nevus of Ota and congenital / stubborn pigment — diagnosis first, then staged combination treatment.",
    body: "Many pigment problems are mixed-depth or misdiagnosed. Post-inflammatory hyperpigmentation, nevus of Ota and congenital melanocytic lesions need wavelength, depth and interval chosen after assessment — not a single ‘spot laser’. We emphasise diagnosis, realistic expectations and full-cycle aftercare, including the rebound-pigment period.",
    faq: [
      [
        "What is PIH and why does it happen?",
        "Post-inflammatory hyperpigmentation can follow lasers, injury or hormonal change. We use staged breakdown plus personalised repair rather than bleaching the surface only.",
      ],
      [
        "Can ordinary lasers remove nevus of Ota?",
        "Nevus of Ota sits in deep dermis; superficial lasers often cannot reach it. Specific deeper wavelengths are used to fragment abnormal pigment while protecting nearby tissue.",
      ],
      [
        "Are café-au-lait / congenital spots untreatable?",
        "For poorly bordered or mixed congenital pigment we use a staged, layered plan rather than a single laser, aiming for gradual fade that is realistic and safer.",
      ],
      [
        "What happens at the first visit?",
        "Most time goes to skin analysis and tracing causes. Mixed pigment must be unpacked before treatment; we discuss risk and expectations rather than selling a course on the spot.",
      ],
    ],
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

function fmtLocalized(obj) {
  return `{ "zh-HK": \`${esc(obj["zh-HK"])}\`, "zh-CN": \`${esc(obj["zh-CN"])}\`, en: \`${esc(obj.en)}\` }`;
}

function toImg(p) {
  if (!p) return undefined;
  return p.replace(/^\.\.\/images\//, "/images/").replace(/\?.*$/, "");
}

function bodyFromLoc(loc) {
  if (loc.html) {
    return loc.html.replace(/<p class="dt-gallery-cta">[\s\S]*?<\/p>/g, "").trim();
  }
  if (loc.sections?.length) {
    return loc.sections.map((s) => `<h3>${s.t}</h3><p>${s.b}</p>`).join("");
  }
  if (loc.body) return `<p>${loc.body}</p>`;
  if (loc.lede) return `<p>${loc.lede}</p>`;
  return "<p></p>";
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log("copied", path.relative(webRoot, dest));
}

for (const name of [
  "ultherapy-prime-main.jpg",
  "scar-repair-main.jpg",
  "pigmentation-main.jpg",
  "thermage-flx-main.jpg",
]) {
  copyFile(path.join(demoImages, name), path.join(webImages, name));
}

const pigDir = path.join(demoImages, "pigmentation");
if (fs.existsSync(pigDir)) {
  for (const name of fs.readdirSync(pigDir)) {
    copyFile(path.join(pigDir, name), path.join(webImages, "pigmentation", name));
  }
}

const html = fs.readFileSync(detailPath, "utf8");
const catalog = extractJsObject(html, "catalog");

let block = "";
for (const id of IDS) {
  const raw = catalog[id];
  if (!raw) throw new Error(`Missing demo treatment ${id}`);
  const hk = raw.zhHk;
  const cn = raw.zhCn || raw.zhHk;
  const en = EN[id];
  const faqs = (hk.faq || []).map((pair, i) => {
    const cnPair = (cn.faq || [])[i] || pair;
    const enPair = en.faq[i] || [en.title, en.summary];
    return {
      q: { "zh-HK": pair[0], "zh-CN": cnPair[0], en: enPair[0] },
      a: { "zh-HK": pair[1], "zh-CN": cnPair[1], en: enPair[1] },
    };
  });

  const extra =
    id === "pigmentation"
      ? `    gallery: ${JSON.stringify(
          [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/pigmentation/${n}.jpg`)
        )},\n`
      : "";

  block += `  {
    id: ${JSON.stringify(id)},
    category: "signature",
    slug: ${JSON.stringify(id)},
    title: ${fmtLocalized({ "zh-HK": raw.title, "zh-CN": cn === hk ? raw.title : (id === "ultherapy" ? "Ultherapy PRIME 第二代超声波" : id === "scar-repair" ? "凹凸洞疤痕修复" : "顽固性色素疾病治疗"), en: en.title })},
    summary: ${fmtLocalized({ "zh-HK": hk.lede, "zh-CN": cn.lede, en: en.summary })},
    bodyHtml: ${fmtLocalized({ "zh-HK": bodyFromLoc(hk), "zh-CN": bodyFromLoc(cn), en: `<p>${en.body}</p>` })},
    image: ${JSON.stringify(toImg(raw.image))},
${extra}    faqs: [
${faqs.map((f) => `      { q: ${fmtLocalized(f.q)}, a: ${fmtLocalized(f.a)} }`).join(",\n")}
    ],
  },
`;
}

const dest = path.join(webRoot, "content/treatments/catalog.ts");
let src = fs.readFileSync(dest, "utf8");

if (!src.includes("gallery?: string[]")) {
  src = src.replace(
    "  image?: string;\n  faqs: TreatmentFaq[];",
    "  image?: string;\n  gallery?: string[];\n  faqs: TreatmentFaq[];"
  );
}

if (src.includes('id: "ultherapy"')) {
  console.log("ultherapy already in catalog; skip append");
} else {
  const marker = `  {\n    id: "hair-care",`;
  if (!src.includes(marker)) throw new Error("hair-care marker not found");
  src = src.replace(marker, `${block}${marker}`);
  console.log("appended ultherapy, scar-repair, pigmentation");
}

fs.writeFileSync(dest, src, "utf8");
console.log("wrote catalog.ts");
