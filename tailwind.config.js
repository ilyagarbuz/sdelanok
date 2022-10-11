module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "at-light-green": "#44ba9f",
        "at-green": "#286d5d",
        "at-blue": "#1071ff",
        "light-grey": "#F4F2F5",
        "default-text-color": "#333",
        "light-text-color": "#999",
        "modal-bg-color": "rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        top: "0px -5px 7px -3px rgba(34, 60, 80, 0.41)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
    fontFamily: {
      Raleway: ["Raleway, sans-serif"],
      number: ["sans-serif"],
    },
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        xl: "1170px",
        "2xl": "1170px",
      },
      padding: "20px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
