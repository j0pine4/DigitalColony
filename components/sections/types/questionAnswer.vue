<template>
    <section v-if="questions && questions.length > 0">
        <h1 class="text-3xl font-bold mb-4"> Open Ended Questions </h1>

        <div v-if="questions" v-for="question in questions" class="mb-6">
            <p class="font-bold text-lg"> {{ question.question }} </p>
            <p class="text-neutral-500"> {{ question.answer }} </p>
        </div>

        <hr class="my-8">
    </section>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

const articleID = inject<string>('articleID');
const { getQuestionsForArticle } = useArticle();

const {data: questions, isLoading, isRefetching} = useQuery({
        queryKey: ['questions', articleID!],
        queryFn: () => {
            return getQuestionsForArticle(articleID!)
        },
    })

</script>