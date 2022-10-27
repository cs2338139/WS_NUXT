<script setup>
defineProps({
  menuListOffset: String,
});
</script>

<template>
  <li class=" text-center max-h-7 group">
    <div class="px-4 py-2 bg-white rounded-full cursor-pointer Menu-span-border-bottom text-text-0-Color font-bold">
      <slot name="menuName"> </slot>
    </div>
    <div class="absolute hidden h-40 p-0 mx-0 min-w-32 text-center group-hover:block hover:block" :class="menuListOffset">
      <ul class="p-0 mx-0 mt-5 text-center bg-white border-2 rounded-4xl hover:block">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .dev-border-view {
    @apply border border-solid box-border;
  }
}

@layer utilities
{
    .min-w-32
  {
      min-width: 128px;
  }
}
</style>
