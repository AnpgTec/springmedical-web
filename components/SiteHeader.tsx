import Link from "next/link";
import { CartBadge } from "@/components/CartBadge";
import { treatments } from "@/content/treatments/catalog";
import { treatmentCategories } from "@/content/treatments/categories";
import { t } from "@/content/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { locales, pick } from "@/lib/i18n";
import { href } from "@/lib/paths";

type Props = {
  locale: Locale;
  active?: string;
  activeCategory?: string;
  pathWithoutLocale?: string;
};

export function SiteHeader({
  locale,
  active = "home",
  activeCategory = "",
  pathWithoutLocale = "",
}: Props) {
  const rest = pathWithoutLocale.replace(/^\//, "");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href={href(locale)} aria-label="Spring Medical">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/images/logo.png" alt="Spring Medical" />
        </Link>
        <nav className="nav" id="siteNav" aria-label="Primary">
          <Link href={href(locale)} className={active === "home" ? "active" : ""}>
            {t(locale, "nav_home")}
          </Link>
          <Link
            href={href(locale, "about")}
            className={active === "about" ? "active" : ""}
          >
            {t(locale, "nav_about")}
          </Link>
          {treatmentCategories.map((cat) => {
            const items = cat.treatmentIds
              .map((id) => treatments.find((x) => x.id === id))
              .filter(Boolean);
            const wide = items.length > 6 ? " wide" : "";
            return (
              <div
                key={cat.id}
                className={`nav-item${
                  active === "treatments" && activeCategory === cat.id ? " active-cat" : ""
                }`}
              >
                <Link
                  className={`nav-parent${activeCategory === cat.id ? " active" : ""}`}
                  href={href(locale, `treatments/${cat.id}`)}
                >
                  {pick(cat.title, locale)}
                </Link>
                <div className={`nav-dropdown${wide}`}>
                  <div className="nav-dropdown-inner">
                    {items.map((item) =>
                      item ? (
                        <Link key={item.id} href={href(locale, `treatments/${item.slug}`)}>
                          {pick(item.title, locale)}
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href={href(locale, "knowledge")}
            className={active === "knowledge" ? "active" : ""}
          >
            {t(locale, "nav_knowledge")}
          </Link>
          <Link href={href(locale, "shop")} className={active === "shop" ? "active" : ""}>
            {t(locale, "nav_shop")}
          </Link>
          <Link
            href={href(locale, "contact")}
            className={active === "contact" ? "active" : ""}
          >
            {t(locale, "nav_contact")}
          </Link>
        </nav>
        <div className="header-actions">
          <div className="lang-switch" aria-label="Language">
            {locales.map((l) => (
              <Link
                key={l}
                href={href(l, rest)}
                className={l === locale ? "active" : undefined}
                hrefLang={l}
              >
                {l === "zh-HK" ? "繁" : l === "zh-CN" ? "简" : "EN"}
              </Link>
            ))}
          </div>
          <CartBadge locale={locale} />
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Menu"
            aria-expanded="false"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://api.whatsapp.com/send?phone=85290115998"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 1.6a7.4 7.4 0 0 1 6.2 11.4l-.3.4.5 1.9-2-.5-.4.2A7.4 7.4 0 0 1 5.5 12 7.4 7.4 0 0 1 12 4.6Zm-3.4 3.3c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6 1.8 2.9 4.5 4c2.2 1 2.6.8 3.1.7s1.5-.6 1.7-1.2.2-1.1.1-1.2-.4-.5-.8-.7-.8-.5-.9-.5-.5-.1-.8.3-.9.9-1.1 1.1-.4.2-.8 0a4.6 4.6 0 0 1-2.2-2c-.2-.4 0-.6.2-.8l.5-.6c.2-.2.2-.4.1-.6s-.7-1.7-1-2.3c-.2-.5-.5-.5-.7-.5Z"
        />
      </svg>
    </a>
  );
}
