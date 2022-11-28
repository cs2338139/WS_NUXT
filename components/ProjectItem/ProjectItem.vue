<script setup>
defineProps({
    href: String,
    name: String,
    info: String,
    year: String,
});
</script>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>
<template>
    <NuxtLink :to="href">
        <div class="h-96 w-64 border border-black">
            <div class="h-72 w-full bg-gray-300"></div>
            <div class="h-24 border-t border-black">
                <div class=" h-full flex-col justify-between flex p-3">
                    <div class="text-xl">{{ name }}</div>
                    <div class="text-sm">{{ info }}</div>
                    <div class="text-sm text-right">{{ year }}</div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
