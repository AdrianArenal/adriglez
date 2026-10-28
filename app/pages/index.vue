<template>
  <UPage>
    <UContainer class="pt-4 pb-16">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <img
              src="/images/adri.webp"
              alt="Adriana González - FX Artist Portfolio"
              class="w-full h-auto rounded-lg shadow-lg object-cover grayscale"
            >
          </div>
          <div class="prose prose-lg dark:prose-invert max-w-none order-1 md:order-2">
            <p class="mb-4">
              Desde siempre, el arte ha sido el eje central de mi formación y mi desarrollo
              creativo. A lo largo de los años he explorado distintas disciplinas artísticas como el
              dibujo, la escultura y el modelado, lo que me ha permitido comprender el valor del
              detalle, la forma y la expresión.
            </p>
            <p class="mb-4">
              El maquillaje se convirtió en una extensión natural de este recorrido artístico. Tanto
              en el ámbito creativo como en el maquillaje de invitadas para eventos, concibo cada
              trabajo como una forma de realzar la belleza individual, adaptando cada look a la
              persona, la ocasión y su estilo.
            </p>
            <p class="mb-4">
              Me caracterizo por la constante búsqueda de aprendizaje y perfeccionamiento técnico,
              combinando creatividad, precisión y sensibilidad artística en cada proyecto.
            </p>
          </div>
        </div>
        <nav
          aria-label="Explorar mi trabajo"
          class="mt-12 flex flex-col items-center gap-5 border-t border-gray-200 pt-8 text-center"
        >
          <p class="text-lg text-gray-600">Si quieres saber más de mi trabajo</p>
          <div class="flex flex-nowrap items-center justify-center gap-6">
            <NuxtLink
              to="/maquillaje-fx"
              class="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              <UIcon name="i-lucide-arrow-left" class="size-4" aria-hidden="true" />
              FX
            </NuxtLink>
            <NuxtLink
              to="/makeup"
              class="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              Makeup
              <UIcon name="i-lucide-arrow-right" class="size-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </nav>
      </div>
    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
// SEO meta tags are configured in nuxt.config.ts

import { useSchemaOrg } from '#imports'

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
    name: 'Maquillaje Profesional',
    description: 'Servicios de maquillaje profesional para novias, invitadas, eventos y personalización de looks. Maquillaje de caracterización /FX para personajes.',
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
      priceRange: '$$',
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Maquillaje Profesional para Novias',
          description: 'Maquillaje profesional el día del enlace: primera prueba, diagnóstico de piel, diseño de look, facechart y preparación previa. Servicio personalizado para la novia.',
        },
        {
          '@type': 'Service',
          name: 'Maquillaje Profesional para Invitadas',
          description: 'Maquillaje profesional de larga duración para eventos. Preparación de la piel y asesoramiento personalizado según el estilo y características del evento.',
        },
        {
          '@type': 'Service',
          name: 'Maquillaje de Caracterización / FX',
          description: 'Maquillaje de personajes y efectos especiales para medios de comunicación, teatro, televisión y eventos. Creación de looks realistas y estilizados.',
        },
      ],
    },
  },
])
</script>
