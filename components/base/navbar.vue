<template>
    <nav class="px-4 lg:px-24 flex justify-between items-center py-6">
        <h1 class="font-bold text-2xl"> Digital Colony </h1>

        <ul class="flex gap-4 items-center">
            <li class="hover-active">
                <NuxtLink to="/"> Home </NuxtLink>
            </li>
            <li class="hover-active"> Recent </li>
            <li class="hover-active"> Search </li>
            <li class="bg-neutral-900 text-white px-4 py-2 rounded-full hover-active"> Subscribe </li>
        </ul>
    </nav>

    <hr v-if="!tight" class="mx-24 mb-12">
</template>

<script setup lang="ts">

import { Animations } from '~/utils/animations';

const props = defineProps<{
    tight?: boolean
}>()

onMounted(() => {
    const animations = new Animations();
    console.log(Animations.hoverElements)
})

</script>