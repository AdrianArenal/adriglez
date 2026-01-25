<template>
  <UPage>
    <UContainer class="pt-4 pb-16">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <NuxtPicture 
              src="/images/22.avif" 
              format="webp" 
              :img-attrs="{ class: 'w-full h-auto rounded-lg shadow-lg object-cover' }"
              alt="Adriana González"
            />
          </div>

          <div class="prose prose-lg dark:prose-invert max-w-none order-1 md:order-2">
            <p class="mb-4">
              Desde pequeña el arte siempre ha sido una gran pasión para mí. Pintaba todos los días, aunque no sabía
              exactamente a qué quería dedicarme; lo único claro era que quería estar en el mundo del arte.
            </p>
            <p class="mb-4">
              Crear me relaja y me inspira a seguir adelante. Pasaba mucho tiempo haciendo manualidades en casa y también
              disfrutaba del dibujo. A medida que fui creciendo, descubrí diversas ramas del arte, especialmente la
              escultura.
            </p>
            <p class="mb-4">
              Modelar personajes desde cero y trabajar con moldes me fascina. Cuando conocí el ámbito de la escultura,
              también descubrí los prostéticos y las técnicas relacionadas con el cine. Ese mundo me apasiona y me
              encantaría dedicarme algún día a crear personajes ficticios.
            </p>
            <p>
              Siempre estoy ansiosa por aprender cosas nuevas y experimentar con diferentes técnicas.
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'Adriana González - FX Artist Portfolio',
  meta: [{ name: 'description', content: 'Portfolio page for Adriana González, FX artist.' }],
})
</script>
