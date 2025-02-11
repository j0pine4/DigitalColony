<template>

    <base-navbar :tight="true"></base-navbar>

    <div class="relative flex bg-neutral-100">
        <!-- <article-sidebar></article-sidebar> -->

        <main class="w-full">

            <!-- Primary Section Loaded State -->
            <div>
                <img src="https://digitalcolony3d.wordpress.com/wp-content/uploads/2019/10/grassnuke_v004.png?w=1024"
                    class="h-[350px] w-full object-cover mb-12" alt="">
                <!-- <img :src="article?.image_url" class="h-[350px] w-full object-cover mb-12" alt=""> -->

                <div class="w-full max-w-7xl mx-auto px-24">
                    <!-- <h1 class="text-3xl font-bold mb-4"> {{ article?.title }} </h1> -->
                </div>

                <!-- Filter Buttons -->
                <div class="w-full max-w-7xl mx-auto px-4 lg:px-24 flex gap-4 place-content-start mb-24 ">
                    <!-- <base-filter-button v-for="category in categories"> {{ category.name }} </base-filter-button> -->
                </div>
            </div>


            <!-- <base-navbar></base-navbar> -->
            <div class="flex flex-col lg:flex-row gap-24 items-start max-w-7xl mx-auto px-24">

                <!-- Content -->
                <slot></slot>

                <aside class="flex-col gap-20 min-w-[300px] max-w-[300px]">
                    <h2 class="text-3xl font-bold mb-2"> Recent </h2>
                    <!-- <base-card v-for="article in recentArticles" :key="article.id" :article="article"></base-card> -->
                </aside>

            </div>
        </main>
    </div>

    <base-footer></base-footer>
</template>

<script setup lang="ts">

import { useQuery } from "@tanstack/vue-query";

const { formatDate } = useUtils();

const route = useRoute();

// refetchArticle();

</script>