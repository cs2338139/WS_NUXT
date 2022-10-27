// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxtjs/i18n"],
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-TW",
      },
      title: "數位遊戲開發暨藏品3D掃描、建模計畫 | 國立臺灣文學館",
      script: [
        {
          type: "module",
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
          body: true,
        },
        {
          nomodule: true,
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
          body: true,
        },
      ],
      viewport: "width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no",
      charset: "utf-8",
      link: {
        // rel: "icon",
        // href: "favicon-32x32.ico",
      },
    },
  },
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
