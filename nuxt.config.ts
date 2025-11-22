// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  compatibilityDate: '2024-11-01',

  typescript: {
    strict: true,
    typeCheck: false,
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode',
    classSuffix: '',
  },
})