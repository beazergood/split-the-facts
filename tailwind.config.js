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
        jasmine: '#F7D488',
        'jasmine-faded': 'hsla(41, 87%, 75%, 0.56)',
        wall: '#FAF4E6',
        'dark-brown': '#1C0D0E',
        golden: '#FFD56B',
        ocean: '#3F678D',
        cobalt: '#0047AB'
      },
      backgroundImage: (theme) => ({
        angle: "url('/svg/angle-1440x80.svg')",
        'hero-pattern': "url('/svg/leaves-7.svg')",
        frames: "url('/images/frames-nobg-1440.png')",
        'frames-collage': "url('/collage-1440-5.svg')",
        'cobalt-popstar': "url('/svg/pattern-cobalt-popstar.svg')"
      })
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
