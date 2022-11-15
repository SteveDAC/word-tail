/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'tileStateCorrect': 'green',
      'tileStateIncorrect': 'dimgray',
      'tileStateMisplaced': 'goldenrod',
      'tileStateNone': 'whitesmoke'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },
}
