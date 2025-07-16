const { Satisfy, Poppins } = require("next/font/google");

/** @type {import ('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#f50b0a", // ✅ This is correct
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        "spin-supperslow": "spin 18s linear infinite",
        rocket: "rocket 3s linear infinite",
      },
      keyframes: {
        rocket: {
          "0%, 100%": {
            transform: "rotate(-2deg) translate(0px, 0px)",
          },
          "50%": {
            transform: "rotate(2deg) translate(50px, 50px)",
          },
        },
      },
    },
  },
  plugins: [],
};
