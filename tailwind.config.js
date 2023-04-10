/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo':['Heebo','sans-serif']
      },
      maxWidth: {
        xll:"1200px",
      }

      
    },
  },
  plugins: [],
}
