<script setup></script>

<template>
  <div class="flex my-10">
    <div class="text-xl font-bold w-1/5">
      <slot name="name" />
    </div >
    <div class="w-4/5"><slot name="info" /></div>
  </div>
</template>

<style scoped>

</style>
