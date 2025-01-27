/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF00', // Green
        secondary: '#000000', // Black
        accent: '#FFFFFF', // White
      },
    },
  },
  plugins: [],
};
