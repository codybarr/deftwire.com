module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deft: {
          light: '#395a74',
          DEFAULT: '#015183',
          dark: 'rgb(27, 32, 42)',
        },
      },
      fontFamily: {
        teko: ['Teko'],
        oswald: ['Oswald'],
        changa: ['Changa'],
        'open-sans': ['Open Sans'],
      },
      minWidth: {
        screen: '100vw',
      },
      gridTemplateRows: {
        // Simple 10 row grid
        10: 'repeat(10, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
