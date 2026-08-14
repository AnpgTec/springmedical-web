"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const seg = pathname?.split("/")[1] || "zh-HK";
    if (isLocale(seg)) document.documentElement.lang = seg;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector(".site-header")
        ?.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) el.classList.add("in");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });

    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("siteNav");
    const onToggle = () => {
      const open = nav?.classList.toggle("open");
      toggle?.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle?.addEventListener("click", onToggle);

    const carousel = document.querySelector(".about-carousel");
    let timer: ReturnType<typeof setInterval> | undefined;
    if (carousel) {
      const slides = carousel.querySelectorAll(".about-slide");
      const dots = carousel.querySelectorAll(".about-dots span");
      let i = 0;
      const show = (n: number) => {
        slides.forEach((s, idx) => s.classList.toggle("active", idx === n));
        dots.forEach((d, idx) => d.classList.toggle("active", idx === n));
      };
      show(0);
      timer = setInterval(() => {
        i = (i + 1) % slides.length;
        show(i);
      }, 4500);
    }

    const hero = document.querySelector(".hero-slides");
    let heroTimer: ReturnType<typeof setInterval> | undefined;
    if (hero) {
      const slides = hero.querySelectorAll(".hero-slide");
      let i = 0;
      slides.forEach((s, idx) => s.classList.toggle("active", idx === 0));
      heroTimer = setInterval(() => {
        i = (i + 1) % slides.length;
        slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
      }, 6000);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", reveal);
      toggle?.removeEventListener("click", onToggle);
      if (timer) clearInterval(timer);
      if (heroTimer) clearInterval(heroTimer);
    };
  }, [pathname]);

  return null;
}
