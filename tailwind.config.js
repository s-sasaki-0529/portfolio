/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'sp': { 'max': '920px' },
      'pc': { 'min': '921px' },
    }
  },
  plugins: [],
}

