<template>
    <button class="border border-neutral-900 rounded-full px-3 py-1" :class="isSelected ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-900 hover:text-white'">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

const props = defineProps<{
    isSelected?: boolean
}>()

</script>