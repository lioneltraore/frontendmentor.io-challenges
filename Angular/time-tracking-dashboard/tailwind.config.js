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
        "light-red": "#FF5C7C",
        "lime-green": "#4ACF81",
        "violet": "#7536D3",
        "soft-orange": "#F1C65B",
        "very-dark-blue": "#0F1424",
        "dark-blue": "#1C1F4A",
        "desaturated-blue": "#6F76C8",
        "pale-blue": "#BDC1FF",
        "hover-blue": "#34397B"
      },
      spacing: {
        "1": "8px",//2
        "2": "18px",//3
        "3": "24px",//4
        "4": "28px",//5
        "5": "32px",//7
        "6": "38px",//8
        "7": "40px",//9
        "8": "68px",//13
        "9": "74px",//14
        "10": "80px",//17
        "11": "256px",//19
        "12": "324px"//20
      }
    },
  },
  plugins: [],
};
