import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/data";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ServiceLineIcon({ name, className = "" }: { name: ServiceIcon; className?: string }) {
  const props = { ...base, className } as SVGProps<SVGSVGElement>;
  switch (name) {
    case "consulting":
      return (
        <svg {...props}>
          <path d="M3 21h18" />
          <path d="M5 21V8l7-5 7 5v13" />
          <path d="M10 21v-5h4v5" />
        </svg>
      );
    case "interior":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 14h7v7" />
          <path d="M14 3v7h7" />
        </svg>
      );
    case "renovation":
      return (
        <svg {...props}>
          <path d="M14 3l7 7-4 4-7-7z" />
          <path d="M10 7L3 14v7h7l7-7" />
          <path d="M5 19l3-3" />
        </svg>
      );
    case "visualization":
      return (
        <svg {...props}>
          <path d="M12 2l9 5v10l-9 5-9-5V7z" />
          <path d="M3 7l9 5 9-5" />
          <path d="M12 12v10" />
        </svg>
      );
    case "permit":
      return (
        <svg {...props}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
          <path d="M10 13h6" />
          <path d="M10 17h6" />
        </svg>
      );
    case "concept":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.05c-.25.69-1.45 1.32-1.99 1.36-.53.05-.53.42-3.35-.7-2.82-1.12-4.6-3.98-4.74-4.16-.14-.18-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31.25-.28.55-.35.74-.35h.53c.17 0 .4-.06.62.48.25.6.85 2.06.93 2.21.07.14.12.31.02.49-.09.18-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.17.28.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.3 1.43.28.14.45.12.61-.07.17-.18.71-.83.9-1.11.18-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.12.07.65-.18 1.34z" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
