module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Silka, Helvetica Neue, Arial, Helvetica, Verdana, sans-serif'
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
