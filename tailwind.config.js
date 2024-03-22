/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }, // This brace closes the fontFamily object
      colors: {
        customGray: {
          100: '#F3F3F4'
        },
        customRed: {
          100: '#F26B6D'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
