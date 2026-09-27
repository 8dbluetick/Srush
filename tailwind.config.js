/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          dark: "#120308",
          deep: "#230612",
          mid: "#400b21",
          bright: "#681436",
          rose: "#93254e",
        },
        blush: {
          soft: "#fcf0f4",
          light: "#f9d8e4",
          mid: "#f4aabf",
          deep: "#e87396",
        },
        rosegold: {
          DEFAULT: "#e0a96d",
          light: "#f3d2b3",
          dark: "#b87c42",
          glow: "#ffd7a8",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        handwritten: ['Caveat', 'cursive', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 15px rgba(224, 169, 109, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(244, 170, 191, 0.9))' },
        }
      }
    },
  },
  plugins: [],
}
