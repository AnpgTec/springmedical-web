insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, v.slug, v.title_zh_hk, v.title_zh_cn, v.title_en,
  v.description_zh_hk, v.description_zh_cn, v.description_en,
  v.price_hkd, v.stock, v.image_paths::jsonb, 'on_sale', v.sort
from (values
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