<script setup>
defineProps({
    href: String,
    name: String,
    info: String,
    word: String,
    year: String,
});
</script>

<template>
    <NuxtLink :to="href" class="pb-16">
        <div class="flex w-full h-64 border border-black">
            <div class="w-2/5 h-full bg-gray-300"></div>

            <div class="flex items-center justify-center w-3/5 h-full border-l border-black">
                <div class="flex flex-col w-4/5">

                    <div class="text-2xl">{{ name }}</div>
                    <div class="text-xl">{{ info }}</div>
                    <br>
                    <div class="text-xl">{{ word }}</div>

                    <div class="text-right">
                        <span class="text-xl">{{ year }}</span>
                    </div>

                </div>
            </div>

        </div>
    </NuxtLink>
</template>

<style scoped>

</style>
