<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

const { global } = useAppConfig()
const route = useRoute()

// Descripción dinámica según la ruta
const description = computed(() => {
  switch (route.path) {
    case '/maquillaje-fx':
      return 'Maquillaje de caracterización / FX'
    case '/makeup':
      return 'Makeup artist'
    default:
      return 'Maquillaje de caracterización / FX & Makeup artist'
  }
})

</script>
<template>
  <UPageHero
:ui="{
    headline: 'flex items-center justify-center',
    title: 'max-w-none! font-normal text-shadow-md max-w-lg mx-auto font-[WindSong]',
    links: 'mt-4 flex-col justify-center items-center',
    base: 'pb-8 sm:pb-12'
  }">
    <template #headline>
      <div
v-motion :initial="{
        scale: 1.1,
        opacity: 0,
        y: 20
      }" :visibleOnce="{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 100
        }
      }" class="perspective-[1000px]">
        <div
v-motion :initial="{
          rotateY: 0
        }" :enter="{
          rotateY: [0, 180, 360],
          transition: {
            duration: 3000,
            repeat: Infinity,
            ease: 'linear'
          }
        }" class="relative size-40 transform-3d">
          <NuxtPicture
class="absolute inset-0 overflow-hidden size-40 ring ring-default ring-offset-3 ring-offset-white rounded-full [backface-visibility:hidden]"
            :img-attrs="{ class: 'size-full object-cover object-[center_35%]' }"
            :src="global.picture?.src!" :alt="global.picture?.alt!" />
          <NuxtPicture
class="absolute inset-0 overflow-hidden size-40 ring ring-default ring-offset-3 ring-offset-white rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
            :img-attrs="{ class: 'size-full object-cover' }"
            src="/logo_2048.webp" alt="Logo" />
        </div>
      </div>
    </template>

    <template #title>
      <span
v-motion :initial="{
        scale: 1.05,
        opacity: 0,
        y: 20
      }" :visibleOnce="{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 200
        }
      }">
        {{ global.title }}
      </span>
    </template>

    <template #description>
      <div class="relative inline-block min-h-[2em]">
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-2"
        >
          <span 
            :key="description"
            class="font-['Homemade_Apple'] inline-block"
          >
            {{ description }}
          </span>
        </Transition>
      </div>
    </template>
  </UPageHero>
</template>