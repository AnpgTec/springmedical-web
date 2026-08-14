"use client";

import { useState } from "react";
import { t } from "@/content/i18n/ui";
import type { Locale } from "@/lib/i18n";

type Option = { value: string; label: string };

export function BookingForm({
  locale,
  options,
  defaultProduct,
  compact,
  source = "contact",
  sourceRef,
}: {
  locale: Locale;
  options: Option[];
  defaultProduct?: string;
  compact?: boolean;
  source?: "contact" | "treatment" | "shop" | "other";
  sourceRef?: string;
}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setPending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          contact_pref: fd.get("contact_pref"),
          product: fd.get("product"),
          datetime: fd.get("datetime"),
          note: fd.get("note"),
          locale,
          source,
          source_ref: sourceRef || undefined,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "submit_failed");
      }
      form.reset();
      setSuccess(true);
    } catch {
      setSuccess(false);
      setError(
        locale === "en"
          ? "Submission failed. Please try again or call us."
          : locale === "zh-CN"
            ? "提交失败，请重试或致电联系我们。"
            : "提交失敗，請重試或致電聯絡我們。"
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ marginTop: compact ? 18 : 20 }}>
      <div className="form-grid">
        <div className="field">
          <label>{t(locale, "name_label")}</label>
          <input name="name" required placeholder={locale === "en" ? "Your name" : "請輸入姓名"} />
        </div>
        <div className="field">
          <label>{t(locale, "phone_field")}</label>
          <input name="phone" required placeholder={locale === "en" ? "Phone" : "請輸入電話"} />
        </div>
        {!compact && (
          <>
            <div className="field">
              <label>{t(locale, "email_label")}</label>
              <input type="email" name="email" placeholder="name@email.com" />
            </div>
            <div className="field">
              <label>{t(locale, "contact_pref")}</label>
              <input
                name="contact_pref"
                placeholder={locale === "en" ? "Phone / Email" : "電話 / 電郵"}
              />
            </div>
          </>
        )}
        {compact && (
          <div className="field full">
            <label>{t(locale, "email_label")}</label>
            <input type="email" name="email" />
          </div>
        )}
        <div className="field full">
          <label>{t(locale, "consult_item")}</label>
          {defaultProduct && options.length === 0 ? (
            <input name="product" defaultValue={defaultProduct} readOnly />
          ) : (
            <select name="product" defaultValue={defaultProduct || options[0]?.value || ""}>
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
              <option value="other">{t(locale, "other_option")}</option>
            </select>
          )}
        </div>
        <div className="field full">
          <label>{t(locale, "prefer_time")}</label>
          <input
            name="datetime"
            placeholder={
              locale === "en" ? "e.g. weekday afternoon" : "例如：平日下午 / 週末上午"
            }
          />
        </div>
        <div className="field full">
          <label>{t(locale, "note_label")}</label>
          <textarea
            name="note"
            placeholder={
              locale === "en" ? "Skin concerns or goals" : "請簡述您的膚況或需求"
            }
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        style={{ marginTop: compact ? 14 : 16 }}
        disabled={pending}
      >
        {pending
          ? locale === "en"
            ? "Submitting…"
            : locale === "zh-CN"
              ? "提交中…"
              : "提交中…"
          : t(locale, "submit_booking")}
      </button>
      {success ? (
        <div className="form-success" style={{ display: "block" }}>
          {t(locale, "form_success")}
        </div>
      ) : error ? (
        <p className="form-note" style={{ color: "#b33", marginTop: 12 }}>
          {error}
        </p>
      ) : null}
      {!compact && (
        <p className="form-note" style={{ marginTop: 32 }}>
          {t(locale, "form_note")}
        </p>
      )}
    </form>
  );
}
