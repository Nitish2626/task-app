/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "template":"url('/src/images/task-template.jpeg')"
      },
      keyframes:{
        fade:{
          "0%":{opacity:0},
          "100%":{opacity:100}
        }
      },
      animation:{
        fade:"fade 3s linear 1"
      }
    },
  },
  plugins: [],
}

