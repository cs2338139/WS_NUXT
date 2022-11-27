<script setup>
defineProps({
  href: String,
});
</script>
<script>
export default {
  data() {
    return {
      hrefLink: "",
    };
  },
};
</script>
<template>
  <NuxtLink :to="hrefLink">
    <li class="px-4 py-2 font-bold text-center text-black bg-gray-300 border border-black">
      <slot> </slot>
    </li>
  </NuxtLink>
</template>

<style scoped>

</style>
