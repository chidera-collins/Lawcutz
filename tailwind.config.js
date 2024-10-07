/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textc: '#ecf0f1',
        btncolo: ' #f1c40f',
        MainBg: '#212f3d'
      }
    },
  },
  plugins: [],
}

