<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue"
defineProps({
    url: String,
})

</script>

<template>
    <PartItemNull>
        <template #title>
            <slot name="title" />
        </template>
        <iframe :src="url" class="aspect-video mb-14 relative w-full" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <slot />
    </PartItemNull>
</template>