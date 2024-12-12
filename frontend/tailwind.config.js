/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              dominant: '#FAF7F0',  // Light Greyish Tone
              primary: '#4A4947',   // Medium Dark
              secondary: '#D8D2C2',
              accent: '#B17457'      // Background Light Color
           },

          fontFamily: {
              heading: ['Poppins', 'sans-serif'], // For headers
              body: ['Open Sans', 'sans-serif'],      // For body text
          },
      },
  },
  plugins: [],
}