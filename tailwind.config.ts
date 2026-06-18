import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F5F0EB",
        ink: "#1A1A1A",
        sand: "#B5A48C",
        earth: "#8C7B65",
        divider: "#D8CFC4",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-tajawal)", "Tahoma", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(140, 123, 101, 0.45)",
        card: "0 24px 60px -32px rgba(26, 26, 26, 0.25)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
