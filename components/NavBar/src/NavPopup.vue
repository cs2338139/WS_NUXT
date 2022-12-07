<script setup>

</script>

<template>
  <div class="bg-custom-0 fixed bottom-0 left-0 z-30 w-full h-screen">
    <div class="absolute right-0">
      <button @click="$emit('close')" class="top-5 aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black rounded-full">X</button>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <div class="dev-black w-3/5 h-4/5 flex justify-between">
        <div class="bg-gray-300 h-72 w-96 border-2 border-black"></div>
        <div class=" h-142 w-120 border self-end">
            <button @click="$emit('function')" class="px-4 py-3 text-2xl font-bold text-center bg-white border-2 border-black">
            {{ $t("nav.lang") }}
        </button>
        </div>
      </div>
    </div>
  </div>
</template>
