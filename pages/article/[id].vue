<template>
    <base-layout>
        <div>
            <ContentRenderer class="prose" v-if="post" :value="post" />
        </div>
    </base-layout>
</template>

<script setup lang="ts">
// import type { Post } from '~/models/Post';

const route = useRoute()

// const { data: post } = await useAsyncData(() => queryCollection('content').path('/Articles').first())

const { data: post } = await useAsyncData(() => queryCollection('articles').first())


// const { findOne } = useStrapi()

// const { data: post } = await findOne<Post[]>('posts', route.params.id.toString());

</script>