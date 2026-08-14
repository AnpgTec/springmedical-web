insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id, x.slug, x.title_zh_hk, x.title_zh_cn, x.title_en,
  x.description_zh_hk, x.description_zh_cn, x.description_en,
  x.price_hkd, x.stock, x.image_paths, 'on_sale', x.sort
from jsonb_to_recordset($json$[{"brand_slug":"lanluis","slug":"bust-sculpting-essence-set","title_zh_hk":"\u9b45\u529b\u96d5\u5851\u7cbe\u83ef\u5957\u88dd","title_zh_cn":"\u9b45\u529b\u96d5\u5851\u7cbe\u534e\u5957\u88c5","title_en":"Bust Sculpting Essence Set","description_zh_hk":"<p>Lanluis\u9b45\u529b\u7f8e\u80f8\u5851\u5f62\u7cbe\u83ef\u6db2\uff0c\u7d14\u690d\u7269\u914d\u65b9\uff0c\u53ef\u9632\u6b62\u4e73\u623f\u4e0b\u5782\u3002 \u6539\u5584\u6e38\u96e2\u8102\u80aa\u6709\u52a9\u4e73\u623f\u7dca\u5be6\u3002</p>\n\n<p>\u4e3b\u8981\u6210\u4efd</p>\n<p>\u2013 \u8606\u8588</p>\n<p>\u2013 \u6708\u898b\u8349</p>\n<p>\u2013 \u8ff7\u8fed\u9999</p>\n<p>\u2013 \u5929\u7afa\u8475</p>\n<p>\u2013 \u675c\u677e\u679c</p>\n<p>\u2013 \u8584\u8377</p>","description_zh_cn":"<p>Lanluis\u9b45\u529b\u7f8e\u80f8\u5851\u5f62\u7cbe\u534e\u6db2\uff0c\u7eaf\u690d\u7269\u914d\u65b9\uff0c\u53ef\u9632\u6b62\u4e73\u623f\u4e0b\u5782\u3002 \u6539\u5584\u6e38\u79bb\u8102\u80aa\u6709\u52a9\u4e73\u623f\u7d27\u5b9e\u3002</p>\n\n<p>\u4e3b\u8981\u6210\u4efd</p>\n<p>\u2013 \u82a6\u835f</p>\n<p>\u2013 \u6708\u89c1\u8349</p>\n<p>\u2013 \u8ff7\u8fed\u9999</p>\n<p>\u2013 \u5929\u7afa\u8475</p>\n<p>\u2013 \u675c\u677e\u679c</p>\n<p>\u2013 \u8584\u8377</p>","description_en":"<p>Lanluis bust-sculpting essence with a plant formula to help prevent sagging and firm by improving free fat.</p>\n<p>Key ingredients</p>\n<p>\u2013 Aloe vera</p>\n<p>\u2013 Evening primrose</p>\n<p>\u2013 Rosemary</p>\n<p>\u2013 Geranium</p>\n<p>\u2013 Juniper berry</p>\n<p>\u2013 Peppermint</p>","price_hkd":1228,"stock":20,"image_paths":["/images/products/prod-20@2x.jpg"],"sort":210}]$json$::jsonb) as x(
  brand_slug text, slug text, title_zh_hk text, title_zh_cn text, title_en text,
  description_zh_hk text, description_zh_cn text, description_en text,
  price_hkd numeric, stock int, image_paths jsonb, sort int
)
join public.brands b on b.slug = x.brand_slug;