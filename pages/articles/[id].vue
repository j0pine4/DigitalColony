<template>
    <base-layout v-if="post?.image" :image="post.image" :title="post!.title" :tags="post!.tags">
        <div>
            <ContentRenderer class="prose" v-if="post" :value="post" />
        </div>
    </base-layout>
</template>

<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.path}`, () => queryCollection('articles').path(route.path).first())

</script>