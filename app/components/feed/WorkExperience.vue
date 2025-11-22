<template>
    <div>
        <h3 class="text-lg font-semibold mb-4">Experiencia</h3>
        <UUser v-for="(item, index) in global.workExperience" :key="index" class="mb-8" :name="item.title"
            :description="item.subtitle" :avatar="{ src: item.image }" :ui="{ avatar: 'bg-white' }" size="3xl" />
    </div>
</template>
<script setup>
const { global } = useAppConfig()
</script>