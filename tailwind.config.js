/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        script: ['Playfair Display', 'serif'],
      },
      colors: {
        green: {
          light: '#a8ddb5',
          mid:   '#5ab880',
          dark:  '#3fa066',
          deep:  '#2d7a4f',
        }
      }
    }
  },
  plugins: [],
}
