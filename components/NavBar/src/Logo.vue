<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  width: String,
  href: String,
});
</script>

<template>
  <RouterLink :to="href" class="inline-block align-middle">
    <img :src="img" :style="width" />
  </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
