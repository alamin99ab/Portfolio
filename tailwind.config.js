/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-left': 'slide-in-left 0.5s forwards',
        'slide-in-left-delayed': 'slide-in-left 0.5s forwards 0.3s', // New delayed animation for paragraph
        'rgb-border': 'rgb-border 3s ease-in-out infinite', // Adjusted duration for smoother animation
        'pulse-scale': 'pulse-scale 1.5s ease-in-out infinite',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'rgb-border': {
          '0%': { borderColor: 'rgb(255, 0, 0)' }, // Red
          '25%': { borderColor: 'rgb(255, 165, 0)' }, // Orange
          '50%': { borderColor: 'rgb(0, 255, 0)' }, // Green
          '75%': { borderColor: 'rgb(0, 0, 255)' }, // Blue
          '100%': { borderColor: 'rgb(255, 0, 0)' }, // Back to Red
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }, // Pulse effect
        },
      },
    },
  },
  plugins: [],
};
