<template>
  <div>
    <AppHeader />
    <Hero />
    <UContainer class="pt-4">
      <slot />
    </UContainer>
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import AppHeader from '~/components/AppHeader.vue'
import ScrollToTop from '~/components/ScrollToTop.vue'
</script>
