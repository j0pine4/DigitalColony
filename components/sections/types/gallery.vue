<template>
    <section v-if="gallery && gallery.length > 0">
        <h1 class="text-3xl font-bold mb-2"> Gallery </h1>
    
        <div class="grid grid-cols-3 gap-4">
            <img v-for="(image, index) in gallery" :key="image.id" @click="() => showImg(index)" class="h-[200px] w-full object-cover rounded cursor-pointer grayscale hover:grayscale-0" :src="image.src" alt="">
        </div>
    
        <hr class="my-8">
    </section>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="gallery"
      :index="indexRef"
      @hide="onHide"
    />

</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

const articleID = inject<string>('articleID');
const { getGalleryForArticle } = useArticle();

const {data: gallery, isLoading, isRefetching, refetch: refetchContent} = useQuery({
        queryKey: ['gallery', articleID!],
        queryFn: () => {
            return getGalleryForArticle(articleID!)
        },
    })

    const visibleRef = ref(false);
    const indexRef = ref(0);

    const showImg = (index: number) => {
        indexRef.value = index;
        visibleRef.value = true;
    };

    const onHide = () => (visibleRef.value = false);

</script>