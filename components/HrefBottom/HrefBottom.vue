<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <span>
    <NuxtLink :to="localePath(href)">
      <div class="inline-flex items-center">
        <div class="text-xl font-bold tracking-wider border-b border-black mr-2 sm:text-base"><slot /></div>
        <div class="aspect-square w-12 bg-custom-0 rounded-full sm:w-8">
          <img class="" src="~/public/Image/UI/Arrow2.svg" alt="">
        </div>
      </div>
    </NuxtLink>
  </span>
</template>
