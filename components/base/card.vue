<template>
    <NuxtLink :to="{ name: 'article-id', params: { id: post.documentId } }"
        class="flex flex-col mb-8 relative hover-active">
        <!-- <img class="h-[150px] w-full mb-4 relative grayscale hover:grayscale-0 transition-all duration-200 object-cover"
            :src="useStrapiMedia(post.header_image.formats.medium.url)" alt=""> -->
        <div class="flex flex-col">
            <p class="text-xs text-neutral-700"> ({{ formatDate(post.created_date) }}) </p>
            <h1 class="text-lg font-bold mb-4"> {{ post.title }} </h1>
            <!-- <p class="text-sm"> {{ post.subtitle }} </p> -->
            <p> {{ post }} </p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/models/Post';
import { Animations } from '~/utils/animations';

const { formatDate } = useUtils();

const props = defineProps<{
    post: Post
}>()

onMounted(() => {
    const animations = new Animations();
})

</script>