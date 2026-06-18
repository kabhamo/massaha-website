/**
 * Massaha lettermark — a geometric "M" in thin lines with a warm taupe arch.
 * Pure SVG so the brand identity renders without external assets. Swap for the
 * official /logo.png by setting `usePng` if a raster logo is preferred.
 */
export function LogoMark({
  className = "",
  title = "Massaha",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Warm taupe arch */}
      <path
        d="M22 78 V50 a28 28 0 0 1 56 0 V78"
        stroke="currentColor"
        className="text-sand"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Geometric M lettermark */}
      <path
        d="M30 74 V36 L50 60 L70 36 V74"
        stroke="currentColor"
        className="text-ink"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <span className="font-display text-2xl leading-none tracking-tight">Massaha</span>
    </span>
  );
}
