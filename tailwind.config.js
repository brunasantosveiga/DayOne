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

        primary: "#f4f4fb",
        secondary: "#fafbff",
        darker: "#131339",
      },
      height: {
        1200: "1200px",
        779: "779px",
        742: "742px",

        484: "484px",
        49: "49px",
      },
      width: {
        1600: "1600px",
        336: "336px",
        1054: "1054px",

        400: "400px",
        571: "571px",
        103: "103px",
        108: "108px",
        176: "176px",
      },
      gap: {
        gap: "23px",
      },
    },
  },
  plugins: [],
};
