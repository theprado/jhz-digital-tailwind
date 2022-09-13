/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,css,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'fundo': '#131313',
        'primary': '#485B9F',
        'secondary': '#E9EBF2',
        'transparent': 'transparent',
        'dark-blue': '#1539E4',
        'dark-grey': '#424242'
      },

     fontFamily: {
      sans: ['Lato', 'sans-serif']
     },

     screens: {
      'lg': '1280px',
      'xl': '1920px'
     }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}