<script setup>
defineProps({
});
</script>

<template>
  <div class="top-0 w-full">
    <div class="relative flex items-center justify-between wrap-8 h-32 mx-auto my-0 px-5">
      <slot name="logo"></slot>
      <ul class="inline-flex justify-between max-w-2xl align-middle">
        <slot> </slot>
      </ul>
    </div>
  </div>
</template>

<style>

</style>
