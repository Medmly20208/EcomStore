/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
