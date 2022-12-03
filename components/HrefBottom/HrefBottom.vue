<script setup>
defineProps({
    href: String
})
</script>

<template>
    <div>
        <NuxtLink :to="href" class="border-b border-black ">
            <slot></slot>
        </NuxtLink>
    </div>
</template>