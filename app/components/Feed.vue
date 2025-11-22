<script setup lang="ts">
import AboutMe from './feed/AboutMe.vue'
import Materials from './feed/Materials.vue'
import ModelingTechniques from './feed/ModelingTechniques.vue'
import PaintingAndFinishing from './feed/PaintingAndFinishing.vue'
import WorkExperience from './feed/WorkExperience.vue'

const { global } = useAppConfig()

const getComponentById = (id: string) => {
  switch (id) {
    case 'about-me':
      return AboutMe
    case 'materials':
      return Materials
    case 'modeling-techniques':
      return ModelingTechniques
    case 'painting-and-finishing':
      return PaintingAndFinishing
    case 'work-experience':
      return WorkExperience
    default:
      return null
  }
}

</script>
<template>
    <UPageGrid class="gap-0.5 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 ">
        <UPageCard class="rounded-none"v-for="(card, index) in global.feed" :key="index" v-bind="card" :ui="{container: card.image && 'p-0! gap-y-0 gap-x-0', wrapper: 'absolute right-0', leading: 'p-2 sm:p-4', leadingIcon:'text-white' }">
            <template v-if="card.id" #default>
                    <component :is="getComponentById(card.id)" v-if="getComponentById(card.id)" />
            </template>
            <template v-if="card.image" #default>
                    <NuxtPicture :src="card.image" format="webp"
                    :img-attrs="{ class: 'size-full object-cover' }"
                    :alt="`Image ${index + 1}`" class="w-full h-full " loading="lazy" />
            </template>
        </UPageCard>
    </UPageGrid>
</template>