module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-light": "#00FFDA",
        "theme-dark": "#003A42",
        "theme-3": "#9FF2E6",
      },
      fontFamily: {
        theme: ["Palanquin Dark", "sans-serif"],
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
