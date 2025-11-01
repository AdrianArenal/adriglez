<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
      <UPageGrid>
        <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" spotlight>
          <template v-if="card.image" #default>
            <div class="aspect-3/4 overflow-hidden rounded-lg">
              <NuxtPicture :src="card.image" format="webp" sizes="(max-width: 640px) 100vw, 300px"
                :alt="`Image ${index + 1}`" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </div>
    <UCarousel class="w-full" v-slot="{ item }" loop dots auto-scroll  :items="studies"  auto-height :ui="{ item: 'basis-2/3' }">
        <UPageCard class="h-[250px] m-2" :title="item.title" :description="item.subtitle">
          <div class="flex">
          <NuxtPicture :src="item.image" sizes="(max-width: 640px) 100vw, 100px" format="webp" :alt="item.title" loading="lazy" />
          </div>
        </UPageCard>
      </UCarousel>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: 'Adriana González - FX Artist Portfolio',
  meta: [{ name: 'description', content: 'Portfolio page for Adriana González, FX artist.' }],
})

const cards = ref([
  { icon: 'i-lucide-camera', image: '/images/1.avif' },
  { icon: 'i-lucide-camera', image: '/images/2.avif' },
  { icon: 'i-lucide-camera', image: '/images/3.avif' },
  { icon: 'i-lucide-user', title: 'Sobre mí', class: 'lg:col-span-2' },
  { icon: 'i-lucide-camera', image: '/images/4.avif' },
  { icon: 'i-lucide-camera', image: '/images/5.avif' },
  { icon: 'i-lucide-camera', image: '/images/6.avif' },
  { icon: 'i-lucide-camera', image: '/images/7.avif' },
  { icon: 'i-lucide-camera', image: '/images/8.avif' },
  { icon: 'i-lucide-wand-sparkles', title: 'Técnicas de Modelado', description: 'Mis habilidades en la técnica de modelado son avanzadas, lo que me permite crear prótesis y personajes que destacan por su realismo y originalidad. Utilizo una variedad de herramientas de modelado, que me permiten trabajar con precisión en cada detalle.' },
  { icon: 'i-lucide-camera', image: '/images/9.avif' },
  { icon: 'i-lucide-camera', image: '/images/10.avif' },
  { icon: 'i-lucide-camera', image: '/images/11.avif' },
  { icon: 'i-lucide-camera', image: '/images/12.avif' },
  { icon: 'i-lucide-boxes', title: 'Materiales', description: 'Mis habilidades en el manejo de materiales para la creación de personajes y prótesis incluyen el uso de diversos materiales, como siliconas, resinas, yeso, arcilla, látex y gelatina. Estas son fundamentales para obtener resultados realistas y duraderos. Además, es crucial considerar la comodidad del actor al seleccionar los materiales adecuados.', },
  { icon: 'i-lucide-camera', image: '/images/13.avif' },
  { icon: 'i-lucide-camera', image: '/images/14.avif' },
  { icon: 'i-lucide-camera', image: '/images/15.avif' },
  { icon: 'i-lucide-camera', image: '/images/16.avif' },
  { icon: 'i-lucide-camera', image: '/images/17.avif' },
  { icon: 'i-lucide-camera', image: '/images/18.avif' },
  { icon: 'i-lucide-camera', image: '/images/19.avif' },
  { icon: 'i-lucide-paintbrush', title: 'Pintura y Acabado ', description: 'Mis habilidades en el acabado de prótesis son fundamentales para lograr un aspecto más realista. Utilizo pinceles finos para agregar detalles que simulan texturas y sombras. Además, es crucial llevar a cabo pruebas de compatibilidad entre los materiales y las pinturas para garantizar un resultado óptimo.' },
  { icon: 'i-lucide-camera', image: '/images/20.avif' },
  { icon: 'i-lucide-camera', image: '/images/21.avif' },
  { icon: 'i-lucide-camera', image: '/images/22.avif' },
  { icon: 'i-lucide-camera', image: '/images/23.avif' },
  { icon: 'i-lucide-camera', image: '/images/24.avif' },
  { icon: 'i-lucide-camera', image: '/images/25.avif' },
  { icon: 'i-lucide-camera', image: '/images/26.avif' },
  { icon: 'i-lucide-camera', image: '/images/27.avif' },
  { icon: 'i-lucide-camera', image: '/images/28.avif' },
  { icon: 'i-lucide-camera', image: '/images/29.avif' },
  { icon: 'i-lucide-camera', image: '/images/30.avif' },
  { icon: 'i-lucide-camera', image: '/images/31.avif' },
  { icon: 'i-lucide-camera', image: '/images/32.avif' },
  { icon: 'i-lucide-camera', image: '/images/33.avif' },
  { icon: 'i-lucide-camera', image: '/images/34.avif' },
  { icon: 'i-lucide-camera', image: '/images/35.avif' },
  { icon: 'i-lucide-camera', image: '/images/36.avif' },
  { icon: 'i-lucide-camera', image: '/images/37.avif' },
  { icon: 'i-lucide-camera', image: '/images/38.avif' }
])

const studies = ref([{
  title: 'Bachiller de Artes',
  subtitle: 'IES La Laboral (Gijón)',
  image: '/images/laboral.avif'
},
{
  title: 'Curso de maquillaje y caracterización FX',
  subtitle: 'Escuela KOHL (Madrid)',
  image: '/images/escuela-kohl.webp'
}, {
  title: 'Grado superior en escultura dedicada al espectáculo',
  subtitle: 'Escuela de Artes (Oviedo)',
  image: '/images/escuela-arte.avif'
}
])
</script>
