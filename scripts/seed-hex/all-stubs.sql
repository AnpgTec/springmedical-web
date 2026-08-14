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

insert into public.products (
  brand_id, slug, title_zh_hk, title_zh_cn, title_en,
  description_zh_hk, description_zh_cn, description_en,
  price_hkd, stock, image_paths, status, sort
)
select b.id,
  'rapid-recovery-treatment-kit',
  convert_from(decode('e5bfabe9809fe4bfaee5bea9e79982e69588e7b584e59088','hex'),'utf8'),
  convert_from(decode('e5bfabe9809fe4bfaee5a48de79697e69588e7bb84e59088','hex'),'utf8'),
  'Rapid Recovery Treatment Kit',
  '', '', '',
  395, 20,
  '["/images/products/prod-13@2x.jpg"]'::jsonb,
  'on_sale', 217
from public.brands b
where b.slug = 'epionce';

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