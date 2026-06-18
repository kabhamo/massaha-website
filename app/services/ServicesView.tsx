"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { ServiceLineIcon, ArrowIcon } from "@/components/icons";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { services } from "@/lib/data";

export function ServicesView() {
  const { t, lang, isRTL } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

      <section className="container-px py-12 md:py-16">
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.article
              key={service.slug}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-divider/70 bg-white/40 p-8 md:p-10"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sand/20 text-earth">
                  <ServiceLineIcon name={service.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-2xl text-ink">{service.title.en}</h2>
                  <p className="font-arabic text-lg text-earth">{service.title.ar}</p>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-earth">{service.description[lang]}</p>

              <div className="mt-7">
                <p className="eyebrow">{t.services.whatsIncluded}</p>
                <ul className="mt-4 space-y-2.5">
                  {service.includes.map((item) => (
                    <li key={item.en} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sand" />
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="link-underline mt-8 inline-flex items-center gap-2 self-start text-sm text-ink"
              >
                {t.services.requestService}
                <ArrowIcon className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  );
}
