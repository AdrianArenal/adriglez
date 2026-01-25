<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-if="showButton" class="fixed bottom-8 right-8 z-50">
      <UButton
        @click="scrollToTop"
        icon="i-lucide-arrow-up"
        color="primary"
        variant="solid"
        size="lg"
        class="shadow-lg"
        :ui="{ rounded: 'rounded-full' }"
        aria-label="Volver arriba"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

// Mostrar el botón cuando se haya hecho scroll más de 300px
const showButton = computed(() => y.value > 300)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
