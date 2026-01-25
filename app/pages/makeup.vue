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
  </UPage>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const maquillajeImages = [
  '/images/maquillaje/1.avif',
  '/images/maquillaje/2.avif',
  '/images/maquillaje/3.avif',
  '/images/maquillaje/4.avif',
  '/images/maquillaje/5.avif',
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
