import { L } from "@/content/i18n/ui";
import type { LocalizedString } from "@/lib/i18n";

export type FaqItem = { q: LocalizedString; a: LocalizedString };

export const faqPage = {
  metaTitle: L(
    "常見問題｜Spring Medical",
    "常见问题｜Spring Medical",
    "FAQ｜Spring Medical"
  ),
  metaDescription: L(
    "Spring Medical 尖沙咀到店、預約與熱門療程的常見問題。",
    "Spring Medical 尖沙咀到店、预约与热门疗程的常见问题。",
    "Spring Medical in Tsim Sha Tsui: visiting, booking and questions on popular treatments."
  ),
  crumb: L("常見問題", "常见问题", "FAQ"),
  eyebrow: "FAQ",
  title: L("常見問題", "常见问题", "Frequently asked questions"),
  lead: L(
    "到店、預約與熱門療程的常見問題。",
    "到店、预约与热门疗程的常见问题。",
    "Visiting, booking and popular treatments."
  ),
  clinicTitle: L("到店與預約", "到店与预约", "Visiting and booking"),
  treatmentsTitle: L("熱門療程", "热门疗程", "Popular treatments"),
  viewTreatment: L("查看此療程", "查看此疗程", "View this treatment"),
};

export const clinicFaqs: FaqItem[] = [
  {
    q: L("Spring Medical 在哪裡？", "Spring Medical 在哪里？", "Where is Spring Medical?"),
    a: L(
      "尖沙咀堪富利士道 6 至 6A 地庫--港鐵A2出口出閘，沿通道直行約30步（相當於20米），公司位於左手邊",
      "尖沙咀堪富利士道 6 至 6A 地库--港铁A2出口出闸，沿通道直行约30步（相当于20米），公司位于左手边",
      "Basement, 6–6A Humphreys Avenue, Tsim Sha Tsui — Exit MTR TST A2, walk straight approx. 30 steps (about 20m), the office is on the left"
    ),
  },
  {
    q: L("營業時間是？", "营业时间是？", "What are the opening hours?"),
    a: L(
      "星期一至六 11:00–20:00，星期日休息。",
      "周一至周六 11:00–20:00，周日休息。",
      "Monday to Saturday 11:00–20:00. Closed on Sunday."
    ),
  },
  {
    q: L("怎樣預約？", "怎样预约？", "How do I book?"),
    a: L(
      "可在聯絡頁留下姓名與需求，或致電熱線 (852) 3166 1986，亦可使用 WhatsApp (852) 9011 5998。",
      "可在联系页留下姓名与需求，或致电热线 (852) 3166 1986，亦可使用 WhatsApp (852) 9011 5998。",
      "Leave your name and request on the contact page, call (852) 3166 1986, or message WhatsApp (852) 9011 5998."
    ),
  },
  {
    q: L("提供哪些療程？", "提供哪些疗程？", "What treatments do you offer?"),
    a: L(
      "分為專業皇牌療程、生髮護髮療程、針劑療程、養生療程與生活美容療程。",
      "分为专业皇牌疗程、生发护发疗程、针剂疗程、养生疗程与生活美容疗程。",
      "Signature device treatments, hair care, injectables, wellness, and beauty care."
    ),
  },
  {
    q: L("需要先面診嗎？", "需要先面诊吗？", "Do I need a consultation first?"),
    a: L(
      "以評估與方案為先，避免一刀切推銷。",
      "以评估与方案为先，避免一刀切推销。",
      "Assessment and planning first — not one-size-fits-all selling."
    ),
  },
];

/** Treatment FAQs copied from those pages. Other treatments stay on their own pages. */
export const faqTreatmentIds = [
  "ultherapy",
  "thermage",
  "m22",
  "scar-repair",
  "pigmentation",
  "exilis",
] as const;
