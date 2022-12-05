<script setup>
defineProps({
  img: String,
  moveEnable: Boolean,
});
</script>

<template>
  <div class="bg-custom-0 fixed bottom-0 left-0 z-50 w-full h-screen">
    <div class="absolute right-0">
      <button @click="$emit('close')" class="top-5 aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black rounded-full">X</button>
    </div>

    <div class="wrap-6 flex flex-col items-center justify-center h-full">
      <div class="absolute flex items-center justify-between w-full h-full" v-if="moveEnable">
        <button @click="$emit('previous')" class="aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black">＜</button>
        <button @click="$emit('next')" class="aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black">＞</button>
      </div>

      <div>
        <div class="aspect-square h-56 overflow-hidden border rounded-full"><img :v-if="img != ''" :src="img" /></div>
      </div>
      <div class="mb-14 w-3/5 mt-8 text-justify">
        <div class="mb-2 text-xl font-bold text-center">
          <slot name="name" />
        </div>
        <div>
          <slot name="word" />
        </div>
      </div>
    </div>
  </div>
</template>
