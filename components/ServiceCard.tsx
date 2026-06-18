"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceLineIcon } from "@/components/icons";
import type { Service } from "@/lib/data";

export function ServiceCard({ service }: { service: Service }) {
  const { lang } = useLanguage();

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col rounded-2xl border border-divider/70 bg-linen/40 p-7 transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-sand hover:bg-white/40 hover:shadow-soft"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 text-earth transition-colors duration-500 group-hover:bg-sand group-hover:text-white">
        <ServiceLineIcon name={service.icon} className="h-6 w-6" />
      </span>

      <h3 className="mt-6 font-display text-xl text-ink">{service.title.en}</h3>
      <p className="mt-1 font-arabic text-base text-earth">{service.title.ar}</p>

      <p className="mt-4 text-sm leading-relaxed text-earth">{service.description[lang]}</p>

      {/* Taupe underline reveal */}
      <span className="mt-6 block h-px w-10 bg-divider transition-all duration-500 ease-editorial group-hover:w-full group-hover:bg-sand" />
    </motion.article>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
