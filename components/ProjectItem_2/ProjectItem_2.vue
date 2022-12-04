<script setup>
defineProps({
    href: String,
    img: String,

    name: String,
    info: String,
    year: String,
    word: String,
});
</script>

<template>
    <div class="px-16 pb-16">
        <NuxtLink :to="href" class="rounded-3xl h-80 flex w-full p-4 border border-black">
            <div class="rounded-3xl w-1/3 h-full bg-gray-300"></div>

            <div class="flex items-start justify-center w-2/3 h-full px-16 py-10">
                <div class="flex flex-col">

                    <div class="mb-2 text-2xl font-bold tracking-widest"><slot name='name' /></div>

                    <div class="flex justify-between text-lg">
                        <span><slot name='info' /></span>
                        <span><slot name='year' /></span>
                    </div>

                    <div class="mt-1 mb-4 border-b-2 border-black"></div>

                    <div class="text-xl"><slot name='word' /></div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>
