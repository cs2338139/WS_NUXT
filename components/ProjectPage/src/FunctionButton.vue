<script setup>

</script>

<template>
    <div>
        <button @click="$emit('function')" class="border-b border-black font-bold tracking-wider">
            <slot />
        </button>
    </div>
</template>