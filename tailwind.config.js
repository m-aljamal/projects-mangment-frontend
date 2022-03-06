const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

// green teal 600
// blue slate 900
//  red red-600
// lite green teal 200
// gray slate 300
//  lite red red 400
// liter gray slate 100
