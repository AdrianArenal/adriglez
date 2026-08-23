<template>
  <UApp>
    <UMain class="relative">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <UFooter class="mt-2">
      <template #left>
        <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </template>

      <p>Adriana González</p>

      <template #right>
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          :to="instagramUrl"
          target="_blank"
          aria-label="Instagram"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute()

const instagramUrl = computed(() => {
  return route.path === '/maquillaje-fx'
    ? 'https://www.instagram.com/adriglez.fx'
    : 'https://www.instagram.com/adriglezbeauty/'
})
</script>
