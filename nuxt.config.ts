export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "th",
      },
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "nuxt-gtag", "nuxt-simple-sitemap"],
  gtag: {
    id: "GTM-M86WK6ZW",
  },
  site: {
    url: "http://www.rs-award.com",
  },
});
