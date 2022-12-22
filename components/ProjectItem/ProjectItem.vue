<script setup>
defineProps({
  color: String,
  href: String,
  img: String,
});
</script>

<template>
  <NuxtLink :to="localePath(href)">
    <div class="relative mt-10 border border-black h-430px w-80 rounded-3xl" >
      <div>
        <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-0" v-if="color === 'yellow'"></div>
        <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-1" v-if="color === 'red'"></div>
        <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-2" v-if="color === 'blue'"></div>
      </div>
      <div class="w-full overflow-hidden bg-gray-300 h-3/4 rounded-t-3xl"  v-show="img">
        <div class="flex items-center h-full">
          <img :src="img" alt="" class="h-full" />
        </div>
      </div>
      <div class="border-t border-black h-1/4">
        <div class="h-full flex-col justify-between flex p-3.5">
          <div class="text-xl">
            <slot name="name"></slot>
          </div>
          <div class="text-sm">
            <slot name="info"></slot>
          </div>
          <div class="text-sm text-right">
            <slot name="year"></slot>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
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
