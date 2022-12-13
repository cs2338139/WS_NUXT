<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  width: String,
  href: String,
});
</script>

<template>
  <NuxtLink :to="localePath(href)" class="inline-block align-middle">
    <img :src="img" :style="width" />
  </NuxtLink>
</template>

<style></style>
