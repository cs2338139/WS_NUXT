<script setup>
defineProps({});
</script>

<template>
  <div class="top-0 w-full">
    <div class="relative flex items-center justify-between h-32 px-10 mx-auto my-0 wrap-8">
      <slot name="logo"></slot>

      <button class="w-16 py-4 px-3 bg-white border-2 border-black right-5 top-5 aspect-square" ref="narButton" @click="$emit('function')">
        <div class="flex flex-col justify-between w-full h-full">
          <hr class="border border-black" />
          <hr class="border border-black" />
          <hr class="border border-black" />
        </div>
      </button>
    </div>
  </div>
</template>

<style></style>
