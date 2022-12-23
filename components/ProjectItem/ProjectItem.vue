<script setup>
defineProps({
  color: String,
  href: String,
  img: String,
});
</script>

<template>
  <div class="h-120 w-80 dev-pink">
    <NuxtLink :to="localePath(href)" v-if="img" class="h-full w-full">
      <div class="relative border border-black rounded-3xl h-full w-full">
        <div>
          <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-0" v-if="color === 'yellow'"></div>
          <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-1" v-if="color === 'red'"></div>
          <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-2" v-if="color === 'blue'"></div>
        </div>
        <div class="w-full overflow-hidden bg-gray-300 h-80 rounded-t-3xl">
          <div class="flex items-center h-full">
            <img :src="img" alt="" class="h-full" />
          </div>
        </div>
        <div class="border-t border-black h-40">
          <div class="h-full flex-col flex justify-around p-3.5 dev-pink">
            <div class="text-xl ">
              <slot name="name"></slot>
            </div>
            <div class="text-sm -mt-6">
              <slot name="info"></slot>
            </div>
            <div class="text-sm text-right bottom-0 ">
              <slot name="year"></slot>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.h-430px {
  height: 430px;
}

.parallel {
  width: 40px;
  height: 60px;
  transform: skew(0, -20deg);
}
</style>
