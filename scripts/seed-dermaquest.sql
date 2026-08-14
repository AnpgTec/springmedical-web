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
<p>– Sodium hyaluronate</p>$sm$, 850::numeric, 20, $sm$["/images/products/prod-5@2x.jpg"]$sm$, 225)
) as v(brand_slug, slug, title_zh_hk, title_zh_cn, title_en, description_zh_hk, description_zh_cn, description_en, price_hkd, stock, image_paths, sort)
join public.brands b on b.slug = v.brand_slug;