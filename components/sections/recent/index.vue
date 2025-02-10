<template>
    <section class="px-4 lg:px-24">

        <div class="grid grid-cols-12 mb-12">
            <h1 class="col-span-4 text-6xl font-bold"> Recent Stories </h1>
            <p class="col-span-6"> By pulling from a variety of reputable sources and presenting diverse perspectives, we empower you to form your own educated opinions. With key terms, background information, and open-ended questions, we go beyond the headlines to help you understand the full story. </p>
        </div>

        <div class="flex w-full">
            <!-- <sections-recent-image-column v-for="(article, index) in data" :article="article" :index="index + 1"></sections-recent-image-column> -->
        </div>
        
    </section>
    
</template>

<script lang="ts" setup>

import { useQuery } from "@tanstack/vue-query"

// const { getArticleList } = useArticle();

// const {data, error} = useQuery({
//     queryKey: ['article-list-recents'],
//     queryFn: () => getArticleList({
//         limit: 5
//     }),
// })

</script>