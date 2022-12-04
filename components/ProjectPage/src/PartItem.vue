<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue"
</script>

<template>
    <PartItemNull>
        <template #title>
            <slot name="title" />
        </template>
        <div class="mb-1 font-bold">
            <slot name="name" />
        </div>
        <div class="">
            <slot name="word" />
        </div>
    </PartItemNull>
</template>

<style scoped>

</style>