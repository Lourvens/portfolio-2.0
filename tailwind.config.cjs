/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#19191f',
        darker: "#171b21"
      },
      fontFamily: {
        body: ['Catamaran', 'sans-serif'],
        header: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
