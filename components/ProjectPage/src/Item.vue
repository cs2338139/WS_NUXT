<script setup>
defineProps({
    img: String,
})

</script>

<template>
        <button @click="$emit('open')" class="w-60">
            <img :v-if="img != ''" :src="img" />
            <div :v-if="img === ''" class="aspect-square w-full bg-gray-300 border-2 border-black"> </div>
            <div class="text-center mt-2">
                <div class="mb-3 text-xl">
                    <slot />
                </div>
            </div>
        </button>
</template>