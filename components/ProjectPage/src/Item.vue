<script setup>
defineProps({
    enabled: {
        type: Boolean,
        default: true
    },
    color: String,
    img: String,
})

</script>

<template>
    <div class="mt-10 mb-4 w-60 relative">
        <div class="w-full" v-if="enabled"></div>
        <button @click="$emit('open')" class="w-full" v-if="enabled">
            <div>
                <div class="absolute parallel right-6 -z-10 -top-6 border-2 border-black bg-custom-0"
                    v-if="color === 'yellow'">
                </div>
                <div class=" absolute parallel right-6 -z-10 -top-6 border-2 border-black bg-custom-1"
                    v-if="color === 'red'">
                </div>
                <div class="absolute parallel right-6 -z-10 -top-6 border-2 border-black bg-custom-2"
                    v-if="color === 'blue'">
                </div>
            </div>
            <div>
                <img :v-if="img != ''" :src="img" />
                <div :v-if="img === ''" class="aspect-square w-full bg-gray-300 border-2 border-black rounded-3xl">
                </div>
            </div>
            <div class="text-center mt-2">
                <div class="mb-3 text-xl">
                    <slot />
                </div>
            </div>
        </button>
    </div>
</template>

<style scoped>
.parallel {
    width: 40px;
    height: 60px;
    transform: skew(0, -20deg);
}
</style>
