module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'default': '30px'
      },
      colors: {
        'primary': '#fb7413',
        'primary-light': '#FFEFC5',
        'light': '#262F38',
        'lighter': '#959eac',
        'dark': '#1F2630',
        'darker': '#121417',
      },
      fontSize: {
        'default': '15px'
      }
    },
  },
  plugins: [],
}
