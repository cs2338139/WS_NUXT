<script setup>
defineProps({
  isNew: Boolean,
  href: String,
  img: String,

  name: String,
  date: String,
  place: String,
});
</script>

<template>
  <div class="px-40 relative mb-12">
    <div class="parallel right-52 -top-4 bg-custom-0 absolute p-1 text-lg text-center border border-black" v-if="isNew">NEW!</div>

    <NuxtLink :to="localePath(href)" class="rounded-3xl h-52 flex w-full p-4 border border-black">
      <div class="rounded-3xl w-1/4 h-full overflow-hidden bg-gray-300">
        <div class="flex items-center h-full">
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
