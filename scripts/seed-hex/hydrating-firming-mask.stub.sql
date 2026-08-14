insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id,
  'hydrating-firming-mask',
  convert_from(decode('e6bda4e6bea4e7b78ae7b7bbe99da2e8869c','hex'),'utf8'),
  convert_from(decode('e6b6a6e6b3bde7b4a7e887b4e99da2e8869c','hex'),'utf8'),
  'Hydrating Firming Mask',
  '', '', '',
  395, 20,
  '["/images/products/prod-12@2x.jpg"]'::jsonb,
  'on_sale', 218
from public.brands b
where b.slug = 'epionce';