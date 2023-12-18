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
  modules: ["@nuxt/content", "nuxt-gtag", "@nuxt/image"],
  gtag: {
    id: "GTM-M86WK6ZW",
  },
  vite: {
    server: {
      headers: {
        "Cache-Control": "max-age=31536000",
      },
    },
  },
});
