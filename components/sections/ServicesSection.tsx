"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal, staggerContainer } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { services } from "@/lib/data";

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services" className="border-y border-divider/60 bg-white/30">
      <div className="container-px py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="link-underline inline-flex items-center gap-2 text-sm text-ink"
            >
              {t.services.viewAll}
              <ArrowIcon className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </Reveal>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
