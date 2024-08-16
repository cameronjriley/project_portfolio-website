/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter', 'sans-serif'],
        matemasie:['Matemasie', 'sans-serif'],
      }
    },
  },
  plugins: [],
}