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
      title: 'Adriana González | FX & Makeup Artist',
      meta: [
{ name: 'author', content: 'Adriana González' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0B0B0B' },
        { name: 'format-detection', content: 'telephone=yes' },

        { rel: 'alternate', hreflang: 'es-ES' },
        { rel: 'alternate', hreflang: 'x-default' },
        { rel: 'canonical', href: 'https://adriglez.com/' },

        // Open Graph (Facebook, LinkedIn, etc.)
        { property: 'og:title', content: 'Adriana González | FX & Makeup Artist' },
        { property: 'og:description', content: 'Maquillaje FX & caracterización profesional. Novias, bodas, eventos, personajes. Pola de Siero, Asturias.' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:image', content: 'https://adriglez.com/logo_makeup.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://adriglez.com/' },

        { property: 'geo.position', content: '43.3924086, -5.659249' },
        { property: 'geo.region', content: 'ES-AS' },
        { property: 'geo.placename', content: 'Pola de Siero, Asturias' },
        { property: 'geo.country-name', content: 'España' },

        // JSON-LD Structured Data (Organization/Person)
        { tag: 'script', attrs: { type: 'application/ld+json' }, innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Adriana González',
          'url': 'https://adriglez.com',
          'logo': 'https://adriglez.com/logo_makeup.webp',
          'sameAs': [
            'https://www.instagram.com/adriglezbeauty/',
            'https://github.com/AdrianArenal/adriglez'
          ],
          'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'booking',
            'telephone': '+34 727 708 459'
          }
        }) },
        { tag: 'script', attrs: { type: 'application/ld+json' }, innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Adriana González',
          'url': 'https://adriglez.com',
          'image': 'https://adriglez.com/images/adri.webp',
          'jobTitle': 'Maquillaje de Caracterización / FX',
          'description': 'Maquillaje de caracterización /FX y makeup artist profesional. Servicios en Pola de Siero, Asturias.',
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 43.3924086,
            'longitude': -5.659249
          },
          'knowsAbout': [
            'maquillaje profesional',
            'maquillaje de caracterización',
            'maquillaje de bodas',
            'maquillaje de novias',
            'maquillaje de eventos',
            'maquillaje de personajes',
            'maquillaje de FX'
          ],
          'worksFor': {
            '@type': 'Organization',
            'name': 'Adriana González'
          }
        }) },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Adriana González | FX & Makeup Artist' },
        { name: 'twitter:description', content: 'Maquillaje FX & caracterización profesional. Novias, bodas, eventos, personajes. Pola de Siero, Asturias.' },
        { name: 'twitter:image', content: 'https://adriglez.com/logo_makeup.webp' },
        { name: 'twitter:creator', content: '@adriglez' },
        { name: 'twitter:site', content: '@adriglez' },
        { name: 'twitter:image:alt', content: 'Adriana González - FX & Makeup Artist' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://adriglez.com/' },
        { rel: 'alternate', hreflang: 'es-ES', href: 'https://adriglez.com/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://adriglez.com/' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
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
    canonical: '/',
    geo: {
      latitude: 43.3924086,
      longitude: -5.659249,
      region: 'Asturias',
      country: 'España',
    },
    twitter: '@adriglez',
  },

  sitemap: {
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
