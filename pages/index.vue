<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
      <UCard>
        <template #header>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
            Adriana González
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mt-2">
            FX Artist
          </p>
        </template>

        <div class="space-y-4">
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Welcome to my portfolio page
          </p>

          <UButton
            size="lg"
            color="primary"
            variant="solid"
          >
            View Portfolio
          </UButton>
        </div>

        <template #footer>
          <div class="flex justify-center gap-4">
            <UButton
              icon="i-heroicons-envelope"
              color="neutral"
              variant="ghost"
              label="Contact"
            />
            <UButton
              icon="i-heroicons-link"
              color="neutral"
              variant="ghost"
              label="LinkedIn"
            />
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: 'Adriana González - FX Artist Portfolio',
  meta: [{ name: 'description', content: 'Portfolio page for Adriana González, FX artist.' }],
})
</script>
