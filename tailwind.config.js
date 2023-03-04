/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rToL: {
          from: { right: '-30px' },
          to: { right: '0px' }
        }
      },
      animation: {
        iconText3: 'rToL 0.5s linear'
      }
    }
  },
  plugins: []
};
