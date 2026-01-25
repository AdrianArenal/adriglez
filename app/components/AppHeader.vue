<template>
  <UContainer class="py-4">
    <div class="flex items-center justify-between">
      <!-- Left: Home button -->
      <UButton icon="i-lucide-home" color="gray" variant="ghost" to="/" aria-label="Inicio" />

      <!-- Center: Navigation Switch -->
      <nav>
        <div class="relative inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
          <!-- Indicador animado (solo visible cuando estás en una sección) -->
          <div
            v-if="isInSection"
            class="absolute top-1 bottom-1 bg-primary rounded-md transition-all duration-300 ease-in-out"
            :style="{
              left: route.path === '/maquillaje-fx' ? '0.25rem' : '50%',
              right: route.path === '/makeup' ? '0.25rem' : '50%',
              width: 'calc(50% - 0.5rem)',
            }"
          />

          <!-- Botones del switch -->
          <button
            class="relative z-10 px-4 py-2 text-sm font-bold transition-colors duration-200 rounded-md min-w-[80px] font-['Homemade_Apple']"
            :class="
              route.path === '/maquillaje-fx'
                ? 'text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            "
            @click="navigateTo('/maquillaje-fx')"
          >
            FX
          </button>
          <button
            class="relative z-10 px-4 py-2 text-sm font-bold transition-colors duration-200 rounded-md min-w-[80px] font-['Homemade_Apple']"
            :class="
              route.path === '/makeup'
                ? 'text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            "
            @click="navigateTo('/makeup')"
          >
            Makeup
          </button>
        </div>
      </nav>

      <!-- Right: Instagram button -->
      <UButton
        icon="i-simple-icons-instagram"
        color="gray"
        variant="ghost"
        to="https://www.instagram.com/adriglezfx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        aria-label="Instagram"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute()

// Determinar si estamos en alguna de las secciones (para mostrar el switch)
const isInSection = computed(() => {
  return route.path === '/maquillaje-fx' || route.path === '/makeup'
})
</script>
