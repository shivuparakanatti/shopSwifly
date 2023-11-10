/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'width(0%)' },
          '100%': { transform: 'rotate(100%)' },
        },
      },
      animation: {
        'border-animation': 'wave 5s linear',
      },
    },
  },
  plugins: [],
}

