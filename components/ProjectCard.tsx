"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { lang, t } = useLanguage();
  const categoryLabel = t.projects.filters[project.category];

  return (
    <motion.div variants={cardVariants} className="group">
      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden rounded-2xl bg-divider/30"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name[lang]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
            priority={priority}
          />
          {/* Hover overlay with title sliding up */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-display text-2xl text-linen">{project.name[lang]}</p>
            <p className="mt-1 text-sm text-linen/80">
              {categoryLabel} · {project.year}
            </p>
          </div>
        </div>
      </Link>

      {/* Static caption (always visible) */}
      <div className="flex items-baseline justify-between gap-4 px-1 pt-4">
        <div>
          <h3 className="font-display text-xl text-ink">{project.name[lang]}</h3>
          <p className="mt-0.5 text-sm text-earth">{project.location[lang]}</p>
        </div>
        <span className="eyebrow shrink-0">{categoryLabel}</span>
      </div>
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
