/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-brand": "#0EA5E9",
        "color-darkest": "#0F172A",
        "color-dark": "#37476C",
        "color-medium": "#CBD5E1",
        "color-light": "#E6ECF3",
        "color-lightest": "#FFFFFF",
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
