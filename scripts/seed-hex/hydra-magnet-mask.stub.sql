insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id,
  'hydra-magnet-mask',
  convert_from(decode('e98e96e6b0b4e7a381e79fb3e99da2e8869c','hex'),'utf8'),
  convert_from(decode('e99481e6b0b4e7a381e79fb3e99da2e8869c','hex'),'utf8'),
  'Hydra Magnet Mask',
  '', '', '',
  480, 20,
  '["/images/products/prod-10@2x.jpg"]'::jsonb,
  'on_sale', 220
from public.brands b
where b.slug = 'mesoestetic';