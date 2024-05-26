/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: '"Exo 2"',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        md: '30px',
        lg: '30px',
        xl: '30px',
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        body: '#1D1F23',
        primary: '#4F46E5',
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4439CC',
        },
      },
      backgroundImage: {
        mainSlider: "urt('img/mainSlider_bg.png')",
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0,0 )' },
          '20%, 80%': { transform: 'translate3d(2px, 0,0 )' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0,0 )' },
          '40%, 60%': { transform: 'translate3d(4px, 0,0 )' },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out',
      },
    },
  },
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
  plugins: [
    require('tailwindcss-dir')(),
  ],
}
