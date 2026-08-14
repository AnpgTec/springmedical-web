import type { LocalizedString } from "@/lib/i18n";
import type { TreatmentCategoryId } from "./catalog";

export type TreatmentCategory = {
  id: TreatmentCategoryId;
  title: LocalizedString;
  image: string;
  treatmentIds: string[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "signature",
    title: { "zh-HK": `專業皇牌療程`, "zh-CN": `专业皇牌疗程`, en: `Signature` },
    image: "/images/cat-signature.jpg",
    treatmentIds: ["ultherapy","m22","thermage","co2","s21","scar-repair","pigmentation","emtone","exilis","ultra-femme"],
  },
  {
    id: "hair",
    title: { "zh-HK": `生髮護髮療程`, "zh-CN": `生发护发疗程`, en: `Hair` },
    image: "/images/cat-hair.jpg",
    treatmentIds: ["hair-care","follicle"],
  },
  {
    id: "injectables",
    title: { "zh-HK": `針劑療程`, "zh-CN": `针剂疗程`, en: `Injectables` },
    image: "/images/cat-injectables.jpg",
    treatmentIds: ["restylane","profhilo","juvederm","xeomin","botox","dysport","neauvia","radiesse","derma-veil","sculptra","ellanse","aesthefill","harmonyca"],
  },
  {
    id: "wellness",
    title: { "zh-HK": `養生療程`, "zh-CN": `养生疗程`, en: `Wellness` },
    image: "/images/virtual-gym.png",
    treatmentIds: ["virtual-gym"],
  },
  {
    id: "beauty",
    title: { "zh-HK": `生活美容療程`, "zh-CN": `生活美容疗程`, en: `Beauty` },
    image: "/images/cat-beauty.jpg",
    treatmentIds: ["breast","microneedle","lash","nail"],
  },
];

export function getCategory(id: string): TreatmentCategory | undefined {
  return treatmentCategories.find((c) => c.id === id);
}
