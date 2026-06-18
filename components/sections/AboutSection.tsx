"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { FounderCard } from "@/components/FounderCard";
import { Reveal, staggerContainer } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { founders } from "@/lib/data";

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="container-px py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} />
          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-xl text-earth">{t.about.lead}</p>
            <p className="mt-4 max-w-md leading-relaxed text-earth">{t.about.body}</p>
            <p className="mt-6 eyebrow">{t.about.credential}</p>
            <Link
              href="/about"
              className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-ink"
            >
              {t.about.readMore}
              <ArrowIcon className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </Reveal>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-3 lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {founders.map((founder) => (
            <FounderCard key={founder.name.en} founder={founder} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
