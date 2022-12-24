<script setup>
const props = defineProps({
  img: String,
  isWriter: {
    Boolean,
    default: false,
  },
});

const enabled = ref(true);
if (props.img === undefined) {
  enabled.value = false;
}
</script>

<template>
  <div class="">
    <div class="relative w-40 mx-5 mt-10 mb-4" :class="{ 'lg:mx-0': isWriter }">
      <button @click="$emit('open')" class="w-full" v-if="enabled">
        <div>
          <div class="flex items-center justify-center h-full overflow-hidden bg-gray-300 border rounded-full aspect-square"><img :v-if="img != ''" :src="img" class="h-full" /></div>
        </div>
        <div class="mt-2 text-center">
          <div class="mb-3 text-xl font-bold">
            <slot name="name" />
          </div>
          <div><slot name="year" /></div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
