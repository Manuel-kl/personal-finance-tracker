// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
    storageKey: "color-mode",
    detectBrowserColorScheme: false,
  },
  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-07-16",
});
