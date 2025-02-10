<template>
    <h1 class="text-3xl font-bold mb-2"> Short Summary </h1>
    <p> {{ shortSummary?.content }} </p>

    <hr class="my-8">

</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

const articleID = inject<string>('articleID');
const { getShortSummaryForArticle } = useArticle();

const {data: shortSummary, isLoading, isRefetching, refetch: refetchContent} = useQuery({
        queryKey: ['short-summary', articleID!],
        queryFn: () => {
            return getShortSummaryForArticle(articleID!)
        },
    })

</script>