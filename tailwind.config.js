/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellowYa: '#f5c400',
        secondary: '#232325',
        divider: '#eeeeee25',
      },
      opacity: {
        38: 0.38,
        45: 0.45,
      },
    },
  },
  plugins: [],
}
