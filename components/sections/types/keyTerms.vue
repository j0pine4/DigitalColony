<template>
    <section v-if="terms && terms.length > 0">
        <h1 class="text-3xl font-bold mb-4"> Key Terms </h1>
    
        <div class="grid grid-cols-2 gap-4">
            <div v-if="terms" v-for="term in terms" class="mb-6">
                <p class="font-bold text-lg"> {{ term.term }} </p>
                <p class="text-neutral-500"> {{ term.definition }} </p>
            </div>
        </div>
    
        <hr class="my-8">
    </section>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

const articleID = inject<string>('articleID');
const { getKeyTermsForArticle } = useArticle();

const {data: terms, isLoading, isRefetching} = useQuery({
        queryKey: ['key-terms', articleID!],
        queryFn: () => {
            return getKeyTermsForArticle(articleID!)
        },
    })

</script>