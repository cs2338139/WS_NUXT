<script setup>
defineProps({
    color: String,
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
        <div class="relative h-430px w-80 border border-black rounded-3xl">
            <div class="absolute parallel right-6 -z-10 -top-8 border border-black" :style="color"></div>
            <div class="h-3/4 w-full rounded-t-3xl bg-gray-300"></div>
            <div class="h-1/4 border-t border-black">
                <div class=" h-full flex-col justify-between flex p-3.5">
                    <div class="text-xl">{{ name }}</div>
                    <div class="text-sm">{{ info }}</div>
                    <div class="text-sm text-right">{{ year }}</div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

.h-430px {
    height: 430px;
}

.parallel {
    width: 40px;
    height: 60px;
    transform: skew(0, -20deg);
}
</style>
