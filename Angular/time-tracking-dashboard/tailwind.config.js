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
      colors: {
        "blue": "#5847EB",
        "desaturated-red": "#FF8C66",
        "soft-blue": "#56C2E6",
        "Light-red": "#FF5C7C",
        "lime-green": "#4ACF81",
        "violet": "#7536D3",
        "soft-orange": "#F1C65B",
        "very-dark-blue": "#0F1424",
        "dark-blue": "#1C1F4A",
        "desaturated-blue": "#6F76C8",
        "pale-blue": "#BDC1FF"
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "18px",
        "4": "24px",
        "5": "28px",
        "6": "30px",
        "7": "32px",
        "8": "38px",
        "9": "40px",
        "10": "50px",
        "11": "54px",
        "12": "62px",
        "13": "68px",
        "14": "74px",
        "15": "75px",
        "16": "76px",
        "17": "80px",
        "18": "86px",
        "19": "256px",
        "20": "324px"
      }
    },
  },
  plugins: [],
};
