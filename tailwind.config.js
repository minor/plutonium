const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      colors: { cyan: colors.cyan, pink: colors.pink },
      zIndex: { "-1": -1 },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
