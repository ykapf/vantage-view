import type { Config } from "tailwindcss";

// Palette carried over from the existing brand: navy, drone teal, hi-vis yellow.
// Teal is used as a ground with ink text on it (5:1). `teal.deep` is for text on paper.
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F1F5F6", dim: "#E1E9EB" },
        ink: { DEFAULT: "#13202C", soft: "#4A5A66", line: "#2C3C4A" },
        teal: { DEFAULT: "#52A5BD", deep: "#1F6A80" },
        signal: "#F4C531",
      },
      fontFamily: { sans: ["var(--font-archivo)", "system-ui", "sans-serif"] },
      fontSize: {
        mega: ["clamp(3.4rem, 17vw, 22rem)", { lineHeight: "0.84", letterSpacing: "-0.055em" }],
        jumbo: ["clamp(2.75rem, 10.4vw, 13rem)", { lineHeight: "0.88", letterSpacing: "-0.05em" }],
        large: ["clamp(2rem, 4.6vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
      },
      spacing: { gutter: "clamp(1.25rem, 2.8vw, 3rem)", section: "clamp(5rem, 11vw, 11rem)" },
    },
  },
  plugins: [],
};

export default config;
