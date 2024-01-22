const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      brand: "#bd5d38"
    },
    screens: {
      'sp': { 'max': '920px' },
      'pc': { 'min': '921px' },
    }
  },
  plugins: [],
}

