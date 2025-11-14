<template>
  <UPage>
    <Hero />
    <ImagesGrid />
    <WorkExperience />
  </UPage>
</template>

<script setup lang="ts">
import ImagesGrid from '~/components/ImagesGrid.vue';
import WorkExperience from '~/components/WorkExperience.vue';

useHead({
  title: 'Adriana González - FX Artist Portfolio',
  meta: [{ name: 'description', content: 'Portfolio page for Adriana González, FX artist.' }],
})

</script>
