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
        primary: {
          100: "#e1e4f8",
          200: "#b1baef",
          300: "#8091e5",
          400: "#4a6ad9",
          500: "#30499d",
          600: "#1b2b62",
          700: "#070F2B"
        },
        secondary: {
          100: "#dce0f6",
          200: "#adb7ea",
          300: "#7d8fde",
          400: "#4a68cc",
          500: "#324790",
          600: "#1b2958",
          700: "#060C22",
        },
        tertiary: {
          100: "#e6e8fa",
          200: "#b6bef2",
          300: "#8595ea",
          400: "#4f6de0",
          500: "#2f4baa",
          600: "#1b2d6c",
          700: "#081234",
        },
        "accent": "#4A6AD9",
        "base-light": "#fbfbfb",
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
  safelist: [
    "bg-info",
  ],
  plugins: [],
};
export default config;
