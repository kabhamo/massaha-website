"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { FounderCard } from "@/components/FounderCard";
import { Reveal, staggerContainer } from "@/components/Reveal";
import { founders } from "@/lib/data";

export function AboutView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.lead} />

      {/* Story */}
      <section className="container-px py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">{t.about.body}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow">{t.about.credential}</p>
            <div className="mt-8">
              <p className="eyebrow text-earth">{t.about.valuesTitle}</p>
              <ul className="mt-4 space-y-3">
                {t.about.values.map((value) => (
                  <li key={value} className="font-display text-2xl text-ink">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="container-px py-16 md:py-24">
        <Reveal>
          <span className="eyebrow">{t.founders.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{t.founders.title}</h2>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {founders.map((founder) => (
            <FounderCard key={founder.name.en} founder={founder} showBio />
          ))}
        </motion.div>
      </section>
    </>
  );
}
