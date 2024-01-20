/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {},
     screens: {
       'xs': '481px',
       'sm': '641px',
       'md': '769px',
       'lg': '1025px',
       'xl': '1514px',
       '2xl': '1922px',
     }
   },
   plugins: [],
 }
 
 