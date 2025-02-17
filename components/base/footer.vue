<template>
    <footer class="w-full bg-neutral-900 py-12">
        <h1 class="text-white mb-12 text-2xl text-center font-bold"> Digital Colony </h1>

        <ul class="flex gap-4 lg:gap-8 justify-center text-2xl text-white mb-12">
            <li> Home </li>
            <li> Recent </li>
            <li> Filter </li>
            <li> Subscribe </li>
        </ul>

        <div class="max-w-[300px] mx-auto mb-12">
            <p class="text-neutral-500"> Email Address </p>
            <hr class="bg-white mb-4">
            <div class="bg-white flex justify-center items-center py-2">
                <p class="text-neutral-900"> Subscribe </p>
            </div>
        </div>

        <NuxtMarquee>
            <h1 class="text-[10vw] mb-12 font-bold text-white"> See the Techniques, From Artists Who Know. </h1>
        </NuxtMarquee>

        <hr class="bg-white  mx-4 lg:mx-24 mb-2">

        <div class="text-white flex justify-between px-4 lg:px-24 mb-2">
            <p>C 2024 Digital Colony </p>
            <p>Privacy Policy </p>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>