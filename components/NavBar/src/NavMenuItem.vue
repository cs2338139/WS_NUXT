<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <NuxtLink :to="href">
    <li class="text-2xl px-4 py-3 text-center text-black">
      <slot> </slot>
    </li>
  </NuxtLink>
</template>

<style scoped>

</style>
