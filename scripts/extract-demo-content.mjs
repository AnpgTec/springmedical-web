/**
 * One-shot extractor: demo website → SpringMedical-Web content TS files.
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const webRoot = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
const OpenCC = require("opencc-js");
const converter = OpenCC.Converter({ from: "hk", to: "cn" });

const detailPath = path.join(root, "demo/website/treatments/detail.html");
const articlePath = path.join(root, "demo/website/knowledge/article.html");
const siteJsPath = path.join(root, "demo/website/assets/site.js");

function extractJsObject(html, varName) {
  const re = new RegExp(`const ${varName} = (\\{[\\s\\S]*?\\n\\s*\\});`);
  const m = html.match(re);
  if (!m) throw new Error(`Could not find ${varName}`);
  // eslint-disable-next-line no-new-func
  return new Function(`return (${m[1]})`)();
}

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function L(zhHK, zhCN, en) {
  return { "zh-HK": zhHK, "zh-CN": zhCN, en };
}

function toImg(p) {
  if (!p) return undefined;
  return p.replace(/^\.\.\/images\//, "/images/").replace(/\?.*$/, "");
}

function bodyFromLoc(loc, suitableHeading) {
  let html;
  if (loc.html) html = loc.html;
  else if (loc.sections?.length) {
    html = loc.sections
      .map((s) => `<h3>${s.t}</h3><p>${s.b}</p>`)
      .join("");
  } else if (loc.body) html = `<p>${loc.body}</p>`;
  else if (loc.lede) html = `<p>${loc.lede}</p>`;
  else html = "<p></p>";
  if (loc.suitableFor?.length) {
    html += `<h3>${suitableHeading}</h3><ul>${loc.suitableFor
      .map((s) => `<li>${s}</li>`)
      .join("")}</ul>`;
  }
  return html.replace(/<p class="dt-gallery-cta">[\s\S]*?<\/p>/g, "").trim();
}

const CATEGORY_MAP = {
  "專業皇牌療程": "signature",
  "生髮護髮療程": "hair",
  "針劑療程": "injectables",
  "養生療程": "wellness",
  "生活美容療程": "beauty",
};

/** English title / summary / FAQ / short body — professional concise. */
const EN = {
  "ultra-femme": {
    title: "BTL Ultra Femme 360 Intimate Tightening",
    summary:
      "Monopolar RF and ultrasound stimulate the vaginal wall to improve intimate firmness and tissue health.",
    body: "BTL Ultra Femme 360 is an FDA- and CE-cleared non-invasive treatment using disposable applicators with monopolar RF and ultrasound for 360° coverage. Heat reaches deep tissue to stimulate collagen and elastin, improving firmness, elasticity, lubrication and pelvic support. Sessions take about 8 minutes; often noticeable after one visit, with maintenance as advised.",
    faq: [
      ["How many Ultra Femme 360 sessions do I need?", "It depends on your goals — from a short course to ongoing care. Book a consultation for a personalised plan."],
      ["Is there downtime after Ultra Femme 360?", "It is non-invasive; most people resume normal activities the same day."],
      ["Does Ultra Femme 360 hurt?", "Treatment is typically painless with only mild warmth; no wounds are created."],
      ["How long is one Ultra Femme 360 session?", "About 8 minutes; firmness improvements are often noticeable after one session."],
      ["Who is Ultra Femme 360 for?", "Women planning pregnancy, perimenopausal symptoms, postpartum care, mature skin concerns, or intimate wellness."],
    ],
  },
  exilis: {
    title: "BTL Exilis Ultra 360 Eye Collagen Gun",
    summary:
      "BTL ultrasound + monopolar RF for non-invasive periocular tightening and rejuvenation.",
    body: "Fourth-generation Exilis Ultra 360 combines FDA-cleared ultrasound with monopolar RF to stimulate collagen and elastin under the eyes, firm skin, soften lines and support under-eye tissue. A course of four sessions within four weeks is commonly recommended; makeup can usually be applied immediately after.",
    faq: [
      ["What eye concerns does Exilis Ultra 360 address?", "Laxity, fine lines, dark circles and mild under-eye droop."],
      ["How does Exilis Ultra 360 feel?", "Mild heat only; non-invasive with little discomfort."],
      ["Can I wear makeup after Exilis Ultra 360?", "Yes — typically no downtime."],
      ["How many Exilis Ultra 360 sessions are recommended?", "Results may show after one; four sessions in four weeks are often advised."],
      ["Is Exilis Ultra 360 safe?", "FDA-cleared technology from BTL, manufactured in Europe; non-invasive."],
    ],
  },
  emtone: {
    title: "BTL EMTONE Facial Collagen Gun",
    summary:
      "FDA-cleared ultrasound + monopolar RF to stimulate natural collagen for facial firming.",
    body: "BTL Emtone uses FDA-cleared ultrasound with monopolar RF and a 360° probe to tighten ageing collagen, support up to 2× collagen response, and lift facial contours — non-invasive with little to no downtime.",
    faq: [
      ["When will I see EMTONE results?", "Collagen renewal takes time; results build over a course of sessions."],
      ["Is EMTONE safe?", "FDA-cleared and non-invasive, with short recovery."],
      ["Which areas does EMTONE treat?", "Primarily the face — firming deep collagen and lifting contours."],
      ["What makes EMTONE distinctive?", "Ultrasound + monopolar RF with a 360° probe aimed at boosting collagen response."],
    ],
  },
  thermage: {
    title: "Thermage FLX Radiofrequency Tightening",
    summary:
      "FDA-cleared non-invasive tightening with 3D volumetric heating to stimulate gradual collagen renewal, improve laxity and refine contours.",
    body: "Thermage FLX is an FDA-cleared non-invasive tightening treatment. Patented monopolar RF with AccuREP™ real-time control delivers 3D volumetric heat into collagen-rich tissue. Dedicated tips treat face/jawline, eyelids and larger body areas. Typically no specific downtime; results may last about 12 months with maintenance as advised.",
    faq: [
      ["How soon will I see results?", "Tightness may be felt soon after; clearer change usually builds over months as collagen remodels. Duration varies with skin and lifestyle."],
      ["Does Thermage FLX hurt?", "Cooling spray and vibration help comfort. You may feel brief heat in deeper tissue; the physician can adjust energy throughout."],
      ["Thermage FLX versus ultrasound?", "FLX heats a broader dermal volume for firmness and texture; ultrasound focuses deeper SMAS for structural lift. A consultation can advise one or both."],
      ["What is new in fifth-generation FLX?", "AccuREP™ measures impedance before each pulse and a larger purple diamond tip shortens treatment time with more even energy."],
    ],
  },
  co2: {
    title: "CO₂ Laser Resurfacing",
    summary:
      "10,600 nm ablative CO₂ laser vaporises tissue to improve wrinkles, scars, age spots and pores in one session.",
    body: "CO₂ laser (10,600 nm) is an ablative gas laser highly absorbed by water. It vaporises target tissue, contracts collagen and supports rejuvenation — resurfacing, wrinkle reduction, atrophic scar revision, removal of benign growths, and overall texture improvement. Fractional modes shorten recovery versus full-field ablation.",
    faq: [
      ["How does CO₂ laser work?", "Far-infrared energy vaporizes water-rich tissue and thermally remoulds collagen."],
      ["What can CO₂ laser treat?", "Rejuvenation, acne/surgical scars, seborrhoeic keratoses, pigmentation and selected vascular lesions — full-field or fractional."],
      ["Is CO₂ laser painful? Is anaesthesia needed?", "Pain is higher than non-ablative lasers (often VAS 5–7/10); topical or local anaesthesia is routine."],
      ["How long is recovery after CO₂ laser?", "Expect redness, oozing and crusting for days; pinkness may last weeks. Fractional recovery is often ~5–7 days."],
      ["What aftercare is required?", "Keep wounds moist and clean, strict SPF 50+ for months, avoid acids/retinoids early, and let crusts shed naturally."],
    ],
  },
  s21: {
    title: "S21 Laser Snoring Treatment",
    summary:
      "Dual-wavelength laser tightens soft-palate tissue; studies show ~66% average snoring-index improvement with no downtime.",
    body: "S21 combines Er:YAG (2940 nm) and Nd:YAG (1064 nm) to tighten and remodel soft-palate tissue (laser-assisted uvulopalatoplasty). Immediate collagen contraction widens the airway; longer-term remodelling sustains firmness. Clinic-based, non-invasive, typically near painless with no downtime — an alternative to traditional UPPP surgery.",
    faq: [
      ["How does S21 treat snoring at the root?", "Dual wavelengths heat deep soft-palate collagen for immediate tightening and lasting remodelling."],
      ["What results does S21 show clinically?", "After ~3×20-minute sessions, AHI improved ~66% on average in cited studies; many patients report marked snoring reduction."],
      ["Does S21 hurt? Is anaesthesia needed?", "Usually near painless; no general anaesthesia or incision. Mild throat dryness may resolve in hours."],
      ["Is there downtime after S21?", "Typically none — resume daily activity the same day."],
      ["How does S21 differ from snoring surgery?", "Unlike UPPP under general anaesthesia, S21 is clinic-based, non-invasive and recovery-free."],
    ],
  },
  m22: {
    title: "M22 Photorejuvenation",
    summary:
      "Selective IPL for redness and pigment with gentle rejuvenation and surface protection.",
    body: "M22 OPT delivers stable square-wave pulses to treat vascular and pigment concerns while protecting the epidermis. FDA-cleared with over a decade of clinical use for efficient, comfortable photorejuvenation.",
    faq: [
      ["How does M22 differ from traditional IPL?", "OPT square-wave pulses keep energy density more constant, improving comfort and safety versus peaking traditional pulses."],
      ["Does M22 hurt? Is numbing needed?", "Often described as light snaps (VAS ~2–3/10); numbing is usually unnecessary. Full-face sessions take ~15–20 minutes."],
      ["When will I see results and how often?", "Temporary brightening can be immediate; pigment fades over 1–2 weeks. Courses of 3–5 sessions every 3–4 weeks are common."],
      ["Who should not have M22?", "Pregnancy/breastfeeding, photosensitivity disorders, active infection/malignancy at the site; recent tanning or isotretinoin need medical review."],
      ["What aftercare follows M22?", "Mild redness/warmth for hours; hydrate, use SPF 50+, and pause acids/retinoids/high-strength vitamin C for about a week."],
    ],
  },
  ultherapy: {
    title: "Ultherapy PRIME Second-Generation Ultrasound",
    summary:
      "FDA-cleared non-invasive ultrasound lift with DeepSEE™ real-time imaging, delivering energy to the SMAS layer to stimulate gradual collagen renewal, improve laxity and reshape contours.",
    body: "Ultherapy PRIME is an FDA-cleared non-invasive ultrasound lift. DeepSEE™ real-time imaging helps the physician visualise tissue (to about 6 mm) and place micro-focused ultrasound (MFU-V) at the SMAS and dermis to stimulate collagen and elastin. Different transducer depths support SMAS structure, deep dermal firming, and finer work on thinner areas such as around the eyes. Results typically build over weeks to months, with no specific downtime.",
    faq: [
      ["How soon will I see improvement after Ultherapy PRIME?", "Collagen renewal is gradual. Some notice subtle change early; clearer results often appear over weeks to months, depending on your skin and aftercare."],
      ["Does Ultherapy PRIME hurt?", "You may feel brief warmth or a dull ache when energy reaches the target layer. The physician can adjust settings and comfort measures to your tolerance."],
      ["How does Ultherapy differ from radiofrequency?", "Ultherapy focuses ultrasound at deeper SMAS for structural support and contour; RF typically heats a broader dermal volume for overall firmness and texture. A consultation can advise one or a combination."],
      ["What is new in Ultherapy PRIME?", "PRIME upgrades DeepSEE™ imaging and the operating system so the physician can see tissue more clearly and place energy more precisely, often with a more comfortable session."],
    ],
  },
  "scar-repair": {
    title: "Atrophic Acne Scar Repair",
    summary:
      "Ice-pick, boxcar and rolling scars are structural dermal collapse — not surface pigment. We type the scar first, then rebuild with staged combination care.",
    body: "Atrophic acne scars form when dermal collagen and elastin collapse. Ice-pick, boxcar and rolling types need different tactics; a single laser for every scar often fails. Care may include subcision for tethered rolling scars, fractional CO₂ for ice-pick and boxcar pits, and personalised aftercare while new collagen organises.",
    faq: [
      ["How do acne scars differ from leftover marks?", "True pitted scars are structural dermal collapse, not surface pigment. Whitening creams cannot rebuild the dermis; treatment starts with typing the scar."],
      ["Why did several laser courses not help?", "Using one device for every pit type is a common reason. Ice-pick, boxcar and rolling scars need different plans; we assess morphology before treating."],
      ["How many sessions are needed?", "It varies. Review is often every 4–6 months. Some need yearly maintenance; more fragile skin may need longer between sessions for collagen to settle."],
      ["What aftercare is required?", "The first month is key for collagen remodelling. We prescribe repair products and review progress rather than ending care after a single visit."],
    ],
  },
  pigmentation: {
    title: "Resistant Pigment Disorders",
    summary:
      "A last-resort approach for PIH, nevus of Ota and congenital / stubborn pigment — diagnosis first, then staged combination treatment.",
    body: "Many pigment problems are mixed-depth or misdiagnosed. Post-inflammatory hyperpigmentation, nevus of Ota and congenital melanocytic lesions need wavelength, depth and interval chosen after assessment — not a single ‘spot laser’. We emphasise diagnosis, realistic expectations and full-cycle aftercare.",
    faq: [
      ["What is PIH and why does it happen?", "Post-inflammatory hyperpigmentation can follow lasers, injury or hormonal change. We use staged breakdown plus personalised repair rather than bleaching the surface only."],
      ["Can ordinary lasers remove nevus of Ota?", "Nevus of Ota sits in deep dermis; superficial lasers often cannot reach it. Specific deeper wavelengths are used to fragment abnormal pigment while protecting nearby tissue."],
      ["Are café-au-lait / congenital spots untreatable?", "For poorly bordered or mixed congenital pigment we use a staged, layered plan rather than a single laser, aiming for gradual fade that is realistic and safer."],
      ["What happens at the first visit?", "Most time goes to skin analysis and tracing causes. Mixed pigment must be unpacked before treatment; we discuss risk and expectations rather than selling a course on the spot."],
    ],
  },
  "hair-care": {
    title: "Hair Growth & Scalp Care",
    summary: "A comprehensive plan for hair loss, thinning and scalp health with professional assessment.",
    body: "Personalised hair and scalp programmes start with professional assessment to identify causes and rebuild a healthier scalp environment.",
    faq: [
      ["Do I need an assessment first?", "Yes — a scalp evaluation helps identify causes before treatment."],
      ["How do I maintain results?", "Combine in-clinic care with daily scalp habits as advised."],
      ["What does the programme include?", "Plans targeting loss, thinning and scalp health after assessment."],
      ["Who is it for?", "Anyone concerned about shedding, thinning density or an unhealthy scalp."],
    ],
  },
  follicle: {
    title: "Follicle-Strengthening Hair Therapy",
    summary: "Essence infusion nourishes follicles without damaging hair to counter multiple hair-loss patterns.",
    body: "Infusion technology delivers actives to nourish follicles, extend the growth cycle, revive declining cells and improve vascular support — targeting patterned, persistent and androgenetic hair loss.",
    faq: [
      ["How soon will I see results?", "Follicle activation takes time; follow the prescribed course."],
      ["Is it suitable for androgenetic alopecia?", "It can target androgenetic loss after assessment."],
      ["Will it damage my hair?", "Infusion care is designed to nourish follicles without harming hair shafts."],
      ["Which hair-loss types are addressed?", "Patterned, persistent and androgenetic alopecia, among others."],
    ],
  },
  restylane: {
    title: "Restylane Hyaluronic Acid",
    summary: "High-purity non-animal HA for ageing concerns, contouring and facial shaping.",
    body: "Restylane is a trusted non-animal HA portfolio addressing volume loss, contour lift and facial balance across product ranges tailored to different goals.",
    faq: [
      ["How does Restylane differ from other HA fillers?", "Each line has distinct rheology; choose after consultation."],
      ["How long do Restylane results last?", "Typically months to about a year, depending on product and area."],
      ["Is Restylane animal-derived?", "No — high-purity non-animal hyaluronic acid."],
      ["What can Restylane improve?", "Ageing-related volume loss, contour and facial shape."],
    ],
  },
  profhilo: {
    title: "Profhilo Bio-Remodelling HA",
    summary: "IBSA patented high-concentration HA to stimulate collagen and improve laxity.",
    body: "Profhilo from IBSA delivers high-concentration pure HA that supports collagen, elastin and tissue remodelling — often described as stimulating multi-fold collagen response — to improve laxity and skin quality rather than heavy local shaping.",
    faq: [
      ["How is Profhilo different from regular fillers?", "It focuses on bio-remodelling and skin quality, not large-volume shaping."],
      ["How many sessions do I need?", "Usually a short course; exact plans follow consultation."],
      ["Why does Profhilo stimulate collagen?", "Its patented high-concentration HA formulation supports collagen response."],
      ["What does Profhilo improve?", "Laxity, tissue support and overall skin quality."],
    ],
  },
  juvederm: {
    title: "Juvéderm Hyaluronic Acid",
    summary: "FDA/CE-cleared HA; results after a first treatment may last up to a year.",
    body: "Juvéderm is FDA- and CE-cleared non-animal stabilised HA used to soften wrinkles, enhance contours and improve hydration — with lasting results often cited up to a year after an initial session.",
    faq: [
      ["How long does Juvéderm last?", "Up to about a year after a first treatment, depending on product and area."],
      ["Is Juvéderm safe?", "It carries FDA and CE clearances."],
      ["Is it animal-derived?", "No — non-animal stabilised HA."],
      ["What can it improve?", "Wrinkles, facial contour and skin hydration."],
    ],
  },
  xeomin: {
    title: "Xeomin Botulinum Toxin",
    summary: "Merz purified botulinum toxin to soften moderate-to-deep dynamic wrinkles.",
    body: "Xeomin by Merz (FDA/CE) is a purified botulinum toxin A that blocks acetylcholine release at the neuromuscular junction, relaxing overactive muscles that form dynamic lines and helping prevent new creases.",
    faq: [
      ["When will Xeomin take effect?", "Usually over several days to about a week."],
      ["How long do results last?", "About 3–6 months, individually variable."],
      ["How does Xeomin work?", "It interrupts nerve signals that trigger muscle contraction."],
      ["Who manufactures Xeomin?", "Merz (Germany), with FDA and CE clearances."],
    ],
  },
  botox: {
    title: "Botox Botulinum Toxin",
    summary: "FDA-cleared toxin for wrinkle relaxation, facial shaping and sweat reduction in ~10 minutes.",
    body: "Botox (FDA-cleared) temporarily relaxes targeted muscles for wrinkle reduction, facial contouring and selected hyperhidrosis care. Sessions often take about 10 minutes.",
    faq: [
      ["How long is a Botox appointment?", "Often around 10 minutes."],
      ["Are there side effects?", "Assessment and injection by qualified clinicians reduce risk; follow advice."],
      ["What can Botox improve?", "Dynamic wrinkles, facial shaping and localised sweating."],
      ["Is Botox trusted?", "FDA-cleared with extensive global clinical use."],
    ],
  },
  dysport: {
    title: "Dysport Botulinum Toxin",
    summary: "European type-A toxin authorised in 60+ countries and recognised by Hong Kong DOH.",
    body: "Dysport (FDA-cleared, UK-manufactured) relaxes overactive muscles for facial slimming, calf contouring and wrinkle softening with a natural look limited to treated sites. Widely authorised internationally and recognised by Hong Kong DOH.",
    faq: [
      ["Does Dysport look natural?", "Effects stay localised to treated muscles when dosed correctly."],
      ["When will I see results?", "Usually within several days to a week."],
      ["Which areas can Dysport treat?", "Facial slimming, calves and dynamic wrinkles."],
      ["What approvals does Dysport have?", "FDA clearance, UK manufacture, 60+ country authorisations and HK DOH recognition."],
    ],
  },
  neauvia: {
    title: "Neauvia Hydro Deluxe Skin Booster",
    summary: "HA plus calcium microspheres for lasting hydration, firmness and brighter tone.",
    body: "Neauvia Hydro Deluxe locks in hydration for smoother texture, refined pores and brighter tone. Fine calcium microspheres support ongoing collagen stimulation for longer-lasting firmness.",
    faq: [
      ["Who is Neauvia for?", "Those seeking hydration, brightness and pore refinement."],
      ["When will I see results?", "Hydration is often quick; collagen benefits build over time."],
      ["How does it work?", "HA hydrates while calcium microspheres stimulate dermal collagen."],
      ["What results can I expect?", "Softer texture, refined pores and brighter, firmer-looking skin."],
    ],
  },
  radiesse: {
    title: "Radiesse Calcium Hydroxylapatite",
    summary: "Calcium-phosphate biocompatible filler for immediate contouring across multiple sites.",
    body: "Radiesse is a CaHA-based compound similar to minerals in bone and teeth. It offers elastic mouldability for immediate shaping of forehead, nose, temples, cheeks, nasolabial folds, chin and hands.",
    faq: [
      ["Are Radiesse results immediate?", "Yes — contouring is typically visible right away."],
      ["Is Radiesse biocompatible?", "Its mineral profile closely resembles bone/teeth components."],
      ["Which areas can be treated?", "Forehead, nose, temples, cheeks, folds, chin, hands and more."],
      ["What is Radiesse made of?", "A synthetic calcium-phosphate compound with high mouldability."],
    ],
  },
  "derma-veil": {
    title: "Derma Veil Collagen Stimulator",
    summary: "3R micro-collagen technology for brighter texture, contour support and gradual rejuvenation.",
    body: "Derma Veil’s 3R micro-collagen approach reaches the dermis to activate fibroblasts, encourage collagen renewal, brighten texture and support youthful contours from within.",
    faq: [
      ["Who is Derma Veil for?", "Those wanting natural volume support and better skin quality."],
      ["How long do results last?", "Collagen builds gradually over time."],
      ["What technology does it use?", "3R micro-collagen design to activate fibroblasts in the dermis."],
      ["What results are typical?", "Brighter texture, contour support and gradual rejuvenation."],
    ],
  },
  sculptra: {
    title: "Sculptra® Poly-L-Lactic Acid",
    summary: "Injectable PLLA that stimulates the skin’s own collagen to soften wrinkles.",
    body: "Sculptra® is injectable poly-L-lactic acid that stimulates deep dermal collagen to improve facial skin quality and wrinkle appearance over time.",
    faq: [
      ["Are Sculptra results fast?", "Effects are gradual as collagen builds."],
      ["How long do results last?", "Often long-lasting, depending on the individual and course."],
      ["What is Sculptra made of?", "Injectable poly-L-lactic acid (PLLA)."],
      ["What does it improve?", "Facial skin quality and wrinkles via self-collagen stimulation."],
    ],
  },
  ellanse: {
    title: "Ellansé Collagen Stimulator",
    summary: "Immediate fill plus collagen renewal for hollows and contour refinement lasting 1–4 years.",
    body: "Ellansé fills hollows and softens contour lines (forehead, lateral canthus, nasolabial folds, cheeks, jawline, etc.) while stimulating collagen. Longevity is often cited at 1–4 years depending on product type.",
    faq: [
      ["How long does Ellansé last?", "Typically 1–4 years by product type."],
      ["Which areas suit Ellansé?", "Forehead, folds, cheeks, jawline and other hollows."],
      ["How does it work?", "Immediate fill plus ongoing collagen stimulation."],
      ["What concerns does it address?", "Hollows, mild droop and contour laxity."],
    ],
  },
  aesthefill: {
    title: "AestheFill® PDLLA Collagen Stimulator",
    summary: "PDLLA dual-helix structure for immediate support and long-term type-I collagen induction.",
    body: "AestheFill® uses PDLLA (1:1 L/D) microspheres for immediate dermal support and progressive type-I collagen induction lasting at least 18–24 months. Suitable for forehead, temples, cheeks, tear troughs and folds. KFDA/CE cleared with HKMD NO. 210226.",
    faq: [
      ["How is AestheFill different from fillers?", "It combines immediate support with long-term collagen induction."],
      ["How long do results last?", "At least about 18–24 months."],
      ["What clearances does it have?", "KFDA, CE Mark and Hong Kong DOH listing HKMD NO. 210226."],
      ["Which areas can be treated?", "Forehead, temples, cheeks, tear troughs, midface and folds."],
    ],
  },
  harmonyca: {
    title: "HArmonyCa™ Hybrid Filler",
    summary: "CaHa microspheres + HA for immediate lift and lasting collagen stimulation.",
    body: "HArmonyCa™ combines CaHa microspheres with HA for immediate lift plus ongoing collagen remodelling — often compared to a “liquid thread” effect. Supported by Allergan Aesthetics and doctor-administered.",
    faq: [
      ["Are HArmonyCa results immediate?", "Yes — lift and firmness are typically visible right away."],
      ["Is it safe?", "Backed by a major aesthetics manufacturer; doctor-led treatment."],
      ["What is unique about the formula?", "CaHa + HA addresses both instant lift and collagen regeneration."],
      ["What results can I expect?", "Wrinkle softening and natural long-lasting firmness."],
    ],
  },
  "space-capsule": {
    title: "Space Capsule Detox & Body Contouring",
    summary: "Far-infrared heat to support circulation, metabolism and full-body detox/contour care.",
    body: "Far-infrared warmth promotes circulation and basal metabolism, softens fat cells and supports subcutaneous fat breakdown for full-body detox and contouring care.",
    faq: [
      ["Who is the space capsule for?", "Those seeking detox, contouring and relaxation."],
      ["How does it feel?", "Comfortable warming heat designed for relaxation."],
      ["How does it work?", "Far-infrared heat supports circulation, metabolism and fat-cell softening."],
      ["What benefits are typical?", "Better circulation awareness, metabolic support and body-contour care."],
    ],
  },
  "virtual-gym": {
    title: "Virtual Gym Body Contouring",
    summary: "Bio-resonance signal technology aiming to burn up to 5,000 calories per session.",
    body: "Virtual Gym uses Dr Gerry Pollock’s bio-resonance signal technology to target visceral and subcutaneous fat while training muscle tone — claiming up to ~5,000 calories per session for a lighter silhouette.",
    faq: [
      ["How many calories can one session burn?", "Up to about 5,000 calories as claimed."],
      ["Does it feel like exercise?", "It mimics muscle training without voluntary effort."],
      ["How does Virtual Gym work?", "Precise energy signals from bio-resonance tech target fat stores."],
      ["What results are expected?", "Fat reduction with improved body-line firmness."],
    ],
  },
  breast: {
    title: "Breast Contour Care",
    summary: "Magnetic frequency + ultrasound to support circulation, ease congestion and firm breast skin.",
    body: "Dedicated breast devices combine magnetic frequency and ultrasound to support circulation, meridian flow and nodule comfort, while manual massage gathers lateral fat, lifts tissue and improves ptosis and accessory breast lines — often with immediate contour improvement.",
    faq: [
      ["When will I see results?", "Contour improvement can be immediate; courses enhance outcomes."],
      ["Is it safe?", "Non-invasive device care plus manual massage."],
      ["How does it work?", "Magnetic frequency and ultrasound plus massage to reshape and lift."],
      ["What concerns does it address?", "Congestion, ptosis, lateral spread and accessory breast lines."],
    ],
  },
  microneedle: {
    title: "Electric Microneedling · Nano Chip",
    summary: "Stimulates collagen without disrupting the epidermis to soften lines and spots.",
    body: "Microneedling awakens regenerative capacity by stimulating collagen while preserving the epidermis — helping fade lines and spots, even tone and improve elasticity.",
    faq: [
      ["Does electric microneedling hurt?", "Nano-chip delivery typically feels mild."],
      ["Is there downtime?", "Usually short with proper aftercare."],
      ["How does it work?", "Natural collagen stimulation without ablating the epidermis."],
      ["What can it improve?", "Lines, spots, texture, tone and elasticity."],
    ],
  },
  lash: {
    title: "Lash Growth Therapy",
    summary: "Activates lash follicles across the growth cycle for denser, more dimensional lashes.",
    body: "Eyelids hold roughly 300–500 follicles, many dormant, each cycling through growth, rest and shed. Therapy activates and nourishes follicles across that cycle for denser, fuller-looking lashes.",
    faq: [
      ["When will I see results?", "Lash cycles are long — follow the full course."],
      ["Do results look natural?", "Yes — it enhances your own lashes."],
      ["How does it work?", "Activation and care across growth, rest and shed phases."],
      ["Why is a course needed?", "Follicles cycle independently; progress is gradual."],
    ],
  },
  nail: {
    title: "Laser Nail Fungus Therapy",
    summary: "1064 nm laser targets fungal spores deep in the nail to reduce recurrence.",
    body: "1064 nm laser penetrates thick nail plate and bed to target fungal spores. Warmth during treatment is normal. Sessions about every 4–6 weeks; clear improvement often after 3–4 visits.",
    faq: [
      ["How many sessions are needed?", "Often 3–4 before clear improvement; plans vary."],
      ["How does it feel?", "Warmth in the nail is expected."],
      ["How does it work?", "1064 nm energy reaches plate and bed to target fungal spores."],
      ["How often are sessions?", "About every 4–6 weeks per clinician advice."],
      ["Is it safe?", "1064 nm laser care is generally well tolerated with lower recurrence risk."],
    ],
  },
};

const POINTS_EN = {
  "ultra-femme": [
    "FDA-cleared non-invasive technology",
    "Stimulates natural collagen renewal",
    "Improves laxity, dryness and leakage",
  ],
  exilis: [
    "FDA-cleared ultrasound + monopolar RF",
    "Non-invasive, no downtime",
    "Targets periocular laxity, lines and hollows",
  ],
  emtone: [
    "FDA-cleared technology",
    "Supports up to 2× collagen response",
    "Facial firming and contour lift",
  ],
  thermage: [
    "3D volumetric heating to stimulate collagen",
    "AccuREP™ real-time control for even, safer energy",
    "FDA-cleared non-invasive treatment, no downtime",
  ],
  ultherapy: [
    "DeepSEE™ real-time imaging to about 6 mm",
    "MFU-V micro-focused ultrasound to the SMAS",
    "FDA-cleared non-invasive treatment, no downtime",
  ],
  co2: [
    "Ablative gas laser, wavelength 10,600 nm",
    "Precisely vaporises target tissue and remodels collagen",
    "Improves wrinkles, scars, age spots and pores in one session",
  ],
  s21: [
    "Dual-wavelength laser tightens the soft palate",
    "Clinical data: ~66% average snoring-index improvement",
    "Non-invasive, no downtime, completed in clinic",
  ],
  m22: [
    "Addresses eight major skin concerns in one device",
    "AOPT IPL with intelligent targeting",
    "Smart cooling + pulse control: comfortable, no downtime",
  ],
  "hair-care": [
    "Professional scalp assessment",
    "Personalised care plan",
    "Improves scalp health and hair quality",
  ],
  follicle: [
    "Essence-infusion technology, hair-safe",
    "Extends the follicle growth cycle",
    "Targets androgenetic and other hair-loss types",
  ],
  restylane: [
    "High-purity non-animal hyaluronic acid",
    "Multiple ranges for different needs",
    "Contour lift and facial shaping",
  ],
  profhilo: [
    "IBSA patented technology",
    "Stimulates about 12× collagen response",
    "Improves laxity and skin quality",
  ],
  juvederm: [
    "FDA/CE cleared",
    "Results lasting up to one year",
    "Softens wrinkles and enhances contours",
  ],
  xeomin: [
    "Merz, FDA/CE cleared",
    "Blocks neuromuscular signalling",
    "Softens dynamic lines and helps prevent new ones",
  ],
  botox: [
    "FDA-cleared, globally trusted",
    "Sessions around 10 minutes",
    "Wrinkle reduction, facial slimming, hyperhidrosis",
  ],
  dysport: [
    "FDA-cleared, UK-manufactured",
    "Facial/calf slimming and wrinkle softening",
    "Recognised by Hong Kong Department of Health",
  ],
  neauvia: [
    "Locks in hydration and brightens tone",
    "Calcium microspheres support collagen",
    "Longer-lasting moisture and firmness",
  ],
  radiesse: [
    "Composition similar to minerals in bone",
    "Immediate shaping",
    "Suitable for multiple contour areas",
  ],
  "derma-veil": [
    "3R micro-collagen technology",
    "Activates fibroblasts",
    "Brightening regeneration and contour support",
  ],
  sculptra: [
    "PLLA (poly-L-lactic acid)",
    "Stimulates the skin’s own collagen",
    "Improves wrinkles and facial skin quality",
  ],
  ellanse: [
    "Immediate fill plus collagen stimulation",
    "Softens multiple contour lines",
    "Longevity often cited at 1–4 years",
  ],
  aesthefill: [
    "PDLLA dual-helix structure",
    "Immediate support plus lasting collagen",
    "KFDA/CE cleared, HKMD registered",
  ],
  harmonyca: [
    "CaHA microspheres + hyaluronic acid",
    "Immediate lifting effect",
    "100% physician-administered",
  ],
  "virtual-gym": [
    "Bio-resonance signal technology",
    "Targets visceral and subcutaneous fat",
    "Burns about 5,000 calories per session",
  ],
  breast: [
    "Magnetic frequency + ultrasound",
    "Supports circulation and breast-tissue comfort",
    "Reshapes and addresses sagging",
  ],
  microneedle: [
    "Naturally stimulates collagen",
    "Does not destroy the epidermis",
    "Softens lines, pigment and texture",
  ],
  lash: [
    "Works with the lash growth cycle",
    "Activates resting follicles",
    "Improves density and dimension",
  ],
  nail: [
    "1064 nm laser",
    "Targets fungal spores at source",
    "Typically every 4–6 weeks",
  ],
};

const ARTICLE_EN = {
  "1": {
    title: "M22 Photorejuvenation — One Device for Eight Skin Concerns",
    excerpt: "Clinically proven IPL platform trusted by over a million users worldwide for eight major skin issues.",
    body: "M22 by Lumenis is a gold-standard IPL platform with AOPT and 5D targeting for acne, firming, pigment, redness, vessels, rosacea and pores — with sapphire cooling for high comfort, FDA/CE clearances, and typically no downtime.",
  },
  "2": {
    title: "Ultherapy PRIME Gen-2: Deep Remodelling for Natural Lift",
    excerpt: "Second-generation Ultherapy PRIME rebuilds deep support for natural, lasting contour and skin quality.",
    body: "Ultherapy PRIME heats SMAS and dermal layers to lift brows, jawline and neck while renewing collagen. Gen-2 expands visualisation and typically reduces discomfort versus prior versions, with progressive results peaking at 3–6 months.",
  },
  "3": {
    title: "Atrophic Acne Scars Are Dermal Defects — Not Surface Flaws",
    excerpt: "Ice-pick, boxcar and rolling scars need typed diagnosis and staged reconstruction, not random resurfacing.",
    body: "Atrophic scars are structural dermal collapse. Effective care starts with typing, then may combine subcision, fractional CO₂ and personalised aftercare rather than one-laser-fits-all packages.",
  },
  "4": {
    title: "Stubborn Pigment When Others Say “Untreatable”",
    excerpt: "Focused strategies for PIH, Ota’s nevus and congenital melanocytic lesions after failed standard lasers.",
    body: "Deep dermal and mixed pigment often need wavelength/depth matching and staged protocols — especially rebound PIH, Ota’s nevus and congenital spots wrongly treated as ordinary freckles.",
  },
  "7": {
    title: "Collagen Stimulators Compared: Sculptra, AestheFill, Derma Veil",
    excerpt: "Similar regenerative goals, different polymers and particle designs — choose by indication and preference.",
    body: "PLLA/PDLLA biostimulators scaffold fibroblast activity. Sculptra (PLLA), AestheFill (PDLLA) and Derma Veil (PLLA-based) differ in feel, onset and contour versus skin-quality emphasis; all need medical assessment.",
  },
  "8": {
    title: "Botox vs Xeomin: Composition, Spread and Choice",
    excerpt: "Both are type-A toxins; complexing proteins and diffusion profiles differ for large vs precise targets.",
    body: "Botox includes complexing proteins and spreads more widely; Xeomin is “naked” toxin (~150 kDa) for focused micro-adjustment. Choice depends on area, history and clinician preference.",
  },
  "9": {
    title: "Why Collagen Declines — The Science of Regenerative Ageing Care",
    excerpt: "Collagen is structural steel; elastin is the spring. Understanding loss pathways guides anti-ageing strategy.",
    body: "Fibroblast activity declines with UV, glycation, free radicals, inflammation and lifestyle. Prevention plus biostimulatory injectables and energy devices can restart type I/III collagen renewal.",
  },
  "10": {
    title: "Hyaluronic Acid Explained: From Hydration to Fillers",
    excerpt: "HA binds up to ~1000× its weight in water. Cross-linked vs non-cross-linked forms serve different goals.",
    body: "Non-cross-linked boosters hydrate; cross-linked gels shape and last longer. Product choice and vascular-safe injection technique must be doctor-led.",
  },
  "11": {
    title: "Botulinum Toxin: Mechanism, Benefits and Side Effects",
    excerpt: "A neuromodulator that softens dynamic lines, shapes the face and reduces local sweating when used carefully.",
    body: "Type-A toxin blocks acetylcholine release for wrinkles, masseter slimming, calves and hyperhidrosis. Effects last ~3–6 months; dosing accuracy prevents ptosis or a frozen look.",
  },
  "12": {
    title: "Thermage FLX: Five Pitfalls and How to Spot Genuine Tips",
    excerpt: "Fifth-generation Thermage is powerful — but counterfeit tips and underpowered settings are common traps.",
    body: "Verify Solta packaging, QR authenticity and doctor operation. Avoid painless “bargain” energy cuts and older platforms sold as FLX. Results often last ~12 months with proper aftercare.",
  },
  "13": {
    title: "Wart Removal Compared: Cryo, CO₂ Laser, Electrosurgery and More",
    excerpt: "HPV warts are contagious. Method choice depends on site, size and recurrence risk.",
    body: "Cryotherapy, CO₂ laser, topicals, electrocautery and excision each suit different wart types. Aftercare and immune support matter because virus may persist.",
  },
  "14": {
    title: "Collagen Guns: Non-Invasive Firming Explained",
    excerpt: "RF heat in the dermis stimulates collagen for firming, lift and softer fine lines.",
    body: "Devices such as BTL Exilis heat dermal tissue to activate fibroblasts. Courses of sessions improve contour and texture with minimal downtime; caution with active acne or metal implants.",
  },
  "15": {
    title: "Periorbital Care: Why Eye Lines Form and How to Improve Them",
    excerpt: "The thinnest skin ages first. Dynamic vs static lines need different strategies.",
    body: "Ageing, expression, screens, sun and dehydration drive eye lines. Care spans SPF, eye cream, Exilis RF, toxin for dynamics and HA for hollows/shadows.",
  },
  "16": {
    title: "Skin Boosters Compared: Profhilo, Restylane, Belotero and More",
    excerpt: "Injectable HA boosters differ in concentration and crosslinking technology.",
    body: "Profhilo (high HA, NASHA), Restylane Skinboosters, Belotero Revive and Juvéderm Volite hydrate and refine texture with different profiles — typically in a short spaced course.",
  },
  "17": {
    title: "Laser Beard Reduction for Men: How It Works",
    excerpt: "Selective photothermolysis targets follicular melanin for long-term density reduction.",
    body: "After 6–8 sessions many see 70–90% density reduction. Best for darker hair; white/grey hair responds poorly. Follow sun and aftercare rules.",
  },
  "18": {
    title: "Botox for Masseter Slimming and Dynamic Lines",
    excerpt: "Relax masseter for jawline refinement or treat expression lines — dosing preserves natural movement.",
    body: "Works for muscle-driven width and dynamic creases, not bone or deep fat. Longevity depends on metabolism and habits; avoid overdosing that risks antibodies or stiffness.",
  },
  "19": {
    title: "REJURAN vs Profhilo vs Juvelook: Choosing Repair Pathways",
    excerpt: "PN repair, high-dose HA remodelling, or PDLLA+HA collagen support — match mechanism to skin needs.",
    body: "REJURAN focuses on polynucleotide repair; Profhilo on hydration/structure; Juvelook on collagen plus moisture. No universal winner — diagnosis first.",
  },
  "20": {
    title: "Underarm Botox for Sweating: Onset and Downtime",
    excerpt: "Neuromodulation reduces local sweat signals without permanently destroying glands.",
    body: "Onset in ~3–7 days, clearer by 1–2 weeks, lasting ~4–6 months — helpful for seasonal hyperhidrosis with minimal downtime.",
  },
  "21": {
    title: "Pore Refinement: Causes and Aesthetic Options",
    excerpt: "Ageing, oil and cleansing imbalance enlarge pores — treat the cause, then texture.",
    body: "Daily barrier care plus biostimulatory injectables and IPL/laser collagen programmes can refine pore appearance after medical assessment.",
  },
  "22": {
    title: "Cryolipolysis vs Heat-Based Fat Reduction",
    excerpt: "Cold apoptosis suits pinchable fat; RF/HIFU heat can also address laxity and tone.",
    body: "Choose cryolipolysis for local stubborn fat; heat platforms when firmness or cellulite coexists. Neither replaces overall weight management.",
  },
  "23": {
    title: "Ulthera HIFU: Focused Ultrasound for Contour Lift",
    summary_unused: true,
    excerpt: "Energy to dermis and SMAS tightens fascia and renews collagen for visible lift.",
    body: "1.5/3.0/4.5 mm transducers with DeepSEE imaging target layers precisely. Lift builds over 1–3 months and may last 18–24 months. Distinct from Pico pigment lasers and Thermage RF depth profiles.",
  },
  "24": {
    title: "REJURAN Skin Booster: PN/PDRN Skin Repair Decoded",
    excerpt: "Salmon-derived PN/PDRN supports cellular repair and collagen — often called a premium skin healer.",
    body: "PDRN soothes shallow inflammation; PN scaffolds dermal repair. Series (black/red/white/blue) tailor anti-ageing, hydration, periocular and acne-prone needs.",
  },
  "25": {
    title: "Collagen Stimulators Compared: Ellansé, Sculptra, HArmonyCa and More",
    excerpt: "PCL, CaHA, PLLA and PDLLA share regenerative goals with different fill-versus-biostim balance.",
    body: "Pick immediate-fill hybrids (Radiesse, HArmonyCa, Ellansé) or gradual biostimulators (Sculptra, Derma Veil, Juvelook) based on anatomy and goals.",
  },
  "26": {
    title: "Fat-Dissolving Injections: Belkyra vs Cellucare",
    excerpt: "Non-surgical options for local fat — mechanisms and treatment counts differ.",
    body: "Belkyra (DCA) permanently disrupts fat cells, mainly for double chin. Cellucare uses HA/caffeine pathways to shrink fat across body sites with more sessions.",
  },
  "27": {
    title: "Sensitive Skin Repair: From Triggers to Gentle Care",
    excerpt: "Barrier damage from climate, stress and pollution drives redness and dryness.",
    body: "Gentle cleanse, soothe, antioxidant support and medical masks stabilise reactive skin without high-energy devices when inappropriate.",
  },
  "28": {
    title: "Hyaluronidase: Reversing HA Filler Outcomes",
    excerpt: "An enzyme that hydrolyses HA for overfill, nodules or vascular emergencies.",
    body: "Dissolves HA gels only — not PLLA/CaHA/PCL. Partial dosing can refine rather than erase. Misusing lipolysis for HA problems is dangerous.",
  },
  "29": {
    title: "Lip Filler Guide: Aesthetics, Face Shape and Risks",
    excerpt: "Beautiful lips balance proportion, doctor skill and product choice.",
    body: "Respect lip ratios and facial harmony; choose gels by softness and dynamics. Vascular occlusion is rare but serious — credentialled injectors only.",
  },
  "30": {
    title: "Clear & Brilliant: Short-Downtime Fractional Resurfacing",
    excerpt: "A gentler Fraxel evolution with dual wavelengths suited to Asian skin.",
    body: "1440 nm for texture/pores; 1927 nm for superficial pigment. Redness often settles in hours to a day — ideal for busy schedules.",
  },
  "31": {
    title: "Double Chin Causes and Solutions — Habits to Injections",
    excerpt: "Genetics, weight, age and posture all matter — match therapy to fat vs laxity.",
    body: "Lifestyle and posture help mild cases; DCA injectables address stubborn fat pads. Severe laxity may need tightening modalities too.",
  },
  "32": {
    title: "Thread Nose Risks: What to Know Before Treatment",
    excerpt: "Absorbable threads can reshape the nose but carry migration, extrusion and infection risks.",
    body: "Unlike HA, threads cannot be dissolved. Choose qualified doctors, quality materials and honest expectation setting.",
  },
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

function fmtLocalized(obj) {
  return `{ "zh-HK": \`${esc(obj["zh-HK"])}\`, "zh-CN": \`${esc(obj["zh-CN"])}\`, en: \`${esc(obj.en)}\` }`;
}

function buildCategories() {
  const site = fs.readFileSync(siteJsPath, "utf8");
  const catBlock = site.match(/const treatmentCategories = (\[[\s\S]*?\n  \]);/);
  if (!catBlock) throw new Error("treatmentCategories not found");
  // eslint-disable-next-line no-new-func
  const cats = new Function(`return (${catBlock[1]})`)();

  const images = {
    signature: "/images/cat-signature.jpg",
    hair: "/images/cat-hair.jpg",
    injectables: "/images/cat-injectables.jpg",
    wellness: "/images/virtual-gym.png",
    beauty: "/images/cat-beauty.jpg",
  };

  // Prefer HTML list order when available
  const htmlOrder = {
    signature: ["ultherapy", "m22", "thermage", "co2", "s21", "scar-repair", "pigmentation", "emtone", "exilis", "ultra-femme"],
    hair: ["hair-care", "follicle"],
    injectables: [
      "restylane", "profhilo", "juvederm", "xeomin", "botox", "dysport",
      "neauvia", "radiesse", "derma-veil", "sculptra", "ellanse", "aesthefill", "harmonyca",
    ],
    wellness: ["virtual-gym"],
    beauty: ["breast", "microneedle", "lash", "nail"],
  };

  const titles = {
    signature: L("專業皇牌療程", "专业皇牌疗程", "Signature"),
    hair: L("生髮護髮療程", "生发护发疗程", "Hair"),
    injectables: L("針劑療程", "针剂疗程", "Injectables"),
    wellness: L("養生療程", "养生疗程", "Wellness"),
    beauty: L("生活美容療程", "生活美容疗程", "Beauty"),
  };

  return cats.map((c) => ({
    id: c.id,
    title: titles[c.id],
    image: images[c.id],
    treatmentIds: htmlOrder[c.id] || c.items.map((i) => i.id),
  }));
}

function main() {
  const detailHtml = fs.readFileSync(detailPath, "utf8");
  const catalog = extractJsObject(detailHtml, "catalog");

  const missingZhCn = [];
  const missingEnSource = []; // all — demo has no EN

  const treatments = [];
  for (const [id, raw] of Object.entries(catalog)) {
    const category = CATEGORY_MAP[raw.category];
    if (!category) throw new Error(`Unknown category for ${id}: ${raw.category}`);
    const hk = raw.zhHk;
    const cn = raw.zhCn;
    if (!cn) missingZhCn.push(id);
    missingEnSource.push(id);

    const enMeta = EN[id];
    if (!enMeta) throw new Error(`Missing EN map for ${id}`);

    const titleHK = raw.title;
    const titleCN = cn ? converter(raw.title) : titleHK;
    // Prefer catalog titles; EN from map
    const title = L(titleHK, titleCN, enMeta.title);
    const summary = L(hk.lede, (cn || hk).lede, enMeta.summary);

    const bodyHtml = L(
      bodyFromLoc(hk, "適合人士"),
      bodyFromLoc(cn || hk, "适合人士"),
      `<p>${enMeta.body}</p>`
    );

    const enPoints = POINTS_EN[id] || [];
    const points = (hk.points || []).map((p, i) =>
      L(p, (cn?.points || [])[i] || p, enPoints[i] || p)
    );

    const faqs = (hk.faq || []).map((pair, i) => {
      const cnPair = (cn?.faq || [])[i] || pair;
      const enPair = enMeta.faq[i] || [enMeta.title, enMeta.summary];
      return {
        q: L(pair[0], cnPair[0], enPair[0]),
        a: L(pair[1], cnPair[1], enPair[1]),
      };
    });

    treatments.push({
      id,
      category,
      slug: id,
      title,
      summary,
      bodyHtml,
      points,
      image: toImg(raw.image),
      gallery:
        id === "pigmentation"
          ? [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/pigmentation/${n}.jpg`)
          : undefined,
      faqs,
    });
  }

  // Order treatments following category display order flattened
  const categories = buildCategories();
  const order = categories.flatMap((c) => c.treatmentIds);
  treatments.sort((a, b) => {
    const ia = order.indexOf(a.id);
    const ib = order.indexOf(b.id);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
  });

  // --- write catalog.ts ---
  let catalogOut = `import type { LocalizedString } from "@/lib/i18n";

export type TreatmentFaq = { q: LocalizedString; a: LocalizedString };

export type TreatmentCategoryId =
  | "signature"
  | "hair"
  | "injectables"
  | "wellness"
  | "beauty";

export type Treatment = {
  id: string;
  category: TreatmentCategoryId;
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  bodyHtml: LocalizedString;
  points?: LocalizedString[];
  image?: string;
  gallery?: string[];
  faqs: TreatmentFaq[];
};

export const treatments: Treatment[] = [
`;

  for (const t of treatments) {
    catalogOut += `  {
    id: ${JSON.stringify(t.id)},
    category: ${JSON.stringify(t.category)},
    slug: ${JSON.stringify(t.slug)},
    title: ${fmtLocalized(t.title)},
    summary: ${fmtLocalized(t.summary)},
    bodyHtml: ${fmtLocalized(t.bodyHtml)},
${t.points?.length ? `    points: [\n${t.points.map((p) => `      ${fmtLocalized(p)}`).join(",\n")}\n    ],\n` : ""}    image: ${JSON.stringify(t.image)},
${t.gallery ? `    gallery: ${JSON.stringify(t.gallery)},\n` : ""}    faqs: [
${t.faqs
  .map(
    (f) =>
      `      { q: ${fmtLocalized(f.q)}, a: ${fmtLocalized(f.a)} }`
  )
  .join(",\n")}
    ],
  },
`;
  }

  catalogOut += `];

export function getTreatment(id: string): Treatment | undefined {
  return treatments.find((t) => t.id === id || t.slug === id);
}

export function treatmentsByCategory(category: string): Treatment[] {
  return treatments.filter((t) => t.category === category);
}
`;

  const catalogDest = path.join(webRoot, "content/treatments/catalog.ts");
  fs.writeFileSync(catalogDest, catalogOut, "utf8");

  // --- categories.ts ---
  let catOut = `import type { LocalizedString } from "@/lib/i18n";
import type { TreatmentCategoryId } from "./catalog";

export type TreatmentCategory = {
  id: TreatmentCategoryId;
  title: LocalizedString;
  image: string;
  treatmentIds: string[];
};

export const treatmentCategories: TreatmentCategory[] = [
`;
  for (const c of categories) {
    catOut += `  {
    id: ${JSON.stringify(c.id)},
    title: ${fmtLocalized(c.title)},
    image: ${JSON.stringify(c.image)},
    treatmentIds: ${JSON.stringify(c.treatmentIds)},
  },
`;
  }
  catOut += `];

export function getCategory(id: string): TreatmentCategory | undefined {
  return treatmentCategories.find((c) => c.id === id);
}
`;
  fs.writeFileSync(path.join(webRoot, "content/treatments/categories.ts"), catOut, "utf8");

  // --- articles ---
  const articleHtml = fs.readFileSync(articlePath, "utf8");
  const articlesMap = extractJsObject(articleHtml, "articles");
  const articleMissingZhCn = [];
  const articleMissingEn = [];

  const articles = [];
  for (const [id, raw] of Object.entries(articlesMap)) {
    articleMissingZhCn.push(id); // source has no zh-CN
    articleMissingEn.push(id); // source has no en
    const en = ARTICLE_EN[id];
    if (!en) throw new Error(`Missing ARTICLE_EN for ${id}`);

    const titleCN = converter(raw.title);
    const excerptCN = converter(raw.lede);
    const bodyCN = converter(raw.body);

    articles.push({
      id,
      slug: id,
      section: raw.section === "longevity" ? "longevity" : "aesthetic",
      eyebrow: raw.eyebrow || "",
      image: toImg(raw.image),
      title: L(raw.title, titleCN, en.title),
      excerpt: L(raw.lede, excerptCN, en.excerpt),
      body: L(raw.body, bodyCN, `<p>${en.body}</p>`),
    });
  }

  // Keep numeric order of ids
  articles.sort((a, b) => Number(a.id) - Number(b.id));

  let artOut = `import type { LocalizedString } from "@/lib/i18n";

export type KnowledgeSection = "aesthetic" | "longevity";

export type KnowledgeArticle = {
  id: string;
  slug: string;
  section?: KnowledgeSection;
  eyebrow?: string;
  image?: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  body: LocalizedString;
};

export const articles: KnowledgeArticle[] = [
`;
  for (const a of articles) {
    artOut += `  {
    id: ${JSON.stringify(a.id)},
    slug: ${JSON.stringify(a.slug)},
    ${a.section === "longevity" ? 'section: "longevity",\n    ' : ""}eyebrow: ${JSON.stringify(a.eyebrow)},
    image: ${JSON.stringify(a.image)},
    title: ${fmtLocalized(a.title)},
    excerpt: ${fmtLocalized(a.excerpt)},
    body: ${fmtLocalized(a.body)},
  },
`;
  }
  artOut += `];

export function getArticle(id: string): KnowledgeArticle | undefined {
  return articles.find((a) => a.id === id || a.slug === id);
}

export function articleSection(article: KnowledgeArticle): KnowledgeSection {
  return article.section || "aesthetic";
}

export function articlesBySection(section: KnowledgeSection): KnowledgeArticle[] {
  return articles.filter((a) => articleSection(a) === section);
}

export function articleNeighbors(id: string): {
  prev?: KnowledgeArticle;
  next?: KnowledgeArticle;
} {
  const current = getArticle(id);
  if (!current) return {};
  const zone = articlesBySection(articleSection(current));
  const idx = zone.findIndex((a) => a.id === current.id);
  return {
    prev: idx > 0 ? zone[idx - 1] : undefined,
    next: idx >= 0 && idx < zone.length - 1 ? zone[idx + 1] : undefined,
  };
}
`;
  fs.writeFileSync(path.join(webRoot, "content/knowledge/articles.ts"), artOut, "utf8");

  console.log(
    JSON.stringify(
      {
        treatments: treatments.length,
        articles: articles.length,
        treatmentsLackedZhCnInSource: missingZhCn,
        treatmentsLackedEnInSource: missingEnSource,
        articlesLackedZhCnInSource: articleMissingZhCn,
        articlesLackedEnInSource: articleMissingEn,
      },
      null,
      2
    )
  );
}

main();
