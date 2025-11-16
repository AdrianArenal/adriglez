<script setup lang="ts">

const { global } = useAppConfig()

</script>
<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'max-w-none! font-normal text-shadow-md max-w-lg mx-auto font-[WindSong]',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <div
        v-motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          y: 20
        }"
        :visibleOnce="{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 100
          }
        }"
      >
        <NuxtPicture
          class="flex overflow-hidden size-24 ring ring-default ring-offset-3 ring-offset-bg rounded-full"
          :src="global.picture?.src!"
          :alt="global.picture?.alt!"
        />
      </div>
    </template>

    <template #title>
      <span
        v-motion
        :initial="{
          scale: 1.05,
          opacity: 0,
          y: 20
        }"
        :visibleOnce="{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 200
          }
        }"
      >
        {{ global.title }}
      </span>
    </template>

    <template #description>
      <span
        v-motion
        :initial="{
          scale: 1.05,
          opacity: 0,
          y: 20
        }"
        :visibleOnce="{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 300
          }
        }"
      >
        {{ global.description }}
      </span>
    </template>

    <template #links>
      <div
        v-motion
        :initial="{
          opacity: 0,
          y: 20
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 400
          }
        }"
      >
      </div>
    </template>

    <UMarquee
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
    >
      <div
        v-for="(img, index) in global.hero.images"
        :key="index"
        v-motion
        :initial="{
          scale: 0.8,
          opacity: 0,
          y: 30
        }"
        :visibleOnce="{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: index * 100
          }
        }"
      >
        <NuxtImg
          width="234"
          height="234"
          class="rounded-lg aspect-square object-cover"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </div>
    </UMarquee>
  </UPageHero>
</template>