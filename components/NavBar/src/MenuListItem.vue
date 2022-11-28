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
  <li class="mx-0 my-2">
    <NuxtLink :to="href" class="">
      <div class="px-4 font-bold text-black">
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
