"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { projects, type ProjectCategory } from "@/lib/data";

type Filter = "all" | ProjectCategory;
const filterOrder: Filter[] = ["all", "residential", "commercial", "interior", "concept"];

export function ProjectsView() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

      {/* Filter tabs */}
      <div className="container-px">
        <div className="flex flex-wrap gap-2 border-b border-divider pb-6">
          {filterOrder.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              aria-pressed={active === key}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === key
                  ? "bg-ink text-linen"
                  : "text-earth hover:bg-divider/40 hover:text-ink"
              }`}
            >
              {t.projects.filters[key]}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <section className="container-px py-12 md:py-16">
        <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-6 break-inside-avoid"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-divider/30">
                    <Image
                      src={project.image}
                      alt={project.name[lang]}
                      width={800}
                      height={project.category === "interior" ? 1000 : 600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-display text-2xl text-linen">{project.name[lang]}</p>
                      <p className="mt-1 text-sm text-linen/80">
                        {t.projects.filters[project.category]} · {project.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 px-1 pt-3">
                    <h3 className="font-display text-lg text-ink">{project.name[lang]}</h3>
                    <span className="eyebrow shrink-0">{t.projects.filters[project.category]}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
