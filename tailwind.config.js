/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left-right': 'slideLeftRight 4s ease-in-out infinite',
      },
      keyframes: {
        slideLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },  // You can adjust this value for the amount of movement
          '100%': { transform: 'translateX(0)' },
        }
      },
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

