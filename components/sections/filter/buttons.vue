<template>
    <!-- <pre> Categories: {{ categoryList }} </pre> -->
    <UCarousel v-slot="{ item }" :items="categoryList">
        <base-filter-button @click="emits('refresh', item); activeButton = item" :isSelected="item == activeButton">{{ item }}</base-filter-button>
  </UCarousel>
</template>

<script setup lang="ts">

const emits = defineEmits(['refresh', 'all']);
const activeButton = ref('All');

// const { data: categoryList } = await find('categories');
const categoryList = ref([
    "All",
    "Breakdown/Guide",
    "Career Advice",
    "Character Art",
    "Concept Design",
    "Environment Art",
    "Houdini",
    "Sculpting",
    "Substance",
    "Technical",
    "Texturing",
    "Tools and Plugins",
    "Tutorials",
    "Tips and Tricks",
])


</script>