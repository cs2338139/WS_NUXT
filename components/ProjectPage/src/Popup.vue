<script setup>
defineProps({
    img: String,
    moveEnable:Boolean
})

</script>

<template>
    <div class="fixed bottom-0 left-0 z-50 w-full h-screen bg-custom-0">

        <div class="absolute right-0">
            <button @click="$emit('close')"
                class="top-5 aspect-square w-12 text-4xl m-4 rounded-full bg-white border border-black font-thin">X</button>
        </div>

        <div class="wrap-6 h-full flex flex-col items-center justify-center">

            <div class="absolute flex justify-between items-center h-full w-full" v-if="moveEnable">
                <button @click="$emit('previous')"
                    class="aspect-square w-12 text-4xl m-4 bg-white border border-black font-thin">＜</button>
                <button @click="$emit('next')"
                    class="aspect-square w-12 text-4xl m-4 bg-white border border-black font-thin">＞</button>
            </div>

            <div>
                <img :v-if="img != ''" :src="img" />
                <div :v-if="img === ''" class="aspect-square h-56 bg-gray-300 rounded-full">
                </div>
            </div>
            <div class="mb-14 w-3/5 mt-8 text-justify">
                <div class="mb-2 font-bold text-xl text-center">
                    <slot name="name" />
                </div>
                <div>
                    <slot name="word" />
                </div>
            </div>
        </div>

    </div>
</template>