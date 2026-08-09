import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        "hero-cream": "var(--hero-cream)",
      },
      fontFamily: {
        "swear-display": "var(--font-swear-display)",
        druk: "var(--font-druk)",
        "neue-mon": "var(--font-neue-mon)",
        "neue-book": "var(--font-neue-book)",
      },
    },
  },
  plugins: [],
};

export default config;
