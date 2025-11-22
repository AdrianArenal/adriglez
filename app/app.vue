<template>
  <UApp>
    <UMain class="relative">
      <NuxtLayout>
        <NuxtPage />

      </NuxtLayout>
    </UMain>
    <UFooter class="mt-2">
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <p>Adriana González</p>

      <template #right>
        <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" to="https://www.instagram.com/adriglezfx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank" aria-label="Instagram" />
      </template>
    </UFooter>
  </UApp>
</template>