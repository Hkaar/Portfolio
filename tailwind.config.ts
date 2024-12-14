import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "primary": "#17153c",
        "secondary": "#2e236c",
        "accent": "#433d8a",
        "primary-dark": "#C8ACD6",
        "secondary-dark": "#433D8B",
        "accent-dark": "#2E236C",
        "base-light": "#f9fafb",
        "base-dark": "#040506",
        "danger": "#dc2626",
        "danger-dark": "#ef4444",
        "info": "#60a5fa",
        "info-dark": "#93c5fd",
        "warning": "#facc15",
        "warning-dark": "#fde047",
        "success": "#16a34a",
        "success-dark": "#4ade80",
        "body-light": "#fbfbfe",
        "text-light": "#040316",
        "body-dark": "#010104",
        "text-dark": "#eae9fc",
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
