/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "bounce-slow": "bounce 5s linear infinite",
        "bounce-too-slow": "bounce 9s linear infinite",
      },
      colors: {
        calypso: {
          DEFAULT: "#0e6b81",
          50: "#ebfffe",
          100: "#cbfffe",
          200: "#9efdff",
          300: "#5cf9ff",
          400: "#12eafe",
          500: "#00cce4",
          600: "#00a2bf",
          700: "#04819a",
          800: "#0e6b81",
          900: "#105569",
          950: "#033849",
        },
        koromiko: {
          DEFAULT: "#fbbc60",
          50: "#fff8ed",
          100: "#fff0d5",
          200: "#fddeab",
          300: "#fbbc60",
          400: "#f9a13e",
          500: "#f78518",
          600: "#e86b0e",
          700: "#c0510e",
          800: "#994013",
          900: "#7b3713",
          950: "#421908",
        },
      },
    },
  },
  plugins: [],
};
