"use client";

import Link from "next/link";
import { useEffect, useState, type SVGProps } from "react";

const SHOP_URL = "https://shop.dpall.co.th";

type Lang = "th" | "en";
type Theme = "light" | "dark";

const LOADER_MIN_MS = 1000;
const TYPE_START_DELAY_MS = 1050;
const TYPE_INTERVAL_MS = 28;
const DELETE_INTERVAL_MS = 16;
const HOLD_MS = 1800;
const NEXT_PHRASE_DELAY_MS = 400;

/* ---------------------------------- Icons --------------------------------- */

function IconLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 4 13V8a1 1 0 0 1 1-1h5a7 7 0 0 1 7 7v1a5 5 0 0 1-5 5Z" />
      <path d="M4 13c4-1 8-3 9-9" />
    </svg>
  );
}

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 4 6v6c0 5 3.5 7.7 8 9 4.5-1.3 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconFactory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21V10l6 4v-4l6 4v-4l6 4v7H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </svg>
  );
}

function IconHandshake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m3 12 4-4 4 3 3-3 4 4" />
      <path d="M3 12v3a2 2 0 0 0 2 2h1" />
      <path d="M21 12v3a2 2 0 0 1-2 2h-1" />
      <path d="M8 17h3.5a1.5 1.5 0 0 0 0-3H10" />
    </svg>
  );
}

function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function IconMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

/* ------------------------------- Translations ------------------------------ */

interface StatItem {
  value: string;
  label: string;
}

interface InfoRow {
  label: string;
  value: string;
}

interface ValueCard {
  title: string;
  desc: string;
}

interface Translations {
  nav: { home: string; about: string; why: string; contact: string; shop: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: StatItem[];
  };
  typewriter: string[];
  marquee: string[];
  about: {
    heading: string;
    info: InfoRow[];
    visionTitle: string;
    visionText: string;
  };
  why: { heading: string; values: ValueCard[] };
  cta: { title: string; desc: string; button: string };
  footer: { contactTitle: string; address: string[]; company: string; rights: string };
  aria: {
    menuOpen: string;
    menuClose: string;
    scrollDown: string;
    backToTop: string;
    toggleTheme: string;
    toggleLang: string;
  };
  loaderLabel: string;
}

const VALUE_ICONS = [IconLeaf, IconShield, IconFactory, IconHandshake];

const TRANSLATIONS: Record<Lang, Translations> = {
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      why: "ทำไมเลือกเรา",
      contact: "ติดต่อเรา",
      shop: "ดูสินค้า / Shop Now",
    },
    hero: {
      badge: "ผู้เชี่ยวชาญด้านผลิตภัณฑ์อาหารและขนมคุณภาพสูง",
      titleLine1: "บริษัท ดีพี ออล",
      titleLine2: "ดิลิเชียสโปรดักส์ออล จำกัด",
      ctaPrimary: "เลือกซื้อผลิตภัณฑ์ของเรา",
      ctaSecondary: "รู้จักเรามากขึ้น",
      stats: [
        { value: "2562", label: "ปีที่จดทะเบียนบริษัท" },
        { value: "1M+", label: "ทุนจดทะเบียน (บาท)" },
        { value: "100%", label: "มาตรฐานการผลิต" },
      ],
    },
    typewriter: [
      "ผู้เชี่ยวชาญด้านการผลิตและจำหน่ายผลิตภัณฑ์อาหารปรุงสำเร็จ และผลิตภัณฑ์ขนมคุณภาพสูง ที่ตอบโจทย์ทุกความอร่อย",
      "มาตรฐานการผลิตที่ปลอดภัย ได้รับการรับรองคุณภาพในทุกขั้นตอนการผลิต",
      "พันธมิตรทางธุรกิจที่ไว้วางใจได้ พร้อมส่งมอบความอร่อยสู่ทุกครัวเรือน",
    ],
    marquee: [
      "อาหารปรุงสำเร็จคุณภาพสูง",
      "ผลิตภัณฑ์ขนมแสนอร่อย",
      "มาตรฐานความปลอดภัย",
      "ส่งตรงถึงมือคุณ",
    ],
    about: {
      heading: "ข้อมูลบริษัท",
      info: [
        { label: "ชื่อภาษาอังกฤษ", value: "DP ALL DELICIOUSPRODUCTALL CO., LTD." },
        { label: "เลขทะเบียน", value: "0205562023278" },
        { label: "วันที่จดทะเบียน", value: "25 มิถุนายน 2562" },
        { label: "ทุนจดทะเบียน", value: "1,000,000 บาท" },
        {
          label: "ประเภทธุรกิจ",
          value: "ประกอบกิจการผลิต และจำหน่ายผลิตภัณฑ์อาหารปรุงสำเร็จ ผลิตภัณฑ์อาหารอื่นๆ และผลิตภัณฑ์ขนม",
        },
      ],
      visionTitle: "วิสัยทัศน์ของเรา",
      visionText:
        "เรามุ่งมั่นที่จะเป็นผู้นำด้านผลิตภัณฑ์อาหารที่ได้มาตรฐาน ปลอดภัย และสร้างความประทับใจในทุกคำที่ได้สัมผัส",
    },
    why: {
      heading: "ทำไมต้องเลือกเรา",
      values: [
        {
          title: "คุณภาพระดับพรีเมียม",
          desc: "คัดสรรวัตถุดิบอย่างพิถีพิถัน ผลิตด้วยกรรมวิธีที่ได้มาตรฐาน เพื่อรสชาติที่ดีที่สุดในทุกคำ",
        },
        {
          title: "ปลอดภัยได้มาตรฐาน",
          desc: "ทุกขั้นตอนการผลิตอยู่ภายใต้การควบคุมคุณภาพและความปลอดภัยด้านอาหารอย่างเคร่งครัด",
        },
        {
          title: "กำลังการผลิตที่ทันสมัย",
          desc: "โรงงานผลิตที่พร้อมรองรับคำสั่งซื้อทุกขนาด ด้วยเทคโนโลยีและกระบวนการที่ทันสมัย",
        },
        {
          title: "ไว้วางใจได้",
          desc: "สร้างความสัมพันธ์ที่ยั่งยืนกับคู่ค้าและลูกค้า ด้วยความซื่อสัตย์และบริการที่ใส่ใจ",
        },
      ],
    },
    cta: {
      title: "พร้อมเป็นพันธมิตรทางธุรกิจกับเรา",
      desc: "ติดต่อเราวันนี้ เพื่อสอบถามผลิตภัณฑ์หรือความร่วมมือทางธุรกิจ",
      button: "เลือกซื้อผลิตภัณฑ์ของเรา",
    },
    footer: {
      contactTitle: "ติดต่อเรา",
      address: [
        "602/10 ถนนทางรถไฟตะวันตก",
        "ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม",
        "จังหวัดนครปฐม 73000",
      ],
      company: "DP ALL DELICIOUSPRODUCTALL CO., LTD.",
      rights: "สงวนลิขสิทธิ์",
    },
    aria: {
      menuOpen: "เปิดเมนู",
      menuClose: "ปิดเมนู",
      scrollDown: "เลื่อนลง",
      backToTop: "กลับขึ้นด้านบน",
      toggleTheme: "สลับธีมสว่าง/มืด",
      toggleLang: "สลับภาษา",
    },
    loaderLabel: "DP ALL",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      why: "Why Us",
      contact: "Contact",
      shop: "Shop Now",
    },
    hero: {
      badge: "Experts in Premium Food & Snack Products",
      titleLine1: "DP ALL",
      titleLine2: "Delicious Product All Co., Ltd.",
      ctaPrimary: "Shop Our Products",
      ctaSecondary: "Learn More About Us",
      stats: [
        { value: "2019", label: "Year Established" },
        { value: "1M+", label: "Registered Capital (THB)" },
        { value: "100%", label: "Production Standard" },
      ],
    },
    typewriter: [
      "Specialists in producing and distributing ready-to-eat food and premium quality snacks that satisfy every craving",
      "Safe production standards, quality certified at every step of the process",
      "A trusted business partner, delivering great taste to every household",
    ],
    marquee: [
      "High-Quality Ready Meals",
      "Delicious Snack Products",
      "International Safety Standards",
      "Delivered Right To You",
    ],
    about: {
      heading: "Company Information",
      info: [
        { label: "English Name", value: "DP ALL DELICIOUSPRODUCTALL CO., LTD." },
        { label: "Registration No.", value: "0205562023278" },
        { label: "Registered Date", value: "25 June 2019" },
        { label: "Registered Capital", value: "1,000,000 THB" },
        {
          label: "Business Type",
          value: "Manufacturing and distribution of ready-to-eat food products, other food items, and confectionery",
        },
      ],
      visionTitle: "Our Vision",
      visionText:
        "We are committed to being a leader in food products that are standardized and safe, leaving a lasting impression with every bite.",
    },
    why: {
      heading: "Why Choose Us",
      values: [
        {
          title: "Premium Quality",
          desc: "Carefully selected ingredients, produced with standardized methods for the best taste in every bite.",
        },
        {
          title: "Certified Safety Standards",
          desc: "Every production step is strictly controlled for quality and food safety.",
        },
        {
          title: "Modern Production Capacity",
          desc: "A factory ready to handle orders of any size with modern technology and processes.",
        },
        {
          title: "Trusted Partner",
          desc: "Building lasting relationships with partners and customers through honesty and attentive service.",
        },
      ],
    },
    cta: {
      title: "Ready to Partner With Us",
      desc: "Contact us today to inquire about our products or business collaboration.",
      button: "Shop Our Products",
    },
    footer: {
      contactTitle: "Contact Us",
      address: [
        "602/10 Thang Rotfai Tawantok Rd.",
        "Phra Pathom Chedi Subdistrict, Mueang Nakhon Pathom District",
        "Nakhon Pathom 73000, Thailand",
      ],
      company: "DP ALL DELICIOUSPRODUCTALL CO., LTD.",
      rights: "All rights reserved.",
    },
    aria: {
      menuOpen: "Open menu",
      menuClose: "Close menu",
      scrollDown: "Scroll down",
      backToTop: "Back to top",
      toggleTheme: "Toggle light/dark theme",
      toggleLang: "Switch language",
    },
    loaderLabel: "DP ALL",
  },
};

const NAV_ITEMS: { key: keyof Translations["nav"]; href: string }[] = [
  { key: "home", href: "#top" },
  { key: "about", href: "#about" },
  { key: "why", href: "#why" },
  { key: "contact", href: "#contact" },
];

export default function CorporateHome() {
  const [lang, setLang] = useState<Lang>("th");
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState("");

  const t = TRANSLATIONS[lang];

  // Restore saved language preference (the layout script already restored
  // the theme class before hydration; here we just sync React state to it).
  useEffect(() => {
// eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    try {
      const savedLang = localStorage.getItem("dpall-lang");
      if (savedLang === "en" || savedLang === "th") setLang(savedLang);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("dpall-theme", next);
      } catch {
        /* localStorage unavailable */
      }
      return next;
    });
  };

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "th" ? "en" : "th";
      try {
        localStorage.setItem("dpall-lang", next);
      } catch {
        /* localStorage unavailable */
      }
      return next;
    });
  };

  // Initial loading screen: shown for a minimum duration and until the page
  // has actually finished loading, whichever is longer.
  useEffect(() => {
    let cancelled = false;
    const minTime = new Promise<void>((resolve) => setTimeout(resolve, LOADER_MIN_MS));
    const pageLoad =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));

    Promise.all([minTime, pageLoad]).then(() => {
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Rotating typewriter: types each phrase, holds, deletes, then moves to the
  // next one — looping forever. Restarts whenever the language changes.
  useEffect(() => {
    const phrases = t.typewriter;
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIndex];
      if (!deleting) {
        charIndex += 1;
        setTypedText(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, HOLD_MS);
        } else {
          timeoutId = setTimeout(tick, TYPE_INTERVAL_MS);
        }
      } else {
        charIndex -= 1;
        setTypedText(current.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(tick, NEXT_PHRASE_DELAY_MS);
        } else {
          timeoutId = setTimeout(tick, DELETE_INTERVAL_MS);
        }
      }
    };

// eslint-disable-next-line react-hooks/set-state-in-effect
    setTypedText("");
    const startTimeout = setTimeout(tick, TYPE_START_DELAY_MS);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <main id="top" className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Loading screen */}
      <div
        aria-hidden={!loading}
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-linear-to-br from-brand-dark to-brand-deep transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-white/10" />
          <span className="absolute inset-0 rounded-full border-2 border-t-brand-light border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand to-brand-deep text-white font-extrabold text-lg shadow-lg">
            DP
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white animate-loader-dot" />
          <span className="h-2 w-2 rounded-full bg-white animate-loader-dot" style={{ animationDelay: "0.15s" }} />
          <span className="h-2 w-2 rounded-full bg-white animate-loader-dot" style={{ animationDelay: "0.3s" }} />
        </div>
        <p className="text-gray-200 text-sm tracking-[0.2em]">{t.loaderLabel}</p>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-3">
          <Link href="#top" className="flex items-center gap-2 group shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-brand to-brand-dark text-white font-extrabold text-sm shadow-md transition-transform group-hover:scale-105">
              DP
            </span>
            <span
              className={`text-xl font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              DP ALL
            </span>
          </Link>

          <nav className="space-x-8 hidden md:flex items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-gray-600 dark:text-gray-300 hover:text-brand dark:hover:text-brand-light"
                    : "text-gray-100 hover:text-white"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.aria.toggleLang}
              className={`h-9 min-w-9 px-2 rounded-full border text-xs font-bold transition-colors ${
                scrolled
                  ? "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-brand hover:text-brand"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {lang === "th" ? "EN" : "TH"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.aria.toggleTheme}
              className={`h-9 w-9 flex items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-brand hover:text-brand"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {theme === "dark" ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
            </button>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-brand text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
            >
              {t.nav.shop}
            </a>
            <button
              type="button"
              aria-label={menuOpen ? t.aria.menuClose : t.aria.menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg ${
            menuOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-200 font-medium py-1 hover:text-brand transition-colors"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white text-center px-6 py-2.5 rounded-full font-semibold hover:bg-brand-dark transition-colors"
            >
              {t.nav.shop}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-brand-dark to-brand-deep text-white pt-40 pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-light/25 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-light/20 blur-3xl animate-float-delay" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-gray-100 mb-6">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse-dot" />
            {t.hero.badge}
          </div>

          <h1
            className="animate-fade-in-up text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            {t.hero.titleLine1}
            <span className="block bg-linear-to-r from-white to-brand-light bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p
            className="animate-fade-in-up text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 min-h-28 md:min-h-20"
            style={{ animationDelay: "0.15s" }}
          >
            {typedText}
            <span className="typing-cursor text-white">|</span>
          </p>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-16"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all shadow-lg inline-block"
            >
              {t.hero.ctaPrimary}
            </a>
            <Link
              href="#about"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all inline-block"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div
            className="animate-fade-in-up grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/10 pt-8"
            style={{ animationDelay: "0.4s" }}
          >
            {t.hero.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="#about"
          aria-label={t.aria.scrollDown}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 hover:text-white transition-colors animate-bounce-soft"
        >
          <IconChevronDown className="h-7 w-7" />
        </Link>
      </section>

      {/* Marquee strip */}
      <div className="relative overflow-hidden bg-brand py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center">
              {t.marquee.map((text, mi) => (
                <span key={`${i}-${mi}`} className="mx-6 text-white font-semibold text-sm md:text-base">
                  {text} <span className="mx-4 text-white/50">&bull;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.about.heading}</h2>
            <div className="w-24 h-1 bg-brand mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal space-y-4">
              {t.about.info.map((row, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md hover:border-brand/30 transition-all"
                >
                  <span className="shrink-0 font-semibold text-gray-900 dark:text-white">{row.label}:</span>
                  <span className="text-gray-600 dark:text-gray-300">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="reveal bg-linear-to-br from-brand-deep to-gray-950 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-light/20 blur-2xl" />
              <IconLeaf className="h-10 w-10 text-brand-light mb-4" />
              <h3 className="text-xl font-bold mb-4">{t.about.visionTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{t.about.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="scroll-mt-20 py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.why.heading}</h2>
            <div className="w-24 h-1 bg-brand mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.values.map((value, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <div
                  key={i}
                  className="reveal group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-20 bg-linear-to-br from-brand to-brand-deep">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
        </div>
        <div className="reveal relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{t.cta.title}</h2>
          <p className="text-gray-100 mb-8 text-lg">{t.cta.desc}</p>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all shadow-lg inline-block"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="scroll-mt-20 bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">{t.footer.contactTitle}</h4>
            <div className="flex gap-3">
              <IconPin className="h-5 w-5 shrink-0 mt-0.5 text-brand" />
              <div>
                {t.footer.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="md:text-right">
            <div className="flex md:justify-end items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-brand to-brand-deep text-white font-extrabold text-xs">
                DP
              </span>
              <h4 className="text-white text-lg font-bold">DP ALL</h4>
            </div>
            <p>&copy; 2026 {t.footer.company}</p>
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        type="button"
        aria-label={t.aria.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-gray-900 dark:bg-gray-800 text-white shadow-lg flex items-center justify-center hover:bg-brand transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <IconArrowUp className="h-5 w-5" />
      </button>
    </main>
  );
}
