/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Branda-yolq": ["BrandaYolq", "sans-serif"],
      },
      colors: {
        banksyRed: "#B30000",
        banksyHoverRed: "#FF6666",
        banksyBGHeader: "#333333",
        banksyGray: "#808080",
      },
    },
  },
  plugins: [],
};
