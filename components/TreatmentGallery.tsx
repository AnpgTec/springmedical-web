"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Props = {
  images: string[];
  locale: Locale;
};

export function TreatmentGallery({ images, locale }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const label =
    locale === "en"
      ? "View treatment results"
      : locale === "zh-CN"
        ? "查看疗程效果"
        : "查看療程效果";

  const show = useCallback(
    (i: number) => {
      setIdx((i + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, idx, show]);

  if (!images.length) return null;

  return (
    <>
      <p className="dt-gallery-cta">
        <button type="button" className="btn btn-primary" onClick={() => { setIdx(0); setOpen(true); }}>
          {label}
        </button>
      </p>
      {open ? (
        <div
          className="gallery-lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <button className="lb-close" type="button" aria-label={locale === "en" ? "Close" : "關閉"} onClick={() => setOpen(false)}>
            ×
          </button>
          <button className="gal-nav gal-prev" type="button" aria-label={locale === "en" ? "Previous" : "上一張"} onClick={() => show(idx - 1)}>
            ‹
          </button>
          <div className="gal-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[idx]} alt={label} />
          </div>
          <button className="gal-nav gal-next" type="button" aria-label={locale === "en" ? "Next" : "下一張"} onClick={() => show(idx + 1)}>
            ›
          </button>
          <div className="gal-count">
            {idx + 1} / {images.length}
          </div>
        </div>
      ) : null}
    </>
  );
}
