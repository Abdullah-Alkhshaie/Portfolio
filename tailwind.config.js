/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMode: {
          background: "#f8f8f8",
          text: "#333333",
          border: "#dddddd",
        },
        darkMode: {
          background: "#1a1a1a",
          text: "#ffffff",
          border: "#2c2c2c",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};