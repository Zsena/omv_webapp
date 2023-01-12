/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0c3a6f",
        green: "#6dd249",
        lightblue: "#1c99dc",
        gray: '#c3ced9'
      }
    },
  },
  plugins: [],
}
