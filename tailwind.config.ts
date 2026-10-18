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
        background: "#F7F7F8",
        foreground: "#000000",
        muted: "#797979",
        secondary: "#616161",
        card: {
          DEFAULT: "#FFFFFF",
          daytrps: "#B6C8E6",
          campipal: "#A3C2A9",
          instagram: "#BFB0E8",
          cv: "#A4BDE1",
        },
        tab: {
          bg: "#E5E5E5",
          active: "#000000",
        }
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        script: ["'Style Script'", "cursive"],
        inter: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        "portfolio": "1512px",
      }
    },
  },
  plugins: [],
};
export default config;
