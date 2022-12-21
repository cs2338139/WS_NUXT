<script setup>
defineProps({
  href: String,
  menuListOffset: String,
});
</script>

<template>
  <li class="mx-1 text-center group">
    <NuxtLink :to="localePath(href)">
      <div class="px-4 py-3 text-2xl text-center text-black">
        <slot name="menuName"> </slot>
      </div>
    </NuxtLink>
    <div class="absolute hidden h-40 p-0 mx-0 text-center group-hover:block hover:block 2xl:group-hover:hidden 2xl:hover:hidden" :class="menuListOffset">
      <ul class="p-3 mx-0 mt-5 text-center border border-black bg-custom-0 rounded-xl hover:block 2xl:hover:block">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<style scoped>
.min-w-32 {
  min-width: 128px;
}
</style>
