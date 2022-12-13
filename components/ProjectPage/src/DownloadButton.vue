<script setup>
defineProps({
    href: String
})

</script>

<template>
    <div class="relative mr-16">
        <!-- <div>
            <div class="absolute top-0 right-0 border-2 border-b-black border-l-black border-t-white border-r-white w-3 h-3">
                <div class="triangle2"></div>
            </div>
            <div class="border-2 border-pink-300 w-3 h-3 absolute right-0 top-0 origin-bottom-left rotate-45"></div>
        </div> -->
        <NuxtLink :to="localePath(href)" target="_blank" class="text-lg border-2  border-black py-1 px-6 ">
            <slot />
        </NuxtLink>
    </div>
</template>

<style scoped>
/* .triangle2 {
    border-color: transparent transparent #6395CE #6395CE;
    border-style: solid solid solid solid;

    border-width: 4px 4px 4px 4px
} */
</style>
