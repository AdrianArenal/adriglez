// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/motion/nuxt', '@nuxtjs/seo', 'nuxt-ai-ready', '@nuxt/eslint', '@vercel/analytics'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  compatibilityDate: '2024-11-01',

  typescript: {
    strict: true,
    typeCheck: false,
  },

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap',
        },
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
    description:
      'Portfolio de Adriana González, artista en maquillaje de caracterización /FX y makeup artist',
    defaultLocale: 'es',
  },

  sitemap: {
    strictNuxtContentPaths: true,
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
      include: [
        '@vercel/analytics/nuxt',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
