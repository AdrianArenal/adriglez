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
import { useSchemaOrg } from '#imports'

definePageMeta({
  title: 'Maquillaje FX - Adriana González | Maquillaje de Personajes y Efectos Especiales en Pola de Siero, Asturias',
  description: 'Maquillaje de caracterización y efectos especiales (FX). Servicios profesionales para medios de comunicación, teatro, televisión y eventos. Pola de Siero, Asturias. Maquillaje norte España.',
  keywords: 'maquillaje FX, maquillaje de personajes, maquillaje de efectos especiales, FX artist, maquillaje de carácter, maquillaje de actores, maquillaje de personajes, maquillaje FX Asturias, Pola de Siero, maquillaje para cine, maquillaje para teatro, maquillaje para televisión, maquillaje norte España',
  ogTitle: 'Maquillaje FX - Adriana González | Maquillaje de Personajes y Efectos Especiales en Pola de Siero, Asturias',
  ogDescription: 'Maquillaje de caracterización y efectos especiales (FX). Servicios profesionales para medios de comunicación, teatro, televisión y eventos. Pola de Siero, Asturias, España. Maquillaje norte España.',
  ogImage: 'https://adriglez.com/logo_fx.webp',
  canonical: 'https://adriglez.com/maquillaje-fx',
})

useSchemaOrg([
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Person'],
    '@id': 'https://adriglez.com/#organization',
    name: 'Adriana González',
    alternateName: 'Adriana González',
    description: 'Artista en maquillaje de caracterización y FX. Servicios en Pola de Siero, Asturias.',
    url: 'https://adriglez.com',
    image: {
      '@type': 'ImageObject',
      url: 'https://adriglez.com/images/adri.webp',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pola de Siero',
      addressLocality: 'Siero',
      addressRegion: 'Asturias',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34 727 708 459',
      contactType: 'customer service',
      areaServed: 'ES',
      availableMode: 'phone',
    },
    sameAs: ['https://www.instagram.com/adriglezbeauty/'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Maquillaje de Caracterización / FX',
    description: 'Maquillaje de personajes y efectos especiales (FX) para medios de comunicación, teatro, televisión y eventos. Creación de looks realistas y estilizados.',
    provider: { '@id': 'https://adriglez.com/#organization' },
    areaServed: { '@type': 'Country', name: 'España' },
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
          description: 'Maquillaje de personajes para medios de comunicación, teatro, televisión y eventos. Ideas de looks, creación artística y ejecución profesional.',
        },
        {
          '@type': 'Service',
          name: 'Maquillaje FX / Efectos Especiales',
          description: 'Maquillaje FX para personajes realistas o estilizados. Efectos especiales de piel, sangre, quemaduras, envejecimiento y más.',
        },
        {
          '@type': 'Service',
          name: 'Maquillaje de Caracteres',
          description: 'Maquillaje de personajes para funciones, espectáculos, eventos temáticos y colaboraciones creativas. Diseño y ejecución de looks únicos.',
        },
      ],
    },
  },
])

const { global } = useAppConfig()

// SEO meta tags are configured in nuxt.config.ts
// JSON-LD structured data is added via nuxt.config.ts seo config
</script>
