/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'body': "Poppins"
      },
      colors: {
        'lightBlack': '#45474B',
        'darkBlue': '#0371E0',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

