/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blanco: "#f8ebe0",
      "verde-claro": "#abc4a4",
      "verde-oscuro": "#086851",
      naranja: "#ee792b",
      rosado: "#ea59c0",
      cafe: "#cbad91",
      azul: "#909bb9",
      white: "#ffffff",
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        kiona: ["kiona", "sans-serif"],
        cooper: ["cooper", "sans-serif"],
      },
      spacing: {
        65: "17rem",
        97: "40rem",
        100: "80rem",
        102: "90rem",
        105:"150rem"
      },
    },
  },
  plugins: [],
};

// font-family: 'Raleway', sans-serif;
