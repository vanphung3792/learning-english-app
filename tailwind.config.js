/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '481px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1201px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}