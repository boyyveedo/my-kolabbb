/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralPrimary': '#003930',
        'neutralWhite': '#E6EBEA',
        'neutralLemon': '#EFFF97',
        'neutralblack': '#1E1E1E',
        'neutralGreen': '#D9FF01',
        'neutralDark': '#3F393B',
        'neutralIndi': '#FBFFE6',
        'neutralHue': '#96AEAA',
        'neutralLight': '#6B8C87',
      }
    },
  },
  plugins: [],
}

