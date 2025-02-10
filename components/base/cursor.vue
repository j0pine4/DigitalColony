<template>

    <!-- <div ref="cursorEl" class="h-8 w-8 border border-black rounded-full bg-none mix-blend-difference cursor pointer-events-none fixed top-0 left-0 z-[1000]">
        <p class="opacity-0"> X </p>
    </div> -->

    <div id="cursor" class="cursor h-6 w-6 fixed p-2 top-0 left-0 rounded-full bg-white z-[1000] mix-blend-difference -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center items-center">
        <UIcon id="cursorIcon" class="text-black" name="i-heroicons-arrow-up-right"></UIcon>
    </div>

</template>

<script lang="ts" setup>

import gsap from 'gsap';

const mouseMove = (e: any) => {

    gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
    })
}

onMounted( () => {
    document.addEventListener('mousemove', (e) => mouseMove(e))
})

</script>