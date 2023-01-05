<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <NuxtLink :to="localePath(href)" class="mx-1">
    <li class="text-2xl px-4 py-3 text-center text-black font-bold">
      <slot> </slot>
    </li>
  </NuxtLink>
</template>

<style scoped></style>
