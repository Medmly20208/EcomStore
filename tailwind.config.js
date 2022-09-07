/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" }, //hidden components
      sx: { min: "639px" }, //display components
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    fontFamily: {
      MyFont: ["Public Sans"],
    },
    extend: {
      colors: {
        "customized-orange": "#e65100",
      },
    },
  },
  plugins: [],
};
