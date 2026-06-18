"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { LogoMark } from "@/components/LogoMark";

const easing = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Background: warm architectural gradient + subtle photographic texture */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-linen/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-linen/60 via-linen/40 to-linen" />
      </div>

      <div className="container-px flex flex-col items-center text-center">
        {/* Animated logo mark */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easing }}
        >
          <LogoMark className="h-20 w-20 md:h-24 md:w-24" />
        </motion.div>

        <motion.span
          className="eyebrow mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easing }}
        >
          {t.hero.eyebrow}
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="mt-4 font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl lg:text-8xl"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: easing }}
        >
          {t.hero.headline}
        </motion.h1>

        {/* Arabic subtitle */}
        <motion.p
          className="mt-6 font-arabic text-xl text-earth md:text-2xl"
          dir="rtl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easing }}
        >
          نصمم المساحات، نبني الأحلام
        </motion.p>

        {/* CTA */}
        <motion.button
          type="button"
          onClick={scrollToProjects}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-linen transition-all duration-300 hover:bg-earth"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: easing }}
        >
          {t.hero.cta}
        </motion.button>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <motion.span
          className="block h-10 w-px bg-earth/50"
          animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
