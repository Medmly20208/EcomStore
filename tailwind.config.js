/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" }, //hidden components
      sx: { min: "639px" }, //display components
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