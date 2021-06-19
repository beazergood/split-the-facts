module.exports = {
  theme: {
    extend: {
      fontFamily: {
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
