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
              Desde siempre, el arte ha sido el eje central de mi formación y mi desarrollo
              creativo. A lo largo de los años he explorado distintas disciplinas artísticas como el
              dibujo, la escultura y el modelado, lo que me ha permitido comprender el valor del
              detalle, la forma y la expresión.
            </p>
            <p class="mb-4">
              El maquillaje se convirtió en una extensión natural de este recorrido artístico. Tanto
              en el ámbito creativo como en el maquillaje de invitadas para eventos, concibo cada
              trabajo como una forma de realzar la belleza individual, adaptando cada look a la
              persona, la ocasión y su estilo.
            </p>
            <p class="mb-4">
              Me caracterizo por la constante búsqueda de aprendizaje y perfeccionamiento técnico,
              combinando creatividad, precisión y sensibilidad artística en cada proyecto.
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
