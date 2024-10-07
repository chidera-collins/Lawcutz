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
        MainBg: '#212f3d',
        bbb: '#06131a'
        // 212f3d 
        // 26355D 
        // 021526 
        // 072541 
      }
    },
  },
  plugins: [],
}

