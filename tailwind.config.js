/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#075985', // sky-800
      primaryWhite: '#0284c7', // sky-600
      white: '#ffffff',
      red: '#FF0000'
    }
  },
  plugins: [],
}