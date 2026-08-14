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