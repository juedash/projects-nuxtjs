// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-16",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  experimental: {
    scanPageMeta: "after-resolve",
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: "within",
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  features: {
    inlineStyles: true,
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Montserrat: "Montserrat, sans-serif",
    },
  },
});
