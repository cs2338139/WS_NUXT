<script setup>

defineProps({
    url: String,
})

</script>

<template>
    <div class="mb-14">
        <div class="text-xl mb-3">
            <slot name="title" />
        </div>
        <iframe :src="url" class="aspect-video mb-14 relative w-full"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <slot />
    </div>
</template>