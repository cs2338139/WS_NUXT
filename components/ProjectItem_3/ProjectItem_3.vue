<script setup>
defineProps({
  index: Number,
  href: String,
  img: String,
});
</script>

<template>
  <div class="relative px-40 mb-12 2xl:px-10">
    <div class="absolute p-1 text-lg text-center border border-black parallel right-52 -top-4 bg-custom-0 2xl:right-28" v-if="index < 2">NEW!</div>

    <NuxtLink :to="localePath(href)" class="flex w-full p-4 border border-black rounded-3xl h-52">
      <div class="w-1/4 h-full overflow-hidden bg-gray-300 rounded-3xl">
        <div class="flex items-center justify-center h-full">
          <img :src="img" alt="" class="" />
        </div>
      </div>

      <div class="flex justify-center w-3/4 h-full px-8 py-10">
        <div class="flex flex-col w-full font-bold">
          <div class="mb-2 text-2xl tracking-widest"><slot name="name" /></div>
          <div class="mt-1 mb-4 border-b border-black"></div>
          <div><slot name="date" />／<slot name="place" /></div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.parallel {
  width: 70px;
  height: 38px;
  /* background: #6a6; */
  transform: skew(0, -15deg);
}
</style>
