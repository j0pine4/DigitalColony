<template>
    <section class="grid grid-col-6 lg:grid-cols-12 gap-4 lg:gap-8 px-4 lg:px-24">

        <div class="col-span-6 h-[60vh]">
            <!-- <sections-hero-image v-if="data" :isPrimary="true" :image="useStrapiMedia(data[0].header_image.formats.medium.url)" :title="data[0].title" ></sections-hero-image> -->
        </div>

        <div class="col-span-6 lg:h-[60vh]">

            <div class="flex flex-col justify-between h-full">

                <div class="flex gap-4 lg:gap-8 h-[30vh] mb-4">
                    <!-- <sections-hero-image v-if="data" :image="useStrapiMedia(data[0].header_image.formats.medium.url)" :title="data[0].title"></sections-hero-image> -->
                    <!-- <sections-hero-image v-if="data" :image="useStrapiMedia(data[0].header_image.formats.medium.url)" :title="data[0].title"></sections-hero-image> -->
                </div>

                <p class="font-bold text-2xl lg:text-[2.5vw] py-2 h-full mb-4 leading-[2.5vw]"> See the News, without
                    all the <span class="underline italic">extra noise.</span> </p>

                <div class="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 justify-between lg:items-center">
                    <base-button class="w-44 py-4">Read More</base-button>
                    <p class=""> Explore news that’s straightforward, insightful, and focused on the facts. </p>
                </div>

            </div>

        </div>

    </section>
</template>

<script setup lang="ts">


</script>

<style>
div {
    font-family: Poppins, sans-serif;
}
</style>