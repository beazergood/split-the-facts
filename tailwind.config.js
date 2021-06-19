module.exports = {
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ['Playfair Display']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    extend: {
      borderWidth: ['last']
    }
  }
}
