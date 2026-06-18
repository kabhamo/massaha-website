"use client";

import { Reveal } from "@/components/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-start";
  return (
    <Reveal className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-earth md:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
