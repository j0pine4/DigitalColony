<template>
    <h1 class="text-3xl font-bold mb-2"> Full Story </h1>

    <div class="prose" v-html="primaryContent?.content"></div>

    <hr class="my-8">

</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

const articleID = inject<string>('articleID');
const { getPrimaryContentForArticle } = useArticle();

const {data: primaryContent, isLoading, isRefetching, refetch: refetchContent} = useQuery({
        queryKey: ['primary-content', articleID!],
        queryFn: () => {
            return getPrimaryContentForArticle(articleID!)
        },
    })

</script>