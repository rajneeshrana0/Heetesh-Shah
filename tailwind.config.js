/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        corm: ["Cormorant", "serif"],
        gara: ["Garamond", "serif"],
        juli: ["Julius Sans One", "sans-serif"],
        // indif: ["Teachers", "sans-serif"],
      },
    },
  },
  plugins: [],
};
