/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        "primary": "#17153B",
        "secondary": "#2E236C",
        "tertiary": "#433D8B",
        "primary-dark": "#C8ACD6",
        "secondary-dark": "#433D8B",
        "tertiary-dark": "#2E236C"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}