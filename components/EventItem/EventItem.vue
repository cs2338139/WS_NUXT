<script setup>
defineProps({
  index: Number,
  href: String,
  img: String,
});
</script>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <NuxtLink :to="localePath(href)">
    <div class="relative">
      <div class="absolute p-1 text-lg text-center border border-black parallel right-14 -top-4 bg-custom-0 sm:right-0 sm:-top-5" v-if="index < 2">NEW!</div>
      <div class="flex justify-start w-full h-32 bg-white border border-black rounded-3xl sm:rounded-full sm:h-24 sm:p-2">
        <div class="w-2/5 overflow-hidden bg-gray-300 rounded-l-3xl sm:rounded-full sm:h-full sm:w-auto sm:aspect-square">
          <div class="flex items-center justify-center h-full w-full">
            <img :src="img" alt="" class="object-cover" />
          </div>
        </div>

        <div class="flex items-center justify-center w-3/5 h-full border-l border-black sm:border-0 sm:w-auto sm:px-2 sm:ml-1">
          <div class="flex flex-col w-4/5 sm:w-full sm:px-2">
            <div class="text-xl sm:text-lg sm:font-bold">
              <slot name="name" />
            </div>
            <div class="">
              <div class="inline text-sm md:block">
                <slot name="place" />
              </div>

              <div class="inline text-sm md:hidden">/</div>

              <div class="inline text-sm md:block">
                <slot name="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.parallel {
  transform: skew(0, -15deg);
  @apply w-16 h-9 sm:w-14;
}
</style>
