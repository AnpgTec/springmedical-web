insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, v.slug, v.title_zh_hk, v.title_zh_cn, v.title_en,
  v.description_zh_hk, v.description_zh_cn, v.description_en,
  v.price_hkd, v.stock, v.image_paths::jsonb, 'on_sale', v.sort
from (values
  ($sm$mesoestetic$sm$, $sm$4ha-hydrating-filler-serum$sm$, $sm$4HA保濕填充精華$sm$, $sm$4HA保湿填充精华$sm$, $sm$4HA Hydrating Filler Serum$sm$, $sm$<p>特別針對: 乾燥肌膚 / 皺紋 / 細紋及乾紋</p>

<p>4HA保濕填充精華以嶄新科技將於專業注射療程中使用的填充型透明質酸，結合3種不同分子量的透明質酸，締造瞬間撫平皺紋及多層注水的顯著效果。</p>
<p>此精華所蘊含的填充型透明質酸密度適中，容易被皮膚表層吸收；不但能充份填滿肌膚表層中細胞間的凹陷裂縫及增加其黏合性，更能即時撫平因老化過程而產生的細紋及皺紋，擊退歲月痕跡，重建平滑無暇肌。</p>
<p>另外此精華同時蘊含大分子量、中分子量及小分子量透明質酸，能秒速滲透至表皮層及真皮層中每一個細胞裂縫，為各肌層注入源源水份，打造肌底儲水庫及表層鎖水屏障；防止水份流走，全方位締造絲滑般細緻水嫩肌。</p>

<p>主要功效:</p>
<p>–   即時填充細胞間凹陷裂縫，撫平細紋及皺紋</p>
<p>–   打造肌底儲水庫及表層鎖水屏障，全方位儲水鎖水</p>
<p>–   改善肌膚緊緻度及彈性</p>
<p>–   強效保濕及肌膚預防老化</p>

<p>主要成份:</p>
<p>–   4HA保濕填充複合因子®&#xfe0f;</p>
<p>–    填充型透明質酸 (4000 kDa)</p>
<p>–    大分子量透明質酸 (2200 kDa)</p>
<p>–    中分子量透明質酸 (300 kDa)</p>
<p>–    小分子量透明質酸 (20 kDa)</p>
<p>–   抗透明質酸酶複合因子</p>
<p>–   強效抗老化複合因子</p>$sm$, $sm$<p>特别针对: 干燥肌肤 / 皱纹 / 细纹及干纹</p>

<p>4HA保湿填充精华以崭新科技将于专业注射疗程中使用的填充型透明质酸，结合3种不同分子量的透明质酸，缔造瞬间抚平皱纹及多层注水的显著效果。</p>
<p>此精华所蕴含的填充型透明质酸密度适中，容易被皮肤表层吸收；不但能充份填满肌肤表层中细胞间的凹陷裂缝及增加其黏合性，更能即时抚平因老化过程而产生的细纹及皱纹，击退岁月痕迹，重建平滑无暇肌。</p>
<p>另外此精华同时蕴含大分子量、中分子量及小分子量透明质酸，能秒速渗透至表皮层及真皮层中每一个细胞裂缝，为各肌层注入源源水份，打造肌底储水库及表层锁水屏障；防止水份流走，全方位缔造丝滑般细致水嫩肌。</p>

<p>主要功效:</p>
<p>–   即时填充细胞间凹陷裂缝，抚平细纹及皱纹</p>
<p>–   打造肌底储水库及表层锁水屏障，全方位储水锁水</p>
<p>–   改善肌肤紧致度及弹性</p>
<p>–   强效保湿及肌肤预防老化</p>

<p>主要成份:</p>
<p>–   4HA保湿填充复合因子®&#xfe0f;</p>
<p>–    填充型透明质酸 (4000 kDa)</p>
<p>–    大分子量透明质酸 (2200 kDa)</p>
<p>–    中分子量透明质酸 (300 kDa)</p>
<p>–    小分子量透明质酸 (20 kDa)</p>
<p>–   抗透明质酸酶复合因子</p>
<p>–   强效抗老化复合因子</p>$sm$, $sm$<p>Especially for dry skin, wrinkles, fine lines and dehydration lines</p>
<p>Combines filler-grade hyaluronic acid used in professional injection treatments with three additional molecular weights for instant smoothing and multi-layer hydration.</p>
<p>Key benefits</p>
<p>– Fills intercellular gaps and smooths fine lines</p>
<p>– Builds a deep reservoir and surface moisture barrier</p>
<p>– Improves firmness and elasticity</p>
<p>– Intense hydration and anti-ageing support</p>
<p>Key ingredients</p>
<p>– 4HA hydrating filler complex</p>
<p>– Filler HA (4000 kDa)</p>
<p>– High MW HA (2200 kDa)</p>
<p>– Medium MW HA (300 kDa)</p>
<p>– Low MW HA (20 kDa)</p>
<p>– Anti-hyaluronidase complex</p>
<p>– Anti-ageing complex</p>$sm$, 800::numeric, 20, $sm$["/images/products/prod-6@2x.jpg"]$sm$, 224),
  ($sm$mesoestetic$sm$, $sm$follicle-repair-serum$sm$, $sm$強化毛囊修復精華$sm$, $sm$强化毛囊修复精华$sm$, $sm$Follicle Repair Serum$sm$, $sm$<p>頭髮及毛囊生長的健康程度取決於毛母細胞含量，此產品之有效成分能增加毛母細胞含量，加快分裂速度。</p>

<p>主要功效</p>
<p>– 加強毛囊周邊的血液流量，將所需養份暢通無阻地傅送至毛囊</p>
<p>– 抑制5a-還原酵素I及II，減少對毛囊有直接影響的DHT</p>
<p>– 減少頭髮折斷及對抗脫髮</p>
<p>– 加速頭髮生長速度</p>

<p>主要成份</p>
<p>– 齊墩果酸</p>
<p>– 白茶萃取物</p>
<p>– 強化毛囊濃縮蛋白</p>$sm$, $sm$<p>头发及毛囊生长的健康程度取决于毛母细胞含量，此产品之有效成分能增加毛母细胞含量，加快分裂速度。</p>

<p>主要功效</p>
<p>– 加强毛囊周边的血液流量，将所需养份畅通无阻地傅送至毛囊</p>
<p>– 抑制5a-还原酵素I及II，减少对毛囊有直接影响的DHT</p>
<p>– 减少头发折断及对抗脱发</p>
<p>– 加速头发生长速度</p>

<p>主要成份</p>
<p>– 齐墩果酸</p>
<p>– 白茶萃取物</p>
<p>– 强化毛囊浓缩蛋白</p>$sm$, $sm$<p>Supports hair and follicle health by increasing hair matrix cell content and division rate.</p>
<p>Key benefits</p>
<p>– Improves peri-follicular blood flow to deliver nutrients</p>
<p>– Inhibits 5-alpha-reductase I and II to reduce DHT impact on follicles</p>
<p>– Helps reduce breakage and hair loss</p>
<p>– Helps accelerate hair growth</p>
<p>Key ingredients</p>
<p>– Oleanolic acid</p>
<p>– White tea extract</p>
<p>– Follicle-strengthening concentrated protein</p>$sm$, 860::numeric, 20, $sm$["/images/products/prod-7@2x.jpg"]$sm$, 223),
  ($sm$mesoestetic$sm$, $sm$centella-anti-inflammatory-repair-serum$sm$, $sm$積雪草抗炎修復精華$sm$, $sm$积雪草抗炎修复精华$sm$, $sm$Centella Anti-Inflammatory Repair Serum$sm$, $sm$<p>積雪草抗炎修復精華配方溫和，低刺激，特別適合敏感肌膚使用。積雪草提取物有促進皮膚受損組織癒合、舒緩及修復肌膚的功效；同時有助溶解細菌菌膜，達致抗菌降炎，建議用於療程後及家用護理。另外此有效成份可刺激真皮層膠原蛋白合成，有助減淡及平滑細紋，令肌膚緊緻光滑。此精華屬mesoestetic零菌精華系列之一，提取過程於密封式無菌情況下進行，全程受嚴格監控，確保精華安全、純淨、零污染。</p>
<p>主要功效</p>
<p>–   針對敏感皮膚的低刺激抗菌降炎配方</p>
<p>–   促進皮膚受損組織癒合，舒緩及修復肌膚</p>
<p>–   刺激真皮層膠原蛋白，有助減淡平滑細紋</p>

<p>主要成份</p>
<p>–   積雪草提取物0.5%</p>$sm$, $sm$<p>积雪草抗炎修复精华配方温和，低刺激，特别适合敏感肌肤使用。积雪草提取物有促进皮肤受损组织愈合、舒缓及修复肌肤的功效；同时有助溶解细菌菌膜，达致抗菌降炎，建议用于疗程后及家用护理。另外此有效成份可刺激真皮层胶原蛋白合成，有助减淡及平滑细纹，令肌肤紧致光滑。此精华属mesoestetic零菌精华系列之一，提取过程于密封式无菌情况下进行，全程受严格监控，确保精华安全、纯净、零污染。</p>
<p>主要功效</p>
<p>–   针对敏感皮肤的低刺激抗菌降炎配方</p>
<p>–   促进皮肤受损组织愈合，舒缓及修复肌肤</p>
<p>–   刺激真皮层胶原蛋白，有助减淡平滑细纹</p>

<p>主要成份</p>
<p>–   积雪草提取物0.5%</p>$sm$, $sm$<p>A mild, low-irritation formula for sensitive skin. Centella extract supports healing, soothing and repair, helps dissolve bacterial biofilm, and stimulates dermal collagen. Part of mesoestetic's sterile serum range, extracted in a sealed, monitored process.</p>
<p>Key benefits</p>
<p>– Low-irritation antibacterial and anti-inflammatory formula for sensitive skin</p>
<p>– Supports healing of damaged tissue</p>
<p>– Stimulates collagen to help smooth fine lines</p>
<p>Key ingredients</p>
<p>– Centella extract 0.5%</p>$sm$, 980::numeric, 20, $sm$["/images/products/prod-8@2x.jpg"]$sm$, 222),
  ($sm$mesoestetic$sm$, $sm$fast-growing-bamboo-serum$sm$, $sm$速長楠竹精華$sm$, $sm$速长楠竹精华$sm$, $sm$Fast-Growing Bamboo Serum$sm$, $sm$<p>楠竹為自然界生長速度最快的植物之一，因速長楠竹有助毛竹持續吸取所需養分及不斷自我修復，使其自生速度加快，達致營養飽滿，四季長青效果。速長楠竹不但令肌膚不斷自生，更能無間斷填補肌膚所需養份，令肌膚即時抗皺，回復光滑彈性，重拾年輕青春美態。</p>
<p>速長楠竹精華有即時增強肌膚張力的效果，其有效成份能主動擊退面部疲態，迅即為肌底細胞提供無限量水份，令肌膚飽滿亮白。其不斷自我修復及緊緻提升功效，有助撫平因肌膚老化引起的細紋及表情紋，達致無間斷光速抗老化，讓肌膚迅速回復年輕美態。</p>

<p>主要功效</p>
<p>–   重點擊退肌膚疲倦老態</p>
<p>–   促進膠原蛋白合成速度，令肌膚持續抗氧美白</p>
<p>–   強效消除肌膚鬆弛，重新塑造年輕肌膚輪廓</p>$sm$, $sm$<p>楠竹为自然界生长速度最快的植物之一，因速长楠竹有助毛竹持续吸取所需养分及不断自我修复，使其自生速度加快，达致营养饱满，四季长青效果。速长楠竹不但令肌肤不断自生，更能无间断填补肌肤所需养份，令肌肤即时抗皱，回复光滑弹性，重拾年轻青春美态。</p>
<p>速长楠竹精华有即时增强肌肤张力的效果，其有效成份能主动击退面部疲态，迅即为肌底细胞提供无限量水份，令肌肤饱满亮白。其不断自我修复及紧致提升功效，有助抚平因肌肤老化引起的细纹及表情纹，达致无间断光速抗老化，让肌肤迅速回复年轻美态。</p>

<p>主要功效</p>
<p>–   重点击退肌肤疲倦老态</p>
<p>–   促进胶原蛋白合成速度，令肌肤持续抗氧美白</p>
<p>–   强效消除肌肤松弛，重新塑造年轻肌肤轮廓</p>$sm$, $sm$<p>Inspired by one of nature's fastest-growing plants. Helps skin self-renew, replenish nutrients, resist wrinkles and regain smoothness and elasticity. Instantly boosts tension, hydrates, brightens and helps lift slackness.</p>
<p>Key benefits</p>
<p>– Targets tired, aged-looking skin</p>
<p>– Supports collagen synthesis, antioxidant and brightening</p>
<p>– Helps reduce slackness and reshape a youthful contour</p>$sm$, 620::numeric, 20, $sm$["/images/products/prod-9@2x.jpg"]$sm$, 221),
  ($sm$mesoestetic$sm$, $sm$hydra-magnet-mask$sm$, $sm$鎖水磁石面膜$sm$, $sm$锁水磁石面膜$sm$, $sm$Hydra Magnet Mask$sm$, $sm$<p>特別針對 缺水/粗糙肌膚</p>
<p>鎖水磁石面膜以「外鎖水，內吸水」的保濕概念，為缺水肌膚提供極致水潤修護。配方採用高端鎖水磁石科技，配合透明質酸鈉，使水份與角質細胞緊密結合，組成長效鎖水網，即時改善肌膚因乾燥而引發的不適及粗糙感，讓肌膚持久水嫩。另加入擁有「吸水花」美譽的三色堇萃取，瞬間增強細胞吸水力，促進及調節真皮層水循環，為肌膚深層保濕，打造飽滿水嫩肌膚。</p>

<p>主要功效</p>
<p>– 為乾燥肌膚提供極致水潤 修護</p>
<p>– 於肌膚表面形成長效鎖水網，持久保濕</p>
<p>– 提升細胞吸水力，自動調節肌膚水循環</p>
<p>– 即時舒緩乾燥感，平滑粗糙肌膚</p>

<p>主要成份</p>
<p>– 鎖水磁石(異構寡糖)</p>
<p>– 三色堇萃取</p>
<p>– 透明質酸鈉</p>$sm$, $sm$<p>特别针对 缺水/粗糙肌肤</p>
<p>锁水磁石面膜以「外锁水，内吸水」的保湿概念，为缺水肌肤提供极致水润修护。配方采用高端锁水磁石科技，配合透明质酸钠，使水份与角质细胞紧密结合，组成长效锁水网，即时改善肌肤因干燥而引发的不适及粗糙感，让肌肤持久水嫩。另加入拥有「吸水花」美誉的三色堇萃取，瞬间增强细胞吸水力，促进及调节真皮层水循环，为肌肤深层保湿，打造饱满水嫩肌肤。</p>

<p>主要功效</p>
<p>– 为干燥肌肤提供极致水润 修护</p>
<p>– 于肌肤表面形成长效锁水网，持久保湿</p>
<p>– 提升细胞吸水力，自动调节肌肤水循环</p>
<p>– 即时舒缓干燥感，平滑粗糙肌肤</p>

<p>主要成份</p>
<p>– 锁水磁石(异构寡糖)</p>
<p>– 三色堇萃取</p>
<p>– 透明质酸钠</p>$sm$, $sm$<p>Especially for dehydrated / rough skin</p>
<p>Locks moisture on the outside and draws water in. Hydra-magnet technology with sodium hyaluronate forms a lasting moisture network; pansy extract (the “water-absorbing flower”) boosts cellular water uptake.</p>
<p>Key benefits</p>
<p>– Intense hydration repair for dry skin</p>
<p>– Long-lasting surface moisture network</p>
<p>– Improves cellular water uptake and circulation</p>
<p>– Instantly soothes dryness and smooths roughness</p>
<p>Key ingredients</p>
<p>– Hydra magnet (isomaltooligosaccharide)</p>
<p>– Pansy extract</p>
<p>– Sodium hyaluronate</p>$sm$, 480::numeric, 20, $sm$["/images/products/prod-10@2x.jpg"]$sm$, 220)
) as v(brand_slug, slug, title_zh_hk, title_zh_cn, title_en, description_zh_hk, description_zh_cn, description_en, price_hkd, stock, image_paths, sort)
join public.brands b on b.slug = v.brand_slug;