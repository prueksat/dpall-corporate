"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "th" | "en";

const COPY: Record<Lang, { heading: string; desc: string; backHome: string; shop: string }> = {
  th: {
    heading: "ไม่พบหน้านี้",
    desc: "ขออภัย หน้าที่คุณกำลังค้นหาอาจถูกย้าย ถูกลบไปแล้ว หรือไม่เคยมีอยู่จริง",
    backHome: "กลับหน้าแรก",
    shop: "ดูสินค้า",
  },
  en: {
    heading: "Page Not Found",
    desc: "Sorry, the page you're looking for may have been moved, deleted, or never existed.",
    backHome: "Back to Home",
    shop: "Shop Now",
  },
};

export default function NotFound() {
  const [lang, setLang] = useState<Lang>("th");

  // Match whatever language/theme the visitor already picked on the main
  // site (theme itself needs no extra work here: the root layout's
  // bootstrap script already applies the saved `dark` class on every page).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dpall-lang");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "en" || saved === "th") setLang(saved);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const c = COPY[lang];

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-ink px-4 text-center transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/10 dark:bg-brand/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 -right-16 h-80 w-80 rounded-full bg-brand-light/10 blur-3xl animate-float" />
      </div>

      <div className="relative flex flex-col items-center gap-5 max-w-lg">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-brand to-brand-dark text-white font-extrabold shadow-md transition-transform group-hover:scale-105">
            DP
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">DP ALL</span>
        </Link>

        <p className="text-8xl sm:text-9xl font-extrabold bg-linear-to-r from-brand to-brand-light bg-clip-text text-transparent leading-none">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{c.heading}</h1>
        <p className="text-gray-600 dark:text-gray-300">{c.desc}</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/"
            className="bg-brand text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
          >
            {c.backHome}
          </Link>
          <a
            href="https://shop.dpall.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-200 px-8 py-3.5 rounded-full font-bold hover:border-brand hover:text-brand dark:hover:border-brand-light dark:hover:text-brand-light transition-all"
          >
            {c.shop}
          </a>
        </div>
      </div>
    </main>
  );
}
