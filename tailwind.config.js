/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        successLight: "#2ecc71",
        success: '#27ae60',
        infoLight: "#1abc9c",
        info: "#16a085",
        primary: "#2980b9",
        primaryLight: "#3498db",
        warning: '#f39c12',
        yellow: '#f1c40f',
        danger: '#c0392b',
        dangerLight: '#e74c3c',
        light: "#ecf0f1",
        secondary: "#bdc3c7",
        gray: "#95a5a6",
        darkGray: "#7f8c8d",
        dark: "#34495e",
        darker: "#34495e"
      },
      keyframes: {
        fadeIn: {
          "from" : {
            top: "-100px",
            opacity: 0
          },
          "to": {
            top: 0,
            opacity: 1
          }
        },
      },
      animation: "fadeIn 300ms ease-out"
    },
  },
  plugins: [],
}