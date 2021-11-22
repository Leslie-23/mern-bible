module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EDEACE",
        "theme-light": "#F58888",
        "theme-dark": "#760A0A",
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
