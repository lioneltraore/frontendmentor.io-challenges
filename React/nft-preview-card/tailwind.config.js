/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        "outfit-light": ["outfit-light", "sans-serif"],
        "outfit-semibold": ["outfit-semibold", "sans-serif"],
      },
      colors: {
        "soft-blue": "#8bacda",
        "cyan": "#00fff7",
        "dark-blue-main": "#0d192b",
        "dark-blue-secondary": "#14253d",
        "dark-blue-tertiary": "#2f415b"
      }
      
    },
  },
  plugins: [],
}
