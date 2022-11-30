<script setup>
defineProps({
    img: String,
})

</script>

<template>
    <div class="flex justify-between">
        <img :v-if="img != ''" :src="img" />
        <div :v-if="img === ''" class="aspect-square  h-40 bg-gray-300 rounded-full border-2 border-black"> </div>
        <div class="mb-14 w-4/5">
            <div class="mb-3 text-xl">
                <slot name="title" />
            </div>
            <div class="mb-1">
                <slot name="name" /> (
                <slot name="year" />)
            </div>
            <div class="">
                <slot name="word" />
            </div>
        </div>
    </div>
</template>