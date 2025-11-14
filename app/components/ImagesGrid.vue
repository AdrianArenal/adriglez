<script setup lang="ts">

const { global } = useAppConfig()

</script>
<template>
    <UPageGrid>
        <UPageCard v-for="(card, index) in global.imagesGrid" :key="index" v-bind="card" spotlight>
            <template v-if="card.image" #default>
                <div class="aspect-3/4 overflow-hidden rounded-lg">
                    <NuxtPicture :src="card.image" format="webp" sizes="(max-width: 640px) 100vw, 300px"
                        :alt="`Image ${index + 1}`" class="w-full h-full object-cover" loading="lazy" />
                </div>
            </template>
        </UPageCard>
    </UPageGrid>
</template>