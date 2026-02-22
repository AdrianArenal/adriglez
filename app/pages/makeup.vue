<template>
  <UPage>
    <UPageGrid v-motion class="gap-0.5 grid-cols-2 sm:grid-cols-3 grid-auto-rows-[100px]" :initial="{
      opacity: 0,
      y: 20,
    }" :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 500,
        },
      }">
      <UModal v-for="(img, index) in maquillajeImages" :key="index" fullscreen :style="{ gridRow: `span ${img.rowSpan}` }">
        <UButton color="neutral" variant="subtle" class="size-full" :ui="{ base: 'p-0' }">
          <NuxtPicture
            :img-attrs="{ class: 'size-full object-cover' }"
            format="webp"
            :src="img.src"
            :alt="`Maquillaje ${index + 1}`"
            class="w-full h-full"
            loading="lazy"
          />
        </UButton>
        <template #body>
          <NuxtPicture
            :src="img.src"
            format="webp"
            :img-attrs="{ class: 'size-full object-contain' }"
            :alt="`Maquillaje ${index + 1}`"
            class="w-full h-full"
            loading="lazy"
          />
        </template>
      </UModal>
    </UPageGrid>

    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <div v-motion :initial="{
          opacity: 0,
          y: 20,
        }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: 700,
            },
          }" class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Formación y Experiencia</h2>
          <p class="text-lg text-gray-600">
            Certificada por profesionales del sector
          </p>
        </div>

        <div v-motion :initial="{
          opacity: 0,
          y: 20,
        }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: 900,
            },
          }" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="flex justify-center">
            <NuxtLink href="https://lorenacarbajal.es/" target="_blank" rel="noopener noreferrer">
              <NuxtPicture src="/images/maquillaje/lorenacarbajal.webp" format="webp"
                :img-attrs="{ class: 'w-full max-w-sm h-auto object-contain hover:opacity-80 transition-opacity cursor-pointer' }"
                alt="Lorena Carbajal - Logo" />
            </NuxtLink>
          </div>

          <div class="flex justify-center">
            <NuxtPicture src="/images/maquillaje/lorenacarbajal2.webp" format="webp"
              :img-attrs="{ class: 'w-full max-w-sm h-auto rounded-lg shadow-lg object-cover' }"
              alt="Certificación de formación" />
          </div>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const maquillajeImages = [
  { src: '/images/maquillaje/1.webp', rowSpan: 3 },
  { src: '/images/maquillaje/10.webp', rowSpan: 2 },
  { src: '/images/maquillaje/2.webp', rowSpan: 3 },
  { src: '/images/maquillaje/3.webp', rowSpan: 2 },
  { src: '/images/maquillaje/11.webp', rowSpan: 1 },
  { src: '/images/maquillaje/7.webp', rowSpan: 2 },
  { src: '/images/maquillaje/5.webp', rowSpan: 3 },
  { src: '/images/maquillaje/8.webp', rowSpan: 1 },
  { src: '/images/maquillaje/6.webp', rowSpan: 3 },
  { src: '/images/maquillaje/4.webp', rowSpan: 3 },
  { src: '/images/maquillaje/9.webp', rowSpan: 1 },


]

useHead({
  title: 'Makeup - Adriana González',
  meta: [
    {
      name: 'description',
      content: 'Servicios profesionales de maquillaje para bodas, eventos y sesiones fotográficas.',
    },
  ],
})

// Cambiar a modo light al entrar en esta página
onMounted(() => {
  colorMode.preference = 'light'
})

// Restaurar a modo dark al salir de esta página
onUnmounted(() => {
  colorMode.preference = 'dark'
})
</script>
