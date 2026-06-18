"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";

const easing = [0.22, 1, 0.36, 1] as const;

export function ProcessSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const steps = t.process.steps;

  return (
    <section id="process" className="border-y border-divider/60 bg-white/30">
      <div className="container-px py-24 md:py-32">
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="relative mt-16">
          {/* Animated connecting line */}
          <div className="absolute left-0 right-0 top-3 hidden h-px bg-divider md:block" aria-hidden="true">
            <motion.span
              className="block h-full origin-left bg-sand"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: reduce ? 0 : 1.4, ease: easing }}
            />
          </div>

          <motion.ol
            className="grid gap-10 md:grid-cols-4 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
          >
            {steps.map((step, i) => (
              <motion.li
                key={step.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } },
                }}
                className="relative"
              >
                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-sand bg-linen text-xs font-medium text-earth">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-earth">{step.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
