/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#17153B",
        "secondary": "#2E236C",
        "tertiary": "#433D8B",
        "primary-dark": "#C8ACD6",
        "secondary-dark": "#433D8B",
        "tertiary-dark": "#2E236C"
      }
    },
  },
  plugins: [],
}