"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

/**
 * Faint, self-drawing architectural "blueprint" behind the hero headline —
 * an arch that echoes the Massaha lettermark, plus construction guides.
 * Subtle by design; fully static when the visitor prefers reduced motion.
 */
export function HeroBlueprint() {
  const reduce = useReducedMotion();

  // When reduced motion is requested, render the drawing complete and still.
  const draw = (delay: number, duration: number): Transition =>
    reduce ? { duration: 0 } : { duration, delay, ease: "easeInOut" };

  const start = reduce ? 1 : 0;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <motion.svg
        viewBox="0 0 600 520"
        fill="none"
        className="h-auto w-[min(900px,92vw)] opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Construction guides — drawn first, very faint */}
        <motion.line
          x1="300" y1="90" x2="300" y2="500"
          stroke="#8C7B65" strokeWidth="1" strokeOpacity="0.16"
          initial={{ pathLength: start }} animate={{ pathLength: 1 }}
          transition={draw(0.2, 1.1)}
        />
        <motion.line
          x1="110" y1="470" x2="490" y2="470"
          stroke="#8C7B65" strokeWidth="1" strokeOpacity="0.2"
          initial={{ pathLength: start }} animate={{ pathLength: 1 }}
          transition={draw(0.3, 1.1)}
        />
        {/* Radius guide circle around the arch crown */}
        <motion.circle
          cx="300" cy="250" r="100"
          stroke="#B5A48C" strokeWidth="1" strokeOpacity="0.18"
          initial={{ pathLength: start }} animate={{ pathLength: 1 }}
          transition={draw(0.35, 1.6)}
        />

        {/* The arch — the hero of the drawing, echoing the logo mark */}
        <motion.path
          d="M200 470 V250 a100 100 0 0 1 200 0 V470"
          stroke="#B5A48C" strokeWidth="1.6" strokeOpacity="0.5"
          strokeLinecap="round"
          initial={{ pathLength: start }} animate={{ pathLength: 1 }}
          transition={draw(0.6, 1.9)}
        />

        {/* Dimension ticks at the base of each leg */}
        <motion.line
          x1="200" y1="462" x2="200" y2="478"
          stroke="#8C7B65" strokeWidth="1" strokeOpacity="0.3"
          initial={{ pathLength: start, opacity: reduce ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={draw(1.8, 0.5)}
        />
        <motion.line
          x1="400" y1="462" x2="400" y2="478"
          stroke="#8C7B65" strokeWidth="1" strokeOpacity="0.3"
          initial={{ pathLength: start, opacity: reduce ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={draw(1.9, 0.5)}
        />
      </motion.svg>
    </div>
  );
}
