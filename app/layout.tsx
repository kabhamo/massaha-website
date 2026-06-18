import type { Metadata } from "next";
import { Playfair_Display, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
});

const siteUrl = "https://massaha.arch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Massaha — Architectural Consulting, Planning & Guidance Studio",
    template: "%s · Massaha",
  },
  description:
    "Massaha (مساحة) is a bilingual architectural consulting, planning and guidance studio founded by three architects from Tel Aviv University. Space reimagined.",
  keywords: [
    "architecture studio",
    "architectural consulting",
    "interior planning",
    "renovation",
    "3D visualization",
    "Massaha",
    "مساحة",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Massaha — Space Reimagined",
    description:
      "Architectural consulting, planning & guidance studio. We design spaces, we build dreams.",
    siteName: "Massaha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massaha — Space Reimagined",
    description: "Architectural consulting, planning & guidance studio.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${playfair.variable} ${inter.variable} ${tajawal.variable} font-body antialiased`}
      >
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-linen"
          >
            Skip to content
          </a>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
