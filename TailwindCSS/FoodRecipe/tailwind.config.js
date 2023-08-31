/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  // ...
  theme: {
    extend: {
      colors: {
        primary: "#9A3B3B",
        secondary: {
          100: "#F2ECBE",
          200: "#E2C799",
        },
      },
      fontSize: {
        mammoth: "4.5rem",
        huge: "5.5rem",
      },
      fontFamily: {
        body: ["Roboto", "Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
