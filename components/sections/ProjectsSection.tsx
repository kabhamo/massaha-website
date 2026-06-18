"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal, staggerContainer } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="projects" className="container-px py-24 md:py-32">
      <SectionHeader
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <motion.div
        className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 3} />
        ))}
      </motion.div>

      <Reveal className="mt-14 flex justify-center" delay={0.1}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-linen"
        >
          {t.projects.viewAll}
          <ArrowIcon className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
        </Link>
      </Reveal>
    </section>
  );
}
