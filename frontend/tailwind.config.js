/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ffff",
          dark: "#00cccc",
          light: "#5ffff0",
        },
        secondary: {
          DEFAULT: "#8a2be2",
          dark: "#6a1bb2",
          light: "#a855f7",
        },
        dark: {
          primary: "#0a0e1a",
          secondary: "#141928",
          tertiary: "#1a1f3a",
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 255, 255, 0.5)",
        "glow-purple": "0 0 30px rgba(138, 43, 226, 0.5)",
        "glow-cyan-lg": "0 0 60px rgba(0, 255, 255, 0.6)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(50px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(138, 43, 226, 0.8)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
