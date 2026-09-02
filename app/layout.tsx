import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DP ALL | ดีพี ออล ดิลิเชียสโปรดักส์ออล",
  description:
    "บริษัท ดีพี ออล ดิลิเชียสโปรดักส์ออล จำกัด ผู้เชี่ยวชาญด้านการผลิตและจำหน่ายผลิตภัณฑ์อาหารปรุงสำเร็จ และผลิตภัณฑ์ขนมคุณภาพสูง",
};

// Runs before hydration/paint:
// 1) restores the theme (light/dark) the visitor last chose, falling back to
//    their OS preference, so there is no flash of the wrong theme.
// 2) forces every load/refresh to start scrolled to the top instead of
//    letting the browser silently restore the previous scroll position.
const BOOTSTRAP_SCRIPT = `
try {
  var storedTheme = localStorage.getItem('dpall-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
  if (isDark) document.documentElement.classList.add('dark');
} catch (e) {}
try {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: BOOTSTRAP_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
