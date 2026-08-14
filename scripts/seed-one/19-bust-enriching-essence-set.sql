insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, x.slug, x.title_zh_hk, x.title_zh_cn, x.title_en,
  x.description_zh_hk, x.description_zh_cn, x.description_en,
  x.price_hkd, x.stock, x.image_paths, 'on_sale', x.sort
from jsonb_to_recordset($json$[{"brand_slug":"lanluis","slug":"bust-enriching-essence-set","title_zh_hk":"\u9b45\u529b\u8c50\u76c8\u7cbe\u83ef\u5957\u88dd","title_zh_cn":"\u9b45\u529b\u4e30\u76c8\u7cbe\u534e\u5957\u88c5","title_en":"Bust Enriching Essence Set","description_zh_hk":"<p>\u542b\u6709\u591a\u7a2e\u6d3b\u6027\u7269\u8cea\uff0c\u53ef\u4ee5\u4f7f\u76ae\u819a\u7d30\u80de\u6062\u5fa9\u6c34\u5206\u4e26\u589e\u52a0\u76ae\u819a\u5f48\u6027\u3002 \u8840\u6e05\u53ef\u4ee5\u5e6b\u52a9\u61f7\u5b55\u5f8c\u7684\u5973\u6027\u91cd\u5efa\u5065\u5eb7\u7684\u4e73\u623f\u3002</p>\n\n<p>\u4e3b\u8981\u6210\u4efd</p>\n<p>\u2013 \u8606\u8588</p>\n<p>\u2013 \u6241\u6843</p>\n<p>\u2013 \u6708\u898b\u8349</p>\n<p>\u2013 \u5c3e\u8349</p>\n<p>\u2013 \u5929\u7afa\u8475</p>\n<p>\u2013 \u8334\u9999</p>","description_zh_cn":"<p>\u542b\u6709\u591a\u79cd\u6d3b\u6027\u7269\u8d28\uff0c\u53ef\u4ee5\u4f7f\u76ae\u80a4\u7ec6\u80de\u6062\u590d\u6c34\u5206\u5e76\u589e\u52a0\u76ae\u80a4\u5f39\u6027\u3002 \u8840\u6e05\u53ef\u4ee5\u5e2e\u52a9\u6000\u5b55\u540e\u7684\u5973\u6027\u91cd\u5efa\u5065\u5eb7\u7684\u4e73\u623f\u3002</p>\n\n<p>\u4e3b\u8981\u6210\u4efd</p>\n<p>\u2013 \u82a6\u835f</p>\n<p>\u2013 \u6241\u6843</p>\n<p>\u2013 \u6708\u89c1\u8349</p>\n<p>\u2013 \u5c3e\u8349</p>\n<p>\u2013 \u5929\u7afa\u8475</p>\n<p>\u2013 \u8334\u9999</p>","description_en":"<p>Active botanicals help restore moisture and elasticity. The serum supports healthy bust recovery after pregnancy.</p>\n<p>Key ingredients</p>\n<p>\u2013 Aloe vera</p>\n<p>\u2013 Almond</p>\n<p>\u2013 Evening primrose</p>\n<p>\u2013 Clary sage</p>\n<p>\u2013 Geranium</p>\n<p>\u2013 Fennel</p>","price_hkd":1228,"stock":20,"image_paths":["/images/products/prod-19@2x.jpg"],"sort":211}]$json$::jsonb) as x(
  brand_slug text, slug text, title_zh_hk text, title_zh_cn text, title_en text,
  description_zh_hk text, description_zh_cn text, description_en text,
  price_hkd numeric, stock int, image_paths jsonb, sort int
)
join public.brands b on b.slug = x.brand_slug;