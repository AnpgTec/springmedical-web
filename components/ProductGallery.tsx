"use client";

import { useCallback, useEffect, useState } from "react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const count = images.length;
  const current = images[Math.min(idx, Math.max(0, count - 1))] || images[0];
  const many = count > 1;

  const show = useCallback(
    (i: number) => {
      if (!count) return;
      setIdx((i + count) % count);
    },
    [count]
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

  if (!current) return null;

  return (
    <div className="product-gallery">
      <div className="media-frame media-frame--img product-gallery-stage">
        {many ? (
          <button
            type="button"
            className="product-gallery-nav prev"
            aria-label="上一張"
            onClick={() => show(idx - 1)}
          >
            ‹
          </button>
        ) : null}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current}
          alt={alt}
          onClick={() => setOpen(true)}
        />
        {many ? (
          <button
            type="button"
            className="product-gallery-nav next"
            aria-label="下一張"
            onClick={() => show(idx + 1)}
          >
            ›
          </button>
        ) : null}
        {many ? (
          <span className="product-gallery-count">
            {idx + 1} / {count}
          </span>
        ) : null}
      </div>
      {many ? (
        <div className="product-gallery-thumbs" role="tablist">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              className={i === idx ? "is-active" : undefined}
              aria-label={`${alt} ${i + 1}`}
              onClick={() => setIdx(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      ) : null}
      {open ? (
        <div
          className="gallery-lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <button className="lb-close" type="button" aria-label="關閉" onClick={() => setOpen(false)}>
            ×
          </button>
          {many ? (
            <button className="gal-nav gal-prev" type="button" aria-label="上一張" onClick={() => show(idx - 1)}>
              ‹
            </button>
          ) : null}
          <div className="gal-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current} alt={alt} />
          </div>
          {many ? (
            <button className="gal-nav gal-next" type="button" aria-label="下一張" onClick={() => show(idx + 1)}>
              ›
            </button>
          ) : null}
          {many ? (
            <div className="gal-count">
              {idx + 1} / {count}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
