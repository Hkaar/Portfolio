import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        "primary": "#070F2B",
        "secondary": "#1B2B62",
        "tertiary": "#30499D",
        "accent": "#4A6AD9",
        "primary-dark": "#E1E4F8",
        "secondary-dark": "#B1BAEF",
        "tertiary-dark": "#8091E5",
        "base-light": "#fafafa",
        "base-dark": "#0b0b0b",
        "danger": "#dc2626",
        "danger-dark": "#ef4444",
        "info": "#60a5fa",
        "info-dark": "#93c5fd",
        "warning": "#facc15",
        "warning-dark": "#fde047",
        "success": "#16a34a",
        "success-dark": "#4ade80",
      },
      animation: {
        "float-down": "float-down 2.5s ease-in-out infinite",
        "fade-pulse": "fade-in-out 2s ease-in-out infinite",
        "rotate-360": "rotate-360 1s linear infinite",
      },
      keyframes: {
        "float-down": {
          "0%": {
            "transform": "translateY(0)",
          },
          "50%": {
            "transform": "translateY(10px)",
          },
          "100%": {
            "transform": "translateY(0)",
          },
        },
        "fade-in-out": {
          "0%": {
            "opacity": "100%",
          },
          "50%": {
            "opacity": "13%",
          },
          "100%": {
            "opacity": "100%",
          },
        },
        "rotate-360": {
          "0%": {
            "transform": "rotate(0deg)",
          },
          "100%": {
            "transform": "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
