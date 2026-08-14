import { L } from "@/content/i18n/ui";
import type { LocalizedString } from "@/lib/i18n";

export const aboutContent = {
  metaTitle: L(
    "品牌介紹｜Spring Medical",
    "品牌介绍｜Spring Medical",
    "About｜Spring Medical"
  ),
  metaDescription: L(
    "Spring Medical 以專業技術突破傳統美容效果，由醫生主理，選用 FDA 認可效用之療程。",
    "Spring Medical 以专业技术突破传统美容效果，由医生主理，选用 FDA 认可效用之疗程。",
    "Spring Medical delivers doctor-led medical aesthetics with FDA-recognised technologies."
  ),
  crumb: L("品牌介紹", "品牌介绍", "About"),
  eyebrow: "About Spring Medical",
  title: L(
    "以醫學態度，成就自然之美",
    "以医学态度，成就自然之美",
    "Medical care for natural beauty"
  ),
  heroLead: L(
    "Spring Medical 以專業技術突破傳統美容效果，搜羅最新儀器及研發美容技術，提供一系列專業醫學「美形」與抗衰老療程，由醫生主理，選用 FDA 認可效用之療程，安全可靠。",
    "Spring Medical 以专业技术突破传统美容效果，搜罗最新仪器及研发美容技术，提供一系列专业医学「美形」与抗衰老疗程，由医生主理，选用 FDA 认可效用之疗程，安全可靠。",
    "Spring Medical combines advanced devices and doctor-led protocols for medical contouring and anti-ageing — using FDA-recognised treatments for safety and reliability."
  ),
  philosophyTitle: L("我們的理念", "我们的理念", "Our philosophy"),
  philosophyBody: L(
    "我們不斷搜羅最新儀器及研發高效美容技術，包括引入最新《第四代眼袋槍》、《幸福椅》、自生膠原蛋白、逆齡提拉等儀器及技術，以專業技術突破傳統美容效果，定制個人化「美肌」、「美形」、纖體、抗衰老方案，重拾嫩滑初肌、迷人線條。",
    "我们不断搜罗最新仪器及研发高效美容技术，包括引入最新《第四代眼袋枪》、《幸福椅》、自生胶原蛋白、逆龄提拉等仪器及技术，以专业技术突破传统美容效果，定制个人化「美肌」、「美形」、纤体、抗衰老方案，重拾嫩滑初肌、迷人线条。",
    "We continually introduce advanced devices and techniques — from eye-bag RF systems and intimate wellness chairs to collagen-stimulating and lifting technologies — for personalised skin, contour, body and anti-ageing plans."
  ),
  philosophyMuted: L(
    "選用美國食品及藥物管理局（FDA）、歐盟 28 個國家之安全保證（CE）、韓國食品藥品監督管理局（KFDA）認可效用之療程儀器及技術，安全可靠。我們將醫學美容與長壽醫學思維結合，讓美建立在皮膚健康與長期狀態管理之上。",
    "选用美国食品及药物管理局（FDA）、欧盟 28 个国家之安全保证（CE）、韩国食品药品监督管理局（KFDA）认可效用之疗程仪器及技术，安全可靠。我们将医学美容与长寿医学思维结合，让美建立在皮肤健康与长期状态管理之上。",
    "We favour FDA-, CE- and KFDA-recognised technologies, combining medical aesthetics with longevity thinking so beauty rests on healthy skin and long-term care."
  ),
  whyTitle: L("為什麼選擇我們", "为什么选择我们", "Why choose us"),
  reasons: [
    {
      num: "01",
      title: L("醫學導向", "医学导向", "Medicine-led"),
      desc: L(
        "以評估與方案為先，避免一刀切推銷。",
        "以评估与方案为先，避免一刀切推销。",
        "Assessment and planning first — not one-size-fits-all selling."
      ),
    },
    {
      num: "02",
      title: L("尖沙咀便利位置", "尖沙咀便利位置", "Convenient TST location"),
      desc: L(
        "港鐵尖沙咀站A2出口出閘，沿通道直行約30步即達，交通方便，適合本地與來港客戶。",
        "港铁尖沙咀站A2出口出闸，沿通道直行约30步即达，交通方便，适合本地与来港客户。",
        "Steps from MTR Tsim Sha Tsui Exit A2 — convenient for local and visiting clients."
      ),
    },
    {
      num: "03",
      title: L("療程覆蓋完整", "疗程覆盖完整", "Full treatment range"),
      desc: L(
        "從皇牌儀器到針劑、生髮與養生，滿足不同需求。",
        "从皇牌仪器到针剂、生发与养生，满足不同需求。",
        "From signature devices to injectables, hair and wellness."
      ),
    },
  ] as { num: string; title: LocalizedString; desc: LocalizedString }[],
  partnersTitle: L("合作品牌", "合作品牌", "Partners"),
  partnerLogos: [
    { src: "/images/brand-m22.png", alt: "M22" },
    { src: "/images/btl-exilis.png", alt: "BTL Exilis" },
    { src: "/images/btl-emsella.png", alt: "BTL Emsella" },
    { src: "/images/brand-btl.png", alt: "BTL" },
    { src: "/images/brand-dana.png", alt: "Dana" },
    { src: "/images/derma-veil.png", alt: "Derma Veil" },
    { src: "/images/dysport.png", alt: "Dysport" },
    { src: "/images/neauvia.png", alt: "Neauvia" },
    { src: "/images/brand-profhilo.png", alt: "Profhilo" },
    { src: "/images/radiesse.png", alt: "Radiesse" },
    { src: "/images/restylane.png", alt: "Restylane" },
    { src: "/images/brand-thermage-logo.png", alt: "Thermage FLX" },
    { src: "/images/brand-ultra-v-ez.png", alt: "Ultra V EZ" },
    { src: "/images/xeomin.png", alt: "Xeomin" },
    { src: "/images/brand-ellanse.png", alt: "Ellansé" },
    { src: "/images/brand-juvederm.png", alt: "Juvéderm" },
  ],
  ctaTitle: L(
    "歡迎到店了解更適合您的方案",
    "欢迎到店了解更适合您的方案",
    "Visit us for a personalised plan"
  ),
  ctaHours: L(
    "營業時間：星期一至六 11:00–20:00",
    "营业时间：周一至周六 11:00–20:00",
    "Hours: Mon–Sat 11:00–20:00"
  ),
};
