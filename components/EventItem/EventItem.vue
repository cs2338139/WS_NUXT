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
      <div class="absolute z-10 p-1 text-lg text-center border border-black parallel right-14 -top-4 bg-custom-0" v-if="index < 2">NEW!</div>
      <div class="flex w-full h-32 border border-black rounded-3xl">
        <div class="w-2/5 h-full overflow-hidden bg-gray-300 rounded-l-3xl">
          <div class="flex items-center h-full">
            <img :src="img" alt="" class="" />
          </div>
        </div>

        <div class="flex items-center justify-center w-3/5 h-full border-l border-black">
          <div class="flex flex-col w-4/5">
            <div class="text-xl">
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
  width: 70px;
  height: 38px;
  /* background: #6a6; */
  transform: skew(0, -15deg);
}
</style>
