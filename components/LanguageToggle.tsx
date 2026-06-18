"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 text-sm font-medium ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`px-1.5 py-0.5 font-arabic transition-colors ${
          lang === "ar" ? "text-ink" : "text-earth/60 hover:text-earth"
        }`}
      >
        ع
      </button>
      <span className="text-divider" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-1.5 py-0.5 transition-colors ${
          lang === "en" ? "text-ink" : "text-earth/60 hover:text-earth"
        }`}
      >
        EN
      </button>
    </div>
  );
}
