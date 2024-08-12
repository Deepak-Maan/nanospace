/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron", sans-serif'],
        saira: ['"Saira", sans-serif'],
      },
      colors: {
        "off-white": "#D9D9D9",
        blue: "#5893FF",
        "off-black": "#111111",
        gray: "#CCCCCC",
        "light-black": "#3E3F40",
      },
      fontSize: {
        "custom-4xl": "45px",
        "custom-5xl": "66px",
      },
      lineHeight: {
        120: "120%",
        150: "150%",
      },
      backgroundImage: {
        header: "url('./assets/images/webp/hero-bg.webp')",
        "bottom-blur-layer":
          "linear-gradient(180deg, rgba(7, 11, 27, 0) 7.35%, #111111 75.74%)",
      },
      boxShadow: {
        nav: "0px_7px_10.9px_0px_#0000002E",
      },
    },
  },
  plugins: [],
};
