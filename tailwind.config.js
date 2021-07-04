module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        NotoSerif: ['Noto Serif'],
        PlayfairDisplay: ['Playfair Display']
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  variants: {
    extend: {
      borderWidth: ['last']
    }
  }
}
