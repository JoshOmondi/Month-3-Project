/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};

