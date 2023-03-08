/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        lToR: {
          from: { left: '-300px' },
          to: { left: '0px' }
        }
      },
      animation: {
        leftToRight: 'lToR 0.3s linear'
      },
      fontFamily: {
        lato: ['Merriweather Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif']
      }
    }
  },
  plugins: []
};
