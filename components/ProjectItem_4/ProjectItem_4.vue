<script setup>
defineProps({
  href: String,
  img: String,

  name: String,
  info: String,
  year: String,
  word: String,
});
</script>

<template>
  <div class="px-12 pb-8">
    <NuxtLink :to="localePath(href)" class="rounded-3xl h-52 flex w-full p-4 border border-black lg:h-32 lg:p-3">
      <div class="rounded-3xl w-1/4 h-full overflow-hidden bg-gray-300">
        <div class="flex items-center h-full">
          <img :src="img" alt="" class="scale-110" />
        </div>
      </div>

      <div class="flex items-center justify-center w-3/4 h-full px-16 py-10">
        <div class="flex flex-col w-full">
          <div class="text-2xl font-bold tracking-widest"><slot name="name" /></div>
          <div class="font-bold"><slot name="info" /></div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.size {
  aspect-ratio: 1377/570;
}
</style>
