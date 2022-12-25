<script setup>
defineProps({});
</script>

<template>
  <div class="top-0 w-full h-full">
    <div class="relative flex items-center justify-between h-full px-5 mx-auto my-0 wrap-8">
      <slot name="logo"></slot>
      <ul class="inline-flex justify-between max-w-2xl align-middle">
        <slot> </slot>
      </ul>
    </div>
  </div>
</template>

<style></style>
