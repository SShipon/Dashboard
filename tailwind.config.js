/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnWhite:"#FFFFFF",
        textColor:"B5B7C0",
        button:"5932EA",
        blackColor:"#000000",
        yellowColor:"#EDC453",
        grayColor:'#F1F3F4',
        green:"#1DBB7D",
        red:"#D84A69",
        primary: "#f06123", 
        purple: '#3f3cbb',
        blue: '#1e40af',
      }
    },
  },
  plugins: [require("daisyui")],
}

