const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        NotoSerif: ['Noto Serif'],
        PlayfairDisplay: ['Playfair Display'],
        AveriaSerifLibre: ['Averia Serif Libre'],
        AlexBrush: ['Alex Brush']
      },
      colors: {
        'pale-spring': '#EAEFB1',
        popstar: '#B3525E',
        'popstar-hover': '#8D3F48',
        nyanza: '#E9F7CA',
        'moss-green': '#94A661',
        jasmine: '#F7D488'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        }
      }

      addUtilities(newUtilities)
    })
  ],
  variants: {
    extend: {
      borderWidth: ['last']
    }
  }
}
