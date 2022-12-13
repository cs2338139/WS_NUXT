<script setup>
defineProps({
  href: String,
});
</script>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<template>
  <li class="mx-0 my-3">
    <NuxtLink :to="localePath(href)" class="">
      <div class="px-4 text-2xl text-black">
        <slot></slot>
      </div>
    </NuxtLink>
  </li>
  <li class="last:hidden">
    <hr class="mx-5 border-black" />
  </li>
</template>

<style scoped>

</style>
