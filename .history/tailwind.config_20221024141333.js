/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "app.vue"],
  theme: {
    screens: {
      "4xl": { min: "1981px" },

      "3xl": { max: "1900px" },

      "2xl": { max: "1440px" },
      /*Extra large devices (large laptops and desktops, 1200px and up) */

      xl: { max: "1279px" },
      /* Large devices (laptops/desktops) */

      lg: { max: "1023px" },
      /* Medium devices (landscape tablets) */

      md: { max: "767px" },
      /* small devices (portrait tablets and large phones) */

      sm: { max: "639px" },
      /* Extra small devices (phones, 600px) */
    },
    extend: {},
  },
  plugins: [],
};
