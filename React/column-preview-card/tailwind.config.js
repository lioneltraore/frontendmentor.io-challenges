module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'bright-orange': "#e38826",
        'dark-cyan': "#006970",
        'very-dark-cyan': "#004241",
        'transparent': "#ffffffbf",
        'light-gray': "#f2f2f2",
        'empty': 'transparent'
      },
      fontSize: {
        'default': '15px'
      },
      fontFamily: {
        'bsd': ['Big Shoulders Display', 'cursive'] 
      },
    },
  },
  plugins: [],
}
