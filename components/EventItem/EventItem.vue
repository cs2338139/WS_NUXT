<script setup>
defineProps({
    isNew: Boolean,
    href: String,
    img: String
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
        <div class="relative">
            <div class="parallel right-14 -top-4 bg-custom-0 absolute z-10 p-1 text-lg text-center border border-black"
                v-if="isNew">
                NEW!</div>
            <div class="rounded-3xl flex w-full h-32 border border-black">

                <div class="rounded-l-3xl w-2/5 h-full bg-gray-300"></div>

                <div class="flex items-center justify-center w-3/5 h-full border-l border-black">
                    <div class="flex flex-col w-4/5">

                        <div class="text-xl">
                            <slot name="name" />
                        </div>
                        <div class="">
                            <span class="text-sm">
                                <slot name="place" />
                            </span> /
                            <span class="text-sm">
                                <slot name='year' />
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.parallel {
    width: 70px;
    height: 38px;
    /* background: #6a6; */
    transform: skew(0, -15deg);
}
</style>
