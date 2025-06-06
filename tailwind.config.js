/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8F7",
        secondary: "#0E3E4E",
        secondaryLight: "#2B5664",
        accent: "#c6eccd",
        accentHover: "#8CD99C",
        focusOutline: "#F2C0E8",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
