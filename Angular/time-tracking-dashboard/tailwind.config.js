/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Rubik", "sans-serif"],
      },
      fontSize: {
        "tiny": "15px",
        "base": "18px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "40px",
        "3xl": "56px",
      },
    },
  },
  plugins: [],
};
