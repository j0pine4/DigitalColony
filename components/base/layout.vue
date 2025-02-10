<template>

    <base-navbar :tight="true"></base-navbar>

    <div class="relative flex bg-neutral-100">
        <!-- <article-sidebar></article-sidebar> -->

        <main class="w-full">

            <!-- Primary Section Loaded State -->
            <div v-if="!isLoading && !isRefetching">
                <img :src="article?.image_url" class="h-[350px] w-full object-cover mb-12" alt="">

                <div class="w-full max-w-7xl mx-auto px-24">
                    <p v-if="article?.created_date" class="text-xs text-neutral-700"> ({{
                        formatDate(article!.created_date) }}) </p>
                    <h1 class="text-3xl font-bold mb-4"> {{ article?.title }} </h1>
                </div>

                <!-- Filter Buttons -->
                <div class="w-full max-w-7xl mx-auto px-4 lg:px-24 flex gap-4 place-content-start mb-24 ">
                    <base-filter-button v-for="category in categories"> {{ category.name }} </base-filter-button>
                </div>
            </div>

            <div v-else>
                <div class="overflow-hidden h-[350px] mb-12">
                    <img src="https://cdn.nba.com/teams/uploads/sites/1610612765/2024/10/GettyImages-2179780926.jpg?im=Resize=(500)"
                        class="h-[350px] w-full object-cover grayscale blur-lg" alt="">
                </div>

                <div class="w-full max-w-7xl mx-auto px-24">
                    <p v-if="article?.created_date"
                        class="text-xs text-neutral-400 bg-neutral-400 animate-pulse w-fit rounded mb-2"> Loading
                        date... </p>
                    <h1 class="text-3xl font-bold mb-4 text-neutral-400 bg-neutral-400 animate-pulse w-fit rounded"> Our
                        title is loading and will be ready soon, I hope... </h1>
                </div>

                <!-- Filter Buttons -->
                <div class="w-full max-w-7xl mx-auto px-4 lg:px-24 flex gap-4 place-content-start mb-24 opacity-0">
                    <div>
                        Button
                    </div>
                </div>
            </div>

            <!-- <base-navbar></base-navbar> -->
            <div class="flex flex-col lg:flex-row gap-24 items-start max-w-7xl mx-auto px-24">

                <!-- Content -->
                <slot></slot>

                <aside class="flex-col gap-20 min-w-[300px] max-w-[300px]">
                    <h2 class="text-3xl font-bold mb-2"> Recent </h2>
                    <base-card v-for="article in recentArticles" :key="article.id" :article="article"></base-card>
                </aside>

            </div>
        </main>
    </div>

    <base-footer></base-footer>
</template>

<script setup lang="ts">

import { useQuery } from "@tanstack/vue-query";

const { getArticleDetails, getArticleList, getCategoriesForArticle } = useArticle();
const { formatDate } = useUtils();

const route = useRoute();

// Provide the article ID for other components to use
provide('articleID', route.params.id as string);

const { data: article, isLoading, isRefetching, refetch: refetchArticle } = useQuery({
    queryKey: ['article', route.params.id as string],
    queryFn: () => {
        return getArticleDetails(route.params.id as string)
    },
})

const { data: categories } = useQuery({
    queryKey: ['category-list', route.params.id as string],
    queryFn: () => getCategoriesForArticle(route.params.id as string),
})

const { data: recentArticles } = useQuery({
    queryKey: ['article-list-recents'],
    queryFn: () => getArticleList({
        limit: 5
    }),
})

// refetchArticle();

</script>