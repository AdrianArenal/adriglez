<script setup lang="ts">

const { global } = useAppConfig()

</script>
<template>
    <UCarousel class="w-full" v-slot="{ item }" loop dots auto-scroll :items="global.workExperience" auto-height>
        <UPageCard class="h-[250px] m-2 basis-2/3 shrink-0" :title="item.title" :description="item.subtitle">
            <div class="flex">
                <NuxtPicture :src="item.image" sizes="(max-width: 640px) 100vw, 100px" format="webp" :alt="item.title"
                    loading="lazy" />
            </div>
        </UPageCard>
    </UCarousel>
</template>