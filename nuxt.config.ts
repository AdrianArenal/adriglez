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

  image: {
    provider: 'vercel',
    screens: {
      icon: 48,
      icon2x: 96,
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 2048,
      '3xl': 2560,
      '4xl': 3072,
    },
    densities: [1, 2],
    quality: 80,
  },
})