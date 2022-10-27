// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxtjs/i18n"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.spacex.land/graphql",
      },
    },
  },
  i18n: {
    vueI18n: {
      legacy: false,
      locale: "zh-TW",
      messages: {
        en: {
          hello: "Hello!",
          language: "Language",
        },
        zh: {
          hello: "你好!",
          language: "語言",
        },
      },
    },
  },
  build: {
    transpile: ["gsap"],
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
