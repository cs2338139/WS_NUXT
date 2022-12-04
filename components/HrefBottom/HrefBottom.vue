<script setup>
defineProps({
    href: String
})
</script>

<template>
    <div>
        <NuxtLink :to="href" class="border-b border-black font-bold tracking-wider">
            <slot></slot>
        </NuxtLink>
    </div>
</template>