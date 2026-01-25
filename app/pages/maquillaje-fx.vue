<template>
  <UPage>
    <UMarquee pause-on-hover class="py-2 mb-24 [--duration:30s]" v-motion :initial="{
      opacity: 0,
      y: 20
    }" :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 500
        }
      }">
      <NuxtPicture width="234" height="351" v-for="(img, index) in global.hero.images" :key="index"
        :img-attrs="{ class: 'h-[351px] size-full object-cover' }" format="webp" v-bind="img" />
    </UMarquee>
    
    <Feed />
  </UPage>
</template>

<script setup lang="ts">
import Feed from '~/components/Feed.vue';

const { global } = useAppConfig()

useHead({
  title: 'Maquillaje FX - Adriana González',
  meta: [{ name: 'description', content: 'Portfolio de maquillaje de caracterización y efectos especiales de Adriana González.' }],
})
</script>
