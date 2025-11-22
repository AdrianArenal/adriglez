<script setup lang="ts">

const { global } = useAppConfig()

</script>
<template>
    <UPageGrid class="gap-0.5 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 ">
        <UPageCard v-for="(card, index) in global.imagesGrid" :key="index" v-bind="card" :ui="{container: card.image && 'p-0! gap-y-0 gap-x-0', wrapper: 'absolute w-full', leading: 'ml-auto p-1 sm:p-4',  }">
            <template v-if="card.image" #default>
                    <NuxtPicture :src="card.image" format="webp"
                    :img-attrs="{ class: 'size-full object-cover' }"
                    :alt="`Image ${index + 1}`" class="w-full h-full " loading="lazy" />
            </template>
        </UPageCard>
    </UPageGrid>
</template>