<template>
    <section class="max-w-5xl mx-auto">
        <article-edit v-if="mode" :mode="mode!"></article-edit>
    </section>
</template>

<script setup lang="ts">

type Mode = "edit" | "create" ;

const route = useRoute();
const router = useRouter();
const mode = ref<Mode>();

onMounted( () => {
    if(!route.query.mode){
        router.push('/')
    }

    if(route.query.mode?.toString().toLowerCase() == 'edit'){
        mode.value = 'edit';
        return
    }

    mode.value='create';
})

</script>