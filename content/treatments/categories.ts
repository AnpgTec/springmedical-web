import type { LocalizedString } from "@/lib/i18n";
import type { TreatmentCategoryId } from "./catalog";

export type TreatmentCategory = {
  id: TreatmentCategoryId;
  title: LocalizedString;
  lede: LocalizedString;
  image: string;
  treatmentIds: string[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "signature",
    title: { "zh-HK": `專業皇牌療程`, "zh-CN": `专业皇牌疗程`, en: `Signature` },
    lede: {
      "zh-HK": `精選儀器與能量治療，針對鬆弛、色斑、膚質與私密修復等需求。`,
      "zh-CN": `精选仪器与能量治疗，针对松弛、色斑、肤质与私密修复等需求。`,
      en: `Selected device and energy treatments addressing laxity, pigmentation, skin quality and intimate repair.`,
    },
    image: "/images/cat-signature.jpg",
    treatmentIds: ["ultherapy","m22","thermage","co2","s21","scar-repair","pigmentation","emtone","exilis","ultra-femme"],
  },
  {
    id: "hair",
    title: { "zh-HK": `生髮護髮療程`, "zh-CN": `生发护发疗程`, en: `Hair Care` },
    lede: {
      "zh-HK": `以注滲精華等技術養護毛囊，協助改善脫髮與頭皮狀態。`,
      "zh-CN": `以注渗精华等技术养护毛囊，协助改善脱发与头皮状态。`,
      en: `Infusion and related techniques to nourish follicles and help improve hair loss and scalp condition.`,
    },
    image: "/images/cat-hair.jpg",
    treatmentIds: ["hair-care","follicle"],
  },
  {
    id: "injectables",
    title: { "zh-HK": `針劑療程`, "zh-CN": `针剂疗程`, en: `Injectables` },
    lede: {
      "zh-HK": `涵蓋透明質酸、肉毒桿菌與再生類針劑，按面診評估後制定方案。`,
      "zh-CN": `涵盖透明质酸、肉毒杆菌与再生类针剂，按面诊评估后制定方案。`,
      en: `Covering hyaluronic acid, botulinum toxin and regenerative injectables, with a plan made after in-person assessment.`,
    },
    image: "/images/cat-injectables.jpg",
    treatmentIds: ["restylane","profhilo","juvederm","xeomin","botox","dysport","neauvia","radiesse","derma-veil","sculptra","ellanse","aesthefill","harmonyca"],
  },
  {
    id: "wellness",
    title: { "zh-HK": `養生療程`, "zh-CN": `养生疗程`, en: `Wellness` },
    lede: {
      "zh-HK": `從身體狀態切入，輔助體態管理與整體抗衰老體驗。`,
      "zh-CN": `从身体状态切入，辅助体态管理与整体抗衰老体验。`,
      en: `Approached from overall body condition, supporting contour management and a whole-body anti-ageing experience.`,
    },
    image: "/images/virtual-gym.png",
    treatmentIds: ["virtual-gym"],
  },
  {
    id: "beauty",
    title: { "zh-HK": `生活美容療程`, "zh-CN": `生活美容疗程`, en: `Beauty` },
    lede: {
      "zh-HK": `日常美容護理與細節改善方案。`,
      "zh-CN": `日常美容护理与细节改善方案。`,
      en: `Everyday beauty care and solutions for finer details.`,
    },
    image: "/images/cat-beauty.jpg",
    treatmentIds: ["breast","microneedle","lash","nail"],
  },
];

export function getCategory(id: string): TreatmentCategory | undefined {
  return treatmentCategories.find((c) => c.id === id);
}
