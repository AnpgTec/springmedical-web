import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
import { PageShell } from "@/components/PageShell";
import { L, siteMeta, t } from "@/content/i18n/ui";
import { treatments } from "@/content/treatments/catalog";
import { isLocale, locales, pick, type Locale } from "@/lib/i18n";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.280590066412!2d114.16958140643501!3d22.30061065635431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404016650886265%3A0x1676e474a9e645bf!2zU3ByaW5nIE1lZGljYWwg5pil5aSp6Yar5a24576O5a65!5e0!3m2!1szh-TW!2shk!4v1661751972459!5m2!1szh-TW!2shk";

const copy = {
  metaTitle: L("聯絡我們｜Spring Medical", "联系我们｜Spring Medical", "Contact｜Spring Medical"),
  crumb: L("聯絡我們", "联系我们", "Contact"),
  title: L("預約諮詢與到店資訊", "预约咨询与到店信息", "Book a visit"),
  lead: L(
    "留下您的姓名與需求，我們會盡快回覆。亦可點擊右下角綠色按鈕聯絡我們。",
    "留下您的姓名与需求，我们会尽快回复。亦可点击右下角绿色按钮联系我们。",
    "Leave your details and we will reply soon — or tap the green WhatsApp button."
  ),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return { title: pick(copy.metaTitle, raw as Locale) };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const options = treatments.map((tr) => ({
    value: pick(tr.title, locale),
    label: pick(tr.title, locale),
  }));

  return (
    <PageShell locale={locale} active="contact" pathWithoutLocale="contact">
      <section className="page-hero">
        <div className="container reveal">
          <div className="crumbs">
            <span>{pick(copy.crumb, locale)}</span>
          </div>
          <span className="eyebrow">Contact</span>
          <h1>{pick(copy.title, locale)}</h1>
          <p className="lede">{pick(copy.lead, locale)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="reveal">
            <h2>{t(locale, "store_info")}</h2>
            <hr className="gold-rule" />
            <p>
              <strong>{t(locale, "address_label")}</strong>
              <br />
              {t(locale, "footer_address")}
            </p>
            <p>
              <strong>{t(locale, "phone_label")}</strong>
              <br />
              <a href={`tel:${siteMeta.phoneTel}`}>{siteMeta.phoneDisplay}</a>
            </p>
            <p>
              <strong>{t(locale, "hours_label")}</strong>
              <br />
              {t(locale, "footer_hours_val")}
            </p>
            <div className="contact-map">
              <iframe
                title="Spring Medical map"
                src={MAP_EMBED}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="feature-tile reveal" style={{ padding: 28 }}>
            <h3>{t(locale, "booking_form")}</h3>
            <BookingForm locale={locale} options={options} source="contact" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
