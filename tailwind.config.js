/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      desktop: "1440px",
      xxl: "1320px",
      tv: "1600px",
    },
    extend: {
      colors: {
        green: "#0ca346",
        hoverGreen: "#0a8c3a",
        borderGray: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
