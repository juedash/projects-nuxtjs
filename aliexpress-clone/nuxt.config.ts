// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  modules: [
      '@pinia/nuxt',
      '@nuxt/icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate',
      '@nuxtjs/tailwindcss',
      // '@nuxtjs/supabase'
  ],
    runtimeConfig: {
      public: {
          stripePk: process.env.STRIPE_PK_KEY
      }
    },
    app: {
      head: {
          script: [
              {src: 'https://js.stripe.com/v3/', defer: true}
          ]
      }
    }
})