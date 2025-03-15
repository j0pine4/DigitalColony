<template>
    
    <base-cursor></base-cursor>
    <base-navbar :tight="true"></base-navbar>


    <div class="relative flex bg-neutral-100">
        <!-- <article-sidebar></article-sidebar> -->

        <main class="w-full">

            <div>
                <img :src="image" class="h-[350px] w-full object-cover mb-12" alt="">

                <div class="w-full max-w-7xl mx-auto px-24">
                    <h1 class="text-3xl font-bold mb-4"> {{ title }} </h1>
                </div>

                <!-- Filter Buttons -->
                <div class="w-full max-w-7xl mx-auto px-4 lg:px-24 flex gap-4 place-content-start mb-24 ">
                    <base-filter-button v-for="tag in tags"> {{ tag }} </base-filter-button>
                </div>
            </div>


            <!-- <base-navbar></base-navbar> -->
            <div class="flex flex-col lg:flex-row gap-24 items-start max-w-7xl mx-auto px-24">

                <!-- Content -->
                <slot></slot>

                <aside class="flex-col gap-20 min-w-[300px] max-w-[300px]">
                    <h2 class="text-3xl font-bold mb-2"> Recent </h2>
                    <base-card v-for="post in posts" :key="post.id" :post="post"></base-card>
                </aside>

            </div>
        </main>
    </div>

    <base-footer></base-footer>
</template>

<script setup lang="ts">

const { formatDate } = useUtils();

const { data: posts } = await useAsyncData('articles-recent', () => queryCollection('articles').order('date', 'DESC').limit(5).all())

const route = useRoute();

const props = defineProps<{
    image: string,
    title: string,
    tags: string[]
}>();

// refetchArticle();

</script>