<script setup lang="ts">

const { global } = useAppConfig()

</script>
<template>
  <UPageHero :ui="{
    headline: 'flex items-center justify-center',
    title: 'max-w-none! font-normal text-shadow-md max-w-lg mx-auto font-[WindSong]',
    links: 'mt-4 flex-col justify-center items-center'
  }">
    <template #headline>
      <div v-motion :initial="{
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
        <div v-motion :initial="{
          rotateY: 0
        }" :enter="{
          rotateY: [0, 180, 360],
          transition: {
            duration: 3000,
            repeat: Infinity,
            ease: 'linear'
          }
        }" class="relative size-40 transform-3d">
          <NuxtPicture class="absolute inset-0 overflow-hidden size-40 ring ring-default ring-offset-3 ring-offset-white rounded-full [backface-visibility:hidden]"
            :img-attrs="{ class: 'size-full object-cover object-[center_35%]' }"
            :src="global.picture?.src!" :alt="global.picture?.alt!" />
          <NuxtPicture class="absolute inset-0 overflow-hidden size-40 ring ring-default ring-offset-3 ring-offset-white rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
            :img-attrs="{ class: 'size-full object-cover' }"
            src="/logo_2048.webp" alt="Logo" />
        </div>
      </div>
    </template>

    <template #title>
      <span v-motion :initial="{
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
      <span class="font-['Homemade_Apple']" v-motion :initial="{
        scale: 1.05,
        opacity: 0,
        y: 20
      }" :visibleOnce="{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 300
        }
      }">
        {{ global.description }}
      </span>
    </template>

    <template #links>
      <div v-motion :initial="{
        opacity: 0,
        y: 20
      }" :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay: 400
        }
      }">
        <ULink target="_blank"
          to="https://www.instagram.com/adriglezfx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <UIcon name="i-lucide-instagram" class="size-16 mt-2"></UIcon>
        </ULink>
      </div>
    </template>

    <UMarquee pause-on-hover class="py-2 [--duration:30s]" v-motion :initial="{
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
  </UPageHero>
</template>