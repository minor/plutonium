const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        pink: colors.pink,
        rose: colors.rose,
        teal: colors.teal,
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
