<template>
    <div class="relative px-20">
        <div class="parallel -top-6 right-32 z-10 absolute border-2 border-black bg-custom-1"></div>
        <div class="rounded-xl px-14 py-6 mb-10 bg-white border-2 border-black">
            <div class="mb-3 text-2xl font-bold">
                <slot name="title" />
            </div>
            <div class="mb-1">
                <slot name="name" />
            </div>
            <div class="">
                <slot name="word" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.parallel {
    width: 40px;
    height: 60px;
    transform: skew(0, -20deg);
}
</style>