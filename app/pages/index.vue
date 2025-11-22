<template>
  <UPage>
    <Hero />
    <Feed />
  </UPage>
</template>

<script setup lang="ts">
import Feed from '~/components/Feed.vue';

useHead({
  title: 'Adriana González - FX Artist Portfolio',
  meta: [{ name: 'description', content: 'Portfolio page for Adriana González, FX artist.' }],
})

</script>
