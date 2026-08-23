<template>
  <div class="makeup-page">
    <!-- Hero Section - Collage Style -->

    <div class="relative min-h-screen bg-white">
      <!-- Intro Text Section - Above Grid -->
      <div class="w-full px-4 py-8 md:py-12 lg:pl-[25%]">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
          class="max-w-3xl mx-auto"
        >
          <div class="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p class="text-justify">
              En este apartado quiero hablaros de mi faceta como makeup artist, una parte muy
              importante de mí. Me he formado en maquillaje para invitadas y novias,
              especializándome en crear looks personalizados y adaptados a cada persona.
            </p>
            <p class="text-justify">
              Para mí, el maquillaje no es solo un trabajo; va mucho más allá. Mi objetivo es que
              cada clienta disfrute de un momento de tranquilidad y conexión consigo misma,
              sintiéndose realmente cómoda y especial.
            </p>
            <p class="text-justify">
              Trabajo para conseguir un maquillaje duradero, acorde con el estilo, la personalidad y
              las necesidades de cada piel. Además, ofrezco un asesoramiento personalizado durante
              la prueba, cuidando cada detalle para que el día de la boda sea verdaderamente
              inolvidable y la novia pueda disfrutar con total tranquilidad, sin tener que
              preocuparse por su maquillaje durante toda la celebración.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full px-4 py-8 md:py-12 lg:pl-[25%]">
        <!-- Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 md:gap-8 items-center">
          <!-- Left: Full Height Background Image -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 1000 } }"
            class="hidden lg:block lg:col-span-3 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/4"
          >
            <NuxtPicture
              src="/images/maquillaje/12.webp"
              format="webp"
              :img-attrs="{ class: 'w-full h-full object-cover' }"
              alt="Decorativo"
            />
          </div>

          <!-- Center: Main Content -->
          <div class="lg:col-span-6 space-y-6 md:space-y-8 order-2 md:order-0">
            <!-- Title -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
              class="text-center"
            >
              <h2
                class="text-xl md:text-2xl lg:text-3xl font-light tracking-wider mb-4 text-gray-800"
              >
                Maquillaje Profesional<br />para Novias e Invitadas.
              </h2>
            </div>

            <!-- Center Image with Black Decorative Elements -->
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 400 } }"
              class="relative my-8"
            >
              <NuxtPicture
                src="/images/maquillaje/18.webp"
                format="webp"
                :img-attrs="{ class: 'w-full max-w-md mx-auto h-auto object-cover shadow-lg' }"
                alt="Maquillaje Profesional"
              />

              <!-- Black Circle Decorations with "NEW" text -->
              <div
                class="absolute -left-4 top-1/4 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center z-10"
              >
                <svg class="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    class="text-[7.5px] fill-white font-bold tracking-widest"
                    style="letter-spacing: 0.3em"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      NEW · NEW · NEW · NEW · NEW · NEW · NEW · NEW · NEW · NEW · NEW · NEW ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <!-- Description Text -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
              class="max-w-lg mx-auto px-4"
            >
              <p class="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                Cada maquillaje se realiza de manera personalizada, cuidando cada detalle para
                garantizar un resultado elegante, duradero y adaptado a las necesidades de cada
                clienta.
              </p>
            </div>
          </div>

          <!-- Right: Logo and Profile -->
          <div class="lg:col-span-3 relative flex flex-col order-1 md:order-0">
            <!-- Black Logo Box -->
            <div
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 300 } }"
              class="bg-black p-8 md:p-12 flex items-center justify-center aspect-square w-full overflow-hidden"
            >
              <NuxtPicture
                :src="logoSrc"
                format="webp"
                :img-attrs="{ class: 'w-full h-full object-contain max-w-full max-h-full' }"
                alt="Adriana González Logo"
              />
            </div>

            <!-- Name -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }"
              class="text-center lg:text-left py-4 md:py-6 px-4 relative z-10 after:content-[''] after:translate-x-5 after:absolute after:right-0 after:top-0 after:h-full after:w-5 after:bg-black"
            >
              <h3 class="text-2xl md:text-3xl lg:text-4xl tracking-wide text-right font-normal">
                ADRIANA<br />GONZÁLEZ
              </h3>
            </div>

            <!-- Profile Image -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 700 } }"
              class="w-full overflow-hidden relative"
            >
              <NuxtPicture
                src="/images/maquillaje/14.webp"
                format="webp"
                :img-attrs="{ class: 'w-full h-auto object-cover max-w-full' }"
                alt="Adriana González"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Gallery Section -->
    <div class="py-12 md:py-20 px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-12"
      >
        <h2 class="text-3xl md:text-4xl font-light tracking-wider mb-4">Galería de Trabajos</h2>
        <p class="text-gray-600">Algunos de mis trabajos más recientes</p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <UModal v-for="(img, index) in portfolioImages" :key="index" fullscreen>
          <UButton
            color="neutral"
            variant="subtle"
            class="w-full h-full min-h-100 md:min-h-125"
            :ui="{ base: 'p-0' }"
          >
            <NuxtPicture
              :img-attrs="{
                class:
                  'size-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
              }"
              format="webp"
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full"
              loading="lazy"
            />
          </UButton>
          <template #body>
            <NuxtPicture
              :src="img.src"
              format="webp"
              :img-attrs="{ class: 'size-full object-contain' }"
              :alt="img.alt"
              class="w-full h-full"
              loading="lazy"
            />
          </template>
        </UModal>
      </div>
    </div>

    <!-- Training & Experience Section -->
    <div class="py-16 md:py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="flex flex-col text-center mb-12"
        >
          <h2 class="text-3xl md:text-4xl font-light tracking-wider mb-4">
            Formación y Experiencia
          </h2>
          <p class="text-lg text-gray-600">Certificada por profesionales del sector</p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div class="flex justify-center">
            <NuxtLink href="https://lorenacarbajal.es/" target="_blank" rel="noopener noreferrer">
              <NuxtPicture
                src="/images/maquillaje/lorenacarbajal.webp"
                format="webp"
                :img-attrs="{
                  class:
                    'w-full max-w-sm h-auto object-contain hover:opacity-80 transition-opacity cursor-pointer',
                }"
                alt="Lorena Carbajal - Logo"
              />
            </NuxtLink>
          </div>

          <div class="flex justify-center">
            <NuxtPicture
              src="/images/maquillaje/lorenacarbajal2.webp"
              format="webp"
              :img-attrs="{ class: 'w-full max-w-sm h-auto rounded-lg shadow-lg object-cover' }"
              alt="Certificación de formación"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Services Section - 3 Columns -->
    <div class="py-16 md:py-24 bg-white px-4">
      <div class="w-full">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        >
          <!-- Left Column: Servicio de Maquillaje para Novias -->
          <div class="bg-white p-8 md:p-12 flex flex-col justify-between min-h-150 order-1">
            <div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Servicio de Maquillaje para Novias
              </h2>

              <ul class="space-y-4 text-base text-gray-800">
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Maquillaje profesional el día del enlace.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Primera prueba de maquillaje.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Diagnóstico y valoración de la piel.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Asesoramiento personalizado.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Diseño de look.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Facechart.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Preparación previa para el día del evento.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Kit de retoque para el día de la boda.</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-8 border-t border-gray-200">
              <p class="text-sm md:text-base text-gray-700 leading-relaxed">
                El objetivo de la prueba es definir el estilo de maquillaje deseado. Garantizando
                armonía con el vestido, peinado.
              </p>
            </div>
          </div>

          <!-- Middle Column: Contacto (Black Background) -->
          <div
            class="bg-black text-white p-8 md:p-12 flex flex-col justify-center items-center min-h-150 order-3 md:order-2"
          >
            <div class="w-full max-w-md space-y-8">
              <div class="bg-white text-black py-4 px-8 text-center">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide">Contacto</h2>
              </div>

              <div class="space-y-6">
                <!-- Phone -->
                <a
                  href="tel:727708459"
                  class="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <svg class="w-6 h-6 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                    />
                  </svg>
                  <span class="text-base">727708459</span>
                </a>

                <!-- Email -->
                <a
                  href="mailto:adrianagonzfdez@gmail.com"
                  class="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <svg class="w-6 h-6 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    />
                  </svg>
                  <span class="text-base break-all">adrianagonzfdez@gmail.com</span>
                </a>

                <!-- Website -->
                <a
                  href="https://adriglez.com"
                  target="_blank"
                  class="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <svg class="w-6 h-6 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
                    />
                  </svg>
                  <span class="text-base">adriglez.com</span>
                </a>

                <!-- Address -->
                <div class="flex items-start gap-4">
                  <svg class="w-6 h-6 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                    />
                  </svg>
                  <span class="text-base leading-relaxed">
                    Enrique II 3, bajo 2. Mimus Estilistas. 33510 ,Pola de Siero. Asturias.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Plant Image + Servicio para Invitadas -->
          <div class="bg-gray-50 flex flex-col min-h-150 order-2 md:order-3">
            <!-- Plant Image -->
            <div class="h-1/3 overflow-hidden">
              <NuxtPicture
                src="/images/maquillaje/contact-bg.jpg"
                format="webp"
                :img-attrs="{ class: 'w-full h-full object-cover' }"
                alt="Decorativo"
              />
            </div>

            <!-- Service Info -->
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Servicio de Maquillaje para Invitadas
              </h2>

              <p class="text-sm md:text-base text-gray-700 mb-4">
                El servicio para invitadas incluye:
              </p>

              <ul class="space-y-3 text-base text-gray-800">
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Preparación y cuidado previo de la piel.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>Maquillaje profesional de larga duración.</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span
                    >Asesoramiento personalizado según el estilo y características del evento.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const route = useRoute()

const logoSrc = computed(() => {
  if (route.path === '/maquillaje-fx') return '/logo_fx.webp'
  if (route.path === '/makeup') return '/logo_makeup.webp'
  return '/logo_makeup.webp'
})

// Additional portfolio images for the gallery
const portfolioImages = [
  { src: '/images/maquillaje/19.webp', alt: 'Trabajo de maquillaje 1' },
  { src: '/images/maquillaje/20.webp', alt: 'Trabajo de maquillaje 1' },
  { src: '/images/maquillaje/21.webp', alt: 'Trabajo de maquillaje 1' },
  { src: '/images/maquillaje/1.webp', alt: 'Trabajo de maquillaje 1' },
  { src: '/images/maquillaje/2.webp', alt: 'Trabajo de maquillaje 2' },
  { src: '/images/maquillaje/4.webp', alt: 'Trabajo de maquillaje 4' },
  { src: '/images/maquillaje/5.webp', alt: 'Trabajo de maquillaje 5' },
  { src: '/images/maquillaje/6.webp', alt: 'Trabajo de maquillaje 6' },
]

useHead({
  title: 'Maquillaje Profesional - Adriana González',
  meta: [
    {
      name: 'description',
      content:
        'Servicios profesionales de maquillaje para novias e invitadas. Cada maquillaje personalizado para garantizar un resultado elegante y duradero.',
    },
  ],
})

// Cambiar a modo light al entrar en esta página
onMounted(() => {
  colorMode.preference = 'light'
})

// Restaurar a modo dark al salir de esta página
onUnmounted(() => {
  colorMode.preference = 'dark'
})
</script>
