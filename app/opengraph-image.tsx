import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Massaha — Architectural Consulting, Planning & Guidance Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F0EB",
          fontFamily: "sans-serif",
        }}
      >
        {/* Massaha lettermark — taupe arch + black M */}
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          <path
            d="M22 78 V50 a28 28 0 0 1 56 0 V78"
            stroke="#B5A48C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 74 V36 L50 60 L70 36 V74"
            stroke="#1A1A1A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 700,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
          }}
        >
          Massaha
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "#8C7B65",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Architecture Studio
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid #D8CFC4",
            fontSize: 26,
            color: "#8C7B65",
          }}
        >
          Consulting · Planning · Guidance
        </div>
      </div>
    ),
    { ...size }
  );
}
