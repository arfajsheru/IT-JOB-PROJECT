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
        "title": ["Noto Serif Oriya", "serif"],
        "font2": ["Roboto Slab", "serif"],
        "font3": ["Noto Serif", "serif"],
        "font4": ["Noto Sans TC", "serif"],
      }
    },
  },
  plugins: [],
}
