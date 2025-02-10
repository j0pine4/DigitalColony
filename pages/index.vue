<template>
    
    <base-cursor></base-cursor>

    <base-navbar></base-navbar>
    <sections-hero></sections-hero>

    <!-- <p class="mx-24 mt-12"> {{ data }} </p> -->

    <NuxtMarquee>
        <h1 class="text-[10vw] my-24 font-bold"> See the News, Not the Noise. </h1>
    </NuxtMarquee>

    <sections-recent class="hidden 2xl:block"></sections-recent>

    <sections-filter></sections-filter>

    <base-footer></base-footer>

</template>

<script setup lang="ts">
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


onMounted( () => {
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
    })

</script>

<style>
body{
    background-color: white;
}

</style>