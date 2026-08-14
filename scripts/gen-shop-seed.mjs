import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const OpenCC = require("opencc-js");
const toCN = OpenCC.Converter({ from: "hk", to: "cn" });

const dir = dirname(fileURLToPath(import.meta.url));
const products = JSON.parse(readFileSync(join(dir, "shop-products.json"), "utf8"));

const META = {
  1: {
    slug: "3d-stem-cell-hydrating-firming-serum",
    titleEn: "3D Stem Cell Hydrating Firming Serum",
    descEn: `<p>Suitable for all skin types</p>
<p>A medical-grade plant stem-cell serum with peptides and sodium hyaluronate for repair, lift, brightening and lasting hydration.</p>
<p>Key benefits</p>
<p>– Upgraded 3D hydration and lifting technology</p>
<p>– Tightens skin and helps improve wrinkles and roughness at the source</p>
<p>– Revives tired skin with a dewy glow</p>
<p>Key ingredients</p>
<p>– Gardenia stem cells</p>
<p>– Echinacea stem cells</p>
<p>– Lilac stem cells</p>
<p>– Sodium hyaluronate</p>`,
  },
  2: {
    slug: "3d-stem-cell-eye-cream",
    titleEn: "3D Stem Cell Eye Cream",
    descEn: `<p>Suitable for all skin types</p>
<p>Marine biotechnology with gardenia and sea holly stem cells, peptides and actives to target eye bags, sagging lids, dark circles and fine lines.</p>
<p>Key benefits</p>
<p>– Medical stem-cell formula for wrinkles and puffiness</p>
<p>– Rich in antioxidants</p>
<p>– Hydrates, lifts and firms the eye contour</p>
<p>Key ingredients</p>
<p>– Sea holly stem cells</p>
<p>– Gardenia stem cells</p>
<p>– Sea fennel stem cells</p>`,
  },
  3: {
    slug: "3d-stem-cell-face-eye-cream",
    titleEn: "3D Stem Cell Face & Eye Cream",
    descEn: `<p>Suitable for all skin types</p>
<p>Patented medical stem-cell cultivation for ageing skin: lift, regenerate and brighten in one cream, with a firming effect comparable to laser lifting.</p>
<p>Key benefits</p>
<p>– Brighten, repair and anti-age</p>
<p>– Soften fine lines and wrinkles</p>
<p>– Improve slackness and lift facial contours</p>
<p>– Tighten tissue and help roughness at the source</p>
<p>Key ingredients</p>
<p>– Edelweiss stem cells</p>
<p>– Gardenia stem cells</p>
<p>– Sea fennel stem cells</p>`,
  },
  4: {
    slug: "b5-intensive-concentrate-serum",
    titleEn: "B5 Intensive Concentrate Serum",
    descEn: `<p>Suitable for all skin types</p>
<p>Locks moisture into the skin, supports cell renewal and reduces fine lines. Patented penetration delivers hydration so skin feels elastic, firm and radiant.</p>
<p>Key benefits</p>
<p>– Locks in moisture and improves natural hydration</p>
<p>– Supports cell renewal and reduces fine lines</p>
<p>– Improves firmness, softness and elasticity</p>
<p>Key ingredients</p>
<p>– Sodium hyaluronate 40%</p>
<p>– Vitamin B5</p>
<p>– Marine enzymes</p>
<p>– Actifirm TS</p>`,
  },
  5: {
    slug: "peptide-firming-eye-cream",
    titleEn: "Peptide Firming Eye Cream",
    descEn: `<p>Suitable for all skin types</p>
<p>Peptide-rich cream for delicate eye skin: rebuilds collagen and elastin, smooths lines, and targets dark circles and puffiness.</p>
<p>Key benefits</p>
<p>– Antioxidants to help protect skin cells</p>
<p>– Rebuilds for a firmer, fuller look and helps prevent eye wrinkles</p>
<p>– Helps protect collagen and elastin</p>
<p>– Soothes puffy eye bags</p>
<p>Key ingredients</p>
<p>– Cyclic tetrapeptide</p>
<p>– Hexapeptide</p>
<p>– Pentapeptide acid</p>
<p>– Palmitoyl tetrapeptide</p>
<p>– Oxidoreductase</p>
<p>– Sodium hyaluronate</p>`,
  },
  6: {
    slug: "4ha-hydrating-filler-serum",
    titleEn: "4HA Hydrating Filler Serum",
    descEn: `<p>Especially for dry skin, wrinkles, fine lines and dehydration lines</p>
<p>Combines filler-grade hyaluronic acid used in professional injection treatments with three additional molecular weights for instant smoothing and multi-layer hydration.</p>
<p>Key benefits</p>
<p>– Fills intercellular gaps and smooths fine lines</p>
<p>– Builds a deep reservoir and surface moisture barrier</p>
<p>– Improves firmness and elasticity</p>
<p>– Intense hydration and anti-ageing support</p>
<p>Key ingredients</p>
<p>– 4HA hydrating filler complex</p>
<p>– Filler HA (4000 kDa)</p>
<p>– High MW HA (2200 kDa)</p>
<p>– Medium MW HA (300 kDa)</p>
<p>– Low MW HA (20 kDa)</p>
<p>– Anti-hyaluronidase complex</p>
<p>– Anti-ageing complex</p>`,
  },
  7: {
    slug: "follicle-repair-serum",
    titleEn: "Follicle Repair Serum",
    descEn: `<p>Supports hair and follicle health by increasing hair matrix cell content and division rate.</p>
<p>Key benefits</p>
<p>– Improves peri-follicular blood flow to deliver nutrients</p>
<p>– Inhibits 5-alpha-reductase I and II to reduce DHT impact on follicles</p>
<p>– Helps reduce breakage and hair loss</p>
<p>– Helps accelerate hair growth</p>
<p>Key ingredients</p>
<p>– Oleanolic acid</p>
<p>– White tea extract</p>
<p>– Follicle-strengthening concentrated protein</p>`,
  },
  8: {
    slug: "centella-anti-inflammatory-repair-serum",
    titleEn: "Centella Anti-Inflammatory Repair Serum",
    descEn: `<p>A mild, low-irritation formula for sensitive skin. Centella extract supports healing, soothing and repair, helps dissolve bacterial biofilm, and stimulates dermal collagen. Part of mesoestetic's sterile serum range, extracted in a sealed, monitored process.</p>
<p>Key benefits</p>
<p>– Low-irritation antibacterial and anti-inflammatory formula for sensitive skin</p>
<p>– Supports healing of damaged tissue</p>
<p>– Stimulates collagen to help smooth fine lines</p>
<p>Key ingredients</p>
<p>– Centella extract 0.5%</p>`,
  },
  9: {
    slug: "fast-growing-bamboo-serum",
    titleEn: "Fast-Growing Bamboo Serum",
    descEn: `<p>Inspired by one of nature's fastest-growing plants. Helps skin self-renew, replenish nutrients, resist wrinkles and regain smoothness and elasticity. Instantly boosts tension, hydrates, brightens and helps lift slackness.</p>
<p>Key benefits</p>
<p>– Targets tired, aged-looking skin</p>
<p>– Supports collagen synthesis, antioxidant and brightening</p>
<p>– Helps reduce slackness and reshape a youthful contour</p>`,
  },
  10: {
    slug: "hydra-magnet-mask",
    titleEn: "Hydra Magnet Mask",
    descEn: `<p>Especially for dehydrated / rough skin</p>
<p>Locks moisture on the outside and draws water in. Hydra-magnet technology with sodium hyaluronate forms a lasting moisture network; pansy extract (the “water-absorbing flower”) boosts cellular water uptake.</p>
<p>Key benefits</p>
<p>– Intense hydration repair for dry skin</p>
<p>– Long-lasting surface moisture network</p>
<p>– Improves cellular water uptake and circulation</p>
<p>– Instantly soothes dryness and smooths roughness</p>
<p>Key ingredients</p>
<p>– Hydra magnet (isomaltooligosaccharide)</p>
<p>– Pansy extract</p>
<p>– Sodium hyaluronate</p>`,
  },
  11: {
    slug: "dry-or-normal-skin-kit",
    titleEn: "Dry or Normal Skin Kit",
    descEn: `<p>A travel-size kit to experience Epionce for healthier, more radiant skin.</p>
<p>Includes:</p>
<p>– Gentle Foaming Cleanser 12ml</p>
<p>– Balancing Toner 18ml</p>
<p>– Gentle Lytic Repair Cream 12ml</p>
<p>– IDS Serum 12ml</p>
<p>– Renewal Facial Cream 12g</p>`,
  },
  12: {
    slug: "hydrating-firming-mask",
    titleEn: "Hydrating Firming Mask",
    descEn: `<p>An intensive hydrating mask that helps restore and strengthen the skin barrier, improving elasticity and firmness. Contains neurotransmitters, epidermal lipids, antioxidant botanicals and humectants.</p>
<p>Key benefits</p>
<p>– Activates skin for optimal function</p>
<p>– Lipids, antioxidants and humectants to reinforce the natural barrier</p>
<p>– Stimulates acetylcholine for instant elasticity and firmness</p>
<p>– Helps inhibit destructive inflammatory factors</p>
<p>Key ingredients</p>
<p>– White willow bark extract</p>
<p>– Epidermal lipid precursors</p>
<p>– Meadowfoam</p>
<p>– Flaxseed complex</p>`,
  },
  13: {
    slug: "rapid-recovery-treatment-kit",
    titleEn: "Rapid Recovery Treatment Kit",
    descEn: `<p>Formulated for post-treatment recovery: helps skin heal faster, reduces discomfort and redness, restores the barrier, hydrates and calms sensitive skin.</p>
<p><u>Gentle Cream Cleanser</u></p>
<p>Gently removes makeup, pollutants, bacteria and dirt without compromising the barrier or drying the skin.</p>
<p><u>Hydrating Firming Mask</u></p>
<p>Intensive hydration to restore and strengthen the barrier, improving elasticity and firmness.</p>
<p><u>Soothing Repair Oil</u></p>
<p>Natural anti-inflammatory and antibacterial actives to hydrate sensitive skin.</p>
<p><u>Renewal Calming Cream</u></p>
<p>Epionce's first OTC eczema product developed to the FDA skin-protectant monograph. Optimises barrier hydration and clinically soothes eczema and dryness.</p>`,
  },
  14: {
    slug: "lytic-gel-cleanser",
    titleEn: "Lytic Gel Cleanser",
    descEn: `<p>Clears oil, dead skin and harmful bacteria while soothing inflammation. Especially suitable for acne, dermatitis, eczema and psoriasis.</p>
<p>Key benefits</p>
<p>– Epionce EpiK keratolytic formula unclogs pores of oil, bacteria, makeup residue and dead skin without damaging the barrier</p>
<p>– Improves barrier absorption so actives penetrate more deeply</p>
<p>Key ingredients</p>
<p>– White willow bark extract</p>
<p>– Peppermint</p>
<p>– Date extract</p>`,
  },
  15: {
    slug: "gentle-cream-cleanser",
    titleEn: "Gentle Cream Cleanser",
    descEn: `<p>Skin type: dry / sensitive to normal</p>
<p>Gently removes makeup, pollutants, bacteria and dirt without compromising the barrier, irritating or drying the skin.</p>
<p>Key benefits</p>
<p>– Supports the natural barrier and helps prevent chronic inflammation</p>
<p>– Suitable after medical treatments</p>
<p>– Suitable for rosacea and other skin concerns</p>
<p>– For dry, sensitive and compromised skin</p>
<p>Key ingredients</p>
<p>– Marshmallow extract</p>
<p>– Date extract</p>
<p>– Zinc pyrithione</p>`,
  },
  16: {
    slug: "normal-or-combination-skin-kit",
    titleEn: "Normal or Combination Skin Kit",
    descEn: `<p>A travel-size kit to experience Epionce for healthier, more radiant skin.</p>
<p>Includes:</p>
<p>– Lytic Gel Cleanser 12ml</p>
<p>– Purifying Toner 18ml</p>
<p>– Lytic Repair Cream 12ml</p>
<p>– IDS Serum 12ml</p>
<p>– Renewal Facial Lotion 12ml</p>`,
  },
  17: {
    slug: "anti-inflammatory-acne-cream",
    titleEn: "Anti-Inflammatory Acne Cream",
    descEn: `<p>Clinically tested acne cream for stubborn facial and body breakouts. Fast improvement without irritation or dryness.</p>
<p>Key benefits</p>
<p>– Rapid, targeted improvement for face and body acne</p>
<p>– Gentle, proven actives without irritation</p>
<p>– Penetrates pores to help cleanse and prevent new spots</p>
<p>– Helps reduce scarring, redness and pigmentation</p>
<p>– Clinically shown for single or multiple lesions</p>
<p>Key ingredients</p>
<p>– Sulfur 4%</p>
<p>– Resorcinol monoacetate 3%</p>
<p>– Peppermint</p>
<p>– Spearmint oil</p>
<p>– Azelaic acid</p>
<p>– Sunflower seed oil</p>
<p>– Coconut oil</p>
<p>– Rice bran</p>
<p>– Capsicum</p>
<p>– Zinc pyrithione</p>`,
  },
  18: {
    slug: "youthful-bust-enriching-cream",
    titleEn: "Youthful Bust Enriching Cream",
    descEn: `<p>Rich botanical extracts and actives to support glandular circulation and help prevent congestion. Massage around the bust to nourish, plump and enhance contour.</p>
<p>Key ingredients</p>
<p>– Spring water</p>
<p>– Hops extract</p>
<p>– Safflower extract</p>
<p>– Lily extract</p>
<p>– Ziziphus seed extract</p>
<p>– Vitamins A and D</p>
<p>Suitable for</p>
<p>– Postpartum laxity</p>
<p>– Breast atrophy</p>
<p>– Reduced function</p>
<p>– Shape changes</p>
<p>– Sagging</p>`,
  },
  19: {
    slug: "bust-enriching-essence-set",
    titleEn: "Bust Enriching Essence Set",
    descEn: `<p>Active botanicals help restore moisture and elasticity. The serum supports healthy bust recovery after pregnancy.</p>
<p>Key ingredients</p>
<p>– Aloe vera</p>
<p>– Almond</p>
<p>– Evening primrose</p>
<p>– Clary sage</p>
<p>– Geranium</p>
<p>– Fennel</p>`,
  },
  20: {
    slug: "bust-sculpting-essence-set",
    titleEn: "Bust Sculpting Essence Set",
    descEn: `<p>Lanluis bust-sculpting essence with a plant formula to help prevent sagging and firm by improving free fat.</p>
<p>Key ingredients</p>
<p>– Aloe vera</p>
<p>– Evening primrose</p>
<p>– Rosemary</p>
<p>– Geranium</p>
<p>– Juniper berry</p>
<p>– Peppermint</p>`,
  },
  21: {
    slug: "breast-health-essence-set",
    titleEn: "Breast Health Essence Set",
    descEn: `<p>Rich botanicals to help clear mammary ducts, balance endocrine function, reduce swelling, enhance contour and soften skin.</p>
<p>Key ingredients</p>
<p>– Aloe vera</p>
<p>– Evening primrose</p>
<p>– Rosemary</p>
<p>– Geranium</p>
<p>– Juniper berry</p>
<p>– Peppermint</p>`,
  },
  22: {
    slug: "warming-palace-patch",
    titleEn: "Warming Palace Patch",
    descEn: `<p>Helps balance the endocrine system, ease menstrual discomfort, support uterine function, nourish skin, promote circulation, relieve PMS, regulate cycles, delay menopausal symptoms and support vaginal secretions.</p>
<p>Key ingredients</p>
<p>– Sweet almond</p>
<p>– Evening primrose</p>
<p>– Ligusticum</p>
<p>– Angelica</p>
<p>– Myrrh</p>`,
  },
};

function dollar(s) {
  if (s.includes("$sm$")) throw new Error("delimiter collision");
  return `$sm$${s}$sm$`;
}

if (products.length !== 22) {
  console.error("expected 22 products, got", products.length);
  process.exit(1);
}

const missing = products.filter((p) => !META[Number(p.id)]);
if (missing.length) {
  console.error("missing META for", missing.map((p) => p.id));
  process.exit(1);
}

const lines = [
  "delete from public.products;",
  "insert into public.products (",
  "  brand_id, slug, title_zh_hk, title_zh_cn, title_en,",
  "  description_zh_hk, description_zh_cn, description_en,",
  "  price_hkd, stock, image_paths, status, sort",
  ")",
  "select b.id, v.slug, v.title_zh_hk, v.title_zh_cn, v.title_en,",
  "  v.description_zh_hk, v.description_zh_cn, v.description_en,",
  "  v.price_hkd, v.stock, v.image_paths::jsonb, 'on_sale', v.sort",
  "from (values",
];

const values = products.map((p, i) => {
  const id = Number(p.id);
  const meta = META[id];
  const titleCn = toCN(p.title);
  const descHk = p.detail || p.desc;
  const descCn = toCN(descHk);
  const img = JSON.stringify([p.image]);
  const sort = 230 - id;
  const comma = i === products.length - 1 ? "" : ",";
  return `  (${dollar(p.brand)}, ${dollar(meta.slug)}, ${dollar(p.title)}, ${dollar(titleCn)}, ${dollar(meta.titleEn)}, ${dollar(descHk)}, ${dollar(descCn)}, ${dollar(meta.descEn.trim())}, ${p.price}::numeric, 20, ${dollar(img)}, ${sort})${comma}`;
});

lines.push(...values);
lines.push(
  ") as v(brand_slug, slug, title_zh_hk, title_zh_cn, title_en, description_zh_hk, description_zh_cn, description_en, price_hkd, stock, image_paths, sort)"
);
lines.push("join public.brands b on b.slug = v.brand_slug;");

writeFileSync(join(dir, "seed-shop-products.sql"), lines.join("\n"), "utf8");

const payload = products.map((p) => {
  const id = Number(p.id);
  const meta = META[id];
  const descHk = p.detail || p.desc;
  return {
    brand_slug: p.brand,
    slug: meta.slug,
    title_zh_hk: p.title,
    title_zh_cn: toCN(p.title),
    title_en: meta.titleEn,
    description_zh_hk: descHk,
    description_zh_cn: toCN(descHk),
    description_en: meta.descEn.trim(),
    price_hkd: p.price,
    stock: 20,
    image_paths: [`seed/prod-${id}@2x.jpg`],
    sort: 230 - id,
  };
});
writeFileSync(join(dir, "seed-payload.json"), JSON.stringify(payload), "utf8");
console.log("wrote", products.length, "products");
