<script setup>
defineProps({
  href: String,
  menuListOffset: String,
});
</script>

<template>
  <li class="group text-center">
    <NuxtLink :to="localePath(href)">
      <div class="text-2xl px-4 py-3 text-center text-black">
        <slot name="menuName"> </slot>
      </div>
    </NuxtLink>
    <div class="group-hover:block hover:block absolute hidden h-40 p-0 mx-0 text-center"
      :class="menuListOffset">
      <ul class="hover:block p-3 mx-0 mt-5 text-center bg-custom-0 border border-black rounded-xl">
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
