/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '120rem', // 1920px
      },
    },
  },
  plugins: [require('tailwindcss-animated'),
  require('tailwind-scrollbar'),],
}

