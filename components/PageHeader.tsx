"use client";

import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="container-px pt-36 pb-12 md:pt-44 md:pb-16">
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing }}
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easing }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-earth md:text-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easing }}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
