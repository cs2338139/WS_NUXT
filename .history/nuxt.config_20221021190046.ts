// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.spacex.land/graphql",
      },
    },
  },
  build: {
    transpile: ['gsap'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/css/main.css"],
});
