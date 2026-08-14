insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, v.slug, v.title_zh_hk, v.title_zh_cn, v.title_en,
  v.description_zh_hk, v.description_zh_cn, v.description_en,
  v.price_hkd, v.stock, v.image_paths::jsonb, 'on_sale', v.sort
from (values
  ($sm$epionce$sm$, $sm$dry-or-normal-skin-kit$sm$, $sm$乾性或中性肌套裝$sm$, $sm$干性或中性肌套装$sm$, $sm$Dry or Normal Skin Kit$sm$, $sm$<p>輕便套裝能讓你體驗Epionce為你帶來健康的肌膚。每日使用除了可改善皮膚的整體健康狀況，更會令你容光煥發、回復青春光彩。</p>

<p>套裝包括:</p>
<p>– 輕柔潔面泡沫 12ml</p>
<p>– 平衡爽膚水 18ml</p>
<p>– 輕柔Lytic修護霜12ml</p>
<p>– IDS抗敵精華 12ml</p>
<p>– 美肌再生面霜 12g</p>$sm$, $sm$<p>轻便套装能让你体验Epionce为你带来健康的肌肤。每日使用除了可改善皮肤的整体健康状况，更会令你容光焕发、回复青春光彩。</p>

<p>套装包括:</p>
<p>– 轻柔洁面泡沫 12ml</p>
<p>– 平衡爽肤水 18ml</p>
<p>– 轻柔Lytic修护霜12ml</p>
<p>– IDS抗敌精华 12ml</p>
<p>– 美肌再生面霜 12g</p>$sm$, $sm$<p>A travel-size kit to experience Epionce for healthier, more radiant skin.</p>
<p>Includes:</p>
<p>– Gentle Foaming Cleanser 12ml</p>
<p>– Balancing Toner 18ml</p>
<p>– Gentle Lytic Repair Cream 12ml</p>
<p>– IDS Serum 12ml</p>
<p>– Renewal Facial Cream 12g</p>$sm$, 460::numeric, 20, $sm$["/images/products/prod-11@2x.jpg"]$sm$, 219),
  ($sm$epionce$sm$, $sm$hydrating-firming-mask$sm$, $sm$潤澤緊緻面膜$sm$, $sm$润泽紧致面膜$sm$, $sm$Hydrating Firming Mask$sm$, $sm$<p>特強保濕面膜快速修復及強化肌膚保護層，提升肌膚彈性及緊緻度。產品中蘊含高效滋潤肌膚的神經遞質，皮層脂質，抗氧化植物精華及強效保濕劑。</p>

<p>主要功效:</p>
<p>– 高效保濕面膜，激活肌膚達至最佳功能。</p>
<p>– 蘊含皮脂化合物，抗氧化物及特強保濕劑，快速強化肌膚天然保護層功效。</p>
<p>– 刺激細胞製造乙醯膽素，即時增強彈性及緊緻度。</p>
<p>– 抑制肌膚製造破壞性炎症因子，並減少其活躍度。</p>

<p>主要成分:</p>
<p>-白柳皮提取物</p>
<p>– 皮層脂質前體</p>
<p>– 白芒花</p>
<p>– 亞麻子複合物</p>$sm$, $sm$<p>特强保湿面膜快速修复及强化肌肤保护层，提升肌肤弹性及紧致度。产品中蕴含高效滋润肌肤的神经递质，皮层脂质，抗氧化植物精华及强效保湿剂。</p>

<p>主要功效:</p>
<p>– 高效保湿面膜，激活肌肤达至最佳功能。</p>
<p>– 蕴含皮脂化合物，抗氧化物及特强保湿剂，快速强化肌肤天然保护层功效。</p>
<p>– 刺激细胞制造乙醯胆素，即时增强弹性及紧致度。</p>
<p>– 抑制肌肤制造破坏性炎症因子，并减少其活跃度。</p>

<p>主要成分:</p>
<p>-白柳皮提取物</p>
<p>– 皮层脂质前体</p>
<p>– 白芒花</p>
<p>– 亚麻子复合物</p>$sm$, $sm$<p>An intensive hydrating mask that helps restore and strengthen the skin barrier, improving elasticity and firmness. Contains neurotransmitters, epidermal lipids, antioxidant botanicals and humectants.</p>
<p>Key benefits</p>
<p>– Activates skin for optimal function</p>
<p>– Lipids, antioxidants and humectants to reinforce the natural barrier</p>
<p>– Stimulates acetylcholine for instant elasticity and firmness</p>
<p>– Helps inhibit destructive inflammatory factors</p>
<p>Key ingredients</p>
<p>– White willow bark extract</p>
<p>– Epidermal lipid precursors</p>
<p>– Meadowfoam</p>
<p>– Flaxseed complex</p>$sm$, 395::numeric, 20, $sm$["/images/products/prod-12@2x.jpg"]$sm$, 218),
  ($sm$epionce$sm$, $sm$rapid-recovery-treatment-kit$sm$, $sm$快速修復療效組合$sm$, $sm$快速修复疗效组合$sm$, $sm$Rapid Recovery Treatment Kit$sm$, $sm$<p>快速療效修復組合專為療程之後之修復而研製，能令接受療程後受創傷之肌膚加速復原，減少療程帶來的不適及有助降紅。此套裝能修復受損的肌膚保護層，同時有保濕及鎮靜，敏感肌膚的功效。</p>

<p><u>滋潤潔面乳</u></p>
<p>滋潤潔面乳有效溫和地卸妝，溶解污染物、細菌、塵垢及其他雜質。這款舒緩潔面乳深層清潔面部，而且不損害肌膚保護層功能，亦不會刺激或令肌膚乾燥。</p>

<p><u>潤澤緊緻面膜</u></p>
<p>特強保濕面膜快速修復及強化肌膚保護層，提升肌膚彈性及緊緻度。產品中蘊含高效滋潤肌膚的神經遞質，皮層脂質，抗氧化植物精華及強效保濕劑。</p>

<p><u>舒緩修復精油</u></p>
<p>含天然抗炎及抗菌成份，有效為敏感肌膚補水。</p>

<p><u>再生護肌鎮靜霜</u></p>
<p>再生護肌鎮靜霜Renewal Calming Cream，是Epionce產品系列中第一款根據美國食品及藥物管理局（FDA）皮膚保護專題而研發的濕疹非處方皮膚產品 。再生護肌鎮靜霜能優化及恢復肌膚保護屏障的含水量，有效緩解濕疹和肌膚乾燥等頑固症狀。臨床研究顯示了再生護肌鎮靜霜為濕疹症狀提供必要的舒緩。</p>$sm$, $sm$<p>快速疗效修复组合专为疗程之后之修复而研制，能令接受疗程后受创伤之肌肤加速复原，减少疗程带来的不适及有助降红。此套装能修复受损的肌肤保护层，同时有保湿及镇静，敏感肌肤的功效。</p>

<p><u>滋润洁面乳</u></p>
<p>滋润洁面乳有效温和地卸妆，溶解污染物、细菌、尘垢及其他杂质。这款舒缓洁面乳深层清洁面部，而且不损害肌肤保护层功能，亦不会刺激或令肌肤干燥。</p>

<p><u>润泽紧致面膜</u></p>
<p>特强保湿面膜快速修复及强化肌肤保护层，提升肌肤弹性及紧致度。产品中蕴含高效滋润肌肤的神经递质，皮层脂质，抗氧化植物精华及强效保湿剂。</p>

<p><u>舒缓修复精油</u></p>
<p>含天然抗炎及抗菌成份，有效为敏感肌肤补水。</p>

<p><u>再生护肌镇静霜</u></p>
<p>再生护肌镇静霜Renewal Calming Cream，是Epionce产品系列中第一款根据美国食品及药物管理局（FDA）皮肤保护专题而研发的湿疹非处方皮肤产品 。再生护肌镇静霜能优化及恢复肌肤保护屏障的含水量，有效缓解湿疹和肌肤干燥等顽固症状。临床研究显示了再生护肌镇静霜为湿疹症状提供必要的舒缓。</p>$sm$, $sm$<p>Formulated for post-treatment recovery: helps skin heal faster, reduces discomfort and redness, restores the barrier, hydrates and calms sensitive skin.</p>
<p><u>Gentle Cream Cleanser</u></p>
<p>Gently removes makeup, pollutants, bacteria and dirt without compromising the barrier or drying the skin.</p>
<p><u>Hydrating Firming Mask</u></p>
<p>Intensive hydration to restore and strengthen the barrier, improving elasticity and firmness.</p>
<p><u>Soothing Repair Oil</u></p>
<p>Natural anti-inflammatory and antibacterial actives to hydrate sensitive skin.</p>
<p><u>Renewal Calming Cream</u></p>
<p>Epionce's first OTC eczema product developed to the FDA skin-protectant monograph. Optimises barrier hydration and clinically soothes eczema and dryness.</p>$sm$, 395::numeric, 20, $sm$["/images/products/prod-13@2x.jpg"]$sm$, 217),
  ($sm$epionce$sm$, $sm$lytic-gel-cleanser$sm$, $sm$Lytic潔面啫喱$sm$, $sm$Lytic洁面啫喱$sm$, $sm$Lytic Gel Cleanser$sm$, $sm$<p>Lytic 潔面啫喱有效清除油脂，死皮及肌膚上的有害細菌，同時舒緩炎症並令肌膚幼滑細緻。特別適合暗瘡、皮膚炎、濕疹及牛皮癬用者。</p>

<p>主要功效:</p>
<p>– Epionce的角質修復配方 – EpiK, 幫助疏通堵塞毛孔的油脂污垢、細菌、化妝品殘留物及死皮，同時不損害皮膚保護層。</p>
<p>– EpiK 亦可提升皮膚天然保護層的吸收能力，幫助肌膚把產品精華深層滲透肌膚底層。</p>

<p>主要成分:</p>
<p>– 白柳皮提取物</p>
<p>– 薄荷</p>
<p>– 棗子提取物</p>$sm$, $sm$<p>Lytic 洁面啫喱有效清除油脂，死皮及肌肤上的有害细菌，同时舒缓炎症并令肌肤幼滑细致。特别适合暗疮、皮肤炎、湿疹及牛皮癣用者。</p>

<p>主要功效:</p>
<p>– Epionce的角质修复配方 – EpiK, 帮助疏通堵塞毛孔的油脂污垢、细菌、化妆品残留物及死皮，同时不损害皮肤保护层。</p>
<p>– EpiK 亦可提升皮肤天然保护层的吸收能力，帮助肌肤把产品精华深层渗透肌肤底层。</p>

<p>主要成分:</p>
<p>– 白柳皮提取物</p>
<p>– 薄荷</p>
<p>– 枣子提取物</p>$sm$, $sm$<p>Clears oil, dead skin and harmful bacteria while soothing inflammation. Especially suitable for acne, dermatitis, eczema and psoriasis.</p>
<p>Key benefits</p>
<p>– Epionce EpiK keratolytic formula unclogs pores of oil, bacteria, makeup residue and dead skin without damaging the barrier</p>
<p>– Improves barrier absorption so actives penetrate more deeply</p>
<p>Key ingredients</p>
<p>– White willow bark extract</p>
<p>– Peppermint</p>
<p>– Date extract</p>$sm$, 300::numeric, 20, $sm$["/images/products/prod-14@2x.jpg"]$sm$, 216),
  ($sm$epionce$sm$, $sm$gentle-cream-cleanser$sm$, $sm$滋潤潔面乳$sm$, $sm$滋润洁面乳$sm$, $sm$Gentle Cream Cleanser$sm$, $sm$<p>皮膚類型：乾性/敏感至一般肌膚  Dry/Sensitive to Normal Skin</p>

<p>滋潤潔面乳溫和地卸妝，溶解污染物，細菌，塵垢及其他雜質。這款舒緩潔面乳深層清潔面部，而且不損害皮膚保護層功能，亦不會刺激或令肌膚乾燥。</p>

<p>主要功效</p>
<p>– 提升肌膚天然保護層功能，幫助預防慢性及破壞性炎症。</p>
<p>– 特別適合完成醫學療程後潔膚之用。</p>
<p>– 適合玟瑰痤瘡及其他皮膚問題徵狀用者使用。</p>
<p>– 適用於乾性及/或敏感, 及受損肌膚。</p>

<p>主要成分</p>
<p>– 蜀葵提取物</p>
<p>– 棗子提取物</p>
<p>– 吡啶硫酮鋅</p>$sm$, $sm$<p>皮肤类型：干性/敏感至一般肌肤  Dry/Sensitive to Normal Skin</p>

<p>滋润洁面乳温和地卸妆，溶解污染物，细菌，尘垢及其他杂质。这款舒缓洁面乳深层清洁面部，而且不损害皮肤保护层功能，亦不会刺激或令肌肤干燥。</p>

<p>主要功效</p>
<p>– 提升肌肤天然保护层功能，帮助预防慢性及破坏性炎症。</p>
<p>– 特别适合完成医学疗程后洁肤之用。</p>
<p>– 适合玟瑰痤疮及其他皮肤问题征状用者使用。</p>
<p>– 适用于干性及/或敏感, 及受损肌肤。</p>

<p>主要成分</p>
<p>– 蜀葵提取物</p>
<p>– 枣子提取物</p>
<p>– 吡啶硫酮锌</p>$sm$, $sm$<p>Skin type: dry / sensitive to normal</p>
<p>Gently removes makeup, pollutants, bacteria and dirt without compromising the barrier, irritating or drying the skin.</p>
<p>Key benefits</p>
<p>– Supports the natural barrier and helps prevent chronic inflammation</p>
<p>– Suitable after medical treatments</p>
<p>– Suitable for rosacea and other skin concerns</p>
<p>– For dry, sensitive and compromised skin</p>
<p>Key ingredients</p>
<p>– Marshmallow extract</p>
<p>– Date extract</p>
<p>– Zinc pyrithione</p>$sm$, 280::numeric, 20, $sm$["/images/products/prod-15@2x.jpg"]$sm$, 215),
  ($sm$epionce$sm$, $sm$normal-or-combination-skin-kit$sm$, $sm$中性或混合肌套裝$sm$, $sm$中性或混合肌套装$sm$, $sm$Normal or Combination Skin Kit$sm$, $sm$<p>輕便套裝能讓你體驗Epionce為你帶來健康的肌膚。每日使用除了可改善皮膚的整體健康狀況，更會令你容光煥發、回復青春光彩。</p>

<p>套裝包括:</p>
<p>– Lytic潔面啫喱 12ml</p>
<p>– 潔淨爽膚水 18ml</p>
<p>– Lytic修復霜 12ml</p>
<p>– IDS抗敵精華 12ml</p>
<p>– 再生美肌乳液 12ml</p>$sm$, $sm$<p>轻便套装能让你体验Epionce为你带来健康的肌肤。每日使用除了可改善皮肤的整体健康状况，更会令你容光焕发、回复青春光彩。</p>

<p>套装包括:</p>
<p>– Lytic洁面啫喱 12ml</p>
<p>– 洁净爽肤水 18ml</p>
<p>– Lytic修复霜 12ml</p>
<p>– IDS抗敌精华 12ml</p>
<p>– 再生美肌乳液 12ml</p>$sm$, $sm$<p>A travel-size kit to experience Epionce for healthier, more radiant skin.</p>
<p>Includes:</p>
<p>– Lytic Gel Cleanser 12ml</p>
<p>– Purifying Toner 18ml</p>
<p>– Lytic Repair Cream 12ml</p>
<p>– IDS Serum 12ml</p>
<p>– Renewal Facial Lotion 12ml</p>$sm$, 460::numeric, 20, $sm$["/images/products/prod-16@2x.jpg"]$sm$, 214),
  ($sm$epionce$sm$, $sm$anti-inflammatory-acne-cream$sm$, $sm$抗炎淨痘霜$sm$, $sm$抗炎净痘霜$sm$, $sm$Anti-Inflammatory Acne Cream$sm$, $sm$<p>全新針對暗瘡護理的淨痘霜，經臨床 測試，有效為面部和身體上的頑固暗瘡提供快速改善，而且無刺激和不會引起肌膚乾燥。</p>

<p>主要功效</p>
<p>– 針對面部及身體暗瘡，有效快速重點改善</p>
<p>– 溫和成份証實有效改善暗瘡但無刺激</p>
<p>– 滲透至毛孔底層，有助潔淨毛孔及預防暗瘡形成</p>
<p>– 有助減少疤痕形成、泛紅和色素沈澱</p>
<p>– 臨床證明能針對單個或多個肌膚病變</p>

<p>主要成份</p>
<p>– 硫磺4%</p>
<p>– 單乙酸間苯二酚酯3%</p>
<p>– 薄荷</p>
<p>– 留蘭香油</p>
<p>– 壬二酸</p>
<p>– 葵花籽油</p>
<p>– 椰子油</p>
<p>– 米糠</p>
<p>– 辣椒</p>
<p>– 吡啶硫酮鋅</p>$sm$, $sm$<p>全新针对暗疮护理的净痘霜，经临床 测试，有效为面部和身体上的顽固暗疮提供快速改善，而且无刺激和不会引起肌肤干燥。</p>

<p>主要功效</p>
<p>– 针对面部及身体暗疮，有效快速重点改善</p>
<p>– 温和成份证实有效改善暗疮但无刺激</p>
<p>– 渗透至毛孔底层，有助洁净毛孔及预防暗疮形成</p>
<p>– 有助减少疤痕形成、泛红和色素沉淀</p>
<p>– 临床证明能针对单个或多个肌肤病变</p>

<p>主要成份</p>
<p>– 硫磺4%</p>
<p>– 单乙酸间苯二酚酯3%</p>
<p>– 薄荷</p>
<p>– 留兰香油</p>
<p>– 壬二酸</p>
<p>– 葵花籽油</p>
<p>– 椰子油</p>
<p>– 米糠</p>
<p>– 辣椒</p>
<p>– 吡啶硫酮锌</p>$sm$, $sm$<p>Clinically tested acne cream for stubborn facial and body breakouts. Fast improvement without irritation or dryness.</p>
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
<p>– Zinc pyrithione</p>$sm$, 385::numeric, 20, $sm$["/images/products/prod-17@2x.jpg"]$sm$, 213)
) as v(brand_slug, slug, title_zh_hk, title_zh_cn, title_en, description_zh_hk, description_zh_cn, description_en, price_hkd, stock, image_paths, sort)
join public.brands b on b.slug = v.brand_slug;