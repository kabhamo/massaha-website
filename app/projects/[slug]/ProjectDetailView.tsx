"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import type { Project } from "@/lib/data";

const easing = [0.22, 1, 0.36, 1] as const;

export function ProjectDetailView({ project }: { project: Project }) {
  const { t, lang, isRTL } = useLanguage();
  const meta = t.projects.meta;

  return (
    <article>
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden md:h-[70vh]">
        <Image
          src={project.image}
          alt={project.name[lang]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
        <div className="container-px absolute inset-x-0 bottom-0 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <span className="eyebrow text-linen/80">{t.projects.filters[project.category]}</span>
            <h1 className="mt-2 font-display text-4xl text-linen sm:text-5xl md:text-6xl">
              {project.name[lang]}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Meta + description */}
      <section className="container-px py-16 md:py-20">
        <Link
          href="/projects"
          className="link-underline inline-flex items-center gap-2 text-sm text-earth hover:text-ink"
        >
          <ArrowIcon className={`h-4 w-4 ${isRTL ? "" : "rotate-180"}`} />
          {t.projects.backToProjects}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              {project.description[lang]}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <dl className="space-y-5 border-t border-divider pt-6">
              <MetaRow label={meta.category} value={t.projects.filters[project.category]} />
              <MetaRow label={meta.scope} value={project.scope[lang]} />
              <MetaRow label={meta.year} value={project.year} />
              <MetaRow label={meta.location} value={project.location[lang]} />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-px pb-24 md:pb-32">
        <p className="eyebrow">{meta.gallery}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.05}
              className={i % 3 === 0 ? "md:col-span-2" : ""}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-divider/30">
                <Image
                  src={src}
                  alt={`${project.name[lang]} — ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="eyebrow">{label}</dt>
      <dd className="text-end text-sm text-ink">{value}</dd>
    </div>
  );
}
