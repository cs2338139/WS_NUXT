// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  router: {
    options: {
      hashMode: true
    }
  },
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
      viewport: "width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0",
      meta: [
        { charset: "utf-8" }
        // , { "http-equiv": "Content-Security-Policy", content: "upgrade-insecure-requests" }
      ],
      link: [
        {
          rel: "icon",
          href: "favicon-32x32.ico",
        },
      ],
    },
    // baseURL: "/WS_NUXT/",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://wp.nmtl-ws.com/graphql",
        // httpEndpoint: "http://3.37.2.217/graphql",
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "zh",
        file: "zh.json",
      },
      {
        code: "en",
        file: "en.json",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "zh",
  },
  build: {
    transpile: ["gsap"],
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["/assets/css/main.css"],
  nitro: {
    // preset: "cloudflare",
  },
});
