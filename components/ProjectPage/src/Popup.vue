<script setup>
defineProps({
    img: String,
})

</script>

<template>
    <div class="fixed bottom-0 left-0 z-50 w-full h-screen bg-gray-300">
        <div class="text-right">
            <button @click="$emit('close')" class="top-5 aspect-square w-16 text-4xl">X</button>
        </div>

        <div class="wrap-6 h-full flex flex-col items-center justify-center">
                <img :v-if="img != ''" :src="img" />
                <div :v-if="img === ''" class="aspect-square h-60 bg-gray-300 border-2 border-black rounded-full">
                </div>
                <div class="mb-14 w-4/5 mt-14">
                    <div class="mb-1">
                        <slot name="name" />
                    </div>
                    <div class="">
                        <slot name="word" />
                    </div>
                </div>
        </div>

    </div>
</template>