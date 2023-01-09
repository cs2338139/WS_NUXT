<script setup>
defineProps({
  href: String,
  menuListOffset: String,
});
</script>

<template>
  <li class="mx-1 text-center group flex justify-center">
    <NuxtLink :to="localePath(href)">
      <div class="px-4 py-3 text-2xl font-bold text-center text-black">
        <slot name="menuName"> </slot>
      </div>
    </NuxtLink>
    <div class="absolute h-40 mt-12 hidden p-0 mx-0 group-hover:block hover:block 2xl:group-hover:hidden 2xl:hover:hidden">
      <ul class="p-3 mx-0 mt-5 border border-black bg-custom-0 rounded-xl hover:block 2xl:hover:block">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<style scoped>

</style>
