"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, staggerItem } from "@/components/Reveal";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="container-px py-24 md:py-32">
      <SectionHeader
        eyebrow={t.testimonials.eyebrow}
        title={t.testimonials.title}
        align="center"
        className="mx-auto"
      />

      <motion.div
        className="mt-14 grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {t.testimonials.items.map((item) => (
          <motion.figure
            key={item.name}
            variants={staggerItem}
            className="flex flex-col rounded-3xl bg-white/50 p-8 shadow-soft"
          >
            <span className="font-display text-5xl leading-none text-sand" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-divider pt-4">
              <p className="font-display text-lg text-ink">{item.name}</p>
              <p className="eyebrow mt-1">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
