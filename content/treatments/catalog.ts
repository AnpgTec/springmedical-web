import type { LocalizedString } from "@/lib/i18n";

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
  {
    id: "ultra-femme",
    category: "signature",
    slug: "ultra-femme",
    title: { "zh-HK": `BTL Ultra Femme 360 私密緊緻收陰機`, "zh-CN": `BTL Ultra Femme 360 私密紧致收阴机`, en: `BTL Ultra Femme 360 Intimate Tightening` },
    summary: { "zh-HK": `以單極射頻及超聲波能刺激陰道內壁，刺激膠原蛋白自然增生，陰道壁變厚，美白外陰、緊緻修形，收緊內陰、回復濕潤及彈性，強化骨盤改善尿滲、失禁，急救或長期保養皆宜。`, "zh-CN": `以单极射频及超声波能刺激阴道内壁，刺激胶原蛋白自然增生，阴道壁变厚，美白外阴、紧致修形，收紧内阴、回复湿润及弹性，强化骨盘改善尿渗、失禁，急救或长期保养皆宜。`, en: `Monopolar RF and ultrasound stimulate the vaginal wall to thicken tissue, improve firmness, hydration and elasticity, and support pelvic function — for both short-term care and ongoing maintenance.` },
    bodyHtml: { "zh-HK": `<h3>療程介紹</h3><p>BTL Ultra Femme 360 由英國頂尖醫療儀器生產商 BTL 研發，擁有美國 FDA 及歐盟 CE 安全認證，以即棄式治療棒加上單極射頻及超聲波，作 360 度零盲點治療，熱能能傳遞到深層皮下組織層，刺激及促進骨膠原蛋白和彈力蛋白的增生，緊緻陰部之餘，更增加陰部肌肉彈性。</p><h3>療程效果</h3><p>Ultra Femme 360 以單極射頻及超聲波能刺激陰道內壁，刺激膠原蛋白自然增生，陰道壁變厚，改善陰部三大問題，美白外陰變得粉嫩﹑緊緻修形，收緊內陰﹑回復濕潤及彈性，強化骨盤改善尿滲﹑失禁，急救或長期保養皆宜。</p><h3>療程感受</h3><p>療程期間無痛無創，不會造成傷口，只有少量溫熱的感覺。完成首次療程後，膠原已開始增生及變厚，會開始感到陰道內壁感覺已與療程前不同。</p><h3>療程次數</h3><p>治療過程大約需時 8 分鐘，一次已見明顯緊緻效果，建議一年三次，之後再按年齡或情況需要保養。</p><h3>療程優點</h3><p>無創無痛地解決陰部困擾，重拾健康身體和愉快性生活。</p><h3>適合人士</h3><ul><li>計劃懷孕的女士</li><li>更年期症狀女士</li><li>產後保養的媽媽</li><li>輕熟女士</li><li>關注陰部健康的女士</li></ul>`, "zh-CN": `<h3>疗程介绍</h3><p>BTL Ultra Femme 360 由英国顶尖医疗仪器生产商 BTL 研发，拥有美国 FDA 及欧盟 CE 安全认证，以即弃式治疗棒加上单极射频及超声波，作 360 度零盲点治疗，热能能传递到深层皮下组织层，刺激及促进骨胶原蛋白和弹力蛋白的增生，紧致阴部之余，更增加阴部肌肉弹性。</p><h3>疗程效果</h3><p>Ultra Femme 360 以单极射频及超声波能刺激阴道内壁，刺激胶原蛋白自然增生，阴道壁变厚，改善阴部三大问题，美白外阴变得粉嫩﹑紧致修形，收紧内阴﹑回复湿润及弹性，强化骨盘改善尿渗﹑失禁，急救或长期保养皆宜。</p><h3>疗程感受</h3><p>疗程期间无痛无创，不会造成伤口，只有少量温热的感觉。完成首次疗程后，胶原已开始增生及变厚，会开始感到阴道内壁感觉已与疗程前不同。</p><h3>疗程次数</h3><p>治疗过程大约需时 8 分钟，一次已见明显紧致效果，建议一年三次，之后再按年龄或情况需要保养。</p><h3>疗程优点</h3><p>无创无痛地解决阴部困扰，重拾健康身体和愉快性生活。</p><h3>适合人士</h3><ul><li>计划怀孕的女士</li><li>更年期症状女士</li><li>产后保养的妈妈</li><li>轻熟女士</li><li>关注阴部健康的女士</li></ul>`, en: `<p>BTL Ultra Femme 360 is an FDA- and CE-cleared non-invasive treatment using disposable applicators with monopolar RF and ultrasound for 360° coverage. Heat reaches deep tissue to stimulate collagen and elastin, improving firmness, elasticity, lubrication and pelvic support. Sessions take about 8 minutes; often noticeable after one visit, with maintenance as advised.</p>` },
    points: [
      { "zh-HK": `FDA 認證非入侵性技術`, "zh-CN": `FDA 认证非入侵性技术`, en: `FDA-cleared non-invasive technology` },
      { "zh-HK": `刺激膠原自然增生`, "zh-CN": `刺激胶原自然增生`, en: `Stimulates natural collagen renewal` },
      { "zh-HK": `改善鬆弛、乾燥與漏尿問題`, "zh-CN": `改善松弛、干燥与漏尿问题`, en: `Improves laxity, dryness and leakage` }
    ],
    image: "/images/sig-ultra-femme.png",
    faqs: [
      { q: { "zh-HK": `Ultra Femme 360 療程需要幾次？`, "zh-CN": `Ultra Femme 360 疗程需要几次？`, en: `How many Ultra Femme 360 sessions do I need?` }, a: { "zh-HK": `視個人情況而定，可作急救或長期保養，建議先預約面診評估。`, "zh-CN": `视个人情况而定，可作急救或长期保养，建议先预约面诊评估。`, en: `It depends on your goals — from a short course to ongoing care. Book a consultation for a personalised plan.` } },
      { q: { "zh-HK": `Ultra Femme 360 有恢復期嗎？`, "zh-CN": `Ultra Femme 360 有恢复期吗？`, en: `Is there downtime after Ultra Femme 360?` }, a: { "zh-HK": `非入侵性療程，一般可維持日常作息。`, "zh-CN": `非入侵性疗程，一般可维持日常作息。`, en: `It is non-invasive; most people resume normal activities the same day.` } },
      { q: { "zh-HK": `Ultra Femme 360 療程過程會痛嗎？`, "zh-CN": `Ultra Femme 360 疗程过程会痛吗？`, en: `Does Ultra Femme 360 hurt?` }, a: { "zh-HK": `以單極射頻及超聲波進行，無痛無創，不會造成傷口，只有少量溫熱感覺。`, "zh-CN": `以单极射频及超声波进行，无痛无创，不会造成伤口，只有少量温热感觉。`, en: `Treatment is typically painless with only mild warmth; no wounds are created.` } },
      { q: { "zh-HK": `一次 Ultra Femme 360 療程需時多久？`, "zh-CN": `一次 Ultra Femme 360 疗程需时多久？`, en: `How long is one Ultra Femme 360 session?` }, a: { "zh-HK": `治療過程大約需時 8 分鐘，一次已見明顯緊緻效果。`, "zh-CN": `治疗过程大约需时 8 分钟，一次已见明显紧致效果。`, en: `About 8 minutes; firmness improvements are often noticeable after one session.` } },
      { q: { "zh-HK": `Ultra Femme 360 適合哪些女士？`, "zh-CN": `Ultra Femme 360 适合哪些女士？`, en: `Who is Ultra Femme 360 for?` }, a: { "zh-HK": `適合計劃懷孕、更年期症狀、產後保養、輕熟及關注陰部健康的女士。`, "zh-CN": `适合计划怀孕、更年期症状、产后保养、轻熟及关注阴部健康的女士。`, en: `Women planning pregnancy, perimenopausal symptoms, postpartum care, mature skin concerns, or intimate wellness.` } }
    ],
  },
  {
    id: "exilis",
    category: "signature",
    slug: "exilis",
    title: { "zh-HK": `BTL Exilis Ultra 360 眼部超頻緊緻膠原槍`, "zh-CN": `BTL Exilis Ultra 360 眼部超频紧致胶原枪`, en: `BTL Exilis Ultra 360 Eye Collagen Gun` },
    summary: { "zh-HK": `非入侵性療程，由英國 BTL 研發、歐洲原廠製造，以全球唯一 FDA 認證超聲波結合單極射頻技術，刺激眼底膠原蛋白及彈力蛋白增生，緊緻眼部肌膚、阻截眼周老化，撫平眼紋、逆轉眼齡。`, "zh-CN": `非入侵性疗程，由英国 BTL 研发、欧洲原厂制造，以全球唯一 FDA 认证超声波结合单极射频技术，刺激眼底胶原蛋白及弹力蛋白增生，紧致眼部肌肤、阻截眼周老化，抚平眼纹、逆转眼龄。`, en: `Non-invasive BTL treatment made in Europe: FDA-cleared ultrasound plus monopolar RF to stimulate collagen and elastin around the eyes, firm skin, soften lines and slow periocular ageing.` },
    bodyHtml: { "zh-HK": `<h3>療程介紹</h3><p>全新第四代 BTL EXILIS Ultra 360 為非入侵性療程，由英國 BTL 研發，歐洲原廠製造，以全球唯一 FDA 認證超聲波結合單極射頻技術，刺激眼底膠原蛋白及彈力蛋白增生，緊緻眼部肌膚，阻截眼周老化問題，加強眼皮下組織承托力撫平眼紋，回復光滑緊緻﹑逆轉眼齡。</p><h3>療程效果</h3><p>加速眼周循環﹑改善浮腫，增厚膠原保護層遮蓋血管﹑淡化黑眼圈﹑撫平眼紋，提拉眼部輪廓，回復年輕神采。</p><h3>療程感受</h3><p>BTL Exilis Ultra 360 超頻技術能滲透眼底，療程時眼周會感到熱力，溫熱感能令眼周舒緩放鬆。</p><h3>療程次數</h3><p>一次療程已見明顯緊緻提拉效果，建議在四星期內完成 4 次療程，達至更佳保養效果。</p><h3>療程優點</h3><p>全球唯一結合單極射頻及超聲波技術，能量 360 度層層滲透肌底，均勻分佈，深入眼周每吋肌膚刺激眼底膠原蛋白及彈力蛋白增生，激活兩倍膠原。舒適地解決四大眼周問題：提升﹑緊緻﹑減淡黑眼圈﹑增加眼部承托力阻截眼袋形成，非入侵性﹑無痛感﹑無恢復期而且效果持久，完成療程後可立即化妝。</p>`, "zh-CN": `<h3>疗程介绍</h3><p>全新第四代 BTL EXILIS Ultra 360 为非入侵性疗程，由英国 BTL 研发，欧洲原厂制造，以全球唯一 FDA 认证超声波结合单极射频技术，刺激眼底胶原蛋白及弹力蛋白增生，紧致眼部肌肤，阻截眼周老化问题，加强眼皮下组织承托力抚平眼纹，回复光滑紧致﹑逆转眼龄。</p><h3>疗程效果</h3><p>加速眼周循环﹑改善浮肿，增厚胶原保护层遮盖血管﹑淡化黑眼圈﹑抚平眼纹，提拉眼部轮廓，回复年轻神采。</p><h3>疗程感受</h3><p>BTL Exilis Ultra 360 超频技术能渗透眼底，疗程时眼周会感到热力，温热感能令眼周舒缓放松。</p><h3>疗程次数</h3><p>一次疗程已见明显紧致提拉效果，建议在四星期内完成 4 次疗程，达至更佳保养效果。</p><h3>疗程优点</h3><p>全球唯一结合单极射频及超声波技术，能量 360 度层层渗透肌底，均匀分布，深入眼周每吋肌肤刺激眼底胶原蛋白及弹力蛋白增生，激活两倍胶原。舒适地解决四大眼周问题：提升﹑紧致﹑减淡黑眼圈﹑增加眼部承托力阻截眼袋形成，非入侵性﹑无痛感﹑无恢复期而且效果持久，完成疗程后可立即化妆。</p>`, en: `<p>Fourth-generation Exilis Ultra 360 combines FDA-cleared ultrasound with monopolar RF to stimulate collagen and elastin under the eyes, firm skin, soften lines and support under-eye tissue. A course of four sessions within four weeks is commonly recommended; makeup can usually be applied immediately after.</p>` },
    points: [
      { "zh-HK": `FDA 認證超聲波＋單極射頻`, "zh-CN": `FDA 认证超声波＋单极射频`, en: `FDA-cleared ultrasound + monopolar RF` },
      { "zh-HK": `非入侵性、無恢復期`, "zh-CN": `非入侵性、无恢复期`, en: `Non-invasive, no downtime` },
      { "zh-HK": `針對眼周鬆弛、細紋與凹陷`, "zh-CN": `针对眼周松弛、细纹与凹陷`, en: `Targets periocular laxity, lines and hollows` }
    ],
    image: "/images/sig-exilis.png",
    faqs: [
      { q: { "zh-HK": `Exilis Ultra 360 適合哪些眼周問題？`, "zh-CN": `Exilis Ultra 360 适合哪些眼周问题？`, en: `What eye concerns does Exilis Ultra 360 address?` }, a: { "zh-HK": `針對鬆弛、細紋、黑眼圈與眼皮下垂等眼周老化問題。`, "zh-CN": `针对松弛、细纹、黑眼圈与眼皮下垂等眼周老化问题。`, en: `Laxity, fine lines, dark circles and mild under-eye droop.` } },
      { q: { "zh-HK": `Exilis Ultra 360 療程有何感受？`, "zh-CN": `Exilis Ultra 360 疗程有何感受？`, en: `How does Exilis Ultra 360 feel?` }, a: { "zh-HK": `治療過程一般只有輕微熱感，屬非入侵性。`, "zh-CN": `治疗过程一般只有轻微热感，属非入侵性。`, en: `Mild heat only; non-invasive with little discomfort.` } },
      { q: { "zh-HK": `Exilis Ultra 360 做完可以立即化妝嗎？`, "zh-CN": `Exilis Ultra 360 做完可以立即化妆吗？`, en: `Can I wear makeup after Exilis Ultra 360?` }, a: { "zh-HK": `可以。完成療程後可立即化妝，無恢復期。`, "zh-CN": `可以。完成疗程后可立即化妆，无恢复期。`, en: `Yes — typically no downtime.` } },
      { q: { "zh-HK": `建議做多少次 Exilis Ultra 360？`, "zh-CN": `建议做多少次 Exilis Ultra 360？`, en: `How many Exilis Ultra 360 sessions are recommended?` }, a: { "zh-HK": `一次療程已見明顯緊緻提拉效果，建議在四星期內完成 4 次療程，達至更佳保養效果。`, "zh-CN": `一次疗程已见明显紧致提拉效果，建议在四星期内完成 4 次疗程，达至更佳保养效果。`, en: `Results may show after one; four sessions in four weeks are often advised.` } },
      { q: { "zh-HK": `Exilis Ultra 360 療程安全嗎？`, "zh-CN": `Exilis Ultra 360 疗程安全吗？`, en: `Is Exilis Ultra 360 safe?` }, a: { "zh-HK": `獲美國 FDA 認證，由英國 BTL 研發、歐洲原廠製造，非入侵性。`, "zh-CN": `获美国 FDA 认证，由英国 BTL 研发、欧洲原厂制造，非入侵性。`, en: `FDA-cleared technology from BTL, manufactured in Europe; non-invasive.` } }
    ],
  },
  {
    id: "emtone",
    category: "signature",
    slug: "emtone",
    title: { "zh-HK": `BTL EMTONE 面部超頻緊緻膠原槍`, "zh-CN": `BTL EMTONE 面部超频紧致胶原枪`, en: `BTL EMTONE Facial Collagen Gun` },
    summary: { "zh-HK": `以全球唯一美國 FDA 認證超聲波結合單極射頻技術，提升 2 倍膠原蛋白，360˚ 環迴零盲點探頭，緊緻肌膚底層老化膠原，有效激發膠原自生，非入侵性無恢復期。`, "zh-CN": `以全球唯一美国 FDA 认证超声波结合单极射频技术，提升 2 倍胶原蛋白，360˚ 环回零盲点探头，紧致肌肤底层老化胶原，有效激发胶原自生，非入侵性无恢复期。`, en: `FDA-cleared ultrasound plus monopolar RF with a 360° probe to tighten ageing collagen, support up to 2× collagen response — non-invasive with no downtime.` },
    bodyHtml: { "zh-HK": `<p>BTL Emtone 超頻緊緻膠原槍以全球唯一美國FDA認證超聲波結合單極射頻技術，提升2倍膠原蛋白360˚環迴零盲點探頭，緊緻肌膚底層老化膠原，有效激發膠原自生，非入侵性無恢復期。</p>`, "zh-CN": `<p>BTL Emtone 超频紧致胶原枪以全球唯一美国FDA认证超声波结合单极射频技术，提升2倍胶原蛋白360˚环回零盲点探头，紧致肌肤底层老化胶原，有效激发胶原自生，非入侵性无恢复期。</p>`, en: `<p>BTL Emtone uses FDA-cleared ultrasound with monopolar RF and a 360° probe to tighten ageing collagen, support up to 2× collagen response, and lift facial contours — non-invasive with little to no downtime.</p>` },
    points: [
      { "zh-HK": `FDA 認證技術`, "zh-CN": `FDA 认证技术`, en: `FDA-cleared technology` },
      { "zh-HK": `提升 2 倍膠原蛋白`, "zh-CN": `提升 2 倍胶原蛋白`, en: `Supports up to 2× collagen response` },
      { "zh-HK": `面部緊緻、輪廓提升`, "zh-CN": `面部紧致、轮廓提升`, en: `Facial firming and contour lift` }
    ],
    image: "/images/btl-service-2.jpg",
    faqs: [
      { q: { "zh-HK": `EMTONE 效果多久可見？`, "zh-CN": `EMTONE 效果多久可见？`, en: `When will I see EMTONE results?` }, a: { "zh-HK": `膠原自生需要時間，一般多次療程後更明顯。`, "zh-CN": `胶原自生需要时间，一般多次疗程后更明显。`, en: `Collagen renewal takes time; results build over a course of sessions.` } },
      { q: { "zh-HK": `EMTONE 是否安全？`, "zh-CN": `EMTONE 是否安全？`, en: `Is EMTONE safe?` }, a: { "zh-HK": `獲 FDA 認證，非入侵性，恢復期短。`, "zh-CN": `获 FDA 认证，非入侵性，恢复期短。`, en: `FDA-cleared and non-invasive, with short recovery.` } },
      { q: { "zh-HK": `EMTONE 適用哪些部位？`, "zh-CN": `EMTONE 适用哪些部位？`, en: `Which areas does EMTONE treat?` }, a: { "zh-HK": `主要用於面部，緊緻肌膚底層老化膠原、提升輪廓。`, "zh-CN": `主要用于面部，紧致肌肤底层老化胶原、提升轮廓。`, en: `Primarily the face — firming deep collagen and lifting contours.` } },
      { q: { "zh-HK": `EMTONE 療程有何特色？`, "zh-CN": `EMTONE 疗程有何特色？`, en: `What makes EMTONE distinctive?` }, a: { "zh-HK": `以全球唯一美國 FDA 認證超聲波結合單極射頻，提升 2 倍膠原蛋白，360˚ 環迴零盲點探頭。`, "zh-CN": `以全球唯一美国 FDA 认证超声波结合单极射频，提升 2 倍胶原蛋白，360˚ 环回零盲点探头。`, en: `Ultrasound + monopolar RF with a 360° probe aimed at boosting collagen response.` } }
    ],
  },
  {
    id: "thermage",
    category: "signature",
    slug: "thermage",
    title: { "zh-HK": `Thermage FLX 提拉緊緻射頻`, "zh-CN": `Thermage FLX 提拉紧致射频`, en: `Thermage FLX Radiofrequency Tightening` },
    summary: { "zh-HK": `獲美國 FDA 認可的非入侵性緊膚療程，3D 容積式加熱，刺激膠原蛋白漸進式增生，改善肌膚鬆弛、優化輪廓線條。`, "zh-CN": `获美国 FDA 认可的非入侵性紧肤疗程，3D 容积式加热，刺激胶原蛋白渐进式增生，改善肌肤松弛、优化轮廓线条。`, en: `FDA-cleared non-invasive tightening with 3D volumetric heating to stimulate gradual collagen renewal, improve laxity and refine contours.` },
    bodyHtml: { "zh-HK": `<p>Thermage® FLX 為獲美國 FDA 認可的非入侵性緊膚療程。採用專利單極射頻技術，結合 AccuREP™ 實時調控系統，將熱能以 3D 容積式傳遞至真皮層，有助刺激膠原蛋白漸進式增生，改善肌膚鬆弛及優化輪廓線條。療程無須開刀，一般無須特定復原期。</p>
<h3>療程原理：3D 容積式立體加熱</h3>
<p>結合單極射頻與智能微調技術，由外到內將能量均勻傳遞至真皮層及皮下組織。</p>
<p><strong>AccuREP™ 實時調控技術</strong>：第五代獨有技術，能於每次發射能量前測量局部皮膚阻抗，實時微調每發射頻能量，確保能量均勻發送。</p>
<p><strong>3D 容積式加熱機制</strong>：射頻能量以立體大面積方式，深入加熱富含膠原蛋白的組織，有助刺激膠原蛋白收縮及啟動後續的重組機制。</p>
<p><strong>全方位震動與舒緩冷媒</strong>：探頭具備舒適脈衝技術及冷媒噴灑功能，在傳遞熱能的同時保護表皮層，減低療程中的不適感。</p>
<h3>專屬部位療程探頭</h3>
<p>配備多種專屬智能探頭，醫生會根據客人的膚質狀況與輪廓需求，選用合適的探頭進行療程。</p>
<p><strong>面部與下顎線（紫鑽探頭）</strong>：第五代標誌性紫鑽探頭，覆蓋面積比上一代提升，有助更均勻地處理面頰鬆弛及下顎輪廓問題。</p>
<ul><li>有助縮減療程時間</li><li>改善蘋果肌及法令紋外觀</li><li>優化下顎輪廓線條感</li></ul>
<p><strong>眼周脆弱肌膚（碧眼探頭）</strong>：專為眼部較薄弱的肌膚設計，加熱深度較淺，有助溫和地收緊上下眼瞼皮膚。獲 FDA 認可適用於上下眼瞼。</p>
<ul><li>獲 FDA 認可適用於上下眼瞼</li><li>協助減淡眼周細紋外觀</li><li>改善眼部肌膚鬆弛</li></ul>
<p><strong>身體大範圍面積（大玉璽探頭）</strong>：探頭表面積最大，適用於處理身體較大範圍的鬆弛肌膚，如腹部或手臂等位置。</p>
<ul><li>改善腹部皮膚鬆弛</li><li>緊緻手臂（Bye-bye 肉）及大腿線條</li><li>有助平滑身體肌膚表面紋理</li></ul>
<h3>五大功效</h3>
<ul><li>即時緊膚拉提：改善法令紋、雙下巴及下顎鬆弛</li><li>刺激膠原蛋白增生</li><li>改善皺紋及粗糙膚質</li><li>緊緻眼周肌膚（唯一獲 FDA 認可應用於上眼瞼）</li><li>改善頸部、下顎線條及身體皮膚鬆弛</li></ul>
<h3>療程頻率與注意事項</h3>
<ul><li>效果可維持約 12 個月，建議每隔 9 個月至 1 年再做一次</li><li>非入侵性，無須恢復期，可即時正常活動</li><li>術後加強保濕與防曬，7 日內暫停含酸類、去角質或美白活性成分的產品</li></ul>`, "zh-CN": `<p>Thermage® FLX 为获美国 FDA 认可的非入侵性紧肤疗程。采用专利单极射频技术，结合 AccuREP™ 实时调控系统，将热能以 3D 容积式传递至真皮层，有助刺激胶原蛋白渐进式增生，改善肌肤松弛及优化轮廓线条。疗程无须开刀，一般无须特定复原期。</p>
<h3>疗程原理：3D 容积式立体加热</h3>
<p>结合单极射频与智能微调技术，由外到内将能量均匀传递至真皮层及皮下组织。</p>
<p><strong>AccuREP™ 实时调控技术</strong>：第五代独有技术，能于每次发射能量前测量局部皮肤阻抗，实时微调每发射频能量，确保能量均匀发送。</p>
<p><strong>3D 容积式加热机制</strong>：射频能量以立体大面积方式，深入加热富含胶原蛋白的组织，有助刺激胶原蛋白收缩及启动后续的重组机制。</p>
<p><strong>全方位震动与舒缓冷媒</strong>：探头具备舒适脉冲技术及冷媒喷洒功能，在传递热能的同时保护表皮层，减低疗程中的不适感。</p>
<h3>专属部位疗程探头</h3>
<p>配备多种专属智能探头，医生会根据客人的肤质状况与轮廓需求，选用合适的探头进行疗程。</p>
<p><strong>面部与下颚线（紫钻探头）</strong>：第五代标志性紫钻探头，覆盖面积比上一代提升，有助更均匀地处理面颊松弛及下颚轮廓问题。</p>
<ul><li>有助缩减疗程时间</li><li>改善苹果肌及法令纹外观</li><li>优化下颚轮廓线条感</li></ul>
<p><strong>眼周脆弱肌肤（碧眼探头）</strong>：专为眼部较薄弱的肌肤设计，加热深度较浅，有助温和地收紧上下眼睑皮肤。获 FDA 认可适用于上下眼睑。</p>
<ul><li>获 FDA 认可适用于上下眼睑</li><li>协助减淡眼周细纹外观</li><li>改善眼部肌肤松弛</li></ul>
<p><strong>身体大范围面积（大玉玺探头）</strong>：探头表面积最大，适用于处理身体较大范围的松弛肌肤，如腹部或手臂等位置。</p>
<ul><li>改善腹部皮肤松弛</li><li>紧致手臂（Bye-bye 肉）及大腿线条</li><li>有助平滑身体肌肤表面纹理</li></ul>
<h3>五大功效</h3>
<ul><li>即时紧肤拉提：改善法令纹、双下巴及下颚松弛</li><li>刺激胶原蛋白增生</li><li>改善皱纹及粗糙肤质</li><li>紧致眼周肌肤（唯一获 FDA 认可应用于上眼睑）</li><li>改善颈部、下颚线条及身体皮肤松弛</li></ul>
<h3>疗程频率与注意事项</h3>
<ul><li>效果可维持约 12 个月，建议每隔 9 个月至 1 年再做一次</li><li>非入侵性，无须恢复期，可即时正常活动</li><li>术后加强保湿与防晒，7 日内暂停含酸类、去角质或美白活性成分的产品</li></ul>`, en: `<p>Thermage FLX is an FDA-cleared non-invasive tightening treatment. Patented monopolar RF with AccuREP™ real-time control delivers 3D volumetric heat into collagen-rich tissue. Dedicated tips treat face/jawline, eyelids and larger body areas. Typically no specific downtime; results may last about 12 months with maintenance as advised.</p>` },
    points: [
      { "zh-HK": `3D 容積式立體加熱，刺激膠原增生`, "zh-CN": `3D 容积式立体加热，刺激胶原增生`, en: `3D volumetric heating to stimulate collagen` },
      { "zh-HK": `AccuREP™ 實時調控，能量均勻安全`, "zh-CN": `AccuREP™ 实时调控，能量均匀安全`, en: `AccuREP™ real-time control for even, safer energy` },
      { "zh-HK": `獲 FDA 認可非入侵性療程，無須復原期`, "zh-CN": `获 FDA 认可非入侵性疗程，无须复原期`, en: `FDA-cleared non-invasive treatment, no downtime` }
    ],
    image: "/images/thermage-flx-main.jpg",
    faqs: [
      { q: { "zh-HK": `療程後大概多久才看到效果？`, "zh-CN": `疗程后大概多久才看到效果？`, en: `How soon will I see results?` }, a: { "zh-HK": `效果並非即時到位，而是隨膠原蛋白漸次增生而浮現。部分客人完成療程不久便感到皮膚的緊實感，較明顯的改善多在數個月內逐步呈現。實際進度與維持時間，會因個人體質和生活習慣而有所不同。`, "zh-CN": `效果并非即时到位，而是随胶原蛋白渐次增生而浮现。部分客人完成疗程不久便感到皮肤的紧实感，较明显的改善多在数个月内逐步呈现。实际进度与维持时间，会因个人体质和生活习惯而有所不同。`, en: `Tightness may be felt soon after; clearer change usually builds over months as collagen remodels. Duration varies with skin and lifestyle.` } },
      { q: { "zh-HK": `進行 Thermage FLX 會感到痛嗎？`, "zh-CN": `进行 Thermage FLX 会感到痛吗？`, en: `Does Thermage FLX hurt?` }, a: { "zh-HK": `療程配備冷凍噴霧與震動舒緩系統，既有助保護表皮，也能分散神經訊號。當射頻熱能深入肌底時，你可能會感到短暫的溫熱感。醫生會全程留意你的反應並適時調整，確保療程在舒適可控的範圍內完成。`, "zh-CN": `疗程配备冷冻喷雾与震动舒缓系统，既有助保护表皮，也能分散神经讯号。当射频热能深入肌底时，你可能会感到短暂的温热感。医生会全程留意你的反应并适时调整，确保疗程在舒适可控的范围内完成。`, en: `Cooling spray and vibration help comfort. You may feel brief heat in deeper tissue; the physician can adjust energy throughout.` } },
      { q: { "zh-HK": `Thermage FLX 與超聲波療程應如何選擇？`, "zh-CN": `Thermage FLX 与超声波疗程应如何选择？`, en: `Thermage FLX versus ultrasound?` }, a: { "zh-HK": `兩者的加熱原理和作用層次各有側重。Thermage FLX 採用 3D 容積式加熱，擅長收緊大面積鬆弛皮膚並改善整體膚質；超聲波療程則以微聚焦方式把能量送至更深層的 SMAS 筋膜，較偏向結構支撐與輪廓提拉。醫生會先進行評估，再因應你的狀況建議合適方案。`, "zh-CN": `两者的加热原理和作用层次各有侧重。Thermage FLX 采用 3D 容积式加热，擅长收紧大面积松弛皮肤并改善整体肤质；超声波疗程则以微聚焦方式把能量送至更深层的 SMAS 筋膜，较偏向结构支撑与轮廓提拉。医生会先进行评估，再因应你的状况建议合适方案。`, en: `FLX heats a broader dermal volume for firmness and texture; ultrasound focuses deeper SMAS for structural lift. A consultation can advise one or both.` } },
      { q: { "zh-HK": `第五代 FLX 與之前的技術有什麼分別？`, "zh-CN": `第五代 FLX 与之前的技术有什么分别？`, en: `What is new in fifth-generation FLX?` }, a: { "zh-HK": `第五代加入 AccuREP™ 實時調控功能，可根據皮膚阻抗隨時微調能量輸出；加上更大面積的紫鑽探頭，能量發放更有效率，療程時間亦相對縮短，整體體驗更流暢。`, "zh-CN": `第五代加入 AccuREP™ 实时调控功能，可根据皮肤阻抗随时微调能量输出；加上更大面积的紫钻探头，能量发放更有效率，疗程时间亦相对缩短，整体体验更流畅。`, en: `AccuREP™ measures impedance before each pulse and a larger purple diamond tip shortens treatment time with more even energy.` } }
    ],
  },
  {
    id: "co2",
    category: "signature",
    slug: "co2",
    title: { "zh-HK": `CO₂ Laser激光技術`, "zh-CN": `CO₂ Laser激光技术`, en: `CO₂ Laser Resurfacing` },
    summary: { "zh-HK": `CO₂ 激光以 10,600nm 波長精準氣化皮膚組織，一次療程改善皺紋、疤痕、老人斑與毛孔，達致全面皮膚年輕化。`, "zh-CN": `CO₂ 激光以 10,600nm 波长精准气化皮肤组织，一次疗程改善皱纹、疤痕、老人斑与毛孔，达致全面皮肤年轻化。`, en: `10,600 nm ablative CO₂ laser vaporises tissue to improve wrinkles, scars, age spots and pores in one session.` },
    bodyHtml: { "zh-HK": `<p>CO₂ Laser（二氧化碳激光）屬於剝脫性（ablative）氣體激光，波長為 10,600 nm，對皮膚組織中的水分子具備極高親和力。當激光光束投射至治療區域時，水分子瞬間吸收能量並產生熱能，導致目標組織精確氣化（vaporization），同時向周邊傳遞餘熱，誘發膠原蛋白即時收縮與彈性纖維重組。</p><p>其核心功效可歸納為以下五大層面：</p><h3>（1）表層組織重塑</h3><p>透過移除老化、受損或病變的表皮層，促進新生上皮細胞遷移與覆蓋，使膚質更趨平滑細緻，有效改善粗糙、暗啞及角質堆積問題。</p><h3>（2）皺紋與細紋改善</h3><p>熱能刺激真皮層膠原蛋白變性與收縮，產生即時的緊緻效應；術後中長期則透過膠原新生（neocollagenesis）機制，逐步填補動態及靜態皺紋，尤其對眼周、口周細紋效果顯著。</p><h3>（3）凹陷性疤痕修復</h3><p>針對暗瘡疤痕、水痘疤或創傷性萎縮疤痕，激光能精確氣化疤痕組織的纖維化結構，同時誘導底部膠原重組與增生，使疤痕邊緣趨向平緩，恢復皮膚表面均勻度。</p><h3>（4）良性皮膚增生移除</h3><p>對脂溢性角化（老人斑）、汗管瘤、粟粒腫、日光性角化等表層良性病變，CO₂ Laser 能精準分層氣化移除，傷口癒合後由正常組織取代，達到清除病灶的效果。</p><h3>（5）整體膚質年輕化</h3><p>綜合上述作用，CO₂ Laser 能同時改善膚色不均、毛孔粗大、皮膚鬆弛及光老化表徵，達到全面性皮膚年輕化（skin rejuvenation）的目標，單次療程即可見顯著差異。</p>`, "zh-CN": `<p>CO₂ Laser（二氧化碳激光）属于剥脱性（ablative）气体激光，波长为 10,600 nm，对皮肤组织中的水分子具备极高亲和力。当激光光束投射至治疗区域时，水分子瞬间吸收能量并产生热能，导致目标组织精确气化（vaporization），同时向周边传递余热，诱发胶原蛋白即时收缩与弹性纤维重组。</p><p>其核心功效可归纳为以下五大层面：</p><h3>（1）表层组织重塑</h3><p>透过移除老化、受损或病变的表皮层，促进新生上皮细胞迁移与覆盖，使肤质更趋平滑细致，有效改善粗糙、暗哑及角质堆积问题。</p><h3>（2）皱纹与细纹改善</h3><p>热能刺激真皮层胶原蛋白变性与收缩，产生即时的紧致效应；术后中长期则透过胶原新生（neocollagenesis）机制，逐步填补动态及静态皱纹，尤其对眼周、口周细纹效果显著。</p><h3>（3）凹陷性疤痕修复</h3><p>针对暗疮疤痕、水痘疤或创伤性萎缩疤痕，激光能精确气化疤痕组织的纤维化结构，同时诱导底部胶原重组与增生，使疤痕边缘趋向平缓，恢复皮肤表面均匀度。</p><h3>（4）良性皮肤增生移除</h3><p>对脂溢性角化（老人斑）、汗管瘤、粟粒肿、日光性角化等表层良性病变，CO₂ Laser 能精准分层气化移除，伤口愈合后由正常组织取代，达到清除病灶的效果。</p><h3>（5）整体肤质年轻化</h3><p>综合上述作用，CO₂ Laser 能同时改善肤色不均、毛孔粗大、皮肤松弛及光老化表征，达到全面性皮肤年轻化（skin rejuvenation）的目标，单次疗程即可见显著差异。</p>`, en: `<p>CO₂ laser (10,600 nm) is an ablative gas laser highly absorbed by water. It vaporises target tissue, contracts collagen and supports rejuvenation — resurfacing, wrinkle reduction, atrophic scar revision, removal of benign growths, and overall texture improvement. Fractional modes shorten recovery versus full-field ablation.</p>` },
    points: [
      { "zh-HK": `剝脫性氣體激光，波長 10,600 nm`, "zh-CN": `剥脱性气体激光，波长 10,600 nm`, en: `Ablative gas laser, wavelength 10,600 nm` },
      { "zh-HK": `精確氣化目標組織、誘發膠原重組`, "zh-CN": `精确气化目标组织、诱发胶原重组`, en: `Precisely vaporises target tissue and remodels collagen` },
      { "zh-HK": `一次療程改善皺紋、疤痕、老人斑與毛孔`, "zh-CN": `一次疗程改善皱纹、疤痕、老人斑与毛孔`, en: `Improves wrinkles, scars, age spots and pores in one session` }
    ],
    image: "/images/CO2-knowledge.png",
    faqs: [
      { q: { "zh-HK": `CO₂ Laser 的運作原理是什麼？`, "zh-CN": `CO₂ Laser 的运作原理是什么？`, en: `How does CO₂ laser work?` }, a: { "zh-HK": `CO₂ Laser 屬於氣體激光，其介質為二氧化碳分子，波長為 10,600 nm（遠紅外線）。此波長對水分子具有極高吸收係數，能精確氣化（vaporization）皮膚表層組織，同時透過熱傳導誘發膠原蛋白收縮與重組，達到組織移除與皮膚重塑的雙重效應。`, "zh-CN": `CO₂ Laser 属于气体激光，其介质为二氧化碳分子，波长为 10,600 nm（远红外线）。此波长对水分子具有极高吸收系数，能精确气化（vaporization）皮肤表层组织，同时透过热传导诱发胶原蛋白收缩与重组，达到组织移除与皮肤重塑的双重效应。`, en: `Far-infrared energy vaporizes water-rich tissue and thermally remoulds collagen.` } },
      { q: { "zh-HK": `CO₂ Laser 的臨床適應症包括哪些？`, "zh-CN": `CO₂ Laser 的临床适应症包括哪些？`, en: `What can CO₂ laser treat?` }, a: { "zh-HK": `臨床應用相當廣泛，主要包括：（1）面部年輕化－改善細紋、皺紋及皮膚鬆弛；（2）疤痕修復－包括暗瘡疤痕、手術疤痕及創傷性疤痕；（3）良性皮膚增生－如脂溢性角化（老人斑）、汗管瘤、粟粒腫；（4）色素性病變－如雀斑、曬斑；（5）血管性病變－如蜘蛛血管痣。根據病灶深度與範圍，可選擇全層燒灼或點陣式（fractional）模式操作。`, "zh-CN": `临床应用相当广泛，主要包括：（1）面部年轻化－改善细纹、皱纹及皮肤松弛；（2）疤痕修复－包括暗疮疤痕、手术疤痕及创伤性疤痕；（3）良性皮肤增生－如脂溢性角化（老人斑）、汗管瘤、粟粒肿；（4）色素性病变－如雀斑、晒斑；（5）血管性病变－如蜘蛛血管痣。根据病灶深度与范围，可选择全层烧灼或点阵式（fractional）模式操作。`, en: `Rejuvenation, acne/surgical scars, seborrhoeic keratoses, pigmentation and selected vascular lesions — full-field or fractional.` } },
      { q: { "zh-HK": `CO₂ Laser 療程的疼痛程度如何？是否需要麻醉？`, "zh-CN": `CO₂ Laser 疗程的疼痛程度如何？是否需要麻醉？`, en: `Is CO₂ laser painful? Is anaesthesia needed?` }, a: { "zh-HK": `由於激光穿透深度較深且涉及組織氣化，治療期間的疼痛感明顯高於非剝脫性激光，視覺模擬評分（VAS）一般落於 5 至 7 分（滿分 10 分）。因此，臨床常規會進行局部麻醉藥膏塗敷（約 30 至 60 分鐘），或於特定區域施打局部浸潤麻醉。點陣式模式因微熱區（MTZ）較小，疼痛感相對較輕，但仍建議麻醉介入以提升患者舒適度。`, "zh-CN": `由于激光穿透深度较深且涉及组织气化，治疗期间的疼痛感明显高于非剥脱性激光，视觉模拟评分（VAS）一般落于 5 至 7 分（满分 10 分）。因此，临床常规会进行局部麻醉药膏涂敷（约 30 至 60 分钟），或于特定区域施打局部浸润麻醉。点阵式模式因微热区（MTZ）较小，疼痛感相对较轻，但仍建议麻醉介入以提升患者舒适度。`, en: `Pain is higher than non-ablative lasers (often VAS 5–7/10); topical or local anaesthesia is routine.` } },
      { q: { "zh-HK": `治療後恢復期需要多久？術後外觀變化為何？`, "zh-CN": `治疗后恢复期需要多久？术后外观变化为何？`, en: `How long is recovery after CO₂ laser?` }, a: { "zh-HK": `CO₂ Laser 屬剝脫性療程，術後存在明確的修復期。第一階段（術後 1 至 3 天）：皮膚呈現紅腫、滲液及灼熱感，治療區域會形成黃褐色結痂；第二階段（術後 4 至 7 天）：結痂逐漸脫落，新生上皮開始覆蓋；第三階段（術後 1 至 2 週）：紅斑逐漸消退，但粉紅色澤可能持續數週至數個月（取決於能量強度與個人修復能力）。點陣式模式的恢復期較全層燒灼大幅縮短，一般約 5 至 7 天可回歸正常社交。`, "zh-CN": `CO₂ Laser 属剥脱性疗程，术后存在明确的修复期。第一阶段（术后 1 至 3 天）：皮肤呈现红肿、渗液及灼热感，治疗区域会形成黄褐色结痂；第二阶段（术后 4 至 7 天）：结痂逐渐脱落，新生上皮开始覆盖；第三阶段（术后 1 至 2 周）：红斑逐渐消退，但粉红色泽可能持续数周至数个月（取决于能量强度与个人修复能力）。点阵式模式的恢复期较全层烧灼大幅缩短，一般约 5 至 7 天可回归正常社交。`, en: `Expect redness, oozing and crusting for days; pinkness may last weeks. Fractional recovery is often ~5–7 days.` } },
      { q: { "zh-HK": `術後標準護理指引為何？`, "zh-CN": `术后标准护理指引为何？`, en: `What aftercare is required?` }, a: { "zh-HK": `術後護理直接影響修復品質與併發症預防，建議遵循以下要點：（1）傷口照護－使用無菌生理食鹽水清潔，塗抹抗生素藥膏或專用修復凝膠，保持濕潤癒合環境；（2）絕對防曬－術後至少 3 個月內使用 SPF 50+ 廣譜防曬劑，並配合帽子、傘具等物理遮蔽；（3）避免刺激－術後 2 週內禁止使用果酸、A 醇、酒精類產品，化妝需待結痂完全脫落後（約 7 至 10 天）；（4）避免搔抓－結痂應自然脫落，人為剝除會增加疤痕及色素異常風險。如有疱疹病史，建議術前預防性投予抗病毒藥物。`, "zh-CN": `术后护理直接影响修复品质与并发症预防，建议遵循以下要点：（1）伤口照护－使用无菌生理食盐水清洁，涂抹抗生素药膏或专用修复凝胶，保持湿润愈合环境；（2）绝对防晒－术后至少 3 个月内使用 SPF 50+ 广谱防晒剂，并配合帽子、伞具等物理遮蔽；（3）避免刺激－术后 2 周内禁止使用果酸、A 醇、酒精类产品，化妆需待结痂完全脱落后（约 7 至 10 天）；（4）避免搔抓－结痂应自然脱落，人为剥除会增加疤痕及色素异常风险。如有疱疹病史，建议术前预防性投予抗病毒药物。`, en: `Keep wounds moist and clean, strict SPF 50+ for months, avoid acids/retinoids early, and let crusts shed naturally.` } }
    ],
  },
  {
    id: "m22",
    category: "signature",
    slug: "m22",
    title: { "zh-HK": `M22 光子嫩膚`, "zh-CN": `M22 光子嫩肤`, en: `M22 Photorejuvenation` },
    summary: { "zh-HK": `全球超過百萬用家實證的「皮膚問題終結者」，一機解決 8 大肌膚問題。`, "zh-CN": `全球超过百万用家实证的「皮肤问题终结者」，一机解决 8 大肌肤问题。`, en: `IPL platform used by over a million people worldwide — addressing eight common skin concerns in one device.` },
    bodyHtml: { "zh-HK": `<p>全球超過百萬用家實證的「皮膚問題終結者」</p><p>M22 由全球醫療美容設備領導者 Lumenis（科醫人）研發，是強脈衝光（IPL）技術的黃金標準。其超光子 AOPT 平台，配合 5D 全息定位技術，能夠智能篩選、精準打擊，不浪費能量於無關組織上——即意味著效果更強、見效更快、過程更安全舒適。</p><p>M22 八大皇牌功效——全面解決肌膚困擾</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>類別</th><th>功效</th><th>強效之處</th></tr></thead><tbody><tr><td>暗瘡治療</td><td>強效消炎殺菌，徹底改善暗瘡、粉刺、痘印</td><td>痤瘡專用濾光片雙波段截擊，直接殺滅痤瘡桿菌，從根源杜絕</td></tr><tr><td>緊緻去皺</td><td>激活膠原大量新生，撫平細紋、收緊鬆弛</td><td>熱能直達真皮層，膠原重組效果媲美射頻拉提，單次已見改善</td></tr><tr><td>淡化色素</td><td>精準擊碎雀斑、曬斑、荷爾蒙斑、頑固痘印</td><td>多組濾光片分層處理，淺層深層色斑無所遁形</td></tr><tr><td>去斑淨白</td><td>均勻膚色，由內而外透出亮白光芒</td><td>單次療程已可見色斑明顯淡化、膚色整體提亮</td></tr><tr><td>改善泛紅肌</td><td>極速舒緩面部潮紅、敏感泛紅、發熱不適</td><td>血管專用濾光片精準封閉擴張血管，徹底告別泛紅困擾</td></tr><tr><td>改善血管問題</td><td>封閉紅血絲、微絲血管擴張</td><td>雙波段截取技術，針對性凝固異常血管，效果立竿見影</td></tr><tr><td>改善玫瑰痤瘡</td><td>強效控制炎症，穩定玫瑰痤瘡、減少復發</td><td>抗炎與修復雙管齊下，擺脫長期依賴類固醇的惡性循環</td></tr><tr><td>收細毛孔</td><td>強效控油，毛孔顯著細緻，膚質即時升級</td><td>熱能刺激膠原收縮，毛孔由粗大變細緻，肌膚回復光滑</td></tr></tbody></table></div><p>舒適度極高——告別傳統彩光的刺痛感</p><p>傳統彩光療程常為人詬病之處，在於過程中的刺痛感與灼熱不適。M22 AOPT 超光子平台在此方面實現了革命性突破：</p><p>· 智能脈衝調控：能量輸出更均勻、更溫和，避免傳統彩光「能量尖峰」造成的燙傷風險與不適感<br>· 藍寶石接觸式冷卻：治療頭內置高效冷卻系統，於發光瞬間同步冷卻表皮，確保全程冰涼舒適<br>· 臨床舒適度數據：研究顯示，M22 的疼痛評分明顯低於傳統彩光設備，絕大多數用家描述為「輕微橡皮筋彈感」或「溫熱感」，完全在可接受範圍內</p><p>結論：M22 讓光子嫩膚由「忍痛變靚」進化為「舒適變靚」。</p><p>M22 與傳統彩光的關鍵差異</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>比較項目</th><th>傳統彩光</th><th>M22 超光子（AOPT）</th></tr></thead><tbody><tr><td>技術層面</td><td>輸出固定，能量「一刀切」</td><td>5D全息定位，智能調節能量</td></tr><tr><td>精準度</td><td>能量分散，效果參差</td><td>精準篩選靶色基，集中打擊目標</td></tr><tr><td>舒適度</td><td>刺痛感明顯，熱能累積</td><td>智能冷卻＋脈衝調控，舒適度大幅提升</td></tr><tr><td>安全性</td><td>容易過熱灼傷</td><td>多級冷卻保護，安全可靠</td></tr><tr><td>見效速度</td><td>需多次治療</td><td>更快見效，療程次數更少</td></tr></tbody></table></div><p>權威認證——全球數據實證</p><p>· 全球超過 100 萬 用家實證<br>· 獲美國 FDA 及歐盟 CE 雙重認證<br>· 超過 50 項 臨床研究支持其功效與安全性</p><p>適合對象</p><p>· 想同時處理暗啞、色斑、泛紅三大膚色問題<br>· 面部有雀斑、曬斑、荷爾蒙斑、痘印等色素困擾<br>· 有紅血絲、面部潮紅、敏感肌等血管性問題<br>· 希望收細毛孔、改善細紋、提亮膚色作日常保養<br>· 受暗瘡、粉刺、玫瑰痤瘡困擾的炎症性皮膚<br>· 追求最快見效、最少次數、最全面的皮膚治療方案<br>· 對疼痛敏感、希望療程舒適無負擔的人士</p><p>療程簡介</p><p>· 單次治療時間：約 15-20 分鐘<br>· 建議療程：3-6 次為一個完整療程，每次間隔約 1 個月<br>· 效果維持：完成療程後，效果可維持 1-3 年<br>· 恢復期：零恢復期，治療後即可恢復日常活動，即日可化妝</p><p>術後護理須知</p><p>1. 嚴格防曬：治療後一週內避免暴曬，以防反黑及色素沉著<br>2. 保濕修復為主：避免使用美白、去角質等刺激性功能性產品<br>3. 醫用敷料輔助：治療後 3-7 天可每日敷用醫用修復面膜，以補水、消炎、促進修復</p><p>總結</p><p>M22 是一部能夠同時解決 8 大皮膚問題的「全能戰機」——去斑、去紅、去暗瘡、收毛孔、抗皺，一部機全面覆蓋。更配備智能冷卻系統與精準脈衝調控，讓整個治療過程舒適無痛、零恢復期。</p><p>與其逐一處理各項肌膚問題，耗費時間與金錢，不如一機到位，高效、舒適、徹底。</p>`, "zh-CN": `<p>全球超过百万用家实证的「皮肤问题终结者」</p><p>M22 由全球医疗美容设备领导者 Lumenis（科医人）研发，是强脉冲光（IPL）技术的黄金标准。其超光子 AOPT 平台，配合 5D 全息定位技术，能够智能筛选、精准打击，不浪费能量于无关组织上——即意味著效果更强、见效更快、过程更安全舒适。</p><p>M22 八大皇牌功效——全面解决肌肤困扰</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>类别</th><th>功效</th><th>强效之处</th></tr></thead><tbody><tr><td>暗疮治疗</td><td>强效消炎杀菌，彻底改善暗疮、粉刺、痘印</td><td>痤疮专用滤光片双波段截击，直接杀灭痤疮杆菌，从根源杜绝</td></tr><tr><td>紧致去皱</td><td>激活胶原大量新生，抚平细纹、收紧松弛</td><td>热能直达真皮层，胶原重组效果媲美射频拉提，单次已见改善</td></tr><tr><td>淡化色素</td><td>精准击碎雀斑、晒斑、荷尔蒙斑、顽固痘印</td><td>多组滤光片分层处理，浅层深层色斑无所遁形</td></tr><tr><td>去斑净白</td><td>均匀肤色，由内而外透出亮白光芒</td><td>单次疗程已可见色斑明显淡化、肤色整体提亮</td></tr><tr><td>改善泛红肌</td><td>极速舒缓面部潮红、敏感泛红、发热不适</td><td>血管专用滤光片精准封闭扩张血管，彻底告别泛红困扰</td></tr><tr><td>改善血管问题</td><td>封闭红血丝、微丝血管扩张</td><td>双波段截取技术，针对性凝固异常血管，效果立竿见影</td></tr><tr><td>改善玫瑰痤疮</td><td>强效控制炎症，稳定玫瑰痤疮、减少复发</td><td>抗炎与修复双管齐下，摆脱长期依赖类固醇的恶性循环</td></tr><tr><td>收细毛孔</td><td>强效控油，毛孔显著细致，肤质即时升级</td><td>热能刺激胶原收缩，毛孔由粗大变细致，肌肤回复光滑</td></tr></tbody></table></div><p>舒适度极高——告别传统彩光的刺痛感</p><p>传统彩光疗程常为人诟病之处，在于过程中的刺痛感与灼热不适。M22 AOPT 超光子平台在此方面实现了革命性突破：</p><p>· 智能脉冲调控：能量输出更均匀、更温和，避免传统彩光「能量尖峰」造成的烫伤风险与不适感<br>· 蓝宝石接触式冷却：治疗头内置高效冷却系统，于发光瞬间同步冷却表皮，确保全程冰凉舒适<br>· 临床舒适度数据：研究显示，M22 的疼痛评分明显低于传统彩光设备，绝大多数用家描述为「轻微橡皮筋弹感」或「温热感」，完全在可接受范围内</p><p>结论：M22 让光子嫩肤由「忍痛变靓」进化为「舒适变靓」。</p><p>M22 与传统彩光的关键差异</p><div class="table-wrap"><table class="cmp-table"><thead><tr><th>比较项目</th><th>传统彩光</th><th>M22 超光子（AOPT）</th></tr></thead><tbody><tr><td>技术层面</td><td>输出固定，能量「一刀切」</td><td>5D全息定位，智能调节能量</td></tr><tr><td>精准度</td><td>能量分散，效果参差</td><td>精准筛选靶色基，集中打击目标</td></tr><tr><td>舒适度</td><td>刺痛感明显，热能累积</td><td>智能冷却＋脉冲调控，舒适度大幅提升</td></tr><tr><td>安全性</td><td>容易过热灼伤</td><td>多级冷却保护，安全可靠</td></tr><tr><td>见效速度</td><td>需多次治疗</td><td>更快见效，疗程次数更少</td></tr></tbody></table></div><p>权威认证——全球数据实证</p><p>· 全球超过 100 万 用家实证<br>· 获美国 FDA 及欧盟 CE 双重认证<br>· 超过 50 项 临床研究支持其功效与安全性</p><p>适合对象</p><p>· 想同时处理暗哑、色斑、泛红三大肤色问题<br>· 面部有雀斑、晒斑、荷尔蒙斑、痘印等色素困扰<br>· 有红血丝、面部潮红、敏感肌等血管性问题<br>· 希望收细毛孔、改善细纹、提亮肤色作日常保养<br>· 受暗疮、粉刺、玫瑰痤疮困扰的炎症性皮肤<br>· 追求最快见效、最少次数、最全面的皮肤治疗方案<br>· 对疼痛敏感、希望疗程舒适无负担的人士</p><p>疗程简介</p><p>· 单次治疗时间：约 15-20 分钟<br>· 建议疗程：3-6 次为一个完整疗程，每次间隔约 1 个月<br>· 效果维持：完成疗程后，效果可维持 1-3 年<br>· 恢复期：零恢复期，治疗后即可恢复日常活动，即日可化妆</p><p>术后护理须知</p><p>1. 严格防晒：治疗后一周内避免暴晒，以防反黑及色素沉著<br>2. 保湿修复为主：避免使用美白、去角质等刺激性功能性产品<br>3. 医用敷料辅助：治疗后 3-7 天可每日敷用医用修复面膜，以补水、消炎、促进修复</p><p>总结</p><p>M22 是一部能够同时解决 8 大皮肤问题的「全能战机」——去斑、去红、去暗疮、收毛孔、抗皱，一部机全面覆盖。更配备智能冷却系统与精准脉冲调控，让整个治疗过程舒适无痛、零恢复期。</p><p>与其逐一处理各项肌肤问题，耗费时间与金钱，不如一机到位，高效、舒适、彻底。</p>`, en: `<p>M22 OPT delivers stable square-wave pulses to treat vascular and pigment concerns while protecting the epidermis. FDA-cleared with over a decade of clinical use for efficient, comfortable photorejuvenation.</p>` },
    points: [
      { "zh-HK": `一機解決 8 大肌膚問題`, "zh-CN": `一机解决 8 大肌肤问题`, en: `Addresses eight major skin concerns in one device` },
      { "zh-HK": `AOPT 超光子智能篩選、精準打擊`, "zh-CN": `AOPT 超光子智能筛选、精准打击`, en: `AOPT IPL with intelligent targeting` },
      { "zh-HK": `智能冷卻＋精準脈衝，舒適無痛、零恢復期`, "zh-CN": `智能冷却＋精准脉冲，舒适无痛、零恢复期`, en: `Smart cooling + pulse control: comfortable, no downtime` }
    ],
    image: "/images/M22-knowledge.jpg",
    faqs: [
      { q: { "zh-HK": `M22 與傳統彩光治療在技術原理上有何本質區別？`, "zh-CN": `M22 与传统彩光治疗在技术原理上有何本质区别？`, en: `How does M22 differ from traditional IPL?` }, a: { "zh-HK": `M22 搭載 OPT（Optimal Pulse Technology，完美脈衝技術），其核心優勢在於採用方波脈衝輸出，能確保每個子脈衝能量密度恆定，避免傳統彩光因能量衰減導致的熱累積損傷。此技術有效提升治療安全性與舒適度，臨床適應症涵蓋血管性病變（如紅血絲）、色素性病變（如雀斑、暗瘡印）及膚質紋理改善。`, "zh-CN": `M22 搭载 OPT（Optimal Pulse Technology，完美脉冲技术），其核心优势在于采用方波脉冲输出，能确保每个子脉冲能量密度恒定，避免传统彩光因能量衰减导致的热累积损伤。此技术有效提升治疗安全性与舒适度，临床适应症涵盖血管性病变（如红血丝）、色素性病变（如雀斑、暗疮印）及肤质纹理改善。`, en: `OPT square-wave pulses keep energy density more constant, improving comfort and safety versus peaking traditional pulses.` } },
      { q: { "zh-HK": `M22 療程的疼痛感知程度為何？是否需要局部麻醉介入？`, "zh-CN": `M22 疗程的疼痛感知程度为何？是否需要局部麻醉介入？`, en: `Does M22 hurt? Is numbing needed?` }, a: { "zh-HK": `根據臨床反饋，多數受試者將疼痛感描述為「輕微彈擊感」，視覺模擬評分（VAS）一般落於 2 至 3 分（滿分 10 分），屬於可耐受範圍，因此常規情況下無需使用局部麻醉製劑。全臉標準操作時間約為 15 至 20 分鐘，治療期間可保持口語溝通，整體患者順從性良好。`, "zh-CN": `根据临床反馈，多数受试者将疼痛感描述为「轻微弹击感」，视觉模拟评分（VAS）一般落于 2 至 3 分（满分 10 分），属于可耐受范围，因此常规情况下无需使用局部麻醉制剂。全脸标准操作时间约为 15 至 20 分钟，治疗期间可保持口语沟通，整体患者顺从性良好。`, en: `Often described as light snaps (VAS ~2–3/10); numbing is usually unnecessary. Full-face sessions take ~15–20 minutes.` } },
      { q: { "zh-HK": `治療後的效果呈現週期及建議療程頻率為何？`, "zh-CN": `治疗后的效果呈现周期及建议疗程频率为何？`, en: `When will I see results and how often?` }, a: { "zh-HK": `術後可即時觀察到暫時性膚色提亮，惟色素性病灶的消退需依賴表皮角質細胞的生理代謝週期，一般於 1 至 2 週內漸進顯現。為達致累積性膠原重組與色素清除效應，臨床常規建議採階段性療程設計，即 3 至 5 次為一完整週期，每次間隔 3 至 4 週，以配合皮膚自然更新節律。`, "zh-CN": `术后可即时观察到暂时性肤色提亮，惟色素性病灶的消退需依赖表皮角质细胞的生理代谢周期，一般于 1 至 2 周内渐进显现。为达致累积性胶原重组与色素清除效应，临床常规建议采阶段性疗程设计，即 3 至 5 次为一完整周期，每次间隔 3 至 4 周，以配合皮肤自然更新节律。`, en: `Temporary brightening can be immediate; pigment fades over 1–2 weeks. Courses of 3–5 sessions every 3–4 weeks are common.` } },
      { q: { "zh-HK": `M22 療程的絕對與相對禁忌症分別為何？`, "zh-CN": `M22 疗程的绝对与相对禁忌症分别为何？`, en: `Who should not have M22?` }, a: { "zh-HK": `絕對禁忌症包括：懷孕或哺乳期婦女、已知光敏感性皮膚病（如紅斑性狼瘡、紫質症）、治療區域存在活動性感染或惡性病變。相對禁忌症則涵蓋：近期（4 週內）過度紫外線曝曬史、口服 A 酸類藥物（如 Isotretinoin）療程中或停藥未滿 6 個月者，建議經由專科醫生進行個案風險評估後再行決定。`, "zh-CN": `绝对禁忌症包括：怀孕或哺乳期妇女、已知光敏感性皮肤病（如红斑性狼疮、紫质症）、治疗区域存在活动性感染或恶性病变。相对禁忌症则涵盖：近期（4 周内）过度紫外线曝晒史、口服 A 酸类药物（如 Isotretinoin）疗程中或停药未满 6 个月者，建议经由专科医生进行个案风险评估后再行决定。`, en: `Pregnancy/breastfeeding, photosensitivity disorders, active infection/malignancy at the site; recent tanning or isotretinoin need medical review.` } },
      { q: { "zh-HK": `術後皮膚生理反應及標準護理指引為何？`, "zh-CN": `术后皮肤生理反应及标准护理指引为何？`, en: `What aftercare follows M22?` }, a: { "zh-HK": `術後常見的暫時性生理反應包括輕微紅斑、局部溫熱感及輕度水腫，通常於 2 至 24 小時內自行消退。護理建議遵循三大原則：（1）強化保濕屏障－選用含玻尿酸成分之修護產品；（2）嚴格光防護－使用 SPF 50+ 廣譜防曬劑，並配合物理性遮蔽；（3）避免外源性刺激－術後 1 週內禁用果酸、A 醇、高濃度維他命 C 等活性成分，化妝品使用宜延後至 24 小時後。若出現持續性紅腫或水泡等異常反應，應立即回診追蹤。`, "zh-CN": `术后常见的暂时性生理反应包括轻微红斑、局部温热感及轻度水肿，通常于 2 至 24 小时内自行消退。护理建议遵循三大原则：（1）强化保湿屏障－选用含玻尿酸成分之修护产品；（2）严格光防护－使用 SPF 50+ 广谱防晒剂，并配合物理性遮蔽；（3）避免外源性刺激－术后 1 周内禁用果酸、A 醇、高浓度维他命 C 等活性成分，化妆品使用宜延后至 24 小时后。若出现持续性红肿或水泡等异常反应，应立即回诊追踪。`, en: `Mild redness/warmth for hours; hydrate, use SPF 50+, and pause acids/retinoids/high-strength vitamin C for about a week.` } }
    ],
  },
  {
    id: "s21",
    category: "signature",
    slug: "s21",
    title: { "zh-HK": `S21 激光鼻鼾治療`, "zh-CN": `S21 激光鼻鼾治疗`, en: `S21 Laser Snoring Treatment` },
    summary: { "zh-HK": `S21 雙波長激光從根本收緊軟顎組織，臨床實證平均改善鼻鼾指數 66%，零恢復期的非入侵方案。`, "zh-CN": `S21 双波长激光从根本收紧软颚组织，临床实证平均改善鼻鼾指数 66%，零恢复期的非入侵方案。`, en: `Dual-wavelength laser tightens soft-palate tissue; studies show ~66% average snoring-index improvement with no downtime.` },
    bodyHtml: { "zh-HK": `<p>許多人詢問，S21 的「鼻鼾窗」功能究竟如何改善鼻鼾？其原理非常明確——並非暫時撐開氣道，而是從根本收緊導致鼻鼾的軟組織。</p><h3>鼻鼾的成因：軟顎組織鬆弛</h3><p>鼻鼾聲的產生，源於睡眠時軟顎（懸雍垂周圍組織）及咽喉壁過度鬆弛。當呼吸氣流經過時，這些鬆弛組織產生震動，形成鼻鼾聲。情況嚴重者，甚至可能阻塞氣道，導致睡眠窒息症。</p><h3>S21 如何實現「根治」？</h3><p>S21 結合 Er:YAG（2940nm）與 Nd:YAG（1064nm）雙波長，將能量精準傳遞至軟顎組織深層。此過程具備兩大核心作用：</p><ul><li><strong>即時收縮</strong>：熱能使軟顎的膠原纖維立即收緊，組織瞬間拉提變實，氣道空間即時擴闊。</li><li><strong>長期重建</strong>：熱能刺激膠原蛋白持續重組與新生，使軟顎組織長期保持彈性與緊緻，效果持久。</li></ul><p>此技術在醫學上稱為激光輔助懸雍垂軟顎成形術（LAUP），擁有超過 30 年的臨床應用歷史，屬國際醫學界認可的非入侵性鼻鼾治療方案。</p><h3>臨床成效與數據</h3><p>根據一份針對同類雙波長激光治療睡眠窒息症的研究，患者接受 3 次、每次約 20 分鐘的療程後：</p><ul><li>AHI（呼吸暫停指數）平均改善 66.3%，部分患者改善幅度達 100%。</li><li>78% 的患者改善幅度達 50% 或以上。</li></ul><p>另一項研究更顯示，92.3% 的患者鼻鼾情況顯著減少。以上數據充分證明此激光技術對改善鼻鼾及輕中度睡眠窒息症具有顯著成效。</p><h3>與傳統手術的差異</h3><p>傳統鼻鼾手術（UPPP）需在全身麻醉下進行，切除過多組織，創傷大、疼痛感高、復原時間長。而 S21 激光治療屬於微創、非入侵性：</p><ul><li>無需開刀、無需全身麻醉，於診所內即可完成。</li><li>零恢復期，治療後即可恢復日常活動，不影響正常生活。</li><li>幾乎無痛，僅少數個案會出現短暫喉嚨輕微乾燥或異物感，數小時內即可消退。</li></ul><h3>總結</h3><p>S21 的「鼻鼾窗」功能，透過雙波長激光收緊與重塑軟顎組織，從根源解決因組織鬆弛引起的鼻鼾問題。其成效經臨床實證，安全可靠，且過程舒適、無需開刀，是傳統手術以外一個極為理想的選擇。</p>`, "zh-CN": `<p>许多人询问，S21 的「鼻鼾窗」功能究竟如何改善鼻鼾？其原理非常明确——并非暂时撑开气道，而是从根本收紧导致鼻鼾的软组织。</p><h3>鼻鼾的成因：软颚组织松弛</h3><p>鼻鼾声的产生，源于睡眠时软颚（悬雍垂周围组织）及咽喉壁过度松弛。当呼吸气流经过时，这些松弛组织产生震动，形成鼻鼾声。情况严重者，甚至可能阻塞气道，导致睡眠窒息症。</p><h3>S21 如何实现「根治」？</h3><p>S21 结合 Er:YAG（2940nm）与 Nd:YAG（1064nm）双波长，将能量精准传递至软颚组织深层。此过程具备两大核心作用：</p><ul><li><strong>即时收缩</strong>：热能使软颚的胶原纤维立即收紧，组织瞬间拉提变实，气道空间即时扩阔。</li><li><strong>长期重建</strong>：热能刺激胶原蛋白持续重组与新生，使软颚组织长期保持弹性与紧致，效果持久。</li></ul><p>此技术在医学上称为激光辅助悬雍垂软颚成形术（LAUP），拥有超过 30 年的临床应用历史，属国际医学界认可的非入侵性鼻鼾治疗方案。</p><h3>临床成效与数据</h3><p>根据一份针对同类双波长激光治疗睡眠窒息症的研究，患者接受 3 次、每次约 20 分钟的疗程后：</p><ul><li>AHI（呼吸暂停指数）平均改善 66.3%，部分患者改善幅度达 100%。</li><li>78% 的患者改善幅度达 50% 或以上。</li></ul><p>另一项研究更显示，92.3% 的患者鼻鼾情况显著减少。以上数据充分证明此激光技术对改善鼻鼾及轻中度睡眠窒息症具有显著成效。</p><h3>与传统手术的差异</h3><p>传统鼻鼾手术（UPPP）需在全身麻醉下进行，切除过多组织，创伤大、疼痛感高、复原时间长。而 S21 激光治疗属于微创、非入侵性：</p><ul><li>无需开刀、无需全身麻醉，于诊所内即可完成。</li><li>零恢复期，治疗后即可恢复日常活动，不影响正常生活。</li><li>几乎无痛，仅少数个案会出现短暂喉咙轻微干燥或异物感，数小时内即可消退。</li></ul><h3>总结</h3><p>S21 的「鼻鼾窗」功能，透过双波长激光收紧与重塑软颚组织，从根源解决因组织松弛引起的鼻鼾问题。其成效经临床实证，安全可靠，且过程舒适、无需开刀，是传统手术以外一个极为理想的选择。</p>`, en: `<p>S21 combines Er:YAG (2940 nm) and Nd:YAG (1064 nm) to tighten and remodel soft-palate tissue (laser-assisted uvulopalatoplasty). Immediate collagen contraction widens the airway; longer-term remodelling sustains firmness. Clinic-based, non-invasive, typically near painless with no downtime — an alternative to traditional UPPP surgery.</p>` },
    points: [
      { "zh-HK": `雙波長激光收緊軟顎，根治鼻鼾`, "zh-CN": `双波长激光收紧软颚，根治鼻鼾`, en: `Dual-wavelength laser tightens the soft palate` },
      { "zh-HK": `臨床實證平均改善鼻鼾指數 66%`, "zh-CN": `临床实证平均改善鼻鼾指数 66%`, en: `Clinical data: ~66% average snoring-index improvement` },
      { "zh-HK": `非入侵、零恢復期，診所內完成`, "zh-CN": `非入侵、零恢复期，诊所内完成`, en: `Non-invasive, no downtime, completed in clinic` }
    ],
    image: "/images/S21-knowledge.png",
    faqs: [
      { q: { "zh-HK": `S21 如何根治鼻鼾？`, "zh-CN": `S21 如何根治鼻鼾？`, en: `How does S21 treat snoring at the root?` }, a: { "zh-HK": `S21 結合 Er:YAG（2940nm）與 Nd:YAG（1064nm）雙波長，將能量精準傳遞至軟顎組織深層。熱能使膠原纖維即時收緊，氣道空間即時擴闊；同時刺激膠原蛋白持續重組與新生，長期保持彈性與緊緻，從根本解決鼻鼾問題。`, "zh-CN": `S21 结合 Er:YAG（2940nm）与 Nd:YAG（1064nm）双波长，将能量精准传递至软颚组织深层。热能使胶原纤维即时收紧，气道空间即时扩阔；同时刺激胶原蛋白持续重组与新生，长期保持弹性与紧致，从根本解决鼻鼾问题。`, en: `Dual wavelengths heat deep soft-palate collagen for immediate tightening and lasting remodelling.` } },
      { q: { "zh-HK": `S21 的臨床成效如何？`, "zh-CN": `S21 的临床成效如何？`, en: `What results does S21 show clinically?` }, a: { "zh-HK": `根據研究，患者接受 3 次、每次約 20 分鐘的療程後，AHI（呼吸暫停指數）平均改善 66.3%，部分患者改善幅度達 100%；78% 的患者改善幅度達 50% 或以上；另一項研究顯示 92.3% 的患者鼻鼾情況顯著減少。`, "zh-CN": `根据研究，患者接受 3 次、每次约 20 分钟的疗程后，AHI（呼吸暂停指数）平均改善 66.3%，部分患者改善幅度达 100%；78% 的患者改善幅度达 50% 或以上；另一项研究显示 92.3% 的患者鼻鼾情况显著减少。`, en: `After ~3×20-minute sessions, AHI improved ~66% on average in cited studies; many patients report marked snoring reduction.` } },
      { q: { "zh-HK": `S21 療程會痛嗎？需要麻醉嗎？`, "zh-CN": `S21 疗程会痛吗？需要麻醉吗？`, en: `Does S21 hurt? Is anaesthesia needed?` }, a: { "zh-HK": `屬微創、非入侵性療程，幾乎無痛，僅少數個案會出現短暫喉嚨輕微乾燥或異物感，數小時內即可消退。無需開刀、無需全身麻醉，於診所內即可完成。`, "zh-CN": `属微创、非入侵性疗程，几乎无痛，仅少数个案会出现短暂喉咙轻微干燥或异物感，数小时内即可消退。无需开刀、无需全身麻醉，于诊所内即可完成。`, en: `Usually near painless; no general anaesthesia or incision. Mild throat dryness may resolve in hours.` } },
      { q: { "zh-HK": `S21 療程有恢復期嗎？`, "zh-CN": `S21 疗程有恢复期吗？`, en: `Is there downtime after S21?` }, a: { "zh-HK": `零恢復期，治療後即可恢復日常活動，不影響正常生活。`, "zh-CN": `零恢复期，治疗后即可恢复日常活动，不影响正常生活。`, en: `Typically none — resume daily activity the same day.` } },
      { q: { "zh-HK": `S21 與傳統鼻鼾手術有何分別？`, "zh-CN": `S21 与传统鼻鼾手术有何分别？`, en: `How does S21 differ from snoring surgery?` }, a: { "zh-HK": `傳統鼻鼾手術（UPPP）需在全身麻醉下進行，切除過多組織，創傷大、復原時間長。S21 激光治療屬微創非入侵，無需開刀、無恢復期，是傳統手術以外更理想的選擇。`, "zh-CN": `传统鼻鼾手术（UPPP）需在全身麻醉下进行，切除过多组织，创伤大、复原时间长。S21 激光治疗属微创非入侵，无需开刀、无恢复期，是传统手术以外更理想的选择。`, en: `Unlike UPPP under general anaesthesia, S21 is clinic-based, non-invasive and recovery-free.` } }
    ],
  },
  {
    id: "ultherapy",
    category: "signature",
    slug: "ultherapy",
    title: { "zh-HK": `Ultherapy PRIME 第二代超聲波`, "zh-CN": `Ultherapy PRIME 第二代超声波`, en: `Ultherapy PRIME Second-Generation Ultrasound` },
    summary: { "zh-HK": `獲美國 FDA 認可的非入侵性超聲波提升療程，配備 DeepSEE™ 實時影像技術，將能量精準送達 SMAS 筋膜層，刺激膠原蛋白漸進再生，改善皮膚鬆弛及重塑輪廓。`, "zh-CN": `获美国 FDA 认可的非入侵性超声波提升疗程，配备 DeepSEE™ 实时影像技术，将能量精准送达 SMAS 筋膜层，刺激胶原蛋白渐进再生，改善皮肤松弛及重塑轮廓。`, en: `FDA-cleared non-invasive ultrasound lift with DeepSEE™ real-time imaging, delivering energy to the SMAS layer to stimulate gradual collagen renewal, improve laxity and reshape contours.` },
    bodyHtml: { "zh-HK": `<p>Ultherapy® PRIME 為獲美國 FDA 認可的非入侵性超聲波提升療程。配備 DeepSEE™ 實時超聲波影像技術，協助醫生於療程期間透視皮膚底層，將能量精準送達 SMAS 筋膜層及真皮層，有助刺激膠原蛋白與彈力纖維漸進再生，改善皮膚鬆弛及重塑輪廓。療程無須開刀，一般無須特定復原期。</p>
<h3>療程原理：See-Plan-Treat 方案</h3>
<p>結合超聲波影像技術與微聚焦能量，針對不同皮膚層次進行熱能傳遞。</p>
<p><strong>DeepSEE™ 實時影像技術</strong>：醫生可透過實時影像監測皮下組織（深達 6mm），協助規劃能量發放路徑，並避開不適宜受熱的部位，提升療程的準確度。</p>
<p><strong>MFU-V 微聚焦能量</strong>：超聲波能量聚焦於 SMAS 筋膜層及真皮層，產生微細熱凝點，有助啟動組織的自我修復機制，達到結構性支撐的作用。</p>
<p><strong>漸進式膠原再生</strong>：受熱組織會逐步重整，膠原蛋白增生屬漸進過程。效果顯現的程度及時間因個人體質而異，多數於數月內觀察到變化。</p>
<h3>分層治療深度</h3>
<p>配備不同治療深度的探頭，由醫生根據客人的皮膚厚度及鬆弛狀況作針對性規劃。</p>
<p><strong>針對 SMAS 筋膜層</strong>：能量傳達至較深層的 SMAS 筋膜層，有助於下顎線及整體面部輪廓的視覺提升。</p>
<ul><li>針對深層結構支撐</li><li>改善輪廓線條感</li></ul>
<p><strong>針對真皮深層</strong>：針對真皮深層加熱，有助刺激膠原蛋白原生，改善皮膚緊實度。</p>
<ul><li>幫助膠原蛋白重整</li><li>優化皮膚彈性</li></ul>
<p><strong>針對淺層組織</strong>：適用於皮膚較薄或淺層細紋區域，如眼周附近，作精細化處理。</p>
<ul><li>適用於較脆弱區域</li><li>有助改善表面紋理</li></ul>`, "zh-CN": `<p>Ultherapy® PRIME 为获美国 FDA 认可的非入侵性超声波提升疗程。配备 DeepSEE™ 实时超声波影像技术，协助医生于疗程期间透视皮肤底层，将能量精准送达 SMAS 筋膜层及真皮层，有助刺激胶原蛋白与弹力纤维渐进再生，改善皮肤松弛及重塑轮廓。疗程无须开刀，一般无须特定复原期。</p>
<h3>疗程原理：See-Plan-Treat 方案</h3>
<p>结合超声波影像技术与微聚焦能量，针对不同皮肤层次进行热能传递。</p>
<p><strong>DeepSEE™ 实时影像技术</strong>：医生可透过实时影像监测皮下组织（深达 6mm），协助规划能量发放路径，并避开不适宜受热的部位，提升疗程的准确度。</p>
<p><strong>MFU-V 微聚焦能量</strong>：超声波能量聚焦于 SMAS 筋膜层及真皮层，产生微细热凝点，有助启动组织的自我修复机制，达到结构性支撑的作用。</p>
<p><strong>渐进式胶原再生</strong>：受热组织会逐步重整，胶原蛋白增生属渐进过程。效果显现的程度及时间因个人体质而异，多数于数月内观察到变化。</p>
<h3>分层治疗深度</h3>
<p>配备不同治疗深度的探头，由医生根据客人的皮肤厚度及松弛状况作针对性规划。</p>
<p><strong>针对 SMAS 筋膜层</strong>：能量传达至较深层的 SMAS 筋膜层，有助于下颚线及整体面部轮廓的视觉提升。</p>
<ul><li>针对深层结构支撑</li><li>改善轮廓线条感</li></ul>
<p><strong>针对真皮深层</strong>：针对真皮深层加热，有助刺激胶原蛋白原生，改善皮肤紧实度。</p>
<ul><li>帮助胶原蛋白重整</li><li>优化皮肤弹性</li></ul>
<p><strong>针对浅层组织</strong>：适用于皮肤较薄或浅层细纹区域，如眼周附近，作精细化处理。</p>
<ul><li>适用于较脆弱区域</li><li>有助改善表面纹理</li></ul>`, en: `<p>Ultherapy PRIME is an FDA-cleared non-invasive ultrasound lift. DeepSEE™ real-time imaging helps the physician visualise tissue (to about 6 mm) and place micro-focused ultrasound (MFU-V) at the SMAS and dermis to stimulate collagen and elastin. Different transducer depths support SMAS structure, deep dermal firming, and finer work on thinner areas such as around the eyes. Results typically build over weeks to months, with no specific downtime.</p>` },
    points: [
      { "zh-HK": `DeepSEE™ 實時影像，透視皮下深達 6mm`, "zh-CN": `DeepSEE™ 实时影像，透视皮下深达 6mm`, en: `DeepSEE™ real-time imaging to about 6 mm` },
      { "zh-HK": `MFU-V 微聚焦超聲波直達 SMAS 筋膜層`, "zh-CN": `MFU-V 微聚焦超声波直达 SMAS 筋膜层`, en: `MFU-V micro-focused ultrasound to the SMAS` },
      { "zh-HK": `獲 FDA 認可非入侵性療程，無須復原期`, "zh-CN": `获 FDA 认可非入侵性疗程，无须复原期`, en: `FDA-cleared non-invasive treatment, no downtime` }
    ],
    image: "/images/ultherapy-prime-main.jpg",
    faqs: [
      { q: { "zh-HK": `療程後多久才會見到改善？`, "zh-CN": `疗程后多久才会见到改善？`, en: `How soon will I see improvement after Ultherapy PRIME?` }, a: { "zh-HK": `皮膚的變化並非立即發生，而是要待膠原蛋白慢慢再生。不少客人在療程後初期已察覺皮膚的細微變化，明顯的效果多於數星期至數個月內浮現。實際情況會視乎個人體質及日常保養而定。`, "zh-CN": `皮肤的变化并非立即发生，而是要待胶原蛋白慢慢再生。不少客人在疗程后初期已察觉皮肤的细微变化，明显的效果多于数星期至数个月内浮现。实际情况会视乎个人体质及日常保养而定。`, en: `Collagen renewal is gradual. Some notice subtle change early; clearer results often appear over weeks to months, depending on your skin and aftercare.` } },
      { q: { "zh-HK": `做 Ultherapy PRIME 會痛嗎？`, "zh-CN": `做 Ultherapy PRIME 会痛吗？`, en: `Does Ultherapy PRIME hurt?` }, a: { "zh-HK": `當超聲波能量送達皮下組織時，你可能會感到短暫的溫熱或輕微酸感，這正代表能量已到達目標位置。醫生會根據你的耐受程度調整參數，並提供適當的舒緩安排。`, "zh-CN": `当超声波能量送达皮下组织时，你可能会感到短暂的温热或轻微酸感，这正代表能量已到达目标位置。医生会根据你的耐受程度调整参数，并提供适当的舒缓安排。`, en: `You may feel brief warmth or a dull ache when energy reaches the target layer. The physician can adjust settings and comfort measures to your tolerance.` } },
      { q: { "zh-HK": `Ultherapy 與射頻療程有何不同？`, "zh-CN": `Ultherapy 与射频疗程有何不同？`, en: `How does Ultherapy differ from radiofrequency?` }, a: { "zh-HK": `兩者的原理及作用的深度不盡相同。Ultherapy 以微聚焦超聲波把能量集中在較深的 SMAS 筋膜層，主打結構支撐與輪廓提升；射頻療程則透過容積式加熱真皮層，側重整體皮膚緊緻與膚質改善。醫生會按你的需求，建議單獨使用或合併療程。`, "zh-CN": `两者的原理及作用的深度不尽相同。Ultherapy 以微聚焦超声波把能量集中在较深的 SMAS 筋膜层，主打结构支撑与轮廓提升；射频疗程则透过容积式加热真皮层，侧重整体皮肤紧致与肤质改善。医生会按你的需求，建议单独使用或合并疗程。`, en: `Ultherapy focuses ultrasound at deeper SMAS for structural support and contour; RF typically heats a broader dermal volume for overall firmness and texture. A consultation can advise one or a combination.` } },
      { q: { "zh-HK": `Ultherapy PRIME 與之前的版本有什麼分別？`, "zh-CN": `Ultherapy PRIME 与之前的版本有什么分别？`, en: `What is new in Ultherapy PRIME?` }, a: { "zh-HK": `PRIME 是升級版本，配備了更先進的 DeepSEE™ 實時超聲波影像技術及優化的操作系統，讓醫生能獲得更清晰的皮下影像，提升能量投放的精準度與效率，同時改善療程過程的舒適感。`, "zh-CN": `PRIME 是升级版本，配备了更先进的 DeepSEE™ 实时超声波影像技术及优化的操作系统，让医生能获得更清晰的皮下影像，提升能量投放的精准度与效率，同时改善疗程过程的舒适感。`, en: `PRIME upgrades DeepSEE™ imaging and the operating system so the physician can see tissue more clearly and place energy more precisely, often with a more comfortable session.` } }
    ],
  },
  {
    id: "scar-repair",
    category: "signature",
    slug: "scar-repair",
    title: { "zh-HK": `凹凸洞疤痕修復`, "zh-CN": `凹凸洞疤痕修复`, en: `Atrophic Acne Scar Repair` },
    summary: { "zh-HK": `凹凸洞不是表層色素問題，而是真皮層結構性塌陷——我們採用複合式階梯重建策略，分型而治，專治別人治不好的疤痕。`, "zh-CN": `凹凸洞不是表层色素问题，而是真皮层结构性塌陷——我们采用复合式阶梯重建策略，分型而治，专治别人治不好的疤痕。`, en: `Atrophic scars are structural dermal collapse, not surface pigment. We type each scar and rebuild in stages — for cases others cannot improve.` },
    bodyHtml: { "zh-HK": `<p>當激光、微針、煥膚全部試過，凹凸洞依然紋絲不動，你需要的不是更多療程，而是更精准的修復策略。</p><p>在香港，凹凸洞（萎縮性痤瘡疤痕）是最被低估的皮膚問題之一。許多人以為它只是「痘印深了一點」，用過無數美白精華、淡斑膏，甚至做過多次激光，卻發現那些坑洞依然屹立不倒——因為凹凸洞根本不是表層色素問題，而是真皮層膠原蛋白與彈性纖維遭到破壞後，形成的結構性塌陷。</p><p>我們的公司，正是為此而生。</p><p class="dt-h">為什麼凹凸洞這麼難搞？——先搞清楚「洞」的三種形態</p><p>凹凸洞並非單一類型，必須分型而治，否則用錯方法只會越做越糟：</p><div class="dt-card"><strong>冰錐型（Ice Pick）</strong>深而窄，像被冰錐刺穿的孔洞，直徑小於2mm。<span class="dt-tag">常見誤判：常被誤認為粗大毛孔，用普通清潔產品根本無法改善</span></div><div class="dt-card"><strong>車廂型（Boxcar）</strong>邊緣銳利、底部平坦的圓形或橢圓形凹陷，直徑1.5–4mm。<span class="dt-tag">常見誤判：常被誤認為老化鬆弛，用填充式保養品完全無效</span></div><div class="dt-card"><strong>波浪型（Rolling）</strong>表面呈波浪狀起伏，邊緣不明顯，因真皮層纖維拉扯所致。<span class="dt-tag">常見誤判：常被誤認為浮腫或脂肪堆積，錯誤使用燃脂療程反而惡化</span></div><p>我們堅持先診斷、後治療，因為用處理冰錐型的方法去處理波浪型，不單浪費金錢，更可能延誤真正的修復時機。</p><p class="dt-h">我們的治療策略——不是「單一儀器打天下」，而是「復合式階梯重建」</p><p>有別於一般診所「一部激光走天涯」的做法，我們根據凹凸洞的深度、寬度、邊緣形態與皮膚厚度，靈活組合以下技術，分層修復：</p><p class="dt-sub">第一層：深層松解（如適用）</p><p>針對波浪型及較深的車廂型凹凸洞，首先以皮下分離技術，松解拉扯表皮的真皮層纖維束，讓凹陷部位先回復平坦，為後續重建創造空間。</p><p class="dt-sub">第二層：能量刺激</p><p>根據洞型選擇最適合的儀器：</p><p class="dt-point">· 分段式二氧化碳激光：針對冰錐型與車廂型，氣化疤痕組織，刺激大量膠原蛋白新生，是處理深層凹陷疤痕的黃金標準。</p><p>（我們亦會根據個別情況，靈活配合其他輔助能量模式，但核心修復始終以分段式二氧化碳激光為主，確保精准與成效。）</p><p class="dt-sub">第三層：個人化術後修復與長期保養計劃</p><p>凹凸洞治療的成功率，一半來自儀器，一半來自術後修復管理。因此，我們特別重視以下環節：</p><p class="dt-point">· 治療頻率因人而異：我們會根據你的皮膚厚度、修復能力、凹凸洞嚴重程度及對能量的反應，決定每次治療之間的間隔時間。一般建議每4至6個月進行一次評估，而非硬性規定固定次數。部分皮膚修復力較佳者，可能一年只需一次維護治療；皮膚較脆弱者則需更長時間讓膠原穩定再生。</p><p class="dt-point">· 術後家居護理指導：治療後的頭一個月是膠原重塑的黃金期。我們會根據你的皮膚狀況，處方專用修復產品，包括但不限於生長因子精華、高效保濕修復霜、溫和抗氧化劑等，並詳細指導塗抹順序、頻率及用量，確保新生膠原能正確排列，而非雜亂無章地增生。</p><p class="dt-point">· 定期追蹤與調整：我們不是做完療程就結束。我們會安排定期復診，觀察修復進度，必要時調整家居護理方案，確保你在最短時間內達到最佳修復效果。</p><p class="dt-h">我們跟別人的分別——為什麼做得到別人做不到？</p><p class="dt-point">· 不是「套餐式療程」：我們沒有一個「凹凸洞套餐」給所有人。每個人的疤痕組合都不同，我們的方案是度身訂做的。</p><p class="dt-point">· 接受「被轉介」的個案：我們經常接收在其他診所做了多次激光仍無改善、甚至惡化的客人。我們不評論前人，但我們願意挑戰難題。</p><p class="dt-point">· 誠實面對不可行：如果凹凸洞狀況太嚴重，我們不會為了賺取療程費用而勉強進行。我們會如實告知，並建議其他可行方向。</p><p class="dt-h">我們的最終承諾</p><p class="dt-quote">「如果連我們都無法改善，我們會直接告訴你——然後再幫你尋找其他可能的出路。」</p><p>因為我們相信，每一次治療都應該建立在誠實與專業之上，而非銷售業績。</p><p>—</p><p class="dt-h">📍 適合對象</p><p class="dt-point">· 曾接受多次激光、微針、煥膚，凹凸洞仍無明顯改善</p><p class="dt-point">· 凹凸洞伴隨嚴重反黑或色素不均</p><p class="dt-point">· 面部同時存在兩種或以上不同形態的凹陷疤痕</p><p class="dt-point">· 希望找到真正「以病理為本」而非「銷售主導」的治療機構</p><p>如果你或身邊的人正為凹凸洞困擾多年，歡迎帶同過往治療記錄前來咨詢。我們會先為你做詳細的疤痕分型檢測，再提供合理期望與實際建議。</p><p>因為每一道疤痕，都值得被認真對待。</p>`, "zh-CN": `<p>当激光、微针、焕肤全部试过，凹凸洞依然纹丝不动，你需要的不是更多疗程，而是更精准的修复策略。</p><p>在香港，凹凸洞（萎缩性痤疮疤痕）是最被低估的皮肤问题之一。许多人以为它只是「痘印深了一点」，用过无数美白精华、淡斑膏，甚至做过多次激光，却发现那些坑洞依然屹立不倒——因为凹凸洞根本不是表层色素问题，而是真皮层胶原蛋白与弹性纤维遭到破坏后，形成的结构性塌陷。</p><p>我们的公司，正是为此而生。</p><p class="dt-h">为什么凹凸洞这么难搞？——先搞清楚「洞」的三种形态</p><p>凹凸洞并非单一类型，必须分型而治，否则用错方法只会越做越糟：</p><div class="dt-card"><strong>冰锥型（Ice Pick）</strong>深而窄，像被冰锥刺穿的孔洞，直径小于2mm。<span class="dt-tag">常见误判：常被误认为粗大毛孔，用普通清洁产品根本无法改善</span></div><div class="dt-card"><strong>车厢型（Boxcar）</strong>边缘锐利、底部平坦的圆形或椭圆形凹陷，直径1.5–4mm。<span class="dt-tag">常见误判：常被误认为老化松弛，用填充式保养品完全无效</span></div><div class="dt-card"><strong>波浪型（Rolling）</strong>表面呈波浪状起伏，边缘不明显，因真皮层纤维拉扯所致。<span class="dt-tag">常见误判：常被误认为浮肿或脂肪堆积，错误使用燃脂疗程反而恶化</span></div><p>我们坚持先诊断、后治疗，因为用处理冰锥型的方法去处理波浪型，不单浪费金钱，更可能延误真正的修复时机。</p><p class="dt-h">我们的治疗策略——不是「单一仪器打天下」，而是「复合式阶梯重建」</p><p>有别于一般诊所「一部激光走天涯」的做法，我们根据凹凸洞的深度、宽度、边缘形态与皮肤厚度，灵活组合以下技术，分层修复：</p><p class="dt-sub">第一层：深层松解（如适用）</p><p>针对波浪型及较深的车厢型凹凸洞，首先以皮下分离技术，松解拉扯表皮的真皮层纤维束，让凹陷部位先回复平坦，为后续重建创造空间。</p><p class="dt-sub">第二层：能量刺激</p><p>根据洞型选择最适合的仪器：</p><p class="dt-point">· 分段式二氧化碳激光：针对冰锥型与车厢型，气化疤痕组织，刺激大量胶原蛋白新生，是处理深层凹陷疤痕的黄金标准。</p><p>（我们亦会根据个别情况，灵活配合其他辅助能量模式，但核心修复始终以分段式二氧化碳激光为主，确保精准与成效。）</p><p class="dt-sub">第三层：个人化术后修复与长期保养计划</p><p>凹凸洞治疗的成功率，一半来自仪器，一半来自术后修复管理。因此，我们特别重视以下环节：</p><p class="dt-point">· 治疗频率因人而异：我们会根据你的皮肤厚度、修复能力、凹凸洞严重程度及对能量的反应，决定每次治疗之间的间隔时间。一般建议每4至6个月进行一次评估，而非硬性规定固定次数。部分皮肤修复力较佳者，可能一年只需一次维护治疗；皮肤较脆弱者则需更长时间让胶原稳定再生。</p><p class="dt-point">· 术后家居护理指导：治疗后的头一个月是胶原重塑的黄金期。我们会根据你的皮肤状况，处方专用修复产品，包括但不限于生长因子精华、高效保湿修复霜、温和抗氧化剂等，并详细指导涂抹顺序、频率及用量，确保新生胶原能正确排列，而非杂乱无章地增生。</p><p class="dt-point">· 定期追踪与调整：我们不是做完疗程就结束。我们会安排定期复诊，观察修复进度，必要时调整家居护理方案，确保你在最短时间内达到最佳修复效果。</p><p class="dt-h">我们跟别人的分别——为什么做得到别人做不到？</p><p class="dt-point">· 不是「套餐式疗程」：我们没有一个「凹凸洞套餐」给所有人。每个人的疤痕组合都不同，我们的方案是度身订做的。</p><p class="dt-point">· 接受「被转介」的个案：我们经常接收在其他诊所做了多次激光仍无改善、甚至恶化的客人。我们不评论前人，但我们愿意挑战难题。</p><p class="dt-point">· 诚实面对不可行：如果凹凸洞状况太严重，我们不会为了赚取疗程费用而勉强进行。我们会如实告知，并建议其他可行方向。</p><p class="dt-h">我们的最终承诺</p><p class="dt-quote">「如果连我们都无法改善，我们会直接告诉你——然后再帮你寻找其他可能的出路。」</p><p>因为我们相信，每一次治疗都应该建立在诚实与专业之上，而非销售业绩。</p><p>—</p><p class="dt-h">📍 适合对象</p><p class="dt-point">· 曾接受多次激光、微针、焕肤，凹凸洞仍无明显改善</p><p class="dt-point">· 凹凸洞伴随严重反黑或色素不均</p><p class="dt-point">· 面部同时存在两种或以上不同形态的凹陷疤痕</p><p class="dt-point">· 希望找到真正「以病理为本」而非「销售主导」的治疗机构</p><p>如果你或身边的人正为凹凸洞困扰多年，欢迎带同过往治疗记录前来咨询。我们会先为你做详细的疤痕分型检测，再提供合理期望与实际建议。</p><p>因为每一道疤痕，都值得被认真对待。</p>`, en: `<p>Atrophic acne scars form when dermal collagen and elastin collapse. Ice-pick, boxcar and rolling types need different tactics; a single laser for every scar often fails. Care may include subcision for tethered rolling scars, fractional CO₂ for ice-pick and boxcar pits, and personalised aftercare while new collagen organises. Interval and course depend on skin thickness and healing — not a one-size package.</p>` },
    image: "/images/scar-repair-main.jpg",
    faqs: [
      { q: { "zh-HK": `凹凸洞與一般痘印有什麼分別？`, "zh-CN": `凹凸洞与一般痘印有什么分别？`, en: `How do acne scars differ from leftover marks?` }, a: { "zh-HK": `凹凸洞是真皮層膠原蛋白與彈性纖維遭破壞後形成的結構性塌陷，屬萎縮性痤瘡疤痕，並非表層色素問題。用美白精華、淡斑膏等表面產品根本無法改善，必須從真皮層結構重建着手。`, "zh-CN": `凹凸洞是真皮层胶原蛋白与弹性纤维遭破坏后形成的结构性塌陷，属萎缩性痤疮疤痕，并非表层色素问题。用美白精华、淡斑膏等表面产品根本无法改善，必须从真皮层结构重建着手。`, en: `True pitted scars are structural dermal collapse, not surface pigment. Whitening creams cannot rebuild the dermis; treatment starts with typing the scar.` } },
      { q: { "zh-HK": `為什麼做了多次激光還是沒有改善？`, "zh-CN": `为什么做了多次激光还是没有改善？`, en: `Why did several laser courses not help?` }, a: { "zh-HK": `常見原因是「一部激光打天下」、未按洞型分而治之。凹凸洞分冰錐型、車廂型、波浪型三種形態，用錯方法不單浪費金錢，更可能延誤真正修復時機。我們會先做詳細疤痕分型檢測，再制定針對性方案。`, "zh-CN": `常见原因是「一部激光打天下」、未按洞型分而治之。凹凸洞分冰锥型、车厢型、波浪型三种形态，用错方法不单浪费金钱，更可能延误真正修复时机。我们会先做详细疤痕分型检测，再制定针对性方案。`, en: `Using one device for every pit type is a common reason. Ice-pick, boxcar and rolling scars need different plans; we assess morphology before treating.` } },
      { q: { "zh-HK": `凹凸洞治療要做多少次？`, "zh-CN": `凹凸洞治疗要做多少次？`, en: `How many sessions are needed?` }, a: { "zh-HK": `因人而異。我們會根據皮膚厚度、修復能力、嚴重程度及對能量的反應，決定每次治療的間隔。一般建議每 4 至 6 個月評估一次；部分皮膚修復力較佳者可能一年只需一次維護治療，皮膚較脆弱者則需更長時間讓膠原穩定再生。`, "zh-CN": `因人而异。我们会根据皮肤厚度、修复能力、严重程度及对能量的反应，决定每次治疗的间隔。一般建议每 4 至 6 个月评估一次；部分皮肤修复力较佳者可能一年只需一次维护治疗，皮肤较脆弱者则需更长时间让胶原稳定再生。`, en: `It varies. Review is often every 4–6 months. Some need yearly maintenance; more fragile skin may need longer between sessions for collagen to settle.` } },
      { q: { "zh-HK": `治療後如何護理？`, "zh-CN": `治疗后如何护理？`, en: `What aftercare is required?` }, a: { "zh-HK": `術後第一個月是膠原重塑的黃金期。我們會根據皮膚狀況處方專用修復產品（如生長因子精華、高效保濕修復霜、溫和抗氧化劑），詳細指導塗抹順序、頻率及用量，並安排定期復診觀察進度，必要時調整家居護理方案。`, "zh-CN": `术后第一个月是胶原重塑的黄金期。我们会根据皮肤状况处方专用修复产品（如生长因子精华、高效保湿修复霜、温和抗氧化剂），详细指导涂抹顺序、频率及用量，并安排定期复诊观察进度，必要时调整家居护理方案。`, en: `The first month is key for collagen remodelling. We prescribe repair products and review progress rather than ending care after a single visit.` } }
    ],
  },
  {
    id: "pigmentation",
    category: "signature",
    slug: "pigmentation",
    title: { "zh-HK": `頑固性色素疾病治療`, "zh-CN": `顽固性色素疾病治疗`, en: `Resistant Pigment Disorders` },
    summary: { "zh-HK": `專治反黑、太田痣、牛奶斑等頑固性皮膚色素疾病的最後答案——重視診斷，複合式階梯治療，處理別人不敢處理的個案。`, "zh-CN": `专治反黑、太田痣、牛奶斑等顽固性皮肤色素疾病的最后答案——重视诊断，复合式阶梯治疗，处理别人不敢处理的个案。`, en: `A last-resort approach for PIH, nevus of Ota and stubborn congenital pigment — diagnosis first, staged combination care, including cases others decline.` },
    bodyHtml: { "zh-HK": `<p>在香港，很多人以為激光、換膚、美白精華可以解決所有皮膚問題。但我們接觸過太多客人，她們並非沒有求醫，而是試遍了方法，卻換來更深的絕望——有些反黑愈來愈嚴重；有些太田痣被誤診為普通色斑，治療數年毫無寸進；有些牛奶斑（先天色素痣）更被醫生直接告知「無法處理」。</p><p>我們的公司，就是為了填補這個缺口而存在。</p><p class="dt-h">我們不是普通的美容院，而是「皮膚問題的最終轉介站」</p><p>我們專注處理的是市面上大多數機構不願碰、不敢碰、或根本無能力處理的皮膚個案，尤其擅長以下三大範疇：</p><p class="dt-point">1. <strong>反黑（Post-Inflammatory Hyperpigmentation）</strong>：不論是激光後反彈、創傷後色素沉澱，還是長期荷爾蒙波動引起的深層色印，我們採用分段式精準分解技術，配合個人化修復方案，從根源切斷黑色素傳遞，而非僅停留於表面漂白。</p><p class="dt-point">2. <strong>太田痣（Ota's Nevus）</strong>：屬於真皮層深層黑色素細胞增生，傳統表層激光根本無法觸及。我們運用特定波長嘅深層穿透儀器，精準擊碎埋藏於真皮層嘅異常色素細胞，同時保護周邊正常組織，讓多年來被視為「胎記宿命」嘅藍灰色斑塊，得以真正淡退。</p><p class="dt-point">3. <strong>牛奶斑（Congenital Melanocytic Nevus）及各種先天/後天頑固色斑</strong>：對於邊界不清、顏色不均、或伴隨毛髮增生嘅先天性色素痣，我們有別於單一激光方案，而是採用複合式階梯治療策略，分層、分次、分深度處理，將以往被認為「難以清除」嘅斑點，逐步代謝至肉眼不可見。</p><p class="dt-h">為什麼我們做得到，而別人做不到？</p><p class="dt-point">· 不是「一部儀器打天下」：我們根據每一種皮膚病變嘅深度、顏色、邊界、活性，靈活組合不同波長與能量模式，而非千篇一律嘅標準療程。</p><p class="dt-point">· 重視診斷多於治療：我們花最多時間喺皮膚檢測同病因溯源。很多客人嘅「斑」，其實係混合型色素問題，必須先拆解成因，先談治療。</p><p class="dt-point">· 處理別人不敢處理嘅個案：我們樂於接受被其他診所或美容院轉介嘅「棘手案例」，並提供完整嘅風險評估與合理期望管理。</p><p class="dt-h">我們的最終承諾</p><p>我們不敢說能治好「所有」皮膚問題，但我們敢說：</p><p class="dt-quote">「如果連我們都無法處理，我們會直接告訴你——然後再幫你尋找其他可行方向。」</p><p>因為比起賺取一次療程費用，我們更重視嘅，係為每一位帶住困擾而來嘅客人，提供一個誠實、專業、有出路嘅答案。</p><p>---</p><p class="dt-h">📍 適合對象</p><p class="dt-point">· 曾接受多次激光治療，反黑情況反而惡化</p><p class="dt-point">· 面部或身體出現藍灰色、深褐色、邊界不清嘅先天性斑塊</p><p class="dt-point">· 被其他機構拒絕治療，或被告知「冇得搞」</p><p class="dt-point">· 希望搵到一間唔係「銷售主導」，而係「真正以病理為本」嘅皮膚治療機構</p><p>如果你或你身邊嘅人正面對類似困擾，歡迎帶同過往治療記錄嚟諮詢。我哋唔會即時推銷療程，而係先幫你睇清問題本質。</p><p>因為我們相信——每一塊斑點背後，都值得一個被認真對待嘅答案。</p><p class="dt-h">市場常見的治療困境</p><p class="dt-point">· 療程次數頻繁，整體週期動輒數年</p><p class="dt-point">· 術後反黑期易引發焦慮，許多患者中途放棄</p><p class="dt-point">· 面部紅腫結痂影響日常社交與工作</p><p class="dt-point">· 色素殘留、復發或色差問題難以完全避免</p><p class="dt-h">我們的差異化優勢</p><p class="dt-point">· 精準診斷搭配嚴謹參數設定，減少非必要療程次數</p><p class="dt-point">· 完整全週期照護，反黑期間主動跟進解釋，避免患者誤判而中斷</p><p class="dt-point">· 術前術後流程完備，修復期管理更細緻</p><p class="dt-point">· 豐富臨床經驗與參數把控能力，有效降低殘留、復發及色差風險</p><p class="dt-sub">總結一句</p><p class="dt-quote">市場多數僅提供激光操作，我們則提供從評估到修復的全程守護。</p><p>面對太田痣此類深層真皮色素性病變，其治療難度在於色素分布廣泛且層次深淺不一。我們憑藉精準的術前診斷評估、嚴格的儀器參數調控，以及貫穿治療前中後的完整顧客管理系統，能有效應對各種臨床變數，在確保安全性的前提下，為顧客實現漸進且可控的色素淡化成效。</p><p>有別於部分機構僅著重短期肉眼可見的改善，卻輕忽潛在風險管控，我們堅持以嚴謹的臨床標準作業流程，系統性處理這類複雜的真皮色素問題，確保每一次治療都在安全邊界內發揮最大效益。</p>`, "zh-CN": `<p>在香港，很多人以为激光、换肤、美白精华可以解决所有皮肤问题。但我们接触过太多客人，她们并非没有求医，而是试遍了方法，却换来更深的绝望——有些反黑愈来愈严重；有些太田痣被误诊为普通色斑，治疗数年毫无寸进；有些牛奶斑（先天色素痣）更被医生直接告知「无法处理」。</p><p>我们的公司，就是为了填补这个缺口而存在。</p><p class="dt-h">我们不是普通的美容院，而是「皮肤问题的最终转介站」</p><p>我们专注处理的是市面上大多数机构不愿碰、不敢碰、或根本无能力处理的皮肤个案，尤其擅长以下三大范畴：</p><p class="dt-point">1. <strong>反黑（Post-Inflammatory Hyperpigmentation）</strong>：不论是激光后反弹、创伤后色素沉淀，还是长期荷尔蒙波动引起的深层色印，我们采用分段式精准分解技术，配合个人化修复方案，从根源切断黑色素传递，而非仅停留于表面漂白。</p><p class="dt-point">2. <strong>太田痣（Ota's Nevus）</strong>：属于真皮层深层黑色素细胞增生，传统表层激光根本无法触及。我们运用特定波长嘅深层穿透仪器，精准击碎埋藏于真皮层嘅异常色素细胞，同时保护周边正常组织，让多年来被视为「胎记宿命」嘅蓝灰色斑块，得以真正淡退。</p><p class="dt-point">3. <strong>牛奶斑（Congenital Melanocytic Nevus）及各种先天/后天顽固色斑</strong>：对于边界不清、颜色不均、或伴随毛发增生嘅先天性色素痣，我们有别于单一激光方案，而是采用复合式阶梯治疗策略，分层、分次、分深度处理，将以往被认为「难以清除」嘅斑点，逐步代谢至肉眼不可见。</p><p class="dt-h">为什么我们做得到，而别人做不到？</p><p class="dt-point">· 不是「一部仪器打天下」：我们根据每一种皮肤病变嘅深度、颜色、边界、活性，灵活组合不同波长与能量模式，而非千篇一律嘅标准疗程。</p><p class="dt-point">· 重视诊断多于治疗：我们花最多时间喺皮肤检测同病因溯源。很多客人嘅「斑」，其实系混合型色素问题，必须先拆解成因，先谈治疗。</p><p class="dt-point">· 处理别人不敢处理嘅个案：我们乐于接受被其他诊所或美容院转介嘅「棘手案例」，并提供完整嘅风险评估与合理期望管理。</p><p class="dt-h">我们的最终承诺</p><p>我们不敢说能治好「所有」皮肤问题，但我们敢说：</p><p class="dt-quote">「如果连我们都无法处理，我们会直接告诉你——然后再帮你寻找其他可行方向。」</p><p>因为比起赚取一次疗程费用，我们更重视嘅，系为每一位带住困扰而来嘅客人，提供一个诚实、专业、有出路嘅答案。</p><p>---</p><p class="dt-h">📍 适合对象</p><p class="dt-point">· 曾接受多次激光治疗，反黑情况反而恶化</p><p class="dt-point">· 面部或身体出现蓝灰色、深褐色、边界不清嘅先天性斑块</p><p class="dt-point">· 被其他机构拒绝治疗，或被告知「冇得搞」</p><p class="dt-point">· 希望揾到一间唔系「销售主导」，而系「真正以病理为本」嘅皮肤治疗机构</p><p>如果你或你身边嘅人正面对类似困扰，欢迎带同过往治疗记录嚟咨询。我哋唔会即时推销疗程，而系先帮你睇清问题本质。</p><p>因为我们相信——每一块斑点背后，都值得一个被认真对待嘅答案。</p><p class="dt-h">市场常见的治疗困境</p><p class="dt-point">· 疗程次数频繁，整体周期动辄数年</p><p class="dt-point">· 术后反黑期易引发焦虑，许多患者中途放弃</p><p class="dt-point">· 面部红肿结痂影响日常社交与工作</p><p class="dt-point">· 色素残留、复发或色差问题难以完全避免</p><p class="dt-h">我们的差异化优势</p><p class="dt-point">· 精准诊断搭配严谨参数设定，减少非必要疗程次数</p><p class="dt-point">· 完整全周期照护，反黑期间主动跟进解释，避免患者误判而中断</p><p class="dt-point">· 术前术后流程完备，修复期管理更细致</p><p class="dt-point">· 丰富临床经验与参数把控能力，有效降低残留、复发及色差风险</p><p class="dt-sub">总结一句</p><p class="dt-quote">市场多数仅提供激光操作，我们则提供从评估到修复的全程守护。</p><p>面对太田痣此类深层真皮色素性病变，其治疗难度在于色素分布广泛且层次深浅不一。我们凭借精准的术前诊断评估、严格的仪器参数调控，以及贯穿治疗前中后的完整顾客管理系统，能有效应对各种临床变量，在确保安全性的前提下，为顾客实现渐进且可控的色素淡化成效。</p><p>有别于部分机构仅着重短期肉眼可见的改善，却轻忽潜在风险管控，我们坚持以严谨的临床标准作业流程，系统性处理这类复杂的真皮色素问题，确保每一次治疗都在安全边界内发挥最大效益。</p>`, en: `<p>Many pigment problems are mixed-depth or misdiagnosed. Post-inflammatory hyperpigmentation, nevus of Ota and congenital melanocytic lesions need wavelength, depth and interval chosen after assessment — not a single ‘spot laser’. We emphasise diagnosis, realistic expectations and full-cycle aftercare, including the rebound-pigment period.</p>` },
    image: "/images/pigmentation-main.jpg",
    gallery: ["/images/pigmentation/1.jpg","/images/pigmentation/2.jpg","/images/pigmentation/3.jpg","/images/pigmentation/4.jpg","/images/pigmentation/5.jpg","/images/pigmentation/6.jpg","/images/pigmentation/7.jpg"],
    faqs: [
      { q: { "zh-HK": `反黑是什麼？為什麼會發生？`, "zh-CN": `反黑是什么？为什么会发生？`, en: `What is PIH and why does it happen?` }, a: { "zh-HK": `反黑（發炎後色素沉澱，PIH）常見於激光後反彈、創傷後色素沉澱，或長期荷爾蒙波動引起的深層色印。我們採用分段式精準分解技術配合個人化修復方案，從根源切斷黑色素傳遞，而非僅停留在表面漂白。`, "zh-CN": `反黑（发炎后色素沉淀，PIH）常见于激光后反弹、创伤后色素沉淀，或长期荷尔蒙波动引起的深层色印。我们采用分段式精准分解技术配合个人化修复方案，从根源切断黑色素传递，而非仅停留在表面漂白。`, en: `Post-inflammatory hyperpigmentation can follow lasers, injury or hormonal change. We use staged breakdown plus personalised repair rather than bleaching the surface only.` } },
      { q: { "zh-HK": `太田痣能用普通激光去除嗎？`, "zh-CN": `太田痣能用普通激光去除吗？`, en: `Can ordinary lasers remove nevus of Ota?` }, a: { "zh-HK": `太田痣屬真皮層深層黑色素細胞增生，傳統表層激光根本無法觸及。需要特定波長的深層穿透儀器，精準擊碎埋藏於真皮層的異常色素細胞，同時保護周邊正常組織。`, "zh-CN": `太田痣属真皮层深层黑色素细胞增生，传统表层激光根本无法触及。需要特定波长的深层穿透仪器，精准击碎埋藏于真皮层的异常色素细胞，同时保护周边正常组织。`, en: `Nevus of Ota sits in deep dermis; superficial lasers often cannot reach it. Specific deeper wavelengths are used to fragment abnormal pigment while protecting nearby tissue.` } },
      { q: { "zh-HK": `牛奶斑是不是無法處理？`, "zh-CN": `牛奶斑是不是无法处理？`, en: `Are café-au-lait / congenital spots untreatable?` }, a: { "zh-HK": `對於邊界不清、顏色不均或伴隨毛髮增生的先天性色素痣，我們有別於單一激光方案，採用複合式階梯治療策略，分層、分次、分深度處理，逐步代謝至肉眼不可見。`, "zh-CN": `对于边界不清、颜色不均或伴随毛发增生的先天性色素痣，我们有别于单一激光方案，采用复合式阶梯治疗策略，分层、分次、分深度处理，逐步代谢至肉眼不可见。`, en: `For poorly bordered or mixed congenital pigment we use a staged, layered plan rather than a single laser, aiming for gradual fade that is realistic and safer.` } },
      { q: { "zh-HK": `治療前會做什麼評估？`, "zh-CN": `治疗前会做什么评估？`, en: `What happens at the first visit?` }, a: { "zh-HK": `我們花最多時間在皮膚檢測與病因溯源。很多客人的「斑」其實是混合型色素問題，必須先拆解成因再談治療；同時提供完整風險評估與合理期望管理，不會即時推銷療程。`, "zh-CN": `我们花最多时间在皮肤检测与病因溯源。很多客人的「斑」其实是混合型色素问题，必须先拆解成因再谈治疗；同时提供完整风险评估与合理期望管理，不会即时推销疗程。`, en: `Most time goes to skin analysis and tracing causes. Mixed pigment must be unpacked before treatment; we discuss risk and expectations rather than selling a course on the spot.` } }
    ],
  },
  {
    id: "hair-care",
    category: "hair",
    slug: "hair-care",
    title: { "zh-HK": `生髮護髮療程`, "zh-CN": `生发护发疗程`, en: `Hair Growth & Scalp Care` },
    summary: { "zh-HK": `針對脫髮、稀疏與頭皮養護的綜合方案，配合專業頭皮評估制定個人化護理。`, "zh-CN": `针对脱发、稀疏与头皮养护的综合方案，配合专业头皮评估制定个人化护理。`, en: `A comprehensive plan for hair loss, thinning and scalp health, personalised after professional scalp assessment.` },
    bodyHtml: { "zh-HK": `<p>針對脫髮、稀疏與頭皮養護的綜合方案，配合專業頭皮評估制定個人化護理，協助重建健康頭皮狀態。</p>`, "zh-CN": `<p>针对脱发、稀疏与头皮养护的综合方案，配合专业头皮评估制定个人化护理，协助重建健康头皮状态。</p>`, en: `<p>Personalised hair and scalp programmes start with professional assessment to identify causes and rebuild a healthier scalp environment.</p>` },
    points: [
      { "zh-HK": `專業頭皮評估`, "zh-CN": `专业头皮评估`, en: `Professional scalp assessment` },
      { "zh-HK": `個人化養護方案`, "zh-CN": `个人化养护方案`, en: `Personalised care plan` },
      { "zh-HK": `改善頭皮健康與髮質`, "zh-CN": `改善头皮健康与发质`, en: `Improves scalp health and hair quality` }
    ],
    image: "/images/hair-growth-live.jpg",
    faqs: [
      { q: { "zh-HK": `生髮護髮療程需要先做檢查嗎？`, "zh-CN": `生发护发疗程需要先做检查吗？`, en: `Do I need an assessment first?` }, a: { "zh-HK": `建議先進行頭皮評估，由專業人員分析脫髮原因。`, "zh-CN": `建议先进行头皮评估，由专业人员分析脱发原因。`, en: `Yes — a scalp evaluation helps identify causes before treatment.` } },
      { q: { "zh-HK": `生髮護髮療程效果如何維持？`, "zh-CN": `生发护发疗程效果如何维持？`, en: `How do I maintain results?` }, a: { "zh-HK": `需配合療程組合與日常頭皮護理。`, "zh-CN": `需配合疗程组合与日常头皮护理。`, en: `Combine in-clinic care with daily scalp habits as advised.` } },
      { q: { "zh-HK": `生髮護髮療程包含什麼？`, "zh-CN": `生发护发疗程包含什么？`, en: `What does the programme include?` }, a: { "zh-HK": `綜合方案針對脫髮、稀疏與頭皮養護，配合專業頭皮評估制定個人化護理。`, "zh-CN": `综合方案针对脱发、稀疏与头皮养护，配合专业头皮评估制定个人化护理。`, en: `Plans targeting loss, thinning and scalp health after assessment.` } },
      { q: { "zh-HK": `生髮護髮療程適合什麼情況？`, "zh-CN": `生发护发疗程适合什么情况？`, en: `Who is it for?` }, a: { "zh-HK": `適合面對脫髮、髮量稀疏及頭皮亞健康等困擾的客人。`, "zh-CN": `适合面对脱发、发量稀疏及头皮亚健康等困扰的客人。`, en: `Anyone concerned about shedding, thinning density or an unhealthy scalp.` } }
    ],
  },
  {
    id: "follicle",
    category: "hair",
    slug: "follicle",
    title: { "zh-HK": `強化毛囊增髮療程`, "zh-CN": `强化毛囊增发疗程`, en: `Follicle-Strengthening Hair Therapy` },
    summary: { "zh-HK": `強效刺激毛髮細胞，注滲精華技術養毛囊、不傷髮，有效延長毛囊生長週期；同時活化衰落細胞，增強血管輸養能力，加速頭髮生長，對抗規律性脫髮、持續性脫髮、雄激素性脫髮等問題。`, "zh-CN": `强效刺激毛发细胞，注渗精华技术养毛囊、不伤发，有效延长毛囊生长周期；同时活化衰落细胞，增强血管输养能力，加速头发生长，对抗规律性脱发、持续性脱发、雄激素性脱发等问题。`, en: `Infusion care nourishes follicles without damaging hair, extends the growth cycle, revives declining cells and improves vascular support — targeting patterned, persistent and androgenetic hair loss.` },
    bodyHtml: { "zh-HK": `<p>能強效發揮刺激毛髮細胞，注滲精華技術養毛囊、不傷髮，有效延長毛囊生長週期；同時活化衰落細胞，增強血管輸養能力，加速頭髮生長，對抗規律性脫髮、持續性脫髮、雄激素性脫髮等問題。</p>`, "zh-CN": `<p>能强效发挥刺激毛发细胞，注渗精华技术养毛囊、不伤发，有效延长毛囊生长周期；同时活化衰落细胞，增强血管输养能力，加速头发生长，对抗规律性脱发、持续性脱发、雄激素性脱发等问题。</p>`, en: `<p>Infusion technology delivers actives to nourish follicles, extend the growth cycle, revive declining cells and improve vascular support — targeting patterned, persistent and androgenetic hair loss.</p>` },
    points: [
      { "zh-HK": `注滲精華技術、不傷髮`, "zh-CN": `注渗精华技术、不伤发`, en: `Essence-infusion technology, hair-safe` },
      { "zh-HK": `延長毛囊生長週期`, "zh-CN": `延长毛囊生长周期`, en: `Extends the follicle growth cycle` },
      { "zh-HK": `對抗雄激素性脫髮等問題`, "zh-CN": `对抗雄激素性脱发等问题`, en: `Targets androgenetic and other hair-loss types` }
    ],
    image: "/images/hair-growth-live.jpg",
    faqs: [
      { q: { "zh-HK": `強化毛囊增髮療程多久見效？`, "zh-CN": `强化毛囊增发疗程多久见效？`, en: `How soon will I see results?` }, a: { "zh-HK": `毛囊活化需要時間，一般需按療程組合進行。`, "zh-CN": `毛囊活化需要时间，一般需按疗程组合进行。`, en: `Follicle activation takes time; follow the prescribed course.` } },
      { q: { "zh-HK": `強化毛囊增髮療程適合雄性禿嗎？`, "zh-CN": `强化毛囊增发疗程适合雄性秃吗？`, en: `Is it suitable for androgenetic alopecia?` }, a: { "zh-HK": `可針對雄激素性脫髮，但仍建議先評估。`, "zh-CN": `可针对雄激素性脱发，但仍建议先评估。`, en: `It can target androgenetic loss after assessment.` } },
      { q: { "zh-HK": `強化毛囊增髮療程會傷髮嗎？`, "zh-CN": `强化毛囊增发疗程会伤发吗？`, en: `Will it damage my hair?` }, a: { "zh-HK": `採用注滲精華技術養護毛囊、不傷髮，有效延長毛囊生長週期。`, "zh-CN": `采用注渗精华技术养护毛囊、不伤发，有效延长毛囊生长周期。`, en: `Infusion care is designed to nourish follicles without harming hair shafts.` } },
      { q: { "zh-HK": `強化毛囊增髮療程主要針對哪些脫髮？`, "zh-CN": `强化毛囊增发疗程主要针对哪些脱发？`, en: `Which hair-loss types are addressed?` }, a: { "zh-HK": `規律性脫髮、持續性脫髮及雄激素性脫髮等類型。`, "zh-CN": `规律性脱发、持续性脱发及雄激素性脱发等类型。`, en: `Patterned, persistent and androgenetic alopecia, among others.` } }
    ],
  },
  {
    id: "restylane",
    category: "injectables",
    slug: "restylane",
    title: { "zh-HK": `Restylane 透明質酸`, "zh-CN": `Restylane 透明质酸`, en: `Restylane Hyaluronic Acid` },
    summary: { "zh-HK": `國際美容專家多年信賴的高純度非動物透明質酸，對應不同類型的肌膚老化問題、輪廓提升與面形改善。`, "zh-CN": `国际美容专家多年信赖的高纯度非动物透明质酸，对应不同类型的肌肤老化问题、轮廓提升与面形改善。`, en: `High-purity non-animal HA trusted by aesthetic specialists for ageing concerns, contour lift and facial shaping.` },
    bodyHtml: { "zh-HK": `<p>Restylane透明質酸在國際上多年來受美容專家信賴，以先進科技技術，製定高純度、安全的非動物透明質酸美容成份。Restylane透明質酸品牌對應不同類型的肌膚老化問題、輪廓提升、面形改善。</p>`, "zh-CN": `<p>Restylane透明质酸在国际上多年来受美容专家信赖，以先进科技技术，制定高纯度、安全的非动物透明质酸美容成份。Restylane透明质酸品牌对应不同类型的肌肤老化问题、轮廓提升、面形改善。</p>`, en: `<p>Restylane is a trusted non-animal HA portfolio addressing volume loss, contour lift and facial balance across product ranges tailored to different goals.</p>` },
    points: [
      { "zh-HK": `高純度非動物透明質酸`, "zh-CN": `高纯度非动物透明质酸`, en: `High-purity non-animal hyaluronic acid` },
      { "zh-HK": `多系列對應不同需求`, "zh-CN": `多系列对应不同需求`, en: `Multiple ranges for different needs` },
      { "zh-HK": `輪廓提升與面形改善`, "zh-CN": `轮廓提升与面形改善`, en: `Contour lift and facial shaping` }
    ],
    image: "/images/inj-restylane@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Restylane 與其他透明質酸有何分別？`, "zh-CN": `Restylane 与其他透明质酸有何分别？`, en: `How does Restylane differ from other HA fillers?` }, a: { "zh-HK": `不同系列各有特色，建議面診評估後選擇。`, "zh-CN": `不同系列各有特色，建议面诊评估后选择。`, en: `Each line has distinct rheology; choose after consultation.` } },
      { q: { "zh-HK": `Restylane 效果維持多久？`, "zh-CN": `Restylane 效果维持多久？`, en: `How long do Restylane results last?` }, a: { "zh-HK": `視產品與部位而定，一般數月至一年。`, "zh-CN": `视产品与部位而定，一般数月至一年。`, en: `Typically months to about a year, depending on product and area.` } },
      { q: { "zh-HK": `Restylane 屬於動物來源嗎？`, "zh-CN": `Restylane 属于动物来源吗？`, en: `Is Restylane animal-derived?` }, a: { "zh-HK": `以先進科技製成高純度、安全的非動物透明質酸美容成份。`, "zh-CN": `以先进科技制成高纯度、安全的非动物透明质酸美容成份。`, en: `No — high-purity non-animal hyaluronic acid.` } },
      { q: { "zh-HK": `Restylane 可以改善什麼？`, "zh-CN": `Restylane 可以改善什么？`, en: `What can Restylane improve?` }, a: { "zh-HK": `對應不同類型的肌膚老化問題、輪廓提升與面形改善。`, "zh-CN": `对应不同类型的肌肤老化问题、轮廓提升与面形改善。`, en: `Ageing-related volume loss, contour and facial shape.` } }
    ],
  },
  {
    id: "profhilo",
    category: "injectables",
    slug: "profhilo",
    title: { "zh-HK": `Profhilo 逆時針透明質酸`, "zh-CN": `Profhilo 逆时针透明质酸`, en: `Profhilo Bio-Remodelling HA` },
    summary: { "zh-HK": `由國際大型製藥公司 IBSA 研發，極高濃度純透明質酸，刺激 12 倍膠原增生，高效重塑組織、改善皮膚鬆弛。`, "zh-CN": `由国际大型制药公司 IBSA 研发，极高浓度纯透明质酸，刺激 12 倍胶原增生，高效重塑组织、改善皮肤松弛。`, en: `IBSA high-concentration pure HA to stimulate collagen (cited as 12×), remodel tissue and improve laxity.` },
    bodyHtml: { "zh-HK": `<p>Profhilo逆時針透明質酸由國際大型製藥公司IBSA研發，其專利技術蘊含極高濃度的純透明質酸，具提升活化膠原蛋白、彈性蛋白和日漸流失的脂肪細胞等美容效用，刺激12倍膠原增生。高效重塑組織，改善皮膚鬆弛。</p>`, "zh-CN": `<p>Profhilo逆时针透明质酸由国际大型制药公司IBSA研发，其专利技术蕴含极高浓度的纯透明质酸，具提升活化胶原蛋白、弹性蛋白和日渐流失的脂肪细胞等美容效用，刺激12倍胶原增生。高效重塑组织，改善皮肤松弛。</p>`, en: `<p>Profhilo from IBSA delivers high-concentration pure HA that supports collagen, elastin and tissue remodelling — often described as stimulating multi-fold collagen response — to improve laxity and skin quality rather than heavy local shaping.</p>` },
    points: [
      { "zh-HK": `IBSA 專利技術`, "zh-CN": `IBSA 专利技术`, en: `IBSA patented technology` },
      { "zh-HK": `刺激 12 倍膠原增生`, "zh-CN": `刺激 12 倍胶原增生`, en: `Stimulates about 12× collagen response` },
      { "zh-HK": `改善皮膚鬆弛與質地`, "zh-CN": `改善皮肤松弛与质地`, en: `Improves laxity and skin quality` }
    ],
    image: "/images/inj-profhilo@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Profhilo 和一般玻尿酸有何不同？`, "zh-CN": `Profhilo 和一般玻尿酸有何不同？`, en: `How is Profhilo different from regular fillers?` }, a: { "zh-HK": `更偏向生物再塑與膚質改善，而非局部大幅塑形。`, "zh-CN": `更偏向生物再塑与肤质改善，而非局部大幅塑形。`, en: `It focuses on bio-remodelling and skin quality, not large-volume shaping.` } },
      { q: { "zh-HK": `Profhilo 需要幾次療程？`, "zh-CN": `Profhilo 需要几次疗程？`, en: `How many sessions do I need?` }, a: { "zh-HK": `常見為療程組合，具體次數依面診評估而定。`, "zh-CN": `常见为疗程组合，具体次数依面诊评估而定。`, en: `Usually a short course; exact plans follow consultation.` } },
      { q: { "zh-HK": `Profhilo 為何能刺激膠原？`, "zh-CN": `Profhilo 为何能刺激胶原？`, en: `Why does Profhilo stimulate collagen?` }, a: { "zh-HK": `IBSA 專利技術蘊含極高濃度的純透明質酸，可刺激約 12 倍膠原增生。`, "zh-CN": `IBSA 专利技术蕴含极高浓度的纯透明质酸，可刺激约 12 倍胶原增生。`, en: `Its patented high-concentration HA formulation supports collagen response.` } },
      { q: { "zh-HK": `Profhilo 主要改善什麼？`, "zh-CN": `Profhilo 主要改善什么？`, en: `What does Profhilo improve?` }, a: { "zh-HK": `提升活化膠原蛋白、彈性蛋白及脂肪細胞，高效重塑組織、改善皮膚鬆弛。`, "zh-CN": `提升活化胶原蛋白、弹性蛋白及脂肪细胞，高效重塑组织、改善皮肤松弛。`, en: `Laxity, tissue support and overall skin quality.` } }
    ],
  },
  {
    id: "juvederm",
    category: "injectables",
    slug: "juvederm",
    title: { "zh-HK": `Juvéderm 透明質酸`, "zh-CN": `Juvéderm 透明质酸`, en: `Juvéderm Hyaluronic Acid` },
    summary: { "zh-HK": `獲美國 FDA、歐盟 CE 認證，全球唯一獲 FDA 認證首次療程後維持長達一年功效，有效撫平皺紋、增強輪廓、改善鎖水度。`, "zh-CN": `获美国 FDA、欧盟 CE 认证，全球唯一获 FDA 认证首次疗程后维持长达一年功效，有效抚平皱纹、增强轮廓、改善锁水度。`, en: `FDA- and CE-cleared HA; the first treatment’s effect is cited as lasting up to a year — softening wrinkles, enhancing contour and improving hydration.` },
    bodyHtml: { "zh-HK": `<p>Juvéderm透明質酸獲美國FDA、歐盟CE認證，全球唯一獲美國FDA認證在首次療程後能維持長達一年功效，屬非動物穩定性透明質酸，有效撫平肌膚皺紋、增強面形輪廓，同時改善皮膚鎖水度。</p>`, "zh-CN": `<p>Juvéderm透明质酸获美国FDA、欧盟CE认证，全球唯一获美国FDA认证在首次疗程后能维持长达一年功效，属非动物稳定性透明质酸，有效抚平肌肤皱纹、增强面形轮廓，同时改善皮肤锁水度。</p>`, en: `<p>Juvéderm is FDA- and CE-cleared non-animal stabilised HA used to soften wrinkles, enhance contours and improve hydration — with lasting results often cited up to a year after an initial session.</p>` },
    points: [
      { "zh-HK": `FDA/CE 認證`, "zh-CN": `FDA/CE 认证`, en: `FDA/CE cleared` },
      { "zh-HK": `維持效果長達一年`, "zh-CN": `维持效果长达一年`, en: `Results lasting up to one year` },
      { "zh-HK": `撫平皺紋、增強輪廓`, "zh-CN": `抚平皱纹、增强轮廓`, en: `Softens wrinkles and enhances contours` }
    ],
    image: "/images/inj-juvederm@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Juvéderm 維持多久？`, "zh-CN": `Juvéderm 维持多久？`, en: `How long does Juvéderm last?` }, a: { "zh-HK": `首次療程後效果可長達一年。`, "zh-CN": `首次疗程后效果可长达一年。`, en: `Up to about a year after a first treatment, depending on product and area.` } },
      { q: { "zh-HK": `Juvéderm 安全嗎？`, "zh-CN": `Juvéderm 安全吗？`, en: `Is Juvéderm safe?` }, a: { "zh-HK": `獲美國 FDA 及歐盟 CE 認證。`, "zh-CN": `获美国 FDA 及欧盟 CE 认证。`, en: `It carries FDA and CE clearances.` } },
      { q: { "zh-HK": `Juvéderm 是動物來源嗎？`, "zh-CN": `Juvéderm 是动物来源吗？`, en: `Is it animal-derived?` }, a: { "zh-HK": `屬非動物穩定性透明質酸，安心可靠。`, "zh-CN": `属非动物稳定性透明质酸，安心可靠。`, en: `No — non-animal stabilised HA.` } },
      { q: { "zh-HK": `Juvéderm 能改善什麼？`, "zh-CN": `Juvéderm 能改善什么？`, en: `What can it improve?` }, a: { "zh-HK": `有效撫平肌膚皺紋、增強面形輪廓，同時改善皮膚鎖水度。`, "zh-CN": `有效抚平肌肤皱纹、增强面形轮廓，同时改善皮肤锁水度。`, en: `Wrinkles, facial contour and skin hydration.` } }
    ],
  },
  {
    id: "xeomin",
    category: "injectables",
    slug: "xeomin",
    title: { "zh-HK": `Xeomin 肉毒桿菌`, "zh-CN": `Xeomin 肉毒杆菌`, en: `Xeomin Botulinum Toxin` },
    summary: { "zh-HK": `德國 Merz 藥廠研發，新一代純淨肉毒桿菌，有效阻斷神經傳遞，為減淡中至深度皺紋而設，並防止新皺紋形成。`, "zh-CN": `德国 Merz 药厂研发，新一代纯净肉毒杆菌，有效阻断神经传递，为减淡中至深度皱纹而设，并防止新皱纹形成。`, en: `Merz purified botulinum toxin that blocks nerve signals to soften moderate-to-deep dynamic wrinkles and help prevent new creases.` },
    bodyHtml: { "zh-HK": `<p>Xeomin肉毒桿菌由德國Merz藥廠研發，獲美國FDA、歐盟CE認證。Xeomin是新一代純淨的肉毒桿菌，能有效阻斷引致肌肉收縮的神經細胞訊息傳遞功能，為減淡中至深度皺紋而設，使導致動態皺紋的肌肉得以放鬆，令面部線條變得更平滑，並防止新皺紋形成。</p>`, "zh-CN": `<p>Xeomin肉毒杆菌由德国Merz药厂研发，获美国FDA、欧盟CE认证。Xeomin是新一代纯净的肉毒杆菌，能有效阻断引致肌肉收缩的神经细胞讯息传递功能，为减淡中至深度皱纹而设，使导致动态皱纹的肌肉得以放松，令面部线条变得更平滑，并防止新皱纹形成。</p>`, en: `<p>Xeomin by Merz (FDA/CE) is a purified botulinum toxin A that blocks acetylcholine release at the neuromuscular junction, relaxing overactive muscles that form dynamic lines and helping prevent new creases.</p>` },
    points: [
      { "zh-HK": `Merz 藥廠、FDA/CE 認證`, "zh-CN": `Merz 药厂、FDA/CE 认证`, en: `Merz, FDA/CE cleared` },
      { "zh-HK": `阻斷神經訊息傳遞`, "zh-CN": `阻断神经讯息传递`, en: `Blocks neuromuscular signalling` },
      { "zh-HK": `減淡動態紋、防止新紋`, "zh-CN": `减淡动态纹、防止新纹`, en: `Softens dynamic lines and helps prevent new ones` }
    ],
    image: "/images/inj-xeomin@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Xeomin 多久見效？`, "zh-CN": `Xeomin 多久见效？`, en: `When will Xeomin take effect?` }, a: { "zh-HK": `一般數天至一週逐漸見效。`, "zh-CN": `一般数天至一周逐渐见效。`, en: `Usually over several days to about a week.` } },
      { q: { "zh-HK": `Xeomin 效果維持多久？`, "zh-CN": `Xeomin 效果维持多久？`, en: `How long do results last?` }, a: { "zh-HK": `約 3–6 個月，因人而異。`, "zh-CN": `约 3–6 个月，因人而异。`, en: `About 3–6 months, individually variable.` } },
      { q: { "zh-HK": `Xeomin 如何發揮作用？`, "zh-CN": `Xeomin 如何发挥作用？`, en: `How does Xeomin work?` }, a: { "zh-HK": `阻斷引致肌肉收縮的神經細胞訊息傳遞，使導致動態皺紋的肌肉得以放鬆。`, "zh-CN": `阻断引致肌肉收缩的神经细胞讯息传递，使导致动态皱纹的肌肉得以放松。`, en: `It interrupts nerve signals that trigger muscle contraction.` } },
      { q: { "zh-HK": `Xeomin 由哪個藥廠研發？`, "zh-CN": `Xeomin 由哪个药厂研发？`, en: `Who manufactures Xeomin?` }, a: { "zh-HK": `由德國 Merz 藥廠研發，獲美國 FDA 及歐盟 CE 認證。`, "zh-CN": `由德国 Merz 药厂研发，获美国 FDA 及欧盟 CE 认证。`, en: `Merz (Germany), with FDA and CE clearances.` } }
    ],
  },
  {
    id: "botox",
    category: "injectables",
    slug: "botox",
    title: { "zh-HK": `Botox 肉毒桿菌`, "zh-CN": `Botox 肉毒杆菌`, en: `Botox Botulinum Toxin` },
    summary: { "zh-HK": `榮獲美國 FDA 認證，全球銷量逾一億瓶。療程只需 10 分鐘，達致去皺、面形改善與提升，並可減少流汗。`, "zh-CN": `荣获美国 FDA 认证，全球销量逾一亿瓶。疗程只需 10 分钟，达致去皱、面形改善与提升，并可减少流汗。`, en: `FDA-cleared toxin with extensive global use. Sessions take about 10 minutes for wrinkle relaxation, facial shaping and sweat reduction.` },
    bodyHtml: { "zh-HK": `<p>Botox肉毒桿菌榮獲美國FDA認證，全球銷量高達一億瓶，是國際上極受信賴的美容選擇，肉毒桿菌能放鬆肌肉，療程只需10分鐘，達致去皺、面形改善、面形提升等美容效果，並可針對流汗劇烈人士，提供減少流汗治療。</p>`, "zh-CN": `<p>Botox肉毒杆菌荣获美国FDA认证，全球销量高达一亿瓶，是国际上极受信赖的美容选择，肉毒杆菌能放松肌肉，疗程只需10分钟，达致去皱、面形改善、面形提升等美容效果，并可针对流汗剧烈人士，提供减少流汗治疗。</p>`, en: `<p>Botox (FDA-cleared) temporarily relaxes targeted muscles for wrinkle reduction, facial contouring and selected hyperhidrosis care. Sessions often take about 10 minutes.</p>` },
    points: [
      { "zh-HK": `FDA 認證、全球信賴`, "zh-CN": `FDA 认证、全球信赖`, en: `FDA-cleared, globally trusted` },
      { "zh-HK": `療程僅約 10 分鐘`, "zh-CN": `疗程仅约 10 分钟`, en: `Sessions around 10 minutes` },
      { "zh-HK": `去皺、瘦面、減少流汗`, "zh-CN": `去皱、瘦面、减少流汗`, en: `Wrinkle reduction, facial slimming, hyperhidrosis` }
    ],
    image: "/images/inj-botox@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Botox 療程時間多久？`, "zh-CN": `Botox 疗程时间多久？`, en: `How long is a Botox appointment?` }, a: { "zh-HK": `約 10 分鐘，方便快捷。`, "zh-CN": `约 10 分钟，方便快捷。`, en: `Often around 10 minutes.` } },
      { q: { "zh-HK": `Botox 有沒有副作用？`, "zh-CN": `Botox 有没有副作用？`, en: `Are there side effects?` }, a: { "zh-HK": `需由專業人士評估與注射，按建議進行。`, "zh-CN": `需由专业人士评估与注射，按建议进行。`, en: `Assessment and injection by qualified clinicians reduce risk; follow advice.` } },
      { q: { "zh-HK": `Botox 可以改善什麼？`, "zh-CN": `Botox 可以改善什么？`, en: `What can Botox improve?` }, a: { "zh-HK": `達致去皺、面形改善與面形提升等美容效果，並可減少流汗。`, "zh-CN": `达致去皱、面形改善与面形提升等美容效果，并可减少流汗。`, en: `Dynamic wrinkles, facial shaping and localised sweating.` } },
      { q: { "zh-HK": `Botox 是否值得信賴？`, "zh-CN": `Botox 是否值得信赖？`, en: `Is Botox trusted?` }, a: { "zh-HK": `獲美國 FDA 認證，全球銷量高達一億瓶，國際上極受信賴。`, "zh-CN": `获美国 FDA 认证，全球销量高达一亿瓶，国际上极受信赖。`, en: `FDA-cleared with extensive global clinical use.` } }
    ],
  },
  {
    id: "dysport",
    category: "injectables",
    slug: "dysport",
    title: { "zh-HK": `Dysport 肉毒桿菌素`, "zh-CN": `Dysport 肉毒杆菌素`, en: `Dysport Botulinum Toxin` },
    summary: { "zh-HK": `歐洲 A 型肉毒桿菌素，英國原廠生產，獲 60 多國授權及註冊並獲香港衛生署認可，瘦面、瘦小腿、消除皺紋，效果自然。`, "zh-CN": `欧洲 A 型肉毒杆菌素，英国原厂生产，获 60 多国授权及注册并获香港卫生署认可，瘦面、瘦小腿、消除皱纹，效果自然。`, en: `European type-A toxin manufactured in the UK, authorised in 60+ countries and recognised by Hong Kong DOH — facial slimming, calves and wrinkles with a natural look.` },
    bodyHtml: { "zh-HK": `<p>Dysport是歐洲A型肉毒桿菌素，獲美國FDA認證，英國原廠生產，全球被廣泛使用。Dysport可使過度收縮的小肌肉放鬆，達至瘦面、瘦小腿，並可消除皺紋，讓臉部肌膚回復光滑。肉毒桿菌只會在治療部位發生作用，不會影響其他肌肉，效果自然不僵硬。經過十多年的臨床驗證及科研發展，現已獲得60多個國家的授權及註冊，並獲香港衛生署認可。</p>`, "zh-CN": `<p>Dysport是欧洲A型肉毒杆菌素，获美国FDA认证，英国原厂生产，全球被广泛使用。Dysport可使过度收缩的小肌肉放松，达至瘦面、瘦小腿，并可消除皱纹，让脸部肌肤回复光滑。肉毒杆菌只会在治疗部位发生作用，不会影响其他肌肉，效果自然不僵硬。经过十多年的临床验证及科研发展，现已获得60多个国家的授权及注册，并获香港卫生署认可。</p>`, en: `<p>Dysport (FDA-cleared, UK-manufactured) relaxes overactive muscles for facial slimming, calf contouring and wrinkle softening with a natural look limited to treated sites. Widely authorised internationally and recognised by Hong Kong DOH.</p>` },
    points: [
      { "zh-HK": `FDA 認證、英國原廠`, "zh-CN": `FDA 认证、英国原厂`, en: `FDA-cleared, UK-manufactured` },
      { "zh-HK": `瘦面、瘦小腿、消紋`, "zh-CN": `瘦面、瘦小腿、消纹`, en: `Facial/calf slimming and wrinkle softening` },
      { "zh-HK": `香港衛生署認可`, "zh-CN": `香港卫生署认可`, en: `Recognised by Hong Kong Department of Health` }
    ],
    image: "/images/inj-dysport@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Dysport 效果自然嗎？`, "zh-CN": `Dysport 效果自然吗？`, en: `Does Dysport look natural?` }, a: { "zh-HK": `作用只限治療部位，效果自然不僵硬。`, "zh-CN": `作用只限治疗部位，效果自然不僵硬。`, en: `Effects stay localised to treated muscles when dosed correctly.` } },
      { q: { "zh-HK": `Dysport 多久見效？`, "zh-CN": `Dysport 多久见效？`, en: `When will I see results?` }, a: { "zh-HK": `通常數天至一週內逐漸見效。`, "zh-CN": `通常数天至一周内逐渐见效。`, en: `Usually within several days to a week.` } },
      { q: { "zh-HK": `Dysport 可以處理哪些部位？`, "zh-CN": `Dysport 可以处理哪些部位？`, en: `Which areas can Dysport treat?` }, a: { "zh-HK": `可瘦面、瘦小腿，並可消除皺紋，讓臉部肌膚回復光滑。`, "zh-CN": `可瘦面、瘦小腿，并可消除皱纹，让脸部肌肤回复光滑。`, en: `Facial slimming, calves and dynamic wrinkles.` } },
      { q: { "zh-HK": `Dysport 認證情況如何？`, "zh-CN": `Dysport 认证情况如何？`, en: `What approvals does Dysport have?` }, a: { "zh-HK": `獲美國 FDA 認證、英國原廠生產，已獲 60 多國授權註冊，並獲香港衛生署認可。`, "zh-CN": `获美国 FDA 认证、英国原厂生产，已获 60 多国授权注册，并获香港卫生署认可。`, en: `FDA clearance, UK manufacture, 60+ country authorisations and HK DOH recognition.` } }
    ],
  },
  {
    id: "neauvia",
    category: "injectables",
    slug: "neauvia",
    title: { "zh-HK": `Neauvia Hydro Deluxe 冰冰針`, "zh-CN": `Neauvia Hydro Deluxe 冰冰针`, en: `Neauvia Hydro Deluxe Skin Booster` },
    summary: { "zh-HK": `專有透明質酸技術鎖緊肌膚保濕度，塑造柔滑自然肌質；極細微鈣粒子滲透肌底，持續刺激自生膠原蛋白。`, "zh-CN": `专有透明质酸技术锁紧肌肤保湿度，塑造柔滑自然肌质；极细微钙粒子渗透肌底，持续刺激自生胶原蛋白。`, en: `Proprietary HA locks in hydration for smoother texture; fine calcium microspheres reach the dermis to stimulate ongoing collagen.` },
    bodyHtml: { "zh-HK": `<p>Neauvia Hydro Deluxe冰冰針專有透明質酸技術有效鎖緊肌膚保濕度，塑造柔滑自然肌質，使皮膚表面富彈性，緊緻面部毛孔，提亮亮白膚色。極細的微鈣粒子能滲透肌底，持續刺激自生膠原蛋白，維持長效保濕緊緻作用。</p>`, "zh-CN": `<p>Neauvia Hydro Deluxe冰冰针专有透明质酸技术有效锁紧肌肤保湿度，塑造柔滑自然肌质，使皮肤表面富弹性，紧致面部毛孔，提亮亮白肤色。极细的微钙粒子能渗透肌底，持续刺激自生胶原蛋白，维持长效保湿紧致作用。</p>`, en: `<p>Neauvia Hydro Deluxe locks in hydration for smoother texture, refined pores and brighter tone. Fine calcium microspheres support ongoing collagen stimulation for longer-lasting firmness.</p>` },
    points: [
      { "zh-HK": `鎖水保濕、提亮膚色`, "zh-CN": `锁水保湿、提亮肤色`, en: `Locks in hydration and brightens tone` },
      { "zh-HK": `微鈣粒子刺激膠原自生`, "zh-CN": `微钙粒子刺激胶原自生`, en: `Calcium microspheres support collagen` },
      { "zh-HK": `長效保濕緊緻`, "zh-CN": `长效保湿紧致`, en: `Longer-lasting moisture and firmness` }
    ],
    image: "/images/inj-neauvia@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Neauvia 冰冰針適合什麼肌膚？`, "zh-CN": `Neauvia 冰冰针适合什么肌肤？`, en: `Who is Neauvia for?` }, a: { "zh-HK": `適合追求保濕、提亮與毛孔改善的客人。`, "zh-CN": `适合追求保湿、提亮与毛孔改善的客人。`, en: `Those seeking hydration, brightness and pore refinement.` } },
      { q: { "zh-HK": `Neauvia 冰冰針多久見效？`, "zh-CN": `Neauvia 冰冰针多久见效？`, en: `When will I see results?` }, a: { "zh-HK": `保濕效果較快，膠原再生需時間。`, "zh-CN": `保湿效果较快，胶原再生需时间。`, en: `Hydration is often quick; collagen benefits build over time.` } },
      { q: { "zh-HK": `Neauvia 冰冰針是什麼原理？`, "zh-CN": `Neauvia 冰冰针是什么原理？`, en: `How does it work?` }, a: { "zh-HK": `專有透明質酸技術鎖水保濕，極細微鈣粒子滲透肌底持續刺激自生膠原蛋白。`, "zh-CN": `专有透明质酸技术锁水保湿，极细微钙粒子渗透肌底持续刺激自生胶原蛋白。`, en: `HA hydrates while calcium microspheres stimulate dermal collagen.` } },
      { q: { "zh-HK": `Neauvia 冰冰針效果有何特點？`, "zh-CN": `Neauvia 冰冰针效果有何特点？`, en: `What results can I expect?` }, a: { "zh-HK": `塑造柔滑自然肌質，緊緻毛孔、提亮亮白膚色，效果長效。`, "zh-CN": `塑造柔滑自然肌质，紧致毛孔、提亮亮白肤色，效果长效。`, en: `Softer texture, refined pores and brighter, firmer-looking skin.` } }
    ],
  },
  {
    id: "radiesse",
    category: "injectables",
    slug: "radiesse",
    title: { "zh-HK": `Radiesse 微晶瓷`, "zh-CN": `Radiesse 微晶瓷`, en: `Radiesse Calcium Hydroxylapatite` },
    summary: { "zh-HK": `鈣磷合成化合物，成份與人體牙齒骨骼相近，可塑性高、塑形即時效果優秀，適用額頭、鼻、太陽穴、蘋果肌、下巴等。`, "zh-CN": `钙磷合成化合物，成份与人体牙齿骨骼相近，可塑性高、塑形即时效果优秀，适用额头、鼻、太阳穴、苹果肌、下巴等。`, en: `Calcium-phosphate compound similar to minerals in bone and teeth — highly mouldable for immediate shaping of forehead, nose, temples, cheeks, chin and more.` },
    bodyHtml: { "zh-HK": `<p>Radiesse微晶瓷是生物科技合成的化合物，主結構要由鈣跟磷組成，與人體牙齒及骨骼中的成份相近。Radiesse微晶瓷質地可塑性高且有彈性，塑形即時效果優秀，熱門的塑形部位有額頭、鼻、太陽穴、蘋果肌、法令紋、下巴、手背。</p>`, "zh-CN": `<p>Radiesse微晶瓷是生物科技合成的化合物，主结构要由钙跟磷组成，与人体牙齿及骨骼中的成份相近。Radiesse微晶瓷质地可塑性高且有弹性，塑形即时效果优秀，热门的塑形部位有额头、鼻、太阳穴、苹果肌、法令纹、下巴、手背。</p>`, en: `<p>Radiesse is a CaHA-based compound similar to minerals in bone and teeth. It offers elastic mouldability for immediate shaping of forehead, nose, temples, cheeks, nasolabial folds, chin and hands.</p>` },
    points: [
      { "zh-HK": `成份與人體骨骼相近`, "zh-CN": `成份与人体骨骼相近`, en: `Composition similar to minerals in bone` },
      { "zh-HK": `即時塑形效果`, "zh-CN": `即时塑形效果`, en: `Immediate shaping` },
      { "zh-HK": `適用多個輪廓部位`, "zh-CN": `适用多个轮廓部位`, en: `Suitable for multiple contour areas` }
    ],
    image: "/images/inj-radiesse@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Radiesse 塑形即時見效嗎？`, "zh-CN": `Radiesse 塑形即时见效吗？`, en: `Are Radiesse results immediate?` }, a: { "zh-HK": `是，即時塑形效果優秀。`, "zh-CN": `是，即时塑形效果优秀。`, en: `Yes — contouring is typically visible right away.` } },
      { q: { "zh-HK": `Radiesse 安全嗎？`, "zh-CN": `Radiesse 安全吗？`, en: `Is Radiesse biocompatible?` }, a: { "zh-HK": `成份與人體骨齒相近，相容性高。`, "zh-CN": `成份与人体骨齿相近，相容性高。`, en: `Its mineral profile closely resembles bone/teeth components.` } },
      { q: { "zh-HK": `Radiesse 可以用在哪些部位？`, "zh-CN": `Radiesse 可以用在哪些部位？`, en: `Which areas can be treated?` }, a: { "zh-HK": `額頭、鼻、太陽穴、蘋果肌、法令紋、下巴、手背等熱門塑形部位。`, "zh-CN": `额头、鼻、太阳穴、苹果肌、法令纹、下巴、手背等热门塑形部位。`, en: `Forehead, nose, temples, cheeks, folds, chin, hands and more.` } },
      { q: { "zh-HK": `Radiesse 是什麼成份？`, "zh-CN": `Radiesse 是什么成份？`, en: `What is Radiesse made of?` }, a: { "zh-HK": `生物科技合成的化合物，主要由鈣跟磷組成，與人體牙齒及骨骼成份相近。`, "zh-CN": `生物科技合成的化合物，主要由钙跟磷组成，与人体牙齿及骨骼成份相近。`, en: `A synthetic calcium-phosphate compound with high mouldability.` } }
    ],
  },
  {
    id: "derma-veil",
    category: "injectables",
    slug: "derma-veil",
    title: { "zh-HK": `Derma Veil 童顏針`, "zh-CN": `Derma Veil 童颜针`, en: `Derma Veil Collagen Stimulator` },
    summary: { "zh-HK": `獨特「3R 微分子膠原技術」深入真皮層，激活纖維母細胞，達致再生嫩白膚質、重塑年輕輪廓、自然逆轉肌齡。`, "zh-CN": `独特「3R 微分子胶原技术」深入真皮层，激活纤维母细胞，达致再生嫩白肤质、重塑年轻轮廓、自然逆转肌龄。`, en: `3R micro-collagen technology reaches the dermis to activate fibroblasts — brighter texture, youthful contours and gradual rejuvenation.` },
    bodyHtml: { "zh-HK": `<p>Derma Veil童顏針擁有獨特「3R微分子膠原技術」，深入真皮層，激活強化纖維母細胞生產力，令膠原大量增生，達致再生嫩白膚質、重塑年輕輪廓、自然逆轉肌齡，三大非凡美容效果。Derma Veil童顏針突破性極微細分子，滲透性極強，有效持續延續喚醒膠原自生，由內至外飽滿肌膚，回復皮膚彈性和亮澤度。</p>`, "zh-CN": `<p>Derma Veil童颜针拥有独特「3R微分子胶原技术」，深入真皮层，激活强化纤维母细胞生产力，令胶原大量增生，达致再生嫩白肤质、重塑年轻轮廓、自然逆转肌龄，三大非凡美容效果。Derma Veil童颜针突破性极微细分子，渗透性极强，有效持续延续唤醒胶原自生，由内至外饱满肌肤，回复皮肤弹性和亮泽度。</p>`, en: `<p>Derma Veil’s 3R micro-collagen approach reaches the dermis to activate fibroblasts, encourage collagen renewal, brighten texture and support youthful contours from within.</p>` },
    points: [
      { "zh-HK": `3R 微分子膠原技術`, "zh-CN": `3R 微分子胶原技术`, en: `3R micro-collagen technology` },
      { "zh-HK": `激活纖維母細胞`, "zh-CN": `激活纤维母细胞`, en: `Activates fibroblasts` },
      { "zh-HK": `再生嫩白、重塑輪廓`, "zh-CN": `再生嫩白、重塑轮廓`, en: `Brightening regeneration and contour support` }
    ],
    image: "/images/inj-derma-veil@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Derma Veil 適合什麼人？`, "zh-CN": `Derma Veil 适合什么人？`, en: `Who is Derma Veil for?` }, a: { "zh-HK": `適合追求自然飽滿輪廓與膚質改善的客人。`, "zh-CN": `适合追求自然饱满轮廓与肤质改善的客人。`, en: `Those wanting natural volume support and better skin quality.` } },
      { q: { "zh-HK": `Derma Veil 效果維持多久？`, "zh-CN": `Derma Veil 效果维持多久？`, en: `How long do results last?` }, a: { "zh-HK": `膠原自生需時間，效果漸進。`, "zh-CN": `胶原自生需时间，效果渐进。`, en: `Collagen builds gradually over time.` } },
      { q: { "zh-HK": `Derma Veil 是什麼技術？`, "zh-CN": `Derma Veil 是什么技术？`, en: `What technology does it use?` }, a: { "zh-HK": `獨特「3R 微分子膠原技術」，深入真皮層激活強化纖維母細胞生產力，令膠原大量增生。`, "zh-CN": `独特「3R 微分子胶原技术」，深入真皮层激活强化纤维母细胞生产力，令胶原大量增生。`, en: `3R micro-collagen design to activate fibroblasts in the dermis.` } },
      { q: { "zh-HK": `Derma Veil 效果有何特點？`, "zh-CN": `Derma Veil 效果有何特点？`, en: `What results are typical?` }, a: { "zh-HK": `再生嫩白膚質、重塑年輕輪廓、自然逆轉肌齡，由內至外飽滿肌膚。`, "zh-CN": `再生嫩白肤质、重塑年轻轮廓、自然逆转肌龄，由内至外饱满肌肤。`, en: `Brighter texture, contour support and gradual rejuvenation.` } }
    ],
  },
  {
    id: "sculptra",
    category: "injectables",
    slug: "sculptra",
    title: { "zh-HK": `Sculptra® 塑然雅®`, "zh-CN": `Sculptra® 塑然雅®`, en: `Sculptra® Poly-L-Lactic Acid` },
    summary: { "zh-HK": `可注射的 PLLA 聚左乳酸，刺激皮膚底層膠原蛋白自我增生，改善臉部皮膚及各種皺紋問題。`, "zh-CN": `可注射的 PLLA 聚左乳酸，刺激皮肤底层胶原蛋白自我增生，改善脸部皮肤及各种皱纹问题。`, en: `Injectable PLLA that stimulates the skin’s own collagen to improve facial skin quality and wrinkles.` },
    bodyHtml: { "zh-HK": `<p>Sculptra®塑然雅®是一種可注射的PLLA聚左乳酸 (Poly-Lactic-Acid)，刺激皮膚底層的膠原蛋白自我增生，改善臉部皮膚及各種皺紋問題。</p>`, "zh-CN": `<p>Sculptra®塑然雅®是一种可注射的PLLA聚左乳酸 (Poly-Lactic-Acid)，刺激皮肤底层的胶原蛋白自我增生，改善脸部皮肤及各种皱纹问题。</p>`, en: `<p>Sculptra® is injectable poly-L-lactic acid that stimulates deep dermal collagen to improve facial skin quality and wrinkle appearance over time.</p>` },
    points: [
      { "zh-HK": `PLLA 聚左乳酸`, "zh-CN": `PLLA 聚左乳酸`, en: `PLLA (poly-L-lactic acid)` },
      { "zh-HK": `刺激膠原自我增生`, "zh-CN": `刺激胶原自我增生`, en: `Stimulates the skin’s own collagen` },
      { "zh-HK": `改善皺紋與面部皮膚`, "zh-CN": `改善皱纹与面部皮肤`, en: `Improves wrinkles and facial skin quality` }
    ],
    image: "/images/inj-sculptra@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Sculptra 見效快嗎？`, "zh-CN": `Sculptra 见效快吗？`, en: `Are Sculptra results fast?` }, a: { "zh-HK": `屬漸進式，膠原增生需要時間。`, "zh-CN": `属渐进式，胶原增生需要时间。`, en: `Effects are gradual as collagen builds.` } },
      { q: { "zh-HK": `Sculptra 效果維持多久？`, "zh-CN": `Sculptra 效果维持多久？`, en: `How long do results last?` }, a: { "zh-HK": `可長效維持，視個人與療程組合。`, "zh-CN": `可长效维持，视个人与疗程组合。`, en: `Often long-lasting, depending on the individual and course.` } },
      { q: { "zh-HK": `Sculptra 是什麼成份？`, "zh-CN": `Sculptra 是什么成份？`, en: `What is Sculptra made of?` }, a: { "zh-HK": `可注射的 PLLA 聚左乳酸（Poly-Lactic-Acid）。`, "zh-CN": `可注射的 PLLA 聚左乳酸（Poly-Lactic-Acid）。`, en: `Injectable poly-L-lactic acid (PLLA).` } },
      { q: { "zh-HK": `Sculptra 主要改善什麼？`, "zh-CN": `Sculptra 主要改善什么？`, en: `What does it improve?` }, a: { "zh-HK": `刺激皮膚底層的膠原蛋白自我增生，改善臉部皮膚及各種皺紋問題。`, "zh-CN": `刺激皮肤底层的胶原蛋白自我增生，改善脸部皮肤及各种皱纹问题。`, en: `Facial skin quality and wrinkles via self-collagen stimulation.` } }
    ],
  },
  {
    id: "ellanse",
    category: "injectables",
    slug: "ellanse",
    title: { "zh-HK": `Ellansé 少女針`, "zh-CN": `Ellansé 少女针`, en: `Ellansé Collagen Stimulator` },
    summary: { "zh-HK": `適用於填補肌膚凹陷、修飾面部輪廓線，刺激肌膚膠原新生，效果維持可達 1–4 年。`, "zh-CN": `适用于填补肌肤凹陷、修饰面部轮廓线，刺激肌肤胶原新生，效果维持可达 1–4 年。`, en: `Fills hollows and refines facial contours while stimulating collagen; results may last 1–4 years.` },
    bodyHtml: { "zh-HK": `<p>Ellansé少女針適用於填補肌膚大小凹陷位置，修飾及柔和面部輪廓線，例如是額頭凹陷、眼尾下垂、法令紋、印第安紋、面頰凹陷、下顎線鬆弛等，療程能刺激肌膚膠原新生，自然生成的膠原蛋白持續發揮順滑肌理作用，效果維持可達1-4年。</p>`, "zh-CN": `<p>Ellansé少女针适用于填补肌肤大小凹陷位置，修饰及柔和面部轮廓线，例如是额头凹陷、眼尾下垂、法令纹、印第安纹、面颊凹陷、下颚线松弛等，疗程能刺激肌肤胶原新生，自然生成的胶原蛋白持续发挥顺滑肌理作用，效果维持可达1-4年。</p>`, en: `<p>Ellansé fills hollows and softens contour lines (forehead, lateral canthus, nasolabial folds, cheeks, jawline, etc.) while stimulating collagen. Longevity is often cited at 1–4 years depending on product type.</p>` },
    points: [
      { "zh-HK": `即時填充＋膠原新生`, "zh-CN": `即时填充＋胶原新生`, en: `Immediate fill plus collagen stimulation` },
      { "zh-HK": `修飾多處輪廓線`, "zh-CN": `修饰多处轮廓线`, en: `Softens multiple contour lines` },
      { "zh-HK": `效果維持 1–4 年`, "zh-CN": `效果维持 1–4 年`, en: `Longevity often cited at 1–4 years` }
    ],
    image: "/images/inj-ellanse@2x.jpg",
    faqs: [
      { q: { "zh-HK": `Ellansé 效果維持多久？`, "zh-CN": `Ellansé 效果维持多久？`, en: `How long does Ellansé last?` }, a: { "zh-HK": `可達 1–4 年，視產品類型。`, "zh-CN": `可达 1–4 年，视产品类型。`, en: `Typically 1–4 years by product type.` } },
      { q: { "zh-HK": `Ellansé 適合哪些部位？`, "zh-CN": `Ellansé 适合哪些部位？`, en: `Which areas suit Ellansé?` }, a: { "zh-HK": `額頭、法令紋、面頰、下顎線等凹陷。`, "zh-CN": `额头、法令纹、面颊、下颚线等凹陷。`, en: `Forehead, folds, cheeks, jawline and other hollows.` } },
      { q: { "zh-HK": `Ellansé 原理是什麼？`, "zh-CN": `Ellansé 原理是什么？`, en: `How does it work?` }, a: { "zh-HK": `即時填充配合刺激肌膚膠原新生，自然生成的膠原蛋白持續發揮順滑肌理作用。`, "zh-CN": `即时填充配合刺激肌肤胶原新生，自然生成的胶原蛋白持续发挥顺滑肌理作用。`, en: `Immediate fill plus ongoing collagen stimulation.` } },
      { q: { "zh-HK": `Ellansé 能改善哪些問題？`, "zh-CN": `Ellansé 能改善哪些问题？`, en: `What concerns does it address?` }, a: { "zh-HK": `額頭凹陷、眼尾下垂、法令紋、印第安紋、面頰凹陷及下顎線鬆弛等。`, "zh-CN": `额头凹陷、眼尾下垂、法令纹、印第安纹、面颊凹陷及下颚线松弛等。`, en: `Hollows, mild droop and contour laxity.` } }
    ],
  },
  {
    id: "aesthefill",
    category: "injectables",
    slug: "aesthefill",
    title: { "zh-HK": `AestheFill® 精靈針`, "zh-CN": `AestheFill® 精灵针`, en: `AestheFill® PDLLA Collagen Stimulator` },
    summary: { "zh-HK": `新型態「聚雙旋乳酸 PDLLA」，即時肌層支撐、長效漸進誘導第一型膠原蛋白增生，效果維持至少 18–24 個月。`, "zh-CN": `新型态「聚双旋乳酸 PDLLA」，即时肌层支撑、长效渐进诱导第一型胶原蛋白增生，效果维持至少 18–24 个月。`, en: `PDLLA dual-helix structure for immediate dermal support and progressive type-I collagen induction lasting at least 18–24 months.` },
    bodyHtml: { "zh-HK": `<p>AestheFill® 精靈針是新型態的「聚雙旋乳酸 PDLLA」，1:1 左旋+右旋的雙旋結構，提供立即的肌層支撐和生長空間，可長效漸進式地誘導促進皮膚第一型膠原蛋白增生，效果可以維持至少 18–24 個月。主要令肌膚自然豐盈，變得柔軟細膩，重拾年輕。可全面提升額頭、太陽穴、蘋果肌、淚溝、臉頰和法令紋等部位。獲韓國 KFDA 批准銷售、CE Mark 認證，並具香港衛生署表列醫療儀器註冊編號 HKMD NO. 210226。</p>`, "zh-CN": `<p>AestheFill® 精灵针是新型态的「聚双旋乳酸 PDLLA」，1:1 左旋+右旋的双旋结构，提供立即的肌层支撑和生长空间，可长效渐进式地诱导促进皮肤第一型胶原蛋白增生，效果可以维持至少 18–24 个月。主要令肌肤自然丰盈，变得柔软细腻，重拾年轻。可全面提升额头、太阳穴、苹果肌、泪沟、脸颊和法令纹等部位。获韩国 KFDA 批准销售、CE Mark 认证，并具香港卫生署表列医疗仪器注册编号 HKMD NO. 210226。</p>`, en: `<p>AestheFill® uses PDLLA (1:1 L/D) microspheres for immediate dermal support and progressive type-I collagen induction lasting at least 18–24 months. Suitable for forehead, temples, cheeks, tear troughs and folds. KFDA/CE cleared with HKMD NO. 210226.</p>` },
    points: [
      { "zh-HK": `PDLLA 雙旋結構`, "zh-CN": `PDLLA 双旋结构`, en: `PDLLA dual-helix structure` },
      { "zh-HK": `即時支撐＋長效增生`, "zh-CN": `即时支撑＋长效增生`, en: `Immediate support plus lasting collagen` },
      { "zh-HK": `KFDA/CE 認證、HKMD 註冊`, "zh-CN": `KFDA/CE 认证、HKMD 注册`, en: `KFDA/CE cleared, HKMD registered` }
    ],
    image: "/images/inj-aesthefill-cover.png",
    faqs: [
      { q: { "zh-HK": `AestheFill 和一般填充有何不同？`, "zh-CN": `AestheFill 和一般填充有何不同？`, en: `How is AestheFill different from fillers?` }, a: { "zh-HK": `提供即時支撐並長效誘導膠原增生。`, "zh-CN": `提供即时支撑并长效诱导胶原增生。`, en: `It combines immediate support with long-term collagen induction.` } },
      { q: { "zh-HK": `AestheFill 效果維持多久？`, "zh-CN": `AestheFill 效果维持多久？`, en: `How long do results last?` }, a: { "zh-HK": `至少 18–24 個月。`, "zh-CN": `至少 18–24 个月。`, en: `At least about 18–24 months.` } },
      { q: { "zh-HK": `AestheFill 有什麼認證？`, "zh-CN": `AestheFill 有什么认证？`, en: `What clearances does it have?` }, a: { "zh-HK": `獲韓國 KFDA 批准銷售、CE Mark 認證，並具香港衛生署表列醫療儀器註冊編號 HKMD NO. 210226。`, "zh-CN": `获韩国 KFDA 批准销售、CE Mark 认证，并具香港卫生署表列医疗仪器注册编号 HKMD NO. 210226。`, en: `KFDA, CE Mark and Hong Kong DOH listing HKMD NO. 210226.` } },
      { q: { "zh-HK": `AestheFill 可以提升哪些部位？`, "zh-CN": `AestheFill 可以提升哪些部位？`, en: `Which areas can be treated?` }, a: { "zh-HK": `額頭、太陽穴、蘋果肌、淚溝、臉頰及法令紋等部位。`, "zh-CN": `额头、太阳穴、苹果肌、泪沟、脸颊及法令纹等部位。`, en: `Forehead, temples, cheeks, tear troughs, midface and folds.` } }
    ],
  },
  {
    id: "harmonyca",
    category: "injectables",
    slug: "harmonyca",
    title: { "zh-HK": `HArmonyCa™ 美神針`, "zh-CN": `HArmonyCa™ 美神针`, en: `HArmonyCa™ Hybrid Filler` },
    summary: { "zh-HK": `CaHa 微球 + 透明質酸雙重成分，拉提緊緻即時見效，並持續刺激膠原重組，效果彷如「液體埋線」般長效自然。`, "zh-CN": `CaHa 微球 + 透明质酸双重成分，拉提紧致即时见效，并持续刺激胶原重组，效果彷如「液体埋线」般长效自然。`, en: `CaHa microspheres plus HA for immediate lift and lasting collagen remodelling — often compared to a natural “liquid thread” effect.` },
    bodyHtml: { "zh-HK": `<p>全新推出 HArmonyCa™ 美神針™（又名第二代少女針）。獨特配方集合兩大成分：CaHa 微球、透明質酸，突破一般膠原再生療程未見即時效果的限制，拉提緊緻肌膚即時見效，更持續刺激膠原蛋白重組及增生，顯著撫平皺紋，肌膚緊緻效果彷如「液體埋線」般長效自然。療程由知名美國藥廠 Allergan Aesthetics 支持，100% 由醫生主理。</p>`, "zh-CN": `<p>全新推出 HArmonyCa™ 美神针™（又名第二代少女针）。独特配方集合两大成分：CaHa 微球、透明质酸，突破一般胶原再生疗程未见即时效果的限制，拉提紧致肌肤即时见效，更持续刺激胶原蛋白重组及增生，显著抚平皱纹，肌肤紧致效果彷如「液体埋线」般长效自然。疗程由知名美国药厂 Allergan Aesthetics 支持，100% 由医生主理。</p>`, en: `<p>HArmonyCa™ combines CaHa microspheres with HA for immediate lift plus ongoing collagen remodelling — often compared to a “liquid thread” effect. Supported by Allergan Aesthetics and doctor-administered.</p>` },
    points: [
      { "zh-HK": `CaHa 微球＋透明質酸`, "zh-CN": `CaHa 微球＋透明质酸`, en: `CaHA microspheres + hyaluronic acid` },
      { "zh-HK": `即時拉提見效`, "zh-CN": `即时拉提见效`, en: `Immediate lifting effect` },
      { "zh-HK": `100% 醫生主理`, "zh-CN": `100% 医生主理`, en: `100% physician-administered` }
    ],
    image: "/images/harmonyca.jpg",
    faqs: [
      { q: { "zh-HK": `HArmonyCa 即時見效嗎？`, "zh-CN": `HArmonyCa 即时见效吗？`, en: `Are HArmonyCa results immediate?` }, a: { "zh-HK": `是，拉提緊緻即時見效。`, "zh-CN": `是，拉提紧致即时见效。`, en: `Yes — lift and firmness are typically visible right away.` } },
      { q: { "zh-HK": `HArmonyCa 安全嗎？`, "zh-CN": `HArmonyCa 安全吗？`, en: `Is it safe?` }, a: { "zh-HK": `由知名藥廠支持，100% 醫生主理。`, "zh-CN": `由知名药厂支持，100% 医生主理。`, en: `Backed by a major aesthetics manufacturer; doctor-led treatment.` } },
      { q: { "zh-HK": `HArmonyCa 有何特別配方？`, "zh-CN": `HArmonyCa 有何特别配方？`, en: `What is unique about the formula?` }, a: { "zh-HK": `獨特配方集合 CaHa 微球與透明質酸，突破一般膠原再生療程未見即時效果的限制。`, "zh-CN": `独特配方集合 CaHa 微球与透明质酸，突破一般胶原再生疗程未见即时效果的限制。`, en: `CaHa + HA addresses both instant lift and collagen regeneration.` } },
      { q: { "zh-HK": `HArmonyCa 效果如何？`, "zh-CN": `HArmonyCa 效果如何？`, en: `What results can I expect?` }, a: { "zh-HK": `持續刺激膠原蛋白重組及增生、顯著撫平皺紋，緊緻效果彷如「液體埋線」般長效自然。`, "zh-CN": `持续刺激胶原蛋白重组及增生、显著抚平皱纹，紧致效果彷如「液体埋线」般长效自然。`, en: `Wrinkle softening and natural long-lasting firmness.` } }
    ],
  },
  {
    id: "virtual-gym",
    category: "wellness",
    slug: "virtual-gym",
    title: { "zh-HK": `Virtual Gym 激纖易療程`, "zh-CN": `Virtual Gym 激纤易疗程`, en: `Virtual Gym Body Contouring` },
    summary: { "zh-HK": `採用 Gerry Pollock 博士研發的「生物共振訊號科技」，有效同時減少內臟脂肪和皮下脂肪，一次療程燃燒高達 5,000 卡路里，減少脂肪同時改善身體線條緊緻度。`, "zh-CN": `采用 Gerry Pollock 博士研发的「生物共振讯号科技」，有效同时减少内脏脂肪和皮下脂肪，一次疗程燃烧高达 5,000 卡路里，减少脂肪同时改善身体线条紧致度。`, en: `Dr Gerry Pollock’s bio-resonance signalling aims to reduce visceral and subcutaneous fat, burning up to 5,000 calories per session while firming body lines.` },
    bodyHtml: { "zh-HK": `<p>採用由Gerry Pollock博士研發出「生物共振訊號科技」，有效同時減少內臟脂肪和皮下脂肪，達致顯著的瘦身功效。VG激纖易療程透過精準的能量訊號，一次療程燃燒高達5,000卡路里熱量，發揮非一般肌肉緊緻訓練，減少脂肪同時改善身體線條緊緻度，回復體態輕盈。</p>`, "zh-CN": `<p>采用由Gerry Pollock博士研发出「生物共振讯号科技」，有效同时减少内脏脂肪和皮下脂肪，达致显著的瘦身功效。VG激纤易疗程透过精准的能量讯号，一次疗程燃烧高达5,000卡路里热量，发挥非一般肌肉紧致训练，减少脂肪同时改善身体线条紧致度，回复体态轻盈。</p>`, en: `<p>Virtual Gym uses Dr Gerry Pollock’s bio-resonance signal technology to target visceral and subcutaneous fat while training muscle tone — claiming up to ~5,000 calories per session for a lighter silhouette.</p>` },
    points: [
      { "zh-HK": `生物共振訊號科技`, "zh-CN": `生物共振讯号科技`, en: `Bio-resonance signal technology` },
      { "zh-HK": `同時減內臟及皮下脂肪`, "zh-CN": `同时减内脏及皮下脂肪`, en: `Targets visceral and subcutaneous fat` },
      { "zh-HK": `一次療程燃燒 5,000 卡路里`, "zh-CN": `一次疗程燃烧 5,000 卡路里`, en: `Burns about 5,000 calories per session` }
    ],
    image: "/images/virtual-gym.png",
    faqs: [
      { q: { "zh-HK": `Virtual Gym 一次燃燒多少卡路里？`, "zh-CN": `Virtual Gym 一次燃烧多少卡路里？`, en: `How many calories can one session burn?` }, a: { "zh-HK": `可高達 5,000 卡路里。`, "zh-CN": `可高达 5,000 卡路里。`, en: `Up to about 5,000 calories as claimed.` } },
      { q: { "zh-HK": `Virtual Gym 感覺像做運動嗎？`, "zh-CN": `Virtual Gym 感觉像做运动吗？`, en: `Does it feel like exercise?` }, a: { "zh-HK": `類比肌肉緊緻訓練，但不需自主出力。`, "zh-CN": `类比肌肉紧致训练，但不需自主出力。`, en: `It mimics muscle training without voluntary effort.` } },
      { q: { "zh-HK": `Virtual Gym 原理是什麼？`, "zh-CN": `Virtual Gym 原理是什么？`, en: `How does Virtual Gym work?` }, a: { "zh-HK": `採用 Gerry Pollock 博士研發的「生物共振訊號科技」，以精準能量訊號同時減少內臟脂肪與皮下脂肪。`, "zh-CN": `采用 Gerry Pollock 博士研发的「生物共振讯号科技」，以精准能量讯号同时减少内脏脂肪与皮下脂肪。`, en: `Precise energy signals from bio-resonance tech target fat stores.` } },
      { q: { "zh-HK": `Virtual Gym 效果如何？`, "zh-CN": `Virtual Gym 效果如何？`, en: `What results are expected?` }, a: { "zh-HK": `減少脂肪同時改善身體線條緊緻度，回復體態輕盈。`, "zh-CN": `减少脂肪同时改善身体线条紧致度，回复体态轻盈。`, en: `Fat reduction with improved body-line firmness.` } }
    ],
  },
  {
    id: "breast",
    category: "beauty",
    slug: "breast",
    title: { "zh-HK": `豐胸療程`, "zh-CN": `丰胸疗程`, en: `Breast Contour Care` },
    summary: { "zh-HK": `以高科技磁頻與超聲波原理，幫助血液循環、疏通經絡、紓解乳腺結節，促進新陳代謝，改善乳腺閉塞，收緊胸部肌膚，重塑完美胸形。`, "zh-CN": `以高科技磁频与超声波原理，帮助血液循环、疏通经络、纾解乳腺结节，促进新陈代谢，改善乳腺闭塞，收紧胸部肌肤，重塑完美胸形。`, en: `Magnetic frequency and ultrasound support circulation, meridian flow and nodule comfort, improve congestion, firm breast skin and reshape contour.` },
    bodyHtml: { "zh-HK": `<p>療程採用胸部專屬美容儀，備有多項功能，透過高科技磁頻與超聲波原理，幫助血液循環、疏通經絡，並紓解乳腺結節，從而促進新陳代謝，讓體內毒素加速排走，改善乳腺閉塞的問題，更能收緊胸部肌膚，重塑完美胸形。配合人手按摩將背部及胸部兩側外擴的胸部脂肪集中胸前，提拉胸部肌肉，改善胸部下垂問題，令胸部彈性提升，修復線條及副乳問題，療程後可即時有豐胸效果。</p>`, "zh-CN": `<p>疗程采用胸部专属美容仪，备有多项功能，透过高科技磁频与超声波原理，帮助血液循环、疏通经络，并纾解乳腺结节，从而促进新陈代谢，让体内毒素加速排走，改善乳腺闭塞的问题，更能收紧胸部肌肤，重塑完美胸形。配合人手按摩将背部及胸部两侧外扩的胸部脂肪集中胸前，提拉胸部肌肉，改善胸部下垂问题，令胸部弹性提升，修复线条及副乳问题，疗程后可即时有丰胸效果。</p>`, en: `<p>Dedicated breast devices combine magnetic frequency and ultrasound to support circulation, meridian flow and nodule comfort, while manual massage gathers lateral fat, lifts tissue and improves ptosis and accessory breast lines — often with immediate contour improvement.</p>` },
    points: [
      { "zh-HK": `磁頻＋超聲波儀器`, "zh-CN": `磁频＋超声波仪器`, en: `Magnetic frequency + ultrasound` },
      { "zh-HK": `疏通乳腺、促進循環`, "zh-CN": `疏通乳腺、促进循环`, en: `Supports circulation and breast-tissue comfort` },
      { "zh-HK": `重塑胸形、改善下垂`, "zh-CN": `重塑胸形、改善下垂`, en: `Reshapes and addresses sagging` }
    ],
    image: "/images/beauty-breast.png",
    faqs: [
      { q: { "zh-HK": `豐胸療程多久見效？`, "zh-CN": `丰胸疗程多久见效？`, en: `When will I see results?` }, a: { "zh-HK": `療程後可即時有豐胸效果，持續進行效果更佳。`, "zh-CN": `疗程后可即时有丰胸效果，持续进行效果更佳。`, en: `Contour improvement can be immediate; courses enhance outcomes.` } },
      { q: { "zh-HK": `豐胸療程安全嗎？`, "zh-CN": `丰胸疗程安全吗？`, en: `Is it safe?` }, a: { "zh-HK": `採用人手按摩＋儀器，非入侵性。`, "zh-CN": `采用人手按摩＋仪器，非入侵性。`, en: `Non-invasive device care plus manual massage.` } },
      { q: { "zh-HK": `豐胸療程原理是什麼？`, "zh-CN": `丰胸疗程原理是什么？`, en: `How does it work?` }, a: { "zh-HK": `以磁頻與超聲波促進血液循環、疏通經絡並紓解乳腺結節，配合人手按摩重塑胸形。`, "zh-CN": `以磁频与超声波促进血液循环、疏通经络并纾解乳腺结节，配合人手按摩重塑胸形。`, en: `Magnetic frequency and ultrasound plus massage to reshape and lift.` } },
      { q: { "zh-HK": `豐胸療程能改善哪些問題？`, "zh-CN": `丰胸疗程能改善哪些问题？`, en: `What concerns does it address?` }, a: { "zh-HK": `改善乳腺閉塞、胸部下垂、外擴及副乳問題，提升彈性與線條。`, "zh-CN": `改善乳腺闭塞、胸部下垂、外扩及副乳问题，提升弹性与线条。`, en: `Congestion, ptosis, lateral spread and accessory breast lines.` } }
    ],
  },
  {
    id: "microneedle",
    category: "beauty",
    slug: "microneedle",
    title: { "zh-HK": `電動微針機 · 駐顏納米晶片`, "zh-CN": `电动微针机 · 驻颜纳米晶片`, en: `Electric Microneedling · Nano Chip` },
    summary: { "zh-HK": `以天然方法刺激骨膠原增生，不破壞皮膚表皮層，喚醒及提升肌膚再生功能，有助淡化皺紋及色斑，改善皮膚質感與彈性。`, "zh-CN": `以天然方法刺激骨胶原增生，不破坏皮肤表皮层，唤醒及提升肌肤再生功能，有助淡化皱纹及色斑，改善皮肤质感与弹性。`, en: `Stimulates collagen without disrupting the epidermis, awakening regeneration to soften lines and spots and improve texture and elasticity.` },
    bodyHtml: { "zh-HK": `<p>微針療法利用天然方法刺激骨膠原增生，而不會破壞皮膚表皮層，從而喚醒及提升肌膚的再生功能，有助淡化皺紋及色斑，改善皮膚質感，調勻膚色及增加皮膚彈性。</p>`, "zh-CN": `<p>微针疗法利用天然方法刺激骨胶原增生，而不会破坏皮肤表皮层，从而唤醒及提升肌肤的再生功能，有助淡化皱纹及色斑，改善皮肤质感，调匀肤色及增加皮肤弹性。</p>`, en: `<p>Microneedling awakens regenerative capacity by stimulating collagen while preserving the epidermis — helping fade lines and spots, even tone and improve elasticity.</p>` },
    points: [
      { "zh-HK": `天然刺激骨膠原增生`, "zh-CN": `天然刺激骨胶原增生`, en: `Naturally stimulates collagen` },
      { "zh-HK": `不破壞表皮層`, "zh-CN": `不破坏表皮层`, en: `Does not destroy the epidermis` },
      { "zh-HK": `淡化皺紋色斑、改善膚質`, "zh-CN": `淡化皱纹色斑、改善肤质`, en: `Softens lines, pigment and texture` }
    ],
    image: "/images/beauty-microneedle.png",
    faqs: [
      { q: { "zh-HK": `電動微針會痛嗎？`, "zh-CN": `电动微针会痛吗？`, en: `Does electric microneedling hurt?` }, a: { "zh-HK": `以納米晶片方式進行，感覺較輕微。`, "zh-CN": `以纳米晶片方式进行，感觉较轻微。`, en: `Nano-chip delivery typically feels mild.` } },
      { q: { "zh-HK": `電動微針需要恢復期嗎？`, "zh-CN": `电动微针需要恢复期吗？`, en: `Is there downtime?` }, a: { "zh-HK": `一般較短，按術後護理進行即可。`, "zh-CN": `一般较短，按术后护理进行即可。`, en: `Usually short with proper aftercare.` } },
      { q: { "zh-HK": `電動微針原理是什麼？`, "zh-CN": `电动微针原理是什么？`, en: `How does it work?` }, a: { "zh-HK": `以天然方法刺激骨膠原增生，不會破壞皮膚表皮層，喚醒及提升肌膚再生功能。`, "zh-CN": `以天然方法刺激骨胶原增生，不会破坏皮肤表皮层，唤醒及提升肌肤再生功能。`, en: `Natural collagen stimulation without ablating the epidermis.` } },
      { q: { "zh-HK": `電動微針可以改善什麼？`, "zh-CN": `电动微针可以改善什么？`, en: `What can it improve?` }, a: { "zh-HK": `淡化皺紋及色斑、改善皮膚質感、調勻膚色及增加皮膚彈性。`, "zh-CN": `淡化皱纹及色斑、改善皮肤质感、调匀肤色及增加皮肤弹性。`, en: `Lines, spots, texture, tone and elasticity.` } }
    ],
  },
  {
    id: "lash",
    category: "beauty",
    slug: "lash",
    title: { "zh-HK": `孕睫術`, "zh-CN": `孕睫术`, en: `Lash Growth Therapy` },
    summary: { "zh-HK": `睫毛位置擁有約 300–500 個毛囊，大部分處於休眠期。孕睫術針對睫毛生長週期進行活化與養護，提升濃密度與立體感。`, "zh-CN": `睫毛位置拥有约 300–500 个毛囊，大部分处于休眠期。孕睫术针对睫毛生长周期进行活化与养护，提升浓密度与立体感。`, en: `Eyelids hold about 300–500 follicles, many dormant. Therapy activates the growth cycle to improve density and dimension.` },
    bodyHtml: { "zh-HK": `<p>睫毛位置擁有大概300至500個毛囊，而且大部分都是處於休眠期，每一個毛囊也有自己不同的生長週期，生長週期總共有3個階段 – 1. 生長期 2. 休眠期 3. 脫落期。孕睫術針對睫毛生長週期進行活化與養護，提升濃密度與立體感。</p>`, "zh-CN": `<p>睫毛位置拥有大概300至500个毛囊，而且大部分都是处于休眠期，每一个毛囊也有自己不同的生长周期，生长周期总共有3个阶段 – 1. 生长期 2. 休眠期 3. 脱落期。孕睫术针对睫毛生长周期进行活化与养护，提升浓密度与立体感。</p>`, en: `<p>Eyelids hold roughly 300–500 follicles, many dormant, each cycling through growth, rest and shed. Therapy activates and nourishes follicles across that cycle for denser, fuller-looking lashes.</p>` },
    points: [
      { "zh-HK": `了解睫毛生長週期`, "zh-CN": `了解睫毛生长周期`, en: `Works with the lash growth cycle` },
      { "zh-HK": `活化休眠毛囊`, "zh-CN": `活化休眠毛囊`, en: `Activates resting follicles` },
      { "zh-HK": `提升濃密度與立體感`, "zh-CN": `提升浓密度与立体感`, en: `Improves density and dimension` }
    ],
    image: "/images/beauty-lash.png",
    faqs: [
      { q: { "zh-HK": `孕睫術多久見效？`, "zh-CN": `孕睫术多久见效？`, en: `When will I see results?` }, a: { "zh-HK": `睫毛生長週期較長，需按療程進行。`, "zh-CN": `睫毛生长周期较长，需按疗程进行。`, en: `Lash cycles are long — follow the full course.` } },
      { q: { "zh-HK": `孕睫術效果自然嗎？`, "zh-CN": `孕睫术效果自然吗？`, en: `Do results look natural?` }, a: { "zh-HK": `以養護方式提升自身睫毛，效果自然。`, "zh-CN": `以养护方式提升自身睫毛，效果自然。`, en: `Yes — it enhances your own lashes.` } },
      { q: { "zh-HK": `孕睫術原理是什麼？`, "zh-CN": `孕睫术原理是什么？`, en: `How does it work?` }, a: { "zh-HK": `睫毛位置約有 300 至 500 個毛囊，大部分處於休眠期，孕睫術針對生長週期進行活化與養護。`, "zh-CN": `睫毛位置约有 300 至 500 个毛囊，大部分处于休眠期，孕睫术针对生长周期进行活化与养护。`, en: `Activation and care across growth, rest and shed phases.` } },
      { q: { "zh-HK": `孕睫術為什麼需要按療程進行？`, "zh-CN": `孕睫术为什么需要按疗程进行？`, en: `Why is a course needed?` }, a: { "zh-HK": `睫毛有自己的生長週期（生長期、休眠期、脫落期），活化與養護需循序漸進。`, "zh-CN": `睫毛有自己的生长周期（生长期、休眠期、脱落期），活化与养护需循序渐进。`, en: `Follicles cycle independently; progress is gradual.` } }
    ],
  },
  {
    id: "nail",
    category: "beauty",
    slug: "nail",
    title: { "zh-HK": `灰甲療程（回甲）`, "zh-CN": `灰甲疗程（回甲）`, en: `Laser Nail Fungus Therapy` },
    summary: { "zh-HK": `以 1064nm 波長激光穿透厚甲深入甲板與甲床，直擊源頭真菌孢子，大大減低復發機會；約每 4–6 星期治療一次。`, "zh-CN": `以 1064nm 波长激光穿透厚甲深入甲板与甲床，直击源头真菌孢子，大大减低复发机会；约每 4–6 星期治疗一次。`, en: `1064 nm laser penetrates thick nail plate and bed to target fungal spores and reduce recurrence; sessions about every 4–6 weeks.` },
    bodyHtml: { "zh-HK": `<p>以1064nm波長激光治療，安全性高，治療期間趾甲會有暖熱感覺，激光能穿透厚甲深入趾甲內層（甲板）和甲底下的皮膚（甲床），直擊源頭真菌孢子，大大減低復發機會。大約每4至6星期治療1次，一般3至4次後便會明顯改善，視乎實際情況治療師會提供專業意見。</p>`, "zh-CN": `<p>以1064nm波长激光治疗，安全性高，治疗期间趾甲会有暖热感觉，激光能穿透厚甲深入趾甲内层（甲板）和甲底下的皮肤（甲床），直击源头真菌孢子，大大减低复发机会。大约每4至6星期治疗1次，一般3至4次后便会明显改善，视乎实际情况治疗师会提供专业意见。</p>`, en: `<p>1064 nm laser penetrates thick nail plate and bed to target fungal spores. Warmth during treatment is normal. Sessions about every 4–6 weeks; clear improvement often after 3–4 visits.</p>` },
    points: [
      { "zh-HK": `1064nm 激光技術`, "zh-CN": `1064nm 激光技术`, en: `1064 nm laser` },
      { "zh-HK": `直擊真菌孢子`, "zh-CN": `直击真菌孢子`, en: `Targets fungal spores at source` },
      { "zh-HK": `每 4–6 星期一次`, "zh-CN": `每 4–6 星期一次`, en: `Typically every 4–6 weeks` }
    ],
    image: "/images/beauty-nail.jpg",
    faqs: [
      { q: { "zh-HK": `灰甲療程需要多少次？`, "zh-CN": `灰甲疗程需要多少次？`, en: `How many sessions are needed?` }, a: { "zh-HK": `一般 3–4 次後明顯改善，視情況而定。`, "zh-CN": `一般 3–4 次后明显改善，视情况而定。`, en: `Often 3–4 before clear improvement; plans vary.` } },
      { q: { "zh-HK": `灰甲療程感受如何？`, "zh-CN": `灰甲疗程感受如何？`, en: `How does it feel?` }, a: { "zh-HK": `趾甲有暖熱感覺，屬正常。`, "zh-CN": `趾甲有暖热感觉，属正常。`, en: `Warmth in the nail is expected.` } },
      { q: { "zh-HK": `灰甲療程原理是什麼？`, "zh-CN": `灰甲疗程原理是什么？`, en: `How does it work?` }, a: { "zh-HK": `1064nm 波長激光穿透厚甲深入趾甲內層（甲板）與甲底皮膚（甲床），直擊源頭真菌孢子。`, "zh-CN": `1064nm 波长激光穿透厚甲深入趾甲内层（甲板）与甲底皮肤（甲床），直击源头真菌孢子。`, en: `1064 nm energy reaches plate and bed to target fungal spores.` } },
      { q: { "zh-HK": `灰甲療程頻率如何？`, "zh-CN": `灰甲疗程频率如何？`, en: `How often are sessions?` }, a: { "zh-HK": `大約每 4 至 6 星期治療 1 次，視乎實際情況治療師會提供專業意見。`, "zh-CN": `大约每 4 至 6 星期治疗 1 次，视乎实际情况治疗师会提供专业意见。`, en: `About every 4–6 weeks per clinician advice.` } },
      { q: { "zh-HK": `灰甲療程安全嗎？`, "zh-CN": `灰甲疗程安全吗？`, en: `Is it safe?` }, a: { "zh-HK": `以 1064nm 波長激光治療，安全性高，並可大大減低復發機會。`, "zh-CN": `以 1064nm 波长激光治疗，安全性高，并可大大减低复发机会。`, en: `1064 nm laser care is generally well tolerated with lower recurrence risk.` } }
    ],
  },
];

export function getTreatment(id: string): Treatment | undefined {
  return treatments.find((t) => t.id === id || t.slug === id);
}

export function treatmentsByCategory(category: string): Treatment[] {
  return treatments.filter((t) => t.category === category);
}
