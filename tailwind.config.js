/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F4F4F2",
        sub: "#E8E8E8",
        light: "#BBBFCA",
        button: "#495464"

      },
      fontFamily: {
        "proxima": ["ProximaNova"],
        "proxima-bold": ["ProximaNovaSemi"]
      }
    },
  },
  plugins: [],
}

