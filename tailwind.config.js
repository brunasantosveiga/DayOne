/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "day-one-bg": "#f3f6ff",
        "button-hover": "#363b5a",
        "brush-from": "#bbcbfb",
        "brush-to": "#F1D4FF",
        "codeBracket-from": "#FBBBDA",
        "codeBracket-to": "#FFD4D4",
        "gear-from": "#BBCBFB",
        "gear-to": "#F1D4FF",
        "user-from": "#BBFBE4",
        "user-to": "#D4E0FF",
        "clipboard-from": "#BBD8FB",
        "clipboard-to": "#FFD4D4",
        "university-from": "#FFDEC7",
        "university-to": "#D4D9FF",
      },
      height: {
        1200: "1200px",
        779: "779px",
      },
      width: {
        1600: "1600px",
        336: "336px",
        1054: "1054px",
      },
      gap: {
        gap: "23px",
      },
    },
  },
  plugins: [],
};
