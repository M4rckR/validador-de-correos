/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html","./js/*.js"],
  theme: {
    extend: {
      colors: {
        'm-blue' : 'hsl(223, 87%, 63%)',
        'm-pblue' : 'hsl(223, 100%, 88%)',
        'm-red' : 'hsl(354, 100%, 66%)',
        'm-gray' : 'hsl(0, 0%, 59%)',
        'm-dblue' : 'hsl(209, 33%, 12%)',
      },
      fontFamily :{
        'franklin' : '"Libre Franklin", sans-serif'
      }
    },
  },
  plugins: [],
}

