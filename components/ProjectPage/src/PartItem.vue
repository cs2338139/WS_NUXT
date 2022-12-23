<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
</script>

<template>
  <PartItemNull>
    <template #title>
      <slot name="title" />
    </template>
    <div class="mb-1 font-bold">
      <slot name="name" />
    </div>
    <div class="text-justify">
      <slot name="word" />
    </div>
    <slot name="other" />
  </PartItemNull>
</template>

<style scoped></style>
