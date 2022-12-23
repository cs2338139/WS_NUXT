<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue"
</script>

<template>
    <PartItemNull>
        <template #title>
            <slot name="title" />
        </template>
        <div class="mb-4">
            <div class="mb-1 font-bold">
                <slot name="name" />
            </div>
            <div class="text-justify">
                <slot name="word" />
            </div>
        </div>

        <div>
            <div class="mb-1 font-bold">
                <slot name="name2" />
            </div>
            <div class="text-justify">
                <slot name="word2" />
            </div>
        </div>
    </PartItemNull>
</template>

<style scoped>

</style>