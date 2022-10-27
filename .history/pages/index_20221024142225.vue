<script setup>
useHead({
    title: "首頁 | 數位遊戲開發暨藏品3D掃描、建模計畫 | 國立臺灣文學館",
})
</script>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        ToNotFound() {
            this.$router.push({
                name: "NotFound",
                params: { pathMatch: this.$route.path.substring(1).split("/") },
                query: this.$route.query,
                hash: this.$route.hash,
            });
        },
    },
    created() {
    },
    mounted() {
    },
    unmounted() {
    },
};
</script>

<template>
    <div>
        <div class="wrap">
            <div class="mb-24 px-20 lg:mb-14 md:px-0">
            </div>

            <div class="flex flex-row h-300px md:h-480px md:flex-col px-20 md:px-10" ref="target">
            </div>
        </div>
    </div>

    <div class="absolute w-full bottom-0 -z-50">
        <div class="bg-bg-1-image h-8"></div>
        <div class="bg-bg-1-Color h-96" ref="bg"></div>
    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {}
</style>