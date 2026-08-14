import Link from "next/link";
import { siteMeta, t } from "@/content/i18n/ui";
import { treatmentCategories } from "@/content/treatments/categories";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import { href } from "@/lib/paths";

function SocialIcon({ name }: { name: "facebook" | "instagram" | "xiaohongshu" }) {
  const paths: Record<string, string> = {
    facebook:
      "M14 9h3V6h-3c-2 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9Z",
    instagram:
      "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5ZM17 7.8a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z",
    xiaohongshu:
      "M4 5h16v2.2H4V5Zm1.2 3.6h13.6L17.5 19H6.5L5.2 8.6Zm3.2 2.4 1 5.4h1.8l.4-2.4h1l.4 2.4h1.8l1-5.4h-1.8l-.4 2.5h-1l-.4-2.5H8.4Z",
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={paths[name]} />
    </svg>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand brand-footer" href={href(locale)} aria-label="Spring Medical">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="brand-logo brand-logo-footer"
                src="/images/logo-bottom.png"
                alt="Spring Medical"
              />
            </Link>
            <p style={{ margin: "16px 0 0", maxWidth: "28rem", fontSize: 14 }}>
              {t(locale, "footer_blurb")}
            </p>
            <div className="socials">
              <a href={siteMeta.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <SocialIcon name="facebook" />
              </a>
              <a href={siteMeta.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <SocialIcon name="instagram" />
              </a>
              <a href={siteMeta.socials.xiaohongshu} target="_blank" rel="noopener noreferrer" aria-label="Xiaohongshu">
                <SocialIcon name="xiaohongshu" />
              </a>
            </div>
          </div>
          <div>
            <h4>{t(locale, "nav_treatments")}</h4>
            <div className="footer-links">
              {treatmentCategories.map((c) => (
                <Link key={c.id} href={href(locale, `treatments/${c.id}`)}>
                  {pick(c.title, locale)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4>{t(locale, "footer_explore")}</h4>
            <div className="footer-links">
              <Link href={href(locale, "about")}>{t(locale, "nav_about")}</Link>
              <Link href={href(locale, "knowledge")}>{t(locale, "footer_knowledge")}</Link>
              <Link href={href(locale, "contact")}>{t(locale, "nav_contact")}</Link>
              <Link href={href(locale, "shop")}>{t(locale, "nav_shop")}</Link>
            </div>
          </div>
          <div>
            <h4>{t(locale, "nav_contact")}</h4>
            <div className="footer-links">
              <span>{t(locale, "footer_address")}</span>
              <span>{t(locale, "footer_phone")}</span>
              <a
                href={`https://api.whatsapp.com/send?phone=${siteMeta.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp (852) 9011 5998
              </a>
              <div className="wechat-qr">
                <span className="wechat-label">{t(locale, "wechat_label")}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Wechat-qr.png" alt="WeChat QR" loading="lazy" />
              </div>
              <span>
                {t(locale, "footer_hours")}
                <br />
                {t(locale, "footer_hours_val")}
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Spring Medical. All rights reserved.</span>
          <span>
            <Link href={href(locale, "terms")} style={{ color: "rgba(255,252,250,0.6)" }}>
              {t(locale, "terms_link")}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
