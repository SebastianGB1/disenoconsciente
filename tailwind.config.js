/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blanco': '#f8ebe0',
      'verde-claro': '#abc4a4',
      'verde-oscuro': '#086851',
      'naranja': '#ee792b',
      'rosado': '#ea59c0',
      'cafe': '#cbad91',
      'azul': '#909bb9',
      'white': '#ffffff'
    },
    extend: {
      fontFamily:{'raleway':['Raleway', 'sans-serif'],
                  'kiona' : ["kiona", "sans-serif"],
                  'cooper' : ["cooper", "sans-serif"]},
    },
  },
  plugins: [],
}

// font-family: 'Raleway', sans-serif;