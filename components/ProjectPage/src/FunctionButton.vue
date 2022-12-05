<script setup>

</script>

<template>
    <div>
        <button @click="$emit('function')" class="border-b border-black font-bold tracking-wider text-xl">
            <slot />
        </button>
    </div>
</template>