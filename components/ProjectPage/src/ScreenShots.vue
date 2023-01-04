<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
defineProps({
  url: String,
});
</script>

<template>
  <PartItemNull>
    <template #title>
      <slot name="title" />
    </template>
    <div v-if="url != ''" class="mb-14 h-0 w-full relative pb-[56.25%]">
      <iframe :src="url" class="absolute top-0 left-0 w-full h-full" allowfullscreen> </iframe>
    </div>
    <slot />
  </PartItemNull>
</template>
