insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id,
  'anti-inflammatory-acne-cream',
  convert_from(decode('e68a97e7828ee6b7a8e79798e99c9c','hex'),'utf8'),
  convert_from(decode('e68a97e7828ee58780e79798e99c9c','hex'),'utf8'),
  'Anti-Inflammatory Acne Cream',
  '', '', '',
  385, 20,
  '["/images/products/prod-17@2x.jpg"]'::jsonb,
  'on_sale', 213
from public.brands b
where b.slug = 'epionce';