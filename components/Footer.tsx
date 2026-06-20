"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { LogoMark } from "@/components/LogoMark";
import { InstagramIcon } from "@/components/icons";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-divider bg-linen">
      <div className="container-px grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <div className="leading-tight">
              <p className="font-display text-2xl">Massaha</p>
              <p className="font-arabic text-lg text-earth">مساحة</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-earth">
            {t.footer.tagline}
          </p>
          <p className="mt-1 max-w-xs font-arabic text-sm leading-relaxed text-earth">
            {t.brand.tagline}
          </p>
        </div>

        {/* Explore */}
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">{t.footer.explore}</p>
          <ul className="space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-earth hover:text-ink">
                  {t.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">{t.footer.connect}</p>
          <ul className="space-y-2.5 text-sm text-earth">
            <li>
              <a href="mailto:hello@massaha.arch" className="link-underline hover:text-ink">
                hello@massaha.arch
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/massaha.arch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4" />
                @massaha.arch
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-divider">
        <div className="container-px flex flex-col items-start justify-between gap-2 py-6 text-xs text-earth sm:flex-row sm:items-center">
          <p>
            © {year} Massaha Studio. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
