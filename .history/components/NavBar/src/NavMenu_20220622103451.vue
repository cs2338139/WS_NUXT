<script setup>
defineProps({
  _class: String,
});
</script>

<template>
  <div class="w-full bg-navColor top-0 absolute" :class="_class">
    <div class="relative my-0 mx-auto max-w-8xl h-32 flex justify-between items-center">
      <slot name="logo"></slot>
      <ul class="inline-flex align-middle w-22/25 justify-between z-50">
        <slot> </slot>
      </ul>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>
