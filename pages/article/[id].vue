<template>
    <base-layout>
        <div>
            <!-- <MDC class="prose" :value="post.content" tag="article" /> -->
        </div>
    </base-layout>
</template>

<script setup lang="ts">
import type { Post } from '~/models/Post';

const route = useRoute()
// const { findOne } = useStrapi()

// const { data: post } = await findOne<Post[]>('posts', route.params.id.toString());

</script>