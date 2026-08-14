insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id,
  'fast-growing-bamboo-serum',
  convert_from(decode('e9809fe995b7e6a5a0e7abb9e7b2bee88faf','hex'),'utf8'),
  convert_from(decode('e9809fe995bfe6a5a0e7abb9e7b2bee58d8e','hex'),'utf8'),
  'Fast-Growing Bamboo Serum',
  '', '', '',
  620, 20,
  '["/images/products/prod-9@2x.jpg"]'::jsonb,
  'on_sale', 221
from public.brands b
where b.slug = 'mesoestetic';