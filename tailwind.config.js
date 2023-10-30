/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      },
      colors: {
        very_dark_grayish_blue: "hsl(217, 19%, 35%)",
        desaturated_dark_blue: "hsl(214, 17%, 51%)",
        grayish_blue: "hsl(212, 23%, 69%)",
        light_grayish_blue: "hsl(210, 46%, 95%)"
      }
    },
  },
  plugins: [],
}