<script setup>
defineProps({
    color: String,
    href: String,
    img:String
});

</script>

<template>
    <NuxtLink :to="href">
        <div class="relative h-430px w-80 border border-black rounded-3xl">
            <div>
                <div class="absolute parallel right-6 -z-10 -top-8 border border-black bg-custom-0 "
                    v-if="color === 'yellow'"></div>
                <div class="absolute parallel right-6 -z-10 -top-8 border border-black bg-custom-1"
                    v-if="color === 'red'">
                </div>
                <div class="absolute parallel right-6 -z-10 -top-8 border border-black bg-custom-2"
                    v-if="color === 'blue'">
                </div>
            </div>
            <div class="h-3/4 w-full rounded-t-3xl ">
                <img :src="img" class="h-full ">
            </div>
            <div class="h-1/4 border-t border-black">
                <div class=" h-full flex-col justify-between flex p-3.5">
                    <div class="text-xl">
                        <slot name="name"></slot>
                    </div>
                    <div class="text-sm">
                        <slot name="info"></slot>
                    </div>
                    <div class="text-sm text-right">
                        <slot name="year"></slot>
                    </div>
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
