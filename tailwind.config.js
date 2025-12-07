/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'drive': 'drive-right 1.5s cubic-bezier(0.5, 0, 0.1, 1) forwards',
        'puff': 'puff-smoke 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drive-right': {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(120vw)' },
        },
        'puff-smoke': {
          '0%': { opacity: '0.8', transform: 'scale(0.5) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(3) translateY(-40px)' },
        },
      },
      colors: {
        neutral: {
          850: '#1f1f1f',
          900: '#171717',
          950: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
