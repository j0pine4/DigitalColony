<template>
    <NuxtLink :to="post.path" class="flex flex-col mb-8 relative hover-active">
        <img class="h-[150px] w-full mb-4 relative grayscale hover:grayscale-0 transition-all duration-200 object-cover"
            :src="post.image" alt="">
        <div class="flex flex-col">
            <!-- <p>{{ post }}</p> -->
            <p class="text-xs text-neutral-700"> ({{ post.date }}) </p>
            <h1 class="text-lg font-bold mb-4"> {{ post.title }} </h1>
            <!-- <p class="text-sm"> {{ post.subtitle }} </p> -->
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';
import { Animations } from '~/utils/animations';

const { formatDate } = useUtils();

const props = defineProps<{
    post: ArticlesCollectionItem 
}>()

onMounted(() => {
    const animations = new Animations();
})

</script>