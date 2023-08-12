/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#111111', // sky-800
      primaryWhite: '#333333', // sky-600
      white: '#ffffff',
      white2: '#eeeeee',
      red: '#FF0000',
      softRed: '#ff4444',
      black: '#000000',
      
    }
  },
  plugins: [],
}