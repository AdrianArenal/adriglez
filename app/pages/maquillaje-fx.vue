<template>
  <UPage>
    <UMarquee
      v-motion
      pause-on-hover
      class="py-2 mb-24 [--duration:30s]"
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
    >
      <NuxtPicture
        v-for="(img, index) in global.hero.images"
        :key="index"
        width="234"
        height="351"
        :img-attrs="{ class: 'h-[351px] size-full object-cover' }"
        format="webp"
        v-bind="img"
      />
    </UMarquee>

    <Feed />
  </UPage>
</template>

<script setup lang="ts">
import Feed from '~/components/Feed.vue'

const { global } = useAppConfig()

useHead({
  title: 'Maquillaje FX - Adriana González | Maquillaje de Personajes y Efectos Especiales en Pola de Siero, Asturias',
  meta: [
    {
      name: 'description',
      content:
        'Maquillaje de caracterización y efectos especiales (FX). Servicios profesionales para medios de comunicación, teatro, televisión y eventos. Pola de Siero, Asturias.',
    },
    {
      name: 'keywords',
      content:
        'maquillaje FX, maquillaje de personajes, maquillaje de efectos especiales, FX artist, maquillaje de carácter, maquillaje de actores, maquillaje de personajes, maquillaje FX Asturias, Pola de Siero, maquillaje para cine, maquillaje para teatro, maquillaje para televisión',
    },
    { name: 'author', content: 'Adriana González' },
    { name: 'robots', content: 'index, follow, max-snippet:200, max-image-preview:large, max-video-preview:600' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
    { name: 'theme-color', content: '#0B0B0B' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Maquillaje FX - Adriana González | Maquillaje de Personajes y Efectos Especiales en Pola de Siero, Asturias' },
    { property: 'og:description', content: 'Maquillaje de caracterización y efectos especiales (FX). Servicios profesionales para medios de comunicación, teatro, televisión y eventos. Pola de Siero, Asturias.' },
    { property: 'og:url', content: 'https://adriglez.com/maquillaje-fx' },
    { property: 'og:image', content: 'https://adriglez.com/logo_fx.webp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Adriana González - FX Artist Portfolio' },
    { property: 'og:locale', content: 'es_ES' },
    { property: 'og:locale:alternate', content: 'es_ES' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Maquillaje FX - Adriana González | Maquillaje de Personajes y Efectos Especiales en Pola de Siero, Asturias' },
    { name: 'twitter:description', content: 'Maquillaje de caracterización y efectos especiales (FX). Servicios profesionales para medios de comunicación, teatro, televisión y eventos. Pola de Siero, Asturias.' },
    { name: 'twitter:image', content: 'https://adriglez.com/logo_fx.webp' },
    { name: 'twitter:creator', content: '@adriglez' },
    { name: 'twitter:site', content: '@adriglez' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
})

// JSON-LD structured data: Service schema
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Maquillaje de Caracterización / FX',
  description:
    'Maquillaje de personajes y efectos especiales (FX) para medios de comunicación, teatro, televisión y eventos. Creación de looks realistas y estilizados.',
  provider: {
    '@type': 'Organization',
    name: 'Adriana González',
    description: 'Maquillaje de caracterización /FX y makeup artist profesional.',
    url: 'https://adriglez.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pola de Siero',
      addressLocality: 'Siero',
      addressRegion: 'Asturias',
      addressCountry: 'ES',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  areaServedWith: {
    '@type': 'AdministrativeArea',
    name: 'Asturias',
    addressRegion: 'Asturias',
    addressCountry: 'ES',
  },
  offers: {
    '@type': 'Offer',
    priceRange: '$$$',
    itemOffered: [
      {
        '@type': 'Service',
        name: 'Maquillaje de Personajes',
        description:
          'Maquillaje de personajes para medios de comunicación, teatro, televisión y eventos. Ideas de looks, creación artística y ejecución profesional.',
      },
      {
        '@type': 'Service',
        name: 'Maquillaje FX / Efectos Especiales',
        description:
          'Maquillaje FX para personajes realistas o estilizados. Efectos especiales de piel, sangre, quemaduras, envejecimiento y más.',
      },
      {
        '@type': 'Service',
        name: 'Maquillaje de Caracteres',
        description:
          'Maquillaje de personajes para funciones,代表劇, eventos temáticos y colaboraciones creativas. Diseño y ejecución de looks únicos.',
      },
    ],
  },
}

const registry = useHead()
const existing = registry.meta.some(m => m.name === '__STRUCTURED_DATA')
if (!existing) {
  registry.meta.push({
    name: '__STRUCTURED_DATA',
    domProps: {
      _html: `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`,
    },
  })
}
</script>
