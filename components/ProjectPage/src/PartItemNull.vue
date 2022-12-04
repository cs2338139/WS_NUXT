<template>
    <div class="mb-14 flex justify-between items-start">
        <div class=" aspect-square bg-custom-0 rounded-full w-8 m-1 mr-3"></div>
        <div class="w-400">
            <div class="font-bold text-2xl mb-3">
                <slot name="title" />
            </div>
            <slot />
        </div>
    </div>
</template>