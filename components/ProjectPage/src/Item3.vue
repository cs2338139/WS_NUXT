<script setup></script>

<template>
  <div class="flex justify-between my-10 sm:my-5 sm:flex-col">
    <div class="text-xl font-bold w-4/20 sm:w-full">
      <slot name="name" />
    </div>
    <div class="text-justify w-17/20 sm:w-full"><slot name="info" /></div>
  </div>
</template>

<style scoped></style>
