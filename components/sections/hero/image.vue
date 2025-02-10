<template>
    <div class="relative w-full h-full black-overlay hover-active group overflow-hidden group">
        <h1 class="absolute top-0 left-0 text-white p-4 z-10" :class="isPrimary ? 'text-4xl' : 'text-lg'"> {{ title }} </h1>
        <img class="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" :src="image" :alt="`Image for story ${title}`">
    </div>
</template>

<script setup lang="ts">

import { Animations } from '~/utils/animations';

const props = defineProps<{
    image: string,
    title: string,
    isPrimary?: boolean
}>()

onMounted( () => {
    const animations = new Animations();
})

</script>
