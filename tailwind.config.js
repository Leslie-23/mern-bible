module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EDEACE",
        "theme-light": "#CEB2D1",
        "theme-dark": "#7D6180",
      },
      fontFamily: {
        theme: ["'Vesper Libre'", "cursive"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.54, 0.54, 0.02, 0.96)",
        "out-expo": "cubic-bezier(0.54, 0.54, 0.02, 0.96)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
