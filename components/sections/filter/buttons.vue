<template>
    <!-- <pre> Categories: {{ categoryList }} </pre> -->
    <base-filter-button @click="emits('refresh', 'all'), activeButton = null"
        :isSelected="!activeButton">All</base-filter-button>
    <!-- <base-filter-button @click="emits('refresh', category.id), activeButton = category" :isSelected="category == activeButton" v-for="category in categoryList" :key="category.id">{{ category.name }}</base-filter-button> -->
</template>

<script setup lang="ts">

const emits = defineEmits(['refresh', 'all']);
const activeButton = ref(null);

// const { find } = useStrapi();
// const { data: categoryList } = await find('categories');


</script>