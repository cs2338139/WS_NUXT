<script setup>
defineProps({
  enabled: {
    type: Boolean,
    default: true,
  },
  img: String,
});
</script>

<template>
  <div class="mt-10 mb-4 w-40 relative">
    <button @click="$emit('open')" class="w-full" v-if="enabled">
      <div>
        <img :v-if="img != ''" :src="img" />
        <div :v-if="img === ''" class="aspect-square w-full bg-gray-300 border-2 border-black rounded-full"></div>
      </div>
      <div class="text-center mt-2">
        <div class="mb-3 text-xl font-bold">
          <slot name="name" />
        </div>
        <div><slot name="year" /> </div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.parallel {
  width: 40px;
  height: 60px;
  transform: skew(0, -20deg);
}
</style>
