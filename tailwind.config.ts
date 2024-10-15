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
        padding: "1rem",
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
      },
    },
  },
  plugins: [],
};
export default config;
