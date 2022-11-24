<script setup>
defineProps({
  href: String,
  menuListOffset: String,
});
</script>

<template>
  <li class="group text-center">
    <NuxtLink :to="href">
      <div class="px-4 py-2 font-bold bg-gray-300 border border-black">
        <slot name="menuName"> </slot>
      </div>
    </NuxtLink>
    <div class="min-w-32 group-hover:block hover:block absolute hidden h-40 p-0 mx-0 text-center"
      :class="menuListOffset">
      <ul class="hover:block border p-0 mx-0 mt-5 text-center bg-gray-300 border-black">
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
