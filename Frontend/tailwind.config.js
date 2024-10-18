/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: '#2cf5c3', // Custom color
        mecolor: '#FF6F61', // Custom color
      },
      fontFamily: {
        "title": ["Noto Serif Oriya", "serif"]
      }
    },
  },
  plugins: [],
}
