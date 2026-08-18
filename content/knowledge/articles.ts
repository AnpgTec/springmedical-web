import { pick, type Locale, type LocalizedString } from "@/lib/i18n";

export type KnowledgeSection = "aesthetic" | "longevity";

export type KnowledgeArticle = {
  id: string;
  slug: string;
  section?: KnowledgeSection;
  eyebrow?: string;
  /** Listing card only. Not shown in the article body. */
  cover?: string;
  /** First figure in the article body. */
  image?: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  body: LocalizedString;
};

export function articleCover(article: KnowledgeArticle): string | undefined {
  return article.cover;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripImagesWithSrc(html: string, src: string): string {
  const q = escapeRegExp(src);
  return html
    .replace(
      new RegExp(
        `<figure[^>]*>\\s*<img[^>]*src="${q}"[^>]*>\\s*(?:<figcaption>[\\s\\S]*?</figcaption>\\s*)?</figure>`,
        "gi"
      ),
      ""
    )
    .replace(new RegExp(`<img[^>]*src="${q}"[^>]*>`, "gi"), "");
}

export function articleBodyHtml(article: KnowledgeArticle, locale: Locale): string {
  const body = pick(article.body, locale);
  const lead = article.image;
  if (!lead) return body;
  const alt = pick(article.title, locale).replace(/"/g, "&quot;");
  return `<figure class="article-fig"><img src="${lead}" alt="${alt}" /></figure>\n${stripImagesWithSrc(body, lead)}`;
}

export const articles: KnowledgeArticle[] = [
  {
    id: "1",
    slug: "1",
    eyebrow: "M22",
    cover: "/images/M22-knowledge2.png",
    image: "/images/M22-knowledge2.png",
    title: { "zh-HK": `M22 光子嫩膚——醫美界全能王者，一機終結8大肌膚問題`, "zh-CN": `M22 光子嫩肤——医美界全能王者，一机终结8大肌肤问题`, en: `M22 Photorejuvenation — The All-Rounder of Medical Aesthetics: One Device for Eight Skin Concerns` },
    excerpt: { "zh-HK": `全球超過百萬用家實證的「皮膚問題終結者」，一機解決 8 大肌膚問題。`, "zh-CN": `全球超过百万用家实证的「皮肤问题终结者」，一机解决 8 大肌肤问题。`, en: `The globally proven “skin-problem terminator”, trusted by over a million users — one device for eight major skin concerns.` },
    body: { "zh-HK": `<p>全球超過百萬用家實證的「皮膚問題終結者」</p><p>M22 由全球醫療美容設備領導者 Lumenis（科醫人）研發，是強脈衝光（IPL）技術的黃金標準。其超光子 AOPT 平台，配合 5D 全息定位技術，能夠智能篩選、精準打擊，不浪費能量於無關組織上——即意味著效果更強、見效更快、過程更安全舒適。</p><p>M22 八大皇牌功效——全面解決肌膚困擾</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>類別</th><th>功效</th><th>強效之處</th></tr></thead><tbody><tr><td>暗瘡治療</td><td>強效消炎殺菌，徹底改善暗瘡、粉刺、痘印</td><td>痤瘡專用濾光片雙波段截擊，直接殺滅痤瘡桿菌，從根源杜絕</td></tr><tr><td>緊緻去皺</td><td>激活膠原大量新生，撫平細紋、收緊鬆弛</td><td>熱能直達真皮層，膠原重組效果媲美射頻拉提，單次已見改善</td></tr><tr><td>淡化色素</td><td>精準擊碎雀斑、曬斑、荷爾蒙斑、頑固痘印</td><td>多組濾光片分層處理，淺層深層色斑無所遁形</td></tr><tr><td>去斑淨白</td><td>均勻膚色，由內而外透出亮白光芒</td><td>單次療程已可見色斑明顯淡化、膚色整體提亮</td></tr><tr><td>改善泛紅肌</td><td>極速舒緩面部潮紅、敏感泛紅、發熱不適</td><td>血管專用濾光片精準封閉擴張血管，徹底告別泛紅困擾</td></tr><tr><td>改善血管問題</td><td>封閉紅血絲、微絲血管擴張</td><td>雙波段截取技術，針對性凝固異常血管，效果立竿見影</td></tr><tr><td>改善玫瑰痤瘡</td><td>強效控制炎症，穩定玫瑰痤瘡、減少復發</td><td>抗炎與修復雙管齊下，擺脫長期依賴類固醇的惡性循環</td></tr><tr><td>收細毛孔</td><td>強效控油，毛孔顯著細緻，膚質即時升級</td><td>熱能刺激膠原收縮，毛孔由粗大變細緻，肌膚回復光滑</td></tr></tbody></table></div><p>舒適度極高——告別傳統彩光的刺痛感</p><p>傳統彩光療程常為人詬病之處，在於過程中的刺痛感與灼熱不適。M22 AOPT 超光子平台在此方面實現了革命性突破：</p><p>· 智能脈衝調控：能量輸出更均勻、更溫和，避免傳統彩光「能量尖峰」造成的燙傷風險與不適感<br>· 藍寶石接觸式冷卻：治療頭內置高效冷卻系統，於發光瞬間同步冷卻表皮，確保全程冰涼舒適<br>· 臨床舒適度數據：研究顯示，M22 的疼痛評分明顯低於傳統彩光設備，絕大多數用家描述為「輕微橡皮筋彈感」或「溫熱感」，完全在可接受範圍內</p><p>結論：M22 讓光子嫩膚由「忍痛變靚」進化為「舒適變靚」。</p><p>M22 與傳統彩光的關鍵差異</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>比較項目</th><th>傳統彩光</th><th>M22 超光子（AOPT）</th></tr></thead><tbody><tr><td>技術層面</td><td>輸出固定，能量「一刀切」</td><td>5D全息定位，智能調節能量</td></tr><tr><td>精準度</td><td>能量分散，效果參差</td><td>精準篩選靶色基，集中打擊目標</td></tr><tr><td>舒適度</td><td>刺痛感明顯，熱能累積</td><td>智能冷卻＋脈衝調控，舒適度大幅提升</td></tr><tr><td>安全性</td><td>容易過熱灼傷</td><td>多級冷卻保護，安全可靠</td></tr><tr><td>見效速度</td><td>需多次治療</td><td>更快見效，療程次數更少</td></tr></tbody></table></div><p>權威認證——全球數據實證</p><p>· 全球超過 100 萬 用家實證<br>· 獲美國 FDA 及歐盟 CE 雙重認證<br>· 超過 50 項 臨床研究支持其功效與安全性</p><p>適合對象</p><p>· 想同時處理暗啞、色斑、泛紅三大膚色問題<br>· 面部有雀斑、曬斑、荷爾蒙斑、痘印等色素困擾<br>· 有紅血絲、面部潮紅、敏感肌等血管性問題<br>· 希望收細毛孔、改善細紋、提亮膚色作日常保養<br>· 受暗瘡、粉刺、玫瑰痤瘡困擾的炎症性皮膚<br>· 追求最快見效、最少次數、最全面的皮膚治療方案<br>· 對疼痛敏感、希望療程舒適無負擔的人士</p><p>療程簡介</p><p>· 單次治療時間：約 15-20 分鐘<br>· 建議療程：3-6 次為一個完整療程，每次間隔約 1 個月<br>· 效果維持：完成療程後，效果可維持 1-3 年<br>· 恢復期：零恢復期，治療後即可恢復日常活動，即日可化妝</p><p>術後護理須知</p><p>1. 嚴格防曬：治療後一週內避免暴曬，以防反黑及色素沉著<br>2. 保濕修復為主：避免使用美白、去角質等刺激性功能性產品<br>3. 醫用敷料輔助：治療後 3-7 天可每日敷用醫用修復面膜，以補水、消炎、促進修復</p><p>總結</p><p>M22 是一部能夠同時解決 8 大皮膚問題的「全能戰機」——去斑、去紅、去暗瘡、收毛孔、抗皺，一部機全面覆蓋。更配備智能冷卻系統與精準脈衝調控，讓整個治療過程舒適無痛、零恢復期。</p><p>與其逐一處理各項肌膚問題，耗費時間與金錢，不如一機到位，高效、舒適、徹底。</p>`, "zh-CN": `<p>全球超过百万用家实证的「皮肤问题终结者」</p><p>M22 由全球医疗美容设备领导者 Lumenis（科医人）研发，是强脉冲光（IPL）技术的黄金标准。其超光子 AOPT 平台，配合 5D 全息定位技术，能够智能筛选、精准打击，不浪费能量于无关组织上——即意味著效果更强、见效更快、过程更安全舒适。</p><p>M22 八大皇牌功效——全面解决肌肤困扰</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>类别</th><th>功效</th><th>强效之处</th></tr></thead><tbody><tr><td>暗疮治疗</td><td>强效消炎杀菌，彻底改善暗疮、粉刺、痘印</td><td>痤疮专用滤光片双波段截击，直接杀灭痤疮杆菌，从根源杜绝</td></tr><tr><td>紧致去皱</td><td>激活胶原大量新生，抚平细纹、收紧松弛</td><td>热能直达真皮层，胶原重组效果媲美射频拉提，单次已见改善</td></tr><tr><td>淡化色素</td><td>精准击碎雀斑、晒斑、荷尔蒙斑、顽固痘印</td><td>多组滤光片分层处理，浅层深层色斑无所遁形</td></tr><tr><td>去斑净白</td><td>均匀肤色，由内而外透出亮白光芒</td><td>单次疗程已可见色斑明显淡化、肤色整体提亮</td></tr><tr><td>改善泛红肌</td><td>极速舒缓面部潮红、敏感泛红、发热不适</td><td>血管专用滤光片精准封闭扩张血管，彻底告别泛红困扰</td></tr><tr><td>改善血管问题</td><td>封闭红血丝、微丝血管扩张</td><td>双波段截取技术，针对性凝固异常血管，效果立竿见影</td></tr><tr><td>改善玫瑰痤疮</td><td>强效控制炎症，稳定玫瑰痤疮、减少复发</td><td>抗炎与修复双管齐下，摆脱长期依赖类固醇的恶性循环</td></tr><tr><td>收细毛孔</td><td>强效控油，毛孔显著细致，肤质即时升级</td><td>热能刺激胶原收缩，毛孔由粗大变细致，肌肤回复光滑</td></tr></tbody></table></div><p>舒适度极高——告别传统彩光的刺痛感</p><p>传统彩光疗程常为人诟病之处，在于过程中的刺痛感与灼热不适。M22 AOPT 超光子平台在此方面实现了革命性突破：</p><p>· 智能脉冲调控：能量输出更均匀、更温和，避免传统彩光「能量尖峰」造成的烫伤风险与不适感<br>· 蓝宝石接触式冷却：治疗头内置高效冷却系统，于发光瞬间同步冷却表皮，确保全程冰凉舒适<br>· 临床舒适度数据：研究显示，M22 的疼痛评分明显低于传统彩光设备，绝大多数用家描述为「轻微橡皮筋弹感」或「温热感」，完全在可接受范围内</p><p>结论：M22 让光子嫩肤由「忍痛变靓」进化为「舒适变靓」。</p><p>M22 与传统彩光的关键差异</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>比较项目</th><th>传统彩光</th><th>M22 超光子（AOPT）</th></tr></thead><tbody><tr><td>技术层面</td><td>输出固定，能量「一刀切」</td><td>5D全息定位，智能调节能量</td></tr><tr><td>精准度</td><td>能量分散，效果参差</td><td>精准筛选靶色基，集中打击目标</td></tr><tr><td>舒适度</td><td>刺痛感明显，热能累积</td><td>智能冷却＋脉冲调控，舒适度大幅提升</td></tr><tr><td>安全性</td><td>容易过热灼伤</td><td>多级冷却保护，安全可靠</td></tr><tr><td>见效速度</td><td>需多次治疗</td><td>更快见效，疗程次数更少</td></tr></tbody></table></div><p>权威认证——全球数据实证</p><p>· 全球超过 100 万 用家实证<br>· 获美国 FDA 及欧盟 CE 双重认证<br>· 超过 50 项 临床研究支持其功效与安全性</p><p>适合对象</p><p>· 想同时处理暗哑、色斑、泛红三大肤色问题<br>· 面部有雀斑、晒斑、荷尔蒙斑、痘印等色素困扰<br>· 有红血丝、面部潮红、敏感肌等血管性问题<br>· 希望收细毛孔、改善细纹、提亮肤色作日常保养<br>· 受暗疮、粉刺、玫瑰痤疮困扰的炎症性皮肤<br>· 追求最快见效、最少次数、最全面的皮肤治疗方案<br>· 对疼痛敏感、希望疗程舒适无负担的人士</p><p>疗程简介</p><p>· 单次治疗时间：约 15-20 分钟<br>· 建议疗程：3-6 次为一个完整疗程，每次间隔约 1 个月<br>· 效果维持：完成疗程后，效果可维持 1-3 年<br>· 恢复期：零恢复期，治疗后即可恢复日常活动，即日可化妆</p><p>术后护理须知</p><p>1. 严格防晒：治疗后一周内避免暴晒，以防反黑及色素沉著<br>2. 保湿修复为主：避免使用美白、去角质等刺激性功能性产品<br>3. 医用敷料辅助：治疗后 3-7 天可每日敷用医用修复面膜，以补水、消炎、促进修复</p><p>总结</p><p>M22 是一部能够同时解决 8 大皮肤问题的「全能战机」——去斑、去红、去暗疮、收毛孔、抗皱，一部机全面覆盖。更配备智能冷却系统与精准脉冲调控，让整个治疗过程舒适无痛、零恢复期。</p><p>与其逐一处理各项肌肤问题，耗费时间与金钱，不如一机到位，高效、舒适、彻底。</p>`, en: `<p>The globally proven “skin-problem terminator”, trusted by over a million users</p><p>M22 is developed by Lumenis, a global leader in medical aesthetic devices, and is the gold standard in Intense Pulsed Light (IPL) technology. Its ultra-photon AOPT platform, combined with 5D holographic targeting, can intelligently screen and strike with precision, without wasting energy on unrelated tissue — meaning stronger results, faster onset, and a safer, more comfortable experience.</p><p>M22’s eight signature benefits — a comprehensive solution for skin concerns</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>Category</th><th>Benefit</th><th>What makes it powerful</th></tr></thead><tbody><tr><td>Acne treatment</td><td>Potent anti-inflammatory and antibacterial action, thoroughly improving acne, comedones and post-acne marks</td><td>Acne-specific filters intercept two wavelengths, directly targeting Cutibacterium acnes and addressing the problem at its source</td></tr><tr><td>Firming and wrinkle reduction</td><td>Activates abundant new collagen, smoothing fine lines and tightening laxity</td><td>Heat reaches the dermis directly; collagen remodelling rivals radiofrequency lifting, with visible improvement after a single session</td></tr><tr><td>Pigment fading</td><td>Precisely shatters freckles, sun spots, hormonal pigmentation and stubborn post-acne marks</td><td>Multiple filter sets treat in layers, leaving neither superficial nor deep pigment anywhere to hide</td></tr><tr><td>Spot clearing and brightening</td><td>Evens skin tone, revealing a brighter glow from within</td><td>A single session can already show noticeable fading of spots and overall brightening of complexion</td></tr><tr><td>Improving facial redness</td><td>Rapidly soothes facial flushing, sensitivity-related redness and a sensation of heat</td><td>Vascular-specific filters precisely close dilated vessels, thoroughly bidding farewell to redness</td></tr><tr><td>Improving vascular concerns</td><td>Closes broken capillaries and telangiectasia</td><td>Dual-wavelength interception technology coagulates abnormal vessels in a targeted way, with prompt visible results</td></tr><tr><td>Improving rosacea</td><td>Potently controls inflammation, stabilises rosacea and reduces recurrence</td><td>Anti-inflammatory action and repair work in tandem, breaking the vicious cycle of long-term steroid dependence</td></tr><tr><td>Pore refinement</td><td>Potent oil control, visibly finer pores and an immediate upgrade in skin texture</td><td>Heat stimulates collagen contraction; pores go from enlarged to refined, and skin returns to smoothness</td></tr></tbody></table></div><p>Exceptional comfort — saying goodbye to the stinging of traditional IPL</p><p>A common complaint about traditional IPL treatments is the stinging and burning discomfort during the session. The M22 AOPT ultra-photon platform represents a revolutionary breakthrough in this regard:</p><p>· Intelligent pulse control: energy output is more even and gentler, avoiding the burn risk and discomfort caused by traditional IPL “energy spikes”<br>· Sapphire contact cooling: the treatment handpiece has a built-in high-efficiency cooling system that cools the epidermis in sync with each flash of light, keeping the entire session cool and comfortable<br>· Clinical comfort data: studies show that M22’s pain scores are significantly lower than those of traditional IPL devices. The vast majority of users describe it as a “mild rubber-band snap” or a “warm sensation”, well within an acceptable range</p><p>In short: M22 has taken photorejuvenation from “enduring pain to look better” to “looking better in comfort”.</p><p>Key differences between M22 and traditional IPL</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>Comparison</th><th>Traditional IPL</th><th>M22 ultra-photon (AOPT)</th></tr></thead><tbody><tr><td>Technology</td><td>Fixed output; energy applied with a “one-size-fits-all” approach</td><td>5D holographic targeting with intelligent energy adjustment</td></tr><tr><td>Precision</td><td>Energy is dispersed; results are inconsistent</td><td>Precisely screens target chromophores and concentrates energy on the intended target</td></tr><tr><td>Comfort</td><td>Noticeable stinging and heat build-up</td><td>Intelligent cooling plus pulse control, with a substantial improvement in comfort</td></tr><tr><td>Safety</td><td>Prone to overheating and burns</td><td>Multi-level cooling protection; safe and reliable</td></tr><tr><td>Speed of results</td><td>Requires multiple treatments</td><td>Faster visible results, with fewer sessions needed</td></tr></tbody></table></div><p>Authoritative certification — proven by global data</p><p>· Proven by more than 1 million users worldwide<br>· Dual certification from the US FDA and EU CE<br>· More than 50 clinical studies supporting its efficacy and safety</p><p>Who it is for</p><p>· Those who want to address dullness, pigmentation and redness — the three major complexion concerns — at the same time<br>· Those with freckles, sun spots, hormonal pigmentation, post-acne marks or other pigment concerns on the face<br>· Those with broken capillaries, facial flushing, sensitive skin or other vascular concerns<br>· Those who wish to refine pores, improve fine lines and brighten complexion as part of routine skin maintenance<br>· Those with inflammatory skin conditions such as acne, comedones or rosacea<br>· Those seeking the fastest results, the fewest sessions and the most comprehensive skin treatment plan<br>· Those who are sensitive to pain and want a comfortable treatment with little burden</p><p>Treatment overview</p><p>· Single session duration: about 15–20 minutes<br>· Recommended course: 3–6 sessions as a complete course, with about 1 month between sessions<br>· Duration of results: after completing the course, results may last 1–3 years<br>· Downtime: zero downtime; daily activities can resume immediately after treatment, and make-up may be applied the same day</p><p>Aftercare notes</p><p>1. Strict sun protection: avoid intense sun exposure for one week after treatment to prevent rebound darkening and pigmentation<br>2. Focus on hydration and repair: avoid stimulating functional products such as brightening or exfoliating formulas<br>3. Medical dressings as support: medical repair masks may be applied daily for 3–7 days after treatment to hydrate, calm inflammation and support recovery</p><p>Summary</p><p>M22 is an “all-rounder” that can address eight major skin concerns at once — clearing spots, reducing redness, treating acne, refining pores and fighting wrinkles, all covered by a single device. It is further equipped with an intelligent cooling system and precise pulse control, so the entire treatment is comfortable, essentially painless, and involves zero downtime.</p><p>Rather than tackling each skin concern one by one, spending time and money along the way, it is more efficient to address them with one device — effectively, comfortably and thoroughly.</p>` },
  },
  {
    id: "2",
    slug: "2",
    eyebrow: "Ultherapy",
    cover: "/images/knowledge-cover-2.jpg",
    image: "/images/knowledge-cover-2.jpg",
    title: { "zh-HK": `Ultherapy PRIME 第二代：如何透過深層重建讓你變靚？`, "zh-CN": `Ultherapy PRIME 第二代：如何透过深层重建让你变靓？`, en: `Ultherapy PRIME Generation 2: How Deep Remodelling Helps You Look Better` },
    excerpt: { "zh-HK": `Ultherapy PRIME 第二代透過深層重建，自然且持久地改善輪廓與膚質。`, "zh-CN": `Ultherapy PRIME 第二代透过深层重建，自然且持久地改善轮廓与肤质。`, en: `Second-generation Ultherapy PRIME uses deep remodelling to improve contour and skin quality naturally and lastingly.` },
    body: { "zh-HK": `<p>Ultherapy PRIME 第二代的終極目標，並非單純表面拉緊，而是透過精準加熱皮膚深層組織，啟動自身修復機制，從根本改善輪廓與膚質，達到自然且持久的年輕化效果。其變靚路徑可歸納為以下三個層面：</p><p>一、 輪廓重塑：拉提下垂組織</p><p>· 作用機理：能量精確加熱至4.5mm深處的淺表筋膜層（SMAS）——即手術拉皮時會處理的深層結構。透過熱能收縮，產生即時拉提效果，同時刺激膠原增生，鞏固支撐力。</p><p>· 變靚效果：有效改善眉毛下垂、下頷線模糊、雙下巴及頸部鬆弛，重塑清晰緊緻的V面輪廓，令面部線條更立體年輕。</p><p>二、 膚質改善：逆轉細紋與鬆弛</p><p>· 作用機理：能量同時作用於3.0mm及1.5mm深處的真皮層，加熱至60°C–70°C，刺激大量膠原蛋白與彈性蛋白新生，填補肌膚底層的支撐結構。<br>· 變靚效果：前胸細紋、面部靜態紋路（如虎紋、木偶紋）顯著減淡，皮膚彈性與厚度增加，觸感更飽滿緊實，重現細緻光澤。</p><p>三、 舒適變靚：無痛無痕的體驗</p><p>· 進化優勢：第二代設備螢幕可視範圍大增77%，醫生可實時避開血管與骨骼，確保能量精準落點；同時痛感、紅腫較前代平均降低約50%。</p><p>· 變靚體驗：單次療程僅約35分鐘，術後零恢復期，可即時化妝返回生活。效果於3至6個月漸進達頂峰，並維持1年或更長，讓你「不知不覺」變靚，無需承受手術風險與漫長修復。</p><p>---</p><p>💡 適用部位與安全須知</p><p>· 已認證範圍：臉部（眉、下頷、頸部）、前胸、腹部及手臂。<br>· 關鍵安全提醒：效果雖顯著，但所有醫美均有風險。曾有極少數不良事件（如面部萎縮、神經損傷）報告。務必選擇正規醫療機構及經驗豐富之醫師操作；孕婦及嚴重皮膚病患者不建議進行。</p><p>💎 總結</p><p>Ultherapy PRIME 第二代並非「表面功夫」，而是從輪廓拉提、膚質重建到舒適體驗三管齊下，讓你在無恢復期的情況下，實現自然、漸進且持久的整體年輕化蛻變。</p>`, "zh-CN": `<p>Ultherapy PRIME 第二代的终极目标，并非单纯表面拉紧，而是透过精准加热皮肤深层组织，启动自身修复机制，从根本改善轮廓与肤质，达到自然且持久的年轻化效果。其变靓路径可归纳为以下三个层面：</p><p>一、 轮廓重塑：拉提下垂组织</p><p>· 作用机理：能量精确加热至4.5mm深处的浅表筋膜层（SMAS）——即手术拉皮时会处理的深层结构。透过热能收缩，产生即时拉提效果，同时刺激胶原增生，巩固支撑力。</p><p>· 变靓效果：有效改善眉毛下垂、下颔线模糊、双下巴及颈部松弛，重塑清晰紧致的V面轮廓，令面部线条更立体年轻。</p><p>二、 肤质改善：逆转细纹与松弛</p><p>· 作用机理：能量同时作用于3.0mm及1.5mm深处的真皮层，加热至60°C–70°C，刺激大量胶原蛋白与弹性蛋白新生，填补肌肤底层的支撑结构。<br>· 变靓效果：前胸细纹、面部静态纹路（如虎纹、木偶纹）显著减淡，皮肤弹性与厚度增加，触感更饱满紧实，重现细致光泽。</p><p>三、 舒适变靓：无痛无痕的体验</p><p>· 进化优势：第二代设备萤幕可视范围大增77%，医生可实时避开血管与骨骼，确保能量精准落点；同时痛感、红肿较前代平均降低约50%。</p><p>· 变靓体验：单次疗程仅约35分钟，术后零恢复期，可即时化妆返回生活。效果于3至6个月渐进达顶峰，并维持1年或更长，让你「不知不觉」变靓，无需承受手术风险与漫长修复。</p><p>---</p><p>💡 适用部位与安全须知</p><p>· 已认证范围：脸部（眉、下颔、颈部）、前胸、腹部及手臂。<br>· 关键安全提醒：效果虽显著，但所有医美均有风险。曾有极少数不良事件（如面部萎缩、神经损伤）报告。务必选择正规医疗机构及经验丰富之医师操作；孕妇及严重皮肤病患者不建议进行。</p><p>💎 总结</p><p>Ultherapy PRIME 第二代并非「表面功夫」，而是从轮廓拉提、肤质重建到舒适体验三管齐下，让你在无恢复期的情况下，实现自然、渐进且持久的整体年轻化蜕变。</p>`, en: `<p>The ultimate goal of second-generation Ultherapy PRIME is not simply to tighten the surface. It is to heat deep skin tissue with precision, activate the body’s own repair mechanisms, and fundamentally improve contour and skin quality, achieving a natural and lasting rejuvenating effect. The path to improvement can be summarised in the following three layers:</p><p>1. Contour reshaping: lifting sagging tissue</p><p>· Mechanism of action: energy is delivered with precision to a depth of 4.5 mm, heating the Superficial Muscular Aponeurotic System (SMAS) — the same deep structure addressed in a surgical facelift. Thermal contraction produces an immediate lifting effect, while also stimulating collagen production to reinforce support.</p><p>· Visible results: effectively improves brow ptosis, a blurred jawline, double chin and neck laxity, restoring a clear, defined V-shaped facial contour and making facial lines more sculpted and youthful.</p><p>2. Skin quality improvement: reversing fine lines and laxity</p><p>· Mechanism of action: energy also acts on the dermis at depths of 3.0 mm and 1.5 mm, heating tissue to 60°C–70°C, stimulating abundant new collagen and elastin to replenish the supporting structure in the deeper layers of the skin.<br>· Visible results: fine lines on the décolletage and static facial lines (such as nasolabial folds and marionette lines) are significantly softened; skin elasticity and thickness increase, the feel becomes fuller and firmer, and a refined glow returns.</p><p>3. Comfortable improvement: a painless, scar-free experience</p><p>· Evolutionary advantage: the second-generation device’s on-screen visualisation range is increased by 77%, allowing the doctor to avoid blood vessels and bone in real time and ensure energy lands with precision. Pain, redness and swelling are also reduced by about 50% on average compared with the previous generation.</p><p>· Treatment experience: a single session takes only about 35 minutes, with zero downtime afterwards; you can apply make-up and return to daily life immediately. Results gradually reach their peak over 3 to 6 months and last for 1 year or longer, allowing you to look better “without noticing it happen”, without surgical risk or a lengthy recovery.</p><p>---</p><p>💡 Treatment areas and safety notes</p><p>· Certified areas: face (brow, jawline, neck), décolletage, abdomen and arms.<br>· Key safety reminder: although results can be significant, all medical aesthetic treatments carry risk. A very small number of adverse events (such as facial atrophy and nerve injury) have been reported. Always choose a licensed medical facility and an experienced physician; the treatment is not recommended for pregnant women or patients with serious skin disease.</p><p>💎 Summary</p><p>Second-generation Ultherapy PRIME is not “surface work”. It combines contour lifting, skin reconstruction and a comfortable experience, allowing you to achieve a natural, gradual and lasting overall rejuvenation — with no downtime.</p>` },
  },
  {
    id: "3",
    slug: "3",
    eyebrow: "Scar Repair",
    cover: "/images/knowledge-cover-3.jpg",
    image: "/images/knowledge-cover-3.jpg",
    title: { "zh-HK": `凹凸洞不是「皮膚瑕疵」，而是「真皮層永久性缺損」——我們專治別人治不好的疤痕`, "zh-CN": `凹凸洞不是「皮肤瑕疵」，而是「真皮层永久性缺损」——我们专治别人治不好的疤痕`, en: `Pitted Scars Are Not “Skin Flaws”, but “Permanent Dermal Defects” — We Specialise in Scars Others Cannot Treat` },
    excerpt: { "zh-HK": `凹凸洞不是表層色素問題，而是真皮層結構性塌陷——需要精準的修復策略。`, "zh-CN": `凹凸洞不是表层色素问题，而是真皮层结构性塌陷——需要精准的修复策略。`, en: `Pitted scars are not a surface pigment problem, but structural collapse in the dermis — they need a precise repair strategy.` },
    body: { "zh-HK": `<p>當激光、微針、煥膚全部試過，凹凸洞依然紋絲不動，你需要的不是更多療程，而是更精准的修復策略。</p><p>在香港，凹凸洞（萎縮性痤瘡疤痕）是最被低估的皮膚問題之一。許多人以為它只是「痘印深了一點」，用過無數美白精華、淡斑膏，甚至做過多次激光，卻發現那些坑洞依然屹立不倒——因為凹凸洞根本不是表層色素問題，而是真皮層膠原蛋白與彈性纖維遭到破壞後，形成的結構性塌陷。</p><p>我們的公司，正是為此而生。</p><p>為什麼凹凸洞這麼難搞？——先搞清楚「洞」的三種形態</p><p>凹凸洞並非單一類型，必須分型而治，否則用錯方法只會越做越糟：</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>类型</th><th>特征</th><th>常见误判</th></tr></thead><tbody><tr><td>冰锥型（Ice Pick）</td><td>深而窄，像被冰锥刺穿的孔洞，直径小于2mm</td><td>常被误认为粗大毛孔，用普通清洁产品根本无法改善</td></tr><tr><td>车厢型（Boxcar）</td><td>边缘锐利、底部平坦的圆形或椭圆形凹陷，直径1.5–4mm</td><td>常被误认为老化松弛，用填充式保养品完全无效</td></tr><tr><td>波浪型（Rolling）</td><td>表面呈波浪状起伏，边缘不明显，因真皮层纤维拉扯所致</td><td>常被误认为浮肿或脂肪堆积，错误使用燃脂疗程反而恶化</td></tr></tbody></table></div><p>我們堅持先診斷、後治療，因為用處理冰錐型的方法去處理波浪型，不單浪費金錢，更可能延誤真正的修復時機。</p><p>我們的治療策略——不是「單一儀器打天下」，而是「復合式階梯重建」</p><p>有別於一般診所「一部激光走天涯」的做法，我們根據凹凸洞的深度、寬度、邊緣形態與皮膚厚度，靈活組合以下技術，分層修復：</p><p>第一層：深層松解（如適用）</p><p>針對波浪型及較深的車廂型凹凸洞，首先以皮下分離技術，松解拉扯表皮的真皮層纖維束，讓凹陷部位先回復平坦，為後續重建創造空間。</p><p>第二層：能量刺激</p><p>根據洞型選擇最適合的儀器：</p><p>· 分段式二氧化碳激光：針對冰錐型與車廂型，氣化疤痕組織，刺激大量膠原蛋白新生，是處理深層凹陷疤痕的黃金標準。</p><p>（我們亦會根據個別情況，靈活配合其他輔助能量模式，但核心修復始終以分段式二氧化碳激光為主，確保精准與成效。）</p><p>第三層：個人化術後修復與長期保養計劃</p><p>凹凸洞治療的成功率，一半來自儀器，一半來自術後修復管理。因此，我們特別重視以下環節：</p><p>· 治療頻率因人而異：我們會根據你的皮膚厚度、修復能力、凹凸洞嚴重程度及對能量的反應，決定每次治療之間的間隔時間。一般建議每4至6個月進行一次評估，而非硬性規定固定次數。部分皮膚修復力較佳者，可能一年只需一次維護治療；皮膚較脆弱者則需更長時間讓膠原穩定再生。<br>· 術後家居護理指導：治療後的頭一個月是膠原重塑的黃金期。我們會根據你的皮膚狀況，處方專用修復產品，包括但不限於生長因子精華、高效保濕修復霜、溫和抗氧化劑等，並詳細指導塗抹順序、頻率及用量，確保新生膠原能正確排列，而非雜亂無章地增生。<br>· 定期追蹤與調整：我們不是做完療程就結束。我們會安排定期復診，觀察修復進度，必要時調整家居護理方案，確保你在最短時間內達到最佳修復效果。</p><p>我們跟別人的分別——為什麼做得到別人做不到？</p><p>· 不是「套餐式療程」：我們沒有一個「凹凸洞套餐」給所有人。每個人的疤痕組合都不同，我們的方案是度身訂做的。<br>· 接受「被轉介」的個案：我們經常接收在其他診所做了多次激光仍無改善、甚至惡化的客人。我們不評論前人，但我們願意挑戰難題。<br>· 誠實面對不可行：如果凹凸洞狀況太嚴重，我們不會為了賺取療程費用而勉強進行。我們會如實告知，並建議其他可行方向。</p><p>我們的最終承諾</p><p>「如果連我們都無法改善，我們會直接告訴你——然後再幫你尋找其他可能的出路。」</p><p>因為我們相信，每一次治療都應該建立在誠實與專業之上，而非銷售業績。</p><p>—</p><p>📍 適合對象</p><p>· 曾接受多次激光、微針、煥膚，凹凸洞仍無明顯改善<br>· 凹凸洞伴隨嚴重反黑或色素不均<br>· 面部同時存在兩種或以上不同形態的凹陷疤痕<br>· 希望找到真正「以病理為本」而非「銷售主導」的治療機構</p><p>如果你或身邊的人正為凹凸洞困擾多年，歡迎帶同過往治療記錄前來咨詢。我們會先為你做詳細的疤痕分型檢測，再提供合理期望與實際建議。</p><p>因為每一道疤痕，都值得被認真對待。</p>`, "zh-CN": `<p>当激光、微针、焕肤全部试过，凹凸洞依然纹丝不动，你需要的不是更多疗程，而是更精准的修复策略。</p><p>在香港，凹凸洞（萎缩性痤疮疤痕）是最被低估的皮肤问题之一。许多人以为它只是「痘印深了一点」，用过无数美白精华、淡斑膏，甚至做过多次激光，却发现那些坑洞依然屹立不倒——因为凹凸洞根本不是表层色素问题，而是真皮层胶原蛋白与弹性纤维遭到破坏后，形成的结构性塌陷。</p><p>我们的公司，正是为此而生。</p><p>为什么凹凸洞这么难搞？——先搞清楚「洞」的三种形态</p><p>凹凸洞并非单一类型，必须分型而治，否则用错方法只会越做越糟：</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>类型</th><th>特征</th><th>常见误判</th></tr></thead><tbody><tr><td>冰锥型（Ice Pick）</td><td>深而窄，像被冰锥刺穿的孔洞，直径小于2mm</td><td>常被误认为粗大毛孔，用普通清洁产品根本无法改善</td></tr><tr><td>车厢型（Boxcar）</td><td>边缘锐利、底部平坦的圆形或椭圆形凹陷，直径1.5–4mm</td><td>常被误认为老化松弛，用填充式保养品完全无效</td></tr><tr><td>波浪型（Rolling）</td><td>表面呈波浪状起伏，边缘不明显，因真皮层纤维拉扯所致</td><td>常被误认为浮肿或脂肪堆积，错误使用燃脂疗程反而恶化</td></tr></tbody></table></div><p>我们坚持先诊断、后治疗，因为用处理冰锥型的方法去处理波浪型，不单浪费金钱，更可能延误真正的修复时机。</p><p>我们的治疗策略——不是「单一仪器打天下」，而是「复合式阶梯重建」</p><p>有别于一般诊所「一部激光走天涯」的做法，我们根据凹凸洞的深度、宽度、边缘形态与皮肤厚度，灵活组合以下技术，分层修复：</p><p>第一层：深层松解（如适用）</p><p>针对波浪型及较深的车厢型凹凸洞，首先以皮下分离技术，松解拉扯表皮的真皮层纤维束，让凹陷部位先回复平坦，为后续重建创造空间。</p><p>第二层：能量刺激</p><p>根据洞型选择最适合的仪器：</p><p>· 分段式二氧化碳激光：针对冰锥型与车厢型，气化疤痕组织，刺激大量胶原蛋白新生，是处理深层凹陷疤痕的黄金标准。</p><p>（我们亦会根据个别情况，灵活配合其他辅助能量模式，但核心修复始终以分段式二氧化碳激光为主，确保精准与成效。）</p><p>第三层：个人化术后修复与长期保养计划</p><p>凹凸洞治疗的成功率，一半来自仪器，一半来自术后修复管理。因此，我们特别重视以下环节：</p><p>· 治疗频率因人而异：我们会根据你的皮肤厚度、修复能力、凹凸洞严重程度及对能量的反应，决定每次治疗之间的间隔时间。一般建议每4至6个月进行一次评估，而非硬性规定固定次数。部分皮肤修复力较佳者，可能一年只需一次维护治疗；皮肤较脆弱者则需更长时间让胶原稳定再生。<br>· 术后家居护理指导：治疗后的头一个月是胶原重塑的黄金期。我们会根据你的皮肤状况，处方专用修复产品，包括但不限于生长因子精华、高效保湿修复霜、温和抗氧化剂等，并详细指导涂抹顺序、频率及用量，确保新生胶原能正确排列，而非杂乱无章地增生。<br>· 定期追踪与调整：我们不是做完疗程就结束。我们会安排定期复诊，观察修复进度，必要时调整家居护理方案，确保你在最短时间内达到最佳修复效果。</p><p>我们跟别人的分别——为什么做得到别人做不到？</p><p>· 不是「套餐式疗程」：我们没有一个「凹凸洞套餐」给所有人。每个人的疤痕组合都不同，我们的方案是度身订做的。<br>· 接受「被转介」的个案：我们经常接收在其他诊所做了多次激光仍无改善、甚至恶化的客人。我们不评论前人，但我们愿意挑战难题。<br>· 诚实面对不可行：如果凹凸洞状况太严重，我们不会为了赚取疗程费用而勉强进行。我们会如实告知，并建议其他可行方向。</p><p>我们的最终承诺</p><p>「如果连我们都无法改善，我们会直接告诉你——然后再帮你寻找其他可能的出路。」</p><p>因为我们相信，每一次治疗都应该建立在诚实与专业之上，而非销售业绩。</p><p>—</p><p>📍 适合对象</p><p>· 曾接受多次激光、微针、焕肤，凹凸洞仍无明显改善<br>· 凹凸洞伴随严重反黑或色素不均<br>· 面部同时存在两种或以上不同形态的凹陷疤痕<br>· 希望找到真正「以病理为本」而非「销售主导」的治疗机构</p><p>如果你或身边的人正为凹凸洞困扰多年，欢迎带同过往治疗记录前来咨询。我们会先为你做详细的疤痕分型检测，再提供合理期望与实际建议。</p><p>因为每一道疤痕，都值得被认真对待。</p>`, en: `<p>When lasers, microneedling and peels have all been tried and acne scars still have not budged, what you need is not more treatments, but a more precise repair strategy.</p><p>In Hong Kong, atrophic acne scars (pitted scars) are among the most underestimated skin problems. Many people assume they are simply “slightly deeper post-acne marks”, and try countless brightening serums, spot-fading creams, or even multiple laser sessions, only to find those pits still standing their ground — because pitted scars are not a surface pigment problem at all. They are structural collapse formed after collagen and elastic fibres in the dermis have been destroyed.</p><p>Our clinic exists precisely for this.</p><p>Why are pitted scars so difficult? — First understand the three forms of “the pit”</p><p>Pitted scars are not a single type. They must be treated according to subtype; otherwise, using the wrong method will only make things worse:</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>Type</th><th>Features</th><th>Common misjudgement</th></tr></thead><tbody><tr><td>Ice pick</td><td>Deep and narrow, like a hole pierced by an ice pick, diameter less than 2 mm</td><td>Often mistaken for enlarged pores; ordinary cleansing products cannot improve them at all</td></tr><tr><td>Boxcar</td><td>Round or oval depressions with sharp edges and a flat base, diameter 1.5–4 mm</td><td>Often mistaken for ageing laxity; filler-style skincare is completely ineffective</td></tr><tr><td>Rolling</td><td>A wave-like undulating surface with indistinct edges, caused by fibrous tethering in the dermis</td><td>Often mistaken for puffiness or fat accumulation; wrongly using fat-reduction treatments can make them worse</td></tr></tbody></table></div><p>We insist on diagnosis first, treatment second, because using an ice-pick approach on rolling scars not only wastes money, but may also delay the real window for repair.</p><p>Our treatment strategy — not “one device for everything”, but “composite, stepped reconstruction”</p><p>Unlike the typical clinic approach of “one laser for all”, we flexibly combine the following techniques according to scar depth, width, edge morphology and skin thickness, repairing layer by layer:</p><p>Layer one: deep release (where indicated)</p><p>For rolling scars and deeper boxcar scars, we first use subcision to release the dermal fibrous bands tethering the epidermis, allowing the depressed area to return towards a flatter plane and creating space for subsequent reconstruction.</p><p>Layer two: energy stimulation</p><p>The most suitable device is chosen according to scar type:</p><p>· Fractional carbon dioxide laser: for ice-pick and boxcar scars, it vaporises scar tissue and stimulates abundant new collagen — the gold standard for treating deep atrophic scars.</p><p>(Depending on the individual case, we may also flexibly combine other adjunctive energy modes, but the core repair remains centred on fractional CO₂ laser, to ensure precision and results.)</p><p>Layer three: personalised aftercare and a long-term maintenance plan</p><p>Half of the success in treating pitted scars comes from the device; the other half comes from aftercare management. We therefore place particular emphasis on the following:</p><p>· Treatment frequency is individual: we decide the interval between sessions according to your skin thickness, repair capacity, scar severity and response to energy. In general we recommend an assessment every 4 to 6 months, rather than a rigid fixed number of sessions. Those with better skin repair capacity may need only one maintenance treatment a year; those with more fragile skin need longer for collagen to regenerate stably.<br>· Home aftercare guidance: the first month after treatment is the golden period for collagen remodelling. According to your skin condition, we prescribe dedicated repair products, including but not limited to growth-factor serums, high-performance hydrating repair creams and gentle antioxidants, and give detailed guidance on application order, frequency and amount, so that newly formed collagen can align properly rather than proliferate in a disordered way.<br>· Regular follow-up and adjustment: we do not consider the process finished once a course is done. We arrange regular reviews to observe repair progress and, if needed, adjust the home-care plan, so that you reach the best possible repair in the shortest time.</p><p>How we differ — why we can do what others cannot</p><p>· Not a “package treatment”: we do not have one “acne-scar package” for everyone. Everyone’s scar combination is different, and our plan is tailored.<br>· We accept referred cases: we frequently see clients who have had multiple laser sessions at other clinics with no improvement, or even worsening. We do not comment on previous practitioners, but we are willing to take on difficult cases.<br>· Honest about what is not feasible: if the scarring is too severe, we will not proceed just to earn a treatment fee. We will tell you honestly, and suggest other viable directions.</p><p>Our ultimate promise</p><p>“If even we cannot improve it, we will tell you directly — and then help you look for other possible paths.”</p><p>Because we believe every treatment should be built on honesty and professionalism, not on sales targets.</p><p>—</p><p>📍 Who it is for</p><p>· Those who have had multiple lasers, microneedling or peels, with no clear improvement in pitted scars<br>· Pitted scars accompanied by severe rebound darkening or uneven pigment<br>· Two or more different forms of atrophic scar present on the face at the same time<br>· Those looking for a clinic that is truly “pathology-led” rather than “sales-led”</p><p>If you or someone close to you has been troubled by pitted scars for years, you are welcome to come for a consultation with previous treatment records. We will first carry out a detailed scar-type assessment, then provide reasonable expectations and practical advice.</p><p>Because every scar deserves to be taken seriously.</p>` },
  },
  {
    id: "4",
    slug: "4",
    eyebrow: "Pigmentation",
    cover: "/images/knowledge-cover-4.jpg",
    image: "/images/knowledge-cover-4.jpg",
    title: { "zh-HK": `當皮膚問題被判定「無解」，我們便是你的最後答案——專治反黑、太田痣、牛奶斑等頑固性皮膚色素疾病`, "zh-CN": `当皮肤问题被判定「无解」，我们便是你的最后答案——专治反黑、太田痣、牛奶斑等顽固性皮肤色素疾病`, en: `When a Skin Problem Is Judged “Untreatable”, We Are Your Last Answer — Specialising in Rebound Darkening, Nevus of Ota, Café-au-lait Spots and Other Stubborn Pigment Disorders` },
    excerpt: { "zh-HK": `專治反黑、太田痣、牛奶斑等頑固性皮膚色素疾病的最後答案。`, "zh-CN": `专治反黑、太田痣、牛奶斑等顽固性皮肤色素疾病的最后答案。`, en: `The last answer for stubborn pigment disorders such as rebound darkening, nevus of Ota and café-au-lait spots.` },
    body: { "zh-HK": `<p>在香港，很多人以為激光、換膚、美白精華可以解決所有皮膚問題。但我們接觸過太多客人，她們並非沒有求醫，而是試遍了方法，卻換來更深的絕望——有些反黑愈來愈嚴重；有些太田痣被誤診為普通色斑，治療數年毫無寸進；有些牛奶斑（先天色素痣）更被醫生直接告知「無法處理」。</p><p>我們的公司，就是為了填補這個缺口而存在。</p><p>我們不是普通的美容院，而是「皮膚問題的最終轉介站」</p><p>我們專注處理的是市面上大多數機構不願碰、不敢碰、或根本無能力處理的皮膚個案，尤其擅長以下三大範疇：</p><p>1. 反黑（Post-Inflammatory Hyperpigmentation）<br>   不論是激光後反彈、創傷後色素沉澱，還是長期荷爾蒙波動引起的深層色印，我們採用分段式精準分解技術，配合個人化修復方案，從根源切斷黑色素傳遞，而非僅停留於表面漂白。<br>2. 太田痣（Ota's Nevus）<br>   屬於真皮層深層黑色素細胞增生，傳統表層激光根本無法觸及。我們運用特定波長嘅深層穿透儀器，精準擊碎埋藏於真皮層嘅異常色素細胞，同時保護周邊正常組織，讓多年來被視為「胎記宿命」嘅藍灰色斑塊，得以真正淡退。<br>3. 牛奶斑（Congenital Melanocytic Nevus）及各種先天/後天頑固色斑<br>   對於邊界不清、顏色不均、或伴隨毛髮增生嘅先天性色素痣，我們有別於單一激光方案，而是採用複合式階梯治療策略，分層、分次、分深度處理，將以往被認為「難以清除」嘅斑點，逐步代謝至肉眼不可見。</p><p>為什麼我們做得到，而別人做不到？</p><p>· 不是「一部儀器打天下」：我們根據每一種皮膚病變嘅深度、顏色、邊界、活性，靈活組合不同波長與能量模式，而非千篇一律嘅標準療程。<br>· 重視診斷多於治療：我們花最多時間喺皮膚檢測同病因溯源。很多客人嘅「斑」，其實係混合型色素問題，必須先拆解成因，先談治療。<br>· 處理別人不敢處理嘅個案：我們樂於接受被其他診所或美容院轉介嘅「棘手案例」，並提供完整嘅風險評估與合理期望管理。</p><p>我們的最終承諾</p><p>我們不敢說能治好「所有」皮膚問題，但我們敢說：</p><p>「如果連我們都無法處理，我們會直接告訴你——然後再幫你尋找其他可行方向。」</p><p>因為比起賺取一次療程費用，我們更重視嘅，係為每一位帶住困擾而來嘅客人，提供一個誠實、專業、有出路嘅答案。</p><p>---</p><p>📍 適合對象</p><p>· 曾接受多次激光治療，反黑情況反而惡化<br>· 面部或身體出現藍灰色、深褐色、邊界不清嘅先天性斑塊<br>· 被其他機構拒絕治療，或被告知「冇得搞」<br>· 希望搵到一間唔係「銷售主導」，而係「真正以病理為本」嘅皮膚治療機構</p><p>如果你或你身邊嘅人正面對類似困擾，歡迎帶同過往治療記錄嚟諮詢。我哋唔會即時推銷療程，而係先幫你睇清問題本質。</p><p>因為我們相信——每一塊斑點背後，都值得一個被認真對待嘅答案。</p>`, "zh-CN": `<p>在香港，很多人以为激光、换肤、美白精华可以解决所有皮肤问题。但我们接触过太多客人，她们并非没有求医，而是试遍了方法，却换来更深的绝望——有些反黑愈来愈严重；有些太田痣被误诊为普通色斑，治疗数年毫无寸进；有些牛奶斑（先天色素痣）更被医生直接告知「无法处理」。</p><p>我们的公司，就是为了填补这个缺口而存在。</p><p>我们不是普通的美容院，而是「皮肤问题的最终转介站」</p><p>我们专注处理的是市面上大多数机构不愿碰、不敢碰、或根本无能力处理的皮肤个案，尤其擅长以下三大范畴：</p><p>1. 反黑（Post-Inflammatory Hyperpigmentation）<br>   不论是激光后反弹、创伤后色素沉淀，还是长期荷尔蒙波动引起的深层色印，我们采用分段式精准分解技术，配合个人化修复方案，从根源切断黑色素传递，而非仅停留于表面漂白。<br>2. 太田痣（Ota's Nevus）<br>   属于真皮层深层黑色素细胞增生，传统表层激光根本无法触及。我们运用特定波长嘅深层穿透仪器，精准击碎埋藏于真皮层嘅异常色素细胞，同时保护周边正常组织，让多年来被视为「胎记宿命」嘅蓝灰色斑块，得以真正淡退。<br>3. 牛奶斑（Congenital Melanocytic Nevus）及各种先天/后天顽固色斑<br>   对于边界不清、颜色不均、或伴随毛发增生嘅先天性色素痣，我们有别於单一激光方案，而是采用复合式阶梯治疗策略，分层、分次、分深度处理，将以往被认为「难以清除」嘅斑点，逐步代谢至肉眼不可见。</p><p>为什么我们做得到，而别人做不到？</p><p>· 不是「一部仪器打天下」：我们根据每一种皮肤病变嘅深度、颜色、边界、活性，灵活组合不同波长与能量模式，而非千篇一律嘅标准疗程。<br>· 重视诊断多于治疗：我们花最多时间喺皮肤检测同病因溯源。很多客人嘅「斑」，其实系混合型色素问题，必须先拆解成因，先谈治疗。<br>· 处理别人不敢处理嘅个案：我们乐于接受被其他诊所或美容院转介嘅「棘手案例」，并提供完整嘅风险评估与合理期望管理。</p><p>我们的最终承诺</p><p>我们不敢说能治好「所有」皮肤问题，但我们敢说：</p><p>「如果连我们都无法处理，我们会直接告诉你——然后再帮你寻找其他可行方向。」</p><p>因为比起赚取一次疗程费用，我们更重视嘅，系为每一位带住困扰而来嘅客人，提供一个诚实、专业、有出路嘅答案。</p><p>---</p><p>📍 适合对象</p><p>· 曾接受多次激光治疗，反黑情况反而恶化<br>· 面部或身体出现蓝灰色、深褐色、边界不清嘅先天性斑块<br>· 被其他机构拒绝治疗，或被告知「冇得搞」<br>· 希望揾到一间唔系「销售主导」，而系「真正以病理为本」嘅皮肤治疗机构</p><p>如果你或你身边嘅人正面对类似困扰，欢迎带同过往治疗记录嚟咨询。我哋唔会即时推销疗程，而系先帮你睇清问题本质。</p><p>因为我们相信——每一块斑点背后，都值得一个被认真对待嘅答案。</p>`, en: `<p>In Hong Kong, many people believe lasers, peels and brightening serums can solve every skin problem. Yet we have seen too many clients who did seek help — they simply tried every method, only to find deeper despair: some with rebound pigmentation that kept worsening; some whose nevus of Ota was misdiagnosed as ordinary pigmentation, with years of treatment and no progress; some with café-au-lait spots (congenital pigmented naevi) who were told by doctors that “nothing can be done”.</p><p>Our clinic exists to fill this gap.</p><p>We are not an ordinary beauty salon. We are the “final referral station” for skin problems</p><p>We focus on the skin cases that most organisations on the market are unwilling to touch, dare not touch, or simply lack the ability to handle — and we are especially experienced in the following three areas:</p><p>1. Rebound darkening (Post-Inflammatory Hyperpigmentation)<br>   Whether it is rebound after laser, post-traumatic pigment deposition, or deep pigment marks from long-term hormonal fluctuation, we use fractional, precision-breakdown techniques together with a personalised repair plan to cut off melanin transfer at the source, rather than stopping at surface bleaching.<br>2. Nevus of Ota (Ota’s Nevus)<br>   This involves proliferation of melanocytes deep in the dermis; traditional surface lasers simply cannot reach it. We use deep-penetrating devices of specific wavelengths to precisely shatter the abnormal pigment cells buried in the dermis, while protecting surrounding normal tissue, so that the blue-grey patches long regarded as a “birthmark destiny” can truly fade.<br>3. Café-au-lait spots (Congenital Melanocytic Nevus) and various stubborn congenital/acquired pigmented lesions<br>   For congenital pigmented naevi with unclear borders, uneven colour, or accompanying hair growth, we do not rely on a single laser plan. Instead we use a composite, stepped treatment strategy, addressing the lesion by layer, session and depth, gradually metabolising spots once thought “difficult to clear” until they are no longer visible to the naked eye.</p><p>Why we can do what others cannot?</p><p>· Not “one device for everything”: we flexibly combine different wavelengths and energy modes according to the depth, colour, borders and activity of each skin lesion, rather than a one-size-fits-all standard course.<br>· Diagnosis before treatment: we spend the most time on skin assessment and tracing the cause. Many clients’ “spots” are in fact mixed pigment problems; the cause must be unpacked before treatment is discussed.<br>· We take on cases others dare not: we are glad to accept “difficult cases” referred by other clinics or salons, and to provide a complete risk assessment and reasonable expectation management.</p><p>Our ultimate promise</p><p>We do not claim we can treat “every” skin problem, but we do dare to say:</p><p>“If even we cannot handle it, we will tell you directly — and then help you look for other viable directions.”</p><p>Because more than earning a single treatment fee, what we value is giving every client who arrives with a concern an honest, professional answer that still leaves a way forward.</p><p>---</p><p>📍 Who it is for</p><p>· Those who have had multiple laser treatments, only for rebound pigmentation to worsen<br>· Blue-grey, dark-brown, poorly defined congenital patches on the face or body<br>· Those refused treatment by other organisations, or told that “nothing can be done”<br>· Those looking for a skin-treatment clinic that is not “sales-led”, but truly “pathology-led”</p><p>If you or someone close to you is facing a similar concern, you are welcome to come for a consultation with previous treatment records. We will not push a treatment on the spot; we will first help you see the nature of the problem clearly.</p><p>Because we believe — behind every mark, there is an answer that deserves to be taken seriously.</p>` },
  },
  {
    id: "7",
    slug: "7",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-7.jpg",
    image: "/images/knowledge-cover-7.jpg",
    title: { "zh-HK": `童顏針品牌比較：Sculptra、AestheFill、Derma Veil 如何選擇？`, "zh-CN": `童颜针品牌比较：Sculptra、AestheFill、Derma Veil 如何选择？`, en: `Collagen Stimulator Brands Compared: How to Choose Between Sculptra, AestheFill and Derma Veil` },
    excerpt: { "zh-HK": `三款再生針劑原理相近，但成分、微粒設計與應用重點各有不同。`, "zh-CN": `三款再生针剂原理相近，但成分、微粒设计与应用重点各有不同。`, en: `The three regenerative injectables share a similar principle, but differ in composition, particle design and application focus.` },
    body: { "zh-HK": `<p>童顏針是一類含聚左旋乳酸（PLLA）或其他可生物降解聚合物的再生針劑，透過注射於皮下形成支架結構，刺激纖維母細胞活性，促進自體膠原蛋白修復。適用於面部凹陷、輪廓改善與膚質護理等方向。市面上常見三大品牌：Sculptra、AestheFill 與 Derma Veil。</p><h3>Sculptra 塑然雅</h3><p>成分為 100% 聚左旋乳酸（PLLA），具良好生物相容性。漸進式作用於真皮層，刺激纖維母細胞。獲美國 FDA 等認證，臨床使用歷史較長，常用於太陽穴、蘋果肌及法令紋等區域。部分醫生建議注射後輕柔按摩，以助產品均勻分佈。</p><h3>AestheFill 精靈針</h3><p>成分為 30% CMC 加 70% 聚雙旋乳酸（PDLLA）。韓國研發，多孔性微球體設計提供物理支撐，同時理論上刺激膠原修復。應用於凹陷改善與輪廓支撐，包括額頭及淚溝等位置。</p><h3>Derma Veil 童顏針</h3><p>成分為聚左旋乳酸（PLLA）加甘醇酸。採用「3R 微分子膠原技術」，微粒設計旨在提升注射均勻性與皮膚觸感。應用於全面部膚質改善及輪廓護理，包括額頭及淚溝。</p><h3>效果時間軸比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>品牌</th><th>效果時間軸</th></tr></thead><tbody><tr><td>Sculptra</td><td>漸進式，部分用家數週內有主觀感受</td></tr><tr><td>AestheFill</td><td>部分用家相對較早出現填充感</td></tr><tr><td>Derma Veil</td><td>部分用家數週內有主觀感受</td></tr></tbody></table></div><p>三者效果維持時間均因人而異，受年齡、膚質、生活習慣、日常防曬及護膚保養影響，部分用家效果可延續數個月至約兩年。</p><h3>常見反應與注意事項</h3><ul><li>注射部位輕微紅腫、瘀青、觸痛或緊繃感屬常見短期反應，多為暫時性</li><li>少數人可能出現結節或其他反應，如異常不適或腫脹持續應盡快聯絡主診醫生</li><li>所有注射療程均屬醫療程序，適用性需由註冊醫生面診評估</li></ul>`, "zh-CN": `<p>童颜针是一类含聚左旋乳酸（PLLA）或其他可生物降解聚合物的再生针剂，透过注射于皮下形成支架结构，刺激纤维母细胞活性，促进自体胶原蛋白修复。适用于面部凹陷、轮廓改善与肤质护理等方向。市面上常见三大品牌：Sculptra、AestheFill 与 Derma Veil。</p><h3>Sculptra 塑然雅</h3><p>成分为 100% 聚左旋乳酸（PLLA），具良好生物相容性。渐进式作用于真皮层，刺激纤维母细胞。获美国 FDA 等认证，临床使用历史较长，常用于太阳穴、苹果肌及法令纹等区域。部分医生建议注射后轻柔按摩，以助产品均匀分布。</p><h3>AestheFill 精灵针</h3><p>成分为 30% CMC 加 70% 聚双旋乳酸（PDLLA）。韩国研发，多孔性微球体设计提供物理支撑，同时理论上刺激胶原修复。应用于凹陷改善与轮廓支撑，包括额头及泪沟等位置。</p><h3>Derma Veil 童颜针</h3><p>成分为聚左旋乳酸（PLLA）加甘醇酸。采用「3R 微分子胶原技术」，微粒设计旨在提升注射均匀性与皮肤触感。应用于全面部肤质改善及轮廓护理，包括额头及泪沟。</p><h3>效果时间轴比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>品牌</th><th>效果时间轴</th></tr></thead><tbody><tr><td>Sculptra</td><td>渐进式，部分用家数周内有主观感受</td></tr><tr><td>AestheFill</td><td>部分用家相对较早出现填充感</td></tr><tr><td>Derma Veil</td><td>部分用家数周内有主观感受</td></tr></tbody></table></div><p>三者效果维持时间均因人而异，受年龄、肤质、生活习惯、日常防晒及护肤保养影响，部分用家效果可延续数个月至约两年。</p><h3>常见反应与注意事项</h3><ul><li>注射部位轻微红肿、瘀青、触痛或紧绷感属常见短期反应，多为暂时性</li><li>少数人可能出现结节或其他反应，如异常不适或肿胀持续应尽快联络主诊医生</li><li>所有注射疗程均属医疗程序，适用性需由注册医生面诊评估</li></ul>`, en: `<p>Collagen biostimulators (often called “baby-face injectables”) are a class of regenerative injectables containing poly-L-lactic acid (PLLA) or other biodegradable polymers. Injected under the skin, they form a scaffold structure, stimulate fibroblast activity and promote the body’s own collagen repair. They may be used for facial volume loss, contour improvement and skin-quality care. Three common brands on the market are Sculptra, AestheFill and Derma Veil.</p><h3>Sculptra</h3><p>The ingredient is 100% poly-L-lactic acid (PLLA), with good biocompatibility. It acts progressively in the dermis and stimulates fibroblasts. It is FDA-certified and has a relatively long history of clinical use, commonly applied to the temples, apple cheeks and nasolabial folds. Some doctors recommend gentle massage after injection to help the product distribute evenly.</p><h3>AestheFill</h3><p>The composition is 30% CMC plus 70% poly-D,L-lactic acid (PDLLA). Developed in Korea, its porous microsphere design provides physical support while theoretically stimulating collagen repair. It is used for volume restoration and contour support, including the forehead and tear troughs.</p><h3>Derma Veil</h3><p>The composition is poly-L-lactic acid (PLLA) plus glycolic acid. It uses “3R micromolecular collagen technology”; the particle design aims to improve injection evenness and skin feel. It is used for overall facial skin-quality improvement and contour care, including the forehead and tear troughs.</p><h3>Timeline of results compared</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Brand</th><th>Timeline of results</th></tr></thead><tbody><tr><td>Sculptra</td><td>Progressive; some users notice a subjective change within a few weeks</td></tr><tr><td>AestheFill</td><td>Some users notice a filling sensation relatively earlier</td></tr><tr><td>Derma Veil</td><td>Some users notice a subjective change within a few weeks</td></tr></tbody></table></div><p>How long results last varies from person to person for all three, influenced by age, skin quality, lifestyle, daily sun protection and skincare. For some users, results may last from several months to about two years.</p><h3>Common reactions and precautions</h3><ul><li>Mild redness, bruising, tenderness or tightness at the injection site are common short-term reactions and are mostly temporary</li><li>A small number of people may develop nodules or other reactions; if unusual discomfort or swelling persists, contact your treating doctor promptly</li><li>All injectable treatments are medical procedures; suitability must be assessed in a face-to-face consultation with a registered doctor</li></ul>` },
  },
  {
    id: "8",
    slug: "8",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-8.jpg",
    image: "/images/knowledge-cover-8.jpg",
    title: { "zh-HK": `Botox 與 Xeomin 肉毒桿菌：成分、效果與如何選擇`, "zh-CN": `Botox 与 Xeomin 肉毒杆菌：成分、效果与如何选择`, en: `Botox and Xeomin Botulinum Toxin: Composition, Results and How to Choose` },
    excerpt: { "zh-HK": `兩款皆為高純度肉毒桿菌素A型，但分子結構與擴散特性不同，各有適合的應用。`, "zh-CN": `两款皆为高纯度肉毒杆菌素A型，但分子结构与扩散特性不同，各有适合的应用。`, en: `Both are highly purified botulinum toxin type A, but molecular structure and diffusion differ, so each has suitable uses.` },
    body: { "zh-HK": `<p>Botox 與 Xeomin 的核心原理相同：利用高度純化的肉毒桿菌素A型，精準阻斷神經末梢與肌肉之間的乙醯膽鹼釋放，使過度活躍的肌肉暫時放鬆，達到除皺、瘦面等效果。</p><h3>成分與原理差異</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>比較</th><th>Botox</th><th>Xeomin</th></tr></thead><tbody><tr><td>產地</td><td>美國 Allergan</td><td>德國 Merz</td></tr><tr><td>分子結構</td><td>含核心神經毒素＋複合蛋白（約900kDa）</td><td>零複合蛋白純淨肉毒桿菌素（約150kDa）</td></tr><tr><td>擴散特性</td><td>擴散範圍較廣</td><td>擴散較集中，利於精準微調</td></tr></tbody></table></div><h3>適合部位</h3><ul><li>Botox：發達咀嚼肌（柔和下顎線）、腋下多汗症等大面積目標</li><li>Xeomin：精細動態紋——眉心紋、抬頭紋、魚尾紋，擴散集中有助降低眼瞼下垂風險</li></ul><h3>效果與安全性</h3><p>兩款均已獲 FDA 及香港衛生署認可。常見反應為短暫微紅、腫脹或瘀青，數天內消退。Botox 含複合蛋白，長期頻繁大劑量注射有較高機會產生中和抗體；Xeomin 去除複合蛋白，降低了引起免疫反應的風險。「面僵」通常源於劑量過高或落針層次偏差，而非品牌本身，須由註冊醫生操作。</p><h3>如何選擇</h3><ul><li>大面積或初次注射可選 Botox，臨床數據庫龐大</li><li>曾多次注射感覺效果減弱者，Xeomin 是替代方案</li><li>同一療程週期內建議統一單一品牌</li><li>劑量並非越多越好，過量會增加抗體風險及影響咀嚼功能</li></ul>`, "zh-CN": `<p>Botox 与 Xeomin 的核心原理相同：利用高度纯化的肉毒杆菌素A型，精准阻断神经末梢与肌肉之间的乙醯胆碱释放，使过度活跃的肌肉暂时放松，达到除皱、瘦面等效果。</p><h3>成分与原理差异</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>比较</th><th>Botox</th><th>Xeomin</th></tr></thead><tbody><tr><td>产地</td><td>美国 Allergan</td><td>德国 Merz</td></tr><tr><td>分子结构</td><td>含核心神经毒素＋复合蛋白（约900kDa）</td><td>零复合蛋白纯净肉毒杆菌素（约150kDa）</td></tr><tr><td>扩散特性</td><td>扩散范围较广</td><td>扩散较集中，利于精准微调</td></tr></tbody></table></div><h3>适合部位</h3><ul><li>Botox：发达咀嚼肌（柔和下颚线）、腋下多汗症等大面积目标</li><li>Xeomin：精细动态纹——眉心纹、抬头纹、鱼尾纹，扩散集中有助降低眼睑下垂风险</li></ul><h3>效果与安全性</h3><p>两款均已获 FDA 及香港卫生署认可。常见反应为短暂微红、肿胀或瘀青，数天内消退。Botox 含复合蛋白，长期频繁大剂量注射有较高机会产生中和抗体；Xeomin 去除复合蛋白，降低了引起免疫反应的风险。「面僵」通常源于剂量过高或落针层次偏差，而非品牌本身，须由注册医生操作。</p><h3>如何选择</h3><ul><li>大面积或初次注射可选 Botox，临床数据库庞大</li><li>曾多次注射感觉效果减弱者，Xeomin 是替代方案</li><li>同一疗程周期内建议统一单一品牌</li><li>剂量并非越多越好，过量会增加抗体风险及影响咀嚼功能</li></ul>`, en: `<p>Botox and Xeomin share the same core principle: highly purified botulinum toxin type A is used to precisely block acetylcholine release between nerve endings and muscle, temporarily relaxing overactive muscle and achieving wrinkle reduction, facial slimming and other effects.</p><h3>Differences in composition and mechanism</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Comparison</th><th>Botox</th><th>Xeomin</th></tr></thead><tbody><tr><td>Origin</td><td>Allergan, USA</td><td>Merz, Germany</td></tr><tr><td>Molecular structure</td><td>Core neurotoxin plus complexing proteins (about 900 kDa)</td><td>Pure botulinum toxin with zero complexing protein (about 150 kDa)</td></tr><tr><td>Diffusion</td><td>Wider spread</td><td>More concentrated spread, favourable for precise fine-tuning</td></tr></tbody></table></div><h3>Suitable areas</h3><ul><li>Botox: well-developed masseter (softening the jawline), axillary hyperhidrosis and other larger-area targets</li><li>Xeomin: fine dynamic lines — glabellar lines, forehead lines, crow’s feet; more concentrated diffusion helps reduce the risk of eyelid ptosis</li></ul><h3>Results and safety</h3><p>Both products are recognised by the FDA and the Hong Kong Department of Health. Common reactions are brief mild redness, swelling or bruising, which settle within a few days. Botox contains complexing proteins, so long-term, frequent, high-dose injection carries a higher chance of forming neutralizing antibodies; Xeomin has the complexing proteins removed, lowering the risk of an immune response. A “frozen face” usually comes from excessive dose or inaccurate injection depth, not from the brand itself, and must be performed by a registered doctor.</p><h3>How to choose</h3><ul><li>For larger areas or a first injection, Botox may be chosen, given its extensive clinical database</li><li>For those who have had multiple injections and feel the effect has weakened, Xeomin is an alternative</li><li>Within the same treatment cycle, it is advisable to stay with a single brand</li><li>More is not better; overdosing increases antibody risk and may affect chewing function</li></ul>` },
  },
  {
    id: "9",
    slug: "9",
    eyebrow: "Aging",
    cover: "/images/knowledge-cover-9.jpg",
    image: "/images/knowledge-cover-9.jpg",
    title: { "zh-HK": `膠原蛋白為什麼會流失？再生抗老的科學原理`, "zh-CN": `胶原蛋白为什么会流失？再生抗老的科学原理`, en: `Why Does Collagen Decline? The Science of Regenerative Anti-Ageing` },
    excerpt: { "zh-HK": `膠原蛋白是皮膚的「鋼筋」，彈力蛋白是「彈簧」。了解流失機制，才能選擇最有效的抗老策略。`, "zh-CN": `胶原蛋白是皮肤的「钢筋」，弹力蛋白是「弹簧」。了解流失机制，才能选择最有效的抗老策略。`, en: `Collagen is the skin’s “steel reinforcement”; elastin is the “spring”. Understanding how they are lost is the key to choosing an effective anti-ageing strategy.` },
    body: { "zh-HK": `<p>纖維母細胞是真皮層最關鍵的細胞，負責合成膠原蛋白、彈力蛋白和透明質酸。抗老的本質，就是持續激活纖維母細胞的活性。所謂「骨膠原」其實是一個複合網絡：膠原蛋白如同建築中的鋼筋提供支撐力與韌性；彈力蛋白賦予皮膚彈性，確保拉伸後能恢復原狀；網狀纖維則是最初的雛形支架。</p><h3>第 I 型與第 III 型膠原蛋白</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>特性</th><th>第 I 型</th><th>第 III 型</th></tr></thead><tbody><tr><td>結構</td><td>粗大、堅韌的纖維束</td><td>細軟、彈性的網狀纖維</td></tr><tr><td>功能</td><td>提供支撐與韌性</td><td>負責彈性與柔嫩度</td></tr><tr><td>老化變化</td><td>總量流失，結構雜亂</td><td>流失更快，比例顯著下降</td></tr></tbody></table></div><p>老化時第 III 型膠原快速流失並被第 I 型取代，導致肌膚雖「厚」卻「硬」，失去柔軟觸感，細紋與鬆弛並存。</p><h3>膠原蛋白流失的五大原因</h3><ul><li><strong>紫外線（光老化）</strong>——頭號殺手，UV-A 直達真皮層，激發基質金屬蛋白酶（MMPs）破壞膠原結構</li><li><strong>肌膚糖化</strong>——過多糖分與膠原結合形成 AGEs，使其變脆、變黃</li><li><strong>自由基攻擊</strong>——來自污染、壓力、熬夜，氧化破壞膠原纖維</li><li><strong>慢性發炎</strong>——腸道健康不佳、壓力等持續產生發炎因子，抑制纖維母細胞活性</li><li><strong>生活習慣</strong>——吸煙、熬夜、營養不均阻礙膠原合成</li></ul><h3>日常養護與營養補充</h3><ul><li>防曬是第一步，抵禦光老化</li><li>優質蛋白質（雞蛋、豆魚肉蛋、黃豆）提供甘氨酸、脯胺酸等原料</li><li>維他命C 是合成膠原蛋白必不可少的輔因子</li><li>抗氧化劑（藍莓、番茄、綠茶）與 Omega-3 脂肪酸（深海魚、亞麻籽）</li><li>水解膠原蛋白肽分子小易吸收，能為纖維母細胞提供「信號」，刺激自身合成膠原</li></ul><h3>醫學再生療程</h3><p><strong>針劑療程（定點誘發）</strong>：童顏針（PLLA）以微球作為生物性信號，持續刺激第 I 型膠原蛋白新生，效果漸進顯現、可持續兩年以上；少女針（ELLANSÉ PCL）具「立即+長效」雙重機制，同時促進第 I 型與第 III 型膠原新生。</p><p><strong>能量儀器（全面啟動）</strong>：Thermage FLX 熱瑪吉以單極射頻加熱真皮層，立即收縮鬆弛膠原，後續數月刺激大量第 I 型膠原新生，適合輕中度鬆弛肌膚；分段式激光/射頻則製造微細加熱區，激發傷口癒合反應，強效促進多種膠原新生。</p>`, "zh-CN": `<p>纤维母细胞是真皮层最关键的细胞，负责合成胶原蛋白、弹力蛋白和透明质酸。抗老的本质，就是持续激活纤维母细胞的活性。所谓「骨胶原」其实是一个复合网络：胶原蛋白如同建筑中的钢筋提供支撑力与韧性；弹力蛋白赋予皮肤弹性，确保拉伸后能恢复原状；网状纤维则是最初的雏形支架。</p><h3>第 I 型与第 III 型胶原蛋白</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>特性</th><th>第 I 型</th><th>第 III 型</th></tr></thead><tbody><tr><td>结构</td><td>粗大、坚韧的纤维束</td><td>细软、弹性的网状纤维</td></tr><tr><td>功能</td><td>提供支撑与韧性</td><td>负责弹性与柔嫩度</td></tr><tr><td>老化变化</td><td>总量流失，结构杂乱</td><td>流失更快，比例显著下降</td></tr></tbody></table></div><p>老化时第 III 型胶原快速流失并被第 I 型取代，导致肌肤虽「厚」却「硬」，失去柔软触感，细纹与松弛并存。</p><h3>胶原蛋白流失的五大原因</h3><ul><li><strong>紫外线（光老化）</strong>——头号杀手，UV-A 直达真皮层，激发基质金属蛋白酶（MMPs）破坏胶原结构</li><li><strong>肌肤糖化</strong>——过多糖分与胶原结合形成 AGEs，使其变脆、变黄</li><li><strong>自由基攻击</strong>——来自污染、压力、熬夜，氧化破坏胶原纤维</li><li><strong>慢性发炎</strong>——肠道健康不佳、压力等持续产生发炎因子，抑制纤维母细胞活性</li><li><strong>生活习惯</strong>——吸烟、熬夜、营养不均阻碍胶原合成</li></ul><h3>日常养护与营养补充</h3><ul><li>防晒是第一步，抵御光老化</li><li>优质蛋白质（鸡蛋、豆鱼肉蛋、黄豆）提供甘氨酸、脯胺酸等原料</li><li>维他命C 是合成胶原蛋白必不可少的辅因子</li><li>抗氧化剂（蓝莓、番茄、绿茶）与 Omega-3 脂肪酸（深海鱼、亚麻籽）</li><li>水解胶原蛋白肽分子小易吸收，能为纤维母细胞提供「信号」，刺激自身合成胶原</li></ul><h3>医学再生疗程</h3><p><strong>针剂疗程（定点诱发）</strong>：童颜针（PLLA）以微球作为生物性信号，持续刺激第 I 型胶原蛋白新生，效果渐进显现、可持续两年以上；少女针（ELLANSÉ PCL）具「立即+长效」双重机制，同时促进第 I 型与第 III 型胶原新生。</p><p><strong>能量仪器（全面启动）</strong>：Thermage FLX 热玛吉以单极射频加热真皮层，立即收缩松弛胶原，后续数月刺激大量第 I 型胶原新生，适合轻中度松弛肌肤；分段式激光/射频则制造微细加热区，激发伤口愈合反应，强效促进多种胶原新生。</p>`, en: `<p>Fibroblasts are the most critical cells in the dermis, responsible for synthesising collagen, elastin and hyaluronic acid. The essence of anti-ageing is to keep activating fibroblast activity. What is commonly called “collagen” is in fact a composite network: collagen is like the steel reinforcement in a building, providing support and toughness; elastin gives skin its elasticity, ensuring it can return to shape after stretching; reticular fibres are the earliest scaffolding framework.</p><h3>Type I and Type III collagen</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Property</th><th>Type I</th><th>Type III</th></tr></thead><tbody><tr><td>Structure</td><td>Thick, tough fibre bundles</td><td>Fine, soft, elastic reticular fibres</td></tr><tr><td>Function</td><td>Provides support and toughness</td><td>Responsible for elasticity and softness</td></tr><tr><td>Ageing change</td><td>Total amount is lost; structure becomes disordered</td><td>Lost more rapidly; the proportion drops significantly</td></tr></tbody></table></div><p>With ageing, Type III collagen is lost rapidly and replaced by Type I, leaving skin that is “thick” yet “hard”, without a soft feel, with fine lines and laxity coexisting.</p><h3>Five major causes of collagen loss</h3><ul><li><strong>Ultraviolet light (photoageing)</strong> — the number-one killer. UV-A reaches the dermis directly and triggers matrix metalloproteinases (MMPs) that destroy collagen structure</li><li><strong>Skin glycation</strong> — excess sugars bind with collagen to form AGEs, making it brittle and yellowed</li><li><strong>Free-radical attack</strong> — from pollution, stress and late nights, oxidatively damaging collagen fibres</li><li><strong>Chronic inflammation</strong> — poor gut health, stress and similar factors continually produce inflammatory mediators that suppress fibroblast activity</li><li><strong>Lifestyle</strong> — smoking, late nights and uneven nutrition hinder collagen synthesis</li></ul><h3>Daily care and nutritional support</h3><ul><li>Sun protection is the first step, defending against photoageing</li><li>Quality protein (eggs, beans, fish, meat, soy) provides glycine, proline and other building blocks</li><li>Vitamin C is an essential cofactor for collagen synthesis</li><li>Antioxidants (blueberries, tomatoes, green tea) and Omega-3 fatty acids (oily fish, flaxseed)</li><li>Hydrolysed collagen peptides have small molecules that are readily absorbed and can provide a “signal” to fibroblasts, stimulating the skin’s own collagen synthesis</li></ul><h3>Medical regenerative treatments</h3><p><strong>Injectable treatments (targeted induction)</strong>: collagen biostimulators such as Sculptra (PLLA) use microspheres as a biological signal, continually stimulating new Type I collagen; results appear progressively and may last more than two years. Ellansé (PCL) has a dual “immediate plus long-acting” mechanism, promoting new Type I and Type III collagen at the same time.</p><p><strong>Energy-based devices (full-field activation)</strong>: Thermage FLX uses monopolar radiofrequency to heat the dermis, immediately contracting lax collagen and, over the following months, stimulating abundant new Type I collagen — suitable for mild-to-moderate laxity. Fractional laser/radiofrequency creates fine heated zones, triggering a wound-healing response and strongly promoting multiple types of new collagen.</p>` },
  },
  {
    id: "10",
    slug: "10",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-10.jpg",
    image: "/images/knowledge-cover-10.jpg",
    title: { "zh-HK": `透明質酸功效、用法與分別：從保濕到填充一次看懂`, "zh-CN": `透明质酸功效、用法与分别：从保湿到填充一次看懂`, en: `Hyaluronic Acid: Benefits, Uses and Differences — From Hydration to Filling in One Read` },
    excerpt: { "zh-HK": `透明質酸天然存在於人體，1克可攜帶高達1000倍水分。了解其功效與不同產品的分別，才能選擇適合的療程。`, "zh-CN": `透明质酸天然存在于人体，1克可携带高达1000倍水分。了解其功效与不同产品的分别，才能选择适合的疗程。`, en: `Hyaluronic acid occurs naturally in the body; 1 gram can carry up to 1,000 times its weight in water. Understanding its benefits and how products differ helps you choose the right treatment.` },
    body: { "zh-HK": `<p>透明質酸（又稱玻尿酸）天然存在於人體的真皮層及結締組織，具有極高保濕能力——每 1 克可攜帶高達 1000 倍水分，對皮膚刺激性極低。</p><h3>五大功效</h3><ul><li><strong>高效保濕</strong>：大分子停留表層鎖水，中小分子滲透至肌底</li><li><strong>修復細胞</strong>：促進纖維母細胞活動，加快傷口癒合</li><li><strong>抗衰老</strong>：補充隨年齡流失的透明質酸，填補凹陷、改善鬆弛</li><li><strong>促進膠原蛋白合成</strong>：為膠原提供水分，有助提拉緊緻</li><li><strong>舒緩發炎</strong>：改善敏感、泛紅</li></ul><h3>鏈結 vs 非鏈結透明質酸</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>特性</th><th>鏈結透明質酸</th><th>非鏈結透明質酸</th></tr></thead><tbody><tr><td>分子結構</td><td>交聯結構，穩定</td><td>結構鬆散，易被分解</td></tr><tr><td>應用方向</td><td>填補凹陷、輪廓塑形</td><td>保濕修復、表層注射</td></tr><tr><td>持效期</td><td>6 至 18 個月以上</td><td>數星期至 1 個月</td></tr></tbody></table></div><h3>常見透明質酸針劑</h3><p><strong>保濕類</strong>：Neauvia Hydro Deluxe 冰冰針、Profhilo 逆時針、Restylane Skinboosters、Juvederm Volite 等。</p><p><strong>填充／塑形類</strong>：Juvederm、Restylane 長效療程等，用於填補凹陷、改善皺紋、輪廓塑形。</p><h3>副作用與注意事項</h3><ul><li>注射部位輕微腫脹、泛紅、皮膚敏感屬常見反應</li><li>注射部位可能出現硬塊感</li><li>若注射位置錯誤，有機會阻塞血管、導致皮膚壞死——必須由註冊醫生操作</li></ul>`, "zh-CN": `<p>透明质酸（又称玻尿酸）天然存在于人体的真皮层及结缔组织，具有极高保湿能力——每 1 克可携带高达 1000 倍水分，对皮肤刺激性极低。</p><h3>五大功效</h3><ul><li><strong>高效保湿</strong>：大分子停留表层锁水，中小分子渗透至肌底</li><li><strong>修复细胞</strong>：促进纤维母细胞活动，加快伤口愈合</li><li><strong>抗衰老</strong>：补充随年龄流失的透明质酸，填补凹陷、改善松弛</li><li><strong>促进胶原蛋白合成</strong>：为胶原提供水分，有助提拉紧致</li><li><strong>舒缓发炎</strong>：改善敏感、泛红</li></ul><h3>链结 vs 非链结透明质酸</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>特性</th><th>链结透明质酸</th><th>非链结透明质酸</th></tr></thead><tbody><tr><td>分子结构</td><td>交联结构，稳定</td><td>结构松散，易被分解</td></tr><tr><td>应用方向</td><td>填补凹陷、轮廓塑形</td><td>保湿修复、表层注射</td></tr><tr><td>持效期</td><td>6 至 18 个月以上</td><td>数星期至 1 个月</td></tr></tbody></table></div><h3>常见透明质酸针剂</h3><p><strong>保湿类</strong>：Neauvia Hydro Deluxe 冰冰针、Profhilo 逆时针、Restylane Skinboosters、Juvederm Volite 等。</p><p><strong>填充／塑形类</strong>：Juvederm、Restylane 长效疗程等，用于填补凹陷、改善皱纹、轮廓塑形。</p><h3>副作用与注意事项</h3><ul><li>注射部位轻微肿胀、泛红、皮肤敏感属常见反应</li><li>注射部位可能出现硬块感</li><li>若注射位置错误，有机会阻塞血管、导致皮肤坏死——必须由注册医生操作</li></ul>`, en: `<p>Hyaluronic acid (also known as HA) occurs naturally in the dermis and connective tissue of the human body. It has exceptionally high moisturising capacity — every 1 gram can carry up to 1,000 times its weight in water — and is extremely low in irritation to the skin.</p><h3>Five key benefits</h3><ul><li><strong>High-efficiency hydration</strong>: large molecules stay on the surface to lock in water; medium and small molecules penetrate to the deeper layers of the skin</li><li><strong>Cell repair</strong>: promotes fibroblast activity and speeds wound healing</li><li><strong>Anti-ageing</strong>: replenishes hyaluronic acid lost with age, filling hollows and improving laxity</li><li><strong>Promotes collagen synthesis</strong>: provides moisture for collagen, helping lift and firm</li><li><strong>Soothes inflammation</strong>: improves sensitivity and redness</li></ul><h3>Cross-linked vs non-cross-linked hyaluronic acid</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Property</th><th>Cross-linked hyaluronic acid</th><th>Non-cross-linked hyaluronic acid</th></tr></thead><tbody><tr><td>Molecular structure</td><td>Cross-linked structure; stable</td><td>Loose structure; readily broken down</td></tr><tr><td>Application</td><td>Filling hollows, contour shaping</td><td>Hydration and repair, superficial injection</td></tr><tr><td>Duration</td><td>6 to 18 months or more</td><td>Several weeks to 1 month</td></tr></tbody></table></div><h3>Common hyaluronic acid injectables</h3><p><strong>Hydration type</strong>: Neauvia Hydro Deluxe, Profhilo, Restylane Skinboosters, Juvéderm Volite and others.</p><p><strong>Filler / contouring type</strong>: Juvéderm, Restylane longer-lasting treatments and others, used to fill hollows, improve wrinkles and shape contours.</p><h3>Side effects and precautions</h3><ul><li>Mild swelling, redness and skin sensitivity at the injection site are common reactions</li><li>A sensation of lumps may appear at the injection site</li><li>If injected in the wrong location, there is a risk of blocking a blood vessel and causing skin necrosis — it must be performed by a registered doctor</li></ul>` },
  },
  {
    id: "11",
    slug: "11",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-11.jpg",
    image: "/images/knowledge-cover-11.jpg",
    title: { "zh-HK": `肉毒桿菌素原理、效果與副作用：除皺瘦面止汗一次看懂`, "zh-CN": `肉毒杆菌素原理、效果与副作用：除皱瘦面止汗一次看懂`, en: `Botulinum Toxin: Mechanism, Results and Side Effects — Wrinkles, Facial Slimming and Sweat Reduction in One Read` },
    excerpt: { "zh-HK": `肉毒桿菌素是天然神經毒素，能阻斷神經肌肉訊號傳遞。了解原理與副作用，才能安全地改善動態紋與輪廓。`, "zh-CN": `肉毒杆菌素是天然神经毒素，能阻断神经肌肉讯号传递。了解原理与副作用，才能安全地改善动态纹与轮廓。`, en: `Botulinum toxin is a natural neurotoxin that can block neuromuscular signalling. Understanding the principle and side effects is essential for safely improving dynamic lines and contour.` },
    body: { "zh-HK": `<p>肉毒桿菌素是由肉毒桿菌產生的天然神經毒素，屬於神經肌肉阻斷劑。20 世紀中葉，研究人員為眼瞼痙攣患者注射後意外發現其去皺紋功效。其原理是阻斷神經與肌肉之間的訊號傳遞，令肌肉不會收縮，從而減少因臉部動作而產生的皺紋。</p><h3>主要效果</h3><ul><li><strong>淡化動態皺紋</strong>：改善魚尾紋、皺眉紋、法令紋、眉心紋等</li><li><strong>打造臉部輪廓</strong>：放鬆咀嚼肌線條，達到提拉、V面效果</li><li><strong>止汗</strong>：抑制交感神經與汗腺傳遞，減少局部多汗</li><li><strong>修飾小腿</strong>：令小腿肌肉體積變小，達到瘦腿效果</li></ul><h3>效果維持時間</h3><p>一般可維持 3-6 個月，視乎注射劑量、部位和個人習慣。咀嚼肌等較常活動的肌肉，效果會較短暫。常見品牌包括 Botox（美國）、Dysport（英國）、Xeomin（德國）等。</p><h3>副作用與風險</h3><ul><li>短暫紅腫或瘀青，2-3 天散去</li><li>注射部位刺痛、酸脹，數天消退</li><li><strong>下垂問題</strong>：注射不當或劑量過多，藥劑可能擴散至附近肌肉，導致眼瞼下垂、眉毛下垂</li><li><strong>臉部僵硬</strong>：劑量過多令肌肉無力，表情僵硬</li></ul><p>因此必須由專業醫生操作，以減少副作用風險。注射後 6 小時內建議避免化妝、洗面或劇烈運動。</p><h3>常見問題</h3><ul><li>見效時間：表情紋 3-7 天見效，約 2 星期達最大效果；V面約 3-4 星期見效</li><li>注射頻率：建議隔 4-6 個月一次</li><li>不適合人士：對成份過敏、懷孕或哺乳期、18 歲以下、正接受口服或注射類固醇者</li></ul>`, "zh-CN": `<p>肉毒杆菌素是由肉毒杆菌产生的天然神经毒素，属于神经肌肉阻断剂。20 世纪中叶，研究人员为眼睑痉挛患者注射后意外发现其去皱纹功效。其原理是阻断神经与肌肉之间的讯号传递，令肌肉不会收缩，从而减少因脸部动作而产生的皱纹。</p><h3>主要效果</h3><ul><li><strong>淡化动态皱纹</strong>：改善鱼尾纹、皱眉纹、法令纹、眉心纹等</li><li><strong>打造脸部轮廓</strong>：放松咀嚼肌线条，达到提拉、V面效果</li><li><strong>止汗</strong>：抑制交感神经与汗腺传递，减少局部多汗</li><li><strong>修饰小腿</strong>：令小腿肌肉体积变小，达到瘦腿效果</li></ul><h3>效果维持时间</h3><p>一般可维持 3-6 个月，视乎注射剂量、部位和个人习惯。咀嚼肌等较常活动的肌肉，效果会较短暂。常见品牌包括 Botox（美国）、Dysport（英国）、Xeomin（德国）等。</p><h3>副作用与风险</h3><ul><li>短暂红肿或瘀青，2-3 天散去</li><li>注射部位刺痛、酸胀，数天消退</li><li><strong>下垂问题</strong>：注射不当或剂量过多，药剂可能扩散至附近肌肉，导致眼睑下垂、眉毛下垂</li><li><strong>脸部僵硬</strong>：剂量过多令肌肉无力，表情僵硬</li></ul><p>因此必须由专业医生操作，以减少副作用风险。注射后 6 小时内建议避免化妆、洗面或剧烈运动。</p><h3>常见问题</h3><ul><li>见效时间：表情纹 3-7 天见效，约 2 星期达最大效果；V面约 3-4 星期见效</li><li>注射频率：建议隔 4-6 个月一次</li><li>不适合人士：对成份过敏、怀孕或哺乳期、18 岁以下、正接受口服或注射类固醇者</li></ul>`, en: `<p>Botulinum toxin is a natural neurotoxin produced by Clostridium botulinum, and is a neuromuscular blocking agent. In the mid-20th century, researchers injecting it for blepharospasm unexpectedly discovered its wrinkle-reducing effect. The principle is to block signal transmission between nerve and muscle so that the muscle does not contract, thereby reducing wrinkles produced by facial movement.</p><h3>Main effects</h3><ul><li><strong>Softening dynamic wrinkles</strong>: improves crow’s feet, frown lines, nasolabial folds, glabellar lines and others</li><li><strong>Shaping facial contour</strong>: relaxes the masseter line to achieve a lifting, V-face effect</li><li><strong>Reducing sweat</strong>: inhibits transmission between sympathetic nerves and sweat glands, reducing local hyperhidrosis</li><li><strong>Refining the calves</strong>: reduces calf muscle volume to achieve a slimmer-leg effect</li></ul><h3>How long results last</h3><p>Results generally last 3–6 months, depending on injection dose, site and personal habits. More frequently used muscles such as the masseter tend to have a shorter duration. Common brands include Botox (USA), Dysport (UK), Xeomin (Germany) and others.</p><h3>Side effects and risks</h3><ul><li>Brief redness, swelling or bruising, settling in 2–3 days</li><li>Stinging or a dull ache at the injection site, settling in a few days</li><li><strong>Ptosis</strong>: if injection is inaccurate or the dose is too high, the product may spread to nearby muscles, causing eyelid ptosis or brow ptosis</li><li><strong>Facial stiffness</strong>: excessive dose leaves muscles weak and expression stiff</li></ul><p>It must therefore be performed by a qualified doctor to reduce the risk of side effects. For 6 hours after injection, it is advisable to avoid make-up, washing the face or vigorous exercise.</p><h3>Frequently asked questions</h3><ul><li>Onset: expression lines take effect in 3–7 days, reaching maximum effect at about 2 weeks; V-face takes effect in about 3–4 weeks</li><li>Injection frequency: once every 4–6 months is recommended</li><li>Unsuitable for: those allergic to the ingredients, pregnant or breastfeeding, under 18, or currently receiving oral or injectable steroids</li></ul>` },
  },
  {
    id: "12",
    slug: "12",
    eyebrow: "Signature",
    cover: "/images/knowledge-cover-12.jpg",
    image: "/images/knowledge-cover-12.jpg",
    title: { "zh-HK": `Thermage FLX 5大陷阱與正貨分辨：如何安全做熱瑪吉`, "zh-CN": `Thermage FLX 5大陷阱与正货分辨：如何安全做热玛吉`, en: `Thermage FLX: Five Pitfalls and How to Spot Genuine Product — How to Have Thermage Safely` },
    excerpt: { "zh-HK": `Thermage FLX 是第五代熱瑪吉，但市面陷阱多。學會分辨正貨、避免陷阱，才能安全有效地提拉緊緻。`, "zh-CN": `Thermage FLX 是第五代热玛吉，但市面陷阱多。学会分辨正货、避免陷阱，才能安全有效地提拉紧致。`, en: `Thermage FLX is fifth-generation Thermage, but the market has many pitfalls. Learn to spot genuine product and avoid traps so that lifting and firming can be both safe and effective.` },
    body: { "zh-HK": `<p>Thermage FLX 是第五代 Thermage 療程，結合單極射頻技術及 AccuREP® 技術，可直達 4.3mm 肌底，均勻立體加熱深層皮膚，令膠原纖維即時收縮、促進膠原蛋白增生。儀器設有臉部、眼部、身體探頭，是目前少數獲美國 FDA 認可可用於上眼瞼的非入侵性醫美療程。</p><h3>五大功效</h3><ul><li>即時緊膚拉提：改善法令紋、雙下巴及下顎鬆弛</li><li>刺激膠原蛋白增生</li><li>改善皺紋及粗糙膚質</li><li>緊緻眼周肌膚（唯一獲 FDA 認可應用於上眼瞼）</li><li>改善頸部、下顎線條及身體皮膚鬆弛</li></ul><h3>5大常見陷阱</h3><ul><li><strong>使用假機、假探頭</strong>：射頻能量輸出不穩定，更有機會灼傷或紅腫</li><li><strong>刻意調低能量</strong>：以「無痛平價」宣傳，但縮短效果維持時間</li><li><strong>非專業人員操作</strong>：Thermage 屬醫療級儀器，須由專業人員操作</li><li><strong>用舊機冒充第五代</strong>：用 TC、NXT、CPT 舊款冒充 FLX 版本</li><li><strong>誤信「零痛、速效」宣傳</strong>：療程反應取決於膚質、年齡及膠原狀態</li></ul><h3>正貨分辨方法</h3><p>Thermage FLX 由美國 Solta Medical 生產。辨認要點：探頭包裝上有「原廠正貨」雷射標籤、包裝上方貼有「Solta Medical」封條、下方有灰色防偽封條，刮走後出現 QR Code，手機掃描會跳至認證頁面。應要求即場開封原廠探頭。</p><h3>療程頻率與注意事項</h3><ul><li>效果可維持約 12 個月，建議每隔 9 個月至 1 年再做一次</li><li>非入侵性，無須恢復期，可即時正常活動</li><li>術後加強保濕與防曬，7 日內暫停含酸類、去角質或美白活性成分的產品</li></ul>`, "zh-CN": `<p>Thermage FLX 是第五代 Thermage 疗程，结合单极射频技术及 AccuREP® 技术，可直达 4.3mm 肌底，均匀立体加热深层皮肤，令胶原纤维即时收缩、促进胶原蛋白增生。仪器设有脸部、眼部、身体探头，是目前少数获美国 FDA 认可可用于上眼睑的非入侵性医美疗程。</p><h3>五大功效</h3><ul><li>即时紧肤拉提：改善法令纹、双下巴及下颚松弛</li><li>刺激胶原蛋白增生</li><li>改善皱纹及粗糙肤质</li><li>紧致眼周肌肤（唯一获 FDA 认可应用于上眼睑）</li><li>改善颈部、下颚线条及身体皮肤松弛</li></ul><h3>5大常见陷阱</h3><ul><li><strong>使用假机、假探头</strong>：射频能量输出不稳定，更有机会灼伤或红肿</li><li><strong>刻意调低能量</strong>：以「无痛平价」宣传，但缩短效果维持时间</li><li><strong>非专业人员操作</strong>：Thermage 属医疗级仪器，须由专业人员操作</li><li><strong>用旧机冒充第五代</strong>：用 TC、NXT、CPT 旧款冒充 FLX 版本</li><li><strong>误信「零痛、速效」宣传</strong>：疗程反应取决于肤质、年龄及胶原状态</li></ul><h3>正货分辨方法</h3><p>Thermage FLX 由美国 Solta Medical 生产。辨认要点：探头包装上有「原厂正货」雷射标签、包装上方贴有「Solta Medical」封条、下方有灰色防伪封条，刮走后出现 QR Code，手机扫描会跳至认证页面。应要求即场开封原厂探头。</p><h3>疗程频率与注意事项</h3><ul><li>效果可维持约 12 个月，建议每隔 9 个月至 1 年再做一次</li><li>非入侵性，无须恢复期，可即时正常活动</li><li>术后加强保湿与防晒，7 日内暂停含酸类、去角质或美白活性成分的产品</li></ul>`, en: `<p>Thermage FLX is the fifth-generation Thermage treatment. Combining monopolar radiofrequency and AccuREP® technology, it can reach 4.3 mm into the skin, heating deep tissue evenly and in three dimensions so that collagen fibres contract immediately and collagen production is stimulated. The device has face, eye and body tips, and is currently among the few non-invasive medical aesthetic treatments FDA-cleared for use on the upper eyelid.</p><h3>Five key benefits</h3><ul><li>Immediate skin tightening and lifting: improves nasolabial folds, double chin and jawline laxity</li><li>Stimulates collagen production</li><li>Improves wrinkles and rough skin texture</li><li>Firms the periocular skin (the only treatment FDA-cleared for the upper eyelid)</li><li>Improves neck, jawline and body skin laxity</li></ul><h3>Five common pitfalls</h3><ul><li><strong>Counterfeit devices and tips</strong>: radiofrequency energy output is unstable, with a greater chance of burns or swelling</li><li><strong>Deliberately lowering energy</strong>: marketed as “painless and cheap”, but it shortens how long results last</li><li><strong>Non-professional operators</strong>: Thermage is a medical-grade device and must be operated by qualified personnel</li><li><strong>Older machines passed off as fifth generation</strong>: using TC, NXT or CPT older models to impersonate the FLX version</li><li><strong>Believing “zero pain, instant results” marketing</strong>: treatment response depends on skin quality, age and collagen status</li></ul><h3>How to identify genuine product</h3><p>Thermage FLX is manufactured by Solta Medical in the USA. Points to check: the tip packaging has an authentic “original product” laser label; a “Solta Medical” seal is affixed to the top of the packaging; below is a grey anti-counterfeit seal which, when scratched, reveals a QR Code that, scanned on a phone, jumps to an authentication page. You should request that the original manufacturer tip be opened on the spot.</p><h3>Treatment frequency and precautions</h3><ul><li>Results may last about 12 months; a further session every 9 months to 1 year is recommended</li><li>Non-invasive, with no downtime; normal activity can resume immediately</li><li>After treatment, increase hydration and sun protection, and pause products containing acids, exfoliants or brightening actives for 7 days</li></ul>` },
  },
  {
    id: "13",
    slug: "13",
    eyebrow: "Skin Care",
    cover: "/images/knowledge-cover-13.jpg",
    image: "/images/knowledge-cover-13.jpg",
    title: { "zh-HK": `脫疣方法比較：冷凍、CO₂ 激光、電灼等 5 大方法一次看懂`, "zh-CN": `脱疣方法比较：冷冻、CO₂ 激光、电灼等 5 大方法一次看懂`, en: `Wart Removal Compared: Cryotherapy, CO₂ Laser, Electrocautery and 5 Methods in One Read` },
    excerpt: { "zh-HK": `疣由 HPV 病毒感染引起，具高度傳染性。了解不同脫疣方法的原理與適用情況，才能選擇最適合的方案。`, "zh-CN": `疣由 HPV 病毒感染引起，具高度传染性。了解不同脱疣方法的原理与适用情况，才能选择最适合的方案。`, en: `Warts are caused by HPV infection and are highly contagious. Understanding the principle and suitability of different removal methods helps you choose the most appropriate plan.` },
    body: { "zh-HK": `<p>疣是皮膚生長出與皮膚同色的細小顆粒，由人類乳頭狀瘤病毒（HPV）感染引起。HPV 屬過濾性病毒，常在泳池、更衣室、公共浴室等潮濕地方傳播，可經共用毛巾、拖鞋等物品間接感染。疣多屬良性但有高度傳染性，會擴散至身體其他部位甚至傳染他人。</p><h3>疣的種類</h3><ul><li><strong>尋常疣</strong>：最常見，多出現在手指、腳趾、手掌，表面粗糙突起</li><li><strong>足底疣</strong>：長於腳底，走路時會痛，易與雞眼混淆</li><li><strong>扁平疣</strong>：常見於面部、頸部，體積約 1-2mm，數量可達數百粒</li><li><strong>生殖器疣</strong>：由性接觸傳播，長於生殖器或肛門附近</li></ul><h3>5 大脫疣方法比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>方法</th><th>原理</th><th>適用</th><th>優點</th></tr></thead><tbody><tr><td>冷凍脫疣</td><td>低溫氮氣急凍疣組織</td><td>手部、腳部或體積較大的疣</td><td>非入侵性、時間短</td></tr><tr><td>二氧化碳激光</td><td>10600nm 波長激光氣化疣組織</td><td>面部疣、需精準處理的疣</td><td>破壞準確、一般 1-2 次</td></tr><tr><td>外用藥物</td><td>水楊酸、A酸逐層軟化疣的角質層</td><td>體積較小、剛發起的疣</td><td>非入侵性、可在家使用</td></tr><tr><td>電灼脫疣</td><td>高頻電流灼燒疣組織</td><td>腳底疣及體積較大的疣</td><td>對頑固疣有效</td></tr><tr><td>刮除治療</td><td>手術刀切除疣組織</td><td>體積大、深層或多次復發的疣</td><td>一次性清除、復發機會低</td></tr></tbody></table></div><h3>脫疣後護理</h3><ul><li>保持傷口清潔乾爽，防止感染</li><li>避免搔抓結痂，防止疤痕或感染</li><li>激光或冷凍脫疣後皮膚敏感，應避免陽光照射，使用不含刺激成分的防曬產品</li></ul><h3>常見問題</h3><ul><li>疣持續超過 3 至 6 個月仍未消退，甚至體積變大或數量增加，建議盡快接受脫疣治療</li><li>脫疣後會復發：即使移除表層病灶，體內仍有機會殘留病毒，免疫力下降時疣可能再次出現</li><li>如何預防：保持均衡飲食、適量運動增強免疫力，避免共用拖鞋或毛巾</li></ul>`, "zh-CN": `<p>疣是皮肤生长出与皮肤同色的细小颗粒，由人类乳头状瘤病毒（HPV）感染引起。HPV 属过滤性病毒，常在泳池、更衣室、公共浴室等潮湿地方传播，可经共用毛巾、拖鞋等物品间接感染。疣多属良性但有高度传染性，会扩散至身体其他部位甚至传染他人。</p><h3>疣的种类</h3><ul><li><strong>寻常疣</strong>：最常见，多出现在手指、脚趾、手掌，表面粗糙突起</li><li><strong>足底疣</strong>：长于脚底，走路时会痛，易与鸡眼混淆</li><li><strong>扁平疣</strong>：常见于面部、颈部，体积约 1-2mm，数量可达数百粒</li><li><strong>生殖器疣</strong>：由性接触传播，长于生殖器或肛门附近</li></ul><h3>5 大脱疣方法比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>方法</th><th>原理</th><th>适用</th><th>优点</th></tr></thead><tbody><tr><td>冷冻脱疣</td><td>低温氮气急冻疣组织</td><td>手部、脚部或体积较大的疣</td><td>非入侵性、时间短</td></tr><tr><td>二氧化碳激光</td><td>10600nm 波长激光气化疣组织</td><td>面部疣、需精准处理的疣</td><td>破坏准确、一般 1-2 次</td></tr><tr><td>外用药物</td><td>水杨酸、A酸逐层软化疣的角质层</td><td>体积较小、刚发起的疣</td><td>非入侵性、可在家使用</td></tr><tr><td>电灼脱疣</td><td>高频电流灼烧疣组织</td><td>脚底疣及体积较大的疣</td><td>对顽固疣有效</td></tr><tr><td>刮除治疗</td><td>手术刀切除疣组织</td><td>体积大、深层或多次复发的疣</td><td>一次性清除、复发机会低</td></tr></tbody></table></div><h3>脱疣后护理</h3><ul><li>保持伤口清洁干爽，防止感染</li><li>避免搔抓结痂，防止疤痕或感染</li><li>激光或冷冻脱疣后皮肤敏感，应避免阳光照射，使用不含刺激成分的防晒产品</li></ul><h3>常见问题</h3><ul><li>疣持续超过 3 至 6 个月仍未消退，甚至体积变大或数量增加，建议尽快接受脱疣治疗</li><li>脱疣后会复发：即使移除表层病灶，体内仍有机会残留病毒，免疫力下降时疣可能再次出现</li><li>如何预防：保持均衡饮食、适量运动增强免疫力，避免共用拖鞋或毛巾</li></ul>`, en: `<p>Warts are small, skin-coloured growths on the skin caused by human papillomavirus (HPV) infection. HPV is a filterable virus, often spread in damp places such as swimming pools, changing rooms and public baths, and can be transmitted indirectly via shared towels, slippers and similar items. Warts are mostly benign but highly contagious, and can spread to other parts of the body or to other people.</p><h3>Types of wart</h3><ul><li><strong>Common warts (verruca vulgaris)</strong>: the most common type, often on the fingers, toes and palms, with a rough, raised surface</li><li><strong>Plantar warts</strong>: grow on the soles; painful when walking, and easily confused with corns</li><li><strong>Flat warts</strong>: common on the face and neck, about 1–2 mm in size, and may number in the hundreds</li><li><strong>Genital warts</strong>: spread by sexual contact, growing near the genitals or anus</li></ul><h3>Comparison of 5 wart-removal methods</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Method</th><th>Principle</th><th>Suitable for</th><th>Advantages</th></tr></thead><tbody><tr><td>Cryotherapy</td><td>Low-temperature nitrogen rapidly freezes wart tissue</td><td>Hand, foot or larger warts</td><td>Non-invasive, short procedure time</td></tr><tr><td>Carbon dioxide laser</td><td>10,600 nm wavelength laser vaporises wart tissue</td><td>Facial warts and warts needing precise treatment</td><td>Accurate destruction, generally 1–2 sessions</td></tr><tr><td>Topical medication</td><td>Salicylic acid or retinoids soften the wart’s keratin layer by layer</td><td>Smaller, newly appeared warts</td><td>Non-invasive, can be used at home</td></tr><tr><td>Electrocautery</td><td>High-frequency current burns wart tissue</td><td>Plantar warts and larger warts</td><td>Effective for stubborn warts</td></tr><tr><td>Curettage / excision</td><td>Surgical blade removes wart tissue</td><td>Large, deep or repeatedly recurrent warts</td><td>One-time clearance, lower chance of recurrence</td></tr></tbody></table></div><h3>Aftercare following wart removal</h3><ul><li>Keep the wound clean and dry to prevent infection</li><li>Avoid picking at scabs, to prevent scarring or infection</li><li>Skin is sensitive after laser or cryotherapy; avoid sun exposure and use sunscreen without irritating ingredients</li></ul><h3>Frequently asked questions</h3><ul><li>If a wart persists for more than 3 to 6 months without resolving, or even grows larger or more numerous, prompt wart-removal treatment is recommended</li><li>Warts can recur after removal: even after the surface lesion is removed, virus may remain in the body, and warts may reappear when immunity drops</li><li>How to prevent: maintain a balanced diet and moderate exercise to strengthen immunity, and avoid sharing slippers or towels</li></ul>` },
  },
  {
    id: "14",
    slug: "14",
    eyebrow: "Signature",
    cover: "/images/knowledge-cover-14.jpg",
    image: "/images/knowledge-cover-14.jpg",
    title: { "zh-HK": `膠原槍原理與效果：非入侵性的緊緻提拉選擇`, "zh-CN": `胶原枪原理与效果：非入侵性的紧致提拉选择`, en: `Collagen Guns: Principle and Results — A Non-Invasive Firming and Lifting Option` },
    excerpt: { "zh-HK": `膠原槍透過高頻電波將熱能傳入真皮層，刺激膠原蛋白生成，達致緊緻、提拉及淡化細紋的效果。`, "zh-CN": `胶原枪透过高频电波将热能传入真皮层，刺激胶原蛋白生成，达致紧致、提拉及淡化细纹的效果。`, en: `A collagen gun delivers heat into the dermis via high-frequency radio waves, stimulating collagen production to achieve firming, lifting and softening of fine lines.` },
    body: { "zh-HK": `<p>膠原槍是一種非入侵性美容儀器，透過高頻電波將熱能傳入皮膚真皮層，刺激膠原蛋白生成，達致緊緻、提拉及淡化細紋的效果。可分為手持式及便攜式設計，常見品牌包括 BTL Exilis 360 等，可用於臉部、頸部等容易老化部位。</p><h3>原理</h3><p>透過高頻電波或單極射頻能量，將熱能傳入真皮層，以約 39-42°C 加熱至少 4 分鐘，促進纖維母細胞增生並生成新膠原蛋白，提升彈性、緊緻輪廓、減淡細紋，亦有助血管循環與皮膚代謝。大部分膠原槍配備不同探頭，可按面部輪廓和皮膚厚度調整能量輸出範圍及深度。</p><h3>主要效果</h3><ul><li>緊緻臉部輪廓：改善蘋果肌、下巴線條鬆弛</li><li>淡化皺紋細紋：法令紋、魚尾紋、抬頭紋、頸紋</li><li>改善毛孔粗大：膠原增生令毛孔收細</li><li>增強皮膚彈性</li><li>去黑眼圈：刺激眼周血液循環</li><li>身體提拉收緊</li></ul><h3>副作用與不適合人士</h3><ul><li>副作用輕微：短暫泛紅、灼熱感、輕微腫脹，數小時至數天消退</li><li><strong>暗瘡患者</strong>：射頻熱能可能令暗瘡惡化，建議待穩定後才進行</li><li><strong>體內有植入金屬裝置人士</strong>：如心臟起搏器、人工關節等，須先取得醫生同意</li></ul><h3>療程頻率與術後護理</h3><ul><li>完整療程多數為 5-10 次，每 2 星期做一次</li><li>完成後約 2-4 週開始見效，效果可維持 3-6 個月</li><li>大部分人當天就能上妝、正常上班</li><li>療程後避免長時間曝曬、劇烈運動；3-5 天內避免刺激性護膚品</li></ul>`, "zh-CN": `<p>胶原枪是一种非入侵性美容仪器，透过高频电波将热能传入皮肤真皮层，刺激胶原蛋白生成，达致紧致、提拉及淡化细纹的效果。可分为手持式及便携式设计，常见品牌包括 BTL Exilis 360 等，可用于脸部、颈部等容易老化部位。</p><h3>原理</h3><p>透过高频电波或单极射频能量，将热能传入真皮层，以约 39-42°C 加热至少 4 分钟，促进纤维母细胞增生并生成新胶原蛋白，提升弹性、紧致轮廓、减淡细纹，亦有助血管循环与皮肤代谢。大部分胶原枪配备不同探头，可按面部轮廓和皮肤厚度调整能量输出范围及深度。</p><h3>主要效果</h3><ul><li>紧致脸部轮廓：改善苹果肌、下巴线条松弛</li><li>淡化皱纹细纹：法令纹、鱼尾纹、抬头纹、颈纹</li><li>改善毛孔粗大：胶原增生令毛孔收细</li><li>增强皮肤弹性</li><li>去黑眼圈：刺激眼周血液循环</li><li>身体提拉收紧</li></ul><h3>副作用与不适合人士</h3><ul><li>副作用轻微：短暂泛红、灼热感、轻微肿胀，数小时至数天消退</li><li><strong>暗疮患者</strong>：射频热能可能令暗疮恶化，建议待稳定后才进行</li><li><strong>体内有植入金属装置人士</strong>：如心脏起搏器、人工关节等，须先取得医生同意</li></ul><h3>疗程频率与术后护理</h3><ul><li>完整疗程多数为 5-10 次，每 2 星期做一次</li><li>完成后约 2-4 周开始见效，效果可维持 3-6 个月</li><li>大部分人当天就能上妆、正常上班</li><li>疗程后避免长时间曝晒、剧烈运动；3-5 天内避免刺激性护肤品</li></ul>`, en: `<p>A collagen gun is a non-invasive aesthetic device that delivers heat into the dermis via high-frequency radio waves, stimulating collagen production to achieve firming, lifting and softening of fine lines. Designs include handheld and portable units; common brands include BTL Exilis 360 and others, and they may be used on areas that age easily, such as the face and neck.</p><h3>Principle</h3><p>Through high-frequency radio waves or monopolar radiofrequency energy, heat is delivered into the dermis and held at about 39–42°C for at least 4 minutes, promoting fibroblast proliferation and the generation of new collagen, improving elasticity, tightening contours and softening fine lines. It also supports vascular circulation and skin metabolism. Most collagen guns come with different tips, so energy output range and depth can be adjusted according to facial contour and skin thickness.</p><h3>Main effects</h3><ul><li>Firming facial contour: improves laxity of the apple cheeks and chin line</li><li>Softening wrinkles and fine lines: nasolabial folds, crow’s feet, forehead lines, neck lines</li><li>Improving enlarged pores: collagen production helps pores appear finer</li><li>Enhancing skin elasticity</li><li>Reducing dark circles: stimulates periocular blood circulation</li><li>Body lifting and tightening</li></ul><h3>Side effects and who is unsuitable</h3><ul><li>Side effects are mild: brief redness, a burning sensation and slight swelling, settling in a few hours to a few days</li><li><strong>Acne patients</strong>: radiofrequency heat may worsen acne; it is advisable to wait until the condition is stable</li><li><strong>Those with implanted metal devices</strong>: such as pacemakers or artificial joints; a doctor’s agreement should be obtained first</li></ul><h3>Treatment frequency and aftercare</h3><ul><li>A complete course is usually 5–10 sessions, once every 2 weeks</li><li>Results typically begin to appear about 2–4 weeks after completion, and may last 3–6 months</li><li>Most people can wear make-up and go to work as usual the same day</li><li>After treatment, avoid prolonged sun exposure and vigorous exercise; avoid stimulating skincare for 3–5 days</li></ul>` },
  },
  {
    id: "15",
    slug: "15",
    eyebrow: "Eye Care",
    cover: "/images/knowledge-cover-15.jpg",
    image: "/images/knowledge-cover-15.jpg",
    title: { "zh-HK": `眼周肌膚修護：眼紋成因與改善方法`, "zh-CN": `眼周肌肤修护：眼纹成因与改善方法`, en: `Periorbital Skin Care: Why Eye Lines Form and How to Improve Them` },
    excerpt: { "zh-HK": `眼周肌膚是全身最薄的皮膚。了解眼紋成因、正確保養與醫美選擇，才能守護眼周年輕。`, "zh-CN": `眼周肌肤是全身最薄的皮肤。了解眼纹成因、正确保养与医美选择，才能守护眼周年轻。`, en: `The skin around the eyes is the thinnest on the body. Understanding why eye lines form, how to care for them properly and which aesthetic options exist helps protect a youthful eye area.` },
    body: { "zh-HK": `<p>眼周肌膚是全身皮膚中最薄的部分。隨著年齡增長，皮膚彈性蛋白和膠原蛋白逐漸流失，眼周皮膚會失去原有的緊緻和光滑，形成眼下細紋和乾紋。</p><h3>眼紋成因</h3><ul><li><strong>皮膚老化</strong>：膠原蛋白和彈性蛋白流失是眼周老化的主要原因</li><li><strong>表情動作</strong>：眨眼、皺眉等頻繁活動產生動態皺紋</li><li><strong>生活習慣</strong>：長時間使用電子產品增加眼部疲勞；缺乏防曬加劇老化</li><li><strong>脫水和營養不足</strong>：眼周缺水導致乾燥，更容易形成乾紋</li></ul><h3>動態 vs 靜態眼紋</h3><p>動態眼紋因表情及眼睛活動形成，肌肉放鬆時可能不明顯或消失；靜態眼紋即使面部肌肉放鬆時依然存在，反映膠原蛋白和彈性蛋白持續流失。</p><h3>正確保養建議</h3><ul><li>每天攝取足夠水分和富含抗氧化劑的食物</li><li>規律使用含維他命C、維他命E、透明質酸等成分的眼霜</li><li>輕柔塗抹避免拉扯；日間使用含 SPF 的防曬產品</li><li>充足睡眠、減少長時間注視屏幕</li></ul><h3>醫美改善方案</h3><ul><li><strong>BTL Exilis 眼部射頻</strong>：無創、無恢復期，促進膠原重組，改善眼周鬆弛與細紋</li><li><strong>肉毒桿菌素</strong>：放鬆眼周肌肉，減輕動態眼紋，數天內見效</li><li><strong>透明質酸填充</strong>：針對眼周細紋和黑眼圈，效果即時可見</li></ul>`, "zh-CN": `<p>眼周肌肤是全身皮肤中最薄的部分。随著年龄增长，皮肤弹性蛋白和胶原蛋白逐渐流失，眼周皮肤会失去原有的紧致和光滑，形成眼下细纹和干纹。</p><h3>眼纹成因</h3><ul><li><strong>皮肤老化</strong>：胶原蛋白和弹性蛋白流失是眼周老化的主要原因</li><li><strong>表情动作</strong>：眨眼、皱眉等频繁活动产生动态皱纹</li><li><strong>生活习惯</strong>：长时间使用电子产品增加眼部疲劳；缺乏防晒加剧老化</li><li><strong>脱水和营养不足</strong>：眼周缺水导致干燥，更容易形成干纹</li></ul><h3>动态 vs 静态眼纹</h3><p>动态眼纹因表情及眼睛活动形成，肌肉放松时可能不明显或消失；静态眼纹即使面部肌肉放松时依然存在，反映胶原蛋白和弹性蛋白持续流失。</p><h3>正确保养建议</h3><ul><li>每天摄取足够水分和富含抗氧化剂的食物</li><li>规律使用含维他命C、维他命E、透明质酸等成分的眼霜</li><li>轻柔涂抹避免拉扯；日间使用含 SPF 的防晒产品</li><li>充足睡眠、减少长时间注视屏幕</li></ul><h3>医美改善方案</h3><ul><li><strong>BTL Exilis 眼部射频</strong>：无创、无恢复期，促进胶原重组，改善眼周松弛与细纹</li><li><strong>肉毒杆菌素</strong>：放松眼周肌肉，减轻动态眼纹，数天内见效</li><li><strong>透明质酸填充</strong>：针对眼周细纹和黑眼圈，效果即时可见</li></ul>`, en: `<p>The skin around the eyes is the thinnest on the body. As we age, elastin and collagen are gradually lost, and the periocular skin loses its original firmness and smoothness, forming fine lines and dryness lines under the eyes.</p><h3>Causes of eye lines</h3><ul><li><strong>Skin ageing</strong>: loss of collagen and elastin is the main cause of periocular ageing</li><li><strong>Facial expression</strong>: frequent movements such as blinking and frowning produce dynamic wrinkles</li><li><strong>Lifestyle</strong>: prolonged use of electronic devices increases eye fatigue; lack of sun protection accelerates ageing</li><li><strong>Dehydration and inadequate nutrition</strong>: lack of moisture around the eyes leads to dryness, making dryness lines more likely to form</li></ul><h3>Dynamic vs static eye lines</h3><p>Dynamic eye lines form from expression and eye movement, and may be inconspicuous or disappear when the muscles relax. Static eye lines remain even when facial muscles are relaxed, reflecting ongoing loss of collagen and elastin.</p><h3>Proper care recommendations</h3><ul><li>Take in enough water and antioxidant-rich foods every day</li><li>Use an eye cream containing vitamin C, vitamin E, hyaluronic acid and similar ingredients regularly</li><li>Apply gently, avoiding pulling; use an SPF sunscreen during the day</li><li>Get sufficient sleep and reduce prolonged screen staring</li></ul><h3>Medical aesthetic options</h3><ul><li><strong>BTL Exilis periocular radiofrequency</strong>: non-invasive, no downtime, promotes collagen remodelling, improves periocular laxity and fine lines</li><li><strong>Botulinum toxin</strong>: relaxes periocular muscles, reduces dynamic eye lines, with results in a few days</li><li><strong>Hyaluronic acid filler</strong>: for periocular fine lines and dark circles, with immediately visible results</li></ul>` },
  },
  {
    id: "16",
    slug: "16",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-16.jpg",
    image: "/images/knowledge-cover-16.jpg",
    title: { "zh-HK": `透明質酸保濕針對比：Profhilo、Restylane、Belotero 等如何選擇`, "zh-CN": `透明质酸保湿针对比：Profhilo、Restylane、Belotero 等如何选择`, en: `Hyaluronic Acid Skin Boosters Compared: How to Choose Profhilo, Restylane, Belotero and More` },
    excerpt: { "zh-HK": `透明質酸保濕針透過注射將透明質酸導入真皮層，鎖住水分、改善乾燥與細紋。不同產品的濃度與技術各有不同。`, "zh-CN": `透明质酸保湿针透过注射将透明质酸导入真皮层，锁住水分、改善干燥与细纹。不同产品的浓度与技术各有不同。`, en: `Hyaluronic acid skin boosters deliver HA into the dermis by injection, locking in moisture and improving dryness and fine lines. Concentration and technology differ by product.` },
    body: { "zh-HK": `<p>透明質酸保濕針透過注射方式，將透明質酸導入皮膚真皮層，利用其「吸水」特性鎖住水分、增加皮下組織容量，改善乾燥、細紋、鬆弛等肌膚問題。</p><h3>常見保濕針比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>產品</th><th>產地</th><th>濃度</th><th>技術</th></tr></thead><tbody><tr><td>Profhilo 逆時針</td><td>荷蘭/英國</td><td>32mg/mL（濃度最高）</td><td>IBSA 專利 NASHA 技術，不含交聯劑</td></tr><tr><td>Restylane Skinboosters</td><td>瑞典</td><td>20mg/mL</td><td>NASHA 凝膠體，與人體 HA 相似度達 99%</td></tr><tr><td>Belotero Revive</td><td>瑞士</td><td>20mg/mL</td><td>CPM 專利雙重鏈結技術</td></tr><tr><td>Juvéderm Volite</td><td>美國</td><td>12mg/mL</td><td>VYCROSS 專利交聯鏈結科技</td></tr></tbody></table></div><h3>各產品特點</h3><ul><li><strong>Profhilo</strong>：濃度最高，促進膠原和彈力纖維產生，改善整體皮膚質地</li><li><strong>Restylane Skinboosters</strong>：水潤滋養肌膚、改善細紋和暗沉</li><li><strong>Belotero Revive</strong>：結合甘油，不易致敏，刺激膠原生成</li><li><strong>Juvéderm Volite</strong>：針頭最細，緊緻提亮肌膚，效果可達 9 個月</li></ul><h3>療程與注意事項</h3><ul><li>一般建議 3 次治療，間隔約 4 星期</li><li>注射後可能輕微紅腫，數天內消退</li><li>避免劇烈運動、桑拿及高溫環境</li><li>至少 24 小時內避免化妝，以減少感染風險</li></ul>`, "zh-CN": `<p>透明质酸保湿针透过注射方式，将透明质酸导入皮肤真皮层，利用其「吸水」特性锁住水分、增加皮下组织容量，改善干燥、细纹、松弛等肌肤问题。</p><h3>常见保湿针比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>产品</th><th>产地</th><th>浓度</th><th>技术</th></tr></thead><tbody><tr><td>Profhilo 逆时针</td><td>荷兰/英国</td><td>32mg/mL（浓度最高）</td><td>IBSA 专利 NASHA 技术，不含交联剂</td></tr><tr><td>Restylane Skinboosters</td><td>瑞典</td><td>20mg/mL</td><td>NASHA 凝胶体，与人体 HA 相似度达 99%</td></tr><tr><td>Belotero Revive</td><td>瑞士</td><td>20mg/mL</td><td>CPM 专利双重链结技术</td></tr><tr><td>Juvéderm Volite</td><td>美国</td><td>12mg/mL</td><td>VYCROSS 专利交联链结科技</td></tr></tbody></table></div><h3>各产品特点</h3><ul><li><strong>Profhilo</strong>：浓度最高，促进胶原和弹力纤维产生，改善整体皮肤质地</li><li><strong>Restylane Skinboosters</strong>：水润滋养肌肤、改善细纹和暗沉</li><li><strong>Belotero Revive</strong>：结合甘油，不易致敏，刺激胶原生成</li><li><strong>Juvéderm Volite</strong>：针头最细，紧致提亮肌肤，效果可达 9 个月</li></ul><h3>疗程与注意事项</h3><ul><li>一般建议 3 次治疗，间隔约 4 星期</li><li>注射后可能轻微红肿，数天内消退</li><li>避免剧烈运动、桑拿及高温环境</li><li>至少 24 小时内避免化妆，以减少感染风险</li></ul>`, en: `<p>Hyaluronic acid hydrating injectables deliver hyaluronic acid into the dermis by injection, using its water-attracting property to lock in moisture, increase subcutaneous tissue volume, and improve dryness, fine lines, laxity and other skin concerns.</p><h3>Comparison of common hydrating injectables</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Product</th><th>Origin</th><th>Concentration</th><th>Technology</th></tr></thead><tbody><tr><td>Profhilo</td><td>Netherlands/UK</td><td>32 mg/mL (highest concentration)</td><td>IBSA patented NASHA technology, no cross-linking agent</td></tr><tr><td>Restylane Skinboosters</td><td>Sweden</td><td>20 mg/mL</td><td>NASHA gel, up to 99% similar to human HA</td></tr><tr><td>Belotero Revive</td><td>Switzerland</td><td>20 mg/mL</td><td>Patented CPM dual cross-linking technology</td></tr><tr><td>Juvéderm Volite</td><td>USA</td><td>12 mg/mL</td><td>Patented VYCROSS cross-linking technology</td></tr></tbody></table></div><h3>Features of each product</h3><ul><li><strong>Profhilo</strong>: highest concentration; promotes collagen and elastic fibre production and improves overall skin texture</li><li><strong>Restylane Skinboosters</strong>: hydrates and nourishes the skin, improving fine lines and dullness</li><li><strong>Belotero Revive</strong>: combined with glycerol, less likely to cause allergy, and stimulates collagen production</li><li><strong>Juvéderm Volite</strong>: finest needle; firms and brightens the skin, with results lasting up to 9 months</li></ul><h3>Treatment and precautions</h3><ul><li>Three treatments are generally recommended, about 4 weeks apart</li><li>Mild redness and swelling may occur after injection, settling within a few days</li><li>Avoid vigorous exercise, saunas and high-temperature environments</li><li>Avoid make-up for at least 24 hours to reduce infection risk</li></ul>` },
  },
  {
    id: "17",
    slug: "17",
    eyebrow: "Men",
    cover: "/images/knowledge-cover-17.jpg",
    image: "/images/knowledge-cover-17.jpg",
    title: { "zh-HK": `激光脫鬚原理與好處：男士鬍鬚護理指南`, "zh-CN": `激光脱须原理与好处：男士胡须护理指南`, en: `Laser Beard Reduction: Principle and Benefits — A Men’s Beard-Care Guide` },
    excerpt: { "zh-HK": `激光脫鬚利用選擇性光熱作用，精準鎖定毛囊黑色素，破壞毛囊生長細胞，達致長期減少鬍鬚的效果。`, "zh-CN": `激光脱须利用选择性光热作用，精准锁定毛囊黑色素，破坏毛囊生长细胞，达致长期减少胡须的效果。`, en: `Laser beard reduction uses selective photothermolysis to target melanin in the follicle, destroying growth cells and achieving long-term reduction in beard density.` },
    body: { "zh-HK": `<p>激光脫鬚利用「選擇性光熱作用」原理，透過特定波長的激光深入皮膚底層，精準鎖定毛囊中的黑色素。黑色素吸收激光能量後轉換成熱能，破壞毛囊組織內的生長細胞，令毛髮失去再生能力。激光只會針對毛囊內的黑色素進行加熱破壞，不會對周邊皮膚造成損傷。</p><h3>三大好處</h3><ul><li><strong>改善皮膚健康</strong>：每日剃鬚容易造成微細傷口，引致毛囊炎、紅腫及毛髮倒生；激光脫鬚有助保持皮膚乾爽</li><li><strong>減少日常打理時間</strong>：大部分男士需每日剃鬚</li><li><strong>減少肌膚暗沉</strong>：經常剃鬚會刺激黑色素生成，激光脫鬚可改善光澤度</li></ul><h3>療程特點</h3><ul><li>完成 6 至 8 次療程後，多數男士鬍鬚密度可減少 70%-90%</li><li>每次療程只需 10-15 分鐘，屬非入侵性</li><li>可全脫或局部脫鬚，保留鬍型線條</li><li>配備冷凍保護技術的儀器僅有輕微溫熱感</li></ul><h3>療程前後注意事項</h3><ul><li>療程前 7-10 日避免曝曬</li><li>提前剃好鬍鬚（過長會令激光不能滲透深層毛囊）</li><li>療程後 48 小時內避免劇烈運動及曝曬</li><li>避免使用去角質、美白、酸類等刺激性護膚品</li></ul><h3>常見問題</h3><ul><li>需 8-10 次：因激光只對「生長期」毛髮有效，建議每隔 4-6 星期進行一次</li><li>效果可維持 3-5 年以上</li><li>白色、金色、紅色等淺色毛髮因缺乏黑色素，效果有限</li></ul>`, "zh-CN": `<p>激光脱须利用「选择性光热作用」原理，透过特定波长的激光深入皮肤底层，精准锁定毛囊中的黑色素。黑色素吸收激光能量后转换成热能，破坏毛囊组织内的生长细胞，令毛发失去再生能力。激光只会针对毛囊内的黑色素进行加热破坏，不会对周边皮肤造成损伤。</p><h3>三大好处</h3><ul><li><strong>改善皮肤健康</strong>：每日剃须容易造成微细伤口，引致毛囊炎、红肿及毛发倒生；激光脱须有助保持皮肤干爽</li><li><strong>减少日常打理时间</strong>：大部分男士需每日剃须</li><li><strong>减少肌肤暗沉</strong>：经常剃须会刺激黑色素生成，激光脱须可改善光泽度</li></ul><h3>疗程特点</h3><ul><li>完成 6 至 8 次疗程后，多数男士胡须密度可减少 70%-90%</li><li>每次疗程只需 10-15 分钟，属非入侵性</li><li>可全脱或局部脱须，保留胡型线条</li><li>配备冷冻保护技术的仪器仅有轻微温热感</li></ul><h3>疗程前后注意事项</h3><ul><li>疗程前 7-10 日避免曝晒</li><li>提前剃好胡须（过长会令激光不能渗透深层毛囊）</li><li>疗程后 48 小时内避免剧烈运动及曝晒</li><li>避免使用去角质、美白、酸类等刺激性护肤品</li></ul><h3>常见问题</h3><ul><li>需 8-10 次：因激光只对「生长期」毛发有效，建议每隔 4-6 星期进行一次</li><li>效果可维持 3-5 年以上</li><li>白色、金色、红色等浅色毛发因缺乏黑色素，效果有限</li></ul>`, en: `<p>Laser beard removal uses the principle of selective photothermolysis. A laser of a specific wavelength penetrates into the deeper layers of the skin and precisely targets melanin in the hair follicle. Melanin absorbs the laser energy, converts it into heat, and destroys the growth cells within the follicle tissue, so that the hair loses its ability to regenerate. The laser only heats and destroys melanin inside the follicle, and does not damage the surrounding skin.</p><h3>Three main benefits</h3><ul><li><strong>Improves skin health</strong>: daily shaving easily causes micro-wounds, leading to folliculitis, redness and ingrown hairs; laser beard removal helps keep the skin dry and comfortable</li><li><strong>Reduces daily grooming time</strong>: most men need to shave every day</li><li><strong>Reduces skin dullness</strong>: frequent shaving stimulates melanin production; laser beard removal can improve radiance</li></ul><h3>Treatment features</h3><ul><li>After completing 6 to 8 sessions, most men can reduce beard density by 70%–90%</li><li>Each session takes only 10–15 minutes and is non-invasive</li><li>Full or partial removal is possible, preserving the beard outline</li><li>Devices with cryogen protection technology produce only a mild warm sensation</li></ul><h3>Before and after treatment</h3><ul><li>Avoid sun exposure for 7–10 days before treatment</li><li>Shave in advance (hair that is too long prevents the laser from penetrating to the deep follicle)</li><li>Avoid vigorous exercise and sun exposure for 48 hours after treatment</li><li>Avoid stimulating skincare such as exfoliants, brighteners and acids</li></ul><h3>Frequently asked questions</h3><ul><li>8–10 sessions are needed: the laser is only effective on hair in the anagen (growth) phase; sessions every 4–6 weeks are recommended</li><li>Results may last 3–5 years or more</li><li>Light-coloured hair such as white, blonde or red has limited results because it lacks melanin</li></ul>` },
  },
  {
    id: "18",
    slug: "18",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-18.jpg",
    image: "/images/knowledge-cover-18.jpg",
    title: { "zh-HK": `Botox 瘦面與除皺：咀嚼肌修飾與動態紋一次看懂`, "zh-CN": `Botox 瘦面与除皱：咀嚼肌修饰与动态纹一次看懂`, en: `Botox for Facial Slimming and Wrinkle Reduction: Masseter Refinement and Dynamic Lines in One Read` },
    excerpt: { "zh-HK": `Botox 可放鬆咀嚼肌修飾下顎線，也能減淡動態紋。了解原理、效果與注意事項，才能瘦面除皺同時保留自然表情。`, "zh-CN": `Botox 可放松咀嚼肌修饰下颚线，也能减淡动态纹。了解原理、效果与注意事项，才能瘦面除皱同时保留自然表情。`, en: `Botox can relax the masseter to refine the jawline, and can also soften dynamic lines. Understanding the principle, results and precautions helps slim the face and reduce wrinkles while keeping a natural expression.` },
    body: { "zh-HK": `<p>Botox 含高度純化的肉毒桿菌素A型，屬神經傳導阻斷劑。注入目標肌肉後可暫時阻斷神經末梢釋放乙醯膽鹼，使過度活躍的肌肉放鬆、減少收縮頻率。</p><h3>效果一：改善咀嚼肌、修飾面部輪廓</h3><p>常吃硬物、韌性食物或夜間磨牙，可致咀嚼肌肥大、面部顯闊。精準注入肥大咀嚼肌後，肌肉活動量降低、體積逐漸收縮，有助修飾下顎線條。此療程只對「肌肉型」面部寬大有效；若屬骨骼突出或深層脂肪堆積，單靠注射無法達致理想瘦面。</p><h3>效果二：針對動態紋</h3><p>動態紋是面部表情（大笑、皺眉、抬頭）時肌肉牽扯顯現的摺痕，常見於眉心紋、抬頭紋、魚尾紋。在表情肌肉層微量注射，可適度放鬆目標肌肉、減少紋路。但無法改善黑眼圈，也無法撫平膠原流失造成的靜態紋。</p><h3>效果因人而異的四大因素</h3><ul><li>肌肉體積與強韌度：肌肉越強壯，需更長代謝時間或調整劑量</li><li>人體代謝速率：一般效果維持 3-6 個月，代謝快者維持時間可能縮短</li><li>生活習慣：療程後繼續咬硬物，咀嚼肌會提早恢復活躍</li><li>抗體形成風險：過於頻繁大劑量注射可令身體產生抗體</li></ul><h3>恢復期與風險</h3><ul><li>常見反應：注射部位輕微紅腫、痠軟、瘀青，數天至一週消退</li><li>藥物擴散至非目標肌肉可致副作用：上半面處理影響提眼瞼肌可致暫時性眼瞼下垂</li><li>「面僵」多源於劑量過多或落針層次不精準，須由熟悉解剖的醫生控制劑量</li></ul><h3>術後護理</h3><ul><li>4 小時內保持挺直姿勢，避免平躺或彎腰</li><li>潔面輕柔，嚴禁按壓、搓揉或面部按摩</li><li>短期避免桑拿、高溫瑜伽等高溫環境</li></ul>`, "zh-CN": `<p>Botox 含高度纯化的肉毒杆菌素A型，属神经传导阻断剂。注入目标肌肉后可暂时阻断神经末梢释放乙醯胆碱，使过度活跃的肌肉放松、减少收缩频率。</p><h3>效果一：改善咀嚼肌、修饰面部轮廓</h3><p>常吃硬物、韧性食物或夜间磨牙，可致咀嚼肌肥大、面部显阔。精准注入肥大咀嚼肌后，肌肉活动量降低、体积逐渐收缩，有助修饰下颚线条。此疗程只对「肌肉型」面部宽大有效；若属骨骼突出或深层脂肪堆积，单靠注射无法达致理想瘦面。</p><h3>效果二：针对动态纹</h3><p>动态纹是面部表情（大笑、皱眉、抬头）时肌肉牵扯显现的折痕，常见于眉心纹、抬头纹、鱼尾纹。在表情肌肉层微量注射，可适度放松目标肌肉、减少纹路。但无法改善黑眼圈，也无法抚平胶原流失造成的静态纹。</p><h3>效果因人而异的四大因素</h3><ul><li>肌肉体积与强韧度：肌肉越强壮，需更长代谢时间或调整剂量</li><li>人体代谢速率：一般效果维持 3-6 个月，代谢快者维持时间可能缩短</li><li>生活习惯：疗程后继续咬硬物，咀嚼肌会提早恢复活跃</li><li>抗体形成风险：过于频繁大剂量注射可令身体产生抗体</li></ul><h3>恢复期与风险</h3><ul><li>常见反应：注射部位轻微红肿、酸软、瘀青，数天至一周消退</li><li>药物扩散至非目标肌肉可致副作用：上半面处理影响提眼睑肌可致暂时性眼睑下垂</li><li>「面僵」多源于剂量过多或落针层次不精准，须由熟悉解剖的医生控制剂量</li></ul><h3>术后护理</h3><ul><li>4 小时内保持挺直姿势，避免平躺或弯腰</li><li>洁面轻柔，严禁按压、搓揉或面部按摩</li><li>短期避免桑拿、高温瑜伽等高温环境</li></ul>`, en: `<p>Botox contains highly purified botulinum toxin type A and is a neurotransmitter blocking agent. After injection into the target muscle, it can temporarily block acetylcholine release from nerve endings, relaxing overactive muscle and reducing the frequency of contraction.</p><h3>Effect one: improving the masseter and refining facial contour</h3><p>Frequent chewing of hard or chewy foods, or night-time grinding, can cause masseter hypertrophy and a wider-looking face. After precise injection into an enlarged masseter, muscle activity decreases and volume gradually reduces, helping refine the jawline. This treatment is only effective for a “muscular” wide face; if the width is due to bony prominence or deep fat, injection alone cannot achieve the desired slimming.</p><h3>Effect two: targeting dynamic lines</h3><p>Dynamic lines are creases that appear when facial expression (laughing, frowning, raising the brows) pulls on the muscle, commonly seen as glabellar lines, forehead lines and crow’s feet. Micro-injection into the expression-muscle layer can moderately relax the target muscle and reduce lines. It cannot, however, improve dark circles, nor can it smooth static lines caused by collagen loss.</p><h3>Four factors that make results individual</h3><ul><li>Muscle volume and strength: the stronger the muscle, the longer the metabolic time needed, or the dose may need adjusting</li><li>Metabolic rate: results generally last 3–6 months; those with a faster metabolism may have a shorter duration</li><li>Lifestyle: continuing to chew hard foods after treatment will cause the masseter to become active again earlier</li><li>Risk of antibody formation: overly frequent, high-dose injection can cause the body to produce antibodies</li></ul><h3>Downtime and risks</h3><ul><li>Common reactions: mild redness, a dull ache and bruising at the injection site, settling in a few days to a week</li><li>Spread of the product to non-target muscle can cause side effects: treating the upper face and affecting the levator palpebrae can cause temporary eyelid ptosis</li><li>A “frozen face” usually comes from excessive dose or imprecise injection depth, and dose must be controlled by a doctor familiar with anatomy</li></ul><h3>Aftercare</h3><ul><li>Remain upright for 4 hours; avoid lying flat or bending over</li><li>Cleanse gently; pressing, rubbing or facial massage is strictly not allowed</li><li>In the short term, avoid high-temperature environments such as saunas and hot yoga</li></ul>` },
  },
  {
    id: "19",
    slug: "19",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-19.jpg",
    image: "/images/knowledge-cover-19.jpg",
    title: { "zh-HK": `麗珠蘭 vs Profhilo vs Juvelook：三種保濕修復療程如何選擇`, "zh-CN": `丽珠兰 vs Profhilo vs Juvelook：三种保湿修复疗程如何选择`, en: `REJURAN vs Profhilo vs Juvelook: How to Choose Among Three Hydrating Repair Treatments` },
    excerpt: { "zh-HK": `麗珠蘭以 PN 修護肌底，Profhilo 以高濃度透明質酸提升水潤，Juvelook 結合 PDLLA 與透明質酸支援膠原增生。`, "zh-CN": `丽珠兰以 PN 修护肌底，Profhilo 以高浓度透明质酸提升水润，Juvelook 结合 PDLLA 与透明质酸支援胶原增生。`, en: `REJURAN uses PN to repair the skin’s underlying environment; Profhilo uses high-concentration hyaluronic acid to improve hydration; Juvelook combines PDLLA with hyaluronic acid to support collagen production.` },
    body: { "zh-HK": `<p>三種療程各有側重：麗珠蘭以 PN 修護肌底環境，Profhilo 以高濃度透明質酸提升水潤與彈性，Juvelook 結合 PDLLA 與透明質酸支援膠原增生。想改善膚質選麗珠蘭，想提升水潤感選 Profhilo，想收毛孔兼膠原修復選 Juvelook。三者無絕對優劣，關鍵在於膚況需求與療程機制是否匹配。</p><h3>成分與原理比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>項目</th><th>麗珠蘭</th><th>Profhilo</th><th>Juvelook</th></tr></thead><tbody><tr><td>核心成分</td><td>PN（多核苷酸），提取自三文魚 DNA</td><td>64mg 高濃度透明質酸</td><td>PDLLA 微粒 + 非交聯透明質酸</td></tr><tr><td>作用方向</td><td>肌底修復、細胞再生</td><td>擴散式保濕、結構重塑</td><td>膠原增生 + 即時保濕</td></tr><tr><td>適合問題</td><td>膚質粗糙、暗啞、細紋</td><td>乾燥、彈性下降</td><td>毛孔粗大、早期細紋</td></tr></tbody></table></div><h3>效果節奏</h3><ul><li>麗珠蘭：通常 2-4 週開始有感，膠原增生、細紋優化於 1-3 個月</li><li>Profhilo：水潤感較快，結構重整需數週</li><li>Juvelook：HA 即時保濕可見，膠原反應需數週至數月</li></ul><p>三者均屬漸進式效果，不應期望即時大幅改變，效果均非永久，需定期保養維持。</p><h3>如何選擇</h3><ul><li>膚質粗糙、暗啞、缺乏光澤 → 麗珠蘭</li><li>乾燥缺水、彈性下降 → Profhilo</li><li>毛孔粗大、早期細紋 → Juvelook</li><li>想同時要保濕與膠原增生 → Juvelook（雙重機制）</li></ul><h3>副作用與風險</h3><p>三個療程常見術後反應包括針眼、輕微紅腫、觸痛及微細凸起，通常屬暫時性。麗珠蘭另有魚類過敏風險（PN 提取自三文魚 DNA），Profhilo 與 Juvelook 另有透明質酸相關過敏風險。</p>`, "zh-CN": `<p>三种疗程各有侧重：丽珠兰以 PN 修护肌底环境，Profhilo 以高浓度透明质酸提升水润与弹性，Juvelook 结合 PDLLA 与透明质酸支援胶原增生。想改善肤质选丽珠兰，想提升水润感选 Profhilo，想收毛孔兼胶原修复选 Juvelook。三者无绝对优劣，关键在于肤况需求与疗程机制是否匹配。</p><h3>成分与原理比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>项目</th><th>丽珠兰</th><th>Profhilo</th><th>Juvelook</th></tr></thead><tbody><tr><td>核心成分</td><td>PN（多核苷酸），提取自三文鱼 DNA</td><td>64mg 高浓度透明质酸</td><td>PDLLA 微粒 + 非交联透明质酸</td></tr><tr><td>作用方向</td><td>肌底修复、细胞再生</td><td>扩散式保湿、结构重塑</td><td>胶原增生 + 即时保湿</td></tr><tr><td>适合问题</td><td>肤质粗糙、暗哑、细纹</td><td>干燥、弹性下降</td><td>毛孔粗大、早期细纹</td></tr></tbody></table></div><h3>效果节奏</h3><ul><li>丽珠兰：通常 2-4 周开始有感，胶原增生、细纹优化于 1-3 个月</li><li>Profhilo：水润感较快，结构重整需数周</li><li>Juvelook：HA 即时保湿可见，胶原反应需数周至数月</li></ul><p>三者均属渐进式效果，不应期望即时大幅改变，效果均非永久，需定期保养维持。</p><h3>如何选择</h3><ul><li>肤质粗糙、暗哑、缺乏光泽 → 丽珠兰</li><li>干燥缺水、弹性下降 → Profhilo</li><li>毛孔粗大、早期细纹 → Juvelook</li><li>想同时要保湿与胶原增生 → Juvelook（双重机制）</li></ul><h3>副作用与风险</h3><p>三个疗程常见术后反应包括针眼、轻微红肿、触痛及微细凸起，通常属暂时性。丽珠兰另有鱼类过敏风险（PN 提取自三文鱼 DNA），Profhilo 与 Juvelook 另有透明质酸相关过敏风险。</p>`, en: `<p>The three treatments each have a different emphasis: REJURAN uses PN to repair the skin’s underlying environment; Profhilo uses high-concentration hyaluronic acid to improve hydration and elasticity; Juvelook combines PDLLA with hyaluronic acid to support collagen production. Choose REJURAN if you want to improve skin quality, Profhilo if you want more hydration, and Juvelook if you want pore refinement together with collagen repair. None is absolutely superior; the key is whether the skin’s needs match the treatment mechanism.</p><h3>Comparison of composition and mechanism</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Item</th><th>REJURAN</th><th>Profhilo</th><th>Juvelook</th></tr></thead><tbody><tr><td>Core ingredient</td><td>PN (polynucleotide), extracted from salmon DNA</td><td>64 mg high-concentration hyaluronic acid</td><td>PDLLA microparticles + non-cross-linked hyaluronic acid</td></tr><tr><td>Direction of action</td><td>Deep-skin repair, cell regeneration</td><td>Diffusive hydration, structural remodelling</td><td>Collagen production + immediate hydration</td></tr><tr><td>Suitable concerns</td><td>Rough texture, dullness, fine lines</td><td>Dryness, reduced elasticity</td><td>Enlarged pores, early fine lines</td></tr></tbody></table></div><h3>Pace of results</h3><ul><li>REJURAN: usually noticeable in 2–4 weeks; collagen production and fine-line improvement at 1–3 months</li><li>Profhilo: a hydrated feel comes relatively quickly; structural reorganisation takes several weeks</li><li>Juvelook: HA hydration can be seen immediately; the collagen response takes weeks to months</li></ul><p>All three produce progressive results. Immediate dramatic change should not be expected, and none of the results is permanent; regular maintenance is needed to sustain them.</p><h3>How to choose</h3><ul><li>Rough texture, dullness, lack of radiance → REJURAN</li><li>Dryness, dehydration, reduced elasticity → Profhilo</li><li>Enlarged pores, early fine lines → Juvelook</li><li>Want both hydration and collagen production → Juvelook (dual mechanism)</li></ul><h3>Side effects and risks</h3><p>Common post-treatment reactions for all three include needle marks, mild redness and swelling, tenderness and tiny raised spots, usually temporary. REJURAN also carries a fish-allergy risk (PN is extracted from salmon DNA); Profhilo and Juvelook also carry hyaluronic acid–related allergy risk.</p>` },
  },
  {
    id: "20",
    slug: "20",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-20.jpg",
    image: "/images/knowledge-cover-20.jpg",
    title: { "zh-HK": `腋下肉毒止汗：原理、見效時間與恢復期`, "zh-CN": `腋下肉毒止汗：原理、见效时间与恢复期`, en: `Underarm Botox for Sweating: Principle, Time to Results and Downtime` },
    excerpt: { "zh-HK": `腋下肉毒透過調節交感神經對汗腺的刺激訊號，協助減少局部過度出汗，讓夏天日常更乾爽自在。`, "zh-CN": `腋下肉毒透过调节交感神经对汗腺的刺激讯号，协助减少局部过度出汗，让夏天日常更干爽自在。`, en: `Underarm botulinum toxin modulates the sympathetic nerve’s stimulatory signal to the sweat glands, helping reduce excessive local sweating so that summer days feel drier and more comfortable.` },
    body: { "zh-HK": `<p>Botox 用於多汗管理的重點是協助減少局部過度出汗，而非令全身完全不出汗。汗腺本身不是被永久破壞，而是接收到的「出汗訊號」暫時減少。</p><h3>原理</h3><p>作用方向是調節交感神經對汗腺的刺激訊號，針對腋下、手掌、腳底等局部出汗問題，同時有助減少異味。</p><h3>見效與維持時間</h3><ul><li>一般約 3 至 7 天開始見效，屬逐步下降而非即時全乾</li><li>多數人約 1 至 2 週更明顯感受到穩定乾爽度</li><li>效果維持約 4 至 6 個月，剛好可覆蓋整個炎熱季節</li></ul><h3>恢復期</h3><p>屬微創程序，處理時間較短，多數個案完成後可如常進行日常活動。需按醫囑暫時避免局部受壓、劇烈運動、高溫環境。</p><h3>適合人士</h3><ul><li>夏天腋下出汗快、衣服常有濕印</li><li>已用止汗產品但效果有限</li><li>社交、工作、見客時因汗印而不自在</li><li>希望恢復期短、對日常安排影響較少</li></ul><h3>與止汗劑的分別</h3><p>止汗劑屬日常外用表面管理，對局部出汗量明顯較高者可能不足。腋下肉毒從汗腺接收神經訊號的方向入手，而非皮膚表面短暫遮蓋。</p>`, "zh-CN": `<p>Botox 用于多汗管理的重点是协助减少局部过度出汗，而非令全身完全不出汗。汗腺本身不是被永久破坏，而是接收到的「出汗讯号」暂时减少。</p><h3>原理</h3><p>作用方向是调节交感神经对汗腺的刺激讯号，针对腋下、手掌、脚底等局部出汗问题，同时有助减少异味。</p><h3>见效与维持时间</h3><ul><li>一般约 3 至 7 天开始见效，属逐步下降而非即时全干</li><li>多数人约 1 至 2 周更明显感受到稳定干爽度</li><li>效果维持约 4 至 6 个月，刚好可覆盖整个炎热季节</li></ul><h3>恢复期</h3><p>属微创程序，处理时间较短，多数个案完成后可如常进行日常活动。需按医嘱暂时避免局部受压、剧烈运动、高温环境。</p><h3>适合人士</h3><ul><li>夏天腋下出汗快、衣服常有湿印</li><li>已用止汗产品但效果有限</li><li>社交、工作、见客时因汗印而不自在</li><li>希望恢复期短、对日常安排影响较少</li></ul><h3>与止汗剂的分别</h3><p>止汗剂属日常外用表面管理，对局部出汗量明显较高者可能不足。腋下肉毒从汗腺接收神经讯号的方向入手，而非皮肤表面短暂遮盖。</p>`, en: `<p>The focus of Botox for hyperhidrosis management is to help reduce excessive local sweating, not to stop the whole body from sweating entirely. The sweat glands themselves are not permanently destroyed; rather, the “sweat signal” they receive is temporarily reduced.</p><h3>Principle</h3><p>The direction of action is to modulate the sympathetic nerve’s stimulatory signal to the sweat glands, targeting local sweating of the underarms, palms and soles, while also helping reduce odour.</p><h3>Onset and duration</h3><ul><li>Generally begins to take effect in about 3 to 7 days, as a gradual reduction rather than instant complete dryness</li><li>Most people notice more stable dryness more clearly at about 1 to 2 weeks</li><li>Results last about 4 to 6 months, which can cover an entire hot season</li></ul><h3>Downtime</h3><p>It is a minimally invasive procedure with a relatively short treatment time. In most cases, daily activities can resume as usual afterwards. Follow medical advice to temporarily avoid local pressure, vigorous exercise and high-temperature environments.</p><h3>Who it is for</h3><ul><li>Those whose underarms sweat quickly in summer, with frequent damp marks on clothing</li><li>Those who have used antiperspirant products with limited effect</li><li>Those who feel self-conscious about sweat marks in social, work or client-facing settings</li><li>Those who want short downtime with little impact on daily arrangements</li></ul><h3>How it differs from antiperspirant</h3><p>Antiperspirant is everyday topical surface management, and may be insufficient for those with clearly higher local sweat volume. Underarm botulinum toxin works from the direction of the nerve signal received by the sweat glands, rather than briefly covering the skin surface.</p>` },
  },
  {
    id: "21",
    slug: "21",
    eyebrow: "Skin Care",
    cover: "/images/knowledge-cover-21.jpg",
    image: "/images/knowledge-cover-21.jpg",
    title: { "zh-HK": `收毛孔醫美療程：毛孔粗大原因與改善方法`, "zh-CN": `收毛孔医美疗程：毛孔粗大原因与改善方法`, en: `Pore-Refining Aesthetic Treatments: Causes of Enlarged Pores and How to Improve Them` },
    excerpt: { "zh-HK": `毛孔粗大源於老化、油脂過多與清潔失衡。了解原因與醫美選擇，才能有效改善毛孔與膚質。`, "zh-CN": `毛孔粗大源于老化、油脂过多与清洁失衡。了解原因与医美选择，才能有效改善毛孔与肤质。`, en: `Enlarged pores come from ageing, excess sebum and imbalanced cleansing. Understanding the causes and aesthetic options is the way to improve pores and skin quality effectively.` },
    body: { "zh-HK": `<p>毛孔粗大主要有三大成因：肌膚老化（膠原蛋白與水分流失，皮膚鬆弛令毛孔外觀明顯）、油脂分泌過多（過量油脂撐大毛孔）、清潔失衡（清潔不足令毛孔內污垢積聚，過度清潔則破壞皮膚屏障）。</p><h3>日常護理四方向</h3><ul><li>作息定時、睡眠充足、減少刺激性食物</li><li>按膚質選用溫和潔面產品，睡前清潔，定期清潔化妝工具</li><li>定期溫和去角質，疏通毛孔</li><li>加強保濕，增強表皮屏障</li></ul><h3>醫美療程：再生針劑改善毛孔</h3><p>針對毛孔粗大及皮膚粗糙問題，可考慮再生類針劑療程。以聚雙旋乳酸（PDLLA）結合透明質酸（HA）的配方為例，設計方向包括刺激膠原蛋白修復過程、支援皮膚結構穩定性，適用於膚質改善相關療程。</p><p>另外，光電療程如 M22 光子嫩膚、分段式激光等，透過刺激膠原增生與控油，亦有助收細毛孔、改善粗糙膚質。</p><h3>注意事項</h3><ul><li>再生針劑屬注射療程，具風險及個人差異，需先了解注意事項</li><li>實際效果因個人膚質、年齡及生活習慣而異</li><li>進行任何療程前，建議先由醫生面診評估毛孔成因</li></ul>`, "zh-CN": `<p>毛孔粗大主要有三大成因：肌肤老化（胶原蛋白与水分流失，皮肤松弛令毛孔外观明显）、油脂分泌过多（过量油脂撑大毛孔）、清洁失衡（清洁不足令毛孔内污垢积聚，过度清洁则破坏皮肤屏障）。</p><h3>日常护理四方向</h3><ul><li>作息定时、睡眠充足、减少刺激性食物</li><li>按肤质选用温和洁面产品，睡前清洁，定期清洁化妆工具</li><li>定期温和去角质，疏通毛孔</li><li>加强保湿，增强表皮屏障</li></ul><h3>医美疗程：再生针剂改善毛孔</h3><p>针对毛孔粗大及皮肤粗糙问题，可考虑再生类针剂疗程。以聚双旋乳酸（PDLLA）结合透明质酸（HA）的配方为例，设计方向包括刺激胶原蛋白修复过程、支援皮肤结构稳定性，适用于肤质改善相关疗程。</p><p>另外，光电疗程如 M22 光子嫩肤、分段式激光等，透过刺激胶原增生与控油，亦有助收细毛孔、改善粗糙肤质。</p><h3>注意事项</h3><ul><li>再生针剂属注射疗程，具风险及个人差异，需先了解注意事项</li><li>实际效果因个人肤质、年龄及生活习惯而异</li><li>进行任何疗程前，建议先由医生面诊评估毛孔成因</li></ul>`, en: `<p>Enlarged pores have three main causes: skin ageing (loss of collagen and moisture, with laxity making pores more obvious), excess sebum (too much oil stretching the pores), and imbalanced cleansing (inadequate cleansing allowing dirt to accumulate in pores, while over-cleansing damages the skin barrier).</p><h3>Four directions for daily care</h3><ul><li>Keep regular hours, get enough sleep, and reduce stimulating foods</li><li>Choose a gentle cleanser according to skin type, cleanse before bed, and regularly clean make-up tools</li><li>Exfoliate gently on a regular basis to unclog pores</li><li>Strengthen hydration to reinforce the epidermal barrier</li></ul><h3>Medical aesthetic treatment: regenerative injectables for pores</h3><p>For enlarged pores and rough skin, regenerative injectable treatments may be considered. Taking a formula combining poly-D,L-lactic acid (PDLLA) with hyaluronic acid (HA) as an example, the design direction includes stimulating the collagen repair process and supporting structural stability of the skin, and is suitable for treatments related to improving skin quality.</p><p>In addition, energy-based treatments such as M22 photorejuvenation and fractional laser, by stimulating collagen production and controlling oil, also help refine pores and improve rough texture.</p><h3>Precautions</h3><ul><li>Regenerative injectables are injection treatments, with risks and individual variation; precautions should be understood first</li><li>Actual results vary with individual skin quality, age and lifestyle</li><li>Before any treatment, it is advisable to have a face-to-face assessment by a doctor of the cause of the enlarged pores</li></ul>` },
  },
  {
    id: "22",
    slug: "22",
    eyebrow: "Wellness",
    cover: "/images/knowledge-cover-22.jpg",
    image: "/images/knowledge-cover-22.jpg",
    title: { "zh-HK": `冷凍溶脂 vs 熱能減脂：原理、效果與適合對象比較`, "zh-CN": `冷冻溶脂 vs 热能减脂：原理、效果与适合对象比较`, en: `Cryolipolysis vs Heat-Based Fat Reduction: Principle, Results and Suitable Candidates Compared` },
    excerpt: { "zh-HK": `冷凍溶脂以低溫令脂肪細胞凋亡，熱能減脂透過熱能針對脂肪兼改善皮膚鬆弛。了解兩者分別才能選對塑形療程。`, "zh-CN": `冷冻溶脂以低温令脂肪细胞凋亡，热能减脂透过热能针对脂肪兼改善皮肤松弛。了解两者分别才能选对塑形疗程。`, en: `Cryolipolysis uses low temperature to induce fat-cell apoptosis; heat-based fat reduction targets fat with heat and can also improve skin laxity. Understanding the difference is the way to choose the right contouring treatment.` },
    body: { "zh-HK": `<p>冷凍溶脂與熱能減脂的分別在於原理、主要效果、適合對象及見效方式。冷凍溶脂以低溫令脂肪細胞凋亡，較適合處理「可捏起的局部頑固脂肪」；熱能減脂涵蓋聚焦超聲波、射頻及結合電磁波的技術，除針對脂肪外，亦可同時改善皮膚鬆弛、線條感或肌肉量，療程定位更廣。</p><h3>原理比較</h3><ul><li><strong>冷凍溶脂</strong>：以負壓吸附治療部位，溫度控制在約 -5°C 至 -11°C，令脂肪細胞結晶化，啟動細胞凋亡，脂肪細胞約 1 至 3 個月內經淋巴系統逐步代謝排出，屬漸進式見效</li><li><strong>熱能減脂</strong>：聚焦超聲波將能量集中於皮下脂肪層高溫破壞脂肪細胞；射頻以中低溫加熱組織，促進脂肪代謝、膠原蛋白收縮及增生</li></ul><h3>詳細比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>項目</th><th>冷凍溶脂</th><th>熱能減脂</th></tr></thead><tbody><tr><td>主要功效</td><td>減少局部脂肪細胞數量</td><td>針對脂肪；可收緊皮膚、改善鬆弛</td></tr><tr><td>適合對象</td><td>局部頑固脂肪明顯人士</td><td>皮膚鬆弛、橙皮紋、想同時改善緊緻度</td></tr><tr><td>見效時間</td><td>約 2 至 3 個月，漸進式</td><td>射頻較早見緊緻效果；聚焦超聲波約 1-3 個月</td></tr><tr><td>恢復期</td><td>一般無明顯恢復期</td><td>射頻無恢復期；聚焦超聲波或有輕微紅腫</td></tr></tbody></table></div><h3>如何選擇</h3><ul><li>主要想改善局部頑固脂肪 → 冷凍溶脂較適合</li><li>同時想改善皮膚鬆弛、輪廓線條或緊緻度 → 熱能減脂較合適</li><li>冷凍溶脂不是整體減肥療程，整體體脂偏高者未必適合</li></ul>`, "zh-CN": `<p>冷冻溶脂与热能减脂的分别在于原理、主要效果、适合对象及见效方式。冷冻溶脂以低温令脂肪细胞凋亡，较适合处理「可捏起的局部顽固脂肪」；热能减脂涵盖聚焦超声波、射频及结合电磁波的技术，除针对脂肪外，亦可同时改善皮肤松弛、线条感或肌肉量，疗程定位更广。</p><h3>原理比较</h3><ul><li><strong>冷冻溶脂</strong>：以负压吸附治疗部位，温度控制在约 -5°C 至 -11°C，令脂肪细胞结晶化，启动细胞凋亡，脂肪细胞约 1 至 3 个月内经淋巴系统逐步代谢排出，属渐进式见效</li><li><strong>热能减脂</strong>：聚焦超声波将能量集中于皮下脂肪层高温破坏脂肪细胞；射频以中低温加热组织，促进脂肪代谢、胶原蛋白收缩及增生</li></ul><h3>详细比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>项目</th><th>冷冻溶脂</th><th>热能减脂</th></tr></thead><tbody><tr><td>主要功效</td><td>减少局部脂肪细胞数量</td><td>针对脂肪；可收紧皮肤、改善松弛</td></tr><tr><td>适合对象</td><td>局部顽固脂肪明显人士</td><td>皮肤松弛、橙皮纹、想同时改善紧致度</td></tr><tr><td>见效时间</td><td>约 2 至 3 个月，渐进式</td><td>射频较早见紧致效果；聚焦超声波约 1-3 个月</td></tr><tr><td>恢复期</td><td>一般无明显恢复期</td><td>射频无恢复期；聚焦超声波或有轻微红肿</td></tr></tbody></table></div><h3>如何选择</h3><ul><li>主要想改善局部顽固脂肪 → 冷冻溶脂较适合</li><li>同时想改善皮肤松弛、轮廓线条或紧致度 → 热能减脂较合适</li><li>冷冻溶脂不是整体减肥疗程，整体体脂偏高者未必适合</li></ul>`, en: `<p>Cryolipolysis and heat-based fat reduction differ in principle, main effects, suitable candidates and how results appear. Cryolipolysis uses low temperature to induce fat-cell apoptosis, and is better suited to “pinchable local stubborn fat”; heat-based fat reduction covers focused ultrasound, radiofrequency and technologies combined with electromagnetic energy. Besides targeting fat, it can also improve skin laxity, definition or muscle volume, so the treatment positioning is broader.</p><h3>Comparison of principles</h3><ul><li><strong>Cryolipolysis</strong>: the treatment area is held by negative-pressure suction, with temperature controlled at about −5°C to −11°C, causing fat cells to crystallise and initiating apoptosis. Fat cells are then gradually metabolised and cleared via the lymphatic system over about 1 to 3 months — a progressive onset of results</li><li><strong>Heat-based fat reduction</strong>: focused ultrasound concentrates energy in the subcutaneous fat layer to destroy fat cells at high temperature; radiofrequency heats tissue at moderate-to-low temperature, promoting fat metabolism and collagen contraction and production</li></ul><h3>Detailed comparison</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Item</th><th>Cryolipolysis</th><th>Heat-based fat reduction</th></tr></thead><tbody><tr><td>Main effect</td><td>Reduces the number of local fat cells</td><td>Targets fat; can also tighten skin and improve laxity</td></tr><tr><td>Suitable candidates</td><td>Those with obvious local stubborn fat</td><td>Skin laxity, orange-peel texture, wanting to improve firmness at the same time</td></tr><tr><td>Time to results</td><td>About 2 to 3 months, progressive</td><td>Radiofrequency shows firming earlier; focused ultrasound about 1–3 months</td></tr><tr><td>Downtime</td><td>Generally no obvious downtime</td><td>Radiofrequency has no downtime; focused ultrasound may cause mild redness and swelling</td></tr></tbody></table></div><h3>How to choose</h3><ul><li>Mainly wanting to improve local stubborn fat → cryolipolysis is more suitable</li><li>Wanting to improve skin laxity, contour lines or firmness at the same time → heat-based fat reduction is more appropriate</li><li>Cryolipolysis is not a whole-body weight-loss treatment; those with overall high body fat may not be suitable</li></ul>` },
  },
  {
    id: "23",
    slug: "23",
    eyebrow: "Signature",
    cover: "/images/knowledge-cover-23.jpg",
    image: "/images/knowledge-cover-23.jpg",
    title: { "zh-HK": `Ulthera HIFU 拉提：聚焦超聲波重塑輪廓`, "zh-CN": `Ulthera HIFU 拉提：聚焦超声波重塑轮廓`, en: `Ulthera HIFU Lift: Focused Ultrasound to Reshape Contour` },
    excerpt: { "zh-HK": `Ulthera HIFU 將聚焦超聲波送達真皮層及筋膜層，收緊筋膜並刺激膠原再生，對輪廓提升效果顯著。`, "zh-CN": `Ulthera HIFU 将聚焦超声波送达真皮层及筋膜层，收紧筋膜并刺激胶原再生，对轮廓提升效果显著。`, en: `Ulthera HIFU delivers focused ultrasound to the dermis and fascial layer, tightening the fascia and stimulating collagen regeneration, with a noticeable effect on contour lifting.` },
    body: { "zh-HK": `<p>Ulthera HIFU 是來自美國的聚焦超聲波緊膚儀器，將聚焦超聲波能量直接送達真皮層及筋膜層（SMAS），加熱至約 60℃ 至 70℃，收緊筋膜層並刺激膠原蛋白再生，是深受信賴的非侵入式拉提選擇。</p><h3>三種深度探頭，精準分層</h3><ul><li><strong>1.5mm</strong>：作用於表皮層，針對細紋與毛孔</li><li><strong>3.0mm</strong>：作用於真皮層，改善彈性與緊實度</li><li><strong>4.5mm</strong>：作用於 SMAS 筋膜層，達致深層拉提</li></ul><p>療程最大的特色，是採用專利 DeepSEE™ 實時超聲波影像技術，治療中可即時觀測皮膚組織，確保能量送達準確位置及深度，是少數能讓治療人員準確看到治療中皮膚組織的系統。</p><h3>療程效果</h3><ul><li>收緊額頭皮膚、提升眼眉、突顯雙眼皮</li><li>改善鬆弛及皺紋，如法令紋、嘴角紋</li><li>提升面部輪廓線條，雙頰蘋果肌更豐盈年輕</li><li>改善下顎鬆弛、消除雙下巴</li><li>緊緻頸部、撫平頸紋、回復皮膚彈性</li><li>刺激皮膚更新機制，擊退皺紋</li></ul><h3>三階段皮膚變化</h3><p><strong>第一階段（弱化彈性纖維）</strong>：年齡增長導致膠原蛋白和彈性纖維流失、斷裂，肌膚下垂鬆弛。</p><p><strong>第二階段（超聲波能量輸送）</strong>：非侵入式 HIFU 精準聚焦至 SMAS 筋膜層及真皮層，啟動膠原蛋白與彈力纖維再生重組。</p><p><strong>第三階段（膠原再生）</strong>：術後約 1 個月開始見效，2-3 個月明顯拉提，輪廓線條漸收緊回彈。</p><h3>見效時間與維持</h3><p>療程後立即有初步效果；約 1 個月開始見效；2-3 個月效果最顯著；膠原生成在接下來 6 個月內持續進行。輪廓改善可維持 18-24 個月，甚至兩年或更久。</p><h3>與其他療程的分別</h3><p>Pico 皮秒激光主要針對色素及膚質改善、收細毛孔，非主力深層膠原收緊；Thermage 以單極射頻加熱真皮層約 3-4.3mm，主打整體皮膚緊實度；Ulthera HIFU 則以高能量聚焦超聲波作用於 3.0mm 真皮層及 4.5mm 筋膜層，對輪廓提升及明顯下垂效果較顯著。</p><h3>療程前注意事項</h3><ul><li>由專業醫生評估皮膚狀況，確認使用獲美國 FDA 認證的正版儀器</li><li>前一週停止使用含果酸、A酸、水楊酸等成分的保養品</li><li>近期曾注射 Botox 者，建議相隔至少兩星期</li><li>前一週避免長時間曝曬</li></ul><h3>療程後護理</h3><ul><li>可能輕微紅腫、熱感或痠脹感，屬正常反應，通常迅速消退</li><li>皮膚較乾燥，應持續使用高保濕產品</li><li>每日塗抹 SPF 30-50 以上防曬，一週內避免曝曬</li><li>一週內不可用含果酸、酒精、去角質或美白酸類產品</li><li>一週內避免桑拿、溫泉、劇烈運動</li><li>療程後當日不建議敷面膜及冰敷，以免降溫影響效果</li></ul><h3>認證與臨床數據</h3><p>獲美國 FDA 與歐盟 CE 認證，全球逾 260,000 真實案例，超過 60 份醫學研究、40 份專業報告及 100 個專利支持，安全性與效果有充分數據支持。</p>`, "zh-CN": `<p>Ulthera HIFU 是来自美国的聚焦超声波紧肤仪器，将聚焦超声波能量直接送达真皮层及筋膜层（SMAS），加热至约 60℃ 至 70℃，收紧筋膜层并刺激胶原蛋白再生，是深受信赖的非侵入式拉提选择。</p><h3>三种深度探头，精准分层</h3><ul><li><strong>1.5mm</strong>：作用于表皮层，针对细纹与毛孔</li><li><strong>3.0mm</strong>：作用于真皮层，改善弹性与紧实度</li><li><strong>4.5mm</strong>：作用于 SMAS 筋膜层，达致深层拉提</li></ul><p>疗程最大的特色，是采用专利 DeepSEE™ 实时超声波影像技术，治疗中可即时观测皮肤组织，确保能量送达准确位置及深度，是少数能让治疗人员准确看到治疗中皮肤组织的系统。</p><h3>疗程效果</h3><ul><li>收紧额头皮肤、提升眼眉、突显双眼皮</li><li>改善松弛及皱纹，如法令纹、嘴角纹</li><li>提升面部轮廓线条，双颊苹果肌更丰盈年轻</li><li>改善下颚松弛、消除双下巴</li><li>紧致颈部、抚平颈纹、回复皮肤弹性</li><li>刺激皮肤更新机制，击退皱纹</li></ul><h3>三阶段皮肤变化</h3><p><strong>第一阶段（弱化弹性纤维）</strong>：年龄增长导致胶原蛋白和弹性纤维流失、断裂，肌肤下垂松弛。</p><p><strong>第二阶段（超声波能量输送）</strong>：非侵入式 HIFU 精准聚焦至 SMAS 筋膜层及真皮层，启动胶原蛋白与弹力纤维再生重组。</p><p><strong>第三阶段（胶原再生）</strong>：术后约 1 个月开始见效，2-3 个月明显拉提，轮廓线条渐收紧回弹。</p><h3>见效时间与维持</h3><p>疗程后立即有初步效果；约 1 个月开始见效；2-3 个月效果最显著；胶原生成在接下来 6 个月内持续进行。轮廓改善可维持 18-24 个月，甚至两年或更久。</p><h3>与其他疗程的分别</h3><p>Pico 皮秒激光主要针对色素及肤质改善、收细毛孔，非主力深层胶原收紧；Thermage 以单极射频加热真皮层约 3-4.3mm，主打整体皮肤紧实度；Ulthera HIFU 则以高能量聚焦超声波作用于 3.0mm 真皮层及 4.5mm 筋膜层，对轮廓提升及明显下垂效果较显著。</p><h3>疗程前注意事项</h3><ul><li>由专业医生评估皮肤状况，确认使用获美国 FDA 认证的正版仪器</li><li>前一周停止使用含果酸、A酸、水杨酸等成分的保养品</li><li>近期曾注射 Botox 者，建议相隔至少两星期</li><li>前一周避免长时间曝晒</li></ul><h3>疗程后护理</h3><ul><li>可能轻微红肿、热感或酸胀感，属正常反应，通常迅速消退</li><li>皮肤较干燥，应持续使用高保湿产品</li><li>每日涂抹 SPF 30-50 以上防晒，一周内避免曝晒</li><li>一周内不可用含果酸、酒精、去角质或美白酸类产品</li><li>一周内避免桑拿、温泉、剧烈运动</li><li>疗程后当日不建议敷面膜及冰敷，以免降温影响效果</li></ul><h3>认证与临床数据</h3><p>获美国 FDA 与欧盟 CE 认证，全球逾 260,000 真实案例，超过 60 份医学研究、40 份专业报告及 100 个专利支持，安全性与效果有充分数据支持。</p>`, en: `<p>Ulthera HIFU is a focused-ultrasound skin-tightening device from the United States. It delivers focused ultrasound energy directly to the dermis and the fascial layer (SMAS), heating to about 60°C to 70°C, tightening the fascia and stimulating collagen regeneration. It is a trusted non-invasive lifting option.</p><h3>Three depth tips, precise layering</h3><ul><li><strong>1.5 mm</strong>: acts on the epidermis, targeting fine lines and pores</li><li><strong>3.0 mm</strong>: acts on the dermis, improving elasticity and firmness</li><li><strong>4.5 mm</strong>: acts on the SMAS fascial layer, achieving deep lifting</li></ul><p>The treatment’s greatest distinctive feature is patented DeepSEE™ real-time ultrasound imaging, which allows skin tissue to be observed during treatment, ensuring energy is delivered to the accurate location and depth. It is one of the few systems that lets the practitioner accurately see the tissue being treated.</p><h3>Treatment effects</h3><ul><li>Tightens forehead skin, lifts the brows and makes double eyelids more apparent</li><li>Improves laxity and wrinkles, such as nasolabial folds and mouth-corner lines</li><li>Lifts facial contour, making the apple cheeks fuller and more youthful</li><li>Improves jawline laxity and reduces double chin</li><li>Firms the neck, smooths neck lines and restores skin elasticity</li><li>Stimulates the skin’s renewal mechanism to combat wrinkles</li></ul><h3>Three stages of skin change</h3><p><strong>Stage one (weakening of elastic fibres)</strong>: with age, collagen and elastic fibres are lost and break, and the skin sags and becomes lax.</p><p><strong>Stage two (ultrasound energy delivery)</strong>: non-invasive HIFU focuses with precision on the SMAS fascial layer and dermis, initiating regeneration and reorganisation of collagen and elastic fibres.</p><p><strong>Stage three (collagen regeneration)</strong>: results begin to appear about 1 month after treatment, with clear lifting at 2–3 months, and contour lines gradually tightening and rebounding.</p><h3>Time to results and duration</h3><p>There is an initial effect immediately after treatment; results begin to appear at about 1 month; they are most noticeable at 2–3 months; collagen production continues over the following 6 months. Contour improvement may last 18–24 months, or even two years or longer.</p><h3>How it differs from other treatments</h3><p>Pico picosecond laser mainly targets pigment and skin-quality improvement and pore refinement, and is not primarily for deep collagen tightening; Thermage uses monopolar radiofrequency to heat the dermis about 3–4.3 mm, focusing on overall skin firmness; Ulthera HIFU uses high-energy focused ultrasound on the 3.0 mm dermis and 4.5 mm fascial layer, with more noticeable effect on contour lifting and obvious sagging.</p><h3>Notes before treatment</h3><ul><li>Have a qualified doctor assess the skin, and confirm that a genuine US FDA-certified device is used</li><li>Stop using skincare containing AHAs, retinoids, salicylic acid and similar ingredients for one week beforehand</li><li>Those who have recently had Botox are advised to wait at least two weeks</li><li>Avoid prolonged sun exposure for one week beforehand</li></ul><h3>Aftercare</h3><ul><li>Mild redness, a warm sensation or a dull ache may occur; these are normal reactions and usually settle quickly</li><li>The skin may be drier; continue using highly hydrating products</li><li>Apply SPF 30–50 or higher sunscreen daily, and avoid sun exposure for one week</li><li>Do not use products containing AHAs, alcohol, exfoliants or brightening acids for one week</li><li>Avoid saunas, hot springs and vigorous exercise for one week</li><li>Face masks and ice packs are not recommended on the day of treatment, so as not to cool the tissue and affect results</li></ul><h3>Certification and clinical data</h3><p>Certified by the US FDA and EU CE, with more than 260,000 real cases worldwide, supported by more than 60 medical studies, 40 professional reports and 100 patents — safety and results are well supported by data.</p>` },
  },
  {
    id: "24",
    slug: "24",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-24.jpg",
    image: "/images/knowledge-cover-24.jpg",
    title: { "zh-HK": `麗珠蘭 REJURAN 水光針：PN 肌底修復解密`, "zh-CN": `丽珠兰 REJURAN 水光针：PN 肌底修复解密`, en: `REJURAN Skin Booster: Decoding PN Deep-Skin Repair` },
    excerpt: { "zh-HK": `麗珠蘭以 PDRN 與 PN 成分深入肌膚細胞，修復受損組織、刺激膠原合成，被譽為「水光針界愛馬仕」。`, "zh-CN": `丽珠兰以 PDRN 与 PN 成分深入肌肤细胞，修复受损组织、刺激胶原合成，被誉为「水光针界爱马仕」。`, en: `REJURAN uses PDRN and PN ingredients that reach skin cells, repair damaged tissue and stimulate collagen synthesis — often called “the Hermès of skin boosters”.` },
    body: { "zh-HK": `<p>REJURAN 麗珠蘭由藥廠 Pharma Research 研製，主要成分萃取自三文魚的幹細胞，含兩大核心成分：PDRN（聚去氧核糖核苷酸）與 PN（多核苷酸）。</p><h3>兩大核心成分</h3><ul><li><strong>PDRN（聚去氧核糖核苷酸）</strong>：小分子，作用於皮膚淺層，具消炎與促進組織修復效果，常用於改善暗瘡、泛紅。此成分亦見於糖尿病傷口癒合藥膏中。</li><li><strong>PN（多核苷酸）</strong>：分子較大，注射於真皮層，為纖維細胞提供支撐架構，鎖水保濕並提升彈性，是 REJURAN 注射時選用的主要成分，能改善皮膚凹陷與細紋。</li></ul><p>兩者與人體 DNA 高度相似，能深入肌膚修復受損細胞、刺激膠原蛋白合成，因此被譽為「水光針界愛馬仕」。</p><h3>與一般水光針的分別</h3><p>市面上的水光針主要成分為透明質酸，透過極細針頭將保濕精華注入肌底，能為肌膚快速補水、修復臉部細紋。而麗珠蘭主要成分為 PDRN 或 PN，能深入肌膚細胞、修復受損組織，更可活化膠原母細胞、強化皮膚屏障，效果較全面。</p><h3>麗珠蘭系列一覽</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>系列</th><th>成分</th><th>特點</th><th>適合對象</th></tr></thead><tbody><tr><td>黑盒</td><td>高濃度 PN</td><td>刺激膠原生成、修復受損細胞、抗老化</td><td>首次嘗試者</td></tr><tr><td>紅盒</td><td>PN + 透明質酸 + 麻醉劑</td><td>深層修復 + 補濕、減少皺紋</td><td>怕痛人士、肌膚老化</td></tr><tr><td>白盒</td><td>高濃度 PN（眼周設計）</td><td>改善黑眼圈、眼尾細紋、淚溝</td><td>眼周肌膚老化、乾性膚質</td></tr><tr><td>藍盒</td><td>PN（抗炎修復）</td><td>抗炎、調節油脂、淡化痘疤與毛孔</td><td>油性肌膚、暗瘡肌</td></tr></tbody></table></div><h3>六大功效</h3><ul><li><strong>修復受損肌膚</strong>：激活及修復肌膚細胞，改善粗糙、泛紅及初老現象</li><li><strong>刺激膠原蛋白增生</strong>：活化膠原母細胞，改善細紋、皺紋、下垂</li><li><strong>強化皮膚屏障</strong>：PN 具三維雙股結構，深層補水、減少水分流失</li><li><strong>抗炎修護</strong>：舒緩發炎，改善暗瘡、泛紅</li><li><strong>提亮膚色</strong>：均勻膚色、減淡色斑、改善黑眼圈與暗沉</li><li><strong>收細毛孔</strong>：膠原增生使毛孔隨皮膚結構改善而逐漸收細</li></ul><h3>療程流程</h3><ol><li><strong>皮膚狀態檢測</strong>：分析過敏、暗瘡、毛孔粗大、乾燥、泛紅等問題</li><li><strong>量身訂做方案</strong>：調整藥劑配比及注射劑量</li><li><strong>局部麻醉</strong>：使用麻膏及適量麻水降低不適</li><li><strong>混合注射</strong>：以極細針頭點狀注射於皮膚淺層（約 1.5～3mm 深）</li></ol><h3>效果與持久度</h3><ul><li>注射後 2～3 天內皮膚明顯變水潤、毛孔縮小</li><li>7～10 天後膚質亮度與均勻度顯著提升，細紋改善</li><li>效果可維持約 3 至 6 個月，完整療程需注射 3 次，每月一次</li><li>其後每隔 3-6 個月補打一次</li></ul><h3>副作用與注意事項</h3><ul><li>注射部位紅腫（數小時至兩天內消退）、瘀青（數天內消退）</li><li>輕微過敏（痕癢、泛紅）、腫脹感（一星期內被吸收）</li><li>治療後 2 星期內避免使用刺激性護膚品（果酸、酒精、美白成分），做好保濕及防曬</li><li>避免劇烈運動與按摩注射區域</li></ul>`, "zh-CN": `<p>REJURAN 丽珠兰由药厂 Pharma Research 研制，主要成分萃取自三文鱼的干细胞，含两大核心成分：PDRN（聚去氧核糖核苷酸）与 PN（多核苷酸）。</p><h3>两大核心成分</h3><ul><li><strong>PDRN（聚去氧核糖核苷酸）</strong>：小分子，作用于皮肤浅层，具消炎与促进组织修复效果，常用于改善暗疮、泛红。此成分亦见于糖尿病伤口愈合药膏中。</li><li><strong>PN（多核苷酸）</strong>：分子较大，注射于真皮层，为纤维细胞提供支撑架构，锁水保湿并提升弹性，是 REJURAN 注射时选用的主要成分，能改善皮肤凹陷与细纹。</li></ul><p>两者与人体 DNA 高度相似，能深入肌肤修复受损细胞、刺激胶原蛋白合成，因此被誉为「水光针界爱马仕」。</p><h3>与一般水光针的分别</h3><p>市面上的水光针主要成分为透明质酸，透过极细针头将保湿精华注入肌底，能为肌肤快速补水、修复脸部细纹。而丽珠兰主要成分为 PDRN 或 PN，能深入肌肤细胞、修复受损组织，更可活化胶原母细胞、强化皮肤屏障，效果较全面。</p><h3>丽珠兰系列一览</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>系列</th><th>成分</th><th>特点</th><th>适合对象</th></tr></thead><tbody><tr><td>黑盒</td><td>高浓度 PN</td><td>刺激胶原生成、修复受损细胞、抗老化</td><td>首次尝试者</td></tr><tr><td>红盒</td><td>PN + 透明质酸 + 麻醉剂</td><td>深层修复 + 补湿、减少皱纹</td><td>怕痛人士、肌肤老化</td></tr><tr><td>白盒</td><td>高浓度 PN（眼周设计）</td><td>改善黑眼圈、眼尾细纹、泪沟</td><td>眼周肌肤老化、干性肤质</td></tr><tr><td>蓝盒</td><td>PN（抗炎修复）</td><td>抗炎、调节油脂、淡化痘疤与毛孔</td><td>油性肌肤、暗疮肌</td></tr></tbody></table></div><h3>六大功效</h3><ul><li><strong>修复受损肌肤</strong>：激活及修复肌肤细胞，改善粗糙、泛红及初老现象</li><li><strong>刺激胶原蛋白增生</strong>：活化胶原母细胞，改善细纹、皱纹、下垂</li><li><strong>强化皮肤屏障</strong>：PN 具三维双股结构，深层补水、减少水分流失</li><li><strong>抗炎修护</strong>：舒缓发炎，改善暗疮、泛红</li><li><strong>提亮肤色</strong>：均匀肤色、减淡色斑、改善黑眼圈与暗沉</li><li><strong>收细毛孔</strong>：胶原增生使毛孔随皮肤结构改善而逐渐收细</li></ul><h3>疗程流程</h3><ol><li><strong>皮肤状态检测</strong>：分析过敏、暗疮、毛孔粗大、干燥、泛红等问题</li><li><strong>量身订做方案</strong>：调整药剂配比及注射剂量</li><li><strong>局部麻醉</strong>：使用麻膏及适量麻水降低不适</li><li><strong>混合注射</strong>：以极细针头点状注射于皮肤浅层（约 1.5～3mm 深）</li></ol><h3>效果与持久度</h3><ul><li>注射后 2～3 天内皮肤明显变水润、毛孔缩小</li><li>7～10 天后肤质亮度与均匀度显著提升，细纹改善</li><li>效果可维持约 3 至 6 个月，完整疗程需注射 3 次，每月一次</li><li>其后每隔 3-6 个月补打一次</li></ul><h3>副作用与注意事项</h3><ul><li>注射部位红肿（数小时至两天内消退）、瘀青（数天内消退）</li><li>轻微过敏（痕痒、泛红）、肿胀感（一星期内被吸收）</li><li>治疗后 2 星期内避免使用刺激性护肤品（果酸、酒精、美白成分），做好保湿及防晒</li><li>避免剧烈运动与按摩注射区域</li></ul>`, en: `<p>REJURAN is developed by Pharma Research. Its main ingredients are extracted from salmon stem cells, and it contains two core components: PDRN (polydeoxyribonucleotide) and PN (polynucleotide).</p><h3>Two core ingredients</h3><ul><li><strong>PDRN (polydeoxyribonucleotide)</strong>: a small molecule acting on the superficial layers of the skin, with anti-inflammatory and tissue-repair effects, commonly used to improve acne and redness. This ingredient is also found in diabetic wound-healing ointments.</li><li><strong>PN (polynucleotide)</strong>: a larger molecule, injected into the dermis, providing a supporting framework for fibroblasts, locking in moisture and improving elasticity. It is the main ingredient chosen for REJURAN injections, and can improve skin hollows and fine lines.</li></ul><p>Both are highly similar to human DNA, can penetrate the skin to repair damaged cells and stimulate collagen synthesis, and have therefore been described as “the Hermès of skin boosters”.</p><h3>How it differs from ordinary skin boosters</h3><p>Skin boosters on the market have hyaluronic acid as the main ingredient. Through ultra-fine needles, hydrating essence is injected into the deeper layers of the skin, quickly replenishing moisture and repairing facial fine lines. REJURAN’s main ingredients are PDRN or PN, which can reach skin cells, repair damaged tissue, and further activate collagen-producing cells and strengthen the skin barrier — a more comprehensive effect.</p><h3>REJURAN range at a glance</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Range</th><th>Ingredients</th><th>Features</th><th>Suitable for</th></tr></thead><tbody><tr><td>Black box</td><td>High-concentration PN</td><td>Stimulates collagen production, repairs damaged cells, anti-ageing</td><td>First-time users</td></tr><tr><td>Red box</td><td>PN + hyaluronic acid + anaesthetic</td><td>Deep repair + hydration, reducing wrinkles</td><td>Those sensitive to pain; ageing skin</td></tr><tr><td>White box</td><td>High-concentration PN (periocular design)</td><td>Improves dark circles, outer-corner fine lines and tear troughs</td><td>Ageing periocular skin, dry skin type</td></tr><tr><td>Blue box</td><td>PN (anti-inflammatory repair)</td><td>Anti-inflammatory, regulates oil, fades acne scars and pores</td><td>Oily skin, acne-prone skin</td></tr></tbody></table></div><h3>Six key benefits</h3><ul><li><strong>Repairs damaged skin</strong>: activates and repairs skin cells, improving roughness, redness and early ageing</li><li><strong>Stimulates collagen production</strong>: activates collagen-producing cells, improving fine lines, wrinkles and sagging</li><li><strong>Strengthens the skin barrier</strong>: PN has a three-dimensional double-strand structure, deeply hydrating and reducing moisture loss</li><li><strong>Anti-inflammatory repair</strong>: soothes inflammation, improving acne and redness</li><li><strong>Brightens complexion</strong>: evens skin tone, fades pigment spots, improves dark circles and dullness</li><li><strong>Refines pores</strong>: collagen production allows pores to gradually refine as skin structure improves</li></ul><h3>Treatment process</h3><ol><li><strong>Skin assessment</strong>: analyse concerns such as allergy, acne, enlarged pores, dryness and redness</li><li><strong>Tailored plan</strong>: adjust the formula ratio and injection dose</li><li><strong>Local anaesthesia</strong>: use numbing cream and an appropriate amount of anaesthetic to reduce discomfort</li><li><strong>Combination injection</strong>: inject in a dotted pattern into the superficial skin with an ultra-fine needle (about 1.5–3 mm deep)</li></ol><h3>Results and duration</h3><ul><li>Within 2–3 days after injection, the skin is noticeably more hydrated and pores appear smaller</li><li>After 7–10 days, brightness and evenness of texture are significantly improved, and fine lines are better</li><li>Results may last about 3 to 6 months; a complete course requires 3 injections, once a month</li><li>Thereafter, a top-up once every 3–6 months</li></ul><h3>Side effects and precautions</h3><ul><li>Redness and swelling at the injection site (settling within a few hours to two days), bruising (settling within a few days)</li><li>Mild allergy (itching, redness), a swollen sensation (absorbed within a week)</li><li>For 2 weeks after treatment, avoid stimulating skincare (AHAs, alcohol, brightening ingredients), and maintain hydration and sun protection</li><li>Avoid vigorous exercise and massaging the injected area</li></ul>` },
  },
  {
    id: "25",
    slug: "25",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-25.jpg",
    image: "/images/knowledge-cover-25.jpg",
    title: { "zh-HK": `膠原蛋白誘發劑比較：少女針、童顏針、素顏針等`, "zh-CN": `胶原蛋白诱发剂比较：少女针、童颜针、素颜针等`, en: `Collagen Stimulators Compared: Ellansé, Sculptra, Derma Veil and More` },
    excerpt: { "zh-HK": `少女針、童顏針、素顏針等再生針劑原理相近但成分不同，了解各自特點才能選對。`, "zh-CN": `少女针、童颜针、素颜针等再生针剂原理相近但成分不同，了解各自特点才能选对。`, en: `Ellansé, Sculptra, Derma Veil and other regenerative injectables share a similar principle but differ in composition; understanding each product’s features is the way to choose correctly.` },
    body: { "zh-HK": `<p>膠原蛋白誘發劑透過特定成分（PCL、CaHA、PLLA、PDLLA 等）刺激肌膚生成新的膠原蛋白，改善膚質和提升緊緻度。不同品牌在成分、微粒設計及應用特點上各有不同。</p><h3>主要品牌詳細比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>產品</th><th>主要成分</th><th>立即填充</th><th>膠原增生</th><th>持久度</th></tr></thead><tbody><tr><td>Ellanse 少女針</td><td>PCL + CMC</td><td>高</td><td>高</td><td>1-4 年</td></tr><tr><td>Radiesse</td><td>CaHA + CMC</td><td>最高</td><td>高</td><td>12 個月+</td></tr><tr><td>Juvelook 素顏針</td><td>PDLLA + HA</td><td>低</td><td>高</td><td>12-18 個月</td></tr><tr><td>AestheFill 精靈針</td><td>PDLLA + CMC</td><td>高</td><td>高</td><td>18-24 個月</td></tr><tr><td>Sculptra 童顏針</td><td>PLLA</td><td>低</td><td>最高</td><td>24 個月</td></tr><tr><td>Derma Veil 童顏針</td><td>PLLA</td><td>低</td><td>高</td><td>24 個月</td></tr><tr><td>HArmonyCa 美神針</td><td>CaHA + HA</td><td>最高</td><td>高</td><td>18-24 個月</td></tr></tbody></table></div><h3>各品牌特點</h3><ul><li><strong>Ellanse 少女針</strong>：CMC 凝膠即時填充，PCL 微型晶球刺激第一型膠原再生，適合大面積填充</li><li><strong>Radiesse</strong>：CaHA 微晶球在纖維母細胞層建構地基，兼具即時及持久填充效果</li><li><strong>Juvelook 素顏針</strong>：配方輕型質地偏軟，不易形成腫塊，療程後無需按摩</li><li><strong>AestheFill 精靈針</strong>：新型態聚雙旋乳酸，適用於較薄皮膚位置</li><li><strong>Sculptra 童顏針</strong>：全球唯一獲美國 FDA 認可的 PLLA 醫美品牌，漸進式自然再生</li><li><strong>HArmonyCa 美神針</strong>：結合 CaHA 與透明質酸雙效優點，即時拉提並刺激膠原自生</li></ul><h3>如何選擇</h3><ul><li>追求即時填充塑形：Radiesse、HArmonyCa、Ellanse</li><li>追求漸進式自然膠原再生：Sculptra、Derma Veil、Juvelook</li><li>改善膚質、細紋、毛孔：Juvelook、Gouri、Derma Veil</li><li>適用較薄皮膚位置：AestheFill、Derma Veil</li></ul><h3>副作用與注意事項</h3><ul><li>常見副作用包括注射部位紅腫、瘀血或輕微疼痛，通常數天內消退</li><li>注射後建議避免劇烈運動、陽光直射及熱水澡</li><li>注射後幾天內可見初步效果，最佳效果在數週後逐漸顯現</li></ul>`, "zh-CN": `<p>胶原蛋白诱发剂透过特定成分（PCL、CaHA、PLLA、PDLLA 等）刺激肌肤生成新的胶原蛋白，改善肤质和提升紧致度。不同品牌在成分、微粒设计及应用特点上各有不同。</p><h3>主要品牌详细比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>产品</th><th>主要成分</th><th>立即填充</th><th>胶原增生</th><th>持久度</th></tr></thead><tbody><tr><td>Ellanse 少女针</td><td>PCL + CMC</td><td>高</td><td>高</td><td>1-4 年</td></tr><tr><td>Radiesse</td><td>CaHA + CMC</td><td>最高</td><td>高</td><td>12 个月+</td></tr><tr><td>Juvelook 素颜针</td><td>PDLLA + HA</td><td>低</td><td>高</td><td>12-18 个月</td></tr><tr><td>AestheFill 精灵针</td><td>PDLLA + CMC</td><td>高</td><td>高</td><td>18-24 个月</td></tr><tr><td>Sculptra 童颜针</td><td>PLLA</td><td>低</td><td>最高</td><td>24 个月</td></tr><tr><td>Derma Veil 童颜针</td><td>PLLA</td><td>低</td><td>高</td><td>24 个月</td></tr><tr><td>HArmonyCa 美神针</td><td>CaHA + HA</td><td>最高</td><td>高</td><td>18-24 个月</td></tr></tbody></table></div><h3>各品牌特点</h3><ul><li><strong>Ellanse 少女针</strong>：CMC 凝胶即时填充，PCL 微型晶球刺激第一型胶原再生，适合大面积填充</li><li><strong>Radiesse</strong>：CaHA 微晶球在纤维母细胞层建构地基，兼具即时及持久填充效果</li><li><strong>Juvelook 素颜针</strong>：配方轻型质地偏软，不易形成肿块，疗程后无需按摩</li><li><strong>AestheFill 精灵针</strong>：新型态聚双旋乳酸，适用于较薄皮肤位置</li><li><strong>Sculptra 童颜针</strong>：全球唯一获美国 FDA 认可的 PLLA 医美品牌，渐进式自然再生</li><li><strong>HArmonyCa 美神针</strong>：结合 CaHA 与透明质酸双效优点，即时拉提并刺激胶原自生</li></ul><h3>如何选择</h3><ul><li>追求即时填充塑形：Radiesse、HArmonyCa、Ellanse</li><li>追求渐进式自然胶原再生：Sculptra、Derma Veil、Juvelook</li><li>改善肤质、细纹、毛孔：Juvelook、Gouri、Derma Veil</li><li>适用较薄皮肤位置：AestheFill、Derma Veil</li></ul><h3>副作用与注意事项</h3><ul><li>常见副作用包括注射部位红肿、瘀血或轻微疼痛，通常数天内消退</li><li>注射后建议避免剧烈运动、阳光直射及热水澡</li><li>注射后几天内可见初步效果，最佳效果在数周后逐渐显现</li></ul>`, en: `<p>Collagen stimulators use specific ingredients (PCL, CaHA, PLLA, PDLLA and others) to stimulate the skin to produce new collagen, improving skin quality and increasing firmness. Different brands vary in composition, particle design and application features.</p><h3>Detailed comparison of major brands</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Product</th><th>Main ingredients</th><th>Immediate fill</th><th>Collagen stimulation</th><th>Duration</th></tr></thead><tbody><tr><td>Ellansé</td><td>PCL + CMC</td><td>High</td><td>High</td><td>1–4 years</td></tr><tr><td>Radiesse</td><td>CaHA + CMC</td><td>Highest</td><td>High</td><td>12 months+</td></tr><tr><td>Juvelook</td><td>PDLLA + HA</td><td>Low</td><td>High</td><td>12–18 months</td></tr><tr><td>AestheFill</td><td>PDLLA + CMC</td><td>High</td><td>High</td><td>18–24 months</td></tr><tr><td>Sculptra</td><td>PLLA</td><td>Low</td><td>Highest</td><td>24 months</td></tr><tr><td>Derma Veil</td><td>PLLA</td><td>Low</td><td>High</td><td>24 months</td></tr><tr><td>HArmonyCa</td><td>CaHA + HA</td><td>Highest</td><td>High</td><td>18–24 months</td></tr></tbody></table></div><h3>Features of each brand</h3><ul><li><strong>Ellansé</strong>: CMC gel provides immediate fill; PCL microspheres stimulate Type I collagen regeneration — suitable for large-area filling</li><li><strong>Radiesse</strong>: CaHA microspheres build a foundation at the fibroblast layer, combining immediate and lasting fill</li><li><strong>Juvelook</strong>: a lighter, softer formula, less likely to form lumps; no massage needed after treatment</li><li><strong>AestheFill</strong>: a newer form of poly-D,L-lactic acid, suitable for thinner-skinned areas</li><li><strong>Sculptra</strong>: the only PLLA medical aesthetic brand worldwide with US FDA recognition, for progressive, natural regeneration</li><li><strong>HArmonyCa</strong>: combines the dual advantages of CaHA and hyaluronic acid, lifting immediately while stimulating the skin’s own collagen</li></ul><h3>How to choose</h3><ul><li>Seeking immediate fill and contouring: Radiesse, HArmonyCa, Ellansé</li><li>Seeking progressive, natural collagen regeneration: Sculptra, Derma Veil, Juvelook</li><li>Improving skin quality, fine lines and pores: Juvelook, Gouri, Derma Veil</li><li>For thinner-skinned areas: AestheFill, Derma Veil</li></ul><h3>Side effects and precautions</h3><ul><li>Common side effects include redness, bruising or mild pain at the injection site, usually settling within a few days</li><li>After injection, it is advisable to avoid vigorous exercise, direct sunlight and hot baths</li><li>Initial results may be seen within a few days after injection; the best results appear gradually over several weeks</li></ul>` },
  },
  {
    id: "26",
    slug: "26",
    eyebrow: "Wellness",
    cover: "/images/knowledge-cover-26.jpg",
    image: "/images/knowledge-cover-26.jpg",
    title: { "zh-HK": `消脂針比較：Belkyra 與其他溶脂針的原理與效果`, "zh-CN": `消脂针比较：Belkyra 与其他溶脂针的原理与效果`, en: `Fat-Dissolving Injections Compared: Principles and Results of Belkyra and Other Lipolytic Injectables` },
    excerpt: { "zh-HK": `消脂針屬非手術減脂選擇，可改善局部脂肪堆積。了解不同產品的原理與副作用才能選對。`, "zh-CN": `消脂针属非手术减脂选择，可改善局部脂肪堆积。了解不同产品的原理与副作用才能选对。`, en: `Fat-dissolving injections are a non-surgical option for improving local fat deposits. Understanding the principle and side effects of different products is the way to choose correctly.` },
    body: { "zh-HK": `<p>消脂針／溶脂針屬有效的非手術性減脂選擇，可改善局部脂肪堆積。常見產品包括 Belkyra（Kybella）與 Cellucare 等，原理各有不同，適用對象亦有所差異。</p><h3>Belkyra 溶脂針</h3><p>美國 Allergan 藥廠出品，獲美國 FDA 及歐盟 EMA 認證。專利成分去氧膽酸（DCA）破壞脂肪細胞膜，導致不可逆轉的脂肪細胞分解，永久減少雙下巴脂肪細胞數目。</p><ul><li>採用手針點狀注射，每點 0.2cc、間隔 1cm</li><li>需 2-3 次療程，每次相隔 1 個月</li><li>治療時間約 10-20 分鐘</li><li>最佳療效約在療程後 2 個月，臨床追蹤效果最久可持續 5 年</li></ul><h3>Cellucare 消脂針</h3><p>法國 REVITACARE 出品，獲 CE 認證。成分為透明質酸、咖啡因、微分子營養素。咖啡因加速脂肪細胞代謝，分解三酸甘油脂，配合透明質酸讓其排走更暢順，使脂肪細胞體積縮小。</p><ul><li>適用於包包面、雙下巴、手臂、背部、腹部、腰部、臀部、大腿等</li><li>需 4-8 次療程，每次相隔 8-10 天</li><li>治療時間約 5-10 分鐘</li><li>最佳療效約療程後 2-3 星期，效果持續約 2 年</li></ul><h3>兩者比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>項目</th><th>Belkyra</th><th>Cellucare</th></tr></thead><tbody><tr><td>產地</td><td>美國</td><td>法國</td></tr><tr><td>認證</td><td>FDA + EMA</td><td>CE</td></tr><tr><td>成分</td><td>去氧膽酸（DCA）</td><td>透明質酸 + 咖啡因 + 營養素</td></tr><tr><td>主治</td><td>雙下巴</td><td>全身多部位</td></tr><tr><td>次數</td><td>2-3 次</td><td>4-8 次</td></tr><tr><td>效果持續</td><td>最長約 5 年</td><td>約 2 年</td></tr><tr><td>消脂機制</td><td>破壞脂肪細胞（不可逆）</td><td>縮小脂肪細胞體積</td></tr></tbody></table></div><h3>恢復期與副作用</h3><ul><li>Belkyra：注射後 24-48 小時腫脹達高峰，下巴腫脹平均 7-14 天漸消腫，超過 8 成不良反應可在 30 天內恢復</li><li>Cellucare：些微紅腫，約數小時至數天消退；即日不建議飲咖啡或其他含咖啡因的食品</li><li>多數患者治療後可立即恢復日常活動</li></ul><h3>禁忌症</h3><ul><li>對藥劑成分過敏者、有出血或凝血功能障礙者不適合</li><li>皮膚過度鬆弛且頸部直紋明顯者效果有限</li><li>懷孕、哺乳中婦女不適合</li><li>曾有笑容不對稱、臉部肌肉無力或麻痺、吞嚥困難情形者需謹慎</li></ul><p>脂肪細胞一旦被破壞效果通常持久，但仍需配合健康生活方式維持。</p>`, "zh-CN": `<p>消脂针／溶脂针属有效的非手术性减脂选择，可改善局部脂肪堆积。常见产品包括 Belkyra（Kybella）与 Cellucare 等，原理各有不同，适用对象亦有所差异。</p><h3>Belkyra 溶脂针</h3><p>美国 Allergan 药厂出品，获美国 FDA 及欧盟 EMA 认证。专利成分去氧胆酸（DCA）破坏脂肪细胞膜，导致不可逆转的脂肪细胞分解，永久减少双下巴脂肪细胞数目。</p><ul><li>采用手针点状注射，每点 0.2cc、间隔 1cm</li><li>需 2-3 次疗程，每次相隔 1 个月</li><li>治疗时间约 10-20 分钟</li><li>最佳疗效约在疗程后 2 个月，临床追踪效果最久可持续 5 年</li></ul><h3>Cellucare 消脂针</h3><p>法国 REVITACARE 出品，获 CE 认证。成分为透明质酸、咖啡因、微分子营养素。咖啡因加速脂肪细胞代谢，分解三酸甘油脂，配合透明质酸让其排走更畅顺，使脂肪细胞体积缩小。</p><ul><li>适用于包包面、双下巴、手臂、背部、腹部、腰部、臀部、大腿等</li><li>需 4-8 次疗程，每次相隔 8-10 天</li><li>治疗时间约 5-10 分钟</li><li>最佳疗效约疗程后 2-3 星期，效果持续约 2 年</li></ul><h3>两者比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>项目</th><th>Belkyra</th><th>Cellucare</th></tr></thead><tbody><tr><td>产地</td><td>美国</td><td>法国</td></tr><tr><td>认证</td><td>FDA + EMA</td><td>CE</td></tr><tr><td>成分</td><td>去氧胆酸（DCA）</td><td>透明质酸 + 咖啡因 + 营养素</td></tr><tr><td>主治</td><td>双下巴</td><td>全身多部位</td></tr><tr><td>次数</td><td>2-3 次</td><td>4-8 次</td></tr><tr><td>效果持续</td><td>最长约 5 年</td><td>约 2 年</td></tr><tr><td>消脂机制</td><td>破坏脂肪细胞（不可逆）</td><td>缩小脂肪细胞体积</td></tr></tbody></table></div><h3>恢复期与副作用</h3><ul><li>Belkyra：注射后 24-48 小时肿胀达高峰，下巴肿胀平均 7-14 天渐消肿，超过 8 成不良反应可在 30 天内恢复</li><li>Cellucare：些微红肿，约数小时至数天消退；即日不建议饮咖啡或其他含咖啡因的食品</li><li>多数患者治疗后可立即恢复日常活动</li></ul><h3>禁忌症</h3><ul><li>对药剂成分过敏者、有出血或凝血功能障碍者不适合</li><li>皮肤过度松弛且颈部直纹明显者效果有限</li><li>怀孕、哺乳中妇女不适合</li><li>曾有笑容不对称、脸部肌肉无力或麻痺、吞咽困难情形者需谨慎</li></ul><p>脂肪细胞一旦被破坏效果通常持久，但仍需配合健康生活方式维持。</p>`, en: `<p>Fat-dissolving / lipolytic injectables are an effective non-surgical fat-reduction option for improving local fat deposits. Common products include Belkyra (Kybella) and Cellucare, among others. Their principles differ, as do the people they are suitable for.</p><h3>Belkyra</h3><p>Produced by Allergan in the USA, it is certified by the US FDA and EU EMA. The patented ingredient deoxycholic acid (DCA) disrupts the fat-cell membrane, leading to irreversible fat-cell breakdown and permanently reducing the number of fat cells in a double chin.</p><ul><li>Administered by hand as dotted injections, 0.2 cc per point, 1 cm apart</li><li>2–3 sessions are needed, 1 month apart</li><li>Treatment time is about 10–20 minutes</li><li>Best results appear about 2 months after the course; clinically followed results have lasted up to 5 years</li></ul><h3>Cellucare</h3><p>Produced by REVITACARE in France, CE-certified. Ingredients are hyaluronic acid, caffeine and micromolecular nutrients. Caffeine accelerates fat-cell metabolism, breaking down triglycerides; combined with hyaluronic acid, clearance is smoother, so fat-cell volume is reduced.</p><ul><li>Suitable for chubby cheeks, double chin, arms, back, abdomen, waist, buttocks, thighs and others</li><li>4–8 sessions are needed, 8–10 days apart</li><li>Treatment time is about 5–10 minutes</li><li>Best results appear about 2–3 weeks after the course, lasting about 2 years</li></ul><h3>Comparison of the two</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Item</th><th>Belkyra</th><th>Cellucare</th></tr></thead><tbody><tr><td>Origin</td><td>USA</td><td>France</td></tr><tr><td>Certification</td><td>FDA + EMA</td><td>CE</td></tr><tr><td>Ingredients</td><td>Deoxycholic acid (DCA)</td><td>Hyaluronic acid + caffeine + nutrients</td></tr><tr><td>Main indication</td><td>Double chin</td><td>Multiple body areas</td></tr><tr><td>Number of sessions</td><td>2–3</td><td>4–8</td></tr><tr><td>Duration of results</td><td>Up to about 5 years</td><td>About 2 years</td></tr><tr><td>Fat-reduction mechanism</td><td>Destroys fat cells (irreversible)</td><td>Reduces fat-cell volume</td></tr></tbody></table></div><h3>Downtime and side effects</h3><ul><li>Belkyra: swelling peaks 24–48 hours after injection; chin swelling gradually settles over an average of 7–14 days; more than 80% of adverse reactions recover within 30 days</li><li>Cellucare: slight redness and swelling, settling in a few hours to a few days; coffee and other caffeine-containing foods are not recommended on the day</li><li>Most patients can resume daily activities immediately after treatment</li></ul><h3>Contraindications</h3><ul><li>Those allergic to the product ingredients, or with bleeding or coagulation disorders, are not suitable</li><li>Those with excessive skin laxity and obvious vertical neck lines have limited results</li><li>Pregnant and breastfeeding women are not suitable</li><li>Those with a history of asymmetric smile, facial muscle weakness or paralysis, or swallowing difficulty should proceed with caution</li></ul><p>Once fat cells are destroyed, results are usually lasting, but a healthy lifestyle is still needed to maintain them.</p>` },
  },
  {
    id: "27",
    slug: "27",
    eyebrow: "Skin Care",
    cover: "/images/knowledge-cover-27.jpg",
    image: "/images/knowledge-cover-27.jpg",
    title: { "zh-HK": `敏感肌修護方案：從成因到溫和護理`, "zh-CN": `敏感肌修护方案：从成因到温和护理`, en: `Sensitive-Skin Repair: From Causes to Gentle Care` },
    excerpt: { "zh-HK": `敏感肌容易因環境變化而泛紅、乾燥及發炎。了解成因與溫和修護方式，才能穩定膚況。`, "zh-CN": `敏感肌容易因环境变化而泛红、干燥及发炎。了解成因与温和修护方式，才能稳定肤况。`, en: `Sensitive skin readily develops redness, dryness and inflammation with environmental change. Understanding the causes and gentle repair methods helps stabilise the skin.` },
    body: { "zh-HK": `<p>敏感肌膚容易因環境變化而產生泛紅、乾燥及發炎問題，成因包括換季、環境壓力、長時間待在冷氣房或空氣污染環境、熬夜及壓力大等，導致肌膚屏障受損、膚色暗沉。</p><h3>敏感肌修護方向</h3><ul><li>舒緩泛紅、強化皮膚屏障、減少炎症</li><li>深層保濕與抗氧化，對抗自由基</li><li>對抗糖化反應導致的細紋、暗沉</li><li>提升膚色均勻度，恢復透亮光澤</li></ul><h3>療程五步驟</h3><ol><li><strong>深層潔膚</strong>：溫和潔面，去除油脂污垢</li><li><strong>精華導入</strong>：以專業導入儀將舒緩精華滲透至深層</li><li><strong>抗氧化護理</strong>：抵禦自由基傷害</li><li><strong>修復霜按摩吸收</strong>：促進養分吸收，提升鎖水能力</li><li><strong>高效修護面膜</strong>：鎮靜肌膚，讓效果更持久</li></ol><h3>療程後護理建議</h3><ul><li>持續保濕：使用無酒精、無刺激性高保濕產品</li><li>避免刺激性成分：療程後 3 天內避免使用酸類、美白或去角質產品</li><li>注意防曬：外出使用 SPF50+ 防曬產品</li><li>減少化妝：療程後 24 小時內盡量避免粉底與彩妝</li></ul><h3>適合人群</h3><p>敏感肌、乾燥肌、易泛紅肌膚（如玫瑰痤瘡）、換季或熬夜導致皮膚不穩定者，以及希望避免高能量醫美療程者均適合。屬溫和非侵入式護理，無需恢復期，做完即可恢復日常活動，多數顧客第一次療程後即可感受到明顯退紅、保濕與膚質改善。</p>`, "zh-CN": `<p>敏感肌肤容易因环境变化而产生泛红、干燥及发炎问题，成因包括换季、环境压力、长时间待在冷气房或空气污染环境、熬夜及压力大等，导致肌肤屏障受损、肤色暗沉。</p><h3>敏感肌修护方向</h3><ul><li>舒缓泛红、强化皮肤屏障、减少炎症</li><li>深层保湿与抗氧化，对抗自由基</li><li>对抗糖化反应导致的细纹、暗沉</li><li>提升肤色均匀度，恢复透亮光泽</li></ul><h3>疗程五步骤</h3><ol><li><strong>深层洁肤</strong>：温和洁面，去除油脂污垢</li><li><strong>精华导入</strong>：以专业导入仪将舒缓精华渗透至深层</li><li><strong>抗氧化护理</strong>：抵御自由基伤害</li><li><strong>修复霜按摩吸收</strong>：促进养分吸收，提升锁水能力</li><li><strong>高效修护面膜</strong>：镇静肌肤，让效果更持久</li></ol><h3>疗程后护理建议</h3><ul><li>持续保湿：使用无酒精、无刺激性高保湿产品</li><li>避免刺激性成分：疗程后 3 天内避免使用酸类、美白或去角质产品</li><li>注意防晒：外出使用 SPF50+ 防晒产品</li><li>减少化妆：疗程后 24 小时内尽量避免粉底与彩妆</li></ul><h3>适合人群</h3><p>敏感肌、干燥肌、易泛红肌肤（如玫瑰痤疮）、换季或熬夜导致皮肤不稳定者，以及希望避免高能量医美疗程者均适合。属温和非侵入式护理，无需恢复期，做完即可恢复日常活动，多数顾客第一次疗程后即可感受到明显退红、保湿与肤质改善。</p>`, en: `<p>Sensitive skin readily develops redness, dryness and inflammation with environmental change. Causes include seasonal change, environmental stress, long hours in air-conditioned rooms or polluted air, late nights and high stress, leading to a damaged skin barrier and a dull complexion.</p><h3>Directions for repairing sensitive skin</h3><ul><li>Soothe redness, strengthen the skin barrier and reduce inflammation</li><li>Deep hydration and antioxidation, fighting free radicals</li><li>Counteract fine lines and dullness caused by glycation</li><li>Improve evenness of complexion and restore a translucent glow</li></ul><h3>Five treatment steps</h3><ol><li><strong>Deep cleanse</strong>: gentle cleansing to remove oil and dirt</li><li><strong>Essence infusion</strong>: a professional infusion device delivers soothing essence into the deeper layers</li><li><strong>Antioxidant care</strong>: defends against free-radical damage</li><li><strong>Repair-cream massage for absorption</strong>: promotes nutrient absorption and improves the ability to lock in moisture</li><li><strong>High-performance repair mask</strong>: calms the skin so that results last longer</li></ol><h3>Aftercare recommendations</h3><ul><li>Keep hydrating: use alcohol-free, non-irritating, highly hydrating products</li><li>Avoid stimulating ingredients: avoid acids, brighteners or exfoliants for 3 days after treatment</li><li>Mind sun protection: use SPF50+ sunscreen when outdoors</li><li>Reduce make-up: try to avoid foundation and colour cosmetics for 24 hours after treatment</li></ul><h3>Who it is for</h3><p>Suitable for sensitive, dry and easily flushed skin (such as rosacea), those with unstable skin from seasonal change or late nights, and those who wish to avoid high-energy medical aesthetic treatments. It is a gentle, non-invasive treatment with no downtime; daily activities can resume immediately afterwards. Most clients already notice clear reduction in redness, improved hydration and better texture after the first session.</p>` },
  },
  {
    id: "28",
    slug: "28",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-28.jpg",
    image: "/images/knowledge-cover-28.jpg",
    title: { "zh-HK": `透明質酸溶解酶：填充效果的「逆轉」方法`, "zh-CN": `透明质酸溶解酶：填充效果的「逆转」方法`, en: `Hyaluronidase: A Way to “Reverse” Hyaluronic Acid Filler Results` },
    excerpt: { "zh-HK": `透明質酸溶解酶能精準水解透明質酸，用於修正填充過量、結節或血管栓塞等問題。`, "zh-CN": `透明质酸溶解酶能精准水解透明质酸，用于修正填充过量、结节或血管栓塞等问题。`, en: `Hyaluronidase can precisely hydrolyse hyaluronic acid, and is used to correct overfilling, nodules or vascular occlusion.` },
    body: { "zh-HK": `<p>透明質酸溶解酶的主要活性成分為透明質酸酶，屬於生物酵素，能專一性地水解透明質酸中的糖苷鍵，將其分解成低分子量寡糖，再由人體自然代謝清除。它像一把精準的「生物鑰匙」，專門分解透明質酸。</p><h3>臨床應用範圍</h3><ul><li><strong>修正不良填充效果</strong>：處理過度填充、形態不理想或出現結節等情況</li><li><strong>處理血管栓塞併發症</strong>：透明質酸誤注入血管時，緊急注射溶解酶可迅速分解堵塞物、恢復血流</li><li><strong>加速代謝</strong>：想快速回歸初始狀態時逆轉填充效果</li></ul><h3>專一性限制</h3><p>溶解酶可溶解透明質酸類填充劑（Juvéderm、Restylane、Teosyal、Belotero 等），無論其交聯度高低均能被分解。但無法溶解聚左旋乳酸（Sculptra）、羥基磷灰石鈣（Radiesse）、聚己內酯（Ellansé）、矽膠等非透明質酸類產品。</p><h3>重要提醒</h3><p>部分聲稱能解決「饅化面」的針劑，實質可能是消脂針。消脂針的目標是溶解脂肪細胞，絕不能用於解決透明質酸填充問題。若饅化由過量透明質酸導致，應使用溶解酶；若成因是脂肪或其他材料，則需完全不同方案。錯誤使用消脂針處理透明質酸問題，不僅無效，更可能導致皮膚組織受損、凹陷等嚴重後果，必須由醫生準確診斷後對症下藥。</p><h3>關於「部分溶解」</h3><p>醫生可透過精準控制劑量、濃度與層次實現「部分溶解」，如用少量低濃度溶解酶做點狀注射，過程中讓客戶坐起多次觀察對比，達到「修飾」而非「完全清除」的效果。</p><h3>副作用與影響</h3><ul><li>溶解酶會分解自身透明質酸，但人體具再生能力，真皮層纖維母細胞持續合成，注射後 24-72 小時便啟動修復，皮膚基質結構會於數週內逐步恢復</li><li>常見短期反應：紅斑、腫脹、疼痛或瘀青，數日內消退</li><li>暫時性皮膚乾燥：因自身透明質酸短暫減少，療程後建議加強保濕</li></ul><h3>不適合注射人群</h3><ul><li>對透明質酸酶或成分有過敏史者</li><li>注射部位有活動性感染或炎症者</li><li>孕婦及哺乳期婦女</li></ul><p>透明質酸溶解酶為填充療程提供可逆性與安全性保障。此操作屬醫療行為，必須由專業醫生操作。</p>`, "zh-CN": `<p>透明质酸溶解酶的主要活性成分为透明质酸酶，属于生物酵素，能专一性地水解透明质酸中的糖苷键，将其分解成低分子量寡糖，再由人体自然代谢清除。它像一把精准的「生物钥匙」，专门分解透明质酸。</p><h3>临床应用范围</h3><ul><li><strong>修正不良填充效果</strong>：处理过度填充、形态不理想或出现结节等情况</li><li><strong>处理血管栓塞并发症</strong>：透明质酸误注入血管时，紧急注射溶解酶可迅速分解堵塞物、恢复血流</li><li><strong>加速代谢</strong>：想快速回归初始状态时逆转填充效果</li></ul><h3>专一性限制</h3><p>溶解酶可溶解透明质酸类填充剂（Juvéderm、Restylane、Teosyal、Belotero 等），无论其交联度高低均能被分解。但无法溶解聚左旋乳酸（Sculptra）、羟基磷灰石钙（Radiesse）、聚己内酯（Ellansé）、矽胶等非透明质酸类产品。</p><h3>重要提醒</h3><p>部分声称能解决「馒化面」的针剂，实质可能是消脂针。消脂针的目标是溶解脂肪细胞，绝不能用于解决透明质酸填充问题。若馒化由过量透明质酸导致，应使用溶解酶；若成因是脂肪或其他材料，则需完全不同方案。错误使用消脂针处理透明质酸问题，不仅无效，更可能导致皮肤组织受损、凹陷等严重后果，必须由医生准确诊断后对症下药。</p><h3>关于「部分溶解」</h3><p>医生可透过精准控制剂量、浓度与层次实现「部分溶解」，如用少量低浓度溶解酶做点状注射，过程中让客户坐起多次观察对比，达到「修饰」而非「完全清除」的效果。</p><h3>副作用与影响</h3><ul><li>溶解酶会分解自身透明质酸，但人体具再生能力，真皮层纤维母细胞持续合成，注射后 24-72 小时便启动修复，皮肤基质结构会于数周内逐步恢复</li><li>常见短期反应：红斑、肿胀、疼痛或瘀青，数日内消退</li><li>暂时性皮肤干燥：因自身透明质酸短暂减少，疗程后建议加强保湿</li></ul><h3>不适合注射人群</h3><ul><li>对透明质酸酶或成分有过敏史者</li><li>注射部位有活动性感染或炎症者</li><li>孕妇及哺乳期妇女</li></ul><p>透明质酸溶解酶为填充疗程提供可逆性与安全性保障。此操作属医疗行为，必须由专业医生操作。</p>`, en: `<p>The main active ingredient of hyaluronidase is hyaluronidase, a biological enzyme that specifically hydrolyses the glycosidic bonds in hyaluronic acid, breaking it down into low-molecular-weight oligosaccharides that are then cleared by the body’s natural metabolism. It is like a precise “biological key”, dedicated to breaking down hyaluronic acid.</p><h3>Clinical applications</h3><ul><li><strong>Correcting unsatisfactory filler results</strong>: addressing overfilling, an unsatisfactory shape, or nodules</li><li><strong>Managing vascular occlusion complications</strong>: when hyaluronic acid is inadvertently injected into a vessel, emergency injection of hyaluronidase can rapidly break down the blockage and restore blood flow</li><li><strong>Accelerating metabolism</strong>: reversing filler results when a rapid return to the original state is wanted</li></ul><h3>Specificity limitations</h3><p>Hyaluronidase can dissolve hyaluronic acid fillers (Juvéderm, Restylane, Teosyal, Belotero and others), regardless of the degree of cross-linking. It cannot, however, dissolve non-hyaluronic acid products such as poly-L-lactic acid (Sculptra), calcium hydroxylapatite (Radiesse), polycaprolactone (Ellansé) or silicone.</p><h3>Important reminder</h3><p>Some injectables claimed to solve a “pillow face” may in fact be fat-dissolving injections. Fat-dissolving injections target fat cells and must never be used to solve a hyaluronic acid filler problem. If the pillow face is caused by excess hyaluronic acid, hyaluronidase should be used; if the cause is fat or another material, a completely different plan is needed. Using fat-dissolving injections wrongly for a hyaluronic acid problem is not only ineffective, but may lead to tissue damage, hollows and other serious consequences. A doctor must diagnose accurately and treat the actual cause.</p><h3>On “partial dissolving”</h3><p>Doctors can achieve “partial dissolving” by precisely controlling dose, concentration and layer — for example, using a small amount of low-concentration hyaluronidase as dotted injections, having the client sit up several times during the process to observe and compare, aiming to “refine” rather than “completely remove”.</p><h3>Side effects and impact</h3><ul><li>Hyaluronidase will also break down the body’s own hyaluronic acid, but the body has regenerative capacity. Dermal fibroblasts continue to synthesise it; repair starts 24–72 hours after injection, and the dermal matrix structure gradually recovers over several weeks</li><li>Common short-term reactions: erythema, swelling, pain or bruising, settling within a few days</li><li>Temporary skin dryness: because the body’s own hyaluronic acid is briefly reduced, extra hydration is recommended after treatment</li></ul><h3>Who should not have the injection</h3><ul><li>Those with a history of allergy to hyaluronidase or its ingredients</li><li>Those with active infection or inflammation at the injection site</li><li>Pregnant and breastfeeding women</li></ul><p>Hyaluronidase provides reversibility and a safety net for filler treatments. This procedure is a medical act and must be performed by a qualified doctor.</p>` },
  },
  {
    id: "29",
    slug: "29",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-29.jpg",
    image: "/images/knowledge-cover-29.jpg",
    title: { "zh-HK": `嘴唇填充全攻略：審美標準、面形配對與風險`, "zh-CN": `嘴唇填充全攻略：审美标准、面形配对与风险`, en: `Lip Filler Complete Guide: Aesthetic Standards, Face-Shape Matching and Risks` },
    excerpt: { "zh-HK": `嘴唇填充可以瞬間提升魅力，但成功關鍵在於美感、醫生經驗與合適的產品三者兼備。`, "zh-CN": `嘴唇填充可以瞬间提升魅力，但成功关键在于美感、医生经验与合适的产品三者兼备。`, en: `Lip filler can instantly increase attractiveness, but success depends on aesthetic sense, the doctor’s experience and a product that suits you — all three together.` },
    body: { "zh-HK": `<p>嘴唇填充可以改善唇形比例、增加豐盈感，但成功的關鍵是美感、醫生經驗及適合你的產品三者兼備。</p><h3>美唇審美標準</h3><ul><li><strong>唇珠與唇弓清晰</strong>：上唇中間的「M字唇弓」需有明顯輪廓，唇珠微微突出</li><li><strong>黃金比例上下唇</strong>：理想比例約上唇：下唇 1：1.6，亞洲人輪廓較細，可調整到 1：1.2 至 1：1.5，更自然親切</li><li><strong>人中脊與唇谷結構</strong>：從鼻底至唇峰間的人中脊構成三維感</li><li><strong>微微上揚的嘴角</strong>：營造自然親和的好感</li></ul><p>唇型的美麗應與整張臉和諧共處——眼睛、鼻子及面部輪廓共同塑造獨特的個人風采。</p><h3>各地區審美偏好</h3><ul><li><strong>歐美風格</strong>：敢於誇張與豐滿，強調性感厚唇</li><li><strong>韓式風格</strong>：自然水潤的飽滿感，微微上翹的嘴角</li><li><strong>日式風格</strong>：追求可愛與無辜感，小巧圓潤的唇珠</li><li><strong>港台風格</strong>：融合日韓精緻自然，偏好線條清晰的 M 唇</li></ul><h3>臉型與唇形配對</h3><ul><li>圓臉：適合明顯的 M 字唇峰，拉長臉型比例</li><li>方臉：圓潤豐滿的唇形柔化骨感輪廓</li><li>長臉：適合橫向擴展的豐唇設計，視覺縮短臉長</li><li>心形臉：幾乎所有唇型都適合，特別是細緻的 M 唇</li></ul><h3>填充產品比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>產品</th><th>特色</th><th>適合用途</th></tr></thead><tbody><tr><td>Juvederm Volbella</td><td>質地柔軟</td><td>自然線條、細膩塑形</td></tr><tr><td>Restylane Kysse</td><td>動態彈性好</td><td>動態嘴唇，打造「接吻唇」</td></tr><tr><td>Teosyal Kiss</td><td>柔軟且擴散度低</td><td>精細塑形，減少腫脹</td></tr><tr><td>Belotero Balance</td><td>中度凝膠，兼具柔韌性和支撐力</td><td>唇部及面部多部位填充</td></tr></tbody></table></div><h3>風險與失敗案例</h3><ul><li><strong>常見短期副作用</strong>：腫脹、瘀青、輕微刺痛與泛紅，通常數天內消退</li><li><strong>中期風險</strong>：不對稱、結節或過敏反應</li><li><strong>嚴重但罕見</strong>：血管栓塞會引起組織壞死甚至失明——必須選合資格及有經驗的醫生</li></ul><p>典型失敗案例包括：孖潤腸嘴（劑量過多）、巫婆嘴（只強調唇線）、歪嘴（注射不平衡）、硬塊與凹凸不平（注射技術問題）。</p><h3>上下唇是否要一起打</h3><p>不一定，重點是平衡與改善：只打上唇適合上唇明顯偏薄者；只打下唇適合下唇較薄者；上下唇同時打可調整整體比例，達致黃金比例的飽滿感。醫生會根據唇形、面形和需求度身設計方案。</p><p>嘴唇填充可以瞬間提高魅力，但切勿因貪平而選擇無資格醫生。</p>`, "zh-CN": `<p>嘴唇填充可以改善唇形比例、增加丰盈感，但成功的关键是美感、医生经验及适合你的产品三者兼备。</p><h3>美唇审美标准</h3><ul><li><strong>唇珠与唇弓清晰</strong>：上唇中间的「M字唇弓」需有明显轮廓，唇珠微微突出</li><li><strong>黄金比例上下唇</strong>：理想比例约上唇：下唇 1：1.6，亚洲人轮廓较细，可调整到 1：1.2 至 1：1.5，更自然亲切</li><li><strong>人中脊与唇谷结构</strong>：从鼻底至唇峰间的人中脊构成三维感</li><li><strong>微微上扬的嘴角</strong>：营造自然亲和的好感</li></ul><p>唇型的美丽应与整张脸和谐共处——眼睛、鼻子及面部轮廓共同塑造独特的个人风采。</p><h3>各地区审美偏好</h3><ul><li><strong>欧美风格</strong>：敢于夸张与丰满，强调性感厚唇</li><li><strong>韩式风格</strong>：自然水润的饱满感，微微上翘的嘴角</li><li><strong>日式风格</strong>：追求可爱与无辜感，小巧圆润的唇珠</li><li><strong>港台风格</strong>：融合日韩精致自然，偏好线条清晰的 M 唇</li></ul><h3>脸型与唇形配对</h3><ul><li>圆脸：适合明显的 M 字唇峰，拉长脸型比例</li><li>方脸：圆润丰满的唇形柔化骨感轮廓</li><li>长脸：适合横向扩展的丰唇设计，视觉缩短脸长</li><li>心形脸：几乎所有唇型都适合，特别是细致的 M 唇</li></ul><h3>填充产品比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>产品</th><th>特色</th><th>适合用途</th></tr></thead><tbody><tr><td>Juvederm Volbella</td><td>质地柔软</td><td>自然线条、细腻塑形</td></tr><tr><td>Restylane Kysse</td><td>动态弹性好</td><td>动态嘴唇，打造「接吻唇」</td></tr><tr><td>Teosyal Kiss</td><td>柔软且扩散度低</td><td>精细塑形，减少肿胀</td></tr><tr><td>Belotero Balance</td><td>中度凝胶，兼具柔韧性和支撑力</td><td>唇部及面部多部位填充</td></tr></tbody></table></div><h3>风险与失败案例</h3><ul><li><strong>常见短期副作用</strong>：肿胀、瘀青、轻微刺痛与泛红，通常数天内消退</li><li><strong>中期风险</strong>：不对称、结节或过敏反应</li><li><strong>严重但罕见</strong>：血管栓塞会引起组织坏死甚至失明——必须选合资格及有经验的医生</li></ul><p>典型失败案例包括：孖润肠嘴（剂量过多）、巫婆嘴（只强调唇线）、歪嘴（注射不平衡）、硬块与凹凸不平（注射技术问题）。</p><h3>上下唇是否要一起打</h3><p>不一定，重点是平衡与改善：只打上唇适合上唇明显偏薄者；只打下唇适合下唇较薄者；上下唇同时打可调整整体比例，达致黄金比例的饱满感。医生会根据唇形、面形和需求度身设计方案。</p><p>嘴唇填充可以瞬间提高魅力，但切勿因贪平而选择无资格医生。</p>`, en: `<p>Lip filler can improve lip proportions and add fullness, but the key to success is a combination of aesthetic sense, the doctor’s experience, and a product that suits you.</p><h3>Aesthetic standards for beautiful lips</h3><ul><li><strong>A defined tubercle and Cupid’s bow</strong>: the “M-shaped” Cupid’s bow in the centre of the upper lip should have a clear outline, with the tubercle slightly prominent</li><li><strong>Golden-ratio upper and lower lips</strong>: the ideal ratio is about upper : lower = 1 : 1.6. Asian facial contours are finer, and 1 : 1.2 to 1 : 1.5 can look more natural and approachable</li><li><strong>Philtral ridges and the lip valley</strong>: the philtral ridges from the base of the nose to the lip peaks create a three-dimensional quality</li><li><strong>Slightly upturned mouth corners</strong>: creating a naturally warm, likeable impression</li></ul><p>Beautiful lips should sit in harmony with the whole face — the eyes, nose and facial contour together shape a unique personal presence.</p><h3>Regional aesthetic preferences</h3><ul><li><strong>Western style</strong>: bolder exaggeration and fullness, emphasising sexy, full lips</li><li><strong>Korean style</strong>: naturally hydrated fullness, with slightly upturned corners</li><li><strong>Japanese style</strong>: seeking a cute, innocent look, with a small, rounded tubercle</li><li><strong>Hong Kong / Taiwan style</strong>: blending Japanese and Korean refined naturalness, preferring a clearly lined M-lip</li></ul><h3>Matching face shape to lip shape</h3><ul><li>Round face: a distinct M-shaped lip peak suits, lengthening facial proportions</li><li>Square face: a rounded, full lip shape softens a bony contour</li><li>Long face: a horizontally expanded fuller-lip design suits, visually shortening face length</li><li>Heart-shaped face: almost all lip shapes suit, especially a refined M-lip</li></ul><h3>Comparison of filler products</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Product</th><th>Features</th><th>Suitable use</th></tr></thead><tbody><tr><td>Juvéderm Volbella</td><td>Soft texture</td><td>Natural lines, delicate shaping</td></tr><tr><td>Restylane Kysse</td><td>Good dynamic elasticity</td><td>Dynamic lips, creating a “kissable lip”</td></tr><tr><td>Teosyal Kiss</td><td>Soft with low spread</td><td>Fine shaping, reducing swelling</td></tr><tr><td>Belotero Balance</td><td>Medium gel, combining flexibility and support</td><td>Lip and multi-area facial filling</td></tr></tbody></table></div><h3>Risks and unsuccessful cases</h3><ul><li><strong>Common short-term side effects</strong>: swelling, bruising, mild stinging and redness, usually settling within a few days</li><li><strong>Medium-term risks</strong>: asymmetry, nodules or allergic reaction</li><li><strong>Serious but rare</strong>: vascular occlusion can cause tissue necrosis or even blindness — a qualified, experienced doctor must be chosen</li></ul><p>Typical unsuccessful cases include: sausage lips (too much product), witch’s lips (emphasising only the lip line), a crooked mouth (unbalanced injection), and lumps and an uneven surface (technique issues).</p><h3>Do the upper and lower lips need to be treated together?</h3><p>Not necessarily; the focus is balance and improvement. Treating only the upper lip suits those whose upper lip is clearly thinner; treating only the lower lip suits those whose lower lip is thinner; treating both can adjust overall proportion and achieve golden-ratio fullness. The doctor will design a plan according to lip shape, face shape and needs.</p><p>Lip filler can instantly increase attractiveness, but never choose an unqualified doctor for the sake of a lower price.</p>` },
  },
  {
    id: "30",
    slug: "30",
    eyebrow: "Signature",
    cover: "/images/knowledge-cover-30.jpg",
    image: "/images/knowledge-cover-30.jpg",
    title: { "zh-HK": `Clear & Brilliant 分段式激光：修復期最短的嫩膚選擇`, "zh-CN": `Clear & Brilliant 分段式激光：修复期最短的嫩肤选择`, en: `Clear & Brilliant Fractional Laser: The Shortest-Downtime Option for Skin Renewal` },
    excerpt: { "zh-HK": `Clear & Brilliant 是 Fraxel 的改良升級版，保留效果同時大幅降低不適與修復期，特別適合亞洲肌膚。`, "zh-CN": `Clear & Brilliant 是 Fraxel 的改良升级版，保留效果同时大幅降低不适与修复期，特别适合亚洲肌肤。`, en: `Clear & Brilliant is an improved, upgraded version of Fraxel laser, retaining results while substantially reducing discomfort and downtime, and is especially suited to Asian skin.` },
    body: { "zh-HK": `<p>Clear & Brilliant（C&B）由美國 Solta Medical 推出，是 Fraxel 激光的改良升級版，保留效果同時大幅降低不適與修復期。</p><h3>雙波長設計</h3><ul><li><strong>1440nm（白色治療頭）</strong>：改善膚質、縮小毛孔、提升光澤</li><li><strong>1927nm（藍色治療頭）</strong>：針對色斑、痘印、淺層色素沉澱</li></ul><p>治療頭獨立包裝、每位客人專屬使用，避免交叉感染；儀器內建感應功能，治療頭完全接觸皮膚時才釋放能量，確保安全。</p><h3>核心優勢</h3><ul><li><strong>修復期極短</strong>：僅需數小時至 1 天退紅，第二天即可化妝</li><li><strong>疼痛感低</strong>：多數人感覺輕微滾燙或輕微吉感，敷麻膏後舒適可接受</li><li><strong>適合亞洲肌膚</strong>：降低炎症後色素沉著風險，特別為膚色偏黃的肌膚設計</li><li>獲美國 FDA 認證</li></ul><h3>與其他激光比較</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>特性</th><th>Clear & Brilliant</th><th>傳統 Fraxel</th><th>Fractional CO₂</th></tr></thead><tbody><tr><td>修復期</td><td>1-2 天</td><td>5-7 天</td><td>7-10 天</td></tr><tr><td>疼痛感</td><td>輕微刺痛</td><td>劇痛</td><td>輕微刺痛</td></tr><tr><td>適用人群</td><td>亞洲肌膚友好</td><td>歐美膚色</td><td>歐美膚色較好</td></tr><tr><td>適應症狀</td><td>毛孔粗大、膚色不均、細紋</td><td>深層修復、嚴重色素</td><td>重度凹凸洞、色素</td></tr></tbody></table></div><h3>適用人群</h3><ul><li>膚質粗糙、毛孔粗大</li><li>痘印與色素沉澱</li><li>輕度衰老跡象（細紋、彈性下降）</li></ul><h3>術後護理</h3><ul><li>敷冰：降溫、緩解熱感與腫脹</li><li>每天敷補水面膜：促進修復</li><li>避免刺激性產品：如美白產品、暗瘡膏</li><li>加強防曬，防止色素沉澱</li></ul><p>術後數天內感受到膚質提升，2-4 週後效果更明顯：膚色均勻度、毛孔細緻度改善。C&B 是 Fraxel 的「溫和版」，適合追求低風險、低恢復期、即時效果的忙碌都市人群。</p>`, "zh-CN": `<p>Clear & Brilliant（C&B）由美国 Solta Medical 推出，是 Fraxel 激光的改良升级版，保留效果同时大幅降低不适与修复期。</p><h3>双波长设计</h3><ul><li><strong>1440nm（白色治疗头）</strong>：改善肤质、缩小毛孔、提升光泽</li><li><strong>1927nm（蓝色治疗头）</strong>：针对色斑、痘印、浅层色素沉淀</li></ul><p>治疗头独立包装、每位客人专属使用，避免交叉感染；仪器内建感应功能，治疗头完全接触皮肤时才释放能量，确保安全。</p><h3>核心优势</h3><ul><li><strong>修复期极短</strong>：仅需数小时至 1 天退红，第二天即可化妆</li><li><strong>疼痛感低</strong>：多数人感觉轻微滚烫或轻微吉感，敷麻膏后舒适可接受</li><li><strong>适合亚洲肌肤</strong>：降低炎症后色素沉著风险，特别为肤色偏黄的肌肤设计</li><li>获美国 FDA 认证</li></ul><h3>与其他激光比较</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>特性</th><th>Clear & Brilliant</th><th>传统 Fraxel</th><th>Fractional CO₂</th></tr></thead><tbody><tr><td>修复期</td><td>1-2 天</td><td>5-7 天</td><td>7-10 天</td></tr><tr><td>疼痛感</td><td>轻微刺痛</td><td>剧痛</td><td>轻微刺痛</td></tr><tr><td>适用人群</td><td>亚洲肌肤友好</td><td>欧美肤色</td><td>欧美肤色较好</td></tr><tr><td>适应症状</td><td>毛孔粗大、肤色不均、细纹</td><td>深层修复、严重色素</td><td>重度凹凸洞、色素</td></tr></tbody></table></div><h3>适用人群</h3><ul><li>肤质粗糙、毛孔粗大</li><li>痘印与色素沉淀</li><li>轻度衰老迹象（细纹、弹性下降）</li></ul><h3>术后护理</h3><ul><li>敷冰：降温、缓解热感与肿胀</li><li>每天敷补水面膜：促进修复</li><li>避免刺激性产品：如美白产品、暗疮膏</li><li>加强防晒，防止色素沉淀</li></ul><p>术后数天内感受到肤质提升，2-4 周后效果更明显：肤色均匀度、毛孔细致度改善。C&B 是 Fraxel 的「温和版」，适合追求低风险、低恢复期、即时效果的忙碌都市人群。</p>`, en: `<p>Clear & Brilliant (C&B) is launched by Solta Medical in the USA. It is an improved, upgraded version of Fraxel laser, retaining results while substantially reducing discomfort and downtime.</p><h3>Dual-wavelength design</h3><ul><li><strong>1440 nm (white treatment tip)</strong>: improves skin texture, reduces pores and enhances radiance</li><li><strong>1927 nm (blue treatment tip)</strong>: targets pigment spots, post-acne marks and superficial pigment deposition</li></ul><p>Treatment tips are individually packaged and used exclusively for each client, avoiding cross-infection. The device has a built-in sensing function and only releases energy when the tip is in full contact with the skin, ensuring safety.</p><h3>Core advantages</h3><ul><li><strong>Extremely short downtime</strong>: redness settles in only a few hours to 1 day; make-up can be applied the next day</li><li><strong>Low pain</strong>: most people feel a mild rolling heat or a slight prickling; after numbing cream it is comfortably acceptable</li><li><strong>Suited to Asian skin</strong>: lowers the risk of post-inflammatory hyperpigmentation, designed especially for yellowish-toned skin</li><li>US FDA-certified</li></ul><h3>Comparison with other lasers</h3><div class='table-wrap'><table class='cmp-table'><thead><tr><th>Property</th><th>Clear & Brilliant</th><th>Traditional Fraxel</th><th>Fractional CO₂</th></tr></thead><tbody><tr><td>Downtime</td><td>1–2 days</td><td>5–7 days</td><td>7–10 days</td></tr><tr><td>Pain</td><td>Mild stinging</td><td>Severe pain</td><td>Mild stinging</td></tr><tr><td>Suitable skin</td><td>Asian-skin friendly</td><td>Caucasian skin</td><td>Better for Caucasian skin</td></tr><tr><td>Indications</td><td>Enlarged pores, uneven tone, fine lines</td><td>Deep repair, severe pigment</td><td>Severe pitted scars, pigment</td></tr></tbody></table></div><h3>Who it is for</h3><ul><li>Rough texture, enlarged pores</li><li>Post-acne marks and pigment deposition</li><li>Early signs of ageing (fine lines, reduced elasticity)</li></ul><h3>Aftercare</h3><ul><li>Ice packs: cool the skin, relieve heat and swelling</li><li>Apply a hydrating mask daily: support repair</li><li>Avoid stimulating products: such as brighteners and acne creams</li><li>Strengthen sun protection to prevent pigment deposition</li></ul><p>An improvement in texture is felt within a few days after treatment, and is more noticeable at 2–4 weeks: evenness of tone and pore refinement improve. C&B is the “gentle version” of Fraxel, suited to busy city dwellers seeking low risk, short downtime and prompt results.</p>` },
  },
  {
    id: "31",
    slug: "31",
    eyebrow: "Wellness",
    cover: "/images/knowledge-cover-31.jpg",
    image: "/images/knowledge-cover-31.jpg",
    title: { "zh-HK": `雙下巴成因與改善：從日常習慣到溶脂針`, "zh-CN": `双下巴成因与改善：从日常习惯到溶脂针`, en: `Double Chin Causes and Improvement: From Daily Habits to Fat-Dissolving Injections` },
    excerpt: { "zh-HK": `雙下巴成因多樣，從遺傳、體重到姿勢都有影響。了解成因與改善方法，才能有效修飾下巴線條。`, "zh-CN": `双下巴成因多样，从遗传、体重到姿势都有影响。了解成因与改善方法，才能有效修饰下巴线条。`, en: `The causes of a double chin are varied, from genetics and body weight to posture. Understanding the cause and improvement methods is the way to refine the chin line effectively.` },
    body: { "zh-HK": `<p>雙下巴的成因多樣，包括：天生遺傳（下巴脂肪較厚或骨骼結構令下巴外觀突出）、體重增加（脂肪累積於下巴周圍）、年齡增長（肌肉及皮膚彈性下降，重力作用下形成鬆垮外觀）、姿勢不良（長期低頭用手機或電腦、脖子前傾）、咀嚼習慣（咀嚼不足令下顎肌肉鬆弛）等。</p><h3>日常改善方法</h3><ul><li><strong>面部運動</strong>：鍛鍊下巴及頸部肌肉（仰頭、張嘴等），可能有助改善下巴線條</li><li><strong>推拿按摩</strong>：早晨輕按摩下巴區域，有助改善水腫及促進局部循環</li><li><strong>控制飲食</strong>：減少高糖、高脂、高鹽食物，增加蔬果和瘦肉攝取</li></ul><h3>醫美方案：溶脂針</h3><p>針對頑固的雙下巴脂肪，可考慮溶脂針療程。以去氧膽酸（DCA）為例，可破壞脂肪細胞膜，導致不可逆轉的脂肪細胞分解，永久減少雙下巴脂肪細胞數目。</p><ul><li>屬非手術方式，無需開刀，由醫生根據個人情況制定方案</li><li>需 2-3 次療程，每次相隔約 1 個月</li><li>注射後 24-48 小時腫脹達高峰，下巴腫脹平均 7-14 天漸消腫</li><li>注射時可能有短暫酸麻感，注射後灼熱與腫脹感較明顯，冰敷可減低疼痛</li></ul><h3>注意事項</h3><ul><li>對藥劑成分過敏者、有出血或凝血功能障礙者不適合</li><li>皮膚過度鬆弛且頸部直紋明顯者，單靠溶脂針效果有限</li><li>懷孕、哺乳中婦女不適合</li></ul><p>雙下巴的改善，關鍵是先判斷成因：脂肪型雙下巴適合溶脂針，鬆弛型則可能需配合緊緻療程。</p>`, "zh-CN": `<p>双下巴的成因多样，包括：天生遗传（下巴脂肪较厚或骨骼结构令下巴外观突出）、体重增加（脂肪累积于下巴周围）、年龄增长（肌肉及皮肤弹性下降，重力作用下形成松垮外观）、姿势不良（长期低头用手机或电脑、脖子前倾）、咀嚼习惯（咀嚼不足令下颚肌肉松弛）等。</p><h3>日常改善方法</h3><ul><li><strong>面部运动</strong>：锻炼下巴及颈部肌肉（仰头、张嘴等），可能有助改善下巴线条</li><li><strong>推拿按摩</strong>：早晨轻按摩下巴区域，有助改善水肿及促进局部循环</li><li><strong>控制饮食</strong>：减少高糖、高脂、高盐食物，增加蔬果和瘦肉摄取</li></ul><h3>医美方案：溶脂针</h3><p>针对顽固的双下巴脂肪，可考虑溶脂针疗程。以去氧胆酸（DCA）为例，可破坏脂肪细胞膜，导致不可逆转的脂肪细胞分解，永久减少双下巴脂肪细胞数目。</p><ul><li>属非手术方式，无需开刀，由医生根据个人情况制定方案</li><li>需 2-3 次疗程，每次相隔约 1 个月</li><li>注射后 24-48 小时肿胀达高峰，下巴肿胀平均 7-14 天渐消肿</li><li>注射时可能有短暂酸麻感，注射后灼热与肿胀感较明显，冰敷可减低疼痛</li></ul><h3>注意事项</h3><ul><li>对药剂成分过敏者、有出血或凝血功能障碍者不适合</li><li>皮肤过度松弛且颈部直纹明显者，单靠溶脂针效果有限</li><li>怀孕、哺乳中妇女不适合</li></ul><p>双下巴的改善，关键是先判断成因：脂肪型双下巴适合溶脂针，松弛型则可能需配合紧致疗程。</p>`, en: `<p>The causes of a double chin are varied, including: innate genetics (thicker chin fat or a bony structure that makes the chin look more prominent), weight gain (fat accumulating around the chin), ageing (reduced muscle and skin elasticity, forming a sagging appearance under gravity), poor posture (long periods looking down at a phone or computer, with the neck tilted forward), and chewing habits (insufficient chewing leaving the jaw muscles lax).</p><h3>Daily improvement methods</h3><ul><li><strong>Facial exercise</strong>: training the chin and neck muscles (looking up, opening the mouth, and similar), which may help improve the chin line</li><li><strong>Massage</strong>: a light morning massage of the chin area can help improve puffiness and promote local circulation</li><li><strong>Dietary control</strong>: reduce high-sugar, high-fat and high-salt foods; increase fruit, vegetables and lean protein</li></ul><h3>Medical aesthetic option: fat-dissolving injections</h3><p>For stubborn double-chin fat, fat-dissolving injections may be considered. Taking deoxycholic acid (DCA) as an example, it can disrupt the fat-cell membrane, leading to irreversible fat-cell breakdown and permanently reducing the number of fat cells in a double chin.</p><ul><li>A non-surgical method, with no incision; the doctor designs a plan according to the individual</li><li>2–3 sessions are needed, about 1 month apart</li><li>Swelling peaks 24–48 hours after injection; chin swelling gradually settles over an average of 7–14 days</li><li>There may be a brief dull, numb sensation during injection; burning and swelling afterwards are more noticeable; ice packs can reduce pain</li></ul><h3>Precautions</h3><ul><li>Those allergic to the product ingredients, or with bleeding or coagulation disorders, are not suitable</li><li>Those with excessive skin laxity and obvious vertical neck lines will have limited results from fat-dissolving injections alone</li><li>Pregnant and breastfeeding women are not suitable</li></ul><p>The key to improving a double chin is first judging the cause: a fat-type double chin suits fat-dissolving injections; a laxity-type may need a tightening treatment as well.</p>` },
  },
  {
    id: "32",
    slug: "32",
    eyebrow: "Injectables",
    cover: "/images/knowledge-cover-32.jpg",
    image: "/images/knowledge-cover-32.jpg",
    title: { "zh-HK": `埋線鼻失敗風險與後遺症：術前必讀`, "zh-CN": `埋线鼻失败风险与后遗症：术前必读`, en: `Thread-Nose Failure Risks and Sequelae: Must-Read Before Treatment` },
    excerpt: { "zh-HK": `埋線鼻以線材支撐塑造鼻形，但存在線材移位、穿出、感染等風險。術前必須與醫生充分溝通。`, "zh-CN": `埋线鼻以线材支撑塑造鼻形，但存在线材移位、穿出、感染等风险。术前必须与医生充分沟通。`, en: `A thread nose uses threads as a scaffold to shape the nose, but carries risks such as thread migration, extrusion and infection. Thorough communication with the doctor beforehand is essential.` },
    body: { "zh-HK": `<p>埋線鼻使用人體相容的鼻線，由鼻頭將線埋在皮下，利用線材的支撐力像支架般塑造鼻形，調整鼻頭鼻尖、增加鼻部高度。線材會隨時間被人體吸收分解，理論上可能刺激膠原蛋白增生，實際效果因個人體質而異。</p><h3>五大失敗風險</h3><ul><li><strong>腫脹瘀血</strong>：最常見的短期反應，配合藥物及冰敷通常在數天內消退</li><li><strong>線材移位</strong>：可能因固定不當、外力或表情動作引起，導致線材分布不均；嚴重時可能出現「組織纖維化攣縮」，影響局部血液循環，並增加日後其他療程的難度</li><li><strong>鼻線穿出</strong>：線材從鼻部皮膚穿出，可能造成不適及感染。有鼻敏感、習慣揉鼻的人風險相對較高，出現時應盡快聯絡醫生，切勿自行處理</li><li><strong>感染</strong>：在不具資質的場所進行、線材成分不明、免疫力下降等均可能增加感染風險，需留意紅腫、持續疼痛、發燒、化膿等徵兆</li><li><strong>效果未符預期</strong>：可能出現不自然或組織不平整，與術前溝通不足、個人先天條件有關</li></ul><h3>關鍵提醒</h3><p>線材無法像透明質酸般溶解，術前必須與醫生充分溝通。風險受三個因素影響：操作人員資質、線材質量、個人體質。選擇由具執業資格的醫生在正規醫療機構進行，是降低風險的關鍵。</p><h3>注意事項</h3><ul><li>埋線鼻屬非手術、無須開刀的選項，不需置入永久外物，但仍存在一定風險</li><li>有鼻敏感、習慣揉鼻的人風險相對較高</li><li>出現線材穿出時應盡快聯絡醫生，切勿自行處理</li><li>少見但需警惕的風險包括感染、血管栓塞及極罕見的嚴重併發症</li></ul><p>埋線鼻效果的關鍵，在於操作者的經驗與對解剖結構的熟悉程度。</p>`, "zh-CN": `<p>埋线鼻使用人体相容的鼻线，由鼻头将线埋在皮下，利用线材的支撑力像支架般塑造鼻形，调整鼻头鼻尖、增加鼻部高度。线材会随时间被人体吸收分解，理论上可能刺激胶原蛋白增生，实际效果因个人体质而异。</p><h3>五大失败风险</h3><ul><li><strong>肿胀瘀血</strong>：最常见的短期反应，配合药物及冰敷通常在数天内消退</li><li><strong>线材移位</strong>：可能因固定不当、外力或表情动作引起，导致线材分布不均；严重时可能出现「组织纤维化挛缩」，影响局部血液循环，并增加日后其他疗程的难度</li><li><strong>鼻线穿出</strong>：线材从鼻部皮肤穿出，可能造成不适及感染。有鼻敏感、习惯揉鼻的人风险相对较高，出现时应尽快联络医生，切勿自行处理</li><li><strong>感染</strong>：在不具资质的场所进行、线材成分不明、免疫力下降等均可能增加感染风险，需留意红肿、持续疼痛、发烧、化脓等征兆</li><li><strong>效果未符预期</strong>：可能出现不自然或组织不平整，与术前沟通不足、个人先天条件有关</li></ul><h3>关键提醒</h3><p>线材无法像透明质酸般溶解，术前必须与医生充分沟通。风险受三个因素影响：操作人员资质、线材质量、个人体质。选择由具执业资格的医生在正规医疗机构进行，是降低风险的关键。</p><h3>注意事项</h3><ul><li>埋线鼻属非手术、无须开刀的选项，不需置入永久外物，但仍存在一定风险</li><li>有鼻敏感、习惯揉鼻的人风险相对较高</li><li>出现线材穿出时应尽快联络医生，切勿自行处理</li><li>少见但需警惕的风险包括感染、血管栓塞及极罕见的严重并发症</li></ul><p>埋线鼻效果的关键，在于操作者的经验与对解剖结构的熟悉程度。</p>`, en: `<p>A thread nose uses biocompatible nasal threads. The threads are placed under the skin from the nasal tip, using the threads’ support like a scaffold to shape the nose, adjust the tip and increase nasal height. The threads are absorbed and broken down by the body over time, and in theory may stimulate collagen production; actual results vary with individual constitution.</p><h3>Five major failure risks</h3><ul><li><strong>Swelling and bruising</strong>: the most common short-term reaction; with medication and ice packs, it usually settles within a few days</li><li><strong>Thread migration</strong>: may be caused by inadequate fixation, external force or facial expression, leading to uneven thread distribution. In severe cases, “fibrotic contracture” may occur, affecting local blood circulation and making later treatments more difficult</li><li><strong>Thread extrusion</strong>: a thread pokes through the nasal skin, which may cause discomfort and infection. Those with nasal allergy or a habit of rubbing the nose are at relatively higher risk. If it occurs, contact a doctor promptly and do not attempt to handle it yourself</li><li><strong>Infection</strong>: having the procedure in an unqualified setting, threads of unknown composition, or reduced immunity can all increase infection risk. Watch for redness, persistent pain, fever, pus and similar signs</li><li><strong>Results not as expected</strong>: an unnatural look or uneven tissue may appear, related to insufficient pre-treatment communication and innate individual conditions</li></ul><h3>Key reminder</h3><p>Threads cannot be dissolved like hyaluronic acid, so there must be thorough communication with the doctor beforehand. Risk is influenced by three factors: the practitioner’s qualifications, thread quality, and individual constitution. Choosing a licensed doctor in a proper medical facility is the key to lowering risk.</p><h3>Precautions</h3><ul><li>A thread nose is a non-surgical option with no incision and no permanent implant, but a degree of risk still exists</li><li>Those with nasal allergy or a habit of rubbing the nose are at relatively higher risk</li><li>If a thread extrudes, contact a doctor promptly and do not attempt to handle it yourself</li><li>Uncommon but important risks include infection, vascular occlusion and extremely rare serious complications</li></ul><p>The key to thread-nose results lies in the operator’s experience and familiarity with anatomy.</p>` },
  },
  {
    id: "33",
    slug: "33",
    section: "longevity",
    eyebrow: "Longevity",
    cover: "/images/knowledge/longevity-1-1.png",
    image: "/images/knowledge/longevity-1-1.png",
    title: { "zh-HK": `普通抗衰只是讓你看起來年輕，細胞抗衰讓你的細胞都更加年輕！`, "zh-CN": `普通抗衰只是让你看起来年轻，细胞抗衰让你的细胞都更加年轻！`, en: `Ordinary Anti-Ageing Only Makes You Look Younger — Cellular Anti-Ageing Makes Your Cells Younger` },
    excerpt: { "zh-HK": `世界衛生組織將衰老定義為細胞數量下降與細胞活性降低。普通抗衰多停留在「看起來年輕」；細胞抗衰則從幹細胞與免疫細胞入手。`, "zh-CN": `世界卫生组织将衰老定义为细胞数量下降与细胞活性降低。普通抗衰多停留在「看起来年轻」；细胞抗衰则从干细胞与免疫细胞入手。`, en: `WHO defines ageing as fewer cells and lower cell activity. Surface anti-ageing makes you look younger; cellular anti-ageing starts with stem cells and immune cells.` },
    body: { "zh-HK": `<p>時光難留，生命無常，衰老從不是可規避的命題。我們能做的，不過是用種種方式放緩它的腳步，卻終究擋不住身體機能的衰退、精神活力的黯淡，這份無力，讓太多人難以坦然面對老去的宿命。</p>
<p>從生理學講，衰老是從受精卵開始一直進行到老年的個體發育史；</p>
<p>從病理學講，衰老是應激、勞損、損傷、感染、免疫反應衰退、營養失調、代謝障礙以及疏忽和濫用藥物積累的結果；</p>
<p>從臨床上講，衰老機體表現為記憶力下降、反應遲鈍、運動能力減弱、相關激素分泌減少等多臟器退行性變化。</p>
<p>而世界衛生組織對衰老的定義是：身體內細胞數量的下降和細胞活性的降低。</p>
<p>這裏的細胞，就是指的幹細胞和免疫細胞。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-2.png" alt="人體幹細胞數量隨年齡增長而減少" /><figcaption>人體幹細胞數量隨年齡增長而減少</figcaption></figure>
<p>機體衰老是一個逐漸產生的過程，人在 30 歲後，各項生理機能以每年 0.75%—1% 的速率下降，而生活方式不健康或不能保持運動的人，生理機能退化的速率是健康人的兩倍，衰老也會提前到來。</p>
<h3>一、衰老的根源在於細胞</h3>
<p>國際頂尖學術期刊《Nature》表示：衰老是細胞不可逆地停止分裂，並進入永久性生長停滯狀態，而不經歷細胞死亡的過程。未修復的 DNA 損傷或其他細胞應激可誘發衰老。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-3.png" alt="細胞衰老示意" /></figure>
<p>細胞衰老的定義：隨著時間的推移或面臨外界應激壓力時，細胞的正常生理功能和增殖能力發生逐漸地衰退，從而脫離細胞週期的過程。細胞衰老是機體衰老和死亡的基礎，而機體的衰老又與多種老年性疾病密切相關。</p>
<p>隨著年齡的增長，個體傾向於發展成促炎症狀態，其特徵是高水平的炎症分子循環。炎症是各種慢性年齡相關疾病的風險因素，包括心血管疾病、某些癌症類型和神經退行性變，並可能與過早死亡有關。此外，老年人血液中存在的炎症分子與體重減輕、肌肉萎縮和虛弱、慢性炎症和抑鬱有關。</p>
<p>簡而言之：人的壽命是由我們身體中的每一個細胞的衰老速度決定的。而衰老，就是疾病的開始！</p>
<p>人體的衰老，歸根結底是細胞的衰老。因而，抗衰老最根本的途徑是清除衰老細胞，修復受損細胞，改善細胞代謝，激活休眠細胞的功能。因此說，應用免疫細胞技術、幹細胞技術抗衰老能夠從根源上「對症抗衰」，從如今諸多研究和臨床案例中，便能看到細胞技術在抗衰老領域正大放異彩。</p>
<h3>二、核心機制：細胞替代與分化</h3>
<p><strong>機理：</strong>輸入的幹細胞，在特定微環境訊號的誘導下，能夠定向分化為所需的功能細胞，如皮膚成纖維細胞（產生膠原蛋白）、心肌細胞、神經細胞、軟骨細胞等，以替代因衰老、損傷或疾病而凋亡、功能減退的細胞。</p>
<p><strong>作用：</strong>直接補充「新生力量」，從數量上逆轉特定組織的細胞流失，恢復器官功能。例如，分化為新的成纖維細胞就能增加膠原蛋白和彈性蛋白的產量，改善皮膚老化。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-4.png" alt="幹細胞分化與組織修復示意" /></figure>
<h3>三、關鍵機制：旁分泌作用</h3>
<p>這是目前科學界認為最重要、最核心的抗衰機制。幹細胞的作用更像一個「智能藥物工廠」，而不是單純的「磚瓦」。</p>
<p><strong>機理：</strong>幹細胞進入人體後，會大量分泌多種具有生物活性的因子，這些因子包括：</p>
<ul>
<li><strong>生長因子（Growth Factors）</strong>：如表皮生長因子（EGF）、成纖維細胞生長因子（FGF）、血管內皮生長因子（VEGF）、肝細胞生長因子（HGF）等。</li>
<li><strong>細胞因子（Cytokines）</strong>：各種白介素（ILs）、集落刺激因子等。</li>
<li><strong>外泌體（Exosomes）</strong>：一種囊泡，包裹着蛋白質、mRNA、miRNA 等訊號分子，是細胞間通訊的重要媒介。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-5.jpg" alt="外泌體的電鏡照片" /><figcaption>外泌體的電鏡照片</figcaption></figure>
<p><strong>作用：</strong>這些活性因子透過旁分泌作用，產生以下效應：</p>
<ul>
<li><strong>激活內源性幹細胞</strong>：喚醒和動員人體自身休眠的幹細胞，促進其增殖和分化，進行「自主修復」。</li>
<li><strong>促進血管新生（Angiogenesis）</strong>：例如 VEGF 能刺激新血管形成，改善組織和器官的血液供應與營養輸送，為細胞再生提供良好環境。</li>
<li><strong>抑制細胞凋亡</strong>：分泌的活性物質可以保護原有細胞，減少其死亡。</li>
<li><strong>調節免疫（Immunomodulation）</strong>：這是非常重要的一環。幹細胞能顯著調節免疫系統，抑制過度炎症反應（減少如 TNF-α、IL-6 等促炎因子）。慢性炎症（Inflammaging）是衰老的十大標誌之一，減輕炎症就能延緩多種衰老相關疾病。</li>
<li><strong>抗氧化應激</strong>：提高細胞的抗氧化能力，減少自由基對細胞的損傷。</li>
</ul>
<h3>四、組織修復與再生</h3>
<p><strong>機理：</strong>綜合以上兩種機制，幹細胞能夠遷移到損傷部位，透過分化替代和分泌訊號，創造一個良好的「再生微環境」，招募其他修復細胞共同工作，促進組織結構的修復和功能重建。</p>
<p><strong>作用：</strong>修復受損的器官組織，如心肌梗死後的心臟組織、骨關節炎中的軟骨組織、衰老的皮膚真皮層等。</p>
<h3>五、端粒酶活性的調節</h3>
<p><strong>機理：</strong>細胞衰老的一個重要原因是端粒（染色體末端的保護帽）隨着細胞分裂而縮短。部分幹細胞（如間充質幹細胞）具有較高的端粒酶活性，可能有助於穩定或延長端粒長度。</p>
<p><strong>作用：</strong>從細胞複製層面延緩衰老進程，維持細胞的年輕狀態和分裂潛能。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-6.jpg" alt="細胞抗衰結語圖" /></figure>
<h3>結語</h3>
<p>國際頂尖學術期刊《Nature》表示：衰老是細胞不可逆地停止分裂，並進入永久性生長停滯狀態，而不經歷細胞死亡的過程。未修復的 DNA 損傷或其他細胞應激可誘發衰老。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>时光难留，生命无常，衰老从不是可规避的命题。我们能做的，不过是用种种方式放缓它的脚步，却终究挡不住身体机能的衰退、精神活力的黯淡，这份无力，让太多人难以坦然面对老去的宿命。</p>
<p>从生理学讲，衰老是从受精卵开始一直进行到老年的个体发育史；</p>
<p>从病理学讲，衰老是应激、劳损、损伤、感染、免疫反应衰退、营养失调、代谢障碍以及疏忽和滥用药物积累的结果；</p>
<p>从临床上讲，衰老机体表现为记忆力下降、反应迟钝、运动能力减弱、相关激素分泌减少等多脏器退行性变化。</p>
<p>而世界卫生组织对衰老的定义是：身体内细胞数量的下降和细胞活性的降低。</p>
<p>这里的细胞，就是指的干细胞和免疫细胞。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-2.png" alt="人体干细胞数量随年龄增长而减少" /><figcaption>人体干细胞数量随年龄增长而减少</figcaption></figure>
<p>机体衰老是一个逐渐产生的过程，人在 30 岁后，各项生理机能以每年 0.75%—1% 的速率下降，而生活方式不健康或不能保持运动的人，生理机能退化的速率是健康人的两倍，衰老也会提前到来。</p>
<h3>一、衰老的根源在于细胞</h3>
<p>国际顶尖学术期刊《Nature》表示：衰老是细胞不可逆地停止分裂，并进入永久性生长停滞状态，而不经历细胞死亡的过程。未修复的 DNA 损伤或其他细胞应激可诱发衰老。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-3.png" alt="细胞衰老示意" /></figure>
<p>细胞衰老的定义：随着时间的推移或面临外界应激压力时，细胞的正常生理功能和增殖能力发生逐渐地衰退，从而脱离细胞周期的过程。细胞衰老是机体衰老和死亡的基础，而机体的衰老又与多种老年性疾病密切相关。</p>
<p>随着年龄的增长，个体倾向于发展成促炎症状态，其特征是高水平的炎症分子循环。炎症是各种慢性年龄相关疾病的风险因素，包括心血管疾病、某些癌症类型和神经退行性变，并可能与过早死亡有关。此外，老年人血液中存在的炎症分子与体重减轻、肌肉萎缩和虚弱、慢性炎症和抑郁有关。</p>
<p>简而言之：人的寿命是由我们身体中的每一个细胞的衰老速度决定的。而衰老，就是疾病的开始！</p>
<p>人体的衰老，归根结底是细胞的衰老。因而，抗衰老最根本的途径是清除衰老细胞，修复受损细胞，改善细胞代谢，激活休眠细胞的功能。因此说，应用免疫细胞技术、干细胞技术抗衰老能够从根源上「对症抗衰」，从如今诸多研究和临床案例中，便能看到细胞技术在抗衰老领域正大放异彩。</p>
<h3>二、核心机制：细胞替代与分化</h3>
<p><strong>机理：</strong>输入的干细胞，在特定微环境信号的诱导下，能够定向分化为所需的功能细胞，如皮肤成纤维细胞（产生胶原蛋白）、心肌细胞、神经细胞、软骨细胞等，以替代因衰老、损伤或疾病而凋亡、功能减退的细胞。</p>
<p><strong>作用：</strong>直接补充「新生力量」，从数量上逆转特定组织的细胞流失，恢复器官功能。例如，分化为新的成纤维细胞就能增加胶原蛋白和弹性蛋白的产量，改善皮肤老化。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-4.png" alt="干细胞分化与组织修复示意" /></figure>
<h3>三、关键机制：旁分泌作用</h3>
<p>这是目前科学界认为最重要、最核心的抗衰机制。干细胞的作用更像一个「智能药物工厂」，而不是单纯的「砖瓦」。</p>
<p><strong>机理：</strong>干细胞进入人体后，会大量分泌多种具有生物活性的因子，这些因子包括：</p>
<ul>
<li><strong>生长因子（Growth Factors）</strong>：如表皮生长因子（EGF）、成纤维细胞生长因子（FGF）、血管内皮生长因子（VEGF）、肝细胞生长因子（HGF）等。</li>
<li><strong>细胞因子（Cytokines）</strong>：各种白介素（ILs）、集落刺激因子等。</li>
<li><strong>外泌体（Exosomes）</strong>：一种囊泡，包裹着蛋白质、mRNA、miRNA 等信号分子，是细胞间通信的重要媒介。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-5.jpg" alt="外泌体的电镜照片" /><figcaption>外泌体的电镜照片</figcaption></figure>
<p><strong>作用：</strong>这些活性因子通过旁分泌作用，产生以下效应：</p>
<ul>
<li><strong>激活内源性干细胞</strong>：唤醒和动员人体自身休眠的干细胞，促进其增殖和分化，进行「自主修复」。</li>
<li><strong>促进血管新生（Angiogenesis）</strong>：例如 VEGF 能刺激新血管形成，改善组织和器官的血液供应与营养输送，为细胞再生提供良好环境。</li>
<li><strong>抑制细胞凋亡</strong>：分泌的活性物质可以保护原有细胞，减少其死亡。</li>
<li><strong>调节免疫（Immunomodulation）</strong>：这是非常重要的一环。干细胞能显著调节免疫系统，抑制过度炎症反应（减少如 TNF-α、IL-6 等促炎因子）。慢性炎症（Inflammaging）是衰老的十大标志之一，减轻炎症就能延缓多种衰老相关疾病。</li>
<li><strong>抗氧化应激</strong>：提高细胞的抗氧化能力，减少自由基对细胞的损伤。</li>
</ul>
<h3>四、组织修复与再生</h3>
<p><strong>机理：</strong>综合以上两种机制，干细胞能够迁移到损伤部位，通过分化替代和分泌信号，创造一个良好的「再生微环境」，招募其他修复细胞共同工作，促进组织结构的修复和功能重建。</p>
<p><strong>作用：</strong>修复受损的器官组织，如心肌梗死后的心脏组织、骨关节炎中的软骨组织、衰老的皮肤真皮层等。</p>
<h3>五、端粒酶活性的调节</h3>
<p><strong>机理：</strong>细胞衰老的一个重要原因是端粒（染色体末端的保护帽）随着细胞分裂而缩短。部分干细胞（如间充质干细胞）具有较高的端粒酶活性，可能有助于稳定或延长端粒长度。</p>
<p><strong>作用：</strong>从细胞复制层面延缓衰老进程，维持细胞的年轻状态和分裂潜能。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-6.jpg" alt="细胞抗衰结语图" /></figure>
<h3>结语</h3>
<p>国际顶尖学术期刊《Nature》表示：衰老是细胞不可逆地停止分裂，并进入永久性生长停滞状态，而不经历细胞死亡的过程。未修复的 DNA 损伤或其他细胞应激可诱发衰老。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Time is hard to hold, and life is uncertain. Ageing is not a proposition we can simply avoid. All we can do is slow its pace in various ways — yet we still cannot stop the decline of bodily function or the dimming of vitality. That sense of powerlessness makes it hard for many people to face growing old with equanimity.</p>
<p>In physiology, ageing is the developmental history of the individual from the fertilised egg through to old age.</p>
<p>In pathology, ageing is the accumulated result of stress, wear, injury, infection, declining immune response, nutritional imbalance, metabolic disturbance, and neglect or misuse of medication.</p>
<p>Clinically, an ageing body shows multi-organ degenerative change: declining memory, slower reactions, reduced motor capacity, and lower secretion of related hormones.</p>
<p>The World Health Organization defines ageing as a decline in the number of cells in the body and a reduction in cell activity.</p>
<p>The cells referred to here are stem cells and immune cells.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-2.png" alt="Stem-cell numbers decline with age" /><figcaption>Stem-cell numbers in the body decline with age</figcaption></figure>
<p>Ageing of the organism is a gradual process. After the age of 30, physiological function declines at a rate of 0.75%–1% per year. In those with an unhealthy lifestyle or who do not keep exercising, the rate of decline is twice that of healthy people, and ageing arrives earlier.</p>
<h3>1. The root of ageing lies in the cell</h3>
<p>The leading journal <em>Nature</em> describes ageing as cells irreversibly ceasing to divide and entering a state of permanent growth arrest, without undergoing cell death. Unrepaired DNA damage or other cellular stress can induce senescence.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-3.png" alt="Illustration of cellular senescence" /></figure>
<p>Definition of cellular senescence: over time, or when facing external stress, a cell’s normal physiological function and proliferative capacity gradually decline, so that it exits the cell cycle. Cellular senescence is the basis of organismal ageing and death, and organismal ageing is closely linked to many diseases of later life.</p>
<p>With age, individuals tend to develop a pro-inflammatory state, characterised by high circulating levels of inflammatory molecules. Inflammation is a risk factor for various chronic age-related diseases, including cardiovascular disease, certain cancers and neurodegeneration, and may be associated with premature death. Inflammatory molecules in the blood of older people are also linked to weight loss, muscle wasting and frailty, chronic inflammation and depression.</p>
<p>In short: lifespan is determined by the speed at which every cell in the body ages. And ageing is the beginning of disease.</p>
<p>Human ageing is, at root, the ageing of cells. The most fundamental path of anti-ageing is therefore to clear senescent cells, repair damaged cells, improve cell metabolism and activate the function of dormant cells. Immune-cell and stem-cell approaches to anti-ageing can therefore address the problem at its source. From a growing body of research and clinical cases, cell technology is already showing its strength in this field.</p>
<h3>2. Core mechanism: cell replacement and differentiation</h3>
<p><strong>Mechanism:</strong> infused stem cells, under signals from a specific microenvironment, can differentiate in a directed way into the functional cells required — such as dermal fibroblasts (which produce collagen), cardiomyocytes, neurons and chondrocytes — to replace cells that have undergone apoptosis or lost function through ageing, injury or disease.</p>
<p><strong>Effect:</strong> it directly replenishes “new force”, reversing cell loss in a given tissue in quantitative terms and restoring organ function. For example, differentiating into new fibroblasts can increase production of collagen and elastin and improve skin ageing.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-4.png" alt="Stem-cell differentiation and tissue repair" /></figure>
<h3>3. Key mechanism: paracrine action</h3>
<p>This is currently regarded by the scientific community as the most important, core anti-ageing mechanism. Stem cells act more like an “intelligent drug factory” than simply as “bricks and mortar”.</p>
<p><strong>Mechanism:</strong> after entering the body, stem cells secrete large amounts of bioactive factors, including:</p>
<ul>
<li><strong>Growth factors</strong>: such as epidermal growth factor (EGF), fibroblast growth factor (FGF), vascular endothelial growth factor (VEGF) and hepatocyte growth factor (HGF).</li>
<li><strong>Cytokines</strong>: various interleukins (ILs), colony-stimulating factors and others.</li>
<li><strong>Exosomes</strong>: vesicles carrying proteins, mRNA, miRNA and other signalling molecules — an important medium of cell-to-cell communication.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-5.jpg" alt="Electron micrograph of exosomes" /><figcaption>Electron micrograph of exosomes</figcaption></figure>
<p><strong>Effect:</strong> through paracrine action these active factors produce the following:</p>
<ul>
<li><strong>Activating endogenous stem cells</strong>: waking and mobilising the body’s own dormant stem cells, promoting their proliferation and differentiation for “self-repair”.</li>
<li><strong>Promoting angiogenesis</strong>: VEGF, for example, can stimulate new vessel formation, improving blood supply and nutrient delivery to tissues and organs, and providing a favourable environment for cell regeneration.</li>
<li><strong>Inhibiting apoptosis</strong>: secreted actives can protect existing cells and reduce their death.</li>
<li><strong>Immunomodulation</strong>: a very important part of the picture. Stem cells can markedly modulate the immune system and suppress excessive inflammatory responses (reducing pro-inflammatory factors such as TNF-α and IL-6). Chronic inflammation (inflammaging) is one of the hallmarks of ageing; reducing inflammation can delay many ageing-related diseases.</li>
<li><strong>Antioxidant stress response</strong>: raising the cell’s antioxidant capacity and reducing free-radical damage.</li>
</ul>
<h3>4. Tissue repair and regeneration</h3>
<p><strong>Mechanism:</strong> combining the two mechanisms above, stem cells can migrate to sites of injury and, through differentiation, replacement and secreted signals, create a favourable “regenerative microenvironment”, recruiting other repair cells to work together and promoting reconstruction of tissue structure and function.</p>
<p><strong>Effect:</strong> repairing damaged organ tissue — for example heart tissue after myocardial infarction, cartilage in osteoarthritis, and the ageing dermal layer of the skin.</p>
<h3>5. Regulation of telomerase activity</h3>
<p><strong>Mechanism:</strong> one important cause of cellular senescence is that telomeres (the protective caps at the ends of chromosomes) shorten with cell division. Some stem cells (such as mesenchymal stem cells) have relatively high telomerase activity, which may help stabilise or lengthen telomeres.</p>
<p><strong>Effect:</strong> delaying the ageing process at the level of cell replication, and maintaining a youthful cell state and the potential to divide.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-1-6.jpg" alt="Cellular anti-ageing closing illustration" /></figure>
<h3>Conclusion</h3>
<p>The leading journal <em>Nature</em> states that ageing is cells irreversibly ceasing to divide and entering a state of permanent growth arrest, without undergoing cell death. Unrepaired DNA damage or other cellular stress can induce senescence.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },

  {
    id: "34",
    slug: "34",
    section: "longevity",
    eyebrow: "Cells",
    cover: "/images/knowledge/longevity-2-1.png",
    image: "/images/knowledge/longevity-2-1.png",
    title: { "zh-HK": `修復身體的根本，先從一顆健康的細胞開始`, "zh-CN": `修复身体的根本，先从一颗健康的细胞开始`, en: `Repair Starts with a Healthy Cell` },
    excerpt: { "zh-HK": `細胞是生命的基本單位。疾病的恢復過程，本質上是修復和替代老化、受損或病變的細胞。`, "zh-CN": `细胞是生命的基本单位。疾病的恢复过程，本质上是修复和替代老化、受损或病变的细胞。`, en: `The cell is the basic unit of life. Recovery from disease is, at root, repairing and replacing aged, damaged or diseased cells.` },
    body: { "zh-HK": `<p>地球上的絕大多數生物，都是由細胞（cell）構成。細胞，是生命存在的基本單位。</p>
<p>人類屬於多細胞生物，是由數以萬億計的細胞共同構成的複雜有機體。每一個細胞都擁有特定的結構與功能，彼此協同運作，完成維持生命所需的一切活動。</p>
<p>美國《紐約時報》暢銷書《選擇健康》中曾指出：「人類所有疾病的根源，其實都是細胞出了問題。」</p>
<p>在人體內，細胞每天都在進行新陳代謝——不斷更新、衰老、受損，甚至可能發生癌變。此時，身體自帶的「自我修復與淨化」機制會啓動，以維持健康平衡。然而，如果這些受損細胞沒有得到及時修復，衰老的細胞未能被替換，病變細胞未被有效抑制，它們就會逐漸失去活力或進入休眠狀態，進而導致器官功能減弱，免疫力下降，疾病也就隨之而來。</p>
<p>因此，疾病的恢復過程，本質上就是修復和替代這些老化、受損或病變的細胞。通過激活細胞功能、增強再生能力，不僅能延緩衰老，還能加速康復、提升健康水平。</p>
<h3>一、細胞的主要功能</h3>
<p><strong>1. 構建生命結構</strong><br>細胞是構成所有生物體的基本單位。它們通過彼此連接，形成各種組織和器官，如心臟、大腦、肝臟、肺部、皮膚、腸胃、神經系統與肌肉等，不僅構成了生物的形態，也為生命活動提供支撐。</p>
<p><strong>2. 參與生命代謝</strong><br>細胞通過各種代謝反應獲取能量和必要的物質，並參與有機物的合成、分解與轉化，包括蛋白質的製造、碳水化合物與脂肪的代謝等，以保證生物體維持正常運作。</p>
<p><strong>3. 支持生長與修復</strong><br>生物的生長和發育依賴於細胞的分裂與擴增。當組織遭受損傷或創傷時，細胞會通過增殖促進創口癒合與組織再生，從而幫助身體恢復原有結構與功能。</p>
<p><strong>4. 傳承遺傳信息</strong><br>細胞通過 DNA 的複製、轉錄和翻譯過程完成遺傳信息的傳遞，調控蛋白質的合成與表達，進而決定細胞乃至整個生物體的特徵、功能與發展軌跡。</p>
<p><strong>5. 執行免疫防禦功能</strong><br>特定類型的細胞，如淋巴細胞、巨噬細胞和中性粒細胞，具備識別並消滅外來病原體（如細菌、病毒、寄生蟲等）的能力，從而保護機體免受感染，維護身體健康。</p>
<p><strong>6. 完成生殖繁育</strong><br>細胞還承擔着生殖的任務。例如，精子與卵子結合形成受精卵後，通過連續的細胞分裂與分化，逐步發育為一個新的生命個體，完成生命的延續過程。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-2.jpg" alt="細胞主要功能示意" /></figure>
<h3>二、細胞如何維持自身內穩態</h3>
<p>健康狀態下的細胞依靠多種生理機制來保持其內部環境的穩定性，從而確保正常功能的持續運作：</p>
<p><strong>自噬機制</strong><br>細胞通過自噬作用清除受損的細胞器及多餘或變性的蛋白質，防止毒性堆積，維持細胞內環境的平衡與功能完整性。</p>
<p><strong>程序性凋亡</strong><br>當細胞受到不可逆損傷或發生異常時，會啓動凋亡程序，有序地完成自我清除，避免病變細胞擴散，維護整體組織健康。</p>
<p><strong>DNA 修復系統</strong><br>細胞具備完善的 DNA 修復機制，可修復遺傳物質中的損傷，防止突變累積，從源頭上阻斷疾病的發展。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-3.png" alt="細胞內穩態與修復機制" /></figure>
<h3>三、細胞功能異常引發的組織與器官疾病</h3>
<p>當細胞遭遇外界環境干擾，或其自身調控機制發生紊亂時，可能導致細胞功能紊亂，如分裂失控、新陳代謝障礙或免疫系統紊亂等。這些變化不僅影響個別細胞，還會連鎖影響周圍組織乃至整個器官系統，最終誘發各種疾病。以下是幾個典型案例：</p>
<ul>
<li><strong>感冒</strong>：病毒侵入呼吸道細胞，引發免疫系統快速響應，啓動防禦機制，從而出現發熱、流涕等症狀。</li>
<li><strong>糖尿病</strong>：胰島細胞功能受損，胰島素分泌減少，導致細胞無法有效吸收利用葡萄糖，血糖濃度升高。</li>
<li><strong>高血壓</strong>：血管內壁出現病變或堵塞，血管平滑肌細胞持續收縮，引起血管緊張度升高，血流壓力上升。</li>
<li><strong>類風濕關節炎</strong>：屬於自身免疫性疾病，免疫細胞錯誤識別自身關節組織為「異物」，持續攻擊，導致炎症與關節損傷。</li>
<li><strong>哮喘</strong>：呼吸道上皮細胞對過敏原過度敏感，發生強烈反應，使氣道變窄，引起咳嗽、喘息和呼吸困難。</li>
<li><strong>貧血</strong>：體內紅細胞數量減少，導致氧氣運輸能力下降，表現為乏力、頭暈等典型症狀。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-4.jpg" alt="細胞功能異常與疾病" /></figure>
<p>引發細胞功能異常的原因多種多樣，常見的幾類包括：</p>
<p><strong>遺傳因素</strong><br>基因突變或染色體結構異常會直接干擾細胞的正常運作，可能引發某些遺傳性疾病，例如囊性纖維化、血友病等。</p>
<p><strong>環境影響</strong><br>化學污染、輻射、病毒等環境因素會對細胞造成不同程度的損害。比如，長期暴露於苯、甲醛等有害物質環境中，會顯著增加白血病等血液類疾病的風險；而長期處於高輻射環境中，則可能提高癌症的發生概率。</p>
<p><strong>不良生活習慣</strong><br>吸煙、酗酒、暴飲暴食、缺乏運動等不健康的生活方式，會導致細胞代謝系統紊亂。例如，吸煙會嚴重破壞肺部細胞結構，是誘發肺癌的主要風險因素之一。</p>
<p><strong>營養缺乏與毒素侵害</strong><br>如果細胞無法獲得充足的營養物質，或被毒性物質侵襲，也會導致細胞功能下降，從而波及器官與組織的健康，甚至引發相關病變。</p>
<p>當這些因素持續作用於細胞時，可能會引起嚴重的組織器官損傷，進一步發展成各種疾病，如癌症、心腦血管疾病、神經系統疾病（如阿爾茨海默病、帕金森病），以及免疫系統相關疾病（如自身免疫病、免疫缺陷症）等。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-5.jpg" alt="免疫系統與細胞健康" /></figure>
<h3>四、免疫系統對細胞健康的重要性</h3>
<p>免疫系統在維持人體健康的過程中扮演着核心角色，特別是在細胞的修復、清除和再生等方面，依靠其免疫監測、免疫防禦和自我調節等機制，起到穩定內部環境、保障系統平衡的關鍵作用。</p>
<ol>
<li>調控自身免疫狀態，增強身體的自我修復與抗病能力；</li>
<li>有效降低疾病的發生率，守護各組織部位的正常運作；</li>
<li>精準清除異常細胞或腫瘤細胞，防範癌症的發生與發展；</li>
<li>及時剔除老化或受損細胞，促進新細胞生成，延緩衰老進程。</li>
</ol>
<p>總的來説，細胞的健康是人體健康的根本支撐。與機器零件不同，人體細胞和組織器官一旦受損，無法輕易替換，恢復過程漫長且複雜，不僅需要大量的時間、金錢與精力，還可能伴隨着長久的病痛折磨。</p>
<h3>結語</h3>
<p>因此，預防永遠優於治療。在細胞層面的問題尚未進一步擴散前及時干預，能有效阻止組織器官的病變發展。唯有讓身體重新具備強大的自我修復與再生能力，才能真正實現延緩衰老、保持活力，邁向高質量、健康的人生。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>地球上的绝大多数生物，都是由细胞（cell）构成。细胞，是生命存在的基本单位。</p>
<p>人类属于多细胞生物，是由数以万亿计的细胞共同构成的复杂有机体。每一个细胞都拥有特定的结构与功能，彼此协同运作，完成维持生命所需的一切活动。</p>
<p>美国《纽约时报》畅销书《选择健康》中曾指出：「人类所有疾病的根源，其实都是细胞出了问题。」</p>
<p>在人体内，细胞每天都在进行新陈代谢——不断更新、衰老、受损，甚至可能发生癌变。此时，身体自带的「自我修复与净化」机制会启动，以维持健康平衡。然而，如果这些受损细胞没有得到及时修复，衰老的细胞未能被替换，病变细胞未被有效抑制，它们就会逐渐失去活力或进入休眠状态，进而导致器官功能减弱，免疫力下降，疾病也就随之而来。</p>
<p>因此，疾病的恢复过程，本质上就是修复和替代这些老化、受损或病变的细胞。通过激活细胞功能、增强再生能力，不仅能延缓衰老，还能加速康复、提升健康水平。</p>
<h3>一、细胞的主要功能</h3>
<p><strong>1. 构建生命结构</strong><br>细胞是构成所有生物体的基本单位。它们通过彼此连接，形成各种组织和器官，如心脏、大脑、肝脏、肺部、皮肤、肠胃、神经系统与肌肉等，不仅构成了生物的形态，也为生命活动提供支撑。</p>
<p><strong>2. 参与生命代谢</strong><br>细胞通过各种代谢反应获取能量和必要的物质，并参与有机物的合成、分解与转化，包括蛋白质的制造、碳水化合物与脂肪的代谢等，以保证生物体维持正常运作。</p>
<p><strong>3. 支持生长与修复</strong><br>生物的生长和发育依赖于细胞的分裂与扩增。当组织遭受损伤或创伤时，细胞会通过增殖促进创口愈合与组织再生，从而帮助身体恢复原有结构与功能。</p>
<p><strong>4. 传承遗传信息</strong><br>细胞通过 DNA 的复制、转录和翻译过程完成遗传信息的传递，调控蛋白质的合成与表达，进而决定细胞乃至整个生物体的特征、功能与发展轨迹。</p>
<p><strong>5. 执行免疫防御功能</strong><br>特定类型的细胞，如淋巴细胞、巨噬细胞和中性粒细胞，具备识别并消灭外来病原体（如细菌、病毒、寄生虫等）的能力，从而保护机体免受感染，维护身体健康。</p>
<p><strong>6. 完成生殖繁育</strong><br>细胞还承担着生殖的任务。例如，精子与卵子结合形成受精卵后，通过连续的细胞分裂与分化，逐步发育为一个新的生命个体，完成生命的延续过程。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-2.jpg" alt="细胞主要功能示意" /></figure>
<h3>二、细胞如何维持自身内稳态</h3>
<p>健康状态下的细胞依靠多种生理机制来保持其内部环境的稳定性，从而确保正常功能的持续运作：</p>
<p><strong>自噬机制</strong><br>细胞通过自噬作用清除受损的细胞器及多余或变性的蛋白质，防止毒性堆积，维持细胞内环境的平衡与功能完整性。</p>
<p><strong>程序性凋亡</strong><br>当细胞受到不可逆损伤或发生异常时，会启动凋亡程序，有序地完成自我清除，避免病变细胞扩散，维护整体组织健康。</p>
<p><strong>DNA 修复系统</strong><br>细胞具备完善的 DNA 修复机制，可修复遗传物质中的损伤，防止突变累积，从源头上阻断疾病的发展。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-3.png" alt="细胞内稳态与修复机制" /></figure>
<h3>三、细胞功能异常引发的组织与器官疾病</h3>
<p>当细胞遭遇外界环境干扰，或其自身调控机制发生紊乱时，可能导致细胞功能紊乱，如分裂失控、新陈代谢障碍或免疫系统紊乱等。这些变化不仅影响个别细胞，还会连锁影响周围组织乃至整个器官系统，最终诱发各种疾病。以下是几个典型案例：</p>
<ul>
<li><strong>感冒</strong>：病毒侵入呼吸道细胞，引发免疫系统快速响应，启动防御机制，从而出现发热、流涕等症状。</li>
<li><strong>糖尿病</strong>：胰岛细胞功能受损，胰岛素分泌减少，导致细胞无法有效吸收利用葡萄糖，血糖浓度升高。</li>
<li><strong>高血压</strong>：血管内壁出现病变或堵塞，血管平滑肌细胞持续收缩，引起血管紧张度升高，血流压力上升。</li>
<li><strong>类风湿关节炎</strong>：属于自身免疫性疾病，免疫细胞错误识别自身关节组织为「异物」，持续攻击，导致炎症与关节损伤。</li>
<li><strong>哮喘</strong>：呼吸道上皮细胞对过敏原过度敏感，发生强烈反应，使气道变窄，引起咳嗽、喘息和呼吸困难。</li>
<li><strong>贫血</strong>：体内红细胞数量减少，导致氧气运输能力下降，表现为乏力、头晕等典型症状。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-4.jpg" alt="细胞功能异常与疾病" /></figure>
<p>引发细胞功能异常的原因多种多样，常见的几类包括：</p>
<p><strong>遗传因素</strong><br>基因突变或染色体结构异常会直接干扰细胞的正常运作，可能引发某些遗传性疾病，例如囊性纤维化、血友病等。</p>
<p><strong>环境影响</strong><br>化学污染、辐射、病毒等环境因素会对细胞造成不同程度的损害。比如，长期暴露于苯、甲醛等有害物质环境中，会显著增加白血病等血液类疾病的风险；而长期处于高辐射环境中，则可能提高癌症的发生概率。</p>
<p><strong>不良生活习惯</strong><br>吸烟、酗酒、暴饮暴食、缺乏运动等不健康的生活方式，会导致细胞代谢系统紊乱。例如，吸烟会严重破坏肺部细胞结构，是诱发肺癌的主要风险因素之一。</p>
<p><strong>营养缺乏与毒素侵害</strong><br>如果细胞无法获得充足的营养物质，或被毒性物质侵袭，也会导致细胞功能下降，从而波及器官与组织的健康，甚至引发相关病变。</p>
<p>当这些因素持续作用于细胞时，可能会引起严重的组织器官损伤，进一步发展成各种疾病，如癌症、心脑血管疾病、神经系统疾病（如阿尔茨海默病、帕金森病），以及免疫系统相关疾病（如自身免疫病、免疫缺陷症）等。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-5.jpg" alt="免疫系统与细胞健康" /></figure>
<h3>四、免疫系统对细胞健康的重要性</h3>
<p>免疫系统在维持人体健康的过程中扮演着核心角色，特别是在细胞的修复、清除和再生等方面，依靠其免疫监测、免疫防御和自我调节等机制，起到稳定内部环境、保障系统平衡的关键作用。</p>
<ol>
<li>调控自身免疫状态，增强身体的自我修复与抗病能力；</li>
<li>有效降低疾病的发生率，守护各组织部位的正常运作；</li>
<li>精准清除异常细胞或肿瘤细胞，防范癌症的发生与发展；</li>
<li>及时剔除老化或受损细胞，促进新细胞生成，延缓衰老进程。</li>
</ol>
<p>总的来说，细胞的健康是人体健康的根本支撑。与机器零件不同，人体细胞和组织器官一旦受损，无法轻易替换，恢复过程漫长且复杂，不仅需要大量的时间、金钱与精力，还可能伴随着长久的病痛折磨。</p>
<h3>结语</h3>
<p>因此，预防永远优于治疗。在细胞层面的问题尚未进一步扩散前及时干预，能有效阻止组织器官的病变发展。唯有让身体重新具备强大的自我修复与再生能力，才能真正实现延缓衰老、保持活力，迈向高质量、健康的人生。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>The vast majority of living things on Earth are made of cells. The cell is the basic unit of life.</p>
<p>Humans are multicellular organisms: trillions of cells form a complex whole. Each cell has its own structure and function, and they work together to carry out everything life requires.</p>
<p>The New York Times bestseller <em>Choose Health</em> put it this way: “The root of all human disease is, in fact, that something has gone wrong with the cell.”</p>
<p>Inside the body, cells turn over every day — renewing, ageing, becoming damaged, and in some cases turning cancerous. The body’s own “self-repair and clearance” systems then start, to keep a healthy balance. If damaged cells are not repaired in time, aged cells are not replaced, and diseased cells are not held in check, they gradually lose vitality or go dormant. Organ function weakens, immunity falls, and illness follows.</p>
<p>Recovery from disease is, at root, repairing and replacing those aged, damaged or diseased cells. Activating cell function and strengthening regenerative capacity can slow ageing, speed recovery and raise the level of health.</p>
<h3>1. The main functions of the cell</h3>
<p><strong>1. Building the structure of life</strong><br>Cells are the basic units of every living organism. Linked together they form tissues and organs — heart, brain, liver, lungs, skin, gut, nervous system, muscle and more — giving the body its form and supporting the activities of life.</p>
<p><strong>2. Taking part in metabolism</strong><br>Through metabolic reactions, cells obtain energy and the substances they need, and take part in the synthesis, breakdown and conversion of organic compounds, including protein production and the metabolism of carbohydrates and fats, so that the organism can keep working normally.</p>
<p><strong>3. Supporting growth and repair</strong><br>Growth and development depend on cell division and expansion. When tissue is injured, cells proliferate to help wounds heal and tissue regenerate, restoring structure and function.</p>
<p><strong>4. Passing on genetic information</strong><br>Through DNA replication, transcription and translation, cells transmit genetic information, regulate protein synthesis and expression, and thereby determine the features, functions and developmental path of the cell and of the organism as a whole.</p>
<p><strong>5. Immune defence</strong><br>Certain cells — lymphocytes, macrophages and neutrophils among them — can recognise and destroy invading pathogens such as bacteria, viruses and parasites, protecting the body from infection and helping to keep it healthy.</p>
<p><strong>6. Reproduction</strong><br>Cells also carry out reproduction. After sperm and egg fuse to form a zygote, successive rounds of division and differentiation gradually produce a new individual, continuing the line of life.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-2.jpg" alt="Main functions of the cell" /></figure>
<h3>2. How cells maintain internal homeostasis</h3>
<p>In a healthy state, cells rely on several physiological mechanisms to keep their internal environment stable, so that normal function can continue:</p>
<p><strong>Autophagy</strong><br>Through autophagy, cells clear damaged organelles and surplus or denatured proteins, preventing toxic build-up and keeping the intracellular environment in balance and functionally intact.</p>
<p><strong>Programmed apoptosis</strong><br>When a cell is irreversibly damaged or becomes abnormal, it can start an apoptotic programme and clear itself in an orderly way, so that diseased cells do not spread and overall tissue health is protected.</p>
<p><strong>DNA repair</strong><br>Cells have well-developed DNA-repair systems that can mend damage in genetic material, prevent mutations from accumulating, and block disease at its source.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-3.png" alt="Cellular homeostasis and repair" /></figure>
<h3>3. When cell function fails: tissue and organ disease</h3>
<p>When cells are disturbed by the outside environment, or when their own control systems go awry, function can break down — uncontrolled division, metabolic failure, immune disorder and the like. The change does not stay in one cell: it can cascade through neighbouring tissue and whole organ systems, and eventually trigger disease. A few typical examples:</p>
<ul>
<li><strong>The common cold</strong>: a virus enters respiratory cells; the immune system responds quickly and defence mechanisms start, producing fever, a runny nose and similar symptoms.</li>
<li><strong>Diabetes</strong>: pancreatic islet cells are impaired and insulin secretion falls, so cells cannot take up and use glucose effectively, and blood glucose rises.</li>
<li><strong>Hypertension</strong>: the vessel wall becomes diseased or blocked; vascular smooth-muscle cells stay contracted, vessel tone rises and blood pressure goes up.</li>
<li><strong>Rheumatoid arthritis</strong>: an autoimmune disease in which immune cells misidentify joint tissue as “foreign” and keep attacking it, causing inflammation and joint damage.</li>
<li><strong>Asthma</strong>: airway epithelial cells over-react to allergens; the airway narrows, producing cough, wheeze and breathlessness.</li>
<li><strong>Anaemia</strong>: the number of red blood cells falls, oxygen transport declines, and typical symptoms include fatigue and dizziness.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-4.jpg" alt="Cell dysfunction and disease" /></figure>
<p>The causes of cell dysfunction are many. Common groups include:</p>
<p><strong>Genetics</strong><br>Gene mutations or chromosomal abnormalities can interfere directly with normal cell function and may cause inherited diseases such as cystic fibrosis and haemophilia.</p>
<p><strong>Environment</strong><br>Chemical pollution, radiation, viruses and other environmental factors can damage cells to different degrees. Long-term exposure to benzene, formaldehyde and similar substances markedly raises the risk of blood diseases such as leukaemia; long-term high radiation can raise the probability of cancer.</p>
<p><strong>Unhealthy habits</strong><br>Smoking, heavy drinking, binge eating and lack of exercise can disorder cell metabolism. Smoking, for example, seriously damages lung-cell structure and is one of the main risk factors for lung cancer.</p>
<p><strong>Nutrient shortage and toxins</strong><br>If cells cannot obtain enough nutrients, or are attacked by toxic substances, their function falls, which can then affect organs and tissues and even trigger related disease.</p>
<p>When these factors keep acting on cells, they may cause serious tissue and organ injury, and go on to diseases such as cancer, cardiovascular and cerebrovascular disease, neurological conditions (for example Alzheimer’s disease and Parkinson’s disease), and immune-related disorders (autoimmune disease, immunodeficiency and others).</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-2-5.jpg" alt="The immune system and cell health" /></figure>
<h3>4. Why the immune system matters for cell health</h3>
<p>The immune system plays a central role in keeping the body healthy, especially in cell repair, clearance and regeneration. Through immune surveillance, defence and self-regulation, it helps stabilise the internal environment and keep systems in balance.</p>
<ol>
<li>It regulates the autoimmune state and strengthens the body’s capacity to repair itself and resist disease;</li>
<li>It effectively lowers the incidence of illness and protects the normal working of tissues;</li>
<li>It clears abnormal or tumour cells with precision, helping to prevent cancer from starting and progressing;</li>
<li>It removes aged or damaged cells in time, promotes the generation of new cells, and slows ageing.</li>
</ol>
<p>In short, cell health is the fundamental support of human health. Unlike machine parts, cells, tissues and organs cannot be swapped out easily once they are damaged. Recovery is long and complex: it takes time, money and energy, and may come with lasting pain.</p>
<h3>Conclusion</h3>
<p>Prevention is always better than treatment. Intervening at the cellular level before the problem spreads further can stop tissue and organ disease from developing. Only when the body again has a strong capacity to repair and regenerate itself can ageing truly be slowed, vitality kept, and a high-quality, healthy life approached.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "35",
    slug: "35",
    section: "longevity",
    eyebrow: "Cartilage",
    cover: "/images/knowledge/longevity-3-1.png",
    image: "/images/knowledge/longevity-3-1.png",
    title: { "zh-HK": `一個月「復活」受傷軟骨！《NSR》：幹細胞「新組件」或將終結關節磨損`, "zh-CN": `一个月「复活」受伤软骨！《NSR》：干细胞「新组件」或将终结关节磨损`, en: `One Month to “Revive” Injured Cartilage: NSR Stem-Cell Assembly May Help End Joint Wear` },
    excerpt: { "zh-HK": `受損軟骨幾乎不能再生。《國家科學評論》報道：可注射 3D 幹細胞組裝體或可在一個月內接近完全結構恢復。`, "zh-CN": `受损软骨几乎不能再生。《国家科学评论》报道：可注射 3D 干细胞组装体或可在一个月内接近完全结构恢复。`, en: `Damaged cartilage barely regenerates. National Science Review reports an injectable 3D stem-cell assembly that may approach full structural recovery in one month.` },
    body: { "zh-HK": `<p>受損的軟骨不具有再生能力，這也是骨關節疾病難治癒的根本原因。《National Science Review》（《國家科學評論》，影響因子：17.275）上發表的一篇文章顯示，科學家們構築了一種可以注射到軟骨缺損部位的 3D 幹細胞組裝體，它可以在體外快速組裝並填充到缺損處，並促進幹細胞向軟骨分化，從而幫助極限軟骨缺損的修復。</p>
<p>關節軟骨可以減少骨組織之間的摩擦，起到一個平滑有彈性的緩衝作用，以減少不必要的震動和衝擊。</p>
<p>然而，軟骨卻幾乎沒有再生能力。隨着年齡增長，磨損不斷增加，骨頭之間長期相互摩擦，就會引起疼痛和炎症，最終導致關節退變，甚至喪失運動能力。</p>
<p>目前針對軟骨損傷的手術方法有限，且主要針對短期內的疼痛緩解，而幹細胞組織工程方法顯現出的快速修復軟骨組織的巨大潛力，給軟骨修復帶來了新機遇。</p>
<p>然而，幹細胞療法仍然存在一些關鍵障礙需要克服，比如損傷部位微環境中氧化應激和炎症的普遍存在，幹細胞在注射後經常發生凋亡等。</p>
<p>為了應對這些挑戰，由西北工業大學張秋禹教授、美國羅格斯大學 Ki-Bum Lee 教授等組織的一項研究，展示了用於先進 3D 幹細胞培養和置入的 3D IHI 納米支架模板幹細胞組裝系統的開發，通過機械支持、遞送生長因子、調節免疫反應和促進幹細胞在體內整合，推進幹細胞修復軟骨形成，具有明顯的優勢。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-2.png" alt="可注射混合無機納米支架作為快速幹細胞組裝模板用於軟骨修復" /><figcaption>可注射混合無機納米支架作為快速幹細胞組裝模板用於軟骨修復</figcaption></figure>
<p>該項研究發表於《國家科學評論》（National Science Review, NSR），引起了廣泛關注。</p>
<h3>一、幹細胞「新組件」使受損軟骨一個月接近完全結構恢復</h3>
<p>儘管在以往的幹細胞治療試驗中取得了不錯的成績，但幹細胞治療仍然有一些關鍵的障礙需要克服。</p>
<p>為了應對挑戰，在本項研究中，科學家們開發了一種基於 3D 可注射混合無機（IHI）納米支架的方法，該方法結合了無支架與有支架組織工程的優勢，以增強基於幹細胞的軟骨損傷治療。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-3.jpg" alt="使用 IHI 納米支架模板 3D 幹細胞組裝增強軟骨損傷的治療" /><figcaption>使用 IHI 納米支架模板 3D 幹細胞組裝增強軟骨損傷的治療</figcaption></figure>
<p>值得注意的是，3D-IHI 納米支架通過將幹細胞快速組裝成具有可控細胞間相互作用的 3D 組織，從而提高了幹細胞的存活率和成軟骨分化，並在整個 3D 組裝的幹細胞中均勻遞送軟骨形成因子。</p>
<p>該項研究中的可生物降解納米材料的加入不僅顯著加速了幹細胞在 3D 中的組裝，還將細胞–細胞和細胞–基質相互作用以及深層藥物（TGF-β3）遞送功能整合到 3D-IHI 納米支架中，用於在體外和體內有效調節 BMSCs 軟骨形成。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-4.jpg" alt="使用可生物降解的納米材料創建 3D-IHI 納米支架" /><figcaption>使用可生物降解的納米材料創建 3D-IHI 納米支架</figcaption></figure>
<p>並且，將幹細胞組裝的 3D-IHI 納米支架注射到兔子嚴重缺損模型中的受傷軟骨組織中，可顯著減少炎症並改善幹細胞存活和軟骨形成，從而促進軟骨再生和長期功能恢復。</p>
<p>3D-IHI 納米支架在體外和體內控制幹細胞命運方面的出色表現，表明這一治療平台在加速軟骨再生和各種其他低再生能力組織損傷方面具有巨大潛力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-5.jpg" alt="通過移植 3D-IHI 納米支架加速軟骨修復" /><figcaption>通過移植 3D-IHI 納米支架加速軟骨修復</figcaption></figure>
<p>當然，為了研究長期治療效果，研究者們還使用相同的實驗和對照條件，在治療後 1、2 個月和 3 個月分別進行細胞移植測定。結果都證明了關節軟骨缺損修復得到了顯著改善，同時減輕了骨關節炎的惡化。</p>
<p>值得注意的是，早在 1 個月時，研究人員就觀察到實驗組中受傷軟骨組織變得平滑，接近完全的結構恢復。</p>
<h3>二、幹細胞為骨關節炎帶來新機遇</h3>
<p>軟骨的損傷通常是毀滅性的，這主要是由於軟骨組織本身幾乎不具有再生能力，因此，軟骨一旦消耗殆盡，相關骨關節性疾病就很難治癒。</p>
<p>隨着再生醫學的發展，幹細胞技術的廣泛應用已經讓軟骨損傷的治療成為研究熱點，尤其是一些間充質幹細胞（MSC）的治療方法，甚至取得了可喜的成果。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-6.jpg" alt="間充質幹細胞治療骨關節炎的機制" /><figcaption>間充質幹細胞治療骨關節炎的機制</figcaption></figure>
<p>小小的幹細胞為何就有如此大的「神力」，能夠讓無法再治療的軟骨獲得重生呢？這主要還在於幹細胞本身所具有的特質。</p>
<p>首先，幹細胞具有多向分化潛能，在體內外特定的誘導條件下可以轉化為骨細胞、軟骨細胞，對受損骨組織直接進行修復。</p>
<p>其次，幹細胞具有旁分泌的功能，通過分泌多種有效因子，誘導幹細胞有效進行自身向軟骨細胞分化，還能通過對多條信號通路及細胞因子的調控來抑制軟骨細胞凋亡，抑制局部炎症進展，促進局部組織自我修復能力，達到干預目的。</p>
<p>最後，幹細胞還具有免疫調節的功能，包括分泌免疫抑制性細胞因子以及直接調節免疫細胞分化來調節免疫反應，從而抑制炎症反應。間充質幹細胞還可通過其表達的免疫調節因子來調節多種類型免疫細胞，從而達到抗炎的目的。</p>
<p>憑藉着這些功能，幹細胞在關節軟骨方面的臨牀應用也已經取得不錯的成績，而本項研究採用的 3D 幹細胞培養系統，更是將幹細胞技術發揮到了極致，甚至將開啓發育生物學、疾病建模和再生醫學上的新突破，為軟骨損傷類疾病帶來新的治癒機會。</p>
<h3>結語</h3>
<p>全世界關節炎患者有 3 億多人，而在亞洲，甚至每 6 個人中就有 1 人在一生的某個階段患上這種世界頭號殘疾性疾病。幹細胞再生醫學的出現並非偶然，而對幹細胞技術更深入的鑽研，也將為更多關節炎患者帶來福音。</p>
<p>參考文獻：Wang, S., et al. (2022) Injectable hybrid inorganic nanoscaffold as rapid stem cell assembly template for cartilage repair. <em>National Science Review</em>. doi.org/10.1093/nsr/nwac037</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>受损的软骨不具有再生能力，这也是骨关节疾病难治愈的根本原因。《National Science Review》（《国家科学评论》，影响因子：17.275）上发表的一篇文章显示，科学家们构筑了一种可以注射到软骨缺损部位的 3D 干细胞组装体，它可以在体外快速组装并填充到缺损处，并促进干细胞向软骨分化，从而帮助极限软骨缺损的修复。</p>
<p>关节软骨可以减少骨组织之间的摩擦，起到一个平滑有弹性的缓冲作用，以减少不必要的震动和冲击。</p>
<p>然而，软骨却几乎没有再生能力。随着年龄增长，磨损不断增加，骨头之间长期相互摩擦，就会引起疼痛和炎症，最终导致关节退变，甚至丧失运动能力。</p>
<p>目前针对软骨损伤的手术方法有限，且主要针对短期内的疼痛缓解，而干细胞组织工程方法显现出的快速修复软骨组织的巨大潜力，给软骨修复带来了新机遇。</p>
<p>然而，干细胞疗法仍然存在一些关键障碍需要克服，比如损伤部位微环境中氧化应激和炎症的普遍存在，干细胞在注射后经常发生凋亡等。</p>
<p>为了应对这些挑战，由西北工业大学张秋禹教授、美国罗格斯大学 Ki-Bum Lee 教授等组织的一项研究，展示了用于先进 3D 干细胞培养和置入的 3D IHI 纳米支架模板干细胞组装系统的开发，通过机械支持、递送生长因子、调节免疫反应和促进干细胞在体内整合，推进干细胞修复软骨形成，具有明显的优势。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-2.png" alt="可注射混合无机纳米支架作为快速干细胞组装模板用于软骨修复" /><figcaption>可注射混合无机纳米支架作为快速干细胞组装模板用于软骨修复</figcaption></figure>
<p>该项研究发表于《国家科学评论》（National Science Review, NSR），引起了广泛关注。</p>
<h3>一、干细胞「新组件」使受损软骨一个月接近完全结构恢复</h3>
<p>尽管在以往的干细胞治疗试验中取得了不错的成绩，但干细胞治疗仍然有一些关键的障碍需要克服。</p>
<p>为了应对挑战，在本项研究中，科学家们开发了一种基于 3D 可注射混合无机（IHI）纳米支架的方法，该方法结合了无支架与有支架组织工程的优势，以增强基于干细胞的软骨损伤治疗。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-3.jpg" alt="使用 IHI 纳米支架模板 3D 干细胞组装增强软骨损伤的治疗" /><figcaption>使用 IHI 纳米支架模板 3D 干细胞组装增强软骨损伤的治疗</figcaption></figure>
<p>值得注意的是，3D-IHI 纳米支架通过将干细胞快速组装成具有可控细胞间相互作用的 3D 组织，从而提高了干细胞的存活率和成软骨分化，并在整个 3D 组装的干细胞中均匀递送软骨形成因子。</p>
<p>该项研究中的可生物降解纳米材料的加入不仅显著加速了干细胞在 3D 中的组装，还将细胞–细胞和细胞–基质相互作用以及深层药物（TGF-β3）递送功能整合到 3D-IHI 纳米支架中，用于在体外和体内有效调节 BMSCs 软骨形成。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-4.jpg" alt="使用可生物降解的纳米材料创建 3D-IHI 纳米支架" /><figcaption>使用可生物降解的纳米材料创建 3D-IHI 纳米支架</figcaption></figure>
<p>并且，将干细胞组装的 3D-IHI 纳米支架注射到兔子严重缺损模型中的受伤软骨组织中，可显著减少炎症并改善干细胞存活和软骨形成，从而促进软骨再生和长期功能恢复。</p>
<p>3D-IHI 纳米支架在体外和体内控制干细胞命运方面的出色表现，表明这一治疗平台在加速软骨再生和各种其他低再生能力组织损伤方面具有巨大潜力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-5.jpg" alt="通过移植 3D-IHI 纳米支架加速软骨修复" /><figcaption>通过移植 3D-IHI 纳米支架加速软骨修复</figcaption></figure>
<p>当然，为了研究长期治疗效果，研究者们还使用相同的实验和对照条件，在治疗后 1、2 个月和 3 个月分别进行细胞移植测定。结果都证明了关节软骨缺损修复得到了显著改善，同时减轻了骨关节炎的恶化。</p>
<p>值得注意的是，早在 1 个月时，研究人员就观察到实验组中受伤软骨组织变得平滑，接近完全的结构恢复。</p>
<h3>二、干细胞为骨关节炎带来新机遇</h3>
<p>软骨的损伤通常是毁灭性的，这主要是由于软骨组织本身几乎不具有再生能力，因此，软骨一旦消耗殆尽，相关骨关节性疾病就很难治愈。</p>
<p>随着再生医学的发展，干细胞技术的广泛应用已经让软骨损伤的治疗成为研究热点，尤其是一些间充质干细胞（MSC）的治疗方法，甚至取得了可喜的成果。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-6.jpg" alt="间充质干细胞治疗骨关节炎的机制" /><figcaption>间充质干细胞治疗骨关节炎的机制</figcaption></figure>
<p>小小的干细胞为何就有如此大的「神力」，能够让无法再治疗的软骨获得重生呢？这主要还在于干细胞本身所具有的特质。</p>
<p>首先，干细胞具有多向分化潜能，在体内外特定的诱导条件下可以转化为骨细胞、软骨细胞，对受损骨组织直接进行修复。</p>
<p>其次，干细胞具有旁分泌的功能，通过分泌多种有效因子，诱导干细胞有效进行自身向软骨细胞分化，还能通过对多条信号通路及细胞因子的调控来抑制软骨细胞凋亡，抑制局部炎症进展，促进局部组织自我修复能力，达到干预目的。</p>
<p>最后，干细胞还具有免疫调节的功能，包括分泌免疫抑制性细胞因子以及直接调节免疫细胞分化来调节免疫反应，从而抑制炎症反应。间充质干细胞还可通过其表达的免疫调节因子来调节多种类型免疫细胞，从而达到抗炎的目的。</p>
<p>凭借着这些功能，干细胞在关节软骨方面的临床应用也已经取得不错的成绩，而本项研究采用的 3D 干细胞培养系统，更是将干细胞技术发挥到了极致，甚至将开启发育生物学、疾病建模和再生医学上的新突破，为软骨损伤类疾病带来新的治愈机会。</p>
<h3>结语</h3>
<p>全世界关节炎患者有 3 亿多人，而在亚洲，甚至每 6 个人中就有 1 人在一生的某个阶段患上这种世界头号残疾性疾病。干细胞再生医学的出现并非偶然，而对干细胞技术更深入的钻研，也将为更多关节炎患者带来福音。</p>
<p>参考文献：Wang, S., et al. (2022) Injectable hybrid inorganic nanoscaffold as rapid stem cell assembly template for cartilage repair. <em>National Science Review</em>. doi.org/10.1093/nsr/nwac037</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Damaged cartilage has no regenerative capacity — the fundamental reason bone-and-joint disease is so hard to cure. A paper in <em>National Science Review</em> (impact factor 17.275) reports that scientists built a 3D stem-cell assembly that can be injected into a cartilage defect. It assembles rapidly in vitro, fills the defect and promotes stem-cell differentiation towards cartilage, helping to repair even extreme cartilage loss.</p>
<p>Articular cartilage reduces friction between bone, acting as a smooth, elastic buffer that cuts unnecessary vibration and impact.</p>
<p>Cartilage, however, has almost no ability to regenerate. As age and wear increase, bone rubs on bone for long periods, causing pain and inflammation, and eventually joint degeneration — even loss of the ability to move.</p>
<p>Surgical options for cartilage injury are limited, and mostly aim at short-term pain relief. Stem-cell tissue engineering, by contrast, has shown great potential for rapid cartilage repair, opening a new opportunity.</p>
<p>Stem-cell therapy still has key obstacles to overcome: oxidative stress and inflammation are common in the injured microenvironment, and stem cells often undergo apoptosis after injection.</p>
<p>To meet these challenges, a team led by Professor Zhang Qiuyu of Northwestern Polytechnical University and Professor Ki-Bum Lee of Rutgers University developed a 3D IHI nanoscaffold-templated stem-cell assembly system for advanced 3D culture and implantation. Through mechanical support, growth-factor delivery, immune modulation and better in-vivo integration, it advances stem-cell repair of cartilage with clear advantages.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-2.png" alt="Injectable hybrid inorganic nanoscaffold as a rapid stem-cell assembly template for cartilage repair" /><figcaption>Injectable hybrid inorganic nanoscaffold as a rapid stem-cell assembly template for cartilage repair</figcaption></figure>
<p>The study was published in <em>National Science Review</em> (NSR) and attracted wide attention.</p>
<h3>1. A stem-cell “new assembly” brings injured cartilage close to full structural recovery in one month</h3>
<p>Previous stem-cell trials have posted encouraging results, but key obstacles remain.</p>
<p>In this study, scientists developed a method based on a 3D injectable hybrid inorganic (IHI) nanoscaffold, combining the advantages of scaffold-free and scaffold-based tissue engineering to strengthen stem-cell treatment of cartilage injury.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-3.jpg" alt="3D stem-cell assembly on an IHI nanoscaffold template to enhance treatment of cartilage injury" /><figcaption>3D stem-cell assembly on an IHI nanoscaffold template to enhance treatment of cartilage injury</figcaption></figure>
<p>Notably, the 3D-IHI nanoscaffold rapidly assembles stem cells into 3D tissue with controllable cell–cell interaction, raising survival and chondrogenic differentiation, and delivering chondrogenic factors evenly throughout the assembled cells.</p>
<p>The addition of biodegradable nanomaterials not only markedly sped up 3D assembly, but also integrated cell–cell and cell–matrix interaction and deep delivery of a drug (TGF-β3) into the 3D-IHI nanoscaffold, to regulate BMSC chondrogenesis effectively in vitro and in vivo.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-4.jpg" alt="Creating a 3D-IHI nanoscaffold with biodegradable nanomaterials" /><figcaption>Creating a 3D-IHI nanoscaffold with biodegradable nanomaterials</figcaption></figure>
<p>Injecting the stem-cell-assembled 3D-IHI nanoscaffold into injured cartilage in a rabbit model of severe defect markedly reduced inflammation and improved stem-cell survival and chondrogenesis, promoting cartilage regeneration and long-term functional recovery.</p>
<p>The platform’s strong performance in controlling stem-cell fate in vitro and in vivo suggests great potential for accelerating cartilage regeneration and for other tissues with low regenerative capacity.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-5.jpg" alt="Accelerating cartilage repair by transplanting a 3D-IHI nanoscaffold" /><figcaption>Accelerating cartilage repair by transplanting a 3D-IHI nanoscaffold</figcaption></figure>
<p>To study longer-term effect, the researchers also ran cell-transplantation assays at 1, 2 and 3 months after treatment under the same experimental and control conditions. All time points showed significant improvement in articular-cartilage defect repair, and a slowing of osteoarthritis progression.</p>
<p>Notably, as early as one month, the injured cartilage in the experimental group had become smooth, approaching complete structural recovery.</p>
<h3>2. Stem cells open a new opportunity for osteoarthritis</h3>
<p>Cartilage injury is often devastating, mainly because the tissue itself has almost no regenerative capacity. Once cartilage is worn away, related bone-and-joint disease is very hard to cure.</p>
<p>With the rise of regenerative medicine, stem-cell technology has made cartilage repair a research focus. Some mesenchymal stem-cell (MSC) approaches have already produced encouraging results.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-3-6.jpg" alt="Mechanisms of mesenchymal stem-cell treatment of osteoarthritis" /><figcaption>Mechanisms of mesenchymal stem-cell treatment of osteoarthritis</figcaption></figure>
<p>Why do such small cells have such “power”, enough to give cartilage once thought untreatable a chance to grow again? The answer lies in the properties of stem cells themselves.</p>
<p>First, stem cells have multilineage potential. Under specific inductive conditions in vitro or in vivo they can become osteocytes or chondrocytes, repairing damaged bone tissue directly.</p>
<p>Second, they have a paracrine function. By secreting many active factors they can induce their own differentiation towards chondrocytes, and by regulating multiple signalling pathways and cytokines they can inhibit chondrocyte apoptosis, slow local inflammation and promote the tissue’s own repair.</p>
<p>Third, they modulate immunity — secreting immunosuppressive cytokines and directly regulating immune-cell differentiation, thereby suppressing inflammation. Mesenchymal stem cells can also act on several types of immune cell through the immunomodulatory factors they express, to an anti-inflammatory end.</p>
<p>With these functions, stem cells have already posted solid clinical results in articular cartilage. The 3D culture system in this study takes the technology further still, and may open new ground in developmental biology, disease modelling and regenerative medicine — and a new chance of cure for cartilage-injury disease.</p>
<h3>Conclusion</h3>
<p>More than 300 million people worldwide live with arthritis. In Asia, as many as one in six people will have this leading cause of disability at some stage of life. The arrival of stem-cell regenerative medicine is not accidental; deeper work on the technology will also bring hope to more patients with arthritis.</p>
<p>Reference: Wang, S., et al. (2022) Injectable hybrid inorganic nanoscaffold as rapid stem cell assembly template for cartilage repair. <em>National Science Review</em>. doi.org/10.1093/nsr/nwac037</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "36",
    slug: "36",
    section: "longevity",
    eyebrow: "Clinical Trials",
    cover: "/images/knowledge/longevity-4-1.png",
    image: "/images/knowledge/longevity-4-1.png",
    title: { "zh-HK": `《自然醫學》盤點：4 項細胞療法成為影響 2026 年醫學走向的關鍵臨牀試驗`, "zh-CN": `《自然医学》盘点：4 项细胞疗法成为影响 2026 年医学走向的关键临床试验`, en: `Nature Medicine: Four Cell Therapies Among Trials That Will Shape Medicine in 2026` },
    excerpt: { "zh-HK": `《自然醫學》遴選的 11 項關鍵試驗中，細胞與幹細胞相關佔 4 項。細胞治療正從「概念很強」走向「證據更硬」。`, "zh-CN": `《自然医学》遴选的 11 项关键试验中，细胞与干细胞相关占 4 项。细胞治疗正从「概念很强」走向「证据更硬」。`, en: `Of 11 pivotal trials chosen by Nature Medicine, four involve cells or stem cells. Cell therapy is moving from strong concept towards harder evidence.` },
    body: { "zh-HK": `<p>2025 年 12 月 15 日，《自然醫學》雜誌發佈年終觀察文章《Eleven clinical trials that will shape medicine in 2026》。文章彙集多位頂尖研究者的判斷，從不同賽道遴選出 11 項被認為將影響 2026 年醫學走向的關鍵臨牀試驗。</p>
<p>其中，細胞與幹細胞（含細胞 + 基因編輯）相關項目佔 4 項，約佔三分之一（約 36%）。把這 4 項單獨拎出來看，趨勢會更清晰：細胞治療正在從「概念很強」，走向「證據更硬」——用更標準的試驗設計、更明確的臨牀終點，把療效與可複製性寫進數據裏。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-2.png" alt="細胞療法在 11 項關鍵試驗中約佔三分之一" /></figure>
<h3>一、mRNA CAR-T 走進自身免疫：全身型重症肌無力</h3>
<p>2026 年如果在隨機、雙盲、安慰劑對照的 3 期裏仍能穩定復現信號，CAR-T 在自身免疫病上的「工程化路徑」就會被寫實。</p>
<p><strong>它是什麼？</strong><br>Descartes-08 屬於 mRNA CAR-T 思路：用 mRNA 讓 T 細胞「臨時上崗」，而不是永久改造，核心目標是讓免疫清除更可控、更可重複。</p>
<p><strong>推進到哪一步？</strong><br>2b 期已有公開更新；更關鍵的是 3 期 AURORA 已在登記系統中列出（面向成人全身型重症肌無力）。</p>
<p><strong>為什麼值得盯？</strong><br>自身免疫病的核心矛盾常常是「長期抑制」與「長期副作用」並存。mRNA CAR-T 如果能把「深緩解」做成可復現的結果，它給出的不只是一個新療法，而是一種新的免疫治療形態：短程介入、可控改造、追求更長時間的症狀穩定。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-3.png" alt="mRNA CAR-T 與全身型重症肌無力" /></figure>
<h3>二、先導編輯自體造血幹細胞：慢性肉芽腫病（CGD）</h3>
<p>2026 年關注點是：編輯準確性、造血重建穩定性、臨牀獲益持續性，能否在更多病例和更長隨訪中站得住。</p>
<p><strong>它是什麼？</strong><br>PM359 是「基因編輯 + 細胞回輸」的組合：取出患者自體 CD34+ 造血幹細胞，用先導編輯（prime editing）在體外糾正缺陷後再回輸體內，目標是獲得長期的免疫功能恢復，同時避免異體移植帶來的配型與排斥問題。</p>
<p><strong>推進到哪一步？</strong><br>臨牀登記為 1/2 期研究。同時，NEJM 已發表該方向的早期人體數據，為「先導編輯進入臨牀並給出功能恢復證據」提供了高質量背書。</p>
<p><strong>為什麼值得盯？</strong><br>CGD 是罕見病，但這項研究的意義更像「方法學裏程碑」：如果先導編輯能夠形成可複製的「糾錯—重建—獲益」閉環，它就可能從單點成功，走向一類可遷移的平台能力（更多遺傳缺陷、更多細胞類型）。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-4.png" alt="先導編輯自體造血幹細胞與慢性肉芽腫病" /></figure>
<h3>三、現貨型細胞免疫衝刺硬終點：轉移性乳腺癌</h3>
<p>2026 年關注點是：以總生存期（OS）為主要終點的 3 期結果，能否給現貨型細胞免疫療法一個清晰、可對照的臨牀座標。</p>
<p><strong>它是什麼？</strong><br>Bria-IMT 走的是現貨型細胞免疫路線：產品並非「為每位患者單獨做一份」，而是以更標準化的供給方式提供；並通過攜帶多抗原信息、與免疫檢查點抑制劑聯用，試圖把抗腫瘤免疫「喚醒並組織起來」。</p>
<p><strong>推進到哪一步？</strong><br>3 期 BRIA-ABC 已登記，主要觀察能否延長總生存期。該試驗招募的患者包括所有乳腺癌亞型，並涵蓋腦轉移患者或多次治療失敗的患者。</p>
<p><strong>為什麼值得盯？</strong><br>很多細胞治療的難點不在「能不能做」，而在「能不能規模化交付」。現貨型路線如果能在 OS 這種硬終點上跑出優勢，行業會更容易把它當作可複製產品，而不是小範圍嘗試。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-5.png" alt="現貨型細胞免疫與轉移性乳腺癌" /></figure>
<h3>四、自體骨髓細胞 + 鼻腔遞送探索：神經系統疾病與損傷</h3>
<p>2026 年關注點：能否把「主觀改善」沉澱為更統一的量表與更客觀的終點，讓神經修復從敍事走向證據形態升級。</p>
<p><strong>它是什麼？</strong><br>NEST 使用自體骨髓來源細胞，採用靜脈 + 鼻腔的組合遞送方式，探索其對神經功能的影響與潛在修復價值。</p>
<p><strong>推進到哪一步？</strong><br>在登記系統中屬於探索性研究路徑。該試驗已經治療了約 200 名患者，很多患者在接受治療後報告症狀改善。</p>
<p><strong>為什麼值得盯？</strong><br>神經系統疾病的臨牀缺口極大，也最容易被「希望敍事」放大。真正決定它能否往前走的，是兩件更具體的事：遞送是否形成可達，以及終點是否足夠統一、足夠可比較。2026 年更像一個分水嶺：它是否能用更結構化的數據，把探索信號變成可討論的證據。</p>
<p>研究人員表示，這些結果有望為肌萎縮側索硬化症（ALS）、阿爾茨海默病、帕金森病和腦卒中等疾病患者帶來希望和生活質量的提升。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-6.png" alt="自體骨髓細胞與鼻腔遞送探索神經系統疾病" /></figure>
<h3>五、四條路線，爭奪的是「可交付的證據」</h3>
<p>把這 4 項放在一起看，會發現它們在做同一件事：讓細胞療法更像現代醫學裏的「工程產品」，而不是隻靠個案敍事推動。</p>
<p>共同的趨勢很集中：</p>
<ul>
<li><strong>終點更硬</strong>：OS、功能性指標、標準化量表</li>
<li><strong>路徑更工程化</strong>：可控改造、現貨供給、遞送可達</li>
<li><strong>證據更可複製</strong>：更規範的試驗設計、更明確的讀出節點</li>
</ul>
<h3>結語</h3>
<p>因此，2026 年最值得看的，不是「誰更像奇蹟」，而是這些路線能否把療效與可復現性，寫進更嚴格、更可對照的數據裏。</p>
<p>信息來源：Mike May. Eleven clinical trials that will shape medicine in 2026（Published: 15 Dec 2025），BriaCell Therapeutics Corp.</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>2025 年 12 月 15 日，《自然医学》杂志发布年终观察文章《Eleven clinical trials that will shape medicine in 2026》。文章汇集多位顶尖研究者的判断，从不同赛道遴选出 11 项被认为将影响 2026 年医学走向的关键临床试验。</p>
<p>其中，细胞与干细胞（含细胞 + 基因编辑）相关项目占 4 项，约占三分之一（约 36%）。把这 4 项单独拎出来看，趋势会更清晰：细胞治疗正在从「概念很强」，走向「证据更硬」——用更标准的试验设计、更明确的临床终点，把疗效与可复制性写进数据里。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-2.png" alt="细胞疗法在 11 项关键试验中约占三分之一" /></figure>
<h3>一、mRNA CAR-T 走进自身免疫：全身型重症肌无力</h3>
<p>2026 年如果在随机、双盲、安慰剂对照的 3 期里仍能稳定复现信号，CAR-T 在自身免疫病上的「工程化路径」就会被写实。</p>
<p><strong>它是什么？</strong><br>Descartes-08 属于 mRNA CAR-T 思路：用 mRNA 让 T 细胞「临时上岗」，而不是永久改造，核心目标是让免疫清除更可控、更可重复。</p>
<p><strong>推进到哪一步？</strong><br>2b 期已有公开更新；更关键的是 3 期 AURORA 已在登记系统中列出（面向成人全身型重症肌无力）。</p>
<p><strong>为什么值得盯？</strong><br>自身免疫病的核心矛盾常常是「长期抑制」与「长期副作用」并存。mRNA CAR-T 如果能把「深缓解」做成可复现的结果，它给出的不只是一个新疗法，而是一种新的免疫治疗形态：短程介入、可控改造、追求更长时间的症状稳定。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-3.png" alt="mRNA CAR-T 与全身型重症肌无力" /></figure>
<h3>二、先导编辑自体造血干细胞：慢性肉芽肿病（CGD）</h3>
<p>2026 年关注点是：编辑准确性、造血重建稳定性、临床获益持续性，能否在更多病例和更长随访中站得住。</p>
<p><strong>它是什么？</strong><br>PM359 是「基因编辑 + 细胞回输」的组合：取出患者自体 CD34+ 造血干细胞，用先导编辑（prime editing）在体外纠正缺陷后再回输体内，目标是获得长期的免疫功能恢复，同时避免异体移植带来的配型与排斥问题。</p>
<p><strong>推进到哪一步？</strong><br>临床登记为 1/2 期研究。同时，NEJM 已发表该方向的早期人体数据，为「先导编辑进入临床并给出功能恢复证据」提供了高质量背书。</p>
<p><strong>为什么值得盯？</strong><br>CGD 是罕见病，但这项研究的意义更像「方法学里程碑」：如果先导编辑能够形成可复制的「纠错—重建—获益」闭环，它就可能从单点成功，走向一类可迁移的平台能力（更多遗传缺陷、更多细胞类型）。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-4.png" alt="先导编辑自体造血干细胞与慢性肉芽肿病" /></figure>
<h3>三、现货型细胞免疫冲刺硬终点：转移性乳腺癌</h3>
<p>2026 年关注点是：以总生存期（OS）为主要终点的 3 期结果，能否给现货型细胞免疫疗法一个清晰、可对照的临床坐标。</p>
<p><strong>它是什么？</strong><br>Bria-IMT 走的是现货型细胞免疫路线：产品并非「为每位患者单独做一份」，而是以更标准化的供给方式提供；并通过携带多抗原信息、与免疫检查点抑制剂联用，试图把抗肿瘤免疫「唤醒并组织起来」。</p>
<p><strong>推进到哪一步？</strong><br>3 期 BRIA-ABC 已登记，主要观察能否延长总生存期。该试验招募的患者包括所有乳腺癌亚型，并涵盖脑转移患者或多次治疗失败的患者。</p>
<p><strong>为什么值得盯？</strong><br>很多细胞治疗的难点不在「能不能做」，而在「能不能规模化交付」。现货型路线如果能在 OS 这种硬终点上跑出优势，行业会更容易把它当作可复制产品，而不是小范围尝试。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-5.png" alt="现货型细胞免疫与转移性乳腺癌" /></figure>
<h3>四、自体骨髓细胞 + 鼻腔递送探索：神经系统疾病与损伤</h3>
<p>2026 年关注点：能否把「主观改善」沉淀为更统一的量表与更客观的终点，让神经修复从叙事走向证据形态升级。</p>
<p><strong>它是什么？</strong><br>NEST 使用自体骨髓来源细胞，采用静脉 + 鼻腔的组合递送方式，探索其对神经功能的影响与潜在修复价值。</p>
<p><strong>推进到哪一步？</strong><br>在登记系统中属于探索性研究路径。该试验已经治疗了约 200 名患者，很多患者在接受治疗后报告症状改善。</p>
<p><strong>为什么值得盯？</strong><br>神经系统疾病的临床缺口极大，也最容易被「希望叙事」放大。真正决定它能否往前走的，是两件更具体的事：递送是否形成可达，以及终点是否足够统一、足够可比较。2026 年更像一个分水岭：它是否能用更结构化的数据，把探索信号变成可讨论的证据。</p>
<p>研究人员表示，这些结果有望为肌萎缩侧索硬化症（ALS）、阿尔茨海默病、帕金森病和脑卒中等疾病患者带来希望和生活质量的提升。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-6.png" alt="自体骨髓细胞与鼻腔递送探索神经系统疾病" /></figure>
<h3>五、四条路线，争夺的是「可交付的证据」</h3>
<p>把这 4 项放在一起看，会发现它们在做同一件事：让细胞疗法更像现代医学里的「工程产品」，而不是只靠个案叙事推动。</p>
<p>共同的趋势很集中：</p>
<ul>
<li><strong>终点更硬</strong>：OS、功能性指标、标准化量表</li>
<li><strong>路径更工程化</strong>：可控改造、现货供给、递送可达</li>
<li><strong>证据更可复制</strong>：更规范的试验设计、更明确的读出节点</li>
</ul>
<h3>结语</h3>
<p>因此，2026 年最值得看的，不是「谁更像奇迹」，而是这些路线能否把疗效与可复现性，写进更严格、更可对照的数据里。</p>
<p>信息来源：Mike May. Eleven clinical trials that will shape medicine in 2026（Published: 15 Dec 2025），BriaCell Therapeutics Corp.</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>On 15 December 2025, <em>Nature Medicine</em> published its year-end survey, “Eleven clinical trials that will shape medicine in 2026”. Drawing on the judgement of leading researchers, it selected 11 pivotal trials, from different fields, thought likely to influence the direction of medicine in 2026.</p>
<p>Of these, four involve cells and stem cells (including cell plus gene editing) — about one third, or roughly 36%. Taken on their own, the trend is clearer: cell therapy is moving from “strong concept” towards “harder evidence” — using more standard trial design and clearer clinical endpoints to write efficacy and reproducibility into the data.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-2.png" alt="Cell therapies account for about one third of the 11 pivotal trials" /></figure>
<h3>1. mRNA CAR-T enters autoimmunity: generalised myasthenia gravis</h3>
<p>If the signal still reproduces stably in a randomised, double-blind, placebo-controlled phase 3 in 2026, the “engineered path” of CAR-T in autoimmune disease will have been written in.</p>
<p><strong>What is it?</strong><br>Descartes-08 follows an mRNA CAR-T logic: mRNA puts T cells on a “temporary posting” rather than a permanent rewrite. The core aim is to make immune clearance more controllable and more repeatable.</p>
<p><strong>How far has it come?</strong><br>Phase 2b already has public updates; more important, the phase 3 AURORA study is listed in the registry (for adults with generalised myasthenia gravis).</p>
<p><strong>Why watch it?</strong><br>The core tension in autoimmune disease is often long-term suppression alongside long-term side effects. If mRNA CAR-T can turn “deep remission” into a reproducible result, it offers not only a new therapy but a new form of immunotherapy: short-course intervention, controllable engineering, and a longer stretch of symptom stability.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-3.png" alt="mRNA CAR-T and generalised myasthenia gravis" /></figure>
<h3>2. Prime-edited autologous haematopoietic stem cells: chronic granulomatous disease (CGD)</h3>
<p>The 2026 questions are whether editing accuracy, stability of haematopoietic reconstitution, and durability of clinical benefit can hold up in more cases and longer follow-up.</p>
<p><strong>What is it?</strong><br>PM359 is a combination of gene editing and cell reinfusion: the patient’s own CD34+ haematopoietic stem cells are taken out, the defect is corrected in vitro with prime editing, then the cells are returned. The aim is long-term recovery of immune function, while avoiding matching and rejection issues of allogeneic transplant.</p>
<p><strong>How far has it come?</strong><br>It is registered as a phase 1/2 study. Early human data in this direction have also been published in the <em>NEJM</em>, a high-quality endorsement that prime editing has entered the clinic and produced evidence of functional recovery.</p>
<p><strong>Why watch it?</strong><br>CGD is rare, but the study reads more like a methodological milestone. If prime editing can form a reproducible loop of “correct — reconstitute — benefit”, it may move from a single success to a transferable platform (more genetic defects, more cell types).</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-4.png" alt="Prime-edited autologous haematopoietic stem cells and CGD" /></figure>
<h3>3. Off-the-shelf cell immunotherapy races a hard endpoint: metastatic breast cancer</h3>
<p>The 2026 question is whether phase 3 results with overall survival (OS) as the primary endpoint can give off-the-shelf cell immunotherapy a clear, comparable clinical coordinate.</p>
<p><strong>What is it?</strong><br>Bria-IMT takes an off-the-shelf cell-immunotherapy route: the product is not “made one-by-one for each patient”, but supplied in a more standardised way. By carrying multi-antigen information and combining with an immune-checkpoint inhibitor, it tries to “wake and organise” anti-tumour immunity.</p>
<p><strong>How far has it come?</strong><br>The phase 3 BRIA-ABC trial is registered, mainly asking whether overall survival can be extended. It enrols patients across all breast-cancer subtypes, including those with brain metastases or multiple prior treatment failures.</p>
<p><strong>Why watch it?</strong><br>For many cell therapies the hard part is not “can it be done” but “can it be delivered at scale”. If the off-the-shelf route can show an advantage on a hard endpoint such as OS, the field will find it easier to treat as a reproducible product rather than a small-scale experiment.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-5.png" alt="Off-the-shelf cell immunotherapy and metastatic breast cancer" /></figure>
<h3>4. Autologous marrow cells plus nasal delivery: neurological disease and injury</h3>
<p>The 2026 question is whether “subjective improvement” can be settled into more unified scales and more objective endpoints, so that neural repair moves from narrative towards a stronger form of evidence.</p>
<p><strong>What is it?</strong><br>NEST uses autologous bone-marrow-derived cells, delivered by a combination of intravenous and nasal routes, to explore effects on neural function and potential repair value.</p>
<p><strong>How far has it come?</strong><br>In the registry it sits on an exploratory path. The trial has already treated about 200 patients; many reported symptom improvement after treatment.</p>
<p><strong>Why watch it?</strong><br>The clinical gap in neurological disease is huge, and so is the risk of being amplified by a “hope narrative”. What will decide whether it can move forward are two more concrete things: whether delivery actually reaches the target, and whether endpoints are unified enough to compare. 2026 looks more like a watershed: whether more structured data can turn an exploratory signal into evidence that can be discussed.</p>
<p>Researchers say the results may bring hope and a better quality of life for patients with amyotrophic lateral sclerosis (ALS), Alzheimer’s disease, Parkinson’s disease and stroke.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-4-6.png" alt="Autologous marrow cells and nasal delivery in neurological disease" /></figure>
<h3>5. Four routes, one contest: deliverable evidence</h3>
<p>Taken together, the four trials are doing the same thing: making cell therapy look more like an “engineered product” in modern medicine, rather than something driven only by case-by-case stories.</p>
<p>The shared trend is concentrated:</p>
<ul>
<li><strong>Harder endpoints</strong>: OS, functional measures, standardised scales</li>
<li><strong>More engineered paths</strong>: controllable modification, off-the-shelf supply, reachable delivery</li>
<li><strong>More reproducible evidence</strong>: more disciplined trial design, clearer readout points</li>
</ul>
<h3>Conclusion</h3>
<p>What is most worth watching in 2026 is not “who looks more like a miracle”, but whether these routes can write efficacy and reproducibility into stricter, more comparable data.</p>
<p>Source: Mike May. Eleven clinical trials that will shape medicine in 2026 (Published: 15 Dec 2025), BriaCell Therapeutics Corp.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "37",
    slug: "37",
    section: "longevity",
    eyebrow: "Healthspan",
    cover: "/images/knowledge/longevity-5-1.png",
    image: "/images/knowledge/longevity-5-1.png",
    title: { "zh-HK": `幹細胞調理的最大意義，並非「返老還童」，而是為你搶回 10 年健康生命`, "zh-CN": `干细胞调理的最大意义，并非「返老还童」，而是为你抢回 10 年健康生命`, en: `The Real Point of Stem-Cell Care Is Not “Turning Back the Clock” — It Is Winning Back Ten Healthy Years` },
    excerpt: { "zh-HK": `真正的長壽不只是年齡數字。幹細胞的核心價值，更在於延長健康壽命、推遲失能。`, "zh-CN": `真正的长寿不只是年龄数字。干细胞的核心价值，更在于延长健康寿命、推迟失能。`, en: `True longevity is more than a number. The core value of stem cells is extending healthspan and delaying disability.` },
    body: { "zh-HK": `<p>我們是否曾想過：真正的長壽，不僅僅是年齡數字的增長，更是健康、自理、有尊嚴的生活年限的延長？如果來自臍帶的間充質幹細胞（MSC），能夠切實幫助中老年人延緩衰弱、遠離慢性病、推遲失能——那麼這不僅意味着醫學的重大進步，更可能徹底改變我們對待衰老的方式。</p>
<p>説到幹細胞，很多人第一時間聯想到阿爾茨海默病、帕金森病或脊髓損傷等難治性疾病，甚至期待它帶來「逆轉年齡」的奇蹟。但一個更務實、也更貼近需求的方向正在浮現：幹細胞的核心價值，不只在於「治已病」，更在於「防未病」——提前干預，阻斷衰老與慢性病的發展鏈。換句話説，它也許不是「萬能神藥」，但它完全可以成為延長健康壽命、提升晚年生活質量的全新鑰匙。</p>
<h3>一、我們真正需要的，不是活得久，而是活得健康</h3>
<p>壽命，是從出生到離世的總時長；健康壽命，指的是無重大疾病、可自理、高質量生活的年限。</p>
<p>據世界衞生組織統計，全球人均健康壽命僅約 62 歲，比平均預期壽命短了將近 10 年。這十年，往往是多種慢性病爆發、身體功能迅速下滑、需要他人照護的十年——不僅個人痛苦，家庭與社會也承擔巨大的照護與醫療壓力。</p>
<p>有經濟學模型推演：全球健康壽命每增加 1 年，可能節省約 38 萬億美元的社會支出。我們渴望的，不是單純「多活十年」，而是「多出十年健康、自主、有尊嚴的人生」。這也正是幹細胞技術在當下的真正意義。</p>
<h3>二、幹細胞如何幫我們「搶回」健康歲月？</h3>
<p>什麼是間充質幹細胞（MSC）？它來自臍帶、骨髓等組織，具有多向分化潛力，更能分泌多種活性因子與外泌體。經靜脈回輸後，可定向遷移至身體損傷部位，調節免疫反應，促進組織修復與再生。其核心機制包括：</p>
<ul>
<li><strong>減輕慢性炎症</strong>：抑制隨年齡增長而持續的低度炎性狀態；</li>
<li><strong>促進組織再生</strong>：分泌細胞活性因子，「喚醒」自體修復機制；</li>
<li><strong>優化細胞環境</strong>：幫助清除衰老細胞，重啓機體功能。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-5-2.png" alt="間充質幹細胞與健康壽命" /></figure>
<h3>三、健康壽命延長，將帶來怎樣的深遠影響？</h3>
<ul>
<li><strong>緩解養老金壓力</strong>：健康老年人增多，退休年齡可更靈活，養老金系統更可持續；</li>
<li><strong>降低醫療支出</strong>：延緩慢性病發生，減少高昂治療費用，醫保與個人負擔同步減輕；</li>
<li><strong>節約照護成本</strong>：失能期推遲，家庭與社會護理壓力大幅下降；</li>
<li><strong>釋放銀髮人力資源</strong>：健康長者可持續貢獻智慧與經驗，打造新形態的「長壽紅利」。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-5-3.png" alt="健康壽命延長的社會影響" /></figure>
<h3>四、我們正跨入「健康長壽」新階段</h3>
<p>隨着幹細胞臨牀研究的不斷推進，更多可靠證據正在積累：</p>
<ul>
<li><strong>科研背書</strong>：國內外多項大規模臨牀試驗陸續完成，為療法的安全性與有效性提供紮實依據；</li>
<li><strong>支付創新</strong>：商業保險已開始嘗試覆蓋，未來基本醫保也可能將其納入支持範圍；</li>
<li><strong>政策助力</strong>：多個城市正積極搭建細胞治療公共平台和審批准入機制，推動技術普及。</li>
</ul>
<p>當幹細胞真正走向臨牀應用，我們有望看到更多人年至七十仍保持活力與自理。「養老焦慮」將被重新書寫，一個真正以「健康」為核心的長壽時代正在到來。</p>
<h3>結語</h3>
<p>衰老本身並不可怕，可怕的是我們在衰老的過程中失去健康與自主。《Nature Aging》2024 年 9 月發表的重要研究指出，40 歲和 60 歲是人體兩次衰老加速的關鍵轉折點，而幹細胞功能衰退被認為是內在的機制原因。</p>
<p>幹細胞療法雖不能「逆天改命」，卻為我們爭取到了一段更從容、更健康的晚年時光。關鍵在於：防大於治。尤其在 40 歲與 60 歲這兩個關鍵期，提早干預、系統規劃健康，才能真正實現——不是單純地活得久，而是活得好。</p>
<p>讓科技賦能長壽，讓長壽充滿質量。這一天，值得期待，更值得我們從現在起，理性行動。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>我们是否曾想过：真正的长寿，不仅仅是年龄数字的增长，更是健康、自理、有尊严的生活年限的延长？如果来自脐带的间充质干细胞（MSC），能够切实帮助中老年人延缓衰弱、远离慢性病、推迟失能——那么这不仅意味着医学的重大进步，更可能彻底改变我们对待衰老的方式。</p>
<p>说到干细胞，很多人第一时间联想到阿尔茨海默病、帕金森病或脊髓损伤等难治性疾病，甚至期待它带来「逆转年龄」的奇迹。但一个更务实、也更贴近需求的方向正在浮现：干细胞的核心价值，不只在于「治已病」，更在于「防未病」——提前干预，阻断衰老与慢性病的发展链。换句话说，它也许不是「万能神药」，但它完全可以成为延长健康寿命、提升晚年生活质量的全新钥匙。</p>
<h3>一、我们真正需要的，不是活得久，而是活得健康</h3>
<p>寿命，是从出生到离世的总时长；健康寿命，指的是无重大疾病、可自理、高质量生活的年限。</p>
<p>据世界卫生组织统计，全球人均健康寿命仅约 62 岁，比平均预期寿命短了将近 10 年。这十年，往往是多种慢性病爆发、身体功能迅速下滑、需要他人照护的十年——不仅个人痛苦，家庭与社会也承担巨大的照护与医疗压力。</p>
<p>有经济学模型推演：全球健康寿命每增加 1 年，可能节省约 38 万亿美元的社会支出。我们渴望的，不是单纯「多活十年」，而是「多出十年健康、自主、有尊严的人生」。这也正是干细胞技术在当下的真正意义。</p>
<h3>二、干细胞如何帮我们「抢回」健康岁月？</h3>
<p>什么是间充质干细胞（MSC）？它来自脐带、骨髓等组织，具有多向分化潜力，更能分泌多种活性因子与外泌体。经静脉回输后，可定向迁移至身体损伤部位，调节免疫反应，促进组织修复与再生。其核心机制包括：</p>
<ul>
<li><strong>减轻慢性炎症</strong>：抑制随年龄增长而持续的低度炎性状态；</li>
<li><strong>促进组织再生</strong>：分泌细胞活性因子，「唤醒」自体修复机制；</li>
<li><strong>优化细胞环境</strong>：帮助清除衰老细胞，重启机体功能。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-5-2.png" alt="间充质干细胞与健康寿命" /></figure>
<h3>三、健康寿命延长，将带来怎样的深远影响？</h3>
<ul>
<li><strong>缓解养老金压力</strong>：健康老年人增多，退休年龄可更灵活，养老金系统更可持续；</li>
<li><strong>降低医疗支出</strong>：延缓慢性病发生，减少高昂治疗费用，医保与个人负担同步减轻；</li>
<li><strong>节约照护成本</strong>：失能期推迟，家庭与社会护理压力大幅下降；</li>
<li><strong>释放银发人力资源</strong>：健康长者可持续贡献智慧与经验，打造新形态的「长寿红利」。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-5-3.png" alt="健康寿命延长的社会影响" /></figure>
<h3>四、我们正跨入「健康长寿」新阶段</h3>
<p>随着干细胞临床研究的不断推进，更多可靠证据正在积累：</p>
<ul>
<li><strong>科研背书</strong>：国内外多项大规模临床试验陆续完成，为疗法的安全性与有效性提供扎实依据；</li>
<li><strong>支付创新</strong>：商业保险已开始尝试覆盖，未来基本医保也可能将其纳入支持范围；</li>
<li><strong>政策助力</strong>：多个城市正积极搭建细胞治疗公共平台和审批准入机制，推动技术普及。</li>
</ul>
<p>当干细胞真正走向临床应用，我们有望看到更多人年至七十仍保持活力与自理。「养老焦虑」将被重新书写，一个真正以「健康」为核心的长寿时代正在到来。</p>
<h3>结语</h3>
<p>衰老本身并不可怕，可怕的是我们在衰老的过程中失去健康与自主。《Nature Aging》2024 年 9 月发表的重要研究指出，40 岁和 60 岁是人体两次衰老加速的关键转折点，而干细胞功能衰退被认为是内在的机制原因。</p>
<p>干细胞疗法虽不能「逆天改命」，却为我们争取到了一段更从容、更健康的晚年时光。关键在于：防大于治。尤其在 40 岁与 60 岁这两个关键期，提早干预、系统规划健康，才能真正实现——不是单纯地活得久，而是活得好。</p>
<p>让科技赋能长寿，让长寿充满质量。这一天，值得期待，更值得我们从现在起，理性行动。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Have we ever asked: is true longevity just a larger number on the calendar, or a longer stretch of years lived in health, independence and dignity? If umbilical cord mesenchymal stem cells (MSCs) can genuinely help older adults slow frailty, stay clear of chronic disease and delay disability, that would be more than a medical advance — it could change how we think about ageing.</p>
<p>Mention stem cells, and many people first think of hard-to-treat conditions such as Alzheimer’s disease, Parkinson’s disease or spinal cord injury, or even hope for a miracle that “reverses age”. A more practical direction is emerging: the core value of stem cells is not only treating disease that has already arrived, but intervening earlier and breaking the chain of ageing and chronic illness. In other words, they may not be a panacea, but they can be a new key to extending healthspan and improving quality of life in later years.</p>
<h3>1. What we really need is not to live longer, but to live in health</h3>
<p>Lifespan is the total time from birth to death. Healthspan is the years lived without major disease, able to care for oneself, at a high quality of life.</p>
<p>WHO figures put global average healthspan at only about 62 years — nearly 10 years short of average life expectancy. Those ten years are often when chronic diseases erupt, function falls quickly, and care from others is needed — painful for the individual, and a heavy care and medical burden for families and society.</p>
<p>Economic models suggest that each extra year of global healthspan could save about US$38 trillion in social costs. What we want is not simply “ten more years of life”, but “ten more years of healthy, independent, dignified life”. That is the real meaning of stem-cell technology today.</p>
<h3>2. How can stem cells help us “win back” healthy years?</h3>
<p>What are mesenchymal stem cells (MSCs)? They come from tissues such as umbilical cord and bone marrow, can differentiate along several lineages, and secrete many active factors and exosomes. After intravenous infusion they can migrate to sites of injury, modulate immune responses and promote tissue repair and regeneration. Core mechanisms include:</p>
<ul>
<li><strong>Easing chronic inflammation</strong>: suppressing the low-grade inflammatory state that persists with age;</li>
<li><strong>Promoting tissue regeneration</strong>: secreting bioactive factors that “wake” the body’s own repair;</li>
<li><strong>Improving the cellular environment</strong>: helping clear senescent cells and restart organismal function.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-5-2.png" alt="Mesenchymal stem cells and healthspan" /></figure>
<h3>3. What deeper effects would a longer healthspan bring?</h3>
<ul>
<li><strong>Easing pension pressure</strong>: more healthy older people, more flexible retirement ages, a more sustainable pension system;</li>
<li><strong>Lower medical spending</strong>: delaying chronic disease, cutting high treatment costs, lightening both insurance and personal burden;</li>
<li><strong>Saving care costs</strong>: postponing disability, sharply reducing family and social nursing pressure;</li>
<li><strong>Releasing silver human capital</strong>: healthy elders can keep contributing wisdom and experience — a new form of “longevity dividend”.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-5-3.png" alt="Social effects of a longer healthspan" /></figure>
<h3>4. We are entering a new stage of healthy longevity</h3>
<p>As clinical stem-cell research advances, more solid evidence is accumulating:</p>
<ul>
<li><strong>Scientific backing</strong>: large clinical trials at home and abroad have been completed, providing a firmer basis for safety and efficacy;</li>
<li><strong>Payment innovation</strong>: commercial insurance has begun to experiment with cover; basic medical insurance may in future include it too;</li>
<li><strong>Policy support</strong>: cities are building public platforms and approval pathways for cell therapy, to help the technology spread.</li>
</ul>
<p>When stem cells truly reach clinical use, more people may still be vigorous and independent at seventy. “Retirement anxiety” will be rewritten, and an era of longevity with health at its core is arriving.</p>
<h3>Conclusion</h3>
<p>Ageing itself is not what we should fear; losing health and autonomy while we age is. An important <em>Nature Aging</em> paper in September 2024 pointed to ages 40 and 60 as two turning points when ageing accelerates, with declining stem-cell function as an inner mechanism.</p>
<p>Stem-cell therapy cannot rewrite fate, but it can win a calmer, healthier later life. The key is prevention over treatment. Especially at 40 and 60, earlier intervention and systematic health planning are what make it possible — not merely to live longer, but to live well.</p>
<p>Let technology serve longevity, and let longevity have quality. That day is worth looking forward to — and worth acting on, rationally, from now.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "38",
    slug: "38",
    section: "longevity",
    eyebrow: "Fertility",
    cover: "/images/knowledge/longevity-6-2.png",
    image: "/images/knowledge/longevity-6-1.png",
    title: { "zh-HK": `幹細胞療法正為萬千家庭「奪回生育權」`, "zh-CN": `干细胞疗法正为万千家庭「夺回生育权」`, en: `Stem-Cell Therapy Is Helping Families Reclaim a Path to Fertility` },
    excerpt: { "zh-HK": `卵巢反應不佳、卵巢早衰、內膜損傷、多囊與男性不育——幹細胞研究正在改寫部分生育結局。`, "zh-CN": `卵巢反应不佳、卵巢早衰、内膜损伤、多囊与男性不育——干细胞研究正在改写部分生育结局。`, en: `Poor ovarian response, premature ovarian failure, endometrial injury, PCOS and male infertility — stem-cell research is changing some fertility outcomes.` },
    body: { "zh-HK": `<p>因卵巢反應不佳導致受孕困難，正困擾着不少女性及其家庭。《Stem Cell Research &amp; Therapy》的一篇文章顯示：向卵巢注射間充質幹細胞可改變患者的生育結局。在這項涉及 105 位患者的研究裏，幹細胞成功讓超過三分之一的女性懷孕。</p>
<p>在我國不孕不育患者已破 5000 萬人的背景下，輔助生殖已經不再那麼「神秘」。目前中國輔助生殖技術主要有三種：人工授精（AI）、配子移植和體外受精（IVF）。然而在這條本就艱辛的道路上，部分女性還會遭遇新的「攔路虎」——卵巢反應不佳（POR），這種情況會極大地降低生育治療的成功率，給患者帶來沉重的經濟負擔和心理壓力。</p>
<p>對此，傳統療法通常推薦使用生長激素補充劑、控制性卵巢過度刺激、輔助治療、針灸和卵巢內注射富含血小板的血漿（PRP）。然而效果欠佳，一項薈萃分析表明：接受 PRP 療法後自然妊娠率僅為 7%。</p>
<p>為發掘新興療法，幫助患者擺脱生育困境，阿維森納研究所探討了 105 位 POR 患者在接受卵巢內注射間充質幹細胞後（平均隨訪近 4 年）的妊娠率、活產率和潛在併發症。他們發現：間充質幹細胞療法成功讓 36.19% 的女性懷孕，每次懷孕的活產率為 74.42%，且未發現嬰兒先天性異常或死亡的情況，為深陷 POR 中的女性帶來新的希望。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-2.png" alt="幹細胞與卵巢反應不佳的生育結局" /></figure>
<h3>一、幹細胞與卵巢早衰</h3>
<p>卵巢早衰（POF）在臨牀上被稱為早發性卵巢功能不全，指的是女性在 40 歲之前出現卵巢功能的減退。這種衰退不但能重創女性生育力，還會提早更年期，提高患病風險。為了逆轉這一過程，不少研究者將具有再生修復及免疫調節能力的幹細胞運用於 POF 的治療。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-3.png" alt="幹細胞與卵巢早衰研究" /></figure>
<p>去年，美國與巴基斯坦的研究團隊系統性回顧分析了過往的案例，共涉及 153 名患者。他們發現：幹細胞可通過改善生育能力、提高卵巢重量、使血清中的性激素水平（E2 和 FSH）正常化及增加懷孕次數來改善 POF 患者的卵巢功能，是一種頗具潛力的未來療法。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-4.png" alt="幹細胞改善卵巢功能的證據" /></figure>
<h3>二、幹細胞與子宮內膜損傷</h3>
<p>子宮內膜損傷是導致不孕的重要因素。一項運用臍帶來源間充質幹細胞聯合常規治療修復子宮內膜的研究顯示：20 位患者在接受幹細胞治療後，子宮內膜明顯增厚，子宮動脈血流得到提升，證明了臍帶血幹細胞在修復子宮內膜上的潛力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-5.jpg" alt="幹細胞修復子宮內膜" /></figure>
<h3>三、幹細胞與多囊卵巢綜合徵</h3>
<p>約有 3/4 的多囊卵巢綜合徵（PCOS）患者存在不孕症狀，治療方法多以激素替代為主，雖能控制病情，但想清除 PCOS 帶來的生育障礙卻並非易事。</p>
<p>在探索新療法的途中，芝加哥大學發現：間充質幹細胞可通過分泌各類因子調節雄激素產生，改善卵巢功能。在將其衍生外囊泡注射給 PCOS 小鼠模型時，小鼠又擁有了生育能力，併產下了健康的幼崽。這證實間充質幹細胞對 PCOS 的治療效用，為正在與 PCOS 相關生育問題作鬥爭的女性帶來了新的希望。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-6.png" alt="幹細胞與多囊卵巢綜合徵" /></figure>
<h3>四、幹細胞與男性性功能障礙</h3>
<p>男性性功能障礙（MSD）可分為勃起功能障礙（ED）、早泄（PE）、性高潮障礙和其他如佩羅尼氏病（PD）等病症，是導致男性不育的常見原因。</p>
<p>該類疾病的治療充滿爭議，主要是藥物和手術存在諸多侷限，也不能從根源改善 MSD，幹細胞療法提供了一條嶄新的道路。2016 年，《EBioMedicine》發表一篇關於「根治性前列腺切除術後 ED 患者注射自體脂肪幹細胞」的文章，當時共有 17 名患者參與了這項試驗，其中 8 名男性都恢復了勃起功能並能完成性行為。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-7.jpg" alt="幹細胞與男性性功能障礙研究" /></figure>
<h3>五、幹細胞與無精症</h3>
<p>男性不育中最嚴重、最棘手的莫過於「無精症」。醫生們通常要靠手術來搜尋患者體內的精子，但搜尋成功率將近過半，而 Flannigan 教授團隊希望幫助另一半「生育無門」的患者圓夢。</p>
<p>他們的想法相當大膽——通過對一名無精症患者的睾丸進行活檢，收集其幹細胞進行體外擴增，然後通過 3D 生物打印成類似於生精小管的管狀結構。這些細胞後續成長為參與精子生成的幾種特殊細胞，並在精子幹細胞維持方面也有着顯著改善——這兩者都是具有精子生成能力的早期跡象。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-8.png" alt="3D 打印小管的顯微圖像" /><figcaption>3D 打印小管的顯微圖像</figcaption></figure>
<p>該團隊正在「訓練」這些睾丸細胞產生精子。他們將其暴露於不同的營養物質和生長因子中，並微調結構排列，以促進細胞間相互作用。如果最終有正常精子誕生，就能從根本上解開患者們的「無精困局」，為更多夫婦打開生育大門。</p>
<h3>結語</h3>
<p>在全球範圍內，大約 15% 的夫婦有懷孕困難。隨着生育年齡的增加，不孕不育的發病率也在增加。藉助輔助生殖技術等可以解決近 80% 的問題。然而，仍有近 20% 的夫婦無法懷孕。在這種情況下，幹細胞療法可以為不孕症夫婦帶來希望。</p>
<p>目前的研究雖然仍處於起步階段，未來需要進一步探究幹細胞及其衍生物恢復生育力的作用機制，但未來將會有更多的大規模臨牀試驗來獲得安全性和有效性的證據。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>因卵巢反应不佳导致受孕困难，正困扰着不少女性及其家庭。《Stem Cell Research &amp; Therapy》的一篇文章显示：向卵巢注射间充质干细胞可改变患者的生育结局。在这项涉及 105 位患者的研究里，干细胞成功让超过三分之一的女性怀孕。</p>
<p>在我国不孕不育患者已破 5000 万人的背景下，辅助生殖已经不再那么「神秘」。目前中国辅助生殖技术主要有三种：人工授精（AI）、配子移植和体外受精（IVF）。然而在这条本就艰辛的道路上，部分女性还会遭遇新的「拦路虎」——卵巢反应不佳（POR），这种情况会极大地降低生育治疗的成功率，给患者带来沉重的经济负担和心理压力。</p>
<p>对此，传统疗法通常推荐使用生长激素补充剂、控制性卵巢过度刺激、辅助治疗、针灸和卵巢内注射富含血小板的血浆（PRP）。然而效果欠佳，一项荟萃分析表明：接受 PRP 疗法后自然妊娠率仅为 7%。</p>
<p>为发掘新兴疗法，帮助患者摆脱生育困境，阿维森纳研究所探讨了 105 位 POR 患者在接受卵巢内注射间充质干细胞后（平均随访近 4 年）的妊娠率、活产率和潜在并发症。他们发现：间充质干细胞疗法成功让 36.19% 的女性怀孕，每次怀孕的活产率为 74.42%，且未发现婴儿先天性异常或死亡的情况，为深陷 POR 中的女性带来新的希望。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-2.png" alt="干细胞与卵巢反应不佳的生育结局" /></figure>
<h3>一、干细胞与卵巢早衰</h3>
<p>卵巢早衰（POF）在临床上被称为早发性卵巢功能不全，指的是女性在 40 岁之前出现卵巢功能的减退。这种衰退不但能重创女性生育力，还会提早更年期，提高患病风险。为了逆转这一过程，不少研究者将具有再生修复及免疫调节能力的干细胞运用于 POF 的治疗。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-3.png" alt="干细胞与卵巢早衰研究" /></figure>
<p>去年，美国与巴基斯坦的研究团队系统性回顾分析了过往的案例，共涉及 153 名患者。他们发现：干细胞可通过改善生育能力、提高卵巢重量、使血清中的性激素水平（E2 和 FSH）正常化及增加怀孕次数来改善 POF 患者的卵巢功能，是一种颇具潜力的未来疗法。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-4.png" alt="干细胞改善卵巢功能的证据" /></figure>
<h3>二、干细胞与子宫内膜损伤</h3>
<p>子宫内膜损伤是导致不孕的重要因素。一项运用脐带来源间充质干细胞联合常规治疗修复子宫内膜的研究显示：20 位患者在接受干细胞治疗后，子宫内膜明显增厚，子宫动脉血流得到提升，证明了脐带血干细胞在修复子宫内膜上的潜力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-5.jpg" alt="干细胞修复子宫内膜" /></figure>
<h3>三、干细胞与多囊卵巢综合征</h3>
<p>约有 3/4 的多囊卵巢综合征（PCOS）患者存在不孕症状，治疗方法多以激素替代为主，虽能控制病情，但想清除 PCOS 带来的生育障碍却并非易事。</p>
<p>在探索新疗法的途中，芝加哥大学发现：间充质干细胞可通过分泌各类因子调节雄激素产生，改善卵巢功能。在将其衍生外囊泡注射给 PCOS 小鼠模型时，小鼠又拥有了生育能力，并产下了健康的幼崽。这证实间充质干细胞对 PCOS 的治疗效用，为正在与 PCOS 相关生育问题作斗争的女性带来了新的希望。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-6.png" alt="干细胞与多囊卵巢综合征" /></figure>
<h3>四、干细胞与男性性功能障碍</h3>
<p>男性性功能障碍（MSD）可分为勃起功能障碍（ED）、早泄（PE）、性高潮障碍和其他如佩罗尼氏病（PD）等病症，是导致男性不育的常见原因。</p>
<p>该类疾病的治疗充满争议，主要是药物和手术存在诸多局限，也不能从根源改善 MSD，干细胞疗法提供了一条崭新的道路。2016 年，《EBioMedicine》发表一篇关于「根治性前列腺切除术后 ED 患者注射自体脂肪干细胞」的文章，当时共有 17 名患者参与了这项试验，其中 8 名男性都恢复了勃起功能并能完成性行为。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-7.jpg" alt="干细胞与男性性功能障碍研究" /></figure>
<h3>五、干细胞与无精症</h3>
<p>男性不育中最严重、最棘手的莫过于「无精症」。医生们通常要靠手术来搜寻患者体内的精子，但搜寻成功率将近过半，而 Flannigan 教授团队希望帮助另一半「生育无门」的患者圆梦。</p>
<p>他们的想法相当大胆——通过对一名无精症患者的睾丸进行活检，收集其干细胞进行体外扩增，然后通过 3D 生物打印成类似于生精小管的管状结构。这些细胞后续成长为参与精子生成的几种特殊细胞，并在精子干细胞维持方面也有着显著改善——这两者都是具有精子生成能力的早期迹象。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-8.png" alt="3D 打印小管的显微图像" /><figcaption>3D 打印小管的显微图像</figcaption></figure>
<p>该团队正在「训练」这些睾丸细胞产生精子。他们将其暴露于不同的营养物质和生长因子中，并微调结构排列，以促进细胞间相互作用。如果最终有正常精子诞生，就能从根本上解开患者们的「无精困局」，为更多夫妇打开生育大门。</p>
<h3>结语</h3>
<p>在全球范围内，大约 15% 的夫妇有怀孕困难。随着生育年龄的增加，不孕不育的发病率也在增加。借助辅助生殖技术等可以解决近 80% 的问题。然而，仍有近 20% 的夫妇无法怀孕。在这种情况下，干细胞疗法可以为不孕症夫妇带来希望。</p>
<p>目前的研究虽然仍处于起步阶段，未来需要进一步探究干细胞及其衍生物恢复生育力的作用机制，但未来将会有更多的大规模临床试验来获得安全性和有效性的证据。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Poor ovarian response making conception difficult is troubling many women and their families. A paper in <em>Stem Cell Research &amp; Therapy</em> reports that injecting mesenchymal stem cells into the ovary can change reproductive outcomes. In a study of 105 patients, stem cells enabled more than one third of the women to become pregnant.</p>
<p>Against a background of more than 50 million people with infertility in China, assisted reproduction is no longer so “mysterious”. The main techniques are artificial insemination (AI), gamete transfer and in vitro fertilisation (IVF). On this already hard road, some women meet a further obstacle — poor ovarian response (POR) — which sharply lowers the success of fertility treatment and brings heavy financial and psychological pressure.</p>
<p>Traditional options usually include growth-hormone supplements, controlled ovarian hyperstimulation, adjunctive treatment, acupuncture and intra-ovarian platelet-rich plasma (PRP). Results are modest: a meta-analysis found a natural pregnancy rate of only 7% after PRP.</p>
<p>To explore a new therapy, the Avicenna Research Institute looked at pregnancy rate, live-birth rate and potential complications in 105 women with POR after intra-ovarian mesenchymal stem-cell injection (mean follow-up nearly four years). They found that the therapy enabled 36.19% of the women to become pregnant, with a live-birth rate of 74.42% per pregnancy, and no congenital anomalies or infant deaths — new hope for women stuck in POR.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-2.png" alt="Stem cells and fertility outcomes in poor ovarian response" /></figure>
<h3>1. Stem cells and premature ovarian failure</h3>
<p>Premature ovarian failure (POF), clinically called premature ovarian insufficiency, is a decline in ovarian function before age 40. It can devastate fertility, bring menopause forward and raise disease risk. To reverse this, many researchers have applied stem cells — with regenerative and immunomodulatory capacity — to POF.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-3.png" alt="Stem cells and premature ovarian failure" /></figure>
<p>Last year, teams in the United States and Pakistan systematically reviewed past cases, covering 153 patients. They found that stem cells can improve ovarian function in POF by improving fertility, raising ovarian weight, normalising serum sex hormones (E2 and FSH) and increasing pregnancies — a promising future therapy.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-4.png" alt="Evidence that stem cells improve ovarian function" /></figure>
<h3>2. Stem cells and endometrial injury</h3>
<p>Endometrial injury is an important cause of infertility. A study using umbilical-cord mesenchymal stem cells plus conventional treatment to repair the endometrium showed that in 20 patients after stem-cell treatment, the endometrium thickened clearly and uterine-artery blood flow improved — evidence of potential for cord-blood stem cells in endometrial repair.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-5.jpg" alt="Stem cells repairing the endometrium" /></figure>
<h3>3. Stem cells and polycystic ovary syndrome</h3>
<p>About three quarters of women with polycystic ovary syndrome (PCOS) have infertility. Treatment is mostly hormone replacement: it can control the condition, but clearing the fertility barrier of PCOS is not easy.</p>
<p>In the search for new therapies, the University of Chicago found that mesenchymal stem cells can regulate androgen production by secreting various factors and improve ovarian function. When their derived extracellular vesicles were injected into a PCOS mouse model, the mice regained fertility and produced healthy pups. This supports a therapeutic effect of MSCs in PCOS, and brings new hope to women fighting PCOS-related infertility.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-6.png" alt="Stem cells and polycystic ovary syndrome" /></figure>
<h3>4. Stem cells and male sexual dysfunction</h3>
<p>Male sexual dysfunction (MSD) includes erectile dysfunction (ED), premature ejaculation (PE), orgasmic disorder and others such as Peyronie’s disease (PD). It is a common cause of male infertility.</p>
<p>Treatment is controversial: drugs and surgery have many limits and do not improve MSD at the root. Stem-cell therapy offers a new path. In 2016 <em>EBioMedicine</em> published a paper on injecting autologous adipose stem cells in men with ED after radical prostatectomy. Seventeen patients took part; eight recovered erectile function and could complete sexual activity.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-7.jpg" alt="Stem cells and male sexual dysfunction" /></figure>
<h3>5. Stem cells and azoospermia</h3>
<p>The most severe and difficult form of male infertility is azoospermia. Doctors usually search for sperm surgically; success is only about half. Professor Flannigan’s team hopes to help the other half who currently have “no path to fertility”.</p>
<p>Their idea is bold: biopsy the testis of a man with azoospermia, collect and expand his stem cells in vitro, then 3D-bioprint them into tubule-like structures resembling seminiferous tubules. The cells later grew into several specialised types involved in spermatogenesis, with a marked improvement in spermatogonial stem-cell maintenance — both early signs of sperm-producing capacity.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-6-8.png" alt="Micrograph of 3D-printed tubules" /><figcaption>Micrograph of 3D-printed tubules</figcaption></figure>
<p>The team is “training” these testicular cells to produce sperm — exposing them to different nutrients and growth factors, and fine-tuning the structural arrangement to promote cell–cell interaction. If normal sperm are eventually born, the “azoospermia deadlock” could be unlocked at the root, opening the door to fertility for more couples.</p>
<h3>Conclusion</h3>
<p>Worldwide, about 15% of couples have difficulty conceiving. As age at childbearing rises, so does infertility. Assisted reproduction can solve nearly 80% of cases; nearly 20% of couples still cannot conceive. In that setting, stem-cell therapy may bring hope.</p>
<p>Research is still early. The mechanisms by which stem cells and their derivatives restore fertility need further study, and more large clinical trials will be needed for evidence of safety and efficacy.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "39",
    slug: "39",
    section: "longevity",
    eyebrow: "Diabetes",
    cover: "/images/knowledge/longevity-7-3.png",
    image: "",
    title: { "zh-HK": `臍帶間充質幹細胞治療 2 型糖尿病：從被動控糖到主動干預`, "zh-CN": `脐带间充质干细胞治疗 2 型糖尿病：从被动控糖到主动干预`, en: `Umbilical-Cord MSC Therapy for Type 2 Diabetes: From Passive Glucose Control to Active Intervention` },
    excerpt: { "zh-HK": `人臍帶間充質幹細胞可通過改善胰島素抵抗、調節免疫發揮作用，推動 2 型糖尿病治療從「被動控糖」走向「主動干預」。`, "zh-CN": `人脐带间充质干细胞可通过改善胰岛素抵抗、调节免疫发挥作用，推动 2 型糖尿病治疗从「被动控糖」走向「主动干预」。`, en: `Umbilical-cord MSCs may act through insulin resistance and immune modulation — moving type 2 diabetes care from passive glucose control towards active intervention.` },
    body: { "zh-HK": `<p>人臍帶間充質幹細胞治療 2 型糖尿病，通過改善胰島素抵抗、調節免疫等機制發揮作用，既能改善血糖控制，又能延緩併發症發生。細胞來源不涉及胚胎，具備較高的安全性與倫理合規性。</p>
<h3>一、突破傳統治療侷限</h3>
<p>2 型糖尿病是常見的慢性代謝性疾病，核心病理特徵為胰島 β 細胞功能損傷或胰島素抵抗。長期血糖控制不佳易引發視網膜病變、腎病、神經病變等多種嚴重併發症，嚴重影響生活質量與健康。</p>
<p>傳統治療主要依賴飲食調控、運動干預及外源降糖藥物（或胰島素）。雖能暫時控制血糖、延緩進展，但無法從根源上修復受損的胰島功能，本質屬於「被動控糖」。</p>
<p>臍帶間充質幹細胞治療的核心定位，是通過激活人體自身細胞的修復能力，實現對病因的「主動干預」。</p>
<h3>二、核心作用機制：對應 2 型糖尿病病理</h3>
<p>該技術以間充質幹細胞的多向分化、免疫調節及旁分泌效應為核心，針對 2 型糖尿病病理環節實現干預：</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-3.png" alt="間充質幹細胞治療 2 型糖尿病的作用機制" /></figure>
<p><strong>胰島 β 細胞修復與再生</strong><br>定向分化：激活 PDX-1、Ngn3 等轉錄因子，分化為胰島 β 樣細胞，葡萄糖刺激胰島素分泌能力可達天然 β 細胞的 78%–92%；誘導內源性胰島 α 細胞向 β 細胞轉分化。<br>保護存活：分泌 HGF、EGF 等抑制 β 細胞凋亡，外泌體攜帶 miR-375 等靶向抑制 Bax 等凋亡基因，提升細胞存活率。</p>
<p><strong>改善胰島素抵抗與代謝穩態</strong><br>增強胰島素敏感性：通過 AMPK/PI3K 通路促進 GLUT4 轉位，提高糖攝取；下調 PEPCK 等基因，減少肝糖輸出。<br>調節脂肪代謝：促進脂肪組織巨噬細胞向抗炎表型轉化，降低 TNF-α 等炎症因子，緩解胰島素抵抗。</p>
<p><strong>併發症防治與旁分泌效應</strong><br>修復微環境：分泌 VEGF 等促進血管新生，改善胰島缺氧環境；外泌體抗纖維化、抗炎，保護腎臟，降低糖尿病腎病風險。<br>旁分泌核心：通過外泌體、細胞因子等遠程調控代謝與免疫，幹細胞歸巢至胰腺進行修復，是主要療效來源。</p>
<h3>三、從被動控糖到主動干預</h3>
<p>這一方向填補了 2 型糖尿病「根源性治療」的空白，突破傳統藥物僅能控制血糖、無法修復胰島功能的侷限，推動治療從「被動控糖」轉向涵蓋早期篩查、免疫干預、細胞修復和精準營養支持的綜合防治。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-4.jpg" alt="糖尿病治療從被動控糖到主動干預" /></figure>
<p>要走向成熟應用，還需把細胞製備、質量控制、療效評價等環節標準化，才能為其他代謝性疾病的細胞治療提供可複製的範本。</p>
<h3>四、健康管理與細胞干預需協同</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-5.png" alt="健康管理與細胞干預協同防治糖尿病" /></figure>
<p><strong>糖尿病健康管理</strong>：幹細胞技術並非替代傳統健康管理。對 2 型糖尿病患者而言，科學的健康管理仍是控制病情的基礎。因個體差異，日常需制定營養飲食方案（減少高糖、高脂、高鹽食物）、個性化運動方案，並定期監測血糖、血壓、血脂，將健康管理與規範治療相結合，才能更有效地延緩進展、降低併發症風險。</p>
<p><strong>規範診療流程</strong>：接受治療前，必須經具備資質的專業醫生全面評估，嚴格排除腫瘤、嚴重感染等禁忌症；治療後需完成長期隨訪，密切監測身體指標，確保安全。</p>
<p><strong>警惕虛假宣傳</strong>：任何機構或個人宣稱幹細胞治療「包治百病」「絕對安全」「一針見效」均為虛假宣傳，需提高警惕。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>人脐带间充质干细胞治疗 2 型糖尿病，通过改善胰岛素抵抗、调节免疫等机制发挥作用，既能改善血糖控制，又能延缓并发症发生。细胞来源不涉及胚胎，具备较高的安全性与伦理合规性。</p>
<h3>一、突破传统治疗局限</h3>
<p>2 型糖尿病是常见的慢性代谢性疾病，核心病理特征为胰岛 β 细胞功能损伤或胰岛素抵抗。长期血糖控制不佳易引发视网膜病变、肾病、神经病变等多种严重并发症，严重影响生活质量与健康。</p>
<p>传统治疗主要依赖饮食调控、运动干预及外源降糖药物（或胰岛素）。虽能暂时控制血糖、延缓进展，但无法从根源上修复受损的胰岛功能，本质属于「被动控糖」。</p>
<p>脐带间充质干细胞治疗的核心定位，是通过激活人体自身细胞的修复能力，实现对病因的「主动干预」。</p>
<h3>二、核心作用机制：对应 2 型糖尿病病理</h3>
<p>该技术以间充质干细胞的多向分化、免疫调节及旁分泌效应为核心，针对 2 型糖尿病病理环节实现干预：</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-3.png" alt="间充质干细胞治疗 2 型糖尿病的作用机制" /></figure>
<p><strong>胰岛 β 细胞修复与再生</strong><br>定向分化：激活 PDX-1、Ngn3 等转录因子，分化为胰岛 β 样细胞，葡萄糖刺激胰岛素分泌能力可达天然 β 细胞的 78%–92%；诱导内源性胰岛 α 细胞向 β 细胞转分化。<br>保护存活：分泌 HGF、EGF 等抑制 β 细胞凋亡，外泌体携带 miR-375 等靶向抑制 Bax 等凋亡基因，提升细胞存活率。</p>
<p><strong>改善胰岛素抵抗与代谢稳态</strong><br>增强胰岛素敏感性：通过 AMPK/PI3K 通路促进 GLUT4 转位，提高糖摄取；下调 PEPCK 等基因，减少肝糖输出。<br>调节脂肪代谢：促进脂肪组织巨噬细胞向抗炎表型转化，降低 TNF-α 等炎症因子，缓解胰岛素抵抗。</p>
<p><strong>并发症防治与旁分泌效应</strong><br>修复微环境：分泌 VEGF 等促进血管新生，改善胰岛缺氧环境；外泌体抗纤维化、抗炎，保护肾脏，降低糖尿病肾病风险。<br>旁分泌核心：通过外泌体、细胞因子等远程调控代谢与免疫，干细胞归巢至胰腺进行修复，是主要疗效来源。</p>
<h3>三、从被动控糖到主动干预</h3>
<p>这一方向填补了 2 型糖尿病「根源性治疗」的空白，突破传统药物仅能控制血糖、无法修复胰岛功能的局限，推动治疗从「被动控糖」转向涵盖早期筛查、免疫干预、细胞修复和精准营养支持的综合防治。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-4.jpg" alt="糖尿病治疗从被动控糖到主动干预" /></figure>
<p>要走向成熟应用，还需把细胞制备、质量控制、疗效评价等环节标准化，才能为其他代谢性疾病的细胞治疗提供可复制的范本。</p>
<h3>四、健康管理与细胞干预需协同</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-5.png" alt="健康管理与细胞干预协同防治糖尿病" /></figure>
<p><strong>糖尿病健康管理</strong>：干细胞技术并非替代传统健康管理。对 2 型糖尿病患者而言，科学的健康管理仍是控制病情的基础。因个体差异，日常需制定营养饮食方案（减少高糖、高脂、高盐食物）、个性化运动方案，并定期监测血糖、血压、血脂，将健康管理与规范治疗相结合，才能更有效地延缓进展、降低并发症风险。</p>
<p><strong>规范诊疗流程</strong>：接受治疗前，必须经具备资质的专业医生全面评估，严格排除肿瘤、严重感染等禁忌症；治疗后需完成长期随访，密切监测身体指标，确保安全。</p>
<p><strong>警惕虚假宣传</strong>：任何机构或个人宣称干细胞治疗「包治百病」「绝对安全」「一针见效」均为虚假宣传，需提高警惕。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Umbilical-cord mesenchymal stem-cell (MSC) therapy for type 2 diabetes acts through improved insulin resistance and immune modulation. It may improve glycaemic control and delay complications. The cell source does not involve embryos, with a stronger ethical and safety profile than embryo-derived approaches.</p>
<h3>1. Beyond the limits of conventional care</h3>
<p>Type 2 diabetes is a common chronic metabolic disease. Its core pathology is injury to pancreatic β-cell function or insulin resistance. Poor long-term glucose control readily leads to retinopathy, nephropathy, neuropathy and other serious complications, harming quality of life and health.</p>
<p>Traditional care relies mainly on diet, exercise and exogenous glucose-lowering drugs (or insulin). These can temporarily control glucose and slow progression, but cannot repair damaged islet function at the root — essentially “passive glucose control”.</p>
<p>Umbilical-cord MSC therapy is positioned to break that limit: activating the body’s own cellular repair for “active intervention” on the cause.</p>
<h3>2. Core mechanisms, matched to type 2 diabetes pathology</h3>
<p>The technology centres on MSC multilineage differentiation, immunomodulation and paracrine effects, targeting core pathological links as follows:</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-3.png" alt="Mechanisms of MSC therapy in type 2 diabetes" /></figure>
<p><strong>β-cell repair and regeneration</strong><br>Directed differentiation: activating transcription factors such as PDX-1 and Ngn3 to become β-like cells, with glucose-stimulated insulin secretion at 78%–92% of native β cells; inducing endogenous α-to-β transdifferentiation.<br>Protecting survival: secreting HGF, EGF and others to inhibit β-cell apoptosis; exosomes carrying miR-375 and similar molecules that suppress apoptotic genes such as Bax, raising survival.</p>
<p><strong>Improving insulin resistance and metabolic homeostasis</strong><br>Raising insulin sensitivity: via the AMPK/PI3K pathway, promoting GLUT4 translocation and glucose uptake; down-regulating genes such as PEPCK, cutting hepatic glucose output.<br>Regulating fat metabolism: shifting adipose-tissue macrophages towards an anti-inflammatory phenotype, lowering TNF-α and other inflammatory factors, easing insulin resistance.</p>
<p><strong>Complication prevention and paracrine effects</strong><br>Repairing the microenvironment: secreting VEGF and others to promote angiogenesis and ease islet hypoxia; exosomes anti-fibrotic and anti-inflammatory, protecting the kidney and lowering diabetic-nephropathy risk.<br>Paracrine core: remote regulation of metabolism and immunity via exosomes and cytokines; stem cells homing to the pancreas for repair — the main source of efficacy.</p>
<h3>3. From passive glucose control to active intervention</h3>
<p>This direction fills a gap in “root-cause treatment” of type 2 diabetes, going beyond drugs that only control glucose and cannot repair islets, and pushing care from “passive glucose control” towards a combined approach of early screening, immune intervention, cell repair and precise nutritional support.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-4.jpg" alt="From passive glucose control to active intervention" /></figure>
<p>Mature use still requires standardisation of cell preparation, quality control and efficacy evaluation, so the same chain can be copied for other metabolic diseases.</p>
<h3>4. Health management and cell intervention belong together</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-7-5.png" alt="Health management and cell intervention in diabetes" /></figure>
<p><strong>Diabetes health management</strong>: stem-cell technology does not replace conventional health management. For people with type 2 diabetes, scientific self-management remains the basis for control. Because individuals differ, daily care still needs a diet (less high-sugar, high-fat, high-salt food), a personalised exercise plan, and regular monitoring of glucose, blood pressure and lipids. Combining health management with standard treatment is what delays progression and lowers complication risk more effectively.</p>
<p><strong>A proper care pathway</strong>: before treatment, a qualified clinician must assess fully and strictly exclude contraindications such as tumour and severe infection; after treatment, long-term follow-up is required, with close monitoring of body markers, to keep treatment safe.</p>
<p><strong>Beware false claims</strong>: any organisation or individual claiming stem-cell therapy “cures all diseases”, is “absolutely safe” or “works in one injection” is false advertising. Patients should stay alert.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "40",
    slug: "40",
    section: "longevity",
    eyebrow: "T Cells",
    cover: "/images/knowledge/longevity-8-3.png",
    image: "/images/knowledge/longevity-8-3.png",
    title: { "zh-HK": `Cell Research 重磅：我國院士團隊首破難題，人類 T 細胞化學重編程為多能幹細胞`, "zh-CN": `Cell Research 重磅：我国院士团队首破难题，人类 T 细胞化学重编程为多能干细胞`, en: `Cell Research: A Chinese Academy Team Chemically Reprograms Human T Cells into Pluripotent Stem Cells` },
    excerpt: { "zh-HK": `鄧宏魁團隊用純化學小分子將人類 T 細胞轉為多能幹細胞，並可再分化為年輕、保留抗癌特異性的 T 細胞。`, "zh-CN": `邓宏魁团队用纯化学小分子将人类 T 细胞转为多能干细胞，并可再分化为年轻、保留抗癌特异性的 T 细胞。`, en: `Deng Hongkui’s team used small molecules to turn human T cells into pluripotent stem cells that can be redifferentiated into young, cancer-specific T cells.` },
    body: { "zh-HK": `<p>T 細胞作為人體適應性免疫的核心，憑藉 T 細胞受體（TCR）精準識別並攻擊癌細胞、病毒感染細胞。基於其開發的 CAR-T、TCR-T 等過繼免疫療法，已在癌症、自身免疫疾病治療中成效顯著。但該類療法長期受兩大瓶頸制約：抗原特異性 T 細胞體外擴增數量有限且易耗竭，同時難以富集抗癌特異性 T 細胞，導致治療成本高昂、效果不穩定。</p>
<p>2026 年 1 月 16 日，北京大學鄧宏魁院士團隊在《Cell Research》發表重磅研究，首次利用化學重編程技術，將人類 T 細胞高效轉化為多能幹細胞，且可再分化為年輕、具備抗癌特異性的 T 細胞。這一突破有望破解 T 細胞來源不足、易耗竭的核心難題，為「現貨型」T 細胞療法的研發鋪平道路。</p>
<h3>一、化學重編程：讓成熟 T 細胞「返老還童」</h3>
<p>研究核心是將抗原特異性 T 細胞「還原」為多能幹細胞（PSC）——這類幹細胞具備無限自我更新能力，可分化為任意細胞類型，如同讓衰老的專業「免疫戰士」返老還童為可無限複製、重新訓練的「新兵」。</p>
<p>傳統轉錄因子重編程方法對人類 T 細胞效率極低，幾乎無法實現。鄧宏魁團隊獨闢蹊徑，採用純化學小分子策略，僅通過藥物組合調控細胞狀態，無需導入外源基因，安全性與可控性大幅提升。該團隊此前已成功用此方法重編程小鼠及人類細胞，本次首次針對終末分化的 T 細胞完成技術優化。</p>
<p>研究的關鍵突破在於攻克 T 細胞穩定身份的「防禦機制」：團隊經篩選發現，加入 EZH2 抑制劑 EPZ6438（靶向表觀遺傳調控蛋白），可有效瓦解 T 細胞的身份壁壘，使其轉變為上皮樣細胞並激活多能性基因。重編程分階段推進：早期以含 EZH2 抑制劑的小分子「雞尾酒」誘導 T 細胞聚團、喪失原有特徵；後續激活多能性基因，最終獲得 T 細胞來源的多能幹細胞（hT-CiPS 細胞），效率遠超傳統方法——每 8 萬個 T 細胞可產生數百個幹細胞克隆。</p>
<h3>二、hT-CiPS 細胞：完美傳承 T 細胞特異性</h3>
<p>這些 hT-CiPS 細胞不僅形態、基因表達與人類胚胎幹細胞高度吻合，更核心的是完整保留了原始 T 細胞的 TCR 基因重排。TCR 作為 T 細胞的「特異性身份證」，決定其抗原識別能力。測序證實每個 hT-CiPS 細胞系均有獨特 TCR 重排峯，源自不同親本 T 細胞，可大規模捕獲 T 細胞庫的多樣性。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-8-2.png" alt="hT-CiPS 細胞保留 TCR 特異性" /></figure>
<h3>三、再分化量產：「年輕化」抗癌 T 細胞落地可期</h3>
<p>更令人振奮的是，hT-CiPS 細胞可高效再分化為功能性 T 細胞。研究團隊藉助基質細胞培養系統模擬體內發育環境，成功誘導出表達 TCR 的 CD3+ T 細胞，分化效率優於其他來源幹細胞，且 99.8% 的新生 T 細胞 TCR 序列與親本 hT-CiPS 細胞完全一致，確保抗原特異性忠實傳承。</p>
<h3>四、未來可期：推動「現貨型」免疫療法普及</h3>
<p>該化學重編程平台優勢顯著：安全性上，純小分子操作無基因整合風險，流程易標準化；多樣性上，可大規模捕獲 TCR 多樣性，為多靶點抗癌「T 細胞庫」奠定基礎；可編輯性上，hT-CiPS 細胞便於基因編輯，有望進一步強化抗癌能力、降低排異反應。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-8-3.png" alt="化學重編程推動現貨型 T 細胞療法" /></figure>
<h3>結語</h3>
<p>研究團隊表示，該技術有望實現「現貨型」T 細胞產品的工業化生產——無需從患者體內提取 T 細胞，可通過幹細胞庫量產高質量特異性 T 細胞，大幅降低治療成本與等待時間。這項研究不僅彰顯了化學重編程調控細胞命運的強大潛力，更為再生醫學與免疫治療領域開闢了全新方向。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>T 细胞作为人体适应性免疫的核心，凭借 T 细胞受体（TCR）精准识别并攻击癌细胞、病毒感染细胞。基于其开发的 CAR-T、TCR-T 等过继免疫疗法，已在癌症、自身免疫疾病治疗中成效显著。但该类疗法长期受两大瓶颈制约：抗原特异性 T 细胞体外扩增数量有限且易耗竭，同时难以富集抗癌特异性 T 细胞，导致治疗成本高昂、效果不稳定。</p>
<p>2026 年 1 月 16 日，北京大学邓宏魁院士团队在《Cell Research》发表重磅研究，首次利用化学重编程技术，将人类 T 细胞高效转化为多能干细胞，且可再分化为年轻、具备抗癌特异性的 T 细胞。这一突破有望破解 T 细胞来源不足、易耗竭的核心难题，为「现货型」T 细胞疗法的研发铺平道路。</p>
<h3>一、化学重编程：让成熟 T 细胞「返老还童」</h3>
<p>研究核心是将抗原特异性 T 细胞「还原」为多能干细胞（PSC）——这类干细胞具备无限自我更新能力，可分化为任意细胞类型，如同让衰老的专业「免疫战士」返老还童为可无限复制、重新训练的「新兵」。</p>
<p>传统转录因子重编程方法对人类 T 细胞效率极低，几乎无法实现。邓宏魁团队独辟蹊径，采用纯化学小分子策略，仅通过药物组合调控细胞状态，无需导入外源基因，安全性与可控性大幅提升。该团队此前已成功用此方法重编程小鼠及人类细胞，本次首次针对终末分化的 T 细胞完成技术优化。</p>
<p>研究的关键突破在于攻克 T 细胞稳定身份的「防御机制」：团队经筛选发现，加入 EZH2 抑制剂 EPZ6438（靶向表观遗传调控蛋白），可有效瓦解 T 细胞的身份壁垒，使其转变为上皮样细胞并激活多能性基因。重编程分阶段推进：早期以含 EZH2 抑制剂的小分子「鸡尾酒」诱导 T 细胞聚团、丧失原有特征；后续激活多能性基因，最终获得 T 细胞来源的多能干细胞（hT-CiPS 细胞），效率远超传统方法——每 8 万个 T 细胞可产生数百个干细胞克隆。</p>
<h3>二、hT-CiPS 细胞：完美传承 T 细胞特异性</h3>
<p>这些 hT-CiPS 细胞不仅形态、基因表达与人类胚胎干细胞高度吻合，更核心的是完整保留了原始 T 细胞的 TCR 基因重排。TCR 作为 T 细胞的「特异性身份证」，决定其抗原识别能力。测序证实每个 hT-CiPS 细胞系均有独特 TCR 重排峰，源自不同亲本 T 细胞，可大规模捕获 T 细胞库的多样性。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-8-2.png" alt="hT-CiPS 细胞保留 TCR 特异性" /></figure>
<h3>三、再分化量产：「年轻化」抗癌 T 细胞落地可期</h3>
<p>更令人振奋的是，hT-CiPS 细胞可高效再分化为功能性 T 细胞。研究团队借助基质细胞培养系统模拟体内发育环境，成功诱导出表达 TCR 的 CD3+ T 细胞，分化效率优于其他来源干细胞，且 99.8% 的新生 T 细胞 TCR 序列与亲本 hT-CiPS 细胞完全一致，确保抗原特异性忠实传承。</p>
<h3>四、未来可期：推动「现货型」免疫疗法普及</h3>
<p>该化学重编程平台优势显著：安全性上，纯小分子操作无基因整合风险，流程易标准化；多样性上，可大规模捕获 TCR 多样性，为多靶点抗癌「T 细胞库」奠定基础；可编辑性上，hT-CiPS 细胞便于基因编辑，有望进一步强化抗癌能力、降低排异反应。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-8-3.png" alt="化学重编程推动现货型 T 细胞疗法" /></figure>
<h3>结语</h3>
<p>研究团队表示，该技术有望实现「现货型」T 细胞产品的工业化生产——无需从患者体内提取 T 细胞，可通过干细胞库量产高质量特异性 T 细胞，大幅降低治疗成本与等待时间。这项研究不仅彰显了化学重编程调控细胞命运的强大潜力，更为再生医学与免疫治疗领域开辟了全新方向。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>T cells sit at the core of adaptive immunity. Through the T-cell receptor (TCR) they recognise and attack cancer cells and virus-infected cells. Adoptive immunotherapies built on them — CAR-T, TCR-T and others — have already shown clear results in cancer and autoimmune disease. Two bottlenecks have long constrained them: antigen-specific T cells expand only in limited numbers in vitro and readily exhaust, and anti-cancer specific T cells are hard to enrich, so treatment is costly and unstable.</p>
<p>On 16 January 2026, Academician Deng Hongkui’s team at Peking University published a major study in <em>Cell Research</em>: the first efficient conversion of human T cells into pluripotent stem cells by chemical reprogramming, which can then be redifferentiated into young T cells that keep anti-cancer specificity. The breakthrough may unlock the shortage of T-cell source and exhaustion, and pave the way for “off-the-shelf” T-cell therapy.</p>
<h3>1. Chemical reprogramming: making mature T cells “young again”</h3>
<p>The core of the work is to “reset” antigen-specific T cells to pluripotent stem cells (PSCs) — cells with unlimited self-renewal that can become any cell type, like turning ageing professional “immune soldiers” back into endlessly copyable, retrainable “recruits”.</p>
<p>Traditional transcription-factor reprogramming is extremely inefficient in human T cells, almost unworkable. Deng’s team took a different path: a purely chemical small-molecule strategy, regulating cell state with a drug combination and no foreign genes, with a large gain in safety and control. The team had already reprogrammed mouse and human cells this way; this time they optimised the method for terminally differentiated T cells.</p>
<p>The key was breaking the “defence” that keeps T-cell identity stable. Screening showed that adding the EZH2 inhibitor EPZ6438 (targeting an epigenetic regulator) can dismantle that identity barrier, turning T cells into epithelial-like cells and activating pluripotency genes. Reprogramming proceeds in stages: early on, a small-molecule “cocktail” containing the EZH2 inhibitor induces T cells to cluster and lose their original features; later, pluripotency genes are activated, yielding T-cell-derived chemically induced pluripotent stem cells (hT-CiPS). Efficiency far exceeds traditional methods — hundreds of stem-cell clones from every 80,000 T cells.</p>
<h3>2. hT-CiPS cells: faithfully inheriting T-cell specificity</h3>
<p>These hT-CiPS cells match human embryonic stem cells closely in morphology and gene expression. More important, they fully retain the TCR gene rearrangements of the original T cells. The TCR is the T cell’s “identity card” for antigen recognition. Sequencing confirmed that each hT-CiPS line has a unique TCR rearrangement peak, from a different parental T cell, so the diversity of a T-cell repertoire can be captured at scale.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-8-2.png" alt="hT-CiPS cells retain TCR specificity" /></figure>
<h3>3. Redifferentiation at scale: youthful anti-cancer T cells in reach</h3>
<p>Still more striking, hT-CiPS cells can be redifferentiated efficiently into functional T cells. Using a stromal-cell culture system that mimics in-vivo development, the team induced CD3+ T cells expressing TCR, with higher differentiation efficiency than stem cells from other sources, and 99.8% of the new T cells had TCR sequences identical to the parental hT-CiPS cells — faithful inheritance of antigen specificity.</p>
<h3>4. Looking ahead: spreading “off-the-shelf” immunotherapy</h3>
<p>The chemical-reprogramming platform has clear strengths: on safety, pure small-molecule handling with no gene-integration risk and a process easy to standardise; on diversity, TCR diversity captured at scale, a foundation for a multi-target anti-cancer “T-cell library”; on editability, hT-CiPS cells are readily gene-edited, with potential to strengthen anti-cancer capacity and lower rejection.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-8-3.png" alt="Chemical reprogramming towards off-the-shelf T-cell therapy" /></figure>
<h3>Conclusion</h3>
<p>The team says the technology may enable industrial production of “off-the-shelf” T-cell products — without taking T cells from the patient, a stem-cell bank could mass-produce high-quality specific T cells, sharply cutting cost and waiting time. The study shows the power of chemical reprogramming to control cell fate, and opens a new direction in regenerative medicine and immunotherapy.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "41",
    slug: "41",
    section: "longevity",
    eyebrow: "Exosomes",
    cover: "/images/knowledge/longevity-9-1.png",
    image: "/images/knowledge/longevity-9-1.png",
    title: { "zh-HK": `幹細胞外泌體聯合激光 / 微針，在疤痕、色沉與膚質出現可量化改善`, "zh-CN": `干细胞外泌体联合激光 / 微针，在疤痕、色沉与肤质出现可量化改善`, en: `Stem-Cell Exosomes plus Laser or Microneedling: Quantifiable Gains in Scars, Pigment and Skin Quality` },
    excerpt: { "zh-HK": `系統綜述納入 6 項人體研究：外泌體與點陣激光或微針聯用，已出現疤痕、皺紋、彈性與色沉的可量化信號。`, "zh-CN": `系统综述纳入 6 项人体研究：外泌体与点阵激光或微针联用，已出现疤痕、皱纹、弹性与色沉的可量化信号。`, en: `A systematic review of six human studies: exosomes plus fractional laser or microneedling already show quantifiable signals in scars, wrinkles, elasticity and pigment.` },
    body: { "zh-HK": `<p>近日，期刊《Reports》（MDPI）發表系統綜述，按 PRISMA 流程梳理 2010–2025 年相關文獻，最終納入 6 項人體研究、共 99 名受試者（19–72 歲），主題聚焦：間充質幹細胞外泌體（MSC-Exos）用於疤痕、皮膚老化與色素沉着的臨牀結局與安全性。</p>
<p>綜述給出了一個非常清晰的趨勢：在小樣本、以分側對照為主的研究中，外泌體與點陣激光 / 微針等「打開通道」的手段結合，已出現可量化的改善信號。如：減少瘢痕厚度（−32.5%）、減少皺紋（降低 1 個等級）、降低黑色素指數、提升皮膚彈性（+11.3%）與水分含量。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-2.png" alt="外泌體聯合激光或微針的可量化改善" /></figure>
<h3>一、外泌體：從「細胞」到「信號」</h3>
<p>外泌體可理解為細胞釋放的納米級「信息包」，攜帶蛋白、脂質與 RNA 等信號分子。它不是活細胞，卻被視為一條更可控的「無細胞路線」：用製劑形態承接 MSC 的旁分泌修復邏輯，便於質控與組合應用。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-3.png" alt="外泌體作為無細胞修復信號" /></figure>
<h3>二、為何常與激光 / 微針聯用：在修復窗口疊加信號</h3>
<p>皮膚屏障讓單純外用遞送受限；而點陣激光、微針等可形成微通道並觸發短暫的創面修復窗口。此時疊加外泌體，更像在關鍵時段補上一組指向炎症調控、膠原重塑與色素代謝的信號，從而放大「療效與體驗」的綜合收益。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-4.png" alt="激光或微針打開通道後疊加外泌體" /></figure>
<h3>三、疤痕方面：量表改善更顯著，並伴隨更短恢復期</h3>
<p>綜述納入的分側、隨機、雙盲研究以點陣 CO₂ 激光治療痤瘡萎縮性瘢痕為基礎：同一受試者兩側分別使用外泌體凝膠與對照凝膠。結果顯示，外泌體側 ECCA 評分改善幅度更大（約 32.5% vs 19.9%），且紅斑更輕、恢復期更短。對皮膚醫美場景而言，這類「更快恢復 + 更好指標」的組合，具有很強的轉化解釋力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-5.png" alt="外泌體聯合點陣激光改善痤瘡疤痕" /></figure>
<h3>四、膚質與色沉：彈性、含水、黑色素指數可被儀器捕捉</h3>
<p>在另一項分側隨機研究中，外泌體溶液聯合微針，與對照側（生理鹽水 + 微針）比較：12 周隨訪裏，外泌體側在多項膚質參數上更佔優勢——皮膚彈性約 +11.3%（對照側下降），含水約 +6.5%，黑色素指數約 −9.9%。此外，納入的色素沉着研究提示持續外用 8 周可從第 4 周起與對照拉開差異，但也強調療效與遞送效率高度相關。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-6.png" alt="外泌體聯合微針改善膚質與色沉" /></figure>
<h3>五、安全性：以輕度、短暫的局部反應為主</h3>
<p>綜述彙總的不良反應多為局部紅斑、輕度腫脹、乾燥或點狀出血等，通常短暫可逆；在納入的人體研究中未見系統性嚴重風險信號。對「可重複交付」的技術路線而言，這一點同樣關鍵。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-7.png" alt="外泌體聯合治療的安全性" /></figure>
<h3>結語</h3>
<p>從「細胞」到「外泌體」，不是降級，而是把再生醫學的一部分能力裝進更可製造、可質控、可組合的載體裏。這份綜述的意義在於：把散落的人體數據集中擺出來，證明「可量化信號」已出現。</p>
<p>資料來源：《Reports》（MDPI）2025；8(4):268（系統綜述，納入研究詳見原文參考文獻）</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>近日，期刊《Reports》（MDPI）发表系统综述，按 PRISMA 流程梳理 2010–2025 年相关文献，最终纳入 6 项人体研究、共 99 名受试者（19–72 岁），主题聚焦：间充质干细胞外泌体（MSC-Exos）用于疤痕、皮肤老化与色素沉着的临床结局与安全性。</p>
<p>综述给出了一个非常清晰的趋势：在小样本、以分侧对照为主的研究中，外泌体与点阵激光 / 微针等「打开通道」的手段结合，已出现可量化的改善信号。如：减少瘢痕厚度（−32.5%）、减少皱纹（降低 1 个等级）、降低黑色素指数、提升皮肤弹性（+11.3%）与水分含量。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-2.png" alt="外泌体联合激光或微针的可量化改善" /></figure>
<h3>一、外泌体：从「细胞」到「信号」</h3>
<p>外泌体可理解为细胞释放的纳米级「信息包」，携带蛋白、脂质与 RNA 等信号分子。它不是活细胞，却被视为一条更可控的「无细胞路线」：用制剂形态承接 MSC 的旁分泌修复逻辑，便于质控与组合应用。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-3.png" alt="外泌体作为无细胞修复信号" /></figure>
<h3>二、为何常与激光 / 微针联用：在修复窗口叠加信号</h3>
<p>皮肤屏障让单纯外用递送受限；而点阵激光、微针等可形成微通道并触发短暂的创面修复窗口。此时叠加外泌体，更像在关键时段补上一组指向炎症调控、胶原重塑与色素代谢的信号，从而放大「疗效与体验」的综合收益。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-4.png" alt="激光或微针打开通道后叠加外泌体" /></figure>
<h3>三、疤痕方面：量表改善更显著，并伴随更短恢复期</h3>
<p>综述纳入的分侧、随机、双盲研究以点阵 CO₂ 激光治疗痤疮萎缩性瘢痕为基础：同一受试者两侧分别使用外泌体凝胶与对照凝胶。结果显示，外泌体侧 ECCA 评分改善幅度更大（约 32.5% vs 19.9%），且红斑更轻、恢复期更短。对皮肤医美场景而言，这类「更快恢复 + 更好指标」的组合，具有很强的转化解释力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-5.png" alt="外泌体联合点阵激光改善痤疮疤痕" /></figure>
<h3>四、肤质与色沉：弹性、含水、黑色素指数可被仪器捕捉</h3>
<p>在另一项分侧随机研究中，外泌体溶液联合微针，与对照侧（生理盐水 + 微针）比较：12 周随访里，外泌体侧在多项肤质参数上更占优势——皮肤弹性约 +11.3%（对照侧下降），含水约 +6.5%，黑色素指数约 −9.9%。此外，纳入的色素沉着研究提示持续外用 8 周可从第 4 周起与对照拉开差异，但也强调疗效与递送效率高度相关。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-6.png" alt="外泌体联合微针改善肤质与色沉" /></figure>
<h3>五、安全性：以轻度、短暂的局部反应为主</h3>
<p>综述汇总的不良反应多为局部红斑、轻度肿胀、干燥或点状出血等，通常短暂可逆；在纳入的人体研究中未见系统性严重风险信号。对「可重复交付」的技术路线而言，这一点同样关键。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-7.png" alt="外泌体联合治疗的安全性" /></figure>
<h3>结语</h3>
<p>从「细胞」到「外泌体」，不是降级，而是把再生医学的一部分能力装进更可制造、可质控、可组合的载体里。这份综述的意义在于：把散落的人体数据集中摆出来，证明「可量化信号」已出现。</p>
<p>资料来源：《Reports》（MDPI）2025；8(4):268（系统综述，纳入研究详见原文参考文献）</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>A systematic review in <em>Reports</em> (MDPI), following PRISMA, surveyed the literature from 2010–2025 and included six human studies with 99 participants (aged 19–72). The focus: clinical outcomes and safety of mesenchymal stem-cell exosomes (MSC-Exos) for scars, skin ageing and pigmentation.</p>
<p>The review shows a clear trend: in small, mostly split-face controlled studies, combining exosomes with “channel-opening” methods such as fractional laser or microneedling has already produced quantifiable signals of improvement — for example scar thickness −32.5%, wrinkles down by one grade, a lower melanin index, and higher skin elasticity (+11.3%) and water content.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-2.png" alt="Quantifiable improvement from exosomes plus laser or microneedling" /></figure>
<h3>1. Exosomes: from “cell” to “signal”</h3>
<p>Exosomes can be thought of as nano-scale “information packs” released by cells, carrying proteins, lipids, RNA and other signalling molecules. They are not living cells, but are seen as a more controllable “cell-free route”: a formulation that carries the paracrine repair logic of MSCs, easier to quality-control and combine.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-3.png" alt="Exosomes as a cell-free repair signal" /></figure>
<h3>2. Why they are often combined with laser / microneedling: stacking signals in the repair window</h3>
<p>The skin barrier limits simple topical delivery. Fractional laser, microneedling and similar methods can create micro-channels and trigger a brief wound-repair window. Adding exosomes then is more like supplying, at a critical moment, a set of signals aimed at inflammation control, collagen remodelling and pigment metabolism — amplifying the combined gain in “result and experience”.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-4.png" alt="Exosomes stacked after laser or microneedling opens channels" /></figure>
<h3>3. Scars: larger scale improvements, and a shorter recovery</h3>
<p>A split-face, randomised, double-blind study in the review used fractional CO₂ laser for atrophic acne scars: the same person received exosome gel on one side and control gel on the other. The exosome side improved more on the ECCA score (about 32.5% vs 19.9%), with less erythema and a shorter recovery. For medical aesthetics, a combination of “faster recovery + better metrics” is highly translatable.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-5.png" alt="Exosomes plus fractional laser for acne scars" /></figure>
<h3>4. Skin quality and pigment: elasticity, hydration and melanin index can be captured by devices</h3>
<p>In another split-face randomised study, an exosome solution plus microneedling was compared with the control side (saline + microneedling). Over 12 weeks of follow-up, the exosome side led on several skin-quality parameters — elasticity about +11.3% (the control side fell), hydration about +6.5%, melanin index about −9.9%. Pigmentation studies included also suggested that eight weeks of continued topical use can pull away from control from week 4, while stressing that efficacy is highly tied to delivery efficiency.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-6.png" alt="Exosomes plus microneedling for skin quality and pigment" /></figure>
<h3>5. Safety: mainly mild, brief local reactions</h3>
<p>Adverse events summarised in the review were mostly local erythema, mild swelling, dryness or pinpoint bleeding, usually brief and reversible; no signal of systemic serious risk appeared in the included human studies. For a “repeatably deliverable” technical path, that point matters too.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-9-7.png" alt="Safety of combined exosome treatment" /></figure>
<h3>Conclusion</h3>
<p>Moving from “cell” to “exosome” is not a downgrade. It is packing part of regenerative medicine’s capacity into a carrier that is more manufacturable, controllable and combinable. The value of this review is to put scattered human data on the table, and show that a “quantifiable signal” is already there.</p>
<p>Source: <em>Reports</em> (MDPI) 2025; 8(4):268 (systematic review; see the original paper for included studies).</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "42",
    slug: "42",
    section: "longevity",
    eyebrow: "Immune Storage",
    cover: "/images/knowledge/longevity-10-1.png",
    image: "/images/knowledge/longevity-10-1.png",
    title: { "zh-HK": `「趁年輕、趁健康」，存儲免疫細胞，為未來存下一份「健康保險」`, "zh-CN": `「趁年轻、趁健康」，存储免疫细胞，为未来存下一份「健康保险」`, en: `Store Immune Cells While Young and Healthy — A Health Policy for the Future` },
    excerpt: { "zh-HK": `免疫力約在 20 歲見頂、40 歲後明顯下降。健康時儲存自體免疫細胞，等於為未來鎖定一份可取用的細胞資源。`, "zh-CN": `免疫力约在 20 岁见顶、40 岁后明显下降。健康时储存自体免疫细胞，等于为未来锁定一份可取用的细胞资源。`, en: `Immunity peaks around 20 and falls after 40. Storing your own immune cells while healthy locks in a usable cell resource for later.` },
    body: { "zh-HK": `<p>在健康日益成為全民關注的今天，很多人都知道為新生兒儲存幹細胞等珍貴細胞資源，為孩子的未來健康增添一份保障。然而，許多人不知道的是，成人同樣有機會為自己的健康提前佈局——免疫細胞儲存，正是送給未來自己的一份「健康禮物」。</p>
<h3>一、為什麼要存儲免疫細胞？</h3>
<p>如果把人體比作一個有序運行的王國，免疫細胞就是忠誠的「衞戍部隊」。它們日夜巡邏，精準識別並清除癌變、衰老或異常細胞，守護着身體的健康防線。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-2.jpg" alt="免疫細胞守護健康防線" /></figure>
<p>然而，隨着年齡增長，加上環境壓力、不良生活習慣（如長期熬夜、飲食失衡、過度勞累）的影響，我們體內的免疫細胞不僅數量會逐漸減少，功能也會持續衰退，導致免疫力日益下降。</p>
<p>研究顯示，人體免疫力在 20 歲左右達到頂峯，40 歲後免疫細胞的數量與活性顯著降低，這也正是許多重大疾病（如癌症）開始高發的重要轉折點。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-3.png" alt="免疫力隨年齡下降" /></figure>
<h3>二、儲存免疫細胞能做什麼？</h3>
<p>存儲的自體免疫細胞具有獨特優勢：它完全來源於自身，無需配型，從根本上避免了排異風險。在健康時提前儲存，等於為未來鎖定一份安全可靠、隨取隨用的細胞資源。</p>
<p><strong>1. 預防腫瘤</strong><br>人體每天會產生成千上萬個癌細胞，當自身免疫細胞活性降低時，癌細胞會乘虛而入。免疫細胞療法旨在幫助清除癌細胞，為生命帶來新的希望。</p>
<p><strong>2. 提高免疫力</strong><br>免疫細胞能精準識別和清除外來病原體，有效抵禦病毒、細菌等侵襲，從而鞏固人體免疫防線。這不僅有助於整體免疫力的提升，也從長遠上降低了心腦血管疾病、糖尿病等慢性病的患病風險。</p>
<p><strong>3. 延緩衰老</strong><br>人體是由細胞構成的，人體的衰老也是從細胞開始。免疫細胞可以清除老化死亡的細胞，促進新細胞的生長，延緩衰老進程，恢復皮膚彈性，減少皮膚皺紋和色素沉着，維護年輕狀態。</p>
<p><strong>4. 改善亞健康</strong><br>亞健康是人體介於健康和疾病的臨界點，也是身體發出的警訊。免疫細胞可以幫助亞健康人羣改善睡眠質量，迅速提升機體活力，增強體質，消除疲勞乏力體虛等症狀，恢復機體免疫平衡。</p>
<h3>三、哪些人適合儲存免疫細胞？</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-4.jpg" alt="適合儲存免疫細胞的人羣" /></figure>
<ul>
<li><strong>20 歲以上人羣</strong>：免疫力隨年齡增長自然下降，越早儲存越有價值。</li>
<li><strong>腫瘤風險偏高者</strong>：有病毒感染史（如 HBV、HPV、幽門螺桿菌等）或腫瘤家族史的人羣。</li>
<li><strong>生活習慣不良者</strong>：長期熬夜、飲食不規律、缺乏運動、壓力過大的人羣。</li>
<li><strong>愛美及抗衰人士</strong>：希望改善身體狀態、延緩衰老、保持年輕活力的人羣。</li>
<li><strong>常接觸有害環境者</strong>：長期處於輻射、化學物質、裝修污染等環境中工作或生活的人羣。</li>
<li><strong>長期亞健康者</strong>：超重或肥胖、吸煙或長期處於二手煙環境、過量飲酒、長期精神緊張、免疫力持續低下的人羣。</li>
</ul>
<h3>四、免疫細胞存儲流程</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-5.jpg" alt="免疫細胞存儲流程" /></figure>
<p>免疫細胞存儲的流程主要分為以下四步：</p>
<ol>
<li><strong>外周血採集</strong>：在體檢合格後，由專業人員使用配套設備採集外周血。</li>
<li><strong>樣本運輸</strong>：採用恆温運輸系統，將外周血運送至細胞製備機構。</li>
<li><strong>檢測與製備</strong>：由 GMP 細胞實驗室人員對外周血進行質量檢測與製備。</li>
<li><strong>細胞存儲</strong>：將製備好的免疫細胞存入 −196℃ 液氮罐中進行凍存。</li>
</ol>
<p>把握現在，儲備未來。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>在健康日益成为全民关注的今天，很多人都知道为新生儿储存干细胞等珍贵细胞资源，为孩子的未来健康增添一份保障。然而，许多人不知道的是，成人同样有机会为自己的健康提前布局——免疫细胞储存，正是送给未来自己的一份「健康礼物」。</p>
<h3>一、为什么要存储免疫细胞？</h3>
<p>如果把人体比作一个有序运行的王国，免疫细胞就是忠诚的「卫戍部队」。它们日夜巡逻，精准识别并清除癌变、衰老或异常细胞，守护着身体的健康防线。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-2.jpg" alt="免疫细胞守护健康防线" /></figure>
<p>然而，随着年龄增长，加上环境压力、不良生活习惯（如长期熬夜、饮食失衡、过度劳累）的影响，我们体内的免疫细胞不仅数量会逐渐减少，功能也会持续衰退，导致免疫力日益下降。</p>
<p>研究显示，人体免疫力在 20 岁左右达到顶峰，40 岁后免疫细胞的数量与活性显著降低，这也正是许多重大疾病（如癌症）开始高发的重要转折点。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-3.png" alt="免疫力随年龄下降" /></figure>
<h3>二、储存免疫细胞能做什么？</h3>
<p>存储的自体免疫细胞具有独特优势：它完全来源于自身，无需配型，从根本上避免了排异风险。在健康时提前储存，等于为未来锁定一份安全可靠、随取随用的细胞资源。</p>
<p><strong>1. 预防肿瘤</strong><br>人体每天会产生成千上万个癌细胞，当自身免疫细胞活性降低时，癌细胞会乘虚而入。免疫细胞疗法旨在帮助清除癌细胞，为生命带来新的希望。</p>
<p><strong>2. 提高免疫力</strong><br>免疫细胞能精准识别和清除外来病原体，有效抵御病毒、细菌等侵袭，从而巩固人体免疫防线。这不仅有助于整体免疫力的提升，也从长远上降低了心脑血管疾病、糖尿病等慢性病的患病风险。</p>
<p><strong>3. 延缓衰老</strong><br>人体是由细胞构成的，人体的衰老也是从细胞开始。免疫细胞可以清除老化死亡的细胞，促进新细胞的生长，延缓衰老进程，恢复皮肤弹性，减少皮肤皱纹和色素沉着，维护年轻状态。</p>
<p><strong>4. 改善亚健康</strong><br>亚健康是人体介于健康和疾病的临界点，也是身体发出的警讯。免疫细胞可以帮助亚健康人群改善睡眠质量，迅速提升机体活力，增强体质，消除疲劳乏力体虚等症状，恢复机体免疫平衡。</p>
<h3>三、哪些人适合储存免疫细胞？</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-4.jpg" alt="适合储存免疫细胞的人群" /></figure>
<ul>
<li><strong>20 岁以上人群</strong>：免疫力随年龄增长自然下降，越早储存越有价值。</li>
<li><strong>肿瘤风险偏高者</strong>：有病毒感染史（如 HBV、HPV、幽门螺杆菌等）或肿瘤家族史的人群。</li>
<li><strong>生活习惯不良者</strong>：长期熬夜、饮食不规律、缺乏运动、压力过大的人群。</li>
<li><strong>爱美及抗衰人士</strong>：希望改善身体状态、延缓衰老、保持年轻活力的人群。</li>
<li><strong>常接触有害环境者</strong>：长期处于辐射、化学物质、装修污染等环境中工作或生活的人群。</li>
<li><strong>长期亚健康者</strong>：超重或肥胖、吸烟或长期处于二手烟环境、过量饮酒、长期精神紧张、免疫力持续低下的人群。</li>
</ul>
<h3>四、免疫细胞存储流程</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-5.jpg" alt="免疫细胞存储流程" /></figure>
<p>免疫细胞存储的流程主要分为以下四步：</p>
<ol>
<li><strong>外周血采集</strong>：在体检合格后，由专业人员使用配套设备采集外周血。</li>
<li><strong>样本运输</strong>：采用恒温运输系统，将外周血运送至细胞制备机构。</li>
<li><strong>检测与制备</strong>：由 GMP 细胞实验室人员对外周血进行质量检测与制备。</li>
<li><strong>细胞存储</strong>：将制备好的免疫细胞存入 −196℃ 液氮罐中进行冻存。</li>
</ol>
<p>把握现在，储备未来。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>As health becomes a nationwide concern, many people already know about storing precious cell resources such as stem cells for a newborn. Fewer know that adults can also plan ahead: storing immune cells is a health gift to one’s future self.</p>
<h3>1. Why store immune cells?</h3>
<p>If the body is a well-run kingdom, immune cells are the loyal garrison. They patrol day and night, recognising and clearing cancerous, senescent or abnormal cells.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-2.jpg" alt="Immune cells guarding the body’s defences" /></figure>
<p>With age, environmental stress and poor habits, immune cells fall in number and lose function, so immunity declines.</p>
<p>Research shows immunity peaks around age 20; after 40, immune-cell numbers and activity drop markedly — a turning point when many major diseases, including cancer, become more common.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-3.png" alt="Immunity declining with age" /></figure>
<h3>2. What can stored immune cells do?</h3>
<p>Autologous immune cells come entirely from oneself, need no matching, and avoid rejection. Storing them while healthy locks in a ready-to-use cell resource.</p>
<p><strong>1. Tumour prevention</strong><br>The body produces thousands of cancer cells every day. When immune-cell activity falls, cancer cells can slip through. Immune-cell therapy aims to help clear them.</p>
<p><strong>2. Raising immunity</strong><br>Immune cells recognise and clear pathogens, consolidating the immune line and, over the long term, may lower the risk of cardiovascular disease, diabetes and other chronic conditions.</p>
<p><strong>3. Slowing ageing</strong><br>The body is made of cells, and ageing starts with cells. Immune cells can clear aged cells, promote new growth, slow ageing and help maintain a younger state of skin and vitality.</p>
<p><strong>4. Improving sub-health</strong><br>Sub-health sits between health and disease. Immune cells may help sleep, vitality, fatigue and immune balance.</p>
<h3>3. Who may consider storing immune cells?</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-4.jpg" alt="Who may consider storing immune cells" /></figure>
<ul>
<li><strong>Adults over 20</strong>: immunity falls with age; earlier storage has more value.</li>
<li><strong>Higher tumour risk</strong>: viral infection history (HBV, HPV, H. pylori) or a family history of cancer.</li>
<li><strong>Poor lifestyle</strong>: chronic late nights, irregular diet, little exercise, high stress.</li>
<li><strong>Those seeking anti-ageing</strong>: people who want to slow ageing and keep vitality.</li>
<li><strong>Harmful environments</strong>: long-term radiation, chemicals or renovation pollution.</li>
<li><strong>Long-term sub-health</strong>: overweight, smoking or second-hand smoke, heavy drinking, chronic tension, persistently low immunity.</li>
</ul>
<h3>4. The storage process</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-10-5.jpg" alt="Immune-cell storage process" /></figure>
<ol>
<li><strong>Peripheral-blood collection</strong> after a qualifying health check.</li>
<li><strong>Sample transport</strong> in a temperature-controlled system to a cell-preparation facility.</li>
<li><strong>Testing and preparation</strong> by GMP laboratory staff.</li>
<li><strong>Cryostorage</strong> at −196°C in liquid nitrogen.</li>
</ol>
<p>Hold the present; reserve the future.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "43",
    slug: "43",
    section: "longevity",
    eyebrow: "Anti-inflammatory",
    cover: "/images/knowledge/longevity-11-1.jpg",
    image: "/images/knowledge/longevity-11-1.jpg",
    title: { "zh-HK": `幹細胞抗炎、抗衰、抗病三重奏，讓衰老慢下來，讓慢病好起來`, "zh-CN": `干细胞抗炎、抗衰、抗病三重奏，让衰老慢下来，让慢病好起来`, en: `Stem Cells in Three Parts: Anti-Inflammatory, Anti-Ageing, Anti-Disease` },
    excerpt: { "zh-HK": `幹細胞以抗炎、抗衰、抗病三條路徑，試圖打斷炎症–衰老–疾病的循環；一項五年前瞻性研究提示長期健康潛力。`, "zh-CN": `干细胞以抗炎、抗衰、抗病三条路径，试图打断炎症–衰老–疾病的循环；一项五年前瞻性研究提示长期健康潜力。`, en: `Stem cells act on inflammation, ageing and disease together. A five-year prospective study hints at long-term health potential.` },
    body: { "zh-HK": `<p>一切健康問題的根源，都藏在細胞裏。當細胞活力下降、修復能力衰退，各類健康隱患便會悄然滋生。隨着健康管理理念的升級，越來越多家庭已將視角從「事後治療」轉向「事前干預」，而幹細胞治療憑藉其獨特的細胞修復與再生能力，正成為不少家庭健康規劃中的選項。</p>
<h3>一、幹細胞打破炎症–衰老–疾病惡性循環</h3>
<p><strong>01. 抗炎特性</strong><br>幹細胞通過前列腺素 E2（PGE2）、TSG-6、IGF-1 等抗炎因子抑制炎症產生；還可抑制促炎細胞的活化和增殖，促進調節性 T 細胞增殖，平衡免疫與炎症反應。</p>
<p><strong>02. 抗衰原理</strong><br>炎症與衰老密切相關，幹細胞回輸可以降低炎症水平與衰老標誌物水平。幹細胞可分化為神經細胞、血管內皮細胞、肝細胞等並遷移到相應部位，改善組織器官功能，改善老年衰弱症狀。</p>
<p><strong>03. 抗病能力</strong><br>幹細胞具有分化出人體多種功能性細胞的能力，並自帶「導航系統」歸巢到肝臟、胰腺、關節等部位，同時分泌生長因子、細胞因子、外泌體等促進血管新生，調節炎症，為組織修復創造有利環境。</p>
<h3>二、讓抗衰與慢病管理進入新階段</h3>
<p>2025 年發表於 <em>Regenerative Engineering and Translational Medicine</em> 的一項通過輸注幹細胞抗衰老、為期 5 年的前瞻性研究，參與者平均年齡為 55±13 歲。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-11-2.jpg" alt="幹細胞輸注五年前瞻性研究" /></figure>
<p>經過 5 年後，無論年齡大小，所有健康者都保持健康，細胞使用劑量較高者炎症水平較低，提示高數量幹細胞輸注可維持免疫調節與抗炎作用長達 5 年。即使是年齡超過 60 歲的受試者，其肝、腎、心肺等關鍵器官參數也依舊保持穩定。</p>
<h3>三、幹細胞相比傳統治療的四大核心優勢</h3>
<ul>
<li><strong>根源修復</strong>：傳統治療多針對症狀作短期緩解；幹細胞針對發病根源。</li>
<li><strong>療效持久</strong>：傳統藥物具有階段性，容易復發；幹細胞可長期在體內發揮作用，例如骨關節炎治療中有長達 5 年的隨訪研究。</li>
<li><strong>安全性</strong>：長期服用藥物難以避免對肝腎造成負擔；幹細胞作為活細胞干預，目標是修復缺損。</li>
<li><strong>系統化改善</strong>：藥物治療一般需多種合併使用；幹細胞往往採用靜脈回輸或聯合靶向治療，實現多器官、多功能改善。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-11-3.jpg" alt="幹細胞抗炎抗衰抗病" /></figure>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>一切健康问题的根源，都藏在细胞里。当细胞活力下降、修复能力衰退，各类健康隐患便会悄然滋生。随着健康管理理念的升级，越来越多家庭已将视角从「事后治疗」转向「事前干预」，而干细胞治疗凭借其独特的细胞修复与再生能力，正成为不少家庭健康规划中的选项。</p>
<h3>一、干细胞打破炎症–衰老–疾病恶性循环</h3>
<p><strong>01. 抗炎特性</strong><br>干细胞通过前列腺素 E2（PGE2）、TSG-6、IGF-1 等抗炎因子抑制炎症产生；还可抑制促炎细胞的活化和增殖，促进调节性 T 细胞增殖，平衡免疫与炎症反应。</p>
<p><strong>02. 抗衰原理</strong><br>炎症与衰老密切相关，干细胞回输可以降低炎症水平与衰老标志物水平。干细胞可分化为神经细胞、血管内皮细胞、肝细胞等并迁移到相应部位，改善组织器官功能，改善老年衰弱症状。</p>
<p><strong>03. 抗病能力</strong><br>干细胞具有分化出人体多种功能性细胞的能力，并自带「导航系统」归巢到肝脏、胰腺、关节等部位，同时分泌生长因子、细胞因子、外泌体等促进血管新生，调节炎症，为组织修复创造有利环境。</p>
<h3>二、让抗衰与慢病管理进入新阶段</h3>
<p>2025 年发表于 <em>Regenerative Engineering and Translational Medicine</em> 的一项通过输注干细胞抗衰老、为期 5 年的前瞻性研究，参与者平均年龄为 55±13 岁。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-11-2.jpg" alt="干细胞输注五年前瞻性研究" /></figure>
<p>经过 5 年后，无论年龄大小，所有健康者都保持健康，细胞使用剂量较高者炎症水平较低，提示高数量干细胞输注可维持免疫调节与抗炎作用长达 5 年。即使是年龄超过 60 岁的受试者，其肝、肾、心肺等关键器官参数也依旧保持稳定。</p>
<h3>三、干细胞相比传统治疗的四大核心优势</h3>
<ul>
<li><strong>根源修复</strong>：传统治疗多针对症状作短期缓解；干细胞针对发病根源。</li>
<li><strong>疗效持久</strong>：传统药物具有阶段性，容易复发；干细胞可长期在体内发挥作用，例如骨关节炎治疗中有长达 5 年的随访研究。</li>
<li><strong>安全性</strong>：长期服用药物难以避免对肝肾造成负担；干细胞作为活细胞干预，目标是修复缺损。</li>
<li><strong>系统化改善</strong>：药物治疗一般需多种合并使用；干细胞往往采用静脉回输或联合靶向治疗，实现多器官、多功能改善。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-11-3.jpg" alt="干细胞抗炎抗衰抗病" /></figure>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>The root of health problems sits in the cell. When vitality falls and repair weakens, hazards grow. Health management is shifting from treating after the fact to intervening beforehand, and stem-cell therapy has become an option in many family health plans.</p>
<h3>1. Breaking the inflammation–ageing–disease cycle</h3>
<p><strong>01. Anti-inflammatory</strong><br>Factors such as PGE2, TSG-6 and IGF-1 suppress inflammation; stem cells also inhibit pro-inflammatory cells and promote regulatory T cells.</p>
<p><strong>02. Anti-ageing</strong><br>Infusion can lower inflammation and ageing markers. Stem cells may become neurons, endothelial cells or hepatocytes, migrate to the relevant sites and improve frailty.</p>
<p><strong>03. Anti-disease</strong><br>They home to liver, pancreas, joints and similar sites, secreting growth factors, cytokines and exosomes that promote angiogenesis and a repair-friendly environment.</p>
<h3>2. A new stage for anti-ageing and chronic-disease care</h3>
<p>A five-year prospective study in 2025 in <em>Regenerative Engineering and Translational Medicine</em> enrolled participants with a mean age of 55±13 years.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-11-2.jpg" alt="Five-year prospective stem-cell infusion study" /></figure>
<p>After five years, healthy participants remained healthy; higher cell doses were linked with lower inflammation, suggesting immunomodulation and anti-inflammatory effects for up to five years. Even subjects over 60 kept stable liver, kidney, heart and lung parameters.</p>
<h3>3. Four core advantages versus conventional treatment</h3>
<ul>
<li><strong>Root repair</strong> rather than short-term symptom relief.</li>
<li><strong>Lasting effect</strong>, including osteoarthritis follow-up of up to five years.</li>
<li><strong>Safety profile</strong> as a living-cell repair intervention versus long-term drug burden on liver and kidney.</li>
<li><strong>Systemic improvement</strong> via intravenous or targeted delivery across organs.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-11-3.jpg" alt="Stem cells against inflammation, ageing and disease" /></figure>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "44",
    slug: "44",
    section: "longevity",
    eyebrow: "Ageing Hallmarks",
    cover: "/images/knowledge/longevity-12-2.png",
    image: "/images/knowledge/longevity-12-2.png",
    title: { "zh-HK": `人體衰老的重要標誌——免疫細胞衰老和幹細胞耗竭`, "zh-CN": `人体衰老的重要标志——免疫细胞衰老和干细胞耗竭`, en: `Hallmarks of Human Ageing: Immune-Cell Senescence and Stem-Cell Exhaustion` },
    excerpt: { "zh-HK": `《Cell》綜述提出衰老十二大標誌。與細胞最相關的是細胞衰老、幹細胞耗竭與細胞間通訊改變；衰老的免疫細胞會加速全身衰老。`, "zh-CN": `《Cell》综述提出衰老十二大标志。与细胞最相关的是细胞衰老、干细胞耗竭与细胞间通讯改变；衰老的免疫细胞会加速全身衰老。`, en: `A Cell review lists twelve hallmarks of ageing. Those closest to cells are senescence, stem-cell exhaustion and altered communication; senescent immune cells speed up whole-body ageing.` },
    body: { "zh-HK": `<p>近年來科學家在人體衰老方面不斷探索。西班牙奧維耶多大學腫瘤研究所和法國巴黎大學的科學家在《Cell》發表了題為 Hallmarks of aging: An expanding universe 的綜述，創造性地提出了衰老的十二個標誌，對理解衰老的發生、發展以及干預有着巨大意義。</p>
<h3>一、身體衰老有哪些標誌和信號？</h3>
<p>自《Cell》發表第一版「衰老的標誌」以來，有近 30 萬篇衰老研究論文發表。原班人馬在 2013 年綜述基礎上，進一步定義了衰老的十二大標誌：基因組穩定性喪失、端粒損耗、表觀遺傳改變、蛋白穩態喪失、巨自噬障礙、營養感應失調、線粒體功能障礙、細胞衰老、幹細胞耗竭、細胞間通訊改變、慢性炎症和生態失調。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-2.png" alt="衰老的十二大標誌" /></figure>
<p>其中，與細胞密切相關的就是「細胞衰老」「幹細胞耗竭」及「細胞間通訊改變」。</p>
<h3>二、幹細胞的耗竭</h3>
<p>隨着年齡增長，幹細胞活性會慢慢下降。原因之一是衰老細胞不斷分泌促炎、免疫抑制化學物質的混合物，統稱為衰老相關分泌表型（SASP），降低幹細胞活性，導致免疫衰老和組織再生喪失。SASP 是更廣泛慢性低度炎症的一部分，破壞幹細胞功能和組織修復。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-3.png" alt="SASP 與幹細胞耗竭" /></figure>
<p>炎症由衰老細胞、細胞碎片、交聯、免疫衰老和腸道微生物組變化引起。幹細胞也不能免受直接損傷：端粒縮短會導致幹細胞失去功能並衰老；DNA 仍可緩慢突變，導致衰老或癌症。因此，雖然幹細胞可以自我更新，但質量和速度都會隨時間降低。</p>
<h3>三、危險的衰老信號——免疫細胞的衰老</h3>
<p>所有類型的細胞都會經歷衰老。對比 35 歲以下和 65 歲以上健康人羣，細胞衰老速度差異可高達 2–20 倍，主要影響成纖維細胞、內皮細胞和免疫細胞。</p>
<p>美國明尼蘇達大學醫學院研究人員 2021 年在《Nature》發表的研究表示，衰老的免疫細胞是最危險的衰老細胞類型之一，它會加速其他器官衰老，從而促進全身性衰老。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-4.jpg" alt="免疫細胞衰老加速全身衰老" /></figure>
<h3>四、增加免疫細胞數量與增強其活性是抵抗衰老的新方向</h3>
<p>正常情況下，免疫細胞可以及時清除突變細胞和衰老細胞。隨着年齡增加，變異細胞不斷積累，免疫系統功能下降，免疫衰老風險升高。多項研究證實免疫衰老是可調節的。發表在《PNAS》上的研究報告指出：通過新鮮免疫細胞的臨牀研究可逆轉 T 細胞衰竭狀態。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-5.jpg" alt="增強免疫細胞活性的研究方向" /></figure>
<h3>結語</h3>
<p>健康的幹細胞和免疫細胞對我們的身體如此重要。衰老是所有生物都必須面對的生理過程。我們能做的就是關注細胞健康、補充細胞，這或許是防患於未然、保持健康態的明智之舉。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>近年来科学家在人体衰老方面不断探索。西班牙奥维耶多大学肿瘤研究所和法国巴黎大学的科学家在《Cell》发表了题为 Hallmarks of aging: An expanding universe 的综述，创造性地提出了衰老的十二个标志，对理解衰老的发生、发展以及干预有着巨大意义。</p>
<h3>一、身体衰老有哪些标志和信号？</h3>
<p>自《Cell》发表第一版「衰老的标志」以来，有近 30 万篇衰老研究论文发表。原班人马在 2013 年综述基础上，进一步定义了衰老的十二大标志：基因组稳定性丧失、端粒损耗、表观遗传改变、蛋白稳态丧失、巨自噬障碍、营养感应失调、线粒体功能障碍、细胞衰老、干细胞耗竭、细胞间通讯改变、慢性炎症和生态失调。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-2.png" alt="衰老的十二大标志" /></figure>
<p>其中，与细胞密切相关的就是「细胞衰老」「干细胞耗竭」及「细胞间通讯改变」。</p>
<h3>二、干细胞的耗竭</h3>
<p>随着年龄增长，干细胞活性会慢慢下降。原因之一是衰老细胞不断分泌促炎、免疫抑制化学物质的混合物，统称为衰老相关分泌表型（SASP），降低干细胞活性，导致免疫衰老和组织再生丧失。SASP 是更广泛慢性低度炎症的一部分，破坏干细胞功能和组织修复。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-3.png" alt="SASP 与干细胞耗竭" /></figure>
<p>炎症由衰老细胞、细胞碎片、交联、免疫衰老和肠道微生物组变化引起。干细胞也不能免受直接损伤：端粒缩短会导致干细胞失去功能并衰老；DNA 仍可缓慢突变，导致衰老或癌症。因此，虽然干细胞可以自我更新，但质量和速度都会随时间降低。</p>
<h3>三、危险的衰老信号——免疫细胞的衰老</h3>
<p>所有类型的细胞都会经历衰老。对比 35 岁以下和 65 岁以上健康人群，细胞衰老速度差异可高达 2–20 倍，主要影响成纤维细胞、内皮细胞和免疫细胞。</p>
<p>美国明尼苏达大学医学院研究人员 2021 年在《Nature》发表的研究表示，衰老的免疫细胞是最危险的衰老细胞类型之一，它会加速其他器官衰老，从而促进全身性衰老。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-4.jpg" alt="免疫细胞衰老加速全身衰老" /></figure>
<h3>四、增加免疫细胞数量与增强其活性是抵抗衰老的新方向</h3>
<p>正常情况下，免疫细胞可以及时清除突变细胞和衰老细胞。随着年龄增加，变异细胞不断积累，免疫系统功能下降，免疫衰老风险升高。多项研究证实免疫衰老是可调节的。发表在《PNAS》上的研究报告指出：通过新鲜免疫细胞的临床研究可逆转 T 细胞衰竭状态。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-5.jpg" alt="增强免疫细胞活性的研究方向" /></figure>
<h3>结语</h3>
<p>健康的干细胞和免疫细胞对我们的身体如此重要。衰老是所有生物都必须面对的生理过程。我们能做的就是关注细胞健康、补充细胞，这或许是防患于未然、保持健康态的明智之举。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Scientists at the University of Oviedo and the University of Paris published “Hallmarks of aging: An expanding universe” in <em>Cell</em>, proposing twelve hallmarks of ageing — important for understanding how ageing starts, develops and might be changed.</p>
<h3>1. What are the signs of bodily ageing?</h3>
<p>Since the first hallmarks paper, nearly 300,000 ageing papers have appeared. The same authors expanded the 2013 review to twelve hallmarks: genomic instability, telomere attrition, epigenetic alterations, loss of proteostasis, disabled macroautophagy, deregulated nutrient-sensing, mitochondrial dysfunction, cellular senescence, stem-cell exhaustion, altered intercellular communication, chronic inflammation and dysbiosis.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-2.png" alt="The twelve hallmarks of ageing" /></figure>
<p>Those closest to cells are cellular senescence, stem-cell exhaustion and altered intercellular communication.</p>
<h3>2. Stem-cell exhaustion</h3>
<p>Stem-cell activity falls with age. Senescent cells secrete SASP — a mix of pro-inflammatory, immunosuppressive chemicals — lowering stem-cell activity, immunosenescence and tissue regeneration. SASP is part of chronic low-grade inflammation that damages stem-cell function and repair.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-3.png" alt="SASP and stem-cell exhaustion" /></figure>
<p>Inflammation also comes from debris, cross-linking, immunosenescence and gut-microbiome change. Stem cells are not spared: telomere shortening and slow DNA mutation push them towards senescence or cancer. Self-renewal continues, but quality and speed fall.</p>
<h3>3. A dangerous signal — senescent immune cells</h3>
<p>All cell types senesce. Comparing healthy people under 35 with those over 65, the rate can differ 2–20 fold, mainly in fibroblasts, endothelial cells and immune cells.</p>
<p>University of Minnesota researchers reported in <em>Nature</em> in 2021 that senescent immune cells are among the most dangerous types: they accelerate ageing in other organs and thus the whole body.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-4.jpg" alt="Immune-cell senescence accelerating systemic ageing" /></figure>
<h3>4. Raising immune-cell numbers and activity</h3>
<p>Immune cells normally clear mutant and senescent cells. With age, variants accumulate and immunity falls. Studies show immunosenescence is modifiable. A <em>PNAS</em> report notes that clinical work with fresh immune cells may reverse T-cell exhaustion.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-12-5.jpg" alt="Research on boosting immune-cell activity" /></figure>
<h3>Conclusion</h3>
<p>Healthy stem cells and immune cells matter greatly. Ageing is a physiological process every living thing faces. Attending to cell health and replenishing cells may be a wise way to act before harm arrives.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "45",
    slug: "45",
    section: "longevity",
    eyebrow: "CIK",
    cover: "/images/knowledge/longevity-13-2.png",
    image: "/images/knowledge/longevity-13-1.jpg",
    title: { "zh-HK": `CIK 細胞療法：高危淋巴瘤 ASCT 後 2 周輸注，2 年無進展生存達 79.8%`, "zh-CN": `CIK 细胞疗法：高危淋巴瘤 ASCT 后 2 周输注，2 年无进展生存达 79.8%`, en: `CIK Therapy Two Weeks after ASCT in High-Risk Lymphoma: 2-Year PFS of 79.8%` },
    excerpt: { "zh-HK": `韓國前瞻性研究把 CIK 輸注鎖定在自體移植後約 2 周，作為緩解後鞏固，2 年 PFS 達 79.8%。`, "zh-CN": `韩国前瞻性研究把 CIK 输注锁定在自体移植后约 2 周，作为缓解后巩固，2 年 PFS 达 79.8%。`, en: `A Korean prospective study timed CIK infusion about two weeks after autologous transplant as post-remission consolidation; 2-year PFS reached 79.8%.` },
    body: { "zh-HK": `<p>近期，一項來自韓國團隊的前瞻性研究在 ASTCT（美國移植與細胞治療學會）官方期刊 <em>Transplantation and Cellular Therapy</em> 在線發表：研究者把 CIK（細胞因子誘導殺傷）細胞放在一個關鍵時間點——自體造血幹細胞移植（ASCT）後約 2 周進行輸注，作為「後緩解」鞏固策略。</p>
<p>研究納入 20 位高危非霍奇金淋巴瘤（NHL）患者，在達到完全緩解（CR）並完成 ASCT 後接受 CIK 輸注；摘要披露的核心讀出是：2 年無進展生存率（PFS）達 79.8%，且輸注相關反應以輕度發熱為主。這條路徑解決的，不是「再加一次大強度治療」，而是把移植後的「免疫空窗期」，變成一次更精準的「清掃窗口」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-2.png" alt="CIK 作為移植後鞏固策略" /></figure>
<h3>一、為什麼 ASCT 之後仍需要「第二道閘門」</h3>
<p>對高危淋巴瘤而言，ASCT 常被視作一條重要的鞏固路徑：通過大劑量化療把腫瘤負荷壓到更低，再用自體造血幹細胞「重啓」造血與免疫系統。</p>
<p>但臨牀現實是：影像學與臨牀達到緩解，並不等於完全沒有殘留。微小殘留病灶（MRD）或「看不見的殘留細胞」，可能在後續的免疫重建過程中重新獲得生存空間，成為復發的起點。因此，「移植後如何再壓一層」，長期是高危人羣管理裏最難、也最值得投入的環節之一。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-3.png" alt="移植後微小殘留與復發風險" /></figure>
<h3>二、CIK 細胞是什麼：更像「訓練過的混編免疫隊」</h3>
<p>CIK（Cytokine-induced Killer）細胞可以用一句話概括：把外周血免疫細胞在體外用細胞因子進行誘導、擴增與功能強化後得到的一類效應細胞羣。</p>
<p>它通常呈現出「混合」的特點：既有 T 細胞相關特徵（如 CD3+），又包含一定比例具備 NK 樣殺傷能力的細胞亞羣（常見表型如 CD3+CD56+）。在機理層面，CIK 常被討論的一點是：可通過 NKG2D 等受體識別壓力信號 / 應激相關配體，從而對腫瘤細胞產生殺傷。</p>
<p>對大眾讀者而言，可以把它理解為：不是把免疫系統「再推一把強刺激」，而是把一支可控的細胞隊伍「提前訓練好」，在關鍵窗口期投入戰場。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-4.png" alt="CIK 細胞的混合效應表型" /></figure>
<h3>三、研究怎麼做：把細胞輸注鎖定在「移植後第 2 周」</h3>
<ul>
<li>研究類型：前瞻性、研究者發起（Investigator-initiated）</li>
<li>入組人羣：20 位高危非霍奇金淋巴瘤患者</li>
<li>關鍵前提：患者達到完全緩解（CR）並完成 ASCT（用於一線或挽救治療後的鞏固均有涉及）</li>
<li>干預方式：ASCT 後進行 CIK 細胞輸注</li>
<li>給藥時點：中位數在移植後第 14 天（約 10–18 天範圍）</li>
<li>主要終點：2 年無進展生存（PFS）</li>
</ul>
<p>一句話總結它的策略：不是把 CIK 當作「救火」，而是作為「緩解後的鞏固」提前介入。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-5.jpg" alt="ASCT 後第 2 周輸注 CIK" /></figure>
<h3>四、最關鍵的數據：2 年 PFS 79.8%，輸注反應以輕度為主</h3>
<p>論文披露的核心：2 年 PFS 為 79.8%（並給出了相應的 95% 置信區間）。安全性信號方面，僅少數患者出現輸注相關反應，摘要提到主要為輕度發熱。摘要也對 CMV（鉅細胞病毒）相關指標與感染情況做了描述，整體呈現出「未見失控」的信號，並提示免疫重建方面可能有積極意義。</p>
<p>對讀者來説，最該抓住的重點並不是某一個副反應的細節，而是這組結果所傳遞的方向：在 ASCT 後早期加入 CIK，可能把復發風險更早、更穩地壓下去，同時不顯著增加治療負擔。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-6.png" alt="2 年無進展生存與安全性信號" /></figure>
<h3>五、為什麼這條路值得關注：它把「復發管理」前移了</h3>
<p>過去我們談復發，常常是在「復發發生之後」再討論怎麼救援；而這項研究的思路，是把戰線前移到「復發發生之前」。</p>
<p>因此它對應的是一個更接近真實臨牀的問題：對高危人羣，能不能在完成移植後的早期，用一個可控、可重複、負擔相對可接受的細胞免疫策略，把殘留風險再壓一層？如果後續研究能在更大樣本、更嚴格對照下重複看到類似的 PFS / OS 改善，這就可能成為「高危淋巴瘤移植後管理」的一個標準化模塊，而不僅僅是單點探索。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>近期，一项来自韩国团队的前瞻性研究在 ASTCT（美国移植与细胞治疗学会）官方期刊 <em>Transplantation and Cellular Therapy</em> 在线发表：研究者把 CIK（细胞因子诱导杀伤）细胞放在一个关键时间点——自体造血干细胞移植（ASCT）后约 2 周进行输注，作为「后缓解」巩固策略。</p>
<p>研究纳入 20 位高危非霍奇金淋巴瘤（NHL）患者，在达到完全缓解（CR）并完成 ASCT 后接受 CIK 输注；摘要披露的核心读出是：2 年无进展生存率（PFS）达 79.8%，且输注相关反应以轻度发热为主。这条路径解决的，不是「再加一次大强度治疗」，而是把移植后的「免疫空窗期」，变成一次更精准的「清扫窗口」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-2.png" alt="CIK 作为移植后巩固策略" /></figure>
<h3>一、为什么 ASCT 之后仍需要「第二道闸门」</h3>
<p>对高危淋巴瘤而言，ASCT 常被视作一条重要的巩固路径：通过大剂量化疗把肿瘤负荷压到更低，再用自体造血干细胞「重启」造血与免疫系统。</p>
<p>但临床现实是：影像学与临床达到缓解，并不等于完全没有残留。微小残留病灶（MRD）或「看不见的残留细胞」，可能在后续的免疫重建过程中重新获得生存空间，成为复发的起点。因此，「移植后如何再压一层」，长期是高危人群管理里最难、也最值得投入的环节之一。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-3.png" alt="移植后微小残留与复发风险" /></figure>
<h3>二、CIK 细胞是什么：更像「训练过的混编免疫队」</h3>
<p>CIK（Cytokine-induced Killer）细胞可以用一句话概括：把外周血免疫细胞在体外用细胞因子进行诱导、扩增与功能强化后得到的一类效应细胞群。</p>
<p>它通常呈现出「混合」的特点：既有 T 细胞相关特征（如 CD3+），又包含一定比例具备 NK 样杀伤能力的细胞亚群（常见表型如 CD3+CD56+）。在机理层面，CIK 常被讨论的一点是：可通过 NKG2D 等受体识别压力信号 / 应激相关配体，从而对肿瘤细胞产生杀伤。</p>
<p>对大众读者而言，可以把它理解为：不是把免疫系统「再推一把强刺激」，而是把一支可控的细胞队伍「提前训练好」，在关键窗口期投入战场。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-4.png" alt="CIK 细胞的混合效应表型" /></figure>
<h3>三、研究怎么做：把细胞输注锁定在「移植后第 2 周」</h3>
<ul>
<li>研究类型：前瞻性、研究者发起（Investigator-initiated）</li>
<li>入组人群：20 位高危非霍奇金淋巴瘤患者</li>
<li>关键前提：患者达到完全缓解（CR）并完成 ASCT（用于一线或挽救治疗后的巩固均有涉及）</li>
<li>干预方式：ASCT 后进行 CIK 细胞输注</li>
<li>给药时点：中位数在移植后第 14 天（约 10–18 天范围）</li>
<li>主要终点：2 年无进展生存（PFS）</li>
</ul>
<p>一句话总结它的策略：不是把 CIK 当作「救火」，而是作为「缓解后的巩固」提前介入。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-5.jpg" alt="ASCT 后第 2 周输注 CIK" /></figure>
<h3>四、最关键的数据：2 年 PFS 79.8%，输注反应以轻度为主</h3>
<p>论文披露的核心：2 年 PFS 为 79.8%（并给出了相应的 95% 置信区间）。安全性信号方面，仅少数患者出现输注相关反应，摘要提到主要为轻度发热。摘要也对 CMV（巨细胞病毒）相关指标与感染情况做了描述，整体呈现出「未见失控」的信号，并提示免疫重建方面可能有积极意义。</p>
<p>对读者来说，最该抓住的重点并不是某一个副反应的细节，而是这组结果所传递的方向：在 ASCT 后早期加入 CIK，可能把复发风险更早、更稳地压下去，同时不显著增加治疗负担。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-6.png" alt="2 年无进展生存与安全性信号" /></figure>
<h3>五、为什么这条路值得关注：它把「复发管理」前移了</h3>
<p>过去我们谈复发，常常是在「复发发生之后」再讨论怎么救援；而这项研究的思路，是把战线前移到「复发发生之前」。</p>
<p>因此它对应的是一个更接近真实临床的问题：对高危人群，能不能在完成移植后的早期，用一个可控、可重复、负担相对可接受的细胞免疫策略，把残留风险再压一层？如果后续研究能在更大样本、更严格对照下重复看到类似的 PFS / OS 改善，这就可能成为「高危淋巴瘤移植后管理」的一个标准化模块，而不仅仅是单点探索。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>A prospective Korean study has been published online in <em>Transplantation and Cellular Therapy</em>, the official journal of ASTCT. Investigators timed cytokine-induced killer (CIK) cells at a critical point — about two weeks after autologous haematopoietic stem-cell transplant (ASCT) — as a post-remission consolidation strategy.</p>
<p>Twenty patients with high-risk non-Hodgkin lymphoma (NHL) received CIK infusion after complete remission (CR) and ASCT. The headline readout: 2-year progression-free survival (PFS) of 79.8%, with infusion reactions mainly mild fever. The path is not “one more round of high-intensity treatment”, but turning the post-transplant immune window into a more precise clearance window.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-2.png" alt="CIK as post-transplant consolidation" /></figure>
<h3>1. Why ASCT still needs a “second gate”</h3>
<p>For high-risk lymphoma, ASCT is often an important consolidation path: high-dose chemotherapy drives tumour burden lower, then autologous stem cells “reboot” haematopoiesis and immunity.</p>
<p>Clinical reality: imaging and clinical remission do not mean zero residue. Minimal residual disease (MRD) or unseen residual cells may regain a foothold during immune reconstitution and become the start of relapse. How to press one more layer after transplant has long been among the hardest — and most worth investing in — parts of high-risk care.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-3.png" alt="Minimal residual disease and relapse after transplant" /></figure>
<h3>2. What CIK cells are: a trained mixed immune team</h3>
<p>CIK cells, in one sentence, are an effector population obtained by inducing, expanding and functionally strengthening peripheral-blood immune cells with cytokines in vitro.</p>
<p>They are typically mixed: T-cell features (such as CD3+) plus a subset with NK-like killing (often CD3+CD56+). Mechanistically, CIK cells are often discussed as recognising stress signals via receptors such as NKG2D, and thereby killing tumour cells.</p>
<p>For a general reader: this is not another strong shove to the immune system, but a controllable cell team trained in advance and sent in at a critical window.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-4.png" alt="Mixed effector phenotype of CIK cells" /></figure>
<h3>3. How the study was done: infusion locked to week 2 after transplant</h3>
<ul>
<li>Type: prospective, investigator-initiated</li>
<li>Population: 20 patients with high-risk NHL</li>
<li>Premise: CR and completed ASCT (consolidation after first-line or salvage)</li>
<li>Intervention: CIK infusion after ASCT</li>
<li>Timing: median day 14 post-transplant (about days 10–18)</li>
<li>Primary endpoint: 2-year PFS</li>
</ul>
<p>In short: CIK was not used as firefighting, but as post-remission consolidation, brought in early.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-5.jpg" alt="CIK infusion in week 2 after ASCT" /></figure>
<h3>4. The key data: 2-year PFS 79.8%, mostly mild infusion reactions</h3>
<p>Core disclosure: 2-year PFS 79.8% (with a 95% confidence interval). Only a few patients had infusion reactions, mainly mild fever. CMV-related markers and infection were also described, with no signal of loss of control, and a hint of possible benefit for immune reconstitution.</p>
<p>The point for readers is not one side-effect detail, but the direction: adding CIK early after ASCT may press relapse risk down earlier and more steadily, without a large extra treatment burden.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-13-6.png" alt="Two-year PFS and safety signals" /></figure>
<h3>5. Why this path is worth watching: it moves relapse management forward</h3>
<p>Talk of relapse often starts after it happens. This study moves the line to before relapse.</p>
<p>The clinical question is closer to real practice: for high-risk patients, can a controllable, repeatable, relatively acceptable cell-immune strategy press residual risk down one more layer early after transplant? If later studies with larger samples and stricter controls repeat similar PFS/OS gains, this could become a standard module of post-transplant care for high-risk lymphoma, not a one-off exploration.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "46",
    slug: "46",
    section: "longevity",
    eyebrow: "Vessels",
    cover: "/images/knowledge/longevity-14-2.png",
    image: "/images/knowledge/longevity-14-1.jpg",
    title: { "zh-HK": `幹細胞療法修復受損血管，為動脈粥樣硬化帶來新希望`, "zh-CN": `干细胞疗法修复受损血管，为动脉粥样硬化带来新希望`, en: `Stem-Cell Therapy to Repair Damaged Vessels: New Hope for Atherosclerosis` },
    excerpt: { "zh-HK": `浙大金華醫院團隊綜述系統梳理 2023–2025 年幹細胞治療動脈粥樣硬化的機制、臨牀探索與精準遞送方向。`, "zh-CN": `浙大金华医院团队综述系统梳理 2023–2025 年干细胞治疗动脉粥样硬化的机制、临床探索与精准递送方向。`, en: `A Jinhua Hospital (Zhejiang University) review maps 2023–2025 progress in stem-cell therapy for atherosclerosis — mechanisms, early trials and targeted delivery.` },
    body: { "zh-HK": `<p>全球每年有超過 1790 萬人死於心血管疾病。動脈粥樣硬化（AS）是全球心血管疾病致殘率和死亡率的首要病理基礎，其核心特徵為血管壁脂質異常沉積、慢性炎症激活及血管結構重塑，最終引發冠心病、腦梗死等急性心腦血管事件。傳統的他汀類藥物、支架手術只能延緩病情，沒法修復已經受損的血管。但隨着再生醫學的發展，幹細胞憑藉其多向分化潛能、免疫調節能力及組織修復特性，正為動脈粥樣硬化治療開闢新路徑。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-2.png" alt="幹細胞在動脈粥樣硬化治療中的研究進展" /><figcaption>幹細胞在動脈粥樣硬化治療中的研究進展</figcaption></figure>
<p>浙江大學醫學院附屬金華醫院團隊發表在 <em>Frontiers in Cell and Developmental Biology</em> 的綜述，系統梳理了 2023–2025 年幹細胞治療動脈粥樣硬化的最新進展，從機制到臨牀、從難題到解決方案，完整勾勒出這項「血管修復」技術的發展藍圖。</p>
<h3>一、血管是怎麼一步步「壞掉」的？</h3>
<p>動脈粥樣硬化的本質，是血管壁的「脂質沉積 + 慢性炎症」惡性循環：</p>
<p><strong>內皮防線失守</strong>：高血壓、高血糖、吸煙等因素，會讓血管內壁光滑的內皮細胞保護牆開裂——內皮細胞死亡、縫隙變大，血液中的「壞膽固醇」（LDL-C）趁機鑽進血管壁，還會被氧化成 ox-LDL。</p>
<p><strong>炎症火上澆油</strong>：這些氧化脂質會吸引單核細胞等免疫細胞前來清理，卻最終讓免疫細胞失控，變成滿肚子脂肪的泡沫細胞，還會釋放炎症因子，召喚更多免疫細胞混戰，形成慢性炎症環境。</p>
<p><strong>斑塊形成 + 血管變脆</strong>：泡沫細胞死亡後釋放的脂肪會形成脂質核心，周圍的平滑肌細胞形成纖維帽將其包裹，也就是動脈粥樣硬化斑塊。但持續的炎症會讓纖維帽變脆變薄，隨時可能破裂形成血栓。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-3.png" alt="動脈粥樣硬化進展" /><figcaption>動脈粥樣硬化進展</figcaption></figure>
<h3>二、幹細胞：血管修復的「多面手」</h3>
<ul>
<li><strong>修復內皮屏障</strong>：幹細胞能分化成血管內皮細胞，填補受損的血管內壁，阻止壞膽固醇繼續滲透；還能分泌血管生長因子，加速內皮癒合。</li>
<li><strong>抑制炎症反應</strong>：通過分泌抗炎因子，抑制免疫細胞過度激活，減少促炎物質釋放，降低泡沫細胞的形成速度，緩解血管壁慢性炎症。</li>
<li><strong>穩定易損斑塊</strong>：調控血管平滑肌細胞的生長，避免血管過度狹窄；同時促進膠原蛋白合成，增厚斑塊的纖維帽，降低破裂風險。</li>
<li><strong>調節脂質代謝</strong>：幹細胞分泌的外泌體中含有 miR-125a，能抑制巨噬細胞表面 SR-A1 的表達，減少 ox-LDL 吞噬，阻止泡沫細胞形成；還能促進膽固醇逆向轉運，清理血管壁內的脂肪。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-4.jpg" alt="動脈粥樣硬化核心病理機制" /><figcaption>動脈粥樣硬化核心病理機制</figcaption></figure>
<h3>三、近年幹細胞治療的臨牀探索</h3>
<p>2024 年《J Am Coll Cardiol》公佈的 I/II 期臨牀試驗顯示，32 名患者單次輸注 AD-MSCs 後，6 個月內無嚴重不良反應，頸動脈內膜厚度（IMT）平均減少 0.18 mm，「壞膽固醇」降低 19%，好膽固醇上升 23%。</p>
<p>2025 年《Nature Medicine》報道的 iPSC-VECs 局部輸注 I 期試驗（n=10）顯示，患者的血管舒張功能（FMD）從 4.2% 提升至 7.8%，斑塊穩定性改善率達 80%。這些初步結果共同證實了療法的安全性和潛在療效。</p>
<h3>四、未來可期：三大技術助力精準作戰</h3>
<p><strong>單細胞測序</strong>：分析病灶處幹細胞的亞型差異（如缺氧條件下促炎型與抗炎型 MSC），篩選高分泌抗炎因子（如 IL-10⁺ MSCs）或內皮分化潛能強的亞羣，提高靶向性和效率。</p>
<p><strong>類器官模型</strong>：用患者自身 iPSCs 構建血管類器官，模擬內皮下脂質沉積、巨噬細胞浸潤等病理特徵，提前測試不同幹細胞的療效，縮小動物實驗與臨牀的差距。</p>
<p><strong>精準遞送系統</strong>：如抗 VCAM-1 抗體修飾的 PLGA 微球作為載體，精準綁定病灶處過表達 VCAM-1 的內皮細胞，將幹細胞富集率從 2% 提升至 25%，緩解歸巢效率低的問題。</p>
<h3>結語</h3>
<p>幹細胞憑藉修復血管、抑制炎症、穩定斑塊等能力，已在基礎研究和早期臨牀試驗中展現出良好的安全性和有效性。隨着技術的不斷優化，未來幹細胞療法有望成為動脈粥樣硬化的治療手段，讓受損血管重獲新生。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>全球每年有超过 1790 万人死于心血管疾病。动脉粥样硬化（AS）是全球心血管疾病致残率和死亡率的首要病理基础，其核心特征为血管壁脂质异常沉积、慢性炎症激活及血管结构重塑，最终引发冠心病、脑梗死等急性心脑血管事件。传统的他汀类药物、支架手术只能延缓病情，没法修复已经受损的血管。但随着再生医学的发展，干细胞凭借其多向分化潜能、免疫调节能力及组织修复特性，正为动脉粥样硬化治疗开辟新路径。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-2.png" alt="干细胞在动脉粥样硬化治疗中的研究进展" /><figcaption>干细胞在动脉粥样硬化治疗中的研究进展</figcaption></figure>
<p>浙江大学医学院附属金华医院团队发表在 <em>Frontiers in Cell and Developmental Biology</em> 的综述，系统梳理了 2023–2025 年干细胞治疗动脉粥样硬化的最新进展，从机制到临床、从难题到解决方案，完整勾勒出这项「血管修复」技术的发展蓝图。</p>
<h3>一、血管是怎么一步步「坏掉」的？</h3>
<p>动脉粥样硬化的本质，是血管壁的「脂质沉积 + 慢性炎症」恶性循环：</p>
<p><strong>内皮防线失守</strong>：高血压、高血糖、吸烟等因素，会让血管内壁光滑的内皮细胞保护墙开裂——内皮细胞死亡、缝隙变大，血液中的「坏胆固醇」（LDL-C）趁机钻进血管壁，还会被氧化成 ox-LDL。</p>
<p><strong>炎症火上浇油</strong>：这些氧化脂质会吸引单核细胞等免疫细胞前来清理，却最终让免疫细胞失控，变成满肚子脂肪的泡沫细胞，还会释放炎症因子，召唤更多免疫细胞混战，形成慢性炎症环境。</p>
<p><strong>斑块形成 + 血管变脆</strong>：泡沫细胞死亡后释放的脂肪会形成脂质核心，周围的平滑肌细胞形成纤维帽将其包裹，也就是动脉粥样硬化斑块。但持续的炎症会让纤维帽变脆变薄，随时可能破裂形成血栓。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-3.png" alt="动脉粥样硬化进展" /><figcaption>动脉粥样硬化进展</figcaption></figure>
<h3>二、干细胞：血管修复的「多面手」</h3>
<ul>
<li><strong>修复内皮屏障</strong>：干细胞能分化成血管内皮细胞，填补受损的血管内壁，阻止坏胆固醇继续渗透；还能分泌血管生长因子，加速内皮愈合。</li>
<li><strong>抑制炎症反应</strong>：通过分泌抗炎因子，抑制免疫细胞过度激活，减少促炎物质释放，降低泡沫细胞的形成速度，缓解血管壁慢性炎症。</li>
<li><strong>稳定易损斑块</strong>：调控血管平滑肌细胞的生长，避免血管过度狭窄；同时促进胶原蛋白合成，增厚斑块的纤维帽，降低破裂风险。</li>
<li><strong>调节脂质代谢</strong>：干细胞分泌的外泌体中含有 miR-125a，能抑制巨噬细胞表面 SR-A1 的表达，减少 ox-LDL 吞噬，阻止泡沫细胞形成；还能促进胆固醇逆向转运，清理血管壁内的脂肪。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-4.jpg" alt="动脉粥样硬化核心病理机制" /><figcaption>动脉粥样硬化核心病理机制</figcaption></figure>
<h3>三、近年干细胞治疗的临床探索</h3>
<p>2024 年《J Am Coll Cardiol》公布的 I/II 期临床试验显示，32 名患者单次输注 AD-MSCs 后，6 个月内无严重不良反应，颈动脉内膜厚度（IMT）平均减少 0.18 mm，「坏胆固醇」降低 19%，好胆固醇上升 23%。</p>
<p>2025 年《Nature Medicine》报道的 iPSC-VECs 局部输注 I 期试验（n=10）显示，患者的血管舒张功能（FMD）从 4.2% 提升至 7.8%，斑块稳定性改善率达 80%。这些初步结果共同证实了疗法的安全性和潜在疗效。</p>
<h3>四、未来可期：三大技术助力精准作战</h3>
<p><strong>单细胞测序</strong>：分析病灶处干细胞的亚型差异（如缺氧条件下促炎型与抗炎型 MSC），筛选高分泌抗炎因子（如 IL-10⁺ MSCs）或内皮分化潜能强的亚群，提高靶向性和效率。</p>
<p><strong>类器官模型</strong>：用患者自身 iPSCs 构建血管类器官，模拟内皮下脂质沉积、巨噬细胞浸润等病理特征，提前测试不同干细胞的疗效，缩小动物实验与临床的差距。</p>
<p><strong>精准递送系统</strong>：如抗 VCAM-1 抗体修饰的 PLGA 微球作为载体，精准绑定病灶处过表达 VCAM-1 的内皮细胞，将干细胞富集率从 2% 提升至 25%，缓解归巢效率低的问题。</p>
<h3>结语</h3>
<p>干细胞凭借修复血管、抑制炎症、稳定斑块等能力，已在基础研究和早期临床试验中展现出良好的安全性和有效性。随着技术的不断优化，未来干细胞疗法有望成为动脉粥样硬化的治疗手段，让受损血管重获新生。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>More than 17.9 million people die of cardiovascular disease each year. Atherosclerosis (AS) is the leading pathological basis of cardiovascular disability and death worldwide. Statins and stents can slow the disease; they cannot repair vessels already damaged. Regenerative medicine, and stem cells’ multilineage, immunomodulatory and repair properties, are opening a new path.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-2.png" alt="Progress in stem-cell therapy for atherosclerosis" /><figcaption>Progress in stem-cell therapy for atherosclerosis</figcaption></figure>
<p>A review from Jinhua Hospital, affiliated to Zhejiang University School of Medicine, in <em>Frontiers in Cell and Developmental Biology</em>, maps 2023–2025 progress — from mechanism to clinic, from problems to solutions — as a blueprint for vessel repair.</p>
<h3>1. How a vessel “goes wrong”, step by step</h3>
<p>Atherosclerosis is a vicious cycle of lipid deposition plus chronic inflammation in the wall:</p>
<p><strong>The endothelial barrier fails</strong>: hypertension, high glucose and smoking crack the smooth endothelial “wall” — cells die, gaps widen, LDL-C slips in and is oxidised to ox-LDL.</p>
<p><strong>Inflammation adds fuel</strong>: oxidised lipid draws monocytes; immune cells lose control, become foam cells packed with fat, release inflammatory factors and summon more cells into a chronic inflammatory melee.</p>
<p><strong>Plaque forms and the vessel turns brittle</strong>: fat from dying foam cells forms a lipid core, wrapped by a fibrous cap of smooth-muscle cells. Ongoing inflammation thins the cap so it may rupture and form a thrombus.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-3.png" alt="Progression of atherosclerosis" /><figcaption>Progression of atherosclerosis</figcaption></figure>
<h3>2. Stem cells as all-round vessel repairers</h3>
<ul>
<li><strong>Repairing the endothelial barrier</strong>: differentiating into endothelial cells to fill damaged lining and stop further LDL entry; secreting angiogenic factors to speed healing.</li>
<li><strong>Suppressing inflammation</strong>: anti-inflammatory factors curb over-activation of immune cells, slow foam-cell formation and ease chronic wall inflammation.</li>
<li><strong>Stabilising vulnerable plaque</strong>: regulating smooth-muscle growth to avoid excess narrowing; promoting collagen to thicken the fibrous cap and lower rupture risk.</li>
<li><strong>Regulating lipid metabolism</strong>: exosomes carrying miR-125a can suppress macrophage SR-A1, reduce ox-LDL uptake and foam-cell formation, and promote reverse cholesterol transport.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-14-4.jpg" alt="Core pathology of atherosclerosis" /><figcaption>Core pathology of atherosclerosis</figcaption></figure>
<h3>3. Recent clinical exploration</h3>
<p>A 2024 I/II trial in <em>J Am Coll Cardiol</em> reported that 32 patients given a single AD-MSC infusion had no serious adverse events in six months; mean carotid IMT fell 0.18 mm, LDL fell 19% and HDL rose 23%.</p>
<p>A 2025 <em>Nature Medicine</em> phase I study of local iPSC-VEC infusion (n=10) reported FMD rising from 4.2% to 7.8% and plaque-stability improvement in 80%.</p>
<h3>4. Looking ahead: three technologies for more precise action</h3>
<p><strong>Single-cell sequencing</strong> to pick MSC subtypes, such as IL-10⁺ MSCs or those with strong endothelial potential.</p>
<p><strong>Organoid models</strong> from a patient’s own iPSCs, mimicking subendothelial lipid and macrophage infiltration.</p>
<p><strong>Targeted delivery</strong> such as anti-VCAM-1 antibody-modified PLGA microspheres, raising stem-cell enrichment from 2% to 25%.</p>
<h3>Conclusion</h3>
<p>With the ability to repair vessels, suppress inflammation and stabilise plaque, stem cells have shown encouraging safety and efficacy in basic work and early trials.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "47",
    slug: "47",
    section: "longevity",
    eyebrow: "MSC + Exosomes",
    cover: "/images/knowledge/longevity-15-2.jpg",
    image: "/images/knowledge/longevity-15-1.jpg",
    title: { "zh-HK": `抗衰新策略：幹細胞聯合外泌體實現「1+1>2」`, "zh-CN": `抗衰新策略：干细胞联合外泌体实现「1+1>2」`, en: `A New Anti-Ageing Strategy: Stem Cells plus Exosomes for a 1+1>2 Effect` },
    excerpt: { "zh-HK": `北京協和醫學院綜述提出：間充質幹細胞與其外泌體聯合，外泌體開路、幹細胞重建，協同增強抗衰效果。`, "zh-CN": `北京协和医学院综述提出：间充质干细胞与其外泌体联合，外泌体开路、干细胞重建，协同增强抗衰效果。`, en: `A PUMC review proposes combining MSCs with their exosomes: exosomes clear the way, stem cells rebuild — a synergistic anti-ageing strategy.` },
    body: { "zh-HK": `<p>近期，北京協和醫學院白琳課題組在 <em>Stem Cell Research &amp; Therapy</em> 發表綜述《Advances in mesenchymal stem cell and exosome-based therapies for aging and age-related diseases》，系統梳理了間充質幹細胞（MSCs）及其外泌體（MSC-Exos）在衰老和年齡相關疾病治療中的研究進展，並提出了幹細胞 + 外泌體聯合治療的思路。</p>
<h3>一、衰老與再生醫學</h3>
<p>衰老表現為組織和器官功能的漸進性衰退，與多種慢性疾病風險密切相關，如阿爾茨海默病、骨質疏鬆、心血管疾病等。傳統干預方法如飲食控制、運動和藥物干預在模式生物中顯示出延長健康壽命的效果，但在安全性和有效性上仍需進一步驗證。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-2.jpg" alt="衰老與再生醫學" /></figure>
<p>幹細胞作為再生醫學的核心策略，近年來在抗衰老領域展現出廣闊前景。其中，間充質幹細胞及其衍生的外泌體憑藉其獨特的生物學特性，成為研究熱點。</p>
<h3>二、先搞懂幹細胞與外泌體是什麼？</h3>
<p><strong>1. 間充質幹細胞（MSCs）：全能修復手</strong><br>自我更新 + 多向分化：既能持續維持自身細胞數量，又能根據需求分化為骨細胞、軟骨細胞、脂肪細胞等，填補受損組織空缺。<br>免疫調節 + 組織修復：通過分泌多種生物活性分子，調節免疫反應、抑制炎症，同時促進受損組織的血管新生與修復。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-3.jpg" alt="間充質幹細胞的修復能力" /></figure>
<p><strong>2. MSC 外泌體（MSC-Exos）：安全信號兵</strong><br>MSC-Exos 是 MSCs 分泌的微小囊泡，直徑僅 30–150 納米。它包裹着蛋白質、miRNA 等關鍵生物分子，通過與目標細胞的交流調節受體細胞功能。與幹細胞本體不同，它沒有活細胞屬性，更安全、更穩定、更易使用。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-4.jpg" alt="MSC 外泌體作為無細胞信號載體" /></figure>
<h3>三、聯合使用策略：1+1>2 效應</h3>
<p>外泌體充當「先鋒隊」，通過清除炎症、緩解氧化應激及調節微環境，為幹細胞的定植創造有利條件；幹細胞作為「重建主力」，在優化後的機體環境中實現更高水平的存活、定植及定向分化。這種聯合策略已在多項實驗研究中顯示出協同增強效果。</p>
<h3>四、在衰老相關疾病中的應用</h3>
<p><strong>01. 卵巢功能修復</strong>：幹細胞通過調節信號通路減緩卵泡凋亡，甚至通過「隧道納米管」為老卵母細胞轉移線粒體；外泌體 miRNA 抑制纖維化，激素恢復率高達 68%。</p>
<p><strong>02. 神經退化防禦</strong>：幹細胞分泌 HGF 蛋白清除阿爾茨海默病的 Aβ 沉積，並移植線粒體改善腦代謝；外泌體激活降解酶，抑制神經炎症。</p>
<p><strong>03. 血管健康維護</strong>：幹細胞抑制炎症通路，降低血管炎症因子 60%；外泌體促使巨噬細胞轉變為抗炎類型，減少動脈斑塊。</p>
<p><strong>04. 骨骼代謝重塑</strong>：特定幹細胞調控「成骨–破骨」平衡，提升骨密度；外泌體攜帶 miR-146a 抑制骨吸收，相關標誌物下降 35%。</p>
<p><strong>05. 皮膚抗衰</strong>：幹細胞大幅激活膠原合成，III 型膠原提升 3 倍；外泌體抑制紫外線損傷，增強皮膚的自我修復能力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-5.jpg" alt="幹細胞與外泌體在衰老相關疾病中的應用" /></figure>
<h3>結語</h3>
<p>MSCs 與其外泌體，一個作為「細胞療法」，一個作為「無細胞療法」，相輔相成。幹細胞與外泌體聯合的新興技術，正在為延緩衰老和相關疾病干預提供新的可能。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>近期，北京协和医学院白琳课题组在 <em>Stem Cell Research &amp; Therapy</em> 发表综述《Advances in mesenchymal stem cell and exosome-based therapies for aging and age-related diseases》，系统梳理了间充质干细胞（MSCs）及其外泌体（MSC-Exos）在衰老和年龄相关疾病治疗中的研究进展，并提出了干细胞 + 外泌体联合治疗的思路。</p>
<h3>一、衰老与再生医学</h3>
<p>衰老表现为组织和器官功能的渐进性衰退，与多种慢性疾病风险密切相关，如阿尔茨海默病、骨质疏松、心血管疾病等。传统干预方法如饮食控制、运动和药物干预在模式生物中显示出延长健康寿命的效果，但在安全性和有效性上仍需进一步验证。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-2.jpg" alt="衰老与再生医学" /></figure>
<p>干细胞作为再生医学的核心策略，近年来在抗衰老领域展现出广阔前景。其中，间充质干细胞及其衍生的外泌体凭借其独特的生物学特性，成为研究热点。</p>
<h3>二、先搞懂干细胞与外泌体是什么？</h3>
<p><strong>1. 间充质干细胞（MSCs）：全能修复手</strong><br>自我更新 + 多向分化：既能持续维持自身细胞数量，又能根据需求分化为骨细胞、软骨细胞、脂肪细胞等，填补受损组织空缺。<br>免疫调节 + 组织修复：通过分泌多种生物活性分子，调节免疫反应、抑制炎症，同时促进受损组织的血管新生与修复。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-3.jpg" alt="间充质干细胞的修复能力" /></figure>
<p><strong>2. MSC 外泌体（MSC-Exos）：安全信号兵</strong><br>MSC-Exos 是 MSCs 分泌的微小囊泡，直径仅 30–150 纳米。它包裹着蛋白质、miRNA 等关键生物分子，通过与目标细胞的交流调节受体细胞功能。与干细胞本体不同，它没有活细胞属性，更安全、更稳定、更易使用。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-4.jpg" alt="MSC 外泌体作为无细胞信号载体" /></figure>
<h3>三、联合使用策略：1+1>2 效应</h3>
<p>外泌体充当「先锋队」，通过清除炎症、缓解氧化应激及调节微环境，为干细胞的定植创造有利条件；干细胞作为「重建主力」，在优化后的机体环境中实现更高水平的存活、定植及定向分化。这种联合策略已在多项实验研究中显示出协同增强效果。</p>
<h3>四、在衰老相关疾病中的应用</h3>
<p><strong>01. 卵巢功能修复</strong>：干细胞通过调节信号通路减缓卵泡凋亡，甚至通过「隧道纳米管」为老卵母细胞转移线粒体；外泌体 miRNA 抑制纤维化，激素恢复率高达 68%。</p>
<p><strong>02. 神经退化防御</strong>：干细胞分泌 HGF 蛋白清除阿尔茨海默病的 Aβ 沉积，并移植线粒体改善脑代谢；外泌体激活降解酶，抑制神经炎症。</p>
<p><strong>03. 血管健康维护</strong>：干细胞抑制炎症通路，降低血管炎症因子 60%；外泌体促使巨噬细胞转变为抗炎类型，减少动脉斑块。</p>
<p><strong>04. 骨骼代谢重塑</strong>：特定干细胞调控「成骨–破骨」平衡，提升骨密度；外泌体携带 miR-146a 抑制骨吸收，相关标志物下降 35%。</p>
<p><strong>05. 皮肤抗衰</strong>：干细胞大幅激活胶原合成，III 型胶原提升 3 倍；外泌体抑制紫外线损伤，增强皮肤的自我修复能力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-5.jpg" alt="干细胞与外泌体在衰老相关疾病中的应用" /></figure>
<h3>结语</h3>
<p>MSCs 与其外泌体，一个作为「细胞疗法」，一个作为「无细胞疗法」，相辅相成。干细胞与外泌体联合的新兴技术，正在为延缓衰老和相关疾病干预提供新的可能。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Bai Lin’s group at Peking Union Medical College published a review in <em>Stem Cell Research &amp; Therapy</em> mapping MSCs and MSC-Exos in ageing and age-related disease, and proposing that stem cells be combined with exosomes.</p>
<h3>1. Ageing and regenerative medicine</h3>
<p>Ageing is a gradual decline of tissue and organ function, closely tied to chronic-disease risk. Diet, exercise and drugs have extended healthspan in model organisms, but safety and efficacy still need more validation.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-2.jpg" alt="Ageing and regenerative medicine" /></figure>
<p>MSCs and their exosomes, with distinctive biology, have become a research focus in anti-ageing.</p>
<h3>2. What stem cells and exosomes are</h3>
<p><strong>1. MSCs</strong>: self-renewal plus multilineage potential; immunomodulation and tissue repair through bioactive molecules.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-3.jpg" alt="Repair capacity of mesenchymal stem cells" /></figure>
<p><strong>2. MSC-Exos</strong>: vesicles 30–150 nm across carrying proteins and miRNA. Unlike the parent cell they are not living cells: safer, more stable, easier to use.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-4.jpg" alt="MSC exosomes as a cell-free signal carrier" /></figure>
<h3>3. Combination: a 1+1>2 effect</h3>
<p>Exosomes act as a vanguard, clearing inflammation and tuning the microenvironment. Stem cells then rebuild, surviving and differentiating at a higher level. Experiments have already shown synergy.</p>
<h3>4. Use in ageing-related disease</h3>
<p><strong>01. Ovarian repair</strong> — signalling, mitochondrial transfer, exosomal miRNA; hormone recovery reported as high as 68%.</p>
<p><strong>02. Neurodegeneration</strong> — HGF, mitochondrial transfer, exosomes suppressing neuroinflammation.</p>
<p><strong>03. Vascular health</strong> — inflammatory factors down 60%; macrophages shifted towards an anti-inflammatory type.</p>
<p><strong>04. Bone metabolism</strong> — osteoblast–osteoclast balance; miR-146a, related markers down 35%.</p>
<p><strong>05. Skin</strong> — type III collagen up threefold; exosomes limit UV damage.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-15-5.jpg" alt="Stem cells and exosomes in ageing-related disease" /></figure>
<h3>Conclusion</h3>
<p>MSCs as cell therapy and their exosomes as cell-free therapy complement each other, opening a new possibility for slowing ageing and intervening in related disease.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "48",
    slug: "48",
    section: "longevity",
    eyebrow: "Longevity Medicine",
    cover: "/images/knowledge/longevity-16-1.jpg",
    image: "/images/knowledge/longevity-16-1.jpg",
    title: { "zh-HK": `長壽醫學新進展：量化衰老，科學干預才是關鍵`, "zh-CN": `长寿医学新进展：量化衰老，科学干预才是关键`, en: `Progress in Longevity Medicine: Measuring Ageing, Then Intervening with Science` },
    excerpt: { "zh-HK": `長壽醫學正從「講故事」轉向「可測量、可隨訪、可驗證」：圍繞檢測—評估—干預—追蹤建立循證閉環。`, "zh-CN": `长寿医学正从「讲故事」转向「可测量、可随访、可验证」：围绕检测—评估—干预—追踪建立循证闭环。`, en: `Longevity medicine is moving from storytelling to what can be measured, followed and verified — an evidence loop of test, assess, intervene and track.` },
    body: { "zh-HK": `<p>過去幾年，「長壽醫學（Longevity Medicine）」從概念討論走向臨牀實踐，一個明顯的趨勢正在形成：行業正在從「講故事」轉向「可測量、可隨訪、可驗證」。真正能推動機構落地與個人長期獲益的，不是單點療法的堆疊，而是圍繞「檢測—評估—干預—追蹤」建立的循證閉環。</p>
<h3>一、量化衰老：從「感覺變老」到「數據可見」</h3>
<p><strong>1. 蛋白組學</strong>：大規模人羣研究顯示，血液蛋白組信息可以用於構建「蛋白年齡」模型，並與多種健康結局、疾病風險與死亡風險相關聯。</p>
<p><strong>2. 表觀遺傳與「生物年齡時鐘」</strong>：以 DNA 甲基化為代表的指標適合做趨勢監測與風險管理，而不是替代臨牀診斷。</p>
<p><strong>3. 從「單一指標」走向「多指標整合」</strong>：把蛋白組學、表觀遺傳、代謝與臨牀功能指標（如握力、體能、認知等）放在同一框架下綜合評估。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-2.jpg" alt="量化衰老的多指標路徑" /></figure>
<h3>二、科學干預：從「單點療法」到「可複測的閉環方案」</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-3.png" alt="檢測、評估、干預與追蹤閉環" /></figure>
<p>當「可測量」成為前提，干預的價值也需要回到可驗證的結果：指標是否改善？風險是否下降？狀態是否更穩？</p>
<p><strong>1. 代謝與體重管理</strong>：減重不是終點，「代謝重建」才是核心——胰島素敏感性、炎症水平、脂肪分佈、睡眠與壓力反應等綜合改善。</p>
<p><strong>2. 免疫與炎症</strong>：把慢性炎症負擔納入長期管理，與睡眠、壓力、運動、營養系統聯動。</p>
<p><strong>3. 內分泌</strong>：先通過系統評估明確問題與風險，再在合規前提下進行循證干預與隨訪，而非「單一激素 / 單一補充」的泛化處理。</p>
<h3>三、生活方式：最樸素，但最可長期兑現的干預工具</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-4.jpg" alt="可執行、可複測的生活方式干預" /></figure>
<ul>
<li><strong>運動</strong>：世界衞生組織建議成年人每週至少完成 150–300 分鐘中等強度有氧活動或 75–150 分鐘高強度活動，並配合力量訓練。</li>
<li><strong>睡眠</strong>：成年人通常建議每晚 7–9 小時睡眠。</li>
<li><strong>時間限制進食 / 間歇性禁食</strong>：可能帶來代謝層面變化，但效果與風險高度個體化，尤其對既往心血管風險人羣應謹慎評估。</li>
</ul>
<h3>四、長壽醫學要走向主流：可驗證、可隨訪、可複製</h3>
<p>對個人：關鍵不在「追熱點療法」，而在於選擇可衡量、可複測、可長期堅持的方案。</p>
<p>對機構：核心競爭力是標準化的評估體系、隨訪體系與真實世界數據（RWD）積累能力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-5.jpg" alt="長壽醫學走向可驗證與可複製" /></figure>
<p>參考文獻：</p>
<ol>
<li>Argentieri MA, et al. Proteomic aging clock predicts mortality and risk of common age-related diseases in diverse populations. <em>Nature Medicine</em> (2024).</li>
<li>de Cabo R, Mattson MP. Effects of Intermittent Fasting on Health, Aging, and Disease. <em>New England Journal of Medicine</em> (2019).</li>
<li>Bull FC, et al. World Health Organization 2020 guidelines on physical activity and sedentary behaviour. <em>British Journal of Sports Medicine</em> (2020).</li>
<li>World Health Organization. Physical activity — recommendations for adults.</li>
<li>NHLBI (NIH). How much sleep is enough? (updated 2022).</li>
</ol>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>过去几年，「长寿医学（Longevity Medicine）」从概念讨论走向临床实践，一个明显的趋势正在形成：行业正在从「讲故事」转向「可测量、可随访、可验证」。真正能推动机构落地与个人长期获益的，不是单点疗法的堆叠，而是围绕「检测—评估—干预—追踪」建立的循证闭环。</p>
<h3>一、量化衰老：从「感觉变老」到「数据可见」</h3>
<p><strong>1. 蛋白组学</strong>：大规模人群研究显示，血液蛋白组信息可以用于构建「蛋白年龄」模型，并与多种健康结局、疾病风险与死亡风险相关联。</p>
<p><strong>2. 表观遗传与「生物年龄时钟」</strong>：以 DNA 甲基化为代表的指标适合做趋势监测与风险管理，而不是替代临床诊断。</p>
<p><strong>3. 从「单一指标」走向「多指标整合」</strong>：把蛋白组学、表观遗传、代谢与临床功能指标（如握力、体能、认知等）放在同一框架下综合评估。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-2.jpg" alt="量化衰老的多指标路径" /></figure>
<h3>二、科学干预：从「单点疗法」到「可复测的闭环方案」</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-3.png" alt="检测、评估、干预与追踪闭环" /></figure>
<p>当「可测量」成为前提，干预的价值也需要回到可验证的结果：指标是否改善？风险是否下降？状态是否更稳？</p>
<p><strong>1. 代谢与体重管理</strong>：减重不是终点，「代谢重建」才是核心——胰岛素敏感性、炎症水平、脂肪分布、睡眠与压力反应等综合改善。</p>
<p><strong>2. 免疫与炎症</strong>：把慢性炎症负担纳入长期管理，与睡眠、压力、运动、营养系统联动。</p>
<p><strong>3. 内分泌</strong>：先通过系统评估明确问题与风险，再在合规前提下进行循证干预与随访，而非「单一激素 / 单一补充」的泛化处理。</p>
<h3>三、生活方式：最朴素，但最可长期兑现的干预工具</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-4.jpg" alt="可执行、可复测的生活方式干预" /></figure>
<ul>
<li><strong>运动</strong>：世界卫生组织建议成年人每周至少完成 150–300 分钟中等强度有氧活动或 75–150 分钟高强度活动，并配合力量训练。</li>
<li><strong>睡眠</strong>：成年人通常建议每晚 7–9 小时睡眠。</li>
<li><strong>时间限制进食 / 间歇性禁食</strong>：可能带来代谢层面变化，但效果与风险高度个体化，尤其对既往心血管风险人群应谨慎评估。</li>
</ul>
<h3>四、长寿医学要走向主流：可验证、可随访、可复制</h3>
<p>对个人：关键不在「追热点疗法」，而在于选择可衡量、可复测、可长期坚持的方案。</p>
<p>对机构：核心竞争力是标准化的评估体系、随访体系与真实世界数据（RWD）积累能力。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-5.jpg" alt="长寿医学走向可验证与可复制" /></figure>
<p>参考文献：</p>
<ol>
<li>Argentieri MA, et al. Proteomic aging clock predicts mortality and risk of common age-related diseases in diverse populations. <em>Nature Medicine</em> (2024).</li>
<li>de Cabo R, Mattson MP. Effects of Intermittent Fasting on Health, Aging, and Disease. <em>New England Journal of Medicine</em> (2019).</li>
<li>Bull FC, et al. World Health Organization 2020 guidelines on physical activity and sedentary behaviour. <em>British Journal of Sports Medicine</em> (2020).</li>
<li>World Health Organization. Physical activity — recommendations for adults.</li>
<li>NHLBI (NIH). How much sleep is enough? (updated 2022).</li>
</ol>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Longevity medicine has moved from concept to clinical practice. A clear trend: the field is shifting from storytelling to what can be measured, followed and verified — an evidence loop of test, assess, intervene and track.</p>
<h3>1. Measuring ageing: from “feeling older” to data you can see</h3>
<p><strong>1. Proteomics</strong>: blood protein signals can build a “protein age” model linked to health outcomes, disease risk and mortality.</p>
<p><strong>2. Epigenetic clocks</strong>: DNA methylation suits trend monitoring and risk management — it does not replace clinical diagnosis.</p>
<p><strong>3. Many markers together</strong>: proteomics, epigenetics, metabolism and clinical function (grip, fitness, cognition) in one frame.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-2.jpg" alt="Multi-marker paths to quantifying ageing" /></figure>
<h3>2. Scientific intervention: a retestable loop</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-3.png" alt="A loop of testing, assessment, intervention and follow-up" /></figure>
<p>Did markers improve? Did risk fall? Is the state more stable?</p>
<p><strong>1. Metabolism and weight</strong>: metabolic rebuilding — insulin sensitivity, inflammation, fat distribution, sleep and stress — matters more than a short drop on the scale.</p>
<p><strong>2. Immunity and inflammation</strong>: chronic inflammatory burden managed with sleep, stress, exercise and nutrition.</p>
<p><strong>3. Endocrine</strong>: define the problem and risk first, then intervene with evidence — not a generic “one hormone / one supplement”.</p>
<h3>3. Lifestyle: the plainest tool, and the one that compounds</h3>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-4.jpg" alt="Lifestyle interventions that can be done and retested" /></figure>
<ul>
<li><strong>Exercise</strong>: WHO recommends 150–300 minutes of moderate aerobic activity a week for adults, or 75–150 minutes vigorous, plus strength training.</li>
<li><strong>Sleep</strong>: usually 7–9 hours a night for adults.</li>
<li><strong>Time-restricted eating / intermittent fasting</strong>: metabolic change is possible, but highly individual; prior cardiovascular risk needs cautious assessment.</li>
</ul>
<h3>4. For longevity medicine to go mainstream</h3>
<p>For the individual: a plan that can be measured, retested and kept up. For institutions: standard assessment, follow-up and real-world data — fewer over-promises, trust won with long-term results.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-16-5.jpg" alt="Longevity medicine towards verification and replication" /></figure>
<p>References:</p>
<ol>
<li>Argentieri MA, et al. Proteomic aging clock. <em>Nature Medicine</em> (2024).</li>
<li>de Cabo R, Mattson MP. Intermittent Fasting. <em>NEJM</em> (2019).</li>
<li>Bull FC, et al. WHO 2020 physical activity guidelines. <em>BJSM</em> (2020).</li>
<li>World Health Organization. Physical activity — recommendations for adults.</li>
<li>NHLBI (NIH). How much sleep is enough? (updated 2022).</li>
</ol>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "49",
    slug: "49",
    section: "longevity",
    eyebrow: "NK Cells",
    cover: "/images/knowledge/longevity-17-2.png",
    image: "/images/knowledge/longevity-17-1.jpg",
    title: { "zh-HK": `一個幹細胞即可生成 1400 萬個殺傷腫瘤的 NK 細胞？`, "zh-CN": `一个干细胞即可生成 1400 万个杀伤肿瘤的 NK 细胞？`, en: `One Stem Cell to 14 Million Tumour-Killing NK Cells?` },
    excerpt: { "zh-HK": `中科院王金勇團隊：從臍帶血 CD34+ 造血幹祖細胞體外培育 iNK / CAR-iNK，單細胞理論上可產出 1400 萬個誘導型 NK 細胞。`, "zh-CN": `中科院王金勇团队：从脐带血 CD34+ 造血干祖细胞体外培育 iNK / CAR-iNK，单细胞理论上可产出 1400 万个诱导型 NK 细胞。`, en: `Wang Jinyong’s team at CAS: iNK / CAR-iNK grown from cord-blood CD34+ haematopoietic progenitors — one cell theoretically yielding 14 million induced NK cells.` },
    body: { "zh-HK": `<p>只需五分之一份臍帶血，就能製備出足夠數千名患者使用的「超級免疫細胞」。這不僅是一個數字的跨越，更可能預示着昂貴的 CAR-T 療法迎來了一個更強大、更廉價的替代路徑。</p>
<p>近日，中國科學院動物研究所王金勇研究員團隊的一項研究，有望打破癌症免疫治療成本高、製備難的僵局。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-17-2.png" alt="臍帶血來源 iNK / CAR-iNK 工程化製備" /><figcaption>臍帶血來源 iNK / CAR-iNK 工程化製備技術</figcaption></figure>
<h3>一、從「單兵作戰」到「集團軍羣」</h3>
<p>NK 細胞（自然殺傷細胞）是免疫系統的「天然衞士」。不同於需要提前識別才能作戰的 T 細胞，NK 細胞憑藉本能就能識別並清除體內的癌細胞。為它們裝上名為 CAR 的精準導航頭，就是 CAR-NK 免疫療法。</p>
<p>傳統制備多從外周血提取「成年」NK 細胞再改造，個體差異大、體外難擴增、週期長、成本高，難以惠及廣大患者。</p>
<h3>二、換個「養魚」思路：從魚苗開始育種</h3>
<p>這項研究提出「體外育種，體內發育」：原材料不是成熟 NK 細胞，而是臍帶血中的 CD34+ 造血幹祖細胞。通過基因工程注入更強壯的基因，再在模擬人體環境的人工造血類器官中定向分化、大量增殖。</p>
<ul>
<li><strong>快速擴繁</strong>：14 天內細胞數量暴增 800 到 1000 倍。</li>
<li><strong>定向誘導</strong>：引導細胞集體向 NK 方向成長。</li>
<li><strong>成熟收穫</strong>：獲得高純度、高活性的誘導型 NK 細胞（iNK）或 CAR-iNK 細胞。</li>
</ul>
<h3>三、數字背後：一滴水與一片海</h3>
<p><strong>效率</strong>：單個 CD34+ 造血幹祖細胞理論上最多可培育出 1400 萬個 iNK 細胞。</p>
<p><strong>成本</strong>：製備後期所需病毒載體用量僅需原來的 1/600000。</p>
<p><strong>產能</strong>：五分之一份常規臍帶血，理論上可供數千甚至數萬名患者使用。</p>
<h3>四、療效驗證</h3>
<p>在人 B 細胞急性淋巴細胞白血病小鼠模型中，CAR 改造的 iNK 細胞顯著抑制腫瘤生長，並大幅延長荷瘤小鼠生存期，顯示出清除化療後微小殘留病灶、防止復發的潛力。</p>
<h3>結語</h3>
<p>當癌症免疫治療從「私人定製」走向「大眾現貨」，攻克癌症的夢想將離我們更近。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>只需五分之一份脐带血，就能制备出足够数千名患者使用的「超级免疫细胞」。这不仅是一个数字的跨越，更可能预示着昂贵的 CAR-T 疗法迎来了一个更强大、更廉价的替代路径。</p>
<p>近日，中国科学院动物研究所王金勇研究员团队的一项研究，有望打破癌症免疫治疗成本高、制备难的僵局。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-17-2.png" alt="脐带血来源 iNK / CAR-iNK 工程化制备" /><figcaption>脐带血来源 iNK / CAR-iNK 工程化制备技术</figcaption></figure>
<h3>一、从「单兵作战」到「集团军群」</h3>
<p>NK 细胞（自然杀伤细胞）是免疫系统的「天然卫士」。不同于需要提前识别才能作战的 T 细胞，NK 细胞凭借本能就能识别并清除体内的癌细胞。为它们装上名为 CAR 的精准导航头，就是 CAR-NK 免疫疗法。</p>
<p>传统制备多从外周血提取「成年」NK 细胞再改造，个体差异大、体外难扩增、周期长、成本高，难以惠及广大患者。</p>
<h3>二、换个「养鱼」思路：从鱼苗开始育种</h3>
<p>这项研究提出「体外育种，体内发育」：原材料不是成熟 NK 细胞，而是脐带血中的 CD34+ 造血干祖细胞。通过基因工程注入更强壮的基因，再在模拟人体环境的人工造血类器官中定向分化、大量增殖。</p>
<ul>
<li><strong>快速扩繁</strong>：14 天内细胞数量暴增 800 到 1000 倍。</li>
<li><strong>定向诱导</strong>：引导细胞集体向 NK 方向成长。</li>
<li><strong>成熟收获</strong>：获得高纯度、高活性的诱导型 NK 细胞（iNK）或 CAR-iNK 细胞。</li>
</ul>
<h3>三、数字背后：一滴水与一片海</h3>
<p><strong>效率</strong>：单个 CD34+ 造血干祖细胞理论上最多可培育出 1400 万个 iNK 细胞。</p>
<p><strong>成本</strong>：制备后期所需病毒载体用量仅需原来的 1/600000。</p>
<p><strong>产能</strong>：五分之一份常规脐带血，理论上可供数千甚至数万名患者使用。</p>
<h3>四、疗效验证</h3>
<p>在人 B 细胞急性淋巴细胞白血病小鼠模型中，CAR 改造的 iNK 细胞显著抑制肿瘤生长，并大幅延长荷瘤小鼠生存期，显示出清除化疗后微小残留病灶、防止复发的潜力。</p>
<h3>结语</h3>
<p>当癌症免疫治疗从「私人定制」走向「大众现货」，攻克癌症的梦想将离我们更近。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>One fifth of a unit of cord blood could, in principle, yield enough “super immune cells” for thousands of patients — a stronger, cheaper path beside costly CAR-T.</p>
<p>A study by Wang Jinyong’s team at the Institute of Zoology, Chinese Academy of Sciences, aims to break the deadlock of high cost and hard manufacture in cancer immunotherapy.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-17-2.png" alt="Engineered preparation of cord-blood iNK / CAR-iNK" /><figcaption>Engineered preparation of cord-blood iNK / CAR-iNK</figcaption></figure>
<h3>1. From a single soldier to an army</h3>
<p>NK cells recognise and clear cancer cells by instinct. Adding a CAR guidance head produces CAR-NK therapy. Traditional manufacture from mature blood NK cells is variable, hard to expand, slow and expensive.</p>
<h3>2. Start from fry, not wild fish</h3>
<p>The raw material is cord-blood CD34+ haematopoietic stem/progenitor cells, engineered and grown in an artificial haematopoietic organoid.</p>
<ul>
<li><strong>Rapid expansion</strong>: 800- to 1,000-fold in 14 days.</li>
<li><strong>Directed induction</strong> towards the NK fate.</li>
<li><strong>Mature harvest</strong> of high-purity iNK or CAR-iNK cells.</li>
</ul>
<h3>3. Behind the numbers</h3>
<p><strong>Efficiency</strong>: one CD34+ progenitor could theoretically yield 14 million iNK cells.</p>
<p><strong>Cost</strong>: viral vector in later manufacture reported as 1/600,000 of the traditional amount.</p>
<p><strong>Capacity</strong>: one fifth of a standard cord-blood unit could theoretically supply thousands or even tens of thousands of doses.</p>
<h3>4. Efficacy</h3>
<p>In a mouse model of human B-cell ALL, CAR-modified iNK cells markedly inhibited tumour growth and extended survival — supporting potential to clear minimal residual disease after chemotherapy.</p>
<h3>Conclusion</h3>
<p>When cancer immunotherapy moves from private custom to public off-the-shelf supply, the dream of overcoming cancer comes closer.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "50",
    slug: "50",
    section: "longevity",
    eyebrow: "Future Hospital",
    cover: "/images/knowledge/longevity-18-1.png",
    image: "/images/knowledge/longevity-18-1.png",
    title: { "zh-HK": `未來醫院：功能醫學與長壽醫學合流下的健康新生態`, "zh-CN": `未来医院：功能医学与长寿医学合流下的健康新生态`, en: `Future Hospitals: When Functional Medicine Meets Longevity Medicine` },
    excerpt: { "zh-HK": `功能醫學還原個體健康真相，長壽醫學直面衰老與退行性病變。二者合流，醫院將從「治病場所」走向全週期健康管理中心。`, "zh-CN": `功能医学还原个体健康真相，长寿医学直面衰老与退行性病变。二者合流，医院将从「治病场所」走向全周期健康管理中心。`, en: `Functional medicine reconstructs individual health; longevity medicine faces ageing itself. Together they point to hospitals as centres of lifelong health management, not only of disease.` },
    body: { "zh-HK": `<p>在當今醫療健康領域，一場靜默卻深刻的變革正悄然興起。傳統醫療模式逐漸暴露出侷限性，而功能醫學與長壽醫學的融合，如同兩股強大的洪流，匯聚成一股不可阻擋的力量，為未來醫院的發展勾勒出一幅全新的藍圖。這不僅關乎醫療技術的進步，更是一場對健康管理理念和生命質量提升的系統重構。</p>
<h3>一、功能醫學：打破碎片化，還原個體健康真相</h3>
<p>功能醫學的獨特力量，在於它敢於戳破傳統醫療中「一刀切」的幻覺。在傳統觀念裏，人們往往將健康簡化為一系列碎片化的指標，血壓、血糖、血脂等數值成了衡量健康的唯一標尺。然而，功能醫學告訴我們，每個人的身體都是一個獨一無二的複雜網絡，受到遺傳、環境、生活方式、心理狀態等多重因素的交織影響。</p>
<p>想像一下，兩個人可能有着相似的血壓和血糖數值，但一個長期處於高壓工作狀態、飲食不規律，另一個則過着輕鬆自在、飲食均衡的生活。從功能醫學的角度看，他們的健康狀況有着本質的差異。功能醫學強調個體化調查和深度剖析，通過詳細的問診、全面的檢測以及綜合的分析，挖掘隱藏在表面指標背後的真正病因。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-2.jpg" alt="功能醫學強調個體化評估" /></figure>
<p>例如，對於一位長期遭受慢性疲勞困擾的患者，傳統醫學可能只是簡單地開一些緩解症狀的藥物。而功能醫學會深入探究其生活習慣、飲食結構、腸道健康、激素水平等多個方面，可能發現腸道菌羣失衡、維生素缺乏或激素分泌紊亂等問題，進而制定個性化的干預方案，包括調整飲食、補充營養素、改善腸道環境等。這種從根源上解決問題的做法，讓健康不再是碎片化指標的簡單堆砌，而是一條貫穿生命始終的完整曲線。</p>
<h3>二、長壽醫學：直面衰老，挑戰人類極限</h3>
<p>長壽醫學的價值，在於它敢於將人類最難的問題擺上桌面。隨着人口老齡化的加劇，如何與退行性病變抗衡、如何延緩器官衰老、如何讓「未來」的健康不再是遙不可及的夢想，成為了全社會關注的焦點。</p>
<p>退行性病變，如阿爾茨海默病、帕金森病、心血管疾病等，是衰老過程中不可避免的挑戰。長壽醫學致力於深入研究這些疾病的發病機制，尋找有效的預防和治療方法。它不僅僅關注延長壽命，更注重提高生命的質量，讓人們在老年階段依然能夠保持獨立、健康和有活力的生活。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-3.png" alt="長壽醫學關注健康壽命而非僅延長壽命" /></figure>
<p>例如，在抗衰老研究方面，科學家們正在探索幹細胞療法、基因編輯、抗氧化療法等途徑，通過激活身體的自我修復機制，延緩細胞衰老和器官功能衰退。同時，長壽醫學還強調生活方式的管理，包括合理的飲食、適度的運動、良好的睡眠和積極的心理狀態。這些綜合措施的協同作用，為人們打開了一扇通往健康長壽的大門。</p>
<h3>三、功能醫學與長壽醫學合流：構建整體健康生態系統</h3>
<p>當功能醫學與長壽醫學這兩大力量合流，意味着將「今天的健康」和「明天的壽命」打通，形成一個整體生態系統。功能醫學解決了個體差異問題，重構了健康管理的邏輯；長壽醫學則解決了時間維度的問題，延展了生命質量的邊界。兩者相互補充，共同構建起一個跨越當下與未來、個人與家族、健康與壽命的整體生態。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-4.png" alt="功能醫學與長壽醫學合流" /></figure>
<p>在未來醫院中，這種合流將得到充分體現。醫院不再僅僅是治療疾病的場所，而是成為健康管理的中心。從患者踏入醫院的那一刻起，就會接受全面的功能醫學評估；基於評估結果，醫生會制定涵蓋飲食、運動、營養補充、心理調節等方面的個性化方案。同時，針對有衰老相關疾病風險或已經出現早期症狀的患者，長壽醫學可通過先進檢測與干預，早期發現和預防退行性病變，例如利用基因檢測評估風險，或通過幹細胞等前沿技術修復受損組織。</p>
<h3>四、未來醫院：以整體生態引領健康產業新趨勢</h3>
<p>健康產業的未來，不在於誰能跑得更快，而在於誰能站得更穩。功能醫學與長壽醫學的融合，代表着一次「系統重構」的機會。它們不是簡單的商業概念，而是一個具有深遠意義的整體生態。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-5.png" alt="未來醫院作為全週期健康管理中心" /></figure>
<p>未來醫院將為患者提供從預防保健到疾病治療、從康復護理到衰老管理的閉環服務，並與社區、家庭醫生、科研機構建立合作網絡。在這個生態中，患者不再是被動接受治療的對象，而是健康管理的主動參與者：通過可穿戴設備與遠程溝通，醫生可及時調整方案，實現更個性化的精準醫療。</p>
<h3>結語</h3>
<p>功能醫學與長壽醫學的合流，為未來醫院的發展帶來了新的可能。它們將引領健康產業走向更加個性化、精準化、整體化的方向。真正的健康長壽，需要把「今天的功能」和「明天的壽命」放在同一張藍圖上。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>在当今医疗健康领域，一场静默却深刻的变革正悄然兴起。传统医疗模式逐渐暴露出局限性，而功能医学与长寿医学的融合，如同两股强大的洪流，汇聚成一股不可阻挡的力量，为未来医院的发展勾勒出一幅全新的蓝图。这不仅关乎医疗技术的进步，更是一场对健康管理理念和生命质量提升的系统重构。</p>
<h3>一、功能医学：打破碎片化，还原个体健康真相</h3>
<p>功能医学的独特力量，在于它敢于戳破传统医疗中「一刀切」的幻觉。在传统观念里，人们往往将健康简化为一系列碎片化的指标，血压、血糖、血脂等数值成了衡量健康的唯一标尺。然而，功能医学告诉我们，每个人的身体都是一个独一无二的复杂网络，受到遗传、环境、生活方式、心理状态等多重因素的交织影响。</p>
<p>想象一下，两个人可能有着相似的血压和血糖数值，但一个长期处于高压工作状态、饮食不规律，另一个则过着轻松自在、饮食均衡的生活。从功能医学的角度看，他们的健康状况有着本质的差异。功能医学强调个体化调查和深度剖析，通过详细的问诊、全面的检测以及综合的分析，挖掘隐藏在表面指标背后的真正病因。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-2.jpg" alt="功能医学强调个体化评估" /></figure>
<p>例如，对于一位长期遭受慢性疲劳困扰的患者，传统医学可能只是简单地开一些缓解症状的药物。而功能医学会深入探究其生活习惯、饮食结构、肠道健康、激素水平等多个方面，可能发现肠道菌群失衡、维生素缺乏或激素分泌紊乱等问题，进而制定个性化的干预方案，包括调整饮食、补充营养素、改善肠道环境等。这种从根源上解决问题的做法，让健康不再是碎片化指标的简单堆砌，而是一条贯穿生命始终的完整曲线。</p>
<h3>二、长寿医学：直面衰老，挑战人类极限</h3>
<p>长寿医学的价值，在于它敢于将人类最难的问题摆上桌面。随着人口老龄化的加剧，如何与退行性病变抗衡、如何延缓器官衰老、如何让「未来」的健康不再是遥不可及的梦想，成为了全社会关注的焦点。</p>
<p>退行性病变，如阿尔茨海默病、帕金森病、心血管疾病等，是衰老过程中不可避免的挑战。长寿医学致力于深入研究这些疾病的发病机制，寻找有效的预防和治疗方法。它不仅仅关注延长寿命，更注重提高生命的质量，让人们在老年阶段依然能够保持独立、健康和有活力的生活。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-3.png" alt="长寿医学关注健康寿命而非仅延长寿命" /></figure>
<p>例如，在抗衰老研究方面，科学家们正在探索干细胞疗法、基因编辑、抗氧化疗法等途径，通过激活身体的自我修复机制，延缓细胞衰老和器官功能衰退。同时，长寿医学还强调生活方式的管理，包括合理的饮食、适度的运动、良好的睡眠和积极的心理状态。这些综合措施的协同作用，为人们打开了一扇通往健康长寿的大门。</p>
<h3>三、功能医学与长寿医学合流：构建整体健康生态系统</h3>
<p>当功能医学与长寿医学这两大力量合流，意味着将「今天的健康」和「明天的寿命」打通，形成一个整体生态系统。功能医学解决了个体差异问题，重构了健康管理的逻辑；长寿医学则解决了时间维度的问题，延展了生命质量的边界。两者相互补充，共同构建起一个跨越当下与未来、个人与家族、健康与寿命的整体生态。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-4.png" alt="功能医学与长寿医学合流" /></figure>
<p>在未来医院中，这种合流将得到充分体现。医院不再仅仅是治疗疾病的场所，而是成为健康管理的中心。从患者踏入医院的那一刻起，就会接受全面的功能医学评估；基于评估结果，医生会制定涵盖饮食、运动、营养补充、心理调节等方面的个性化方案。同时，针对有衰老相关疾病风险或已经出现早期症状的患者，长寿医学可通过先进检测与干预，早期发现和预防退行性病变，例如利用基因检测评估风险，或通过干细胞等前沿技术修复受损组织。</p>
<h3>四、未来医院：以整体生态引领健康产业新趋势</h3>
<p>健康产业的未来，不在于谁能跑得更快，而在于谁能站得更稳。功能医学与长寿医学的融合，代表着一次「系统重构」的机会。它们不是简单的商业概念，而是一个具有深远意义的整体生态。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-5.png" alt="未来医院作为全周期健康管理中心" /></figure>
<p>未来医院将为患者提供从预防保健到疾病治疗、从康复护理到衰老管理的闭环服务，并与社区、家庭医生、科研机构建立合作网络。在这个生态中，患者不再是被动接受治疗的对象，而是健康管理的主动参与者：通过可穿戴设备与远程沟通，医生可及时调整方案，实现更个性化的精准医疗。</p>
<h3>结语</h3>
<p>功能医学与长寿医学的合流，为未来医院的发展带来了新的可能。它们将引领健康产业走向更加个性化、精准化、整体化的方向。真正的健康长寿，需要把「今天的功能」和「明天的寿命」放在同一张蓝图上。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>A quiet shift is underway in healthcare. The limits of a purely disease-centred model are clearer; functional medicine and longevity medicine, flowing together, sketch a different hospital — not only a place that treats illness, but a centre that reconstructs how health is understood across a lifetime.</p>
<h3>1. Functional medicine: putting the fragments back together</h3>
<p>Functional medicine challenges the “one-size-fits-all” habit of reducing health to a stack of numbers — blood pressure, glucose, lipids. Each body is a network shaped by genetics, environment, lifestyle and psychology. Two people with similar lab values can live in entirely different physiological realities if one is chronically stressed and eating irregularly while the other is not.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-2.jpg" alt="Functional medicine emphasises individual assessment" /></figure>
<p>A patient with long-standing fatigue may leave a conventional visit with only symptom relief. A functional work-up looks at habits, diet, the gut, hormones and micronutrients, and may find dysbiosis, deficiency or endocrine imbalance — then intervene at the root. Health becomes a curve through life, not a pile of disconnected markers.</p>
<h3>2. Longevity medicine: putting ageing on the table</h3>
<p>Longevity medicine is willing to face the hardest problem: degenerative disease, organ ageing, and whether “future health” can be more than a slogan. Alzheimer’s disease, Parkinson’s disease and cardiovascular disease are not side issues of getting older; they are the terrain. The aim is not lifespan alone, but independence, function and vitality in later life.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-3.png" alt="Longevity medicine aims at healthspan, not lifespan alone" /></figure>
<p>Research paths include stem-cell therapy, gene editing and antioxidant strategies, alongside diet, movement, sleep and psychological health. The promise is a repair-oriented biology plus a life that can actually sustain it.</p>
<h3>3. One ecosystem: today’s health and tomorrow’s years</h3>
<p>Together, the two fields join “health now” to “years ahead”. Functional medicine rebuilds the logic of individual difference; longevity medicine extends the time horizon. A future hospital would start with a full functional assessment and a personal plan — food, exercise, nutrients, psychological care — and, where ageing-related risk is already visible, use advanced testing and regenerative tools earlier rather than later.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-4.png" alt="Functional and longevity medicine flowing together" /></figure>
<h3>4. The hospital as a health hub</h3>
<p>The industry’s future is less about who runs fastest than who stands on a coherent system. Prevention, treatment, rehabilitation and ageing management form a loop; community, family doctors and research partners form a network. Patients become participants — wearable data, remote follow-up, plans that can be adjusted — rather than passive recipients of episodes of care.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-18-5.png" alt="The future hospital as a lifelong health hub" /></figure>
<h3>Conclusion</h3>
<p>The confluence of functional and longevity medicine is a chance to redesign the hospital around personalised, precise, whole-person care — putting today’s function and tomorrow’s lifespan on the same map.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "51",
    slug: "51",
    section: "longevity",
    eyebrow: "Stanford",
    cover: "/images/knowledge/longevity-19-1.jpg",
    image: "/images/knowledge/longevity-19-1.jpg",
    title: { "zh-HK": `斯坦福大學報道：科學能減緩衰老嗎？`, "zh-CN": `斯坦福大学报道：科学能减缓衰老吗？`, en: `Stanford: Can Science Slow Ageing?` },
    excerpt: { "zh-HK": `斯坦福遺傳學家安妮·布魯內特談衰老的多層次機制、慢性炎性衰老、生活方式干預，以及「逆轉」衰老在科學上究竟意味着什麼。`, "zh-CN": `斯坦福遗传学家安妮·布鲁内特谈衰老的多层次机制、慢性炎性衰老、生活方式干预，以及「逆转」衰老在科学上究竟意味着什么。`, en: `Stanford geneticist Anne Brunet on what ageing is, why it seeds many diseases, what lifestyle can change, and what “reversing” ageing can honestly mean.` },
    body: { "zh-HK": `<p>衰老是每個人的必經之路，但我們真的瞭解身體在時光中究竟發生了什麼變化嗎？這種普遍而又不可避免的體驗，為何如此神秘？</p>
<p>不久前，斯坦福大學醫學院的安妮·布魯內特教授接受採訪，深入探討了衰老的科學。作為遺傳學教授，她領導的實驗室專注於揭示衰老與長壽的分子機制，甚至因將短壽命的非洲鱂魚打造成衰老研究的新模型而聞名。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-2.png" alt="安妮·布魯內特談衰老科學" /></figure>
<p>我們與她探討了幾個核心問題：科學如何定義衰老？為何衰老會帶來多種疾病？生活方式有多大影響？甚至，「逆轉」衰老是否可能？她的回答，為我們揭開了衰老研究的前沿圖景。</p>
<h3>一、衰老是什麼？一場多層次的功能衰退</h3>
<p>在科學視角下，衰老是一個將年輕強健的個體轉變為年長衰弱者的過程，其特點是更易患病，死亡風險也隨之升高。這個過程極其複雜，涉及多個層面。</p>
<p>在分子級別，科學家已總結出數個「衰老標誌」，且名單還在增加。其中包括：</p>
<ul>
<li><strong>表觀遺傳改變</strong>：基因如何被「開關」的指令隨時間發生變化，影響每個細胞的功能。</li>
<li><strong>營養感應失調</strong>：身體逐漸失去對食物和能量信號做出精準反應的能力。</li>
<li><strong>慢性炎性衰老</strong>：免疫信號蛋白（細胞因子）在組織中緩慢累積，長期持續的低度炎症會悄然損害正常細胞功能。</li>
</ul>
<p>這些因素各自推動衰老進程，疊加起來則產生更大的影響。</p>
<h3>二、為何衰老是「萬病之基」？</h3>
<p>衰老為何會同時增加多種疾病的風險？科學界正在探索幾種可能性。</p>
<p>一種觀點是，隨着年齡增長，個體整體「韌性」下降，這使人變得脆弱，並非因為某一種特定毛病，而是全面防禦能力的喪失。</p>
<p>另一種解釋則指向共享的分子機制。例如前面提到的「慢性炎性衰老」。這種持續的低度炎症狀態會侵蝕細胞的正常功能。以神經元為例，其本職是傳遞信息，但在慢性炎症環境下，這一功能便會受損。因此，年齡相關的炎症可能是阿爾茨海默病、帕金森病等神經退行性疾病的推手之一。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-3.png" alt="慢性炎症與多種年齡相關疾病" /></figure>
<p>此外，衰老還伴隨着組織中異常蛋白質聚集物的增加（大腦中尤其明顯）。這些「垃圾蛋白」可能壓垮細胞自身的質量控制系統，從而誘發神經功能障礙，加速疾病發展。正因為衰老同時撼動了生命系統的多根「支柱」，生物體才可能對一整組疾病變得脆弱。</p>
<h3>三、生活方式能改變衰老軌跡嗎？</h3>
<p>答案是肯定的。在動物實驗中，飲食限制是目前已知最有效的長壽干預措施之一——減少食物攝入但不導致營養不良，已被證明能在許多物種中延長平均壽命和健康壽命。雖然具體飲食方案因物種而異，但熱量限制與間歇性禁食有益於長壽的原理似乎具有普遍性。</p>
<p>鍛鍊則是另一項公認有效的措施。研究表明，鍛鍊能顯著延長平均壽命（讓更多人活得更久更健康），儘管它可能無法突破人類壽命的理論上限。這一點至關重要，因為它意味着運動能提升整個人羣的健康水平。</p>
<h3>四、「逆轉」衰老可能嗎？尤其是大腦</h3>
<p>「逆轉」這個詞需要謹慎解讀，時間無法倒流。科學家所説的「逆轉衰老」更為微妙：如果我們對年老個體進行某種干預，能否使其可測量的生物學指標（如某些分子特徵、細胞功能）變得更像年輕狀態？如果可以，這更像是一種「煥發新生」，是將生物指針撥向更年輕的方向，而非讓時光倒流。</p>
<p>那麼，大腦的衰老有可能被「逆轉」嗎？即使健康人羣，大腦衰老也與認知下降和記憶減退相關。布魯內特教授的實驗室正探索通過抑制大腦炎症來逆轉衰老的某些特徵，也研究通過「部分重編程」技術，暫時改變基因的開啓方式，以促進大腦中新細胞的生成。這是一個非常活躍且令人興奮的研究方向。</p>
<p>此外，包括她在內的許多團隊也在研究幹細胞在再生醫學中的應用。幹細胞是能夠自我更新和分化的細胞儲備，維持其一生正常功能對組織修復至關重要。它們就像一個潛在的細胞「工具箱」，未來或許能被用來增強衰老機體的韌性，甚至進行修復。</p>
<h3>五、來自非洲鱂魚的壽命啓示</h3>
<p>布魯內特實驗室以非洲鱂魚為模型研究衰老。當初選擇它，是因為需要一種壽命極短、卻擁有與人類相似複雜系統（免疫、組織等）的實驗動物。鱂魚僅用約六個月就走完整個生命週期，比小鼠快五倍，使得許多在長壽命動物上不可行的重複實驗成為可能。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-4.jpg" alt="非洲鱂魚作為短壽命衰老研究模型" /></figure>
<p>但鱂魚還有一個更驚人的特質：它能進入一種稱為「胚胎滯育」的休眠狀態。在這種狀態下，胚胎可以暫停發育，存活數月甚至數年——實驗室記錄最長達到兩年半。考慮到其成體壽命僅六個月，這個比例堪稱奇蹟，為探索生命與時間的生物學機制提供了窗口。</p>
<h3>六、衰老研究最大的未解之謎</h3>
<p>目前，我們仍不完全清楚調控衰老的全部機制，也不知道如何將這些發現轉化為適用於人類的干預措施。這是最根本的挑戰。布魯內特實驗室專注於基礎研究，特別期待能夠持續觀測動物從生到死的完整動態過程，而非只在不同時間點「拍照」。通過全景式地捕捉衰老如何實時展開，或許能發現曾被忽略的新生命階段，或找到關鍵干預點。壽命壓縮的鱂魚，正是實現這種「生命動態錄像」的理想模型。</p>
<h3>結語</h3>
<p>雖然這一切尚在早期，但布魯內特教授相信，衰老的動態過程本身——即它是如何實時上演的——是該領域最值得深入探索的前沿之一。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>衰老是每个人的必经之路，但我们真的了解身体在时光中究竟发生了什么变化吗？这种普遍而又不可避免的体验，为何如此神秘？</p>
<p>不久前，斯坦福大学医学院的安妮·布鲁内特教授接受采访，深入探讨了衰老的科学。作为遗传学教授，她领导的实验室专注于揭示衰老与长寿的分子机制，甚至因将短寿命的非洲鳉鱼打造成衰老研究的新模型而闻名。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-2.png" alt="安妮·布鲁内特谈衰老科学" /></figure>
<p>我们与她探讨了几个核心问题：科学如何定义衰老？为何衰老会带来多种疾病？生活方式有多大影响？甚至，「逆转」衰老是否可能？她的回答，为我们揭开了衰老研究的前沿图景。</p>
<h3>一、衰老是什么？一场多层次的功能衰退</h3>
<p>在科学视角下，衰老是一个将年轻强健的个体转变为年长衰弱者的过程，其特点是更易患病，死亡风险也随之升高。这个过程极其复杂，涉及多个层面。</p>
<p>在分子级别，科学家已总结出数个「衰老标志」，且名单还在增加。其中包括：</p>
<ul>
<li><strong>表观遗传改变</strong>：基因如何被「开关」的指令随时间发生变化，影响每个细胞的功能。</li>
<li><strong>营养感应失调</strong>：身体逐渐失去对食物和能量信号做出精准反应的能力。</li>
<li><strong>慢性炎性衰老</strong>：免疫信号蛋白（细胞因子）在组织中缓慢累积，长期持续的低度炎症会悄然损害正常细胞功能。</li>
</ul>
<p>这些因素各自推动衰老进程，叠加起来则产生更大的影响。</p>
<h3>二、为何衰老是「万病之基」？</h3>
<p>衰老为何会同时增加多种疾病的风险？科学界正在探索几种可能性。</p>
<p>一种观点是，随着年龄增长，个体整体「韧性」下降，这使人变得脆弱，并非因为某一种特定毛病，而是全面防御能力的丧失。</p>
<p>另一种解释则指向共享的分子机制。例如前面提到的「慢性炎性衰老」。这种持续的低度炎症状态会侵蚀细胞的正常功能。以神经元为例，其本职是传递信息，但在慢性炎症环境下，这一功能便会受损。因此，年龄相关的炎症可能是阿尔茨海默病、帕金森病等神经退行性疾病的推手之一。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-3.png" alt="慢性炎症与多种年龄相关疾病" /></figure>
<p>此外，衰老还伴随着组织中异常蛋白质聚集物的增加（大脑中尤其明显）。这些「垃圾蛋白」可能压垮细胞自身的质量控制系统，从而诱发神经功能障碍，加速疾病发展。正因为衰老同时撼动了生命系统的多根「支柱」，生物体才可能对一整组疾病变得脆弱。</p>
<h3>三、生活方式能改变衰老轨迹吗？</h3>
<p>答案是肯定的。在动物实验中，饮食限制是目前已知最有效的长寿干预措施之一——减少食物摄入但不导致营养不良，已被证明能在许多物种中延长平均寿命和健康寿命。虽然具体饮食方案因物种而异，但热量限制与间歇性禁食有益于长寿的原理似乎具有普遍性。</p>
<p>锻炼则是另一项公认有效的措施。研究表明，锻炼能显著延长平均寿命（让更多人活得更久更健康），尽管它可能无法突破人类寿命的理论上限。这一点至关重要，因为它意味着运动能提升整个人群的健康水平。</p>
<h3>四、「逆转」衰老可能吗？尤其是大脑</h3>
<p>「逆转」这个词需要谨慎解读，时间无法倒流。科学家所说的「逆转衰老」更为微妙：如果我们对年老个体进行某种干预，能否使其可测量的生物学指标（如某些分子特征、细胞功能）变得更像年轻状态？如果可以，这更像是一种「焕发新生」，是将生物指针拨向更年轻的方向，而非让时光倒流。</p>
<p>那么，大脑的衰老有可能被「逆转」吗？即使健康人群，大脑衰老也与认知下降和记忆减退相关。布鲁内特教授的实验室正探索通过抑制大脑炎症来逆转衰老的某些特征，也研究通过「部分重编程」技术，暂时改变基因的开启方式，以促进大脑中新细胞的生成。这是一个非常活跃且令人兴奋的研究方向。</p>
<p>此外，包括她在内的许多团队也在研究干细胞在再生医学中的应用。干细胞是能够自我更新和分化的细胞储备，维持其一生正常功能对组织修复至关重要。它们就像一个潜在的细胞「工具箱」，未来或许能被用来增强衰老机体的韧性，甚至进行修复。</p>
<h3>五、来自非洲鳉鱼的寿命启示</h3>
<p>布鲁内特实验室以非洲鳉鱼为模型研究衰老。当初选择它，是因为需要一种寿命极短、却拥有与人类相似复杂系统（免疫、组织等）的实验动物。鳉鱼仅用约六个月就走完整个生命周期，比小鼠快五倍，使得许多在长寿命动物上不可行的重复实验成为可能。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-4.jpg" alt="非洲鳉鱼作为短寿命衰老研究模型" /></figure>
<p>但鳉鱼还有一个更惊人的特质：它能进入一种称为「胚胎滞育」的休眠状态。在这种状态下，胚胎可以暂停发育，存活数月甚至数年——实验室记录最长达到两年半。考虑到其成体寿命仅六个月，这个比例堪称奇迹，为探索生命与时间的生物学机制提供了窗口。</p>
<h3>六、衰老研究最大的未解之谜</h3>
<p>目前，我们仍不完全清楚调控衰老的全部机制，也不知道如何将这些发现转化为适用于人类的干预措施。这是最根本的挑战。布鲁内特实验室专注于基础研究，特别期待能够持续观测动物从生到死的完整动态过程，而非只在不同时间点「拍照」。通过全景式地捕捉衰老如何实时展开，或许能发现曾被忽略的新生命阶段，或找到关键干预点。寿命压缩的鳉鱼，正是实现这种「生命动态录像」的理想模型。</p>
<h3>结语</h3>
<p>虽然这一切尚在早期，但布鲁内特教授相信，衰老的动态过程本身——即它是如何实时上演的——是该领域最值得深入探索的前沿之一。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Ageing is universal — and still poorly understood. What actually changes in the body as time passes?</p>
<p>Anne Brunet, professor of genetics at Stanford University School of Medicine, has spent her career on the molecular biology of ageing and longevity, including establishing the short-lived African turquoise killifish as a model. In a recent interview she took up the questions that matter: how science defines ageing, why it seeds so many diseases, how far lifestyle can move the needle, and whether “reversal” is even a coherent idea.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-2.png" alt="Anne Brunet on the science of ageing" /></figure>
<h3>1. What ageing is: decline on many levels</h3>
<p>Scientifically, ageing is the process that turns a robust young organism into a frail older one — more disease, higher risk of death. At the molecular level the list of hallmarks keeps growing. It includes epigenetic drift (the “on/off” instructions of genes changing over time), dysregulated nutrient sensing, and chronic inflammatory ageing: cytokines accumulating until low-grade inflammation quietly damages ordinary cell function. Each driver matters; together they matter more.</p>
<h3>2. Why ageing is a common soil for disease</h3>
<p>One view is a loss of whole-organism resilience — not one broken part, but weaker defences everywhere. Another points to shared mechanisms such as inflammaging. Neurons exist to transmit information; under chronic inflammation that job suffers, which is one reason age-related inflammation is implicated in Alzheimer’s and Parkinson’s disease.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-3.png" alt="Chronic inflammation and age-related disease" /></figure>
<p>Abnormal protein aggregates also rise with age, especially in the brain, and may overwhelm quality-control systems. Because several pillars of the living system are shaken at once, a whole group of diseases becomes more likely.</p>
<h3>3. Can lifestyle change the trajectory?</h3>
<p>In animals, dietary restriction — less food without malnutrition — remains among the most reliable ways to extend both average lifespan and healthspan. Calorie restriction and intermittent fasting seem to share a conserved logic even when the exact diet differs by species. Exercise, meanwhile, clearly lengthens average lifespan (more people living longer in better health) even if it may not raise the theoretical human maximum. That still matters: it lifts the health of a population.</p>
<h3>4. “Reversing” ageing — especially in the brain</h3>
<p>Time does not run backwards. What scientists mean by reversal is subtler: after an intervention, do measurable biological features of an old organism look more like a younger state? That is rejuvenation of pointers, not a rewind of the calendar. Brunet’s lab is testing whether damping brain inflammation can reverse some features of brain ageing, and whether partial reprogramming — briefly changing which genes are on — can encourage new cells. Stem cells remain a “toolbox” for resilience and repair if their lifelong function can be kept.</p>
<h3>5. What killifish teach</h3>
<p>The fish lives about six months — five times faster than a mouse — so experiments that are impossible in long-lived animals become repeatable. It can also enter embryonic diapause, pausing development for months or even years (up to two and a half years in the lab) despite an adult life of six months: a window onto how life holds time.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-19-4.jpg" alt="African killifish as a compressed model of ageing" /></figure>
<h3>6. The largest unsolved problem</h3>
<p>We still do not know all the mechanisms, nor how to turn them into human interventions. Brunet’s group wants a continuous film of a life, not snapshots — to see ageing unfold in real time and find stages and leverage points that still photographs miss. The compressed killifish lifespan is built for that film.</p>
<h3>Conclusion</h3>
<p>The work is early. Brunet’s bet is that the dynamics of ageing — how it actually plays out in time — is one of the frontiers most worth watching.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "52",
    slug: "52",
    section: "longevity",
    eyebrow: "Healthspan",
    cover: "/images/knowledge/longevity-20-1.png",
    image: "/images/knowledge/longevity-20-1.png",
    title: { "zh-HK": `「僅延長壽命長度」的時代已經過去，如何延長高質量的生命年限`, "zh-CN": `「仅延长寿命长度」的时代已经过去，如何延长高质量的生命年限`, en: `Extending Lifespan Alone Is No Longer Enough — The Question Is Healthspan` },
    excerpt: { "zh-HK": `從疾病治療到衰老管理：核心是把「項目式銷售」升級為數據驅動的全週期健康管理，通過精準評估和持續干預延長健康跨度。`, "zh-CN": `从疾病治疗到衰老管理：核心是把「项目式销售」升级为数据驱动的全周期健康管理，通过精准评估和持续干预延长健康跨度。`, en: `From treating disease to managing ageing: the shift is from one-off projects to data-driven, lifelong care that lengthens healthspan — years lived in good function.` },
    body: { "zh-HK": `<p>從疾病治療到衰老管理：長壽醫學的核心，在於把「項目式銷售」升級為數據驅動的全週期健康管理，通過精準評估和持續干預，延長高質量的生命年限。</p>
<p>「僅延長壽命長度」的時代已經過去。如何延長「健康跨度」（Healthspan）——即人能保持功能、獨立生活的那些年——已成為老齡化社會最迫切的議題之一。這一轉變催生了對傳統以疾病治療為中心的醫療模式進行反思，也推動了衰老管理與長壽服務的需求：市場要的是可評估、可跟進、可個體化的全程管理，而不是一次性項目。</p>
<p>人口結構老化、健康消費從「被動治療」轉向「主動抗衰」，使長壽醫學與鄰近學科的邊界愈發需要釐清。下面從干預時機、認知深度與技術手段三方面，說明它與老年病診療、醫美抗衰及治未病路徑的分別。</p>
<h3>一、與老年病診療：核心邏輯與干預時機不同</h3>
<p>老年病診療強調老年綜合評估與共病管理，聚焦 60 歲以上老年人羣。長壽醫學瞄準 30 歲以上人羣，以「健康干預」為核心，目標是延長健康壽命而非僅應對已發老年疾病。若將兩者混淆，可能導致干預滯後，錯失衰老調控的最佳窗口期。</p>
<h3>二、與醫美抗衰：對衰老的認知深度不同</h3>
<p>醫美抗衰以皮膚年輕化為目標，重點改善皮膚鬆弛、皺紋等外在特徵。長壽醫學關注內在的衰老機制調控，既關注皮膚狀態，更重視內臟功能、免疫水平等深層指標。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-20-3.png" alt="長壽醫學關注內在機制而非僅外表" /></figure>
<h3>三、與治未病科：理論基礎與技術手段有差異</h3>
<p>治未病基於中醫理論，通過中藥、針灸等手段預防疾病。長壽醫學以細胞衰老理論、端粒學説等分子機制為基礎，整合多組學檢測、再生醫學、衰老細胞清除等技術以評估和延緩衰老。</p>
<h3>結語</h3>
<p>總的來看，長壽醫學的特點在於將「衰老」作為獨立的干預對象，其對衰老過程進行精準評估和系統性干預的能力是其他學科難以替代的。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>从疾病治疗到衰老管理：长寿医学的核心，在于把「项目式销售」升级为数据驱动的全周期健康管理，通过精准评估和持续干预，延长高质量的生命年限。</p>
<p>「仅延长寿命长度」的时代已经过去。如何延长「健康跨度」（Healthspan）——即人能保持功能、独立生活的那些年——已成为老龄化社会最迫切的议题之一。这一转变催生了对传统以疾病治疗为中心的医疗模式进行反思，也推动了衰老管理与长寿服务的需求：市场要的是可评估、可跟进、可个体化的全程管理，而不是一次性项目。</p>
<p>人口结构老化、健康消费从「被动治疗」转向「主动抗衰」，使长寿医学与邻近学科的边界愈发需要厘清。下面从干预时机、认知深度与技术手段三方面，说明它与老年病诊疗、医美抗衰及治未病路径的分别。</p>
<h3>一、与老年病诊疗：核心逻辑与干预时机不同</h3>
<p>老年病诊疗强调老年综合评估与共病管理，聚焦 60 岁以上老年人群。长寿医学瞄准 30 岁以上人群，以「健康干预」为核心，目标是延长健康寿命而非仅应对已发老年疾病。若将两者混淆，可能导致干预滞后，错失衰老调控的最佳窗口期。</p>
<h3>二、与医美抗衰：对衰老的认知深度不同</h3>
<p>医美抗衰以皮肤年轻化为目标，重点改善皮肤松弛、皱纹等外在特征。长寿医学关注内在的衰老机制调控，既关注皮肤状态，更重视内脏功能、免疫水平等深层指标。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-20-3.png" alt="长寿医学关注内在机制而非仅外表" /></figure>
<h3>三、与治未病科：理论基础与技术手段有差异</h3>
<p>治未病基于中医理论，通过中药、针灸等手段预防疾病。长寿医学以细胞衰老理论、端粒学说等分子机制为基础，整合多组学检测、再生医学、衰老细胞清除等技术以评估和延缓衰老。</p>
<h3>结语</h3>
<p>总的来看，长寿医学的特点在于将「衰老」作为独立的干预对象，其对衰老过程进行精准评估和系统性干预的能力是其他学科难以替代的。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>From treating disease to managing ageing: longevity medicine’s core move is to upgrade one-off “project sales” into data-driven, whole-cycle care — assess precisely, intervene continuously, and lengthen years lived in good function.</p>
<p>The era of “add years to life and stop there” is over. Extending healthspan — the years a person can keep function and live independently — is now among the most urgent questions in an ageing society. That shift forces a rethink of disease-centred care and pulls demand toward ageing management: services that can be measured, followed and individualised, not a single transaction.</p>
<p>Demographic ageing and a turn from passive treatment to active anti-ageing also make the borders with neighbouring fields worth drawing clearly. The three contrasts below — timing, depth, and tools — set longevity medicine apart from geriatric care, aesthetic anti-ageing, and preventive traditional-medicine paths.</p>
<h3>1. Versus geriatric care: different logic, different timing</h3>
<p>Geriatric care emphasises comprehensive assessment and multimorbidity, mainly after 60. Longevity medicine looks from about 30 onward, with health intervention at the centre — extending healthspan, not only treating diseases already present. Confusing the two delays action and can miss the better window for modulating ageing.</p>
<h3>2. Versus aesthetic anti-ageing: different depth</h3>
<p>Aesthetic anti-ageing targets the surface: laxity, wrinkles, a younger-looking skin. Longevity medicine treats inner mechanisms — viscera, immunity, deeper markers — as well as the skin.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-20-3.png" alt="Longevity medicine looks past appearance to inner function" /></figure>
<h3>3. Versus “preventive TCM” clinics: different tools</h3>
<p>Preventive traditional Chinese medicine rests on herbal medicine, acupuncture and a classical theory of preventing disease. Longevity medicine starts from molecular accounts of cell ageing and telomeres, and draws on multi-omics, regenerative medicine and senescent-cell clearance to measure and slow ageing.</p>
<h3>Conclusion</h3>
<p>What sets the field apart is treating ageing as an object in its own right — with an ability to assess and intervene on the process that neighbouring disciplines cannot simply substitute.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "53",
    slug: "53",
    section: "longevity",
    eyebrow: "Functional Medicine",
    cover: "/images/knowledge/longevity-21-1.png",
    image: "/images/knowledge/longevity-21-1.png",
    title: { "zh-HK": `功能醫學：一種新的醫學思維，讓延長壽命的同時提升健康壽命成為可能`, "zh-CN": `功能医学：一种新的医学思维，让延长寿命的同时提升健康寿命成为可能`, en: `Functional Medicine: A New Medical Mindset for Longer Healthspan` },
    excerpt: { "zh-HK": `功能醫學以「根本原因優先」整合代謝組學、微生物組、激素與氧化應激評估，從炎症、線粒體、內分泌、表觀遺傳與腸道五個機制對接長壽醫學。`, "zh-CN": `功能医学以「根本原因优先」整合代谢组学、微生物组、激素与氧化应激评估，从炎症、线粒体、内分泌、表观遗传与肠道五个机制对接长寿医学。`, en: `Root-cause first: metabolomics, the microbiome, hormones and oxidative stress — five mechanisms that connect functional medicine to healthy longevity.` },
    body: { "zh-HK": `<p>隨着全球老齡化步伐加快，如何在延長壽命的同時提升健康壽命（healthy longevity）已成為當代醫學的重要使命。長壽醫學聚焦延緩衰老、保持功能和優化健康狀態，而功能醫學則為實現這些目標提供了系統性的理論基礎與可行的干預手段。</p>
<p>在臨牀應用中，功能醫學依託代謝組學、微生物組學、荷爾蒙分析及氧化應激檢測等技術，對衰老相關功能下降進行可量化的評估與管理。</p>
<h3>一、功能醫學的基本理論框架</h3>
<p>功能醫學強調「根本原因優先」而非「症狀控制優先」的干預路徑。其核心理念在於通過整合生理、代謝、營養、環境等多維數據，揭示個體功能失衡的本質機制，並提供以生活方式和營養調節為核心的精準干預方案。</p>
<p><strong>七大生理功能網絡模型。</strong>功能醫學將人體分為七大生理功能網絡：能量代謝、解毒與防禦、激素與神經調節、消化吸收、運輸循環、結構完整性、免疫與炎症調節。</p>
<p><strong>時間軸與生命歷程視角。</strong>功能時間軸工具強調生命早期事件，在干預策略中充分考慮個體的生活背景與健康軌跡。</p>
<p><strong>個體化評估工具與功能矩陣。</strong>針對不同生理網絡的失衡制定干預方案，提高了干預的針對性與效率，也與長壽醫學的目標和理念高度契合。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-2.jpg" alt="功能醫學的系統評估框架" /></figure>
<h3>二、功能醫學在長壽醫學中的關鍵干預機制</h3>
<p><strong>炎症與免疫穩態。</strong>慢性低度炎症（inflammaging）被認為是衰老過程的核心驅動力之一，其通過長期激活 NF-κB 信號通路、NLRP3 炎症小體及促炎性細胞因子（如 IL-6、TNF-α）的上調，誘發細胞功能障礙、幹細胞耗竭及組織再生能力下降。功能醫學強調通過飲食調節、微生態平衡、抗氧化物質攝入及睡眠優化等干預手段，從源頭恢復免疫穩態。</p>
<p>臨牀上可通過檢測高敏 CRP、IL-6、TNF-α、腸道菌羣結構及營養素水平，制定精準抗炎路徑，包括抗炎飲食、植物營養素、特定益生菌組合、壓力管理和睡眠調節。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-3.png" alt="慢性炎症與免疫穩態" /></figure>
<p><strong>線粒體功能優化。</strong>功能醫學高度重視線粒體狀態評估，常通過乳酸/丙酮酸比值、有機酸譜、NAD+/NADH 比值、氧化應激標誌物等指標來評估線粒體代謝健康水平。干預策略則包括補充 NAD+ 前體（如煙酰胺核苷 NR、NMN）、輔酶 Q10、PQQ、左旋肉鹼等關鍵代謝因子，以促進氧化磷酸化、提升線粒體生物生成能力。</p>
<p>Verdin（2015）在 <em>Science</em> 的綜述中指出，NAD+ 作為核心輔酶，在調節線粒體功能、SIRT1/SIRT3 去乙酰化活性、DNA 修復及細胞穩態中發揮樞紐作用；補充 NAD+ 能夠恢復老化細胞的能量代謝能力，並對神經退行性疾病、代謝性疾病表現出改善潛力。</p>
<p><strong>荷爾蒙調節與神經內分泌平衡。</strong>功能醫學通過系統化的激素檢測（如多時點唾液或血清皮質醇曲線、性激素譜、甲狀腺功能及褪黑素水平）識別早期內分泌失衡，並制定個體化方案。生物同源性激素替代治療（BHRT）是工具之一，需在精準評估基礎上與營養支持、壓力管理及生活方式結合，並動態監測與安全性篩查。健康飲食、抗阻訓練、規律作息及正念同樣能輔助恢復神經內分泌平衡。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-4.jpg" alt="神經內分泌與代謝平衡" /></figure>
<p><strong>表觀遺傳調控。</strong>可通過營養基因組學檢測識別與疾病風險及衰老相關的表觀遺傳易感性。增加膳食葉酸、B12、膽鹼等甲基供體有助於優化 DNA 甲基化；規律有氧及阻力運動也可促進與線粒體功能、抗炎反應相關基因的活化。表觀遺傳年齡可通過甲基化時鐘評估，並作為干預效果的指標（Yusipov et al., 2024）。</p>
<p><strong>微生物組與免疫調節。</strong>隨年齡增長，腸道菌羣多樣性下降、微生態失衡，與慢性低度炎症、免疫衰老及多種年齡相關疾病密切相關（O'Toole &amp; Jeffery, 2015）。基礎策略包括：高纖維多樣化植物性飲食以增加短鏈脂肪酸；靶向益生菌與益生元；發酵食品與多酚類化合物；以及規律作息、運動與壓力管理，通過神經-免疫-微生物組軸間接改善腸道生態。</p>
<h3>結語</h3>
<p>功能醫學作為一種新的醫學思維模式，強調整體觀念和個體差異，為慢性病的管理和預防提供了新的思路。它不僅關注疾病本身，更注重人體的整體健康和平衡，從而與長壽醫學所追求的健康壽命對齊。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>随着全球老龄化步伐加快，如何在延长寿命的同时提升健康寿命（healthy longevity）已成为当代医学的重要使命。长寿医学聚焦延缓衰老、保持功能和优化健康状态，而功能医学则为实现这些目标提供了系统性的理论基础与可行的干预手段。</p>
<p>在临床应用中，功能医学依托代谢组学、微生物组学、荷尔蒙分析及氧化应激检测等技术，对衰老相关功能下降进行可量化的评估与管理。</p>
<h3>一、功能医学的基本理论框架</h3>
<p>功能医学强调「根本原因优先」而非「症状控制优先」的干预路径。其核心理念在于通过整合生理、代谢、营养、环境等多维数据，揭示个体功能失衡的本质机制，并提供以生活方式和营养调节为核心的精准干预方案。</p>
<p><strong>七大生理功能网络模型。</strong>功能医学将人体分为七大生理功能网络：能量代谢、解毒与防御、激素与神经调节、消化吸收、运输循环、结构完整性、免疫与炎症调节。</p>
<p><strong>时间轴与生命历程视角。</strong>功能时间轴工具强调生命早期事件，在干预策略中充分考虑个体的生活背景与健康轨迹。</p>
<p><strong>个体化评估工具与功能矩阵。</strong>针对不同生理网络的失衡制定干预方案，提高了干预的针对性与效率，也与长寿医学的目标和理念高度契合。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-2.jpg" alt="功能医学的系统评估框架" /></figure>
<h3>二、功能医学在长寿医学中的关键干预机制</h3>
<p><strong>炎症与免疫稳态。</strong>慢性低度炎症（inflammaging）被认为是衰老过程的核心驱动力之一，其通过长期激活 NF-κB 信号通路、NLRP3 炎症小体及促炎性细胞因子（如 IL-6、TNF-α）的上调，诱发细胞功能障碍、干细胞耗竭及组织再生能力下降。功能医学强调通过饮食调节、微生态平衡、抗氧化物质摄入及睡眠优化等干预手段，从源头恢复免疫稳态。</p>
<p>临床上可通过检测高敏 CRP、IL-6、TNF-α、肠道菌群结构及营养素水平，制定精准抗炎路径，包括抗炎饮食、植物营养素、特定益生菌组合、压力管理和睡眠调节。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-3.png" alt="慢性炎症与免疫稳态" /></figure>
<p><strong>线粒体功能优化。</strong>功能医学高度重视线粒体状态评估，常通过乳酸/丙酮酸比值、有机酸谱、NAD+/NADH 比值、氧化应激标志物等指标来评估线粒体代谢健康水平。干预策略则包括补充 NAD+ 前体（如烟酰胺核苷 NR、NMN）、辅酶 Q10、PQQ、左旋肉碱等关键代谢因子，以促进氧化磷酸化、提升线粒体生物生成能力。</p>
<p>Verdin（2015）在 <em>Science</em> 的综述中指出，NAD+ 作为核心辅酶，在调节线粒体功能、SIRT1/SIRT3 去乙酰化活性、DNA 修复及细胞稳态中发挥枢纽作用；补充 NAD+ 能够恢复老化细胞的能量代谢能力，并对神经退行性疾病、代谢性疾病表现出改善潜力。</p>
<p><strong>荷尔蒙调节与神经内分泌平衡。</strong>功能医学通过系统化的激素检测（如多时点唾液或血清皮质醇曲线、性激素谱、甲状腺功能及褪黑素水平）识别早期内分泌失衡，并制定个体化方案。生物同源性激素替代治疗（BHRT）是工具之一，需在精准评估基础上与营养支持、压力管理及生活方式结合，并动态监测与安全性筛查。健康饮食、抗阻训练、规律作息及正念同样能辅助恢复神经内分泌平衡。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-4.jpg" alt="神经内分泌与代谢平衡" /></figure>
<p><strong>表观遗传调控。</strong>可通过营养基因组学检测识别与疾病风险及衰老相关的表观遗传易感性。增加膳食叶酸、B12、胆碱等甲基供体有助于优化 DNA 甲基化；规律有氧及阻力运动也可促进与线粒体功能、抗炎反应相关基因的活化。表观遗传年龄可通过甲基化时钟评估，并作为干预效果的指标（Yusipov et al., 2024）。</p>
<p><strong>微生物组与免疫调节。</strong>随年龄增长，肠道菌群多样性下降、微生态失衡，与慢性低度炎症、免疫衰老及多种年龄相关疾病密切相关（O'Toole &amp; Jeffery, 2015）。基础策略包括：高纤维多样化植物性饮食以增加短链脂肪酸；靶向益生菌与益生元；发酵食品与多酚类化合物；以及规律作息、运动与压力管理，通过神经-免疫-微生物组轴间接改善肠道生态。</p>
<h3>结语</h3>
<p>功能医学作为一种新的医学思维模式，强调整体观念和个体差异，为慢性病的管理和预防提供了新的思路。它不仅关注疾病本身，更注重人体的整体健康和平衡，从而与长寿医学所追求的健康寿命对齐。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>As populations age, adding years is not enough — those years need function. Longevity medicine aims to slow ageing and keep capacity; functional medicine supplies a systems frame and tools that can be measured.</p>
<p>In clinic that means metabolomics, the microbiome, hormone panels and oxidative-stress markers used to quantify functional decline tied to ageing.</p>
<h3>1. The frame: root cause before symptom control</h3>
<p>Functional medicine integrates physiology, metabolism, nutrition and environment to find why a network is off, then intervenes mainly through lifestyle and nutrients. It maps seven networks: energy metabolism; detoxification and defence; hormone and neural regulation; digestion and absorption; transport and circulation; structural integrity; immune and inflammatory tone. A functional timeline takes early-life events seriously. A matrix then matches imbalance to a plan — close to what longevity medicine is trying to do.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-2.jpg" alt="A systems frame for functional assessment" /></figure>
<h3>2. Five mechanisms that matter for longevity</h3>
<p><strong>Inflammation and immune tone.</strong> Inflammaging — NF-κB, NLRP3, IL-6, TNF-α — drives cell dysfunction, stem-cell exhaustion and weaker regeneration. Diet, the microbiome, antioxidants and sleep are used to restore tone; hs-CRP, cytokines, flora and nutrient levels guide an anti-inflammatory path.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-3.png" alt="Chronic inflammation and immune homeostasis" /></figure>
<p><strong>Mitochondria.</strong> Lactate/pyruvate, organic acids, NAD+/NADH and oxidative-stress markers estimate metabolic health; NAD+ precursors (NR, NMN), CoQ10, PQQ and L-carnitine are among the levers. Verdin’s 2015 <em>Science</em> review placed NAD+ at the hub of mitochondrial function, sirtuins, DNA repair and cell homeostasis.</p>
<p><strong>Hormones and neuroendocrine balance.</strong> Multi-point cortisol, sex-hormone, thyroid and melatonin testing can catch early drift. Bioidentical HRT is one tool, used only with assessment, lifestyle support and safety checks; food, resistance training, sleep and mindfulness still carry a large share of the work.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-21-4.jpg" alt="Neuroendocrine and metabolic balance" /></figure>
<p><strong>Epigenetics.</strong> Methyl donors (folate, B12, choline) and training that turns on mitochondrial and anti-inflammatory programmes; methylation clocks as a readout (Yusipov et al., 2024).</p>
<p><strong>The microbiome.</strong> Diversity falls with age; dysbiosis tracks inflammaging and immunosenescence (O'Toole &amp; Jeffery, 2015). Fibre-rich plant diversity, targeted probiotics/prebiotics, fermented foods and polyphenols, plus sleep, movement and stress care via the neuro-immune-microbiome axis.</p>
<h3>Conclusion</h3>
<p>The mindset is whole-person and individual. That is how chronic-disease prevention and the pursuit of healthspan can sit on the same map.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "54",
    slug: "54",
    section: "longevity",
    eyebrow: "Cell",
    cover: "/images/knowledge/longevity-22-1.jpg",
    image: "/images/knowledge/longevity-22-1.jpg",
    title: { "zh-HK": `《Cell》揭秘：幹細胞耗竭是人類衰老的核心因素`, "zh-CN": `《Cell》揭秘：干细胞耗竭是人类衰老的核心因素`, en: `Cell: Stem-Cell Exhaustion Is a Core Factor in Human Ageing` },
    excerpt: { "zh-HK": `《Cell》綜述將衰老生物學標誌擴至 14 項。與細胞健康最相關的三條主線是：幹細胞耗竭、炎症性衰老、代謝障礙——幹細胞療法正對這三條同時出手。`, "zh-CN": `《Cell》综述将衰老生物学标志扩至 14 项。与细胞健康最相关的三条主线是：干细胞耗竭、炎症性衰老、代谢障碍——干细胞疗法正对这三条同时出手。`, en: `A Cell review expands the hallmarks of ageing to 14. Three of the most cell-relevant are stem-cell exhaustion, inflammaging and metabolic failure — the logic of stem-cell therapy runs through all three.` },
    body: { "zh-HK": `<p>國際頂級期刊 <em>Cell</em> 發佈綜述《From geroscience to precision geromedicine: Understanding and managing aging（從老年科學到精準老年醫學：理解和管理老齡化）》，宣佈將衰老的生物學標誌從 12 個增至 14 個。</p>
<p>這些生物學標誌，代表着人類衰老的密碼，也是前沿抗衰醫學「逆轉時光」的重要靶點。14 項靶點中眾多都與細胞健康有關，其中最關鍵的莫過於幹細胞衰竭、炎症、細胞代謝這三大核心。</p>
<h3>一、幹細胞耗竭</h3>
<p>《Cell》將「幹細胞耗竭」定義為衰老的核心病理機制。機體幹細胞羣（包括造血幹細胞、間充質幹細胞、神經幹細胞等）構成組織修復系統，隨年齡增長呈現數量級衰減（新生兒約 6×10<sup>9</sup> 個，25 歲降至 1×10<sup>9</sup> 個，50 歲低於 3×10<sup>8</sup> 個）及功能衰退（增殖潛能降低、分化能力減弱、應激反應遲鈍）。</p>
<p>幹細胞療法通過外源性補充實現：</p>
<ol>
<li>直接補充幹細胞數量</li>
<li>改善幹細胞微環境</li>
<li>激活內源性修復潛能</li>
</ol>
<p>介入邏輯，就是把這支「搶修隊」增援回編制。例如，間充質幹細胞（MSC）可參與肌肉、肝臟、皮膚等多個系統的再生修復。研究證實，MSC 可使老年模型血液系統重建效率提升約 40%，肌肉組織學指標接近年輕態。該療法通過多靶點干預，有效對抗幹細胞耗竭這一首要衰老機制。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-2.jpg" alt="幹細胞耗竭與組織修復能力下降" /></figure>
<h3>二、幹細胞療法抗炎</h3>
<p>炎症性衰老（inflammaging）是指機體在衰老過程中出現的慢性低度炎症狀態，其特徵為持續性免疫系統激活和系統性微環境紊亂。</p>
<p>間充質幹細胞在免疫調節方面具有多重作用機制：</p>
<ol>
<li>下調 Th1/Th17 等促炎性 T 細胞亞羣的活性</li>
<li>促進調節性 T 細胞（Treg）的增殖與功能</li>
<li>分泌抗炎細胞因子（IL-10、TGF-β）</li>
<li>通過外泌體介導巨噬細胞向 M2 型極化</li>
</ol>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-3.jpg" alt="間充質幹細胞的免疫調節" /></figure>
<h3>三、幹細胞調節代謝障礙</h3>
<p>衰老伴隨顯著的代謝系統衰退，表現為線粒體功能障礙、營養信號通路紊亂及能量穩態失衡。相較於年輕個體的高效代謝調控，衰老機體的代謝特徵呈現：</p>
<ol>
<li>線粒體效率下降（電子傳遞鏈活性降低、ROS 累積）</li>
<li>代謝通路失調（AMPK 抑制、mTOR 過度活化、NAD+ 耗竭）</li>
<li>系統協調性喪失（肝臟糖脂代謝異常、肌肉氧化能力減弱）</li>
</ol>
<p>幹細胞療法通過多靶點干預實現代謝重塑：外泌體介導的線粒體修復（SIRT1 上調，促進線粒體生物合成）；代謝通路重編程（AMPK/mTOR/SIRT 軸再平衡）；NAD+ 水平恢復（增強肝臟、肌肉及脂肪組織的氧化代謝能力）。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-4.png" alt="幹細胞療法與代謝重塑" /></figure>
<p><em>Cell Metabolism</em>（2025）研究報道，MSC 治療後老年模型呈現：肝臟 NAD+/NADH 比值提升約 46%；血糖及血脂譜顯著改善；運動耐力恢復至年輕對照組水平。</p>
<h3>結語</h3>
<p>幹細胞療法正實現從基礎研究到臨牀轉化的跨越，通過多靶點、多維度作用機制，展現出傳統抗衰手段難以比擬的全局性優勢。隨着證據積累和方案優化，它正在重新定義對抗衰老的醫學範式，為延長健康壽命提供一條仍在驗證中、但前景明確的干預路徑。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>国际顶级期刊 <em>Cell</em> 发布综述《From geroscience to precision geromedicine: Understanding and managing aging（从老年科学到精准老年医学：理解和管理老龄化）》，宣布将衰老的生物学标志从 12 个增至 14 个。</p>
<p>这些生物学标志，代表着人类衰老的密码，也是前沿抗衰医学「逆转时光」的重要靶点。14 项靶点中众多都与细胞健康有关，其中最关键的莫过于干细胞衰竭、炎症、细胞代谢这三大核心。</p>
<h3>一、干细胞耗竭</h3>
<p>《Cell》将「干细胞耗竭」定义为衰老的核心病理机制。机体干细胞群（包括造血干细胞、间充质干细胞、神经干细胞等）构成组织修复系统，随年龄增长呈现数量级衰减（新生儿约 6×10<sup>9</sup> 个，25 岁降至 1×10<sup>9</sup> 个，50 岁低于 3×10<sup>8</sup> 个）及功能衰退（增殖潜能降低、分化能力减弱、应激反应迟钝）。</p>
<p>干细胞疗法通过外源性补充实现：</p>
<ol>
<li>直接补充干细胞数量</li>
<li>改善干细胞微环境</li>
<li>激活内源性修复潜能</li>
</ol>
<p>介入逻辑，就是把这支「抢修队」增援回编制。例如，间充质干细胞（MSC）可参与肌肉、肝脏、皮肤等多个系统的再生修复。研究证实，MSC 可使老年模型血液系统重建效率提升约 40%，肌肉组织学指标接近年轻态。该疗法通过多靶点干预，有效对抗干细胞耗竭这一首要衰老机制。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-2.jpg" alt="干细胞耗竭与组织修复能力下降" /></figure>
<h3>二、干细胞疗法抗炎</h3>
<p>炎症性衰老（inflammaging）是指机体在衰老过程中出现的慢性低度炎症状态，其特征为持续性免疫系统激活和系统性微环境紊乱。</p>
<p>间充质干细胞在免疫调节方面具有多重作用机制：</p>
<ol>
<li>下调 Th1/Th17 等促炎性 T 细胞亚群的活性</li>
<li>促进调节性 T 细胞（Treg）的增殖与功能</li>
<li>分泌抗炎细胞因子（IL-10、TGF-β）</li>
<li>通过外泌体介导巨噬细胞向 M2 型极化</li>
</ol>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-3.jpg" alt="间充质干细胞的免疫调节" /></figure>
<h3>三、干细胞调节代谢障碍</h3>
<p>衰老伴随显著的代谢系统衰退，表现为线粒体功能障碍、营养信号通路紊乱及能量稳态失衡。相较于年轻个体的高效代谢调控，衰老机体的代谢特征呈现：</p>
<ol>
<li>线粒体效率下降（电子传递链活性降低、ROS 累积）</li>
<li>代谢通路失调（AMPK 抑制、mTOR 过度活化、NAD+ 耗竭）</li>
<li>系统协调性丧失（肝脏糖脂代谢异常、肌肉氧化能力减弱）</li>
</ol>
<p>干细胞疗法通过多靶点干预实现代谢重塑：外泌体介导的线粒体修复（SIRT1 上调，促进线粒体生物合成）；代谢通路重编程（AMPK/mTOR/SIRT 轴再平衡）；NAD+ 水平恢复（增强肝脏、肌肉及脂肪组织的氧化代谢能力）。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-4.png" alt="干细胞疗法与代谢重塑" /></figure>
<p><em>Cell Metabolism</em>（2025）研究报道，MSC 治疗后老年模型呈现：肝脏 NAD+/NADH 比值提升约 46%；血糖及血脂谱显著改善；运动耐力恢复至年轻对照组水平。</p>
<h3>结语</h3>
<p>干细胞疗法正实现从基础研究到临床转化的跨越，通过多靶点、多维度作用机制，展现出传统抗衰手段难以比拟的全局性优势。随着证据积累和方案优化，它正在重新定义对抗衰老的医学范式，为延长健康寿命提供一条仍在验证中、但前景明确的干预路径。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>A <em>Cell</em> review — “From geroscience to precision geromedicine: Understanding and managing aging” — expands the biological hallmarks of ageing from 12 to 14. Many of those hallmarks are cellular. Three sit at the centre of the cell-health story: stem-cell exhaustion, inflammation, and metabolism.</p>
<h3>1. Stem-cell exhaustion</h3>
<p><em>Cell</em> treats exhaustion of the stem-cell pool (haematopoietic, mesenchymal, neural and others) as core pathology. Numbers fall by orders of magnitude — on the order of 6×10<sup>9</sup> at birth, about 1×10<sup>9</sup> at 25, under 3×10<sup>8</sup> by 50 — while proliferative potential, differentiation and stress responses dull.</p>
<p>Exogenous cell therapy is framed as three moves: restore numbers, improve the niche, and wake endogenous repair — reinforcing the “repair crew”. MSCs can take part in muscle, liver and skin repair; in aged models, blood-system reconstitution has been reported about 40% more efficient, with muscle histology nearer a young state.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-2.jpg" alt="Stem-cell exhaustion and falling repair capacity" /></figure>
<h3>2. Inflammation</h3>
<p>Inflammaging is chronic, low-grade immune activation and a disordered systemic milieu. MSCs may down-modulate Th1/Th17, support Treg, secrete IL-10 and TGF-β, and, via exosomes, polarise macrophages toward M2.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-3.jpg" alt="Immune modulation by mesenchymal stem cells" /></figure>
<h3>3. Metabolic failure</h3>
<p>Ageing metabolism looks like weaker electron transport and more ROS; AMPK down, mTOR up, NAD+ down; liver lipid-glucose handling and muscle oxidation falling out of concert. Cell therapy is described as mitochondrial repair via exosomes (SIRT1, biogenesis), rebalancing AMPK/mTOR/SIRT, and restoring NAD+ in liver, muscle and fat.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-22-4.png" alt="Stem-cell therapy and metabolic remodelling" /></figure>
<p>A 2025 <em>Cell Metabolism</em> report described aged models after MSC treatment with about a 46% rise in hepatic NAD+/NADH, improved glucose and lipid profiles, and exercise endurance returning toward young controls.</p>
<h3>Conclusion</h3>
<p>The leap from bench to clinic is still being made. The claimed advantage is multi-target and system-wide — a path to healthspan that remains under evaluation, but is no longer a side note in geroscience.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "55",
    slug: "55",
    section: "longevity",
    eyebrow: "Recovery",
    cover: "/images/knowledge/longevity-23-1.jpg",
    image: "/images/knowledge/longevity-23-1.jpg",
    title: { "zh-HK": `總覺得恢復慢、傷口癒合慢？可能不是年齡問題`, "zh-CN": `总觉得恢复慢、伤口愈合慢？可能不是年龄问题`, en: `Slow Recovery, Slow Healing? It May Not Be Age` },
    excerpt: { "zh-HK": `四十歲後熬夜更難緩、運動痠痛更久、小傷口結痂更慢——真正決定狀態的，往往不是歲數本身，而是恢復力：睡眠深度、慢性低炎症、線粒體能量與微循環。`, "zh-CN": `四十岁后熬夜更难缓、运动酸痛更久、小伤口结痂更慢——真正决定状态的，往往不是岁数本身，而是恢复力：睡眠深度、慢性低炎症、线粒体能量与微循环。`, en: `After forty, nights cost more and cuts close slower. What often decides that is recovery capacity — deep sleep, low-grade inflammation, mitochondrial energy and microcirculation — not the birthday.` },
    body: { "zh-HK": `<p>很多人到了四十歲後都會有一種明顯感受：熬個夜要緩兩三天，運動後痠痛遲遲不退，小傷口結痂慢、掉痂更慢。我們習慣把這些歸因於「年紀大了」。但從醫學角度看，真正決定狀態的，未必是年齡，而是一個更底層的能力——恢復力。</p>
<h3>一、恢復力，才是身體真正的底盤</h3>
<p>恢復力，是身體在受到壓力或損傷後，修復組織、重建平衡的能力。年輕時系統運轉高效，我們幾乎感覺不到它的存在。一旦恢復力下降，就會出現各種「慢半拍」——疲勞拖尾、炎症不退、癒合變慢。很多中年人並沒有確診疾病，卻長期處在亞健康狀態，本質上就是恢復系統效率下降。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-2.png" alt="恢復力下降的日常信號" /></figure>
<h3>二、睡眠變淺，是較早的信號</h3>
<p>不少人會説：「我睡夠時間了，但醒來還是很累。」真正決定修復質量的，並不是睡眠時長，而是深度睡眠比例。夜間是生長激素分泌和組織修復高峯期。如果入睡困難、夜間易醒、淺睡多夢，那麼身體真正用於修復的時間就被壓縮了。久而久之，恢復慢、精力差、癒合遲緩，就成了常態。</p>
<h3>三、慢性低炎症，在悄悄消耗你</h3>
<p>壓力大、飲食油膩、久坐少動，會讓體內長期處於輕度炎症狀態。炎症本是保護機制，但長期存在會使身體停留在「應激模式」，而非「修復模式」。結果就是：修復資源被持續消耗、免疫反應效率下降、真正需要修復時反而反應遲緩。這也是為什麼很多人覺得「怎麼越來越難恢復」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-3.png" alt="慢性低度炎症消耗修復資源" /></figure>
<h3>四、能量不足：線粒體效率下降</h3>
<p>所有修復行為，都建立在能量供應之上。隨着年齡增長、氧化壓力增加，線粒體功能下降，能量供應效率降低。表現出來就是：體力下降、運動後疲勞時間延長、恢復週期拉長。這並非單純衰老，而是能量系統效率在下降。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-4.png" alt="線粒體效率與恢復週期" /></figure>
<h3>五、微循環變弱，修復自然變慢</h3>
<p>修復離不開良好的血液循環。當微循環減弱，氧氣和營養送達效率降低，代謝廢物排出延遲，局部組織供養不足，組織癒合速度自然變慢。長期久坐、缺乏運動的人往往恢復更慢，也與此有關。</p>
<h3>六、為什麼越來越多人關注「細胞修復」？</h3>
<p>近幾年，醫學研究開始從「緩解症狀」轉向「提升恢復能力」。例如圍繞外泌體與細胞修復機制的探索，核心並非替代，而是激活身體自身的修復信號網絡。真正有價值的干預，是幫助機體找回原本的修復節奏，而不是單純對抗疲勞或炎症。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-5.png" alt="從對抗症狀轉向提升修復能力" /></figure>
<h3>結語</h3>
<p>中年之後，拼的是恢復效率：二十歲拼體力，四十歲拼恢復力。同樣強度的工作，有人兩天恢復，有人一週緩不過來。差距往往不在年齡，而在恢復系統是否順暢。年齡只是時間記錄；恢復力，才是健康的底盤。當睡眠更深、炎症更低、能量更穩、循環更順，身體自然會回到它應有的修復節奏。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>很多人到了四十岁后都会有一种明显感受：熬个夜要缓两三天，运动后酸痛迟迟不退，小伤口结痂慢、掉痂更慢。我们习惯把这些归因于「年纪大了」。但从医学角度看，真正决定状态的，未必是年龄，而是一个更底层的能力——恢复力。</p>
<h3>一、恢复力，才是身体真正的底盘</h3>
<p>恢复力，是身体在受到压力或损伤后，修复组织、重建平衡的能力。年轻时系统运转高效，我们几乎感觉不到它的存在。一旦恢复力下降，就会出现各种「慢半拍」——疲劳拖尾、炎症不退、愈合变慢。很多中年人并没有确诊疾病，却长期处在亚健康状态，本质上就是恢复系统效率下降。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-2.png" alt="恢复力下降的日常信号" /></figure>
<h3>二、睡眠变浅，是较早的信号</h3>
<p>不少人会说：「我睡够时间了，但醒来还是很累。」真正决定修复质量的，并不是睡眠时长，而是深度睡眠比例。夜间是生长激素分泌和组织修复高峰期。如果入睡困难、夜间易醒、浅睡多梦，那么身体真正用于修复的时间就被压缩了。久而久之，恢复慢、精力差、愈合迟缓，就成了常态。</p>
<h3>三、慢性低炎症，在悄悄消耗你</h3>
<p>压力大、饮食油腻、久坐少动，会让体内长期处于轻度炎症状态。炎症本是保护机制，但长期存在会使身体停留在「应激模式」，而非「修复模式」。结果就是：修复资源被持续消耗、免疫反应效率下降、真正需要修复时反而反应迟缓。这也是为什么很多人觉得「怎么越来越难恢复」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-3.png" alt="慢性低度炎症消耗修复资源" /></figure>
<h3>四、能量不足：线粒体效率下降</h3>
<p>所有修复行为，都建立在能量供应之上。随着年龄增长、氧化压力增加，线粒体功能下降，能量供应效率降低。表现出来就是：体力下降、运动后疲劳时间延长、恢复周期拉长。这并非单纯衰老，而是能量系统效率在下降。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-4.png" alt="线粒体效率与恢复周期" /></figure>
<h3>五、微循环变弱，修复自然变慢</h3>
<p>修复离不开良好的血液循环。当微循环减弱，氧气和营养送达效率降低，代谢废物排出延迟，局部组织供养不足，组织愈合速度自然变慢。长期久坐、缺乏运动的人往往恢复更慢，也与此有关。</p>
<h3>六、为什么越来越多人关注「细胞修复」？</h3>
<p>近几年，医学研究开始从「缓解症状」转向「提升恢复能力」。例如围绕外泌体与细胞修复机制的探索，核心并非替代，而是激活身体自身的修复信号网络。真正有价值的干预，是帮助机体找回原本的修复节奏，而不是单纯对抗疲劳或炎症。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-5.png" alt="从对抗症状转向提升修复能力" /></figure>
<h3>结语</h3>
<p>中年之后，拼的是恢复效率：二十岁拼体力，四十岁拼恢复力。同样强度的工作，有人两天恢复，有人一周缓不过来。差距往往不在年龄，而在恢复系统是否顺畅。年龄只是时间记录；恢复力，才是健康的底盘。当睡眠更深、炎症更低、能量更稳、循环更顺，身体自然会回到它应有的修复节奏。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>After forty a pattern is familiar: a late night costs two or three days; muscle ache lingers; a small cut crusts slowly. We blame age. Clinically, what often decides the state is a more basic capacity — recovery: the ability to repair tissue and restore balance after stress or injury.</p>
<h3>1. Recovery is the chassis</h3>
<p>When young, the system is efficient enough to be invisible. When it slows, everything runs half a beat behind — fatigue that tails off late, inflammation that will not settle, healing that drags. Many people in midlife have no named disease and still live in that lag: the recovery system has lost efficiency.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-2.png" alt="Everyday signs of falling recovery" /></figure>
<h3>2. Lighter sleep is an early signal</h3>
<p>“I get the hours, I still wake tired.” Repair tracks deep-sleep share more than time in bed. Night is the peak of growth-hormone release and tissue repair. Hard sleep onset, waking, and dream-heavy light sleep compress the hours that actually rebuild. Slow recovery then becomes the default.</p>
<h3>3. Low-grade inflammation spends the budget</h3>
<p>Stress, heavy food and sitting keep a mild inflammatory tone. Inflammation is protective in bursts; as a lifestyle it locks the body in stress mode instead of repair mode. Resources are spent continuously, immune responses lose edge, and when repair is truly needed it arrives late.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-3.png" alt="Low-grade inflammation spending repair resources" /></figure>
<h3>4. Energy: mitochondria</h3>
<p>Every repair act runs on energy. Oxidative pressure and age reduce mitochondrial efficiency. The felt result is less stamina, longer post-exercise fatigue, a longer recovery cycle — not “just getting old”, but a less efficient energy system.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-4.png" alt="Mitochondrial efficiency and recovery time" /></figure>
<h3>5. Weaker microcirculation, slower close</h3>
<p>Oxygen and nutrients arrive less well; waste leaves more slowly; local tissue is under-supplied. Healing slows. People who sit long and move little recover more slowly for this reason too.</p>
<h3>6. Why “cell repair” is getting attention</h3>
<p>Research is shifting from damping symptoms to raising recovery capacity. Work on exosomes and cell-repair signalling is not about replacing the body, but about helping it find its own repair rhythm again.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-23-5.png" alt="From fighting symptoms to raising repair capacity" /></figure>
<h3>Conclusion</h3>
<p>The twenties spend stamina; the forties spend recovery. Same workload, two-day rebound versus a week — the gap is often the recovery system, not the calendar. Age records time. Recovery is the chassis. Deeper sleep, lower inflammation, steadier energy, smoother circulation: the body returns to the rhythm it already knows.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "56",
    slug: "56",
    section: "longevity",
    eyebrow: "Longevity Tech",
    cover: "/images/knowledge/longevity-24-1.png",
    image: "/images/knowledge/longevity-24-1.png",
    title: { "zh-HK": `衰老也是一種「病」，長壽科技專治它`, "zh-CN": `衰老也是一种「病」，长寿科技专治它`, en: `Ageing as a “Disease”: What Longevity Technology Is For` },
    excerpt: { "zh-HK": `斯坦福研究：大腦與免疫系統保持「年輕態」，死亡風險可大幅下降。長壽醫學把神經免疫-內分泌、腸道、環境與身體信號當作可評估、可管理的對象。`, "zh-CN": `斯坦福研究：大脑与免疫系统保持「年轻态」，死亡风险可大幅下降。长寿医学把神经免疫-内分泌、肠道、环境与身体信号当作可评估、可管理的对象。`, en: `A Stanford analysis: a “younger” brain and immune system track much lower death risk. Longevity medicine treats neuro-immune-endocrine tone, the gut, environment and early body signals as things you can measure and manage.` },
    body: { "zh-HK": `<h3>一、健康維護的「四大法則」</h3>
<p><strong>法則 1：核心系統——神經免疫、內分泌代謝的長壽中樞。</strong>大腦年輕確實與壽命更長密切相關。2025 年 7 月，美國斯坦福大學研究人員在 <em>Nature Medicine</em> 發表一項覆蓋約 4.5 萬人的研究：大腦和免疫系統保持「年輕態」，能將死亡風險大幅降低 56%。具體來説，大腦「年輕」可使死亡風險下降約 40%，免疫系統「年輕」可使死亡風險下降約 42%。</p>
<p>大腦之所以對壽命有顯著影響，是因為它是人體的「司令部」。腦幹裏藏着呼吸循環中樞；下丘腦-垂體-腎上腺軸協調壓力反應，同時調節新陳代謝、免疫、心血管與生殖等功能。腦還能通過神經內分泌和自主神經系統，調節與年齡相關的機體功能，包括晝夜節律、能量穩態、慢性炎症——這些都是和衰老密切相關的因素。它反映出身體全系統的調控能力，被稱為年輕狀態的「總控台」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-24-2.png" alt="大腦與免疫系統的「年輕態」" /></figure>
<p><strong>法則 2：次級系統——腸道是長壽的發動機。</strong>英國 <em>Nature</em> 在線發表的一項研究發現：100 歲以上的人會富集一組獨特的腸道菌羣，產生獨特的膽汁酸，有可能抑制腸道病原體生長，從而促進長壽。日本慶應義塾大學醫學部本田賢也團隊比較了 160 名百歲老人、112 名 85—89 歲老人和 47 名 21—55 歲較年輕者，發現有一類腸道微生物能通過新的生物合成途徑產生特有的次級膽汁酸，而百歲老人體內這類微生物更加豐富。</p>
<p>綜上所述，長壽老人腸道內有益菌佔優勢。飲食結構不合理會造成腸道微生態失衡。研究發現：長壽老人腸道雙歧桿菌是普通老人的約 100 倍，而普通健康老人又是患病老人的約 50 倍。因此，腸道年齡與人體健康狀態密切相關。</p>
<p><strong>法則 3：環境——最容易被忽視的衰老驅動因子。</strong>輻射、空氣污染、病原體、慢性壓力、熬夜與睡眠不足、微塑料顆粒、過多或過少的陽光暴露，都會加速細胞損傷。基於此，長壽醫學強調「防勝於治」：在影像選擇上更審慎地權衡信息量與累積損傷，而不是把檢查本身當成無代價的習慣。</p>
<p><strong>法則 4：身體信號——身體永遠會提前告訴你衰老正在發生。</strong>吃不香、睡不好、走不快、排不暢、心不靜、環境適應差……這些都不僅是「亞健康」，而是明確的衰老早期信號。長壽醫學的關鍵在於：越早識別信號，越容易干預衰老曲線。</p>
<h3>二、長壽服務如何展開</h3>
<p>一種正在形成的模式，是專業評估中心加上長期健康管理：評估衰老、制定方案、提供全生命週期監測，讓干預發生在疾病之前。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-24-3.png" alt="長壽評估與長期追蹤" /></figure>
<p><strong>1. 全面數據採集，構建個體化長壽檔案：</strong>常規體檢；深度問卷；身體與功能性檢測（包括血液生化及分子影像）；免疫、腸道、代謝、炎症、大腦等指標；衰老程度或衰老速率測算——即 Longevity Assessments / Longevity Diagnostics。</p>
<p><strong>2. 個性化長壽處方：</strong>從飲食到生活方式的系統化干預，並重點關注細胞層面的支持、腸道微生態、運動管理、生活方式指導與環境損傷控制。現代長壽醫學的核心能力在於：打造一個更年輕的功能狀態，而不僅是治療一個更老的疾病。</p>
<p><strong>3. 長期陪伴與追蹤：</strong>長壽醫學不是一次性治療，而是月度跟蹤、持續調整、一年一度的複評，科學對比「老化速度的改變」。較為理想的結果是生理年齡或衰老速率出現可測量的下降——這正是長壽醫學最直觀的價值體現。</p>
<h3>結語</h3>
<p>長壽醫學不只是延長生命，而是延長「年輕的生命」「健康的生命」。現代長壽醫學告訴我們：衰老可定義、可測量；器官組織功能可改善；全身健康狀態可以成為一項被管理的技能。如果説過去醫療的目標是「治病」，未來醫療的目標將是——讓人更持久地維持功能、更優品質地活着。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<h3>一、健康维护的「四大法则」</h3>
<p><strong>法则 1：核心系统——神经免疫、内分泌代谢的长寿中枢。</strong>大脑年轻确实与寿命更长密切相关。2025 年 7 月，美国斯坦福大学研究人员在 <em>Nature Medicine</em> 发表一项覆盖约 4.5 万人的研究：大脑和免疫系统保持「年轻态」，能将死亡风险大幅降低 56%。具体来说，大脑「年轻」可使死亡风险下降约 40%，免疫系统「年轻」可使死亡风险下降约 42%。</p>
<p>大脑之所以对寿命有显著影响，是因为它是人体的「司令部」。脑干里藏着呼吸循环中枢；下丘脑-垂体-肾上腺轴协调压力反应，同时调节新陈代谢、免疫、心血管与生殖等功能。脑还能通过神经内分泌和自主神经系统，调节与年龄相关的机体功能，包括昼夜节律、能量稳态、慢性炎症——这些都是和衰老密切相关的因素。它反映出身体全系统的调控能力，被称为年轻状态的「总控台」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-24-2.png" alt="大脑与免疫系统的「年轻态」" /></figure>
<p><strong>法则 2：次级系统——肠道是长寿的发动机。</strong>英国 <em>Nature</em> 在线发表的一项研究发现：100 岁以上的人会富集一组独特的肠道菌群，产生独特的胆汁酸，有可能抑制肠道病原体生长，从而促进长寿。日本庆应义塾大学医学部本田贤也团队比较了 160 名百岁老人、112 名 85—89 岁老人和 47 名 21—55 岁较年轻者，发现有一类肠道微生物能通过新的生物合成途径产生特有的次级胆汁酸，而百岁老人体内这类微生物更加丰富。</p>
<p>综上所述，长寿老人肠道内有益菌占优势。饮食结构不合理会造成肠道微生态失衡。研究发现：长寿老人肠道双歧杆菌是普通老人的约 100 倍，而普通健康老人又是患病老人的约 50 倍。因此，肠道年龄与人体健康状态密切相关。</p>
<p><strong>法则 3：环境——最容易被忽视的衰老驱动因子。</strong>辐射、空气污染、病原体、慢性压力、熬夜与睡眠不足、微塑料颗粒、过多或过少的阳光暴露，都会加速细胞损伤。基于此，长寿医学强调「防胜于治」：在影像选择上更审慎地权衡信息量与累积损伤，而不是把检查本身当成无代价的习惯。</p>
<p><strong>法则 4：身体信号——身体永远会提前告诉你衰老正在发生。</strong>吃不香、睡不好、走不快、排不畅、心不静、环境适应差……这些都不仅是「亚健康」，而是明确的衰老早期信号。长寿医学的关键在于：越早识别信号，越容易干预衰老曲线。</p>
<h3>二、长寿服务如何展开</h3>
<p>一种正在形成的模式，是专业评估中心加上长期健康管理：评估衰老、制定方案、提供全生命周期监测，让干预发生在疾病之前。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-24-3.png" alt="长寿评估与长期追踪" /></figure>
<p><strong>1. 全面数据采集，构建个体化长寿档案：</strong>常规体检；深度问卷；身体与功能性检测（包括血液生化及分子影像）；免疫、肠道、代谢、炎症、大脑等指标；衰老程度或衰老速率测算——即 Longevity Assessments / Longevity Diagnostics。</p>
<p><strong>2. 个性化长寿处方：</strong>从饮食到生活方式的系统化干预，并重点关注细胞层面的支持、肠道微生态、运动管理、生活方式指导与环境损伤控制。现代长寿医学的核心能力在于：打造一个更年轻的功能状态，而不仅是治疗一个更老的疾病。</p>
<p><strong>3. 长期陪伴与追踪：</strong>长寿医学不是一次性治疗，而是月度跟踪、持续调整、一年一度的复评，科学对比「老化速度的改变」。较为理想的结果是生理年龄或衰老速率出现可测量的下降——这正是长寿医学最直观的价值体现。</p>
<h3>结语</h3>
<p>长寿医学不只是延长生命，而是延长「年轻的生命」「健康的生命」。现代长寿医学告诉我们：衰老可定义、可测量；器官组织功能可改善；全身健康状态可以成为一项被管理的技能。如果说过去医疗的目标是「治病」，未来医疗的目标将是——让人更持久地维持功能、更优品质地活着。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<h3>1. Four rules of upkeep</h3>
<p><strong>Rule 1 — the core: neuro-immune and endocrine-metabolic control.</strong> A younger brain really does track longer life. In July 2025 Stanford researchers reported in <em>Nature Medicine</em> on about 45,000 people: a “young” brain and immune system together were linked to about 56% lower death risk (about 40% for the brain, about 42% for the immune system). The brain is the command post — brainstem circuits for breathing and circulation; the HPA axis for stress, metabolism, immunity, heart and reproduction; neuroendocrine and autonomic control of circadian rhythm, energy balance and chronic inflammation. It is the console of a youthful state.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-24-2.png" alt="A “young” brain and immune system" /></figure>
<p><strong>Rule 2 — the gut as engine.</strong> Work in <em>Nature</em> found centenarians enriched for a distinctive flora that makes unusual bile acids, which may restrain gut pathogens. Honda’s group at Keio compared 160 centenarians, 112 people aged 85–89 and 47 aged 21–55, and found those bile-acid pathways richer in the oldest. Beneficial species dominate in long-lived guts; poor diet unbalances them. Bifidobacteria have been reported on the order of 100-fold higher in centenarians than in ordinary older adults, and about 50-fold higher in healthy older adults than in those who are ill. Gut age tracks health.</p>
<p><strong>Rule 3 — environment, the neglected driver.</strong> Radiation, air pollution, pathogens, chronic stress, lost sleep, microplastics, too much or too little sun all add cell injury. Prevention-first longevity care weighs information against cumulative harm — including in how imaging is chosen — rather than treating every scan as free.</p>
<p><strong>Rule 4 — the body speaks early.</strong> Poor appetite, poor sleep, a slower walk, sluggish bowels, a restless mind, worse adaptation to the environment: not merely “sub-health”, but early ageing signals. The earlier they are read, the more room there is to bend the curve.</p>
<h3>2. How a longevity service runs</h3>
<p>A pattern taking shape is a specialist assessment centre plus long-term management: measure ageing, write a plan, monitor across the life cycle, act before disease.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-24-3.png" alt="Longevity assessment and long-term follow-up" /></figure>
<p><strong>1. A personal longevity file:</strong> standard check-ups, deep questionnaires, functional and molecular tests, immune/gut/metabolic/inflammatory/brain markers, and a pace-of-ageing estimate — longevity assessment and diagnostics.</p>
<p><strong>2. A personal prescription:</strong> food and lifestyle, plus cell-level support, the microbiome, training, and control of environmental injury. The point is a younger functional state, not only a later disease.</p>
<p><strong>3. Follow-up:</strong> not a single procedure but monthly tracking, adjustments, and a yearly re-score of how fast ageing is running. The clearest value is a measurable change in biological age or pace.</p>
<h3>Conclusion</h3>
<p>The aim is not only more years, but more years that still feel young and work. Ageing can be defined and measured; function can be improved; staying well can be a managed skill. If yesterday’s medicine treated disease, tomorrow’s keeps people in function, for longer, at a higher quality of life.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "57",
    slug: "57",
    section: "longevity",
    eyebrow: "Cell Therapy",
    cover: "/images/knowledge/longevity-25-4.png",
    title: { "zh-HK": `長壽醫學範式轉變：細胞療法引領健康管理新紀元`, "zh-CN": `长寿医学范式转变：细胞疗法引领健康管理新纪元`, en: `A Paradigm Shift in Longevity Medicine: Cell Therapy and a New Era of Health Management` },
    excerpt: { "zh-HK": `全球人均預期壽命持續延長，同時老齡化加速。長壽金字塔從評估、生活方式、補充劑、藥物，走到頂層的基因編輯與幹細胞——幹細胞回輸被看作補充再生細胞、改善衰弱與炎症的路徑。`, "zh-CN": `全球人均预期寿命持续延长，同时老龄化加速。长寿金字塔从评估、生活方式、补充剂、药物，走到顶层的基因编辑与干细胞——干细胞回输被看作补充再生细胞、改善衰弱与炎症的路径。`, en: `Life expectancy keeps rising worldwide even as populations age. The longevity pyramid runs from measurement and lifestyle up to gene editing and stem cells — infusion as a way to restock regenerative cells and ease frailty and inflammation.` },
    body: { "zh-HK": `<p>過去一個世紀，全球人均預期壽命顯著延長，許多地區同時經歷快速老齡化：65 歲及以上人口比例持續上升，社會對醫療、照護與長期健康的需求隨之增加。這一結構性轉變，使「如何延長健康跨度而不只是壽命長度」成為公共健康與個人規劃的共同議題。</p>
<p>老齡化壓力的另一面，是各年齡段人羣對抗衰防病和長壽的關注度上升。如今不僅老年人關注健康和長壽，越來越多中青年也開始提前規劃，提高「健康預期壽命」。</p>
<h3>一、長壽醫學：大健康行業的新引擎</h3>
<p>普華永道旗下 Strategy&amp; 的報告闡述，長壽和抗衰老療法的總價值在 2020 年為 251 億美元，到 2030 年將達 442 億美元，複合年增長率約 6.1%。考慮到衰老被認為是許多慢性疾病的根本原因，有機構在 2024 年初預測，到 2032 年，全球生物技術市場與長壽診所模式的融合發展規模可達數萬億美元量級。</p>
<p>商業資本也在押注這一方向：谷歌創始人出資建立抗衰老公司 Calico；貝索斯等人投資 Altos Labs，研究如何讓細胞狀態更接近年輕。長壽醫學，已經成為大健康行業的新引擎。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-2.png" alt="長壽醫學成為大健康新引擎" /></figure>
<h3>二、長壽醫學新範式，更側重預防和康養</h3>
<p>長壽醫學與老年醫學內涵不同：傳統老年醫學以疾病管理和治療為核心，長壽醫學側重於全生命週期健康維護，同時更重視具有生活質量的健康預期壽命。作為一門新興交叉學科，它整合生物學、營養學、運動生理學和醫學科學，核心理念是通過預防或干預，系統改善人體健康狀態，降低老年疾病發病風險。</p>
<p>有研究者提出「長壽金字塔」模型，梳理以提高健康壽命為目標的多層次干預策略。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-3.jpg" alt="以提高健康壽命為目標的長壽金字塔" /></figure>
<ul>
<li><strong>底層：早期診斷和預防</strong>——生物學年齡、衰老生物標誌物和組學分析，評估真實衰老狀態。</li>
<li><strong>第二層：生活方式</strong>——運動、飲食、睡眠。熱量限制、間歇性禁食、植物性和地中海飲食是目前較受關注的飲食模式。</li>
<li><strong>第三層：膳食補充劑</strong>——例如煙酰胺單核苷酸（NMN）和煙酰胺核糖可通過提升細胞內 NAD 水平，激活去乙酰化酶等長壽相關蛋白。</li>
<li><strong>第四層：藥物和非藥物干預</strong>——該領域研究熱門之一是二甲雙胍。加州大學聖地亞哥分校的一項研究發現：與使用磺酰脲類藥物的患者相比，服用二甲雙胍的 2 型糖尿病女性活到 90 歲及以上的幾率提升約 30%。</li>
<li><strong>頂層：前沿抗衰策略</strong>——包括基因編輯、幹細胞療法。其中幹細胞療法以促進組織再生、逆轉系統性衰老等優點，成為前瞻性潛力較大的方案之一。</li>
</ul>
<h3>三、幹細胞引領長壽醫學</h3>
<p>所有生物在個體發育後都會經歷全身生理衰退，並且這一過程通常伴隨退行性疾病。因此需要新的干預措施，在延長壽命的同時延長健康壽命。</p>
<p>幹細胞是生命的「源細胞」，擁有分化成各種組織細胞的能力，是皮膚更新、免疫修復、器官維護的核心保障。問題在於，隨着年齡增長，人體幹細胞儲庫不斷消耗，活力也會下降：剛出生時約有 60 億幹細胞；到 25 歲約 10 億；到 50 歲僅剩不到 3 億；70 歲少於 1 億，修復能力全面下滑。一旦修復趕不上損傷累積，就會出現系統性老化——皺紋、炎症、免疫力下降、認知退化，這是細胞層面的「戰損」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-4.png" alt="幹細胞數量隨年齡下降" /></figure>
<p>幹細胞療法，尤其是目前研究最熱門的間充質幹細胞回輸，正是通過「補充 + 激活」提升再生修復能力。多項研究已觀察到延緩衰老、降低炎症、調節免疫甚至改善皮膚狀態的信號。</p>
<p>2024 年發布的一份老年醫學專家共識指出：「幹細胞治療被認為是一種補充再生細胞的有效方法。臨牀試驗結果顯示，老年衰弱患者注射幹細胞後，某些症狀得到改善，炎症標誌物水平有所下降。」也就是説，衰老不再必須被寫成「不可逆」；幹細胞療法也正在改寫「衰老必然伴隨疾病」的舊劇本。</p>
<h3>結語</h3>
<p>正如美國生物學家 George Daley 所説：「如果 20 世紀是藥物治療的時代，那麼 21 世紀將是細胞治療的時代。」當我們能夠更穩定地保持再生修復能力，長壽便不只是多活幾年，而是多一段仍有力量的生命。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>过去一个世纪，全球人均预期寿命显著延长，许多地区同时经历快速老龄化：65 岁及以上人口比例持续上升，社会对医疗、照护与长期健康的需求随之增加。这一结构性转变，使「如何延长健康跨度而不只是寿命长度」成为公共健康与个人规划的共同议题。</p>
<p>老龄化压力的另一面，是各年龄段人群对抗衰防病和长寿的关注度上升。如今不仅老年人关注健康和长寿，越来越多中青年也开始提前规划，提高「健康预期寿命」。</p>
<h3>一、长寿医学：大健康行业的新引擎</h3>
<p>普华永道旗下 Strategy&amp; 的报告阐述，长寿和抗衰老疗法的总价值在 2020 年为 251 亿美元，到 2030 年将达 442 亿美元，复合年增长率约 6.1%。考虑到衰老被认为是许多慢性疾病的根本原因，有机构在 2024 年初预测，到 2032 年，全球生物技术市场与长寿诊所模式的融合发展规模可达数万亿美元量级。</p>
<p>商业资本也在押注这一方向：谷歌创始人出资建立抗衰老公司 Calico；贝索斯等人投资 Altos Labs，研究如何让细胞状态更接近年轻。长寿医学，已经成为大健康行业的新引擎。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-2.png" alt="长寿医学成为大健康新引擎" /></figure>
<h3>二、长寿医学新范式，更侧重预防和康养</h3>
<p>长寿医学与老年医学内涵不同：传统老年医学以疾病管理和治疗为核心，长寿医学侧重于全生命周期健康维护，同时更重视具有生活质量的健康预期寿命。作为一门新兴交叉学科，它整合生物学、营养学、运动生理学和医学科学，核心理念是通过预防或干预，系统改善人体健康状态，降低老年疾病发病风险。</p>
<p>有研究者提出「长寿金字塔」模型，梳理以提高健康寿命为目标的多层次干预策略。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-3.jpg" alt="以提高健康寿命为目标的长寿金字塔" /></figure>
<ul>
<li><strong>底层：早期诊断和预防</strong>——生物学年龄、衰老生物标志物和组学分析，评估真实衰老状态。</li>
<li><strong>第二层：生活方式</strong>——运动、饮食、睡眠。热量限制、间歇性禁食、植物性和地中海饮食是目前较受关注的饮食模式。</li>
<li><strong>第三层：膳食补充剂</strong>——例如烟酰胺单核苷酸（NMN）和烟酰胺核糖可通过提升细胞内 NAD 水平，激活去乙酰化酶等长寿相关蛋白。</li>
<li><strong>第四层：药物和非药物干预</strong>——该领域研究热门之一是二甲双胍。加州大学圣地亚哥分校的一项研究发现：与使用磺酰脲类药物的患者相比，服用二甲双胍的 2 型糖尿病女性活到 90 岁及以上的几率提升约 30%。</li>
<li><strong>顶层：前沿抗衰策略</strong>——包括基因编辑、干细胞疗法。其中干细胞疗法以促进组织再生、逆转系统性衰老等优点，成为前瞻性潜力较大的方案之一。</li>
</ul>
<h3>三、干细胞引领长寿医学</h3>
<p>所有生物在个体发育后都会经历全身生理衰退，并且这一过程通常伴随退行性疾病。因此需要新的干预措施，在延长寿命的同时延长健康寿命。</p>
<p>干细胞是生命的「源细胞」，拥有分化成各种组织细胞的能力，是皮肤更新、免疫修复、器官维护的核心保障。问题在于，随着年龄增长，人体干细胞储库不断消耗，活力也会下降：刚出生时约有 60 亿干细胞；到 25 岁约 10 亿；到 50 岁仅剩不到 3 亿；70 岁少于 1 亿，修复能力全面下滑。一旦修复赶不上损伤累积，就会出现系统性老化——皱纹、炎症、免疫力下降、认知退化，这是细胞层面的「战损」。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-4.png" alt="干细胞数量随年龄下降" /></figure>
<p>干细胞疗法，尤其是目前研究最热门的间充质干细胞回输，正是通过「补充 + 激活」提升再生修复能力。多项研究已观察到延缓衰老、降低炎症、调节免疫甚至改善皮肤状态的信号。</p>
<p>2024 年发布的一份老年医学专家共识指出：「干细胞治疗被认为是一种补充再生细胞的有效方法。临床试验结果显示，老年衰弱患者注射干细胞后，某些症状得到改善，炎症标志物水平有所下降。」也就是说，衰老不再必须被写成「不可逆」；干细胞疗法也正在改写「衰老必然伴随疾病」的旧剧本。</p>
<h3>结语</h3>
<p>正如美国生物学家 George Daley 所说：「如果 20 世纪是药物治疗的时代，那么 21 世纪将是细胞治疗的时代。」当我们能够更稳定地保持再生修复能力，长寿便不只是多活几年，而是多一段仍有力量的生命。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Over the past century, life expectancy has risen sharply in much of the world, and many societies are ageing fast: the share of people 65 and older keeps climbing, along with demand for care and long-term health. That structural shift makes healthspan — not just lifespan — a shared question for public health and personal planning.</p>
<p>On the other side of that pressure is rising interest in anti-ageing and longevity across age groups — not only among older adults, but increasingly among people in mid-career planning for health expectancy.</p>
<h3>1. A new engine in health</h3>
<p>Strategy&amp; (PwC) put the longevity and anti-ageing therapy market at USD 25.1 billion in 2020 and USD 44.2 billion by 2030 (about 6.1% CAGR). Because ageing sits under so many chronic diseases, some 2024 forecasts put the blend of biotech and longevity-clinic models in the trillions by 2032. Capital has followed: Calico; Altos Labs. Longevity medicine is no longer a niche slogan.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-2.png" alt="Longevity medicine as a new health-industry engine" /></figure>
<h3>2. Prevention and function, not only geriatrics</h3>
<p>Geriatric medicine manages disease in the old. Longevity medicine tries to keep function across the whole life, with quality-adjusted health expectancy as the score. Biology, nutrition, exercise physiology and clinical medicine meet in one idea: prevent or intervene so later disease is less likely.</p>
<p>A “longevity pyramid” stacks the tools:</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-3.jpg" alt="A longevity pyramid aimed at healthspan" /></figure>
<ul>
<li><strong>Base — measure early:</strong> biological age, biomarkers, omics.</li>
<li><strong>Lifestyle:</strong> training, sleep, diet — calorie restriction, time-restricted eating, plant-forward and Mediterranean patterns.</li>
<li><strong>Supplements:</strong> NMN and nicotinamide riboside as NAD-raising examples that touch sirtuin biology.</li>
<li><strong>Drugs and devices:</strong> metformin is a much-studied case. UC San Diego reported that women with type 2 diabetes on metformin had about 30% higher odds of reaching 90+ than those on sulfonylureas.</li>
<li><strong>Apex — frontier tools:</strong> gene editing and stem-cell therapy, the latter for tissue regeneration and systemic ageing.</li>
</ul>
<h3>3. Why cells sit at the top</h3>
<p>After development, every organism declines, usually with degenerative disease. Stem cells are the source stock for skin, immunity and organs. The store runs down: on the order of 6 billion at birth, about 1 billion at 25, under 300 million at 50, under 100 million at 70. When repair lags injury, the “combat losses” show as wrinkles, inflammation, weaker immunity and cognitive fade.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-25-4.png" alt="Stem-cell numbers falling with age" /></figure>
<p>MSC infusion is the currently hottest clinical story: restock plus activate. Signals include slower ageing biology, lower inflammation, immune tone and skin.</p>
<p>A 2024 geriatric expert consensus on drug interventions to delay ageing states that stem-cell treatment is considered an effective way to supplement regenerative cells, and that trials in older people with frailty have shown improvement in some symptoms and in inflammatory markers. Ageing need not be written as strictly irreversible; “ageing must mean disease” is the script being rewritten.</p>
<h3>Conclusion</h3>
<p>George Daley’s line still holds: if the twentieth century was the era of drugs, the twenty-first is the era of cells. Stable repair capacity is what turns extra years into extra years that still have strength.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "58",
    slug: "58",
    section: "longevity",
    eyebrow: "Four Medicines",
    cover: "/images/knowledge/longevity-26-1.jpg",
    image: "/images/knowledge/longevity-26-1.jpg",
    title: { "zh-HK": `臨牀醫學、功能醫學、再生醫學、長壽醫學：四大醫學的核心區別`, "zh-CN": `临床医学、功能医学、再生医学、长寿医学：四大医学的核心区别`, en: `Clinical, Functional, Regenerative and Longevity Medicine: How the Four Differ` },
    excerpt: { "zh-HK": `四者不是並列關係，而是從治病→調失衡→修損傷→延緩衰老的層層進階：關注階段、核心目標、干預邏輯都不一樣。`, "zh-CN": `四者不是并列关系，而是从治病→调失衡→修损伤→延缓衰老的层层进阶：关注阶段、核心目标、干预逻辑都不一样。`, en: `They are not four equals on one shelf. The sequence is treat disease → rebalance function → repair tissue → slow ageing — different stage, goal and logic.` },
    body: { "zh-HK": `<p>當下很多人分不清臨牀醫學、功能醫學、再生醫學、長壽醫學到底差在哪。其實四者不是並列關係，而是從治病→調失衡→修損傷→抗衰延壽的層層進階，關注階段、核心目標、干預邏輯完全不一樣。</p>
<h3>一、臨牀醫學：治已病，救火式醫療</h3>
<p>這是我們最熟悉、最基礎的現代醫學。核心只聚焦已經發生的疾病，高血壓、糖尿病、腫瘤、炎症、感冒發燒都歸它管。</p>
<p>邏輯很簡單：先檢查確診，抽血、CT、儀器排查，找出病灶；再靠藥物、手術、放療等方式，控制病情、消除症狀、挽救生命。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-2.jpg" alt="臨牀醫學聚焦已經發生的疾病" /></figure>
<p>簡單比喻：就像消防員，哪裏生病哪裏救，只負責「滅火治病」，不提前預防，也不深度調理體質。</p>
<h3>二、功能醫學：調失衡，提前檢修身體</h3>
<p>功能醫學和臨牀醫學最大的不同：不等得病，只看功能失衡。很多人體檢指標全部正常，但常年疲勞、失眠、腹脹、情緒差、代謝紊亂，達不到疾病診斷標準，卻渾身不舒服，這就是功能醫學的範疇。</p>
<p>它不盯着單一病灶，而是從整體入手，看腸道、激素、營養、壓力、代謝之間的關聯，通過飲食調整、營養干預、生活方式重構，把紊亂的身體機能調回平衡，從源頭阻止小病拖成大病。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-3.jpg" alt="功能醫學關注功能失衡而非單一病灶" /></figure>
<p>簡單比喻：像家庭維修工，身體還沒徹底壞掉，提前排查小隱患、調平衡，避免後期直接病倒。</p>
<h3>三、再生醫學：修損傷，讓組織器官再生</h3>
<p>再生醫學屬於前沿醫學，針對的是常規醫療難以復原的器質性損傷。比如脊髓損傷、心肌受損、關節軟骨磨損、大面積創面、器官功能缺損等，普通吃藥手術往往只能維持，無法復原。</p>
<p>它依靠幹細胞、組織工程、基因技術等手段，修復受損細胞與器官、甚至實現組織再生——不是單純控制症狀，而是讓受損組織儘可能恢復原有功能。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-4.jpg" alt="再生醫學針對器質性損傷做修復" /></figure>
<p>簡單比喻：專業器官修理廠，壞了的身體零件不只是修補，而是儘量再生。</p>
<h3>四、長壽醫學：抗衰老，拉長健康壽命</h3>
<p>長壽醫學不以治病、修損傷為唯一目的，而專注延緩衰老、拉長健康生存期。它研究人體衰老底層機制，從基因、免疫、代謝、細胞層面入手，通過科學干預代謝、調節免疫、細胞抗衰、優化作息飲食等方式，放慢全身老化速度，減少老年慢病扎堆發生。</p>
<p>追求的不是單純活更久，而是老得慢、少生病、晚年有質量、不被慢病纏身。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-5.jpg" alt="長壽醫學拉長健康壽命" /></figure>
<p>簡單比喻：人體專屬抗衰保養工程師，全程做精細化養護，從根源放慢衰老節奏。</p>
<h3>結語</h3>
<ul>
<li><strong>臨牀醫學</strong>：生病了去治病；</li>
<li><strong>功能醫學</strong>：沒病但不舒服，調平衡防生病；</li>
<li><strong>再生醫學</strong>：器官組織受損，做修復再生；</li>
<li><strong>長壽醫學</strong>：提前干預衰老，拉長健康壽命。</li>
</ul>
<p>四種醫學各有定位、互不替代。看懂區別，才能根據自己年齡和身體狀態，選對適合自己的健康管理方式。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>当下很多人分不清临床医学、功能医学、再生医学、长寿医学到底差在哪。其实四者不是并列关系，而是从治病→调失衡→修损伤→抗衰延寿的层层进阶，关注阶段、核心目标、干预逻辑完全不一样。</p>
<h3>一、临床医学：治已病，救火式医疗</h3>
<p>这是我们最熟悉、最基础的现代医学。核心只聚焦已经发生的疾病，高血压、糖尿病、肿瘤、炎症、感冒发烧都归它管。</p>
<p>逻辑很简单：先检查确诊，抽血、CT、仪器排查，找出病灶；再靠药物、手术、放疗等方式，控制病情、消除症状、挽救生命。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-2.jpg" alt="临床医学聚焦已经发生的疾病" /></figure>
<p>简单比喻：就像消防员，哪里生病哪里救，只负责「灭火治病」，不提前预防，也不深度调理体质。</p>
<h3>二、功能医学：调失衡，提前检修身体</h3>
<p>功能医学和临床医学最大的不同：不等得病，只看功能失衡。很多人体检指标全部正常，但常年疲劳、失眠、腹胀、情绪差、代谢紊乱，达不到疾病诊断标准，却浑身不舒服，这就是功能医学的范畴。</p>
<p>它不盯着单一病灶，而是从整体入手，看肠道、激素、营养、压力、代谢之间的关联，通过饮食调整、营养干预、生活方式重构，把紊乱的身体机能调回平衡，从源头阻止小病拖成大病。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-3.jpg" alt="功能医学关注功能失衡而非单一病灶" /></figure>
<p>简单比喻：像家庭维修工，身体还没彻底坏掉，提前排查小隐患、调平衡，避免后期直接病倒。</p>
<h3>三、再生医学：修损伤，让组织器官再生</h3>
<p>再生医学属于前沿医学，针对的是常规医疗难以复原的器质性损伤。比如脊髓损伤、心肌受损、关节软骨磨损、大面积创面、器官功能缺损等，普通吃药手术往往只能维持，无法复原。</p>
<p>它依靠干细胞、组织工程、基因技术等手段，修复受损细胞与器官、甚至实现组织再生——不是单纯控制症状，而是让受损组织尽可能恢复原有功能。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-4.jpg" alt="再生医学针对器质性损伤做修复" /></figure>
<p>简单比喻：专业器官修理厂，坏了的身体零件不只是修补，而是尽量再生。</p>
<h3>四、长寿医学：抗衰老，拉长健康寿命</h3>
<p>长寿医学不以治病、修损伤为唯一目的，而专注延缓衰老、拉长健康生存期。它研究人体衰老底层机制，从基因、免疫、代谢、细胞层面入手，通过科学干预代谢、调节免疫、细胞抗衰、优化作息饮食等方式，放慢全身老化速度，减少老年慢病扎堆发生。</p>
<p>追求的不是单纯活更久，而是老得慢、少生病、晚年有质量、不被慢病缠身。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-5.jpg" alt="长寿医学拉长健康寿命" /></figure>
<p>简单比喻：人体专属抗衰保养工程师，全程做精细化养护，从根源放慢衰老节奏。</p>
<h3>结语</h3>
<ul>
<li><strong>临床医学</strong>：生病了去治病；</li>
<li><strong>功能医学</strong>：没病但不舒服，调平衡防生病；</li>
<li><strong>再生医学</strong>：器官组织受损，做修复再生；</li>
<li><strong>长寿医学</strong>：提前干预衰老，拉长健康寿命。</li>
</ul>
<p>四种医学各有定位、互不替代。看懂区别，才能根据自己年龄和身体状态，选对适合自己的健康管理方式。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Clinical, functional, regenerative and longevity medicine are often lined up as if they were four brands of the same product. They are not. They stack: treat what has already gone wrong → rebalance function before it becomes a diagnosis → repair tissue that will not heal on its own → slow ageing so that healthspan, not only lifespan, stretches.</p>
<h3>1. Clinical medicine: putting out fires</h3>
<p>This is the medicine most people know. It focuses on disease that has already declared itself — hypertension, diabetes, cancer, infection. Diagnose (blood, imaging), then drugs, surgery or radiotherapy to control, relieve and, when needed, save a life.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-2.jpg" alt="Clinical medicine focuses on disease that has already appeared" /></figure>
<p>The image is the firefighter: where it burns, they go. Prevention and deep rebalancing of constitution are not its first job.</p>
<h3>2. Functional medicine: catching imbalance early</h3>
<p>The contrast is timing. Functional medicine does not wait for a diagnostic code. Labs can be “normal” while fatigue, insomnia, bloating, mood and metabolism are not. It looks at the gut, hormones, nutrients, stress and metabolism as a network, then uses food, nutrients and lifestyle to restore balance before a small disorder becomes a named disease.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-3.jpg" alt="Functional medicine looks at imbalance, not a single lesion" /></figure>
<p>The image is the home repairer: fix the leak before the floor collapses.</p>
<h3>3. Regenerative medicine: repairing what will not grow back</h3>
<p>This is for structural injury that pills and ordinary surgery often only maintain — spinal cord, myocardium, worn cartilage, large wounds, lost organ function. Stem cells, tissue engineering and gene tools aim to restore tissue, not merely damp symptoms.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-4.jpg" alt="Regenerative medicine targets structural injury" /></figure>
<p>The image is a parts workshop that tries to grow the part back.</p>
<h3>4. Longevity medicine: stretching years of function</h3>
<p>The aim is not only to treat disease or patch injury, but to slow ageing itself — genes, immunity, metabolism, cells — so that later life is not a pile-up of chronic illness. Living longer is not the point if those years are spent unwell.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-26-5.jpg" alt="Longevity medicine stretches healthspan" /></figure>
<p>The image is a maintenance engineer for the whole organism, slowing the clock rather than waiting for the next fire.</p>
<h3>Conclusion</h3>
<ul>
<li><strong>Clinical</strong> — treat disease when it is there.</li>
<li><strong>Functional</strong> — rebalance when you feel unwell but are not yet “ill”.</li>
<li><strong>Regenerative</strong> — restore damaged tissue.</li>
<li><strong>Longevity</strong> — intervene on ageing early, to lengthen healthspan.</li>
</ul>
<p>None replaces the others. The useful question is which layer matches your age and your state now.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "59",
    slug: "59",
    section: "longevity",
    eyebrow: "NAD+",
    cover: "/images/knowledge/longevity-27-1.png",
    image: "/images/knowledge/longevity-27-1.png",
    title: { "zh-HK": `衰老可以被「量化」了？NAD+ 下降曲線背後的生物學時鐘`, "zh-CN": `衰老可以被「量化」了？NAD+ 下降曲线背后的生物学时钟`, en: `Can Ageing Be Quantified? The Biology Behind the NAD+ Decline Story` },
    excerpt: { "zh-HK": `全血 NAD+ 並不隨年齡直線下降；真正的下降可能藏在心臟等組織里，並牽動心肌細胞的生物鐘。單一抽血數字，撐不起全部抗衰敍事。`, "zh-CN": `全血 NAD+ 并不随年龄直线下降；真正的下降可能藏在心脏等组织里，并牵动心肌细胞的生物钟。单一抽血数字，撑不起全部抗衰叙事。`, en: `Whole-blood NAD+ does not fall in a straight line with age. The drop that matters may sit in tissues such as the heart, where it uncouples the cardiomyocyte clock. One blood number cannot carry the whole anti-ageing story.` },
    body: { "zh-HK": `<p>你是否想過，有沒有一種血液檢測，能像查血糖一樣準確測出你的真實衰老程度？</p>
<p>近年來，隨着各種「抗衰」補劑的爆火，很多人開始盯着自己身體的 NAD+ 數值波動，希望用一串精準的數據來抓住青春流逝的尾巴。「NAD+ 會隨年齡下降」的説法聽起來特別具有説服力——既然是系統性地減少，那麼只要補回來，不就能延緩衰老嗎？這個邏輯聽起來似乎天衣無縫，但科學界給出的答案遠比想像的複雜。</p>
<h3>一、從「憑感覺」到「看數據」，衰老真的能測量了嗎？</h3>
<p>不管是通過面部 AI 測膚，還是抽血檢查激素水平，試圖「量化」衰老一直是人類的終極夢想。</p>
<p>在這些指標中，NAD+（煙酰胺腺嘌呤二核苷酸）無疑是過去幾年里科學界最閃耀的明星。它是細胞能量代謝和 DNA 修復的核心分子，如果缺乏它，細胞就像沒油的發動機。過去，在很多動物實驗和理論模型裏，科學家們普遍認為人體內的 NAD+ 會隨着年齡增長出現系統性下降，從而引發一系列功能衰退。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-2.png" alt="NAD+ 與細胞能量代謝" /></figure>
<p>這個假設直接催生了一個龐大的補劑市場。大家都想通過前體拉昇 NAD+，從而「逆轉」衰老。但 2026 年發表在 <em>Nature Metabolism</em> 上的一項研究，給「一管血看衰老」潑了冷水。</p>
<h3>二、抽血看衰老，結果可能出乎意料</h3>
<p>這項研究運用超高效液相色譜-高分辨質譜技術，對七個獨立人羣隊列進行了系統分析。結果是：在人體全血中，NAD+ 水平保持了相當的穩定性，並不會隨着年齡的增長而下降。運動鍛鍊、營養干預等生活方式的改變，也沒有讓它產生明顯波動。唯一能讓血液 NAD+ 明顯增加的，往往是服用特定的補劑前體——但在健康自然的狀態下，身體似乎把這個指標鎖在恆定範圍。</p>
<p>換句話説，你沒辦法通過簡單抽一管血，看到一條筆直向下的「NAD+ 衰老下跌曲線」。血液作為維持全身穩定的循環系統，很可能是機體拼命調控後的代償結果。</p>
<p>但這並不代表 NAD+ 和衰老沒有關係。真正的秘密，可能藏在你看不到的組織深處。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-3.png" alt="全血 NAD+ 與組織內 NAD+ 並不相同" /></figure>
<h3>三、藏在心臟裏的「計時齒輪」</h3>
<p>每個人體內都有一套精密的生物鐘，掌控睡眠清醒、新陳代謝以及心跳節律。這也是為什麼年輕人作息分明，而上了年紀的人晝夜節律會變得越來越模糊。</p>
<p>2026 年 4 月，德國馬克斯·普朗克心肺研究所相關工作指出：在老化的人類和動物心臟裏，NAD+ 的水平並不像血液裏那樣恆定，而是出現了明顯的下降，並且直接削弱了心肌細胞裏的內在時鐘。</p>
<p>在年輕的心臟細胞中，NAD+ 會按照時間節律規律波動，像一個精密的計時發條。隨着年齡增長，心臟組織里的 NAD+ 含量下降，細胞內上千個基因的表達節律也隨之紊亂。一旦這個時鐘失效，心臟不再清楚何時該高效供能、何時該休息修復，久而久之便容易走向心肌肥厚等改變。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-4.jpg" alt="心臟組織中的 NAD+ 與生物鐘" /></figure>
<p>這才是 NAD+ 下降曲線更殘酷也更真實的一面：血液為了讓你活下去，可能「粉飾太平」；但在某些承擔核心職能的器官裏，能量時鐘的停擺可能早已發生。</p>
<h3>四、科學抗衰，告別「盲人摸象」</h3>
<p>既然沒法簡單抽血做一刀切的判定，如何知道自己真實的「生物學時鐘」走到了哪一步？要接受一個事實：衰老本質上是一個多維度的複雜事件。科學家已將人體的衰老標誌物擴充至十餘項，包括基因組不穩定、線粒體功能障礙，甚至包含社會隔離與孤獨感。沒有任何單一分子能像沙漏一樣單獨宣告你的全部壽命。</p>
<p>NAD+ 雖然不能作為單一的年齡判官，但它在特定組織中與線粒體功能、細胞修復能力甚至生物鐘的關聯，依然是一項值得重視的健康維度。對於追求精準健康管理的人來説，不必過度焦慮那一管血的 NAD+ 數值，但保持均衡營養、合理作息，保護體內 NAD+ 的自然合成與循環通路，仍然是在穩固支撐生命節律的那枚「計時齒輪」。</p>
<h3>結語</h3>
<p>科學的進步不斷提醒我們：不要輕易神話任何一個指標，也別輕易忽視身體裏每個細胞正在運作的節律。真正的抗衰，從來不是面對某個數字的焦慮，而是迴歸對整個生命體系運行規律的尊重。</p>
<p>參考資料：</p>
<ol>
<li>McReynolds MR, et al. Age-independent stability of blood NAD+ levels in healthy adult humans. <em>Nature Metabolism</em>, 2026.</li>
<li>Eckel-Mahan K, Sassone-Corsi P. NAD+ drives circadian reprogramming in the aging heart. <em>Nature</em>, 2026.</li>
<li>López-Otín C, et al. Hallmarks of aging: An expanding universe. <em>Cell</em>, 2025.</li>
</ol>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>你是否想过，有没有一种血液检测，能像查血糖一样准确测出你的真实衰老程度？</p>
<p>近年来，随着各种「抗衰」补剂的爆火，很多人开始盯着自己身体的 NAD+ 数值波动，希望用一串精准的数据来抓住青春流逝的尾巴。「NAD+ 会随年龄下降」的说法听起来特别具有说服力——既然是系统性地减少，那么只要补回来，不就能延缓衰老吗？这个逻辑听起来似乎天衣无缝，但科学界给出的答案远比想象的复杂。</p>
<h3>一、从「凭感觉」到「看数据」，衰老真的能测量了吗？</h3>
<p>不管是通过面部 AI 测肤，还是抽血检查激素水平，试图「量化」衰老一直是人类的终极梦想。</p>
<p>在这些指标中，NAD+（烟酰胺腺嘌呤二核苷酸）无疑是过去几年里科学界最闪耀的明星。它是细胞能量代谢和 DNA 修复的核心分子，如果缺乏它，细胞就像没油的发动机。过去，在很多动物实验和理论模型里，科学家们普遍认为人体内的 NAD+ 会随着年龄增长出现系统性下降，从而引发一系列功能衰退。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-2.png" alt="NAD+ 与细胞能量代谢" /></figure>
<p>这个假设直接催生了一个庞大的补剂市场。大家都想通过前体拉升 NAD+，从而「逆转」衰老。但 2026 年发表在 <em>Nature Metabolism</em> 上的一项研究，给「一管血看衰老」泼了冷水。</p>
<h3>二、抽血看衰老，结果可能出乎意料</h3>
<p>这项研究运用超高效液相色谱-高分辨质谱技术，对七个独立人群队列进行了系统分析。结果是：在人体全血中，NAD+ 水平保持了相当的稳定性，并不会随着年龄的增长而下降。运动锻炼、营养干预等生活方式的改变，也没有让它产生明显波动。唯一能让血液 NAD+ 明显增加的，往往是服用特定的补剂前体——但在健康自然的状态下，身体似乎把这个指标锁在恒定范围。</p>
<p>换句话说，你没办法通过简单抽一管血，看到一条笔直向下的「NAD+ 衰老下跌曲线」。血液作为维持全身稳定的循环系统，很可能是机体拼命调控后的代偿结果。</p>
<p>但这并不代表 NAD+ 和衰老没有关系。真正的秘密，可能藏在你看不到的组织深处。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-3.png" alt="全血 NAD+ 与组织内 NAD+ 并不相同" /></figure>
<h3>三、藏在心脏里的「计时齿轮」</h3>
<p>每个人体内都有一套精密的生物钟，掌控睡眠清醒、新陈代谢以及心跳节律。这也是为什么年轻人作息分明，而上了年纪的人昼夜节律会变得越来越模糊。</p>
<p>2026 年 4 月，德国马克斯·普朗克心肺研究所相关工作指出：在老化的人类和动物心脏里，NAD+ 的水平并不像血液里那样恒定，而是出现了明显的下降，并且直接削弱了心肌细胞里的内在时钟。</p>
<p>在年轻的心脏细胞中，NAD+ 会按照时间节律规律波动，像一个精密的计时发条。随着年龄增长，心脏组织里的 NAD+ 含量下降，细胞内上千个基因的表达节律也随之紊乱。一旦这个时钟失效，心脏不再清楚何时该高效供能、何时该休息修复，久而久之便容易走向心肌肥厚等改变。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-4.jpg" alt="心脏组织中的 NAD+ 与生物钟" /></figure>
<p>这才是 NAD+ 下降曲线更残酷也更真实的一面：血液为了让你活下去，可能「粉饰太平」；但在某些承担核心职能的器官里，能量时钟的停摆可能早已发生。</p>
<h3>四、科学抗衰，告别「盲人摸象」</h3>
<p>既然没法简单抽血做一刀切的判定，如何知道自己真实的「生物学时钟」走到了哪一步？要接受一个事实：衰老本质上是一个多维度的复杂事件。科学家已将人体的衰老标志物扩充至十余项，包括基因组不稳定、线粒体功能障碍，甚至包含社会隔离与孤独感。没有任何单一分子能像沙漏一样单独宣告你的全部寿命。</p>
<p>NAD+ 虽然不能作为单一的年龄判官，但它在特定组织中与线粒体功能、细胞修复能力甚至生物钟的关联，依然是一项值得重视的健康维度。对于追求精准健康管理的人来说，不必过度焦虑那一管血的 NAD+ 数值，但保持均衡营养、合理作息，保护体内 NAD+ 的自然合成与循环通路，仍然是在稳固支撑生命节律的那枚「计时齿轮」。</p>
<h3>结语</h3>
<p>科学的进步不断提醒我们：不要轻易神话任何一个指标，也别轻易忽视身体里每个细胞正在运作的节律。真正的抗衰，从来不是面对某个数字的焦虑，而是回归对整个生命体系运行规律的尊重。</p>
<p>参考资料：</p>
<ol>
<li>McReynolds MR, et al. Age-independent stability of blood NAD+ levels in healthy adult humans. <em>Nature Metabolism</em>, 2026.</li>
<li>Eckel-Mahan K, Sassone-Corsi P. NAD+ drives circadian reprogramming in the aging heart. <em>Nature</em>, 2026.</li>
<li>López-Otín C, et al. Hallmarks of aging: An expanding universe. <em>Cell</em>, 2025.</li>
</ol>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Could a blood test read your true age the way glucose reads diabetes control? NAD+ supplements have made that hope feel close: if the molecule falls with age, putting it back should slow the clock. The biology is less tidy.</p>
<h3>1. Measuring ageing</h3>
<p>From AI face scores to hormone panels, quantifying ageing is an old wish. NAD+ (nicotinamide adenine dinucleotide) became a star because cells use it for energy metabolism and DNA repair — an engine without fuel. Animal work and models long assumed a systemic fall with age. That story built a large precursor market. A 2026 <em>Nature Metabolism</em> paper cooled the “one tube of blood” version.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-2.png" alt="NAD+ and cellular energy metabolism" /></figure>
<h3>2. What whole blood actually shows</h3>
<p>Using UHPLC–HRMS across seven independent cohorts, the study found circulating NAD+ remarkably stable with age. Exercise and nutrition did not move it much. What did raise blood NAD+ was taking specific precursors. In a healthy unsupplemented state the body appears to lock the circulating pool.</p>
<p>There is no straight “NAD+ ageing decline curve” in a routine blood draw. Blood is a defended compartment — the number you see may be compensation, not the tissue truth.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-3.png" alt="Blood NAD+ is not the same as tissue NAD+" /></figure>
<h3>3. The clock in the heart</h3>
<p>Circadian clocks time sleep, metabolism and the heartbeat; they blur with age. Work associated with the Max Planck Institute for Heart and Lung Research (2026) reported that in ageing human and animal hearts, NAD+ does fall, and the cardiomyocyte clock weakens with it. In young heart cells NAD+ oscillates; when the pool drops, the daily rhythm of thousands of genes unravels. The organ loses a clear “work / repair” schedule, a path toward hypertrophy and other change.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-27-4.jpg" alt="NAD+ and the clock in heart tissue" /></figure>
<p>Blood may look calm while an organ’s energy clock has already slipped.</p>
<h3>4. Stop treating one molecule as the hourglass</h3>
<p>Ageing is multi-dimensional — genomic instability, mitochondria, even social isolation sit among an expanded list of hallmarks. No single analyte declares remaining life. NAD+ is still a serious dimension in specific tissues (mitochondria, repair, clocks). Obsessing over a blood NAD+ number is a poor plan; protecting natural synthesis and circadian living is a better one.</p>
<h3>Conclusion</h3>
<p>Do not mythologise a marker, and do not ignore the rhythms cells actually run. Anti-ageing that is only anxiety about a digit is not science; respect for the system is.</p>
<p>References:</p>
<ol>
<li>McReynolds MR, et al. Age-independent stability of blood NAD+ levels in healthy adult humans. <em>Nature Metabolism</em>, 2026.</li>
<li>Eckel-Mahan K, Sassone-Corsi P. NAD+ drives circadian reprogramming in the aging heart. <em>Nature</em>, 2026.</li>
<li>López-Otín C, et al. Hallmarks of aging: An expanding universe. <em>Cell</em>, 2025.</li>
</ol>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "60",
    slug: "60",
    section: "longevity",
    eyebrow: "Healthspan",
    cover: "/images/knowledge/longevity-28-1.png",
    image: "/images/knowledge/longevity-28-1.png",
    title: { "zh-HK": `與其抗衰，不如延長「健康壽命」`, "zh-CN": `与其抗衰，不如延长「健康寿命」`, en: `Less “Anti-Ageing”, More Healthspan` },
    excerpt: { "zh-HK": `百歲老人往往更晚才患上心臟病、癌症和痴呆。科學家真正想延長的，是能夠自理的那些年——睡眠、運動、社交、飲食，以及預防醫學與長壽醫學的交叉。`, "zh-CN": `百岁老人往往更晚才患上心脏病、癌症和痴呆。科学家真正想延长的，是能够自理的那些年——睡眠、运动、社交、饮食，以及预防医学与长寿医学的交叉。`, en: `Centenarians tend to meet heart disease, cancer and dementia decades later. What scientists want to stretch is years of independence — sleep, movement, social life, food, plus preventive and longevity medicine.` },
    body: { "zh-HK": `<p>人類從出現以來就一直在尋找活得更長久、更健康的辦法。對動物的研究結果表明，延緩衰老會影響多種與年齡相關的疾病。僅一個基因改變就能讓老鼠更久地保持健康，又能讓它活得更久。</p>
<p>人顯然更復雜，但人類的數據同樣具有啓發性。活到 100 歲的人要比壽命短的人晚幾十年患上典型的衰老疾病——心臟病、癌症和痴呆症等。他們受病痛折磨的時間不會那麼久，給醫療保健系統造成的負擔也小得多。</p>
<p>研究衰老生物學的科學家希望讓更多人像那些百歲老人一樣。根據世界經濟論壇的數據，全球已有數十萬名百歲及以上的老人。然而，對衰老生物學真正感興趣的科學家，反而專注於延長他們所説的「健康壽命」，即人們可以在自理的狀態下生活的時間。</p>
<p>美國華盛頓大學生物老年病學家馬特·克貝爾萊因説：「幾乎任何人都可以從現在開始做一些事情，讓自己走上更好的健康長壽軌道。」</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-28-2.jpg" alt="健康壽命：能夠自理的那些年" /></figure>
<h3>一、生活方式非常重要</h3>
<p>就目前而言，健康的生活方式確實是科學所能提供的最好的延長壽命的方法。研究衰老、新陳代謝和營養如何影響健康和長壽的美國南加州大學老年醫學助理教授克麗絲特爾·希爾説：「每天吃漢堡和炸薯條從來沒被證明能延長健康壽命。」</p>
<p>接受採訪的研究人員對一些基本要求有相當一致的看法——獲得充足的睡眠、鍛鍊和社會交往；限制壓力；健康飲食，避免肥胖；不吸煙，也不要過量飲酒；小心駕駛。當然，每個人都是不同的，在人生的不同階段會有不同的需求。一名職業足球運動員比普通人需要更多的蛋白質；如果退役後攝入同樣數量的蛋白質、運動量卻大大減少，就會堆積不健康的脂肪。</p>
<p>許多老年科學研究人員支持「間歇性禁食」：長時間不吃東西可以模仿熱量限制所帶來的好處。沒有人做過覆蓋多年的決定性研究來一錘定音，但包括尼爾·巴爾齊萊在內的一些人熱衷於此。他遵循所謂的 16/8 方法：在 8 小時內吃完一天的所有食物，其他 16 小時不吃。巴爾齊萊説：「禁食是提高長壽和健康能力的一個非常重要的方法。」具體是否適合自己，仍需結合個體情況和醫學評估。</p>
<h3>二、預防醫學和長壽醫學</h3>
<p>長壽醫學是融合多學科交叉技術的個性化預防實踐，以長壽和衰老生物標誌物為核心，涵括老年學、精準醫學、多組學研究、預防醫學、功能醫學以及數字技術應用等，旨在通過多學科協同，實現延長健康生命年的目標。</p>
<h3>三、從慢病防控到功能醫學</h3>
<p>衰老是一個多因素自然過程，也是常見疾病的最大風險因素。異常衰老與疾病發生互為因果：衰老導致器官功能衰退，更容易罹患各種疾病；各種疾病也會加速衰老進程，進而影響治療和康復。</p>
<p>過去幾十年的研究和實踐表明，現代生物醫學技術和方法能夠主動干預衰老過程。目標不是讓長壽成為少數人的特權，而是降低因衰老而患病的死亡率和發病率，讓健康長壽有機會成為更普遍的結果。</p>
<h3>結語</h3>
<p>人類的健康壽命並非由天註定。真正值得追求的，不是口號式的「抗衰」，而是把能夠自理、少受病痛的那些年儘量拉長——從今天就能開始的生活方式，到仍在驗證中的醫學工具。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>人类从出现以来就一直在寻找活得更长久、更健康的办法。对动物的研究结果表明，延缓衰老会影响多种与年龄相关的疾病。仅一个基因改变就能让老鼠更久地保持健康，又能让它活得更久。</p>
<p>人显然更复杂，但人类的数据同样具有启发性。活到 100 岁的人要比寿命短的人晚几十年患上典型的衰老疾病——心脏病、癌症和痴呆症等。他们受病痛折磨的时间不会那么久，给医疗保健系统造成的负担也小得多。</p>
<p>研究衰老生物学的科学家希望让更多人像那些百岁老人一样。根据世界经济论坛的数据，全球已有数十万名百岁及以上的老人。然而，对衰老生物学真正感兴趣的科学家，反而专注于延长他们所说的「健康寿命」，即人们可以在自理的状态下生活的时间。</p>
<p>美国华盛顿大学生物老年病学家马特·克贝尔莱因说：「几乎任何人都可以从现在开始做一些事情，让自己走上更好的健康长寿轨道。」</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-28-2.jpg" alt="健康寿命：能够自理的那些年" /></figure>
<h3>一、生活方式非常重要</h3>
<p>就目前而言，健康的生活方式确实是科学所能提供的最好的延长寿命的方法。研究衰老、新陈代谢和营养如何影响健康和长寿的美国南加州大学老年医学助理教授克丽丝特尔·希尔说：「每天吃汉堡和炸薯条从来没被证明能延长健康寿命。」</p>
<p>接受采访的研究人员对一些基本要求有相当一致的看法——获得充足的睡眠、锻炼和社会交往；限制压力；健康饮食，避免肥胖；不吸烟，也不要过量饮酒；小心驾驶。当然，每个人都是不同的，在人生的不同阶段会有不同的需求。一名职业足球运动员比普通人需要更多的蛋白质；如果退役后摄入同样数量的蛋白质、运动量却大大减少，就会堆积不健康的脂肪。</p>
<p>许多老年科学研究人员支持「间歇性禁食」：长时间不吃东西可以模仿热量限制所带来的好处。没有人做过覆盖多年的决定性研究来一锤定音，但包括尼尔·巴尔齐莱在内的一些人热衷于此。他遵循所谓的 16/8 方法：在 8 小时内吃完一天的所有食物，其他 16 小时不吃。巴尔齐莱说：「禁食是提高长寿和健康能力的一个非常重要的方法。」具体是否适合自己，仍需结合个体情况和医学评估。</p>
<h3>二、预防医学和长寿医学</h3>
<p>长寿医学是融合多学科交叉技术的个性化预防实践，以长寿和衰老生物标志物为核心，涵括老年学、精准医学、多组学研究、预防医学、功能医学以及数字技术应用等，旨在通过多学科协同，实现延长健康生命年的目标。</p>
<h3>三、从慢病防控到功能医学</h3>
<p>衰老是一个多因素自然过程，也是常见疾病的最大风险因素。异常衰老与疾病发生互为因果：衰老导致器官功能衰退，更容易罹患各种疾病；各种疾病也会加速衰老进程，进而影响治疗和康复。</p>
<p>过去几十年的研究和实践表明，现代生物医学技术和方法能够主动干预衰老过程。目标不是让长寿成为少数人的特权，而是降低因衰老而患病的死亡率和发病率，让健康长寿有机会成为更普遍的结果。</p>
<h3>结语</h3>
<p>人类的健康寿命并非由天注定。真正值得追求的，不是口号式的「抗衰」，而是把能够自理、少受病痛的那些年尽量拉长——从今天就能开始的生活方式，到仍在验证中的医学工具。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>People have always wanted more years, and better ones. In animals, slowing ageing moves a cluster of age-related diseases. A single gene change can keep a mouse healthier for longer and also let it live longer.</p>
<p>Humans are more complicated, but the pattern still teaches. People who reach 100 tend to meet heart disease, cancer and dementia decades later than those who die younger. They spend less time unwell, and they weigh less on health systems. Scientists in ageing biology want more lives to look like that. The number of centenarians worldwide is already in the hundreds of thousands. The target that actually interests the field is healthspan: years lived able to look after yourself.</p>
<p>Matt Kaeberlein, a biogerontologist at the University of Washington, puts it plainly: almost anyone can start now on a better track.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-28-2.jpg" alt="Healthspan: years lived independently" /></figure>
<h3>1. Lifestyle still leads</h3>
<p>For now, how you live is still the best-evidenced way to add years. Crystal Hill at USC: a daily diet of burgers and fries has never been shown to lengthen healthspan. Researchers interviewed on the basics agree on the unfashionable list — sleep, exercise, social contact, less stress, a diet that avoids obesity, no smoking, modest alcohol, careful driving. Needs change across a life: a footballer needs more protein than a desk worker; the same intake after retirement, with far less training, becomes fat.</p>
<p>Many geroscientists like time-restricted eating as a mimic of calorie restriction. There is no multi-year definitive human trial that settles it. Nir Barzilai is among those who practise 16/8 — all food in eight hours, sixteen hours without. He calls fasting an important lever for longevity and health. Whether it fits you is still an individual, clinical question.</p>
<h3>2. Prevention meets longevity medicine</h3>
<p>Longevity medicine is personalised prevention built on ageing biomarkers, drawing gerontology, precision medicine, omics, functional medicine and digital tools toward more healthy life-years.</p>
<h3>3. From chronic-disease control to function</h3>
<p>Ageing is multifactorial and the largest risk factor for common disease. The arrow runs both ways: organs fail and disease arrives; disease then accelerates ageing and makes recovery harder. Decades of biomedical work show that ageing can be intervened on. The aim is not a privilege for a few, but lower mortality and morbidity from age-related disease — healthspan as a more ordinary outcome.</p>
<h3>Conclusion</h3>
<p>Healthspan is not fate. The useful project is not a slogan of “anti-ageing”, but more years of independence and fewer years of illness — starting with what you can do today, plus medical tools still under test.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "61",
    slug: "61",
    section: "longevity",
    eyebrow: "Gut–Heart",
    cover: "/images/knowledge/longevity-29-1.png",
    image: "/images/knowledge/longevity-29-1.png",
    title: { "zh-HK": `被忽視的血管「隱形殺手」：腸道菌羣失衡與心血管健康`, "zh-CN": `被忽视的血管「隐形杀手」：肠道菌群失衡与心血管健康`, en: `The Quiet Vascular Risk: Gut Dysbiosis and the Heart` },
    excerpt: { "zh-HK": `短鏈脂肪酸菌減少、TMAO 升高等線索，把腸道微生態和高血壓、動脈粥樣硬化連在一起。菌羣移植仍屬研究中的干預，不能替代規範心血管治療。`, "zh-CN": `短链脂肪酸菌减少、TMAO 升高等线索，把肠道微生态和高血压、动脉粥样硬化连在一起。菌群移植仍属研究中的干预，不能替代规范心血管治疗。`, en: `Fewer SCFA-producers and more TMAO are among the threads tying the gut to hypertension and atherosclerosis. Faecal microbiota transplant remains investigational — not a substitute for standard heart care.` },
    body: { "zh-HK": `<p>在人體這座精密的生命系統中，藏着一個極易被忽視的核心生態——腸道菌羣。數以萬億計的微生物定居於腸道，構成與人體健康深度綁定的微生態系統，也被科學界稱為人體「第二基因組」，參與代謝、免疫、炎症調節等多項機能。</p>
<p>長久以來，大眾普遍認為高血壓、心梗、動脈粥樣硬化等心血管疾病，只與遺傳、重油重鹽飲食、熬夜久坐等有關。隨着研究深入，腸道菌羣失衡被越來越多地視為推動心血管疾病發生髮展的重要幕後因素之一。大量臨牀研究提示，腸道微生態紊亂會從代謝、炎症和血管內皮等路徑動搖血管健康，成為中老年心血管問題、血管老化的隱形誘因之一。</p>
<h3>一、菌羣失衡：心血管疾病的「隱形導火索」</h3>
<p>健康的腸道菌羣是動態平衡：有益菌與有害菌彼此制約，維繫全身代謝與血管穩態。一旦失衡，有害菌佔據上風，血管損傷便可能悄然發生，不同心血管問題往往伴隨不同的菌羣異常特徵：</p>
<ul>
<li><strong>高血壓人羣</strong>：腸道內合成短鏈脂肪酸的有益菌常明顯減少。這類菌羣與調節血管舒張、平穩血壓有關；與此同時，部分與升壓相關的菌羣可能異常增殖。</li>
<li><strong>心梗與動脈硬化人羣</strong>：腸道菌羣紊亂可催生代謝產物三甲胺-N-氧化物（TMAO）。TMAO 會損傷血管內壁、加速脂質沉積，加快動脈粥樣硬化進程，與血管狹窄、血栓風險上升相關。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-29-2.png" alt="腸道菌羣通過代謝與炎症影響血管" /></figure>
<p>簡言之，失衡的腸道菌羣可能通過代謝紊亂、慢性炎症激活、血管內皮損傷等途徑持續侵蝕血管健康。這也有助於理解：為什麼有人飲食已經相對清淡、作息也還規律，卻依舊出現血管老化、血壓不穩——腸道這一層，往往被漏看。</p>
<h3>二、微生態干預：仍在驗證的前沿方向</h3>
<p>飲食、纖維、發酵食品和針對性的生活方式，仍是目前最可及、證據相對更紮實的菌羣調節方式。糞便菌羣移植（FMT）等再生醫學手段，正在心血管慢病和抗衰老相關課題中被研究：思路是重建腸道微生態，從上游切斷部分致病代謝物和炎症信號。</p>
<p>動物實驗顯示，替換為更健康的腸道菌羣后，部分高血壓模型的血壓回落、血管彈性改善。臨牀中也有頑固性高血壓、心梗康復人羣接受微生態干預後 TMAO 下降、血壓趨於平穩的報道。這些結果令人關注，但遠未到「可替代降壓藥、他汀或血運重建」的程度。精準配型、個體化方案和長期安全性，仍是行業必須回答的問題。</p>
<p>對普通人而言，更務實的順序是：先把已證實的心血管危險因素管住（血壓、血脂、血糖、吸煙、運動），再把腸道當作同一張健康網裏的一環——而不是把尚未成熟的移植技術，當成可以「逆轉血管年輕態」的捷徑。</p>
<h3>結語</h3>
<p>腸道不是與心臟無關的「消化管道」。短鏈脂肪酸、TMAO 和腸黏膜屏障，正在把微生態寫進血管醫學。長壽時代的心血管管理，值得把這一層看進去；但看進去，不等於把研究中的干預寫成已經完成的療法。</p>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>在人体这座精密的生命系统中，藏着一个极易被忽视的核心生态——肠道菌群。数以万亿计的微生物定居于肠道，构成与人体健康深度绑定的微生态系统，也被科学界称为人体「第二基因组」，参与代谢、免疫、炎症调节等多项机能。</p>
<p>长久以来，大众普遍认为高血压、心梗、动脉粥样硬化等心血管疾病，只与遗传、重油重盐饮食、熬夜久坐等有关。随着研究深入，肠道菌群失衡被越来越多地视为推动心血管疾病发生发展的重要幕后因素之一。大量临床研究提示，肠道微生态紊乱会从代谢、炎症和血管内皮等路径动摇血管健康，成为中老年心血管问题、血管老化的隐形诱因之一。</p>
<h3>一、菌群失衡：心血管疾病的「隐形导火索」</h3>
<p>健康的肠道菌群是动态平衡：有益菌与有害菌彼此制约，维系全身代谢与血管稳态。一旦失衡，有害菌占据上风，血管损伤便可能悄然发生，不同心血管问题往往伴随不同的菌群异常特征：</p>
<ul>
<li><strong>高血压人群</strong>：肠道内合成短链脂肪酸的有益菌常明显减少。这类菌群与调节血管舒张、平稳血压有关；与此同时，部分与升压相关的菌群可能异常增殖。</li>
<li><strong>心梗与动脉硬化人群</strong>：肠道菌群紊乱可催生代谢产物三甲胺-N-氧化物（TMAO）。TMAO 会损伤血管内壁、加速脂质沉积，加快动脉粥样硬化进程，与血管狭窄、血栓风险上升相关。</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-29-2.png" alt="肠道菌群通过代谢与炎症影响血管" /></figure>
<p>简言之，失衡的肠道菌群可能通过代谢紊乱、慢性炎症激活、血管内皮损伤等途径持续侵蚀血管健康。这也有助于理解：为什么有人饮食已经相对清淡、作息也还规律，却依旧出现血管老化、血压不稳——肠道这一层，往往被漏看。</p>
<h3>二、微生态干预：仍在验证的前沿方向</h3>
<p>饮食、纤维、发酵食品和针对性的生活方式，仍是目前最可及、证据相对更扎实的菌群调节方式。粪便菌群移植（FMT）等再生医学手段，正在心血管慢病和抗衰老相关课题中被研究：思路是重建肠道微生态，从上游切断部分致病代谢物和炎症信号。</p>
<p>动物实验显示，替换为更健康的肠道菌群后，部分高血压模型的血压回落、血管弹性改善。临床中也有顽固性高血压、心梗康复人群接受微生态干预后 TMAO 下降、血压趋于平稳的报道。这些结果令人关注，但远未到「可替代降压药、他汀或血运重建」的程度。精准配型、个体化方案和长期安全性，仍是行业必须回答的问题。</p>
<p>对普通人而言，更务实的顺序是：先把已证实的心血管危险因素管住（血压、血脂、血糖、吸烟、运动），再把肠道当作同一张健康网里的一环——而不是把尚未成熟的移植技术，当成可以「逆转血管年轻态」的捷径。</p>
<h3>结语</h3>
<p>肠道不是与心脏无关的「消化管道」。短链脂肪酸、TMAO 和肠黏膜屏障，正在把微生态写进血管医学。长寿时代的心血管管理，值得把这一层看进去；但看进去，不等于把研究中的干预写成已经完成的疗法。</p>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Trillions of microbes in the gut form a second genome: metabolism, immunity, inflammatory tone. For a long time, hypertension, infarction and atherosclerosis were told as a story of genes, salt, sitting and sleeplessness. Dysbiosis is now a serious extra chapter. Clinical work keeps linking a disordered gut ecology to blood vessels through metabolites, inflammation and endothelium — a quiet driver of vascular ageing in mid- and later life.</p>
<h3>1. How imbalance reaches the vessel wall</h3>
<p>A healthy flora is a balance. When it breaks:</p>
<ul>
<li><strong>Hypertension:</strong> SCFA-producing species often fall. Those acids relate to vasodilation and steadier pressure; pressor-associated taxa may rise.</li>
<li><strong>Infarction and atherosclerosis:</strong> dysbiosis can raise TMAO (trimethylamine-N-oxide), which injures endothelium, speeds lipid deposition and tracks narrower, more fragile arteries and thrombosis risk.</li>
</ul>
<figure class="article-fig"><img src="/images/knowledge/longevity-29-2.png" alt="The gut flora reaching vessels via metabolites and inflammation" /></figure>
<p>That is one reason a relatively clean diet and decent sleep do not always protect the blood pressure or the arterial wall: the gut layer was never in the picture.</p>
<h3>2. Microbial intervention: still under test</h3>
<p>Fibre, fermented foods and lifestyle remain the most reachable, better-evidenced ways to shift the flora. Faecal microbiota transplant (FMT) is being studied in chronic cardiovascular disease and in ageing research: rebuild ecology, cut some upstream metabolites and inflammatory signals. Animal hypertension models have shown lower pressure and better elasticity after a healthier flora; some clinical series in resistant hypertension or post-infarct recovery report falling TMAO and steadier readings.</p>
<p>None of that replaces antihypertensives, statins or revascularisation. Matching, personalisation and long-term safety are still open. The practical order for most people is: control the proven risks first (pressure, lipids, glucose, smoking, movement), then treat the gut as one net in the same health map — not as a shortcut that “makes vessels young again”.</p>
<h3>Conclusion</h3>
<p>The gut is not a digestion pipe with no line to the heart. SCFAs, TMAO and the mucosal barrier are writing the microbiome into vascular medicine. Longevity-era heart care should read that chapter. Reading it is not the same as declaring an investigational tool a finished therapy.</p>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
  {
    id: "62",
    slug: "62",
    section: "longevity",
    eyebrow: "SuperAgers",
    cover: "/images/knowledge/longevity-30-1.png",
    image: "/images/knowledge/longevity-30-1.png",
    title: { "zh-HK": `80 歲大腦仍能長新神經元：人類離「逆齡」還有多遠？`, "zh-CN": `80 岁大脑仍能长新神经元：人类离「逆龄」还有多远？`, en: `New Neurons at 80: How Far Is a Younger Brain?` },
    excerpt: { "zh-HK": `2026 年《Nature》單細胞研究：人類海馬體在高齡仍可生成新神經元。「超級老人」未成熟神經元約為普通同齡人的兩倍——韌性印記，而非常識裏的「腦子只會少不會多」。`, "zh-CN": `2026 年《Nature》单细胞研究：人类海马体在高龄仍可生成新神经元。「超级老人」未成熟神经元约为普通同龄人的两倍——韧性印记，而非常识里的「脑子只会少不会多」。`, en: `A 2026 Nature single-cell study: the human hippocampus can still make neurons late in life. SuperAgers carry about twice the immature neurons of typical peers — a resilience signature, not the textbook story of a brain that only loses cells.` },
    body: { "zh-HK": `<p>人老了，腦子裏的神經元會不會只減不增？這個問題看似簡單，卻讓神經科學家爭論了近一個世紀。19 世紀，神經學之父卡哈爾斷言——成年後大腦神經元只會逐漸死亡、不可再生，這一判斷被寫進了全世界的教科書。</p>
<p>2026 年 2 月 25 日，國際期刊 <em>Nature</em> 發表的一篇論文再次衝擊這一百年認知。美國伊利諾伊大學芝加哥分校的 Lazarov 團隊藉助單細胞測序技術提出：人類成年甚至 80 歲高齡的大腦，海馬體中依然能夠持續生成新神經元。</p>
<p>更令人關注的是，某些 80 多歲的「超級老人」，海馬體中的未成熟神經元數量約為同齡普通老人的 2 倍，阿爾茨海默病患者則更低。這種神經元新生機制，被看作他們抵抗衰老、維持記憶的核心線索之一。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-30-2.png" alt="高齡海馬體仍可發生神經發生" /></figure>
<h3>一、一場持續半個多世紀的「大腦之爭」</h3>
<p>上世紀 60 年代，科學家在齧齒動物大腦首次發現成年神經發生，但在很長一段時間裏無法在人類大腦中確認。放射性碳定年法發現過新神經元的痕跡，後續在靈長類中也得到證實，但質疑聲始終不減：齧齒動物不代表人類，技術手段的侷限又讓結果撲朔迷離。</p>
<p>Lazarov 團隊聯合多國科學家，動用單細胞多組學測序，分析來自不同羣體捐獻者的約 35.6 萬個海馬體細胞核，追蹤神經發生從「種子」到「成熟」的軌跡，為這場爭論提供了新的硬數據。</p>
<h3>二、「超級老人」的科學定義</h3>
<p>「超級老人」不是網絡上自稱記憶力超凡的人，而是有嚴格標準：年齡 ≥80 歲，但情景記憶測試得分與 50–60 歲中年人羣持平甚至更好。他們大腦的生物學年齡，和實際年齡之間存在着巨大的「時間差」。</p>
<p>為了準確比對，研究對象分成五類：記憶完好的年輕人；認知正常的老年人；超級老人；臨牀前輕度認知障礙者；確診阿爾茨海默病患者。正是通過這五類人羣海馬體的高精度對比，科學家才更清楚地看到——誰的大腦更年輕，為什麼。</p>
<h3>三、數字：超級老人的海馬體裏藏着什麼？</h3>
<p>研究顯示，超級老人海馬體新生神經元數量呈現明顯差異：未成熟神經元數約為普通老人的 2 倍，約為阿爾茨海默病患者的 2.5 倍；對比認知健康的年輕人，也並不落下風。新生神經元僅佔海馬體神經元的約 0.01%，哪怕微小比例的改變，都與巨大的認知功能差距掛鈎。</p>
<p>科學家將這種神經發生特徵稱為「韌性印記」（resilience signature）——大腦面對歲月侵蝕時，依然能夠補充「青年軍」：可塑性強的新生細胞快速回應新的學習需求，融入記憶網絡。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-30-3.png" alt="超級老人的神經發生韌性印記" /></figure>
<h3>四、分子層面：三大線索</h3>
<p><strong>BDNF（腦源性神經營養因子）</strong>在超級老人海馬體中表達上調，被稱作大腦的「肥料」：促進新生神經元存活、發育樹突，幫助這些細胞真正紮根。沒有 BDNF，哪怕新細胞誕生，也難以生存和連接。</p>
<p><strong>專屬分子圖譜：</strong>其神經幹細胞、神經母細胞和未成熟神經元擁有獨特的基因調控網絡，例如激活 TFDP1、GLIS1 等轉錄因子，使新生神經元更具活力和整合能力。</p>
<p><strong>支持細胞的生態系統：</strong>星形膠質細胞在超級老人大腦裏更為活躍，與 CA1 記憶區神經元緊密合作，既滋養新生細胞，又強化既有記憶迴路。而在阿爾茨海默病患者大腦中，這一支持網絡往往已經瓦解。</p>
<h3>五、對阿爾茨海默病意味着什麼？</h3>
<p>神經發生的受損，出現在確診之前很久。在臨牀前輕度認知障礙階段，染色質可及性相關基因（如 RFX 家族轉錄因子）就已經開始下調。進展到確診階段，神經發生幾乎停擺——神經母細胞和未成熟神經元大幅減少，神經幹細胞反而堆積，像流水線堵住、無法分化成熟。</p>
<p>合著者、伊利諾伊大學芝加哥分校教授 Orly Lazarov 表示：確定為什麼有些人的大腦比其他人衰老得更健康，可以幫助研究人員找到干預方法，在衰老過程中提升記憶，甚至預防阿爾茨海默病和相關痴呆。</p>
<h3>六、「逆齡」離我們還有多遠？</h3>
<p>超級老人與其他羣體的大腦差異，主要體現在 DNA「打包方式」（染色質可及性）上——而這一過程受到生活方式的巨大影響。持續的認知挑戰、體育鍛煉、豐富的社交，都有影響表觀遺傳、保持神經發生基因活躍的可能。</p>
<p>換句話説，超級老人並非必然是一套獨享基因的天選之人，而更多是他們長期保持了某種大腦健康的生活方式，最終讓海馬體中這微小的 0.01% 差異，撬動了巨大的生命質量差異。科學還不能證實每個人都能成為超級老人，但至少傳遞了一個積極信號：80 歲大腦依然擁有神經發生潛力。無論處於哪個年齡段，都有機會通過生活方式去促進這種潛力。</p>
<h3>結語</h3>
<p>我們無法讓大腦真的逆齡幾十年，但延緩、維護、持續讓大腦保持功能，不再只是科幻。</p>
<p>參考資料：</p>
<ol>
<li>Lazarov O, et al. Single-cell multi-omics reveals neurogenic resilience in human hippocampal aging and Alzheimer’s disease. <em>Nature</em>, 2026.</li>
<li>Moreno-Jiménez EP, et al. Adult hippocampal neurogenesis is abundant in neurologically healthy subjects and drops sharply in patients with Alzheimer’s disease. <em>Nature Medicine</em>, 2019.</li>
<li>Boldrini M, et al. Human hippocampal neurogenesis persists throughout aging. <em>Cell Stem Cell</em>, 2018.</li>
<li>Kempermann G, et al. Environmental enrichment, new neurons and the neurobiology of individuality. <em>Nature Reviews Neuroscience</em>, 2018.</li>
<li>National Institute on Aging. SuperAgers: Resilience and brain health in late life, 2025.</li>
</ol>
<p>醫療免責聲明：本文內容僅供長壽醫學、生命科學與基因技術相關科普參考，不構成任何診斷、治療或醫療建議。相關領域正在快速發展，本文內容整理自公開科普資料，僅供信息參考，不代表對任何療程、技術或效果的承諾。由於個體情況存在差異，實際療程、效果及潛在風險可能有所不同，具體情況請諮詢專業醫學人士，並以醫生的專業評估與建議為準。</p>`, "zh-CN": `<p>人老了，脑子里的神经元会不会只减不增？这个问题看似简单，却让神经科学家争论了近一个世纪。19 世纪，神经学之父卡哈尔断言——成年后大脑神经元只会逐渐死亡、不可再生，这一判断被写进了全世界的教科书。</p>
<p>2026 年 2 月 25 日，国际期刊 <em>Nature</em> 发表的一篇论文再次冲击这一百年认知。美国伊利诺伊大学芝加哥分校的 Lazarov 团队借助单细胞测序技术提出：人类成年甚至 80 岁高龄的大脑，海马体中依然能够持续生成新神经元。</p>
<p>更令人关注的是，某些 80 多岁的「超级老人」，海马体中的未成熟神经元数量约为同龄普通老人的 2 倍，阿尔茨海默病患者则更低。这种神经元新生机制，被看作他们抵抗衰老、维持记忆的核心线索之一。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-30-2.png" alt="高龄海马体仍可发生神经发生" /></figure>
<h3>一、一场持续半个多世纪的「大脑之争」</h3>
<p>上世纪 60 年代，科学家在啮齿动物大脑首次发现成年神经发生，但在很长一段时间里无法在人类大脑中确认。放射性碳定年法发现过新神经元的痕迹，后续在灵长类中也得到证实，但质疑声始终不减：啮齿动物不代表人类，技术手段的局限又让结果扑朔迷离。</p>
<p>Lazarov 团队联合多国科学家，动用单细胞多组学测序，分析来自不同群体捐献者的约 35.6 万个海马体细胞核，追踪神经发生从「种子」到「成熟」的轨迹，为这场争论提供了新的硬数据。</p>
<h3>二、「超级老人」的科学定义</h3>
<p>「超级老人」不是网络上自称记忆力超凡的人，而是有严格标准：年龄 ≥80 岁，但情景记忆测试得分与 50–60 岁中年人群持平甚至更好。他们大脑的生物学年龄，和实际年龄之间存在着巨大的「时间差」。</p>
<p>为了准确比对，研究对象分成五类：记忆完好的年轻人；认知正常的老年人；超级老人；临床前轻度认知障碍者；确诊阿尔茨海默病患者。正是通过这五类人群海马体的高精度对比，科学家才更清楚地看到——谁的大脑更年轻，为什么。</p>
<h3>三、数字：超级老人的海马体里藏着什么？</h3>
<p>研究显示，超级老人海马体新生神经元数量呈现明显差异：未成熟神经元数约为普通老人的 2 倍，约为阿尔茨海默病患者的 2.5 倍；对比认知健康的年轻人，也并不落下风。新生神经元仅占海马体神经元的约 0.01%，哪怕微小比例的改变，都与巨大的认知功能差距挂钩。</p>
<p>科学家将这种神经发生特征称为「韧性印记」（resilience signature）——大脑面对岁月侵蚀时，依然能够补充「青年军」：可塑性强的新生细胞快速回应新的学习需求，融入记忆网络。</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-30-3.png" alt="超级老人的神经发生韧性印记" /></figure>
<h3>四、分子层面：三大线索</h3>
<p><strong>BDNF（脑源性神经营养因子）</strong>在超级老人海马体中表达上调，被称作大脑的「肥料」：促进新生神经元存活、发育树突，帮助这些细胞真正扎根。没有 BDNF，哪怕新细胞诞生，也难以生存和连接。</p>
<p><strong>专属分子图谱：</strong>其神经干细胞、神经母细胞和未成熟神经元拥有独特的基因调控网络，例如激活 TFDP1、GLIS1 等转录因子，使新生神经元更具活力和整合能力。</p>
<p><strong>支持细胞的生态系统：</strong>星形胶质细胞在超级老人大脑里更为活跃，与 CA1 记忆区神经元紧密合作，既滋养新生细胞，又强化既有记忆回路。而在阿尔茨海默病患者大脑中，这一支持网络往往已经瓦解。</p>
<h3>五、对阿尔茨海默病意味着什么？</h3>
<p>神经发生的受损，出现在确诊之前很久。在临床前轻度认知障碍阶段，染色质可及性相关基因（如 RFX 家族转录因子）就已经开始下调。进展到确诊阶段，神经发生几乎停摆——神经母细胞和未成熟神经元大幅减少，神经干细胞反而堆积，像流水线堵住、无法分化成熟。</p>
<p>合著者、伊利诺伊大学芝加哥分校教授 Orly Lazarov 表示：确定为什么有些人的大脑比其他人衰老得更健康，可以帮助研究人员找到干预方法，在衰老过程中提升记忆，甚至预防阿尔茨海默病和相关痴呆。</p>
<h3>六、「逆龄」离我们还有多远？</h3>
<p>超级老人与其他群体的大脑差异，主要体现在 DNA「打包方式」（染色质可及性）上——而这一过程受到生活方式的巨大影响。持续的认知挑战、体育锻炼、丰富的社交，都有影响表观遗传、保持神经发生基因活跃的可能。</p>
<p>换句话说，超级老人并非必然是一套独享基因的天选之人，而更多是他们长期保持了某种大脑健康的生活方式，最终让海马体中这微小的 0.01% 差异，撬动了巨大的生命质量差异。科学还不能证实每个人都能成为超级老人，但至少传递了一个积极信号：80 岁大脑依然拥有神经发生潜力。无论处于哪个年龄段，都有机会通过生活方式去促进这种潜力。</p>
<h3>结语</h3>
<p>我们无法让大脑真的逆龄几十年，但延缓、维护、持续让大脑保持功能，不再只是科幻。</p>
<p>参考资料：</p>
<ol>
<li>Lazarov O, et al. Single-cell multi-omics reveals neurogenic resilience in human hippocampal aging and Alzheimer’s disease. <em>Nature</em>, 2026.</li>
<li>Moreno-Jiménez EP, et al. Adult hippocampal neurogenesis is abundant in neurologically healthy subjects and drops sharply in patients with Alzheimer’s disease. <em>Nature Medicine</em>, 2019.</li>
<li>Boldrini M, et al. Human hippocampal neurogenesis persists throughout aging. <em>Cell Stem Cell</em>, 2018.</li>
<li>Kempermann G, et al. Environmental enrichment, new neurons and the neurobiology of individuality. <em>Nature Reviews Neuroscience</em>, 2018.</li>
<li>National Institute on Aging. SuperAgers: Resilience and brain health in late life, 2025.</li>
</ol>
<p>医疗免责声明：本文内容仅供长寿医学、生命科学与基因技术相关科普参考，不构成任何诊断、治疗或医疗建议。相关领域正在快速发展，本文内容整理自公开科普资料，仅供信息参考，不代表对任何疗程、技术或效果的承诺。由于个体情况存在差异，实际疗程、效果及潜在风险可能有所不同，具体情况请咨询专业医学人士，并以医生的专业评估与建议为准。</p>`, en: `<p>Do ageing brains only lose neurons? Cajal said adult neurons die and do not return; textbooks followed. A <em>Nature</em> paper dated 25 February 2026, from Lazarov’s group at the University of Illinois Chicago, used single-cell sequencing to argue that the human hippocampus still makes neurons in adulthood — even at 80.</p>
<p>In some SuperAgers past 80, immature hippocampal neurons were about twice those of typical peers, and still higher against Alzheimer’s disease. Neurogenesis is a candidate for how their memory holds.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-30-2.png" alt="Hippocampal neurogenesis can persist into late life" /></figure>
<h3>1. Half a century of argument</h3>
<p>Adult neurogenesis was seen in rodents in the 1960s; human proof lagged. Radiocarbon dating left traces; primates added support; sceptics remained. Lazarov’s team, with collaborators, profiled about 356,000 hippocampal nuclei by single-cell multi-omics and traced the path from stem-like “seed” to mature neuron.</p>
<h3>2. What “SuperAger” means</h3>
<p>Not a social-media boast: age ≥80, with episodic memory at or above a 50–60-year-old’s. Biological brain age and calendar age part company. Five groups were compared: young people with intact memory; cognitively normal older adults; SuperAgers; preclinical mild cognitive impairment; Alzheimer’s disease. That grid is what made “whose brain is younger, and why” visible.</p>
<h3>3. The numbers</h3>
<p>Immature neurons in SuperAgers were about 2× typical older adults and about 2.5× Alzheimer’s; they also held their own against healthy young brains. New neurons are only about 0.01% of the hippocampal pool. A tiny fraction still tracks a large cognitive gap. Researchers call the pattern a resilience signature: a standing “youth corps” that can still join memory networks.</p>
<figure class="article-fig"><img src="/images/knowledge/longevity-30-3.png" alt="A neurogenic resilience signature in SuperAgers" /></figure>
<h3>4. Three molecular clues</h3>
<p><strong>BDNF</strong> up in SuperAger hippocampus — fertiliser for survival and dendrites. <strong>A distinct gene network</strong> in stem cells, neuroblasts and immature neurons (TFDP1, GLIS1 among them). <strong>Astrocytes</strong> more active, working with CA1 neurons to feed new cells and existing circuits — a support net that has often collapsed in Alzheimer’s.</p>
<h3>5. Alzheimer’s</h3>
<p>Neurogenesis is already damaged long before diagnosis. In preclinical MCI, chromatin-accessibility genes (including RFX-family transcription factors) fall. By diagnosis, neurogenesis has nearly stalled: neuroblasts and immature neurons scarce, stem cells piled up as if the line were jammed. Lazarov’s point: knowing why some brains age more kindly may yield ways to protect memory and, perhaps, to prevent dementia.</p>
<h3>6. How far is “younger”?</h3>
<p>Much of the SuperAger difference sits in how DNA is packed — chromatin accessibility — which lifestyle can still touch. Cognitive challenge, physical training and a rich social life are candidates for keeping neurogenic programmes on. SuperAgers need not be a genetic caste; a 0.01% hippocampal difference, kept for decades, can move quality of life. Not everyone will become one. The signal is still useful: at 80 the hippocampus has not necessarily closed the factory. Any decade is a chance to feed that potential.</p>
<h3>Conclusion</h3>
<p>We cannot rewind a brain by decades. Slowing loss and keeping function is no longer only science fiction.</p>
<p>References:</p>
<ol>
<li>Lazarov O, et al. Single-cell multi-omics reveals neurogenic resilience in human hippocampal aging and Alzheimer’s disease. <em>Nature</em>, 2026.</li>
<li>Moreno-Jiménez EP, et al. <em>Nature Medicine</em>, 2019.</li>
<li>Boldrini M, et al. <em>Cell Stem Cell</em>, 2018.</li>
<li>Kempermann G, et al. <em>Nature Reviews Neuroscience</em>, 2018.</li>
<li>National Institute on Aging. SuperAgers: Resilience and brain health in late life, 2025.</li>
</ol>
<p>Medical disclaimer: This article is for general educational reference on longevity medicine, life science and genetic technology only. It does not constitute any diagnosis, treatment or medical advice. These fields are evolving rapidly; the content is compiled from publicly available educational material for information only and does not represent a commitment to any treatment, technology or outcome. Individual circumstances vary; actual treatments, results and potential risks may differ. Please consult a qualified clinician and follow their professional assessment and recommendations.</p>` },
  },
];

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
