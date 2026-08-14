delete from public.products;
insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, v.slug, v.title_zh_hk, v.title_zh_cn, v.title_en,
  v.description_zh_hk, v.description_zh_cn, v.description_en,
  v.price_hkd, v.stock, v.image_paths::jsonb, 'on_sale', v.sort
from (values
  ($sm$dermaquest$sm$, $sm$3d-stem-cell-hydrating-firming-serum$sm$, $sm$3D幹細胞水嫩緊肌精華$sm$, $sm$3D干细胞水嫩紧肌精华$sm$, $sm$3D Stem Cell Hydrating Firming Serum$sm$, $sm$<p>適合所有肌膚<br />
突破一般幹細胞精華，加入多種高濃度醫學植物幹細胞，高效修復肌膚，極緻提升、再生及亮白。配合醫學蛋白肽及透明質酸鈉，發揮強大鎖水嫩肌功效，使肌膚持久水潤有光澤。</p>
<p>主要功效<br />
– 升級版3D鎖水提升科技<br />
– 收緊肌膚組織，從根源改善皺紋及肌膚粗糙問題<br />
– 喚醒疲倦肌膚，回復水潤光澤感</p>
<p>主要成份<br />
– 梔子花幹細胞<br />
– 紫錐花幹細胞<br />
– 紫丁香幹細胞<br />
– 透明質酸鈉</p>$sm$, $sm$<p>适合所有肌肤<br />
突破一般干细胞精华，加入多种高浓度医学植物干细胞，高效修复肌肤，极致提升、再生及亮白。配合医学蛋白肽及透明质酸钠，发挥强大锁水嫩肌功效，使肌肤持久水润有光泽。</p>
<p>主要功效<br />
– 升级版3D锁水提升科技<br />
– 收紧肌肤组织，从根源改善皱纹及肌肤粗糙问题<br />
– 唤醒疲倦肌肤，回复水润光泽感</p>
<p>主要成份<br />
– 栀子花干细胞<br />
– 紫锥花干细胞<br />
– 紫丁香干细胞<br />
– 透明质酸钠</p>$sm$, $sm$<p>Suitable for all skin types</p>
<p>A medical-grade plant stem-cell serum with peptides and sodium hyaluronate for repair, lift, brightening and lasting hydration.</p>
<p>Key benefits</p>
<p>– Upgraded 3D hydration and lifting technology</p>
<p>– Tightens skin and helps improve wrinkles and roughness at the source</p>
<p>– Revives tired skin with a dewy glow</p>
<p>Key ingredients</p>
<p>– Gardenia stem cells</p>
<p>– Echinacea stem cells</p>
<p>– Lilac stem cells</p>
<p>– Sodium hyaluronate</p>$sm$, 2200::numeric, 20, $sm$["/images/products/prod-1@2x.jpg"]$sm$, 229),
  ($sm$dermaquest$sm$, $sm$3d-stem-cell-eye-cream$sm$, $sm$3D幹細胞眼霜$sm$, $sm$3D干细胞眼霜$sm$, $sm$3D Stem Cell Eye Cream$sm$, $sm$<p>適合所有肌膚</p>
<p>最新研發的海洋生物科技，配合高純度梔子花及海檳刺芹幹細胞、醫學蛋白肽及其他有效成份，直接解決眼袋及眼皮下垂等問題。全面收緊眼部皮膚，提升輪廓。3D幹細胞眼霜同時減淡黑眼圈及眼紋，令雙眼回復明亮光彩。</p>

<p>主要功效</p>
<p>– 強效醫學幹細胞配方改善眼紋及眼袋問題</p>
<p>– 含豐富抗氧化物</p>
<p>– 提供保濕功能，提升及縮緊眼部肌膚</p>

<p>主要成份</p>
<p>– 海濱刺芹幹細胞</p>
<p>– 梔子花幹細胞</p>
<p>– 海茴香幹細胞</p>$sm$, $sm$<p>适合所有肌肤</p>
<p>最新研发的海洋生物科技，配合高纯度栀子花及海槟刺芹干细胞、医学蛋白肽及其他有效成份，直接解决眼袋及眼皮下垂等问题。全面收紧眼部皮肤，提升轮廓。3D干细胞眼霜同时减淡黑眼圈及眼纹，令双眼回复明亮光彩。</p>

<p>主要功效</p>
<p>– 强效医学干细胞配方改善眼纹及眼袋问题</p>
<p>– 含丰富抗氧化物</p>
<p>– 提供保湿功能，提升及缩紧眼部肌肤</p>

<p>主要成份</p>
<p>– 海滨刺芹干细胞</p>
<p>– 栀子花干细胞</p>
<p>– 海茴香干细胞</p>$sm$, $sm$<p>Suitable for all skin types</p>
<p>Marine biotechnology with gardenia and sea holly stem cells, peptides and actives to target eye bags, sagging lids, dark circles and fine lines.</p>
<p>Key benefits</p>
<p>– Medical stem-cell formula for wrinkles and puffiness</p>
<p>– Rich in antioxidants</p>
<p>– Hydrates, lifts and firms the eye contour</p>
<p>Key ingredients</p>
<p>– Sea holly stem cells</p>
<p>– Gardenia stem cells</p>
<p>– Sea fennel stem cells</p>$sm$, 890::numeric, 20, $sm$["/images/products/prod-2@2x.jpg"]$sm$, 228),
  ($sm$dermaquest$sm$, $sm$3d-stem-cell-face-eye-cream$sm$, $sm$3D幹細胞眼面霜$sm$, $sm$3D干细胞眼面霜$sm$, $sm$3D Stem Cell Face & Eye Cream$sm$, $sm$<p>適合所有肌膚</p>
<p>透過專利醫學幹細胞培育技術而研發，終極解决老化肌膚問題，同步完成提升、再生及亮白3大美容效果。以海洋生物科技、醫學幹細胞及蛋白肽等配方，刺激骨膠原產生緊縮作用，達到媲美激光美容的提升緊緻療效。</p>

<p>主要功效</p>
<p>– 亮白、修復、抗衰老</p>
<p>– 減淡幼紋及皺紋</p>
<p>– 改善肌肉鬆弛，提升面部輪廓</p>
<p>– 收緊肌膚組織，從根源改善皺紋及肌膚粗糙等問題</p>

<p>主要成份</p>
<p>– 火絨草幹細胞</p>
<p>– 梔子花幹細胞</p>
<p>– 海茴香幹細胞</p>$sm$, $sm$<p>适合所有肌肤</p>
<p>透过专利医学干细胞培育技术而研发，终极解决老化肌肤问题，同步完成提升、再生及亮白3大美容效果。以海洋生物科技、医学干细胞及蛋白肽等配方，刺激骨胶原产生紧缩作用，达到媲美激光美容的提升紧致疗效。</p>

<p>主要功效</p>
<p>– 亮白、修复、抗衰老</p>
<p>– 减淡幼纹及皱纹</p>
<p>– 改善肌肉松弛，提升面部轮廓</p>
<p>– 收紧肌肤组织，从根源改善皱纹及肌肤粗糙等问题</p>

<p>主要成份</p>
<p>– 火绒草干细胞</p>
<p>– 栀子花干细胞</p>
<p>– 海茴香干细胞</p>$sm$, $sm$<p>Suitable for all skin types</p>
<p>Patented medical stem-cell cultivation for ageing skin: lift, regenerate and brighten in one cream, with a firming effect comparable to laser lifting.</p>
<p>Key benefits</p>
<p>– Brighten, repair and anti-age</p>
<p>– Soften fine lines and wrinkles</p>
<p>– Improve slackness and lift facial contours</p>
<p>– Tighten tissue and help roughness at the source</p>
<p>Key ingredients</p>
<p>– Edelweiss stem cells</p>
<p>– Gardenia stem cells</p>
<p>– Sea fennel stem cells</p>$sm$, 2200::numeric, 20, $sm$["/images/products/prod-3@2x.jpg"]$sm$, 227),
  ($sm$dermaquest$sm$, $sm$b5-intensive-concentrate-serum$sm$, $sm$B5特效濃縮精華$sm$, $sm$B5特效浓缩精华$sm$, $sm$B5 Intensive Concentrate Serum$sm$, $sm$<p class="p1"><b>B5特效濃縮精華</b></p>
<p class="p2">適合所有肌膚</p>
<p class="p2"><b>功效</b></p>
<ul class="ul1">
<li class="li2">鎖緊水分於肌膚底，改善天然保濕能力</li>
<li class="li2">促進肌膚細胞再生，減少細紋及皺紋</li>
<li class="li2">以專利滲透技術，使精華能迅速滲透至皮膚底層，高效保濕，肌膚即時回復彈性、緊緻、亮澤。醫學級的B5 特效濃縮精華適用於任何肌膚。主要功效
<p>– 鎖緊水分於肌膚底層，改善天然保濕能力</p>
<p>– 促進肌膚細胞再生，減少細紋及皺紋</p>
<p>– 提升肌膚緊緻度、柔軟度及彈性</p>

<p>主要成份<br />
– 透明質酸鈉 – 40%</p>
<p>– 維他命B5</p>
<p>– 海洋酵素</p>
<p>– Actifirm TS</li>
</ul>$sm$, $sm$<p class="p1"><b>B5特效浓缩精华</b></p>
<p class="p2">适合所有肌肤</p>
<p class="p2"><b>功效</b></p>
<ul class="ul1">
<li class="li2">锁紧水分于肌肤底，改善天然保湿能力</li>
<li class="li2">促进肌肤细胞再生，减少细纹及皱纹</li>
<li class="li2">以专利渗透技术，使精华能迅速渗透至皮肤底层，高效保湿，肌肤即时回复弹性、紧致、亮泽。医学级的B5 特效浓缩精华适用于任何肌肤。主要功效
<p>– 锁紧水分于肌肤底层，改善天然保湿能力</p>
<p>– 促进肌肤细胞再生，减少细纹及皱纹</p>
<p>– 提升肌肤紧致度、柔软度及弹性</p>

<p>主要成份<br />
– 透明质酸钠 – 40%</p>
<p>– 维他命B5</p>
<p>– 海洋酵素</p>
<p>– Actifirm TS</li>
</ul>$sm$, $sm$<p>Suitable for all skin types</p>
<p>Locks moisture into the skin, supports cell renewal and reduces fine lines. Patented penetration delivers hydration so skin feels elastic, firm and radiant.</p>
<p>Key benefits</p>
<p>– Locks in moisture and improves natural hydration</p>
<p>– Supports cell renewal and reduces fine lines</p>
<p>– Improves firmness, softness and elasticity</p>
<p>Key ingredients</p>
<p>– Sodium hyaluronate 40%</p>
<p>– Vitamin B5</p>
<p>– Marine enzymes</p>
<p>– Actifirm TS</p>$sm$, 790::numeric, 20, $sm$["/images/products/prod-4@2x.jpg"]$sm$, 226),
  ($sm$dermaquest$sm$, $sm$peptide-firming-eye-cream$sm$, $sm$Peptide緊膚眼霜$sm$, $sm$Peptide紧肤眼霜$sm$, $sm$Peptide Firming Eye Cream$sm$, $sm$<p>適合所有肌膚</p>
<p>專為脆弱的眼部肌膚而設，蘊含多種蛋白肽精華，有助重組骨膠原及彈性蛋白，撫平細紋及皺紋。產品同時針對黑眼圈及眼袋浮腫等問題，使雙眼回復明亮緊緻。</p>

<p>主要功效</p>
<p>– 強效抗氧化成份中和自由基，保護肌膚細胞</p>
<p>– 重組肌膚細胞，使肌膚緊緻飽滿，預防及撫平眼部皺紋</p>
<p>– 保護肌膚的膠原蛋白及彈性蛋白</p>
<p>– 舒緩眼袋浮腫</p>

<p>主要成份</p>
<p>– 環狀四胜肽</p>
<p>– 六元胜肽</p>
<p>– 五元胜肽酸</p>
<p>– 四胜肽棕櫚酸脂</p>
<p>– 氧化物還原酵素</p>
<p>– 透明質酸鈉</p>$sm$, $sm$<p>适合所有肌肤</p>
<p>专为脆弱的眼部肌肤而设，蕴含多种蛋白肽精华，有助重组骨胶原及弹性蛋白，抚平细纹及皱纹。产品同时针对黑眼圈及眼袋浮肿等问题，使双眼回复明亮紧致。</p>

<p>主要功效</p>
<p>– 强效抗氧化成份中和自由基，保护肌肤细胞</p>
<p>– 重组肌肤细胞，使肌肤紧致饱满，预防及抚平眼部皱纹</p>
<p>– 保护肌肤的胶原蛋白及弹性蛋白</p>
<p>– 舒缓眼袋浮肿</p>

<p>主要成份</p>
<p>– 环状四胜肽</p>
<p>– 六元胜肽</p>
<p>– 五元胜肽酸</p>
<p>– 四胜肽棕榈酸脂</p>
<p>– 氧化物还原酵素</p>
<p>– 透明质酸钠</p>$sm$, $sm$<p>Suitable for all skin types</p>
<p>Peptide-rich cream for delicate eye skin: rebuilds collagen and elastin, smooths lines, and targets dark circles and puffiness.</p>
<p>Key benefits</p>
<p>– Antioxidants to help protect skin cells</p>
<p>– Rebuilds for a firmer, fuller look and helps prevent eye wrinkles</p>
<p>– Helps protect collagen and elastin</p>
<p>– Soothes puffy eye bags</p>
<p>Key ingredients</p>
<p>– Cyclic tetrapeptide</p>
<p>– Hexapeptide</p>
<p>– Pentapeptide acid</p>
<p>– Palmitoyl tetrapeptide</p>
<p>– Oxidoreductase</p>
<p>– Sodium hyaluronate</p>$sm$, 850::numeric, 20, $sm$["/images/products/prod-5@2x.jpg"]$sm$, 225),
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
<p>– Sodium hyaluronate</p>$sm$, 480::numeric, 20, $sm$["/images/products/prod-10@2x.jpg"]$sm$, 220),
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
<p>– Zinc pyrithione</p>$sm$, 385::numeric, 20, $sm$["/images/products/prod-17@2x.jpg"]$sm$, 213),
  ($sm$lanluis$sm$, $sm$youthful-bust-enriching-cream$sm$, $sm$魅力幼肌豐盈乳霜$sm$, $sm$魅力幼肌丰盈乳霜$sm$, $sm$Youthful Bust Enriching Cream$sm$, $sm$<p>含有豐富的植物提取精華，特殊活躍成份加強腺體循環及預防淤塞，對女性有美胸功效，在胸部周圍進行邊擦抹邊按摩的方式，可以保養修護女性的胸部，使胸部豐滿，更有魅力。</p>

<p>主要成份</p>
<p>– 活泉水</p>
<p>– 啤酒花萃取物</p>
<p>– 紅花萃取物</p>
<p>– 百合萃取物</p>
<p>– 酸棗仁萃取物</p>
<p>– 維生素A和D</p>

<p>適合人士</p>
<p>– 適用於產後鬆弛</p>
<p>– 乳房萎縮</p>
<p>– 機能減退</p>
<p>– 乳房變形</p>
<p>– 下垂</p>$sm$, $sm$<p>含有丰富的植物提取精华，特殊活跃成份加强腺体循环及预防淤塞，对女性有美胸功效，在胸部周围进行边擦抹边按摩的方式，可以保养修护女性的胸部，使胸部丰满，更有魅力。</p>

<p>主要成份</p>
<p>– 活泉水</p>
<p>– 啤酒花萃取物</p>
<p>– 红花萃取物</p>
<p>– 百合萃取物</p>
<p>– 酸枣仁萃取物</p>
<p>– 维生素A和D</p>

<p>适合人士</p>
<p>– 适用于产后松弛</p>
<p>– 乳房萎缩</p>
<p>– 机能减退</p>
<p>– 乳房变形</p>
<p>– 下垂</p>$sm$, $sm$<p>Rich botanical extracts and actives to support glandular circulation and help prevent congestion. Massage around the bust to nourish, plump and enhance contour.</p>
<p>Key ingredients</p>
<p>– Spring water</p>
<p>– Hops extract</p>
<p>– Safflower extract</p>
<p>– Lily extract</p>
<p>– Ziziphus seed extract</p>
<p>– Vitamins A and D</p>
<p>Suitable for</p>
<p>– Postpartum laxity</p>
<p>– Breast atrophy</p>
<p>– Reduced function</p>
<p>– Shape changes</p>
<p>– Sagging</p>$sm$, 838::numeric, 20, $sm$["/images/products/prod-18@2x.jpg"]$sm$, 212),
  ($sm$lanluis$sm$, $sm$bust-enriching-essence-set$sm$, $sm$魅力豐盈精華套裝$sm$, $sm$魅力丰盈精华套装$sm$, $sm$Bust Enriching Essence Set$sm$, $sm$<p>含有多種活性物質，可以使皮膚細胞恢復水分並增加皮膚彈性。 血清可以幫助懷孕後的女性重建健康的乳房。</p>

<p>主要成份</p>
<p>– 蘆薈</p>
<p>– 扁桃</p>
<p>– 月見草</p>
<p>– 尾草</p>
<p>– 天竺葵</p>
<p>– 茴香</p>$sm$, $sm$<p>含有多种活性物质，可以使皮肤细胞恢复水分并增加皮肤弹性。 血清可以帮助怀孕后的女性重建健康的乳房。</p>

<p>主要成份</p>
<p>– 芦荟</p>
<p>– 扁桃</p>
<p>– 月见草</p>
<p>– 尾草</p>
<p>– 天竺葵</p>
<p>– 茴香</p>$sm$, $sm$<p>Active botanicals help restore moisture and elasticity. The serum supports healthy bust recovery after pregnancy.</p>
<p>Key ingredients</p>
<p>– Aloe vera</p>
<p>– Almond</p>
<p>– Evening primrose</p>
<p>– Clary sage</p>
<p>– Geranium</p>
<p>– Fennel</p>$sm$, 1228::numeric, 20, $sm$["/images/products/prod-19@2x.jpg"]$sm$, 211),
  ($sm$lanluis$sm$, $sm$bust-sculpting-essence-set$sm$, $sm$魅力雕塑精華套裝$sm$, $sm$魅力雕塑精华套装$sm$, $sm$Bust Sculpting Essence Set$sm$, $sm$<p>Lanluis魅力美胸塑形精華液，純植物配方，可防止乳房下垂。 改善游離脂肪有助乳房緊實。</p>

<p>主要成份</p>
<p>– 蘆薈</p>
<p>– 月見草</p>
<p>– 迷迭香</p>
<p>– 天竺葵</p>
<p>– 杜松果</p>
<p>– 薄荷</p>$sm$, $sm$<p>Lanluis魅力美胸塑形精华液，纯植物配方，可防止乳房下垂。 改善游离脂肪有助乳房紧实。</p>

<p>主要成份</p>
<p>– 芦荟</p>
<p>– 月见草</p>
<p>– 迷迭香</p>
<p>– 天竺葵</p>
<p>– 杜松果</p>
<p>– 薄荷</p>$sm$, $sm$<p>Lanluis bust-sculpting essence with a plant formula to help prevent sagging and firm by improving free fat.</p>
<p>Key ingredients</p>
<p>– Aloe vera</p>
<p>– Evening primrose</p>
<p>– Rosemary</p>
<p>– Geranium</p>
<p>– Juniper berry</p>
<p>– Peppermint</p>$sm$, 1228::numeric, 20, $sm$["/images/products/prod-20@2x.jpg"]$sm$, 210),
  ($sm$lanluis$sm$, $sm$breast-health-essence-set$sm$, $sm$魅力健乳精華套裝$sm$, $sm$魅力健乳精华套装$sm$, $sm$Breast Health Essence Set$sm$, $sm$<p>蘊含豐富天然植物成,有效幫助乳房乳腺移除障礙物,也能防止乳腺堵塞。平衡及調節內分泌有效疏通乳腺,減低腫脹,增強胸部優美線條,使胸部肌膚柔滑。</p>

<p>主要成份</p>
<p>– 蘆薈</p>
<p>– 月見草</p>
<p>– 迷迭香</p>
<p>– 天竺葵</p>
<p>– 杜松果</p>
<p>– 薄荷</p>$sm$, $sm$<p>蕴含丰富天然植物成,有效帮助乳房乳腺移除障碍物,也能防止乳腺堵塞。平衡及调节内分泌有效疏通乳腺,减低肿胀,增强胸部优美线条,使胸部肌肤柔滑。</p>

<p>主要成份</p>
<p>– 芦荟</p>
<p>– 月见草</p>
<p>– 迷迭香</p>
<p>– 天竺葵</p>
<p>– 杜松果</p>
<p>– 薄荷</p>$sm$, $sm$<p>Rich botanicals to help clear mammary ducts, balance endocrine function, reduce swelling, enhance contour and soften skin.</p>
<p>Key ingredients</p>
<p>– Aloe vera</p>
<p>– Evening primrose</p>
<p>– Rosemary</p>
<p>– Geranium</p>
<p>– Juniper berry</p>
<p>– Peppermint</p>$sm$, 1228::numeric, 20, $sm$["/images/products/prod-21@2x.jpg"]$sm$, 209),
  ($sm$lanluis$sm$, $sm$warming-palace-patch$sm$, $sm$暖宮秘貼$sm$, $sm$暖宫秘贴$sm$, $sm$Warming Palace Patch$sm$, $sm$<p>幫助平衡內分泌系統，調節激素分泌，減輕月經不適，增強子宮功能，滋潤皮膚，促進血液循環，緩解經前綜合症，調節月經週期，推遲更年期症狀並促進陰道分泌物。</p>

<p>主要成份</p>
<p>– 甜杏仁</p>
<p>– 月見草</p>
<p>– 川芎草</p>
<p>– 當歸</p>
<p>– 沒藥樹</p>$sm$, $sm$<p>帮助平衡内分泌系统，调节激素分泌，减轻月经不适，增强子宫功能，滋润皮肤，促进血液循环，缓解经前综合症，调节月经周期，推迟更年期症状并促进阴道分泌物。</p>

<p>主要成份</p>
<p>– 甜杏仁</p>
<p>– 月见草</p>
<p>– 川芎草</p>
<p>– 当归</p>
<p>– 没药树</p>$sm$, $sm$<p>Helps balance the endocrine system, ease menstrual discomfort, support uterine function, nourish skin, promote circulation, relieve PMS, regulate cycles, delay menopausal symptoms and support vaginal secretions.</p>
<p>Key ingredients</p>
<p>– Sweet almond</p>
<p>– Evening primrose</p>
<p>– Ligusticum</p>
<p>– Angelica</p>
<p>– Myrrh</p>$sm$, 648::numeric, 20, $sm$["/images/products/prod-22@2x.jpg"]$sm$, 208)
) as v(brand_slug, slug, title_zh_hk, title_zh_cn, title_en, description_zh_hk, description_zh_cn, description_en, price_hkd, stock, image_paths, sort)
join public.brands b on b.slug = v.brand_slug;