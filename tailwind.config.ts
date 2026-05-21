import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030712",
        panel: "#07111f",
        cyan: {
          glow: "#19d3ff",
        },
        violet: {
          glow: "#9a6cff",
        },
      },
      boxShadow: {
        glow: "0 0 34px rgba(25, 211, 255, 0.18)",
        "violet-glow": "0 0 38px rgba(154, 108, 255, 0.18)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
