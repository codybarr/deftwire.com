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
        },
      },
      fontFamily: {
        marker: ['Permanent Marker'],
        sancreek: ['Sancreek'],
        'open-sans': ['Open Sans'],
      },
      minWidth: {
        screen: '100vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
