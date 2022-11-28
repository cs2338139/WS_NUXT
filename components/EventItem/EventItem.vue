<script setup>
defineProps({
    href: String,
    name: String,
    place: String,
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
    <NuxtLink :to="href" class="pb-8">
        <div class="flex w-full h-32 border border-black">
            <div class="w-2/5 h-full bg-gray-300"></div>

            <div class="flex items-center justify-center w-3/5 h-full border-l border-black">
                <div class="flex flex-col w-4/5">

                    <div class="text-xl">{{ name }}</div>

                    <div class="">
                        <span class="text-sm">{{ place }}</span> /
                        <span class="text-sm">{{ year }}</span>
                    </div>

                </div>
            </div>

        </div>
    </NuxtLink>
</template>

<style scoped>

</style>
