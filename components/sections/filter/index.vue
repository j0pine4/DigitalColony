<template>

    <section class="mb-24">
        <!-- Filter Buttons -->
        <div class="px-4 lg:px-24 flex gap-4 place-content-end mb-8">
            <sections-filter-buttons @refresh="handleRefresh"></sections-filter-buttons>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 px-24">
            <!-- <base-card v-for="post in posts" :post="post"></base-card> -->
        </div>
    </section>
</template>

<script setup lang="ts">

import type { Post } from '~/models/Post';

// const { find } = useStrapi();

// const { data: posts } = await find<Post[]>('posts', {
//     populate: "header_image"
// });

onMounted(() => {
    const animations = new Animations();
})
</script>