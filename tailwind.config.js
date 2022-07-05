/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html, js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#262626',
        'light': '#FFFCF7',
        'shell': '#FFF5EC',
        'brand': '#FF0054',
      }
    },
    fontFamily: {
      'thunder': ["'Thunder'", 'sans-serif'],
      'display': ["'NT Wagner'", 'sans-serif'],
      'body': ["'Poppins'", 'sans-serif'],
    },
  },
  plugins: [],
}
