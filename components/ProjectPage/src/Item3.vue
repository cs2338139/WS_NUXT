<script setup></script>

<template>
  <div class="flex my-10 justify-between">
    <div class="text-xl font-bold w-4/20 text">
      <slot name="name" />
    </div >
    <div class="w-15/20 text-justify"><slot name="info" /></div>
  </div>
</template>

<style scoped>

</style>
