"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Founder } from "@/lib/data";

export function FounderCard({ founder, showBio = false }: { founder: Founder; showBio?: boolean }) {
  const { lang } = useLanguage();

  return (
    <motion.article variants={cardVariants} className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-divider/40">
        <Image
          src={founder.image}
          alt={founder.name[lang]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 font-display text-2xl text-ink">{founder.name[lang]}</h3>
      <p className="eyebrow mt-2">{founder.specialty[lang]}</p>
      {showBio && (
        <p className="mt-3 text-sm leading-relaxed text-earth">{founder.bio[lang]}</p>
      )}
    </motion.article>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
