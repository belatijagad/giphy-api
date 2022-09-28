/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'open': ['"Open Sans"', 'sans-serif'],
      'display': ['Montserrat', 'sans-serif'],
    },
  },
}
