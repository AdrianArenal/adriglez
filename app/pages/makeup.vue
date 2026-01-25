<template>
  <UPage>
    <UMarquee
      v-motion
      pause-on-hover
      class="py-2 [--duration:30s]"
      :initial="{
        opacity: 0,
        y: 20,
      }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 500,
        },
      }"
    >
      <NuxtPicture
        v-for="(img, index) in maquillajeImages"
        :key="index"
        width="234"
        height="351"
        :img-attrs="{ class: 'h-[351px] size-full object-cover' }"
        format="webp"
        :src="img"
      />
    </UMarquee>

    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: 700,
            },
          }"
          class="text-center mb-12"
        >
          <h2 class="text-3xl font-bold mb-4">Formación y Experiencia</h2>
          <p class="text-lg text-gray-600">
            Certificada por profesionales del sector
          </p>
        </div>

        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: 900,
            },
          }"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div class="flex justify-center">
            <NuxtLink href="https://lorenacarbajal.es/" target="_blank" rel="noopener noreferrer">
              <NuxtPicture
                src="/images/maquillaje/lorenacarbajal.webp"
                format="webp"
                :img-attrs="{ class: 'w-full max-w-sm h-auto object-contain hover:opacity-80 transition-opacity cursor-pointer' }"
                alt="Lorena Carbajal - Logo"
              />
            </NuxtLink>
          </div>

          <div class="flex justify-center">
            <NuxtPicture
              src="/images/maquillaje/lorenacarbajal2.webp"
              format="webp"
              :img-attrs="{ class: 'w-full max-w-sm h-auto rounded-lg shadow-lg object-cover' }"
              alt="Certificación de formación"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const maquillajeImages = [
  '/images/maquillaje/1.webp',
  '/images/maquillaje/2.webp',
  '/images/maquillaje/3.webp',
  '/images/maquillaje/4.webp',
  '/images/maquillaje/5.webp',
  '/images/maquillaje/6.webp',
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
