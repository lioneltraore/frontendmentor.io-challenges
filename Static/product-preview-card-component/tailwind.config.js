/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#3C8067",
        "cream": "#F2EBE3",
        "v-dark-blue": "#1C232B",
        "dark-g-blue": "#6C7289"
      },
      fontFamily: {
        "sans": ["Montserrat", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
        "fraunces": ["Fraunces"]
      },
    },
  },
  plugins: [],
}
