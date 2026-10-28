// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
    'nuxt-ai-ready',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  compatibilityDate: '2024-11-01',

  typescript: {
    strict: true,
    typeCheck: false,
  },

  app: {
    head: {
      // SEO metas
      title: 'Adriana González - FX Artist Portfolio',
      meta: [
        // Basic
        { name: 'description', content: 'Maquillaje de caracterización /FX y makeup artist profesional. Servicios en Pola de Siero, Asturias. Novias, invitadas y eventos.' },
        { name: 'keywords', content: 'maquillaje, maquillaje profesional, maquillaje de novias, maquillaje de caracterización, FX, makeup artist, artista de maquillaje, Pola de Siero, Asturias, maquillaje de bodas, maquillaje de eventos, maquillaje personalizado' },
        { name: 'author', content: 'Adriana González' },
        { name: 'robots', content: 'index, follow, max-snippet:200, max-image-preview:large, max-video-preview:600' },
        { name: 'googlebot', content: 'index, follow, max-snippet:200, max-image-preview:large' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0B0B0B' },
        { name: 'csrf', content: 'adrianagonzfdez@gmail.com' },

        // Open Graph (Facebook, LinkedIn, etc.)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Adriana González - FX Artist Portfolio | Maquillaje Profesional en Pola de Siero, Asturias' },
        { property: 'og:description', content: 'Maquillaje de caracterización /FX y makeup artist profesional. Servicios para novias, invitadas y eventos. Ubicación: Pola de Siero, Asturias.' },
        { property: 'og:url', content: 'https://adriglez.com/' },
        { property: 'og:image', content: 'https://adriglez.com/logo_makeup.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Adriana González - FX Artist Portfolio' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:locale:alternate', content: 'es_ES' },

        // Twitter cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Adriana González - FX Artist Portfolio | Maquillaje Profesional en Pola de Siero, Asturias' },
        { name: 'twitter:description', content: 'Maquillaje de caracterización /FX y makeup artist profesional. Servicios para novias, invitadas y eventos. Ubicación: Pola de Siero, Asturias.' },
        { name: 'twitter:image', content: 'https://adriglez.com/logo_makeup.webp' },
        { name: 'twitter:creator', content: '@adriglez' },
        { name: 'twitter:site', content: '@adriglez' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'adriglez-color-mode',
  },

  site: {
    url: 'https://adriglez.com',
    name: 'Adriana González - Portfolio',
    description: 'Maquillaje de caracterización /FX y makeup artist profesional. Servicios en Pola de Siero, Asturias. Novias, invitadas, eventos y maquillaje de personajes.',
    defaultLocale: 'es',
    author: 'Adriana González',
    ogImage: 'https://adriglez.com/logo_makeup.webp',
    twitterSite: '@adriglez',
    twitterCreator: '@adriglez',
    favicon: '/favicon.ico',
  },

  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      {
        loc: '/',
        lastmod: new Date(),
        changefreq: 'monthly',
        priority: 1.0,
      },
      {
        loc: '/maquillaje-fx',
        lastmod: new Date(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/makeup',
        lastmod: new Date(),
        changefreq: 'weekly',
        priority: 0.9,
      },
    ],
  },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
})
