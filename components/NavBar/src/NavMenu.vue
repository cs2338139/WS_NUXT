<script setup>
defineProps({
});
</script>

<template>
  <div class="top-0 w-full">
    <div class="relative flex items-center justify-between w-11/12 h-32 mx-auto my-0">
      <slot name="logo"></slot>
      <ul class="inline-flex justify-between w-2/5 align-middle">
        <slot> </slot>
      </ul>
    </div>
  </div>
</template>

<style>

</style>
