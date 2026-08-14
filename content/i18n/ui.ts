import { loc, type Locale, type LocalizedString } from "@/lib/i18n";

type UiDict = Record<string, string>;

const ui: Record<Locale, UiDict> = {
  "zh-HK": {
    nav_home: "主頁",
    nav_about: "品牌介紹",
    nav_knowledge: "知識庫",
    nav_shop: "網上商店",
    nav_contact: "聯絡我們",
    nav_treatments: "療程",
    cat_signature: "專業皇牌療程",
    cat_hair: "生髮護髮療程",
    cat_injectables: "針劑療程",
    cat_wellness: "養生療程",
    cat_beauty: "生活美容療程",
    cta_consult: "預約諮詢",
    cta_explore: "瀏覽療程",
    footer_knowledge: "知識庫",
    footer_hours: "營業時間",
    footer_hours_val: "星期一至六 11:00–20:00｜星期日休息",
    footer_address:
      "尖沙咀堪富利士道 6 至 6A 地庫--港鐵A2出口出閘，沿通道直行約30步（相當於20米），公司位於左手邊",
    footer_phone: "熱線 (852) 3166 1986",
    footer_explore: "探索",
    footer_blurb:
      "位於尖沙咀的醫學美容中心，以精準療程與長壽醫學理念，守護肌膚健康與自然狀態",
    form_success: "已收到您的預約申請，我們會盡快與您聯絡。",
    view_all: "查看全部",
    learn_more: "了解詳情",
    cart_empty: "購物車為空",
    added_cart: "已加入購物車",
    shop_products: "商品",
    shop_items_count: "共 {n} 件商品",
    shop_prev: "‹ 上一頁",
    shop_next: "下一頁 ›",
    wechat_label: "微信",
    terms_link: "條款細則及私隱聲明",
    read_knowledge: "閱讀知識庫",
    know_brand: "了解品牌",
    submit_booking: "提交預約",
    store_info: "門店資訊",
    booking_form: "預約表格",
    address_label: "地址",
    phone_label: "熱線",
    hours_label: "營業時間",
    name_label: "姓名 *",
    phone_field: "電話 *",
    email_label: "電郵",
    contact_pref: "希望聯絡方式",
    consult_item: "諮詢項目",
    prefer_time: "希望預約時間",
    note_label: "備註",
    form_note: "提交後我們會在營業時間內盡快回覆。",
    other_option: "其他 / 未確定",
    pager_prev: "上一篇",
    pager_next: "下一篇",
    back_knowledge: "返回知識庫",
  },
  "zh-CN": {
    nav_home: "首页",
    nav_about: "品牌介绍",
    nav_knowledge: "知识库",
    nav_shop: "网上商店",
    nav_contact: "联系我们",
    nav_treatments: "疗程",
    cat_signature: "专业皇牌疗程",
    cat_hair: "生发护发疗程",
    cat_injectables: "针剂疗程",
    cat_wellness: "养生疗程",
    cat_beauty: "生活美容疗程",
    cta_consult: "预约咨询",
    cta_explore: "浏览疗程",
    footer_knowledge: "知识库",
    footer_hours: "营业时间",
    footer_hours_val: "周一至周六 11:00–20:00｜周日休息",
    footer_address:
      "尖沙咀堪富利士道 6 至 6A 地库--港铁A2出口出闸，沿通道直行约30步（相当于20米），公司位于左手边",
    footer_phone: "热线 (852) 3166 1986",
    footer_explore: "探索",
    footer_blurb:
      "位于尖沙咀的医学美容中心，以精准疗程与长寿医学理念，守护肌肤健康与自然状态",
    form_success: "已收到您的预约申请，我们会尽快与您联系。",
    view_all: "查看全部",
    learn_more: "了解详情",
    cart_empty: "购物车为空",
    added_cart: "已加入购物车",
    shop_products: "商品",
    shop_items_count: "共 {n} 件商品",
    shop_prev: "‹ 上一页",
    shop_next: "下一页 ›",
    wechat_label: "微信",
    terms_link: "条款细则及私隐声明",
    read_knowledge: "阅读知识库",
    know_brand: "了解品牌",
    submit_booking: "提交预约",
    store_info: "门店信息",
    booking_form: "预约表格",
    address_label: "地址",
    phone_label: "热线",
    hours_label: "营业时间",
    name_label: "姓名 *",
    phone_field: "电话 *",
    email_label: "电邮",
    contact_pref: "希望联络方式",
    consult_item: "咨询项目",
    prefer_time: "希望预约时间",
    note_label: "备注",
    form_note: "提交后我们会在营业时间内尽快回复。",
    other_option: "其他 / 未确定",
    pager_prev: "上一篇",
    pager_next: "下一篇",
    back_knowledge: "返回知识库",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_knowledge: "Knowledge",
    nav_shop: "Shop",
    nav_contact: "Contact",
    nav_treatments: "Treatments",
    cat_signature: "Signature",
    cat_hair: "Hair",
    cat_injectables: "Injectables",
    cat_wellness: "Wellness",
    cat_beauty: "Beauty",
    cta_consult: "Book Consultation",
    cta_explore: "Explore Treatments",
    footer_knowledge: "Knowledge Base",
    footer_hours: "Hours",
    footer_hours_val: "Mon–Sat 11:00–20:00｜Sun Closed",
    footer_address:
      "Basement, 6–6A Humphreys Avenue, Tsim Sha Tsui — Exit MTR TST A2, walk straight approx. 30 steps (about 20m), the office is on the left",
    footer_phone: "Tel (852) 3166 1986",
    footer_explore: "Explore",
    footer_blurb:
      "A medical aesthetics clinic in Tsim Sha Tsui, combining precise treatments with longevity medicine to care for skin health and a natural look.",
    form_success: "Thank you. We will contact you shortly.",
    view_all: "View all",
    learn_more: "Learn more",
    cart_empty: "Cart is empty",
    added_cart: "Added to cart",
    shop_products: "Products",
    shop_items_count: "{n} products",
    shop_prev: "‹ Prev",
    shop_next: "Next ›",
    wechat_label: "WeChat",
    terms_link: "Terms & Privacy",
    read_knowledge: "Read knowledge base",
    know_brand: "About the brand",
    submit_booking: "Submit booking",
    store_info: "Clinic info",
    booking_form: "Booking form",
    address_label: "Address",
    phone_label: "Phone",
    hours_label: "Hours",
    name_label: "Name *",
    phone_field: "Phone *",
    email_label: "Email",
    contact_pref: "Preferred contact",
    consult_item: "Consultation topic",
    prefer_time: "Preferred time",
    note_label: "Notes",
    form_note: "We will reply during business hours.",
    other_option: "Other / Not sure",
    pager_prev: "Previous",
    pager_next: "Next",
    back_knowledge: "Back to knowledge",
  },
};

export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  const dict = ui[locale] ?? ui["zh-HK"];
  let str = dict[key] ?? ui["zh-HK"][key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.split(`{${k}}`).join(String(v));
    }
  }
  return str;
}

export const siteMeta = {
  name: "Spring Medical",
  phoneDisplay: "(852) 3166 1986",
  phoneTel: "+85231661986",
  whatsapp: "85290115998",
  socials: {
    facebook: "https://www.facebook.com/SpringMedicalHK/",
    instagram: "https://www.instagram.com/springmedical_hk/",
    xiaohongshu:
      "https://www.xiaohongshu.com/user/profile/6486d84e000000002503536a",
  },
};

export const treatmentCategoryIds = [
  "signature",
  "hair",
  "injectables",
  "wellness",
  "beauty",
] as const;

export type TreatmentCategoryId = (typeof treatmentCategoryIds)[number];

export function categoryLabelKey(id: TreatmentCategoryId): string {
  return `cat_${id}`;
}

/** Helper for page copy blocks */
export function L(zhHK: string, zhCN: string, en: string): LocalizedString {
  return loc(zhHK, zhCN, en);
}
