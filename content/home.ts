import { L } from "@/content/i18n/ui";
import type { LocalizedString } from "@/lib/i18n";

export type HomeContent = {
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: LocalizedString;
  aboutEyebrow: string;
  aboutTitle: LocalizedString;
  aboutLead: LocalizedString;
  aboutBody: LocalizedString;
  catsEyebrow: string;
  catsTitle: LocalizedString;
  catsLead: LocalizedString;
  longevityEyebrow: string;
  longevityTitle: LocalizedString;
  longevityLead: LocalizedString;
  popularEyebrow: string;
  popularTitle: LocalizedString;
  ctaEyebrow: string;
  ctaTitle: LocalizedString;
  ctaLead: LocalizedString;
  categoryCards: {
    id: string;
    num: string;
    titleKey: string;
    href: string;
    image: string;
    desc: LocalizedString;
  }[];
  popular: {
    id: string;
    title: LocalizedString;
    desc: LocalizedString;
  }[];
};

export const homeContent: HomeContent = {
  metaTitle: L(
    "Spring Medical 春天醫學美容｜尖沙咀醫學美容與長壽醫學",
    "Spring Medical 春天医学美容｜尖沙咀医学美容与长寿医学",
    "Spring Medical | Medical Aesthetics & Longevity in Tsim Sha Tsui"
  ),
  metaDescription: L(
    "Spring Medical 位於香港尖沙咀，提供醫學美容、抗衰老與長壽醫學相關療程。專業、安全、自然。",
    "Spring Medical 位于香港尖沙咀，提供医学美容、抗衰老与长寿医学相关疗程。专业、安全、自然。",
    "Spring Medical in Tsim Sha Tsui, Hong Kong — medical aesthetics, anti-aging and longevity care. Professional, safe, natural."
  ),
  heroEyebrow: "Tsim Sha Tsui · Medical Aesthetics",
  heroTitle: "Spring Medical",
  heroLead: L(
    "以精準醫學美容與長壽醫學理念，守護肌膚健康與自然狀態。位於尖沙咀，為本地與跨境客戶提供可靠、優雅的專業體驗。",
    "以精准医学美容与长寿医学理念，守护肌肤健康与自然状态。位于尖沙咀，为本地与跨境客户提供可靠、优雅的专业体验。",
    "Precise medical aesthetics and longevity care for healthy, natural skin. Based in Tsim Sha Tsui for local and cross-border clients."
  ),
  aboutEyebrow: "About the Clinic",
  aboutTitle: L(
    "真正醫學美容，從理解肌膚開始",
    "真正医学美容，从理解肌肤开始",
    "True medical aesthetics starts with understanding skin"
  ),
  aboutLead: L(
    "我們提倡真正醫學美容概念，療程由具經驗的醫學美容團隊主理，細心為客人的皮膚問題提供解決方案，改善肌膚質素。",
    "我们提倡真正医学美容概念，疗程由具经验的医学美容团队主理，细心为客人的皮肤问题提供解决方案，改善肌肤质素。",
    "We practise true medical aesthetics. Experienced clinicians tailor solutions to your skin concerns and improve skin quality."
  ),
  aboutBody: L(
    "服務包括 Laser 激光去斑及收毛孔、HI-FIVE 聚焦超聲波緊膚、Thermage® 單極射頻緊膚、SRF 膠原直擊療程、Chemical Peeling 醫學煥膚、Botox® 肉毒桿菌注射、Filler 透明質酸填充物注射、MRF 分段式射頻、Apogee 激光脫毛等，並引入最新儀器與科研美容技術，安全可靠。",
    "服务包括 Laser 激光去斑及收毛孔、HI-FIVE 聚焦超声波紧肤、Thermage® 单极射频紧肤、SRF 胶原直击疗程、Chemical Peeling 医学焕肤、Botox® 肉毒杆菌注射、Filler 透明质酸填充物注射、MRF 分段式射频、Apogee 激光脱毛等，并引入最新仪器与科研美容技术，安全可靠。",
    "Services include laser pigmentation and pore care, HI-FIVE ultrasound tightening, Thermage® monopolar RF, SRF collagen treatments, medical peels, Botox®, hyaluronic fillers, MRF fractional RF, Apogee laser hair removal, and more — with modern devices and clinically proven techniques."
  ),
  catsEyebrow: "Treatment Categories",
  catsTitle: L("療程導航", "疗程导航", "Treatment navigation"),
  catsLead: L(
    "按需求選擇專業皇牌、生髮護髮、針劑、養生與生活美容療程。",
    "按需求选择专业皇牌、生发护发、针剂、养生与生活美容疗程。",
    "Choose signature, hair, injectables, wellness or beauty treatments."
  ),
  longevityEyebrow: "Longevity Medicine",
  longevityTitle: L(
    "不止醫美，更關注長期健康狀態",
    "不止医美，更关注长期健康状态",
    "Beyond aesthetics — long-term health"
  ),
  longevityLead: L(
    "我們正以「長壽醫學」為主題，建立覆蓋官網、AI 搜尋與社交媒體的內容資產，幫助客戶理解抗衰老與預防醫學。從肌膚保養到全身機能，以預防與評估為先，守護健康與自然狀態。",
    "我们正以「长寿医学」为主题，建立覆盖官网、AI 搜寻与社交媒体的内容资产，帮助客户理解抗衰老与预防医学。从肌肤保养到全身机能，以预防与评估为先，守护健康与自然状态。",
    "We build longevity-focused content across our site, AI search and social channels to help clients understand anti-aging and preventive care — from skin to whole-body wellbeing."
  ),
  popularEyebrow: "Signature Care",
  popularTitle: L("熱門療程推薦", "热门疗程推荐", "Popular treatments"),
  ctaEyebrow: "Consultation",
  ctaTitle: L("預約專業諮詢", "预约专业咨询", "Book a consultation"),
  ctaLead: L(
    "留下您的需求，或透過熱線 (852) 3166 1986 與我們聯絡。亦可使用右下角綠色按鈕。",
    "留下您的需求，或透过热线 (852) 3166 1986 与我们联络。亦可使用右下角绿色按钮。",
    "Share your needs or call (852) 3166 1986. You can also use the green WhatsApp button."
  ),
  categoryCards: [
    {
      id: "signature",
      num: "01",
      titleKey: "cat_signature",
      href: "treatments/signature",
      image: "/images/cat-signature.jpg",
      desc: L(
        "Thermage FLX 提拉緊緻射頻、M22 光子嫩膚、CO₂ 二氧化碳激光、BTL 系列儀器等，FDA / CE 認證的精準抗衰與緊緻方案。",
        "Thermage FLX 提拉紧致射频、M22 光子嫩肤、CO₂ 二氧化碳激光、BTL 系列仪器等，FDA / CE 认证的精准抗衰与紧致方案。",
        "Thermage FLX, M22 photorejuvenation, CO₂ laser, BTL devices and more — FDA/CE-cleared options for precise anti-ageing and tightening."
      ),
    },
    {
      id: "injectables",
      num: "02",
      titleKey: "cat_injectables",
      href: "treatments/injectables",
      image: "/images/cat-injectables.jpg",
      desc: L(
        "Restylane、Profhilo、Juvéderm 透明質酸，Botox、Xeomin、Dysport 肉毒桿菌，童顏針、少女針等再生針劑。",
        "Restylane、Profhilo、Juvéderm 透明质酸，Botox、Xeomin、Dysport 肉毒杆菌，童颜针、少女针等再生针剂。",
        "Restylane, Profhilo, Juvéderm HA, Botox, Xeomin, Dysport, and regenerative injectables."
      ),
    },
    {
      id: "hair",
      num: "03",
      titleKey: "cat_hair",
      href: "treatments/hair",
      image: "/images/cat-hair.jpg",
      desc: L(
        "注滲精華技術養護毛囊、不傷髮，對抗規律性脫髮、持續性脫髮與雄激素性脫髮。",
        "注渗精华技术养护毛囊、不伤发，对抗规律性脱发、持续性脱发与雄激素性脱发。",
        "Follicle-nourishing infusion care for patterned, persistent and androgenetic hair loss."
      ),
    },
    {
      id: "wellness",
      num: "04",
      titleKey: "cat_wellness",
      href: "treatments/wellness",
      image: "/images/virtual-gym.png",
      desc: L(
        "Virtual Gym 激纖易採用「生物共振訊號科技」，一次療程燃燒高達 5,000 卡路里。",
        "Virtual Gym 激纤易采用「生物共振讯号科技」，一次疗程燃烧高达 5,000 卡路里。",
        "Virtual Gym uses bio-resonance signalling technology, burning up to 5,000 calories per session."
      ),
    },
    {
      id: "beauty",
      num: "05",
      titleKey: "cat_beauty",
      href: "treatments/beauty",
      image: "/images/cat-beauty.jpg",
      desc: L(
        "豐胸、電動微針駐顏納米晶片、孕睫術、灰甲 1064nm 激光等日常美容護理。",
        "丰胸、电动微针驻颜纳米晶片、孕睫术、灰甲 1064nm 激光等日常美容护理。",
        "Breast care, nano-chip microneedling, lash growth and 1064nm laser for nail fungus, and more."
      ),
    },
  ],
  popular: [
    {
      id: "thermage",
      title: L(
        "Thermage FLX 提拉緊緻射頻",
        "Thermage FLX 提拉紧致射频",
        "Thermage FLX RF tightening"
      ),
      desc: L(
        "單極射頻深達 1.1–4.3mm，持續激發膠原增生，抗皺緊緻、輪廓提升，效果長效。",
        "单极射频深达 1.1–4.3mm，持续激发胶原增生，抗皱紧致、轮廓提升，效果长效。",
        "Monopolar RF to 1.1–4.3mm stimulates collagen for lasting firmness and contour."
      ),
    },
    {
      id: "m22",
      title: L(
        "M22 光子嫩膚",
        "M22 光子嫩肤",
        "M22 Photorejuvenation"
      ),
      desc: L(
        "選擇性治療不同皮層的紅血絲與色素沉積，嫩膚同時溫和保護表層皮膚。",
        "选择性治疗不同皮层的红血丝与色素沉积，嫩肤同时温和保护表层皮肤。",
        "Targets redness and pigment across skin layers while protecting the surface."
      ),
    },
    {
      id: "scar-repair",
      title: L("凹凸洞疤痕修復", "凹凸洞疤痕修复", "Atrophic acne scar repair"),
      desc: L(
        "凹凸洞是真皮層結構性塌陷，需分型而治、複合式階梯重建，而非單一儀器打天下。",
        "凹凸洞是真皮层结构性塌陷，需分型而治、复合式阶梯重建，而非单一仪器打天下。",
        "Pitted scars are dermal collapse — typed and rebuilt in stages, not one device for all."
      ),
    },
    {
      id: "exilis",
      title: L(
        "BTL Exilis Ultra 360 眼部超頻緊緻膠原槍",
        "BTL Exilis Ultra 360 眼部超频紧致胶原枪",
        "BTL Exilis Ultra 360 Eye Collagen Gun"
      ),
      desc: L(
        "超聲波結合單極射頻，刺激眼底膠原與彈力蛋白增生，緊緻眼周、撫平眼紋，非入侵性無恢復期。",
        "超声波结合单极射频，刺激眼底胶原与弹力蛋白增生，紧致眼周、抚平眼纹，非入侵性无恢复期。",
        "Ultrasound plus monopolar RF to stimulate periocular collagen and elastin — firm, smooth, no downtime."
      ),
    },
  ],
};
