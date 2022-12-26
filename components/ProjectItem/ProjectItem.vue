<script setup>
defineProps({
  color: String,
  href: String,
  img: String,
});

</script>

<template>
  <div>
    <div class="h-120 w-80 sm:w-full sm:h-60">
      <NuxtLink :to="localePath(href)" v-if="img" class="w-full h-full">
        <div class="relative w-full h-full border border-black rounded-3xl bg-white">
          <div>
            <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-0" v-if="color === 'yellow'"></div>
            <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-1" v-if="color === 'red'"></div>
            <div class="absolute border border-black parallel right-6 -z-10 -top-8 bg-custom-2" v-if="color === 'blue'"></div>
          </div>
          <div class="w-full overflow-hidden bg-gray-300 h-80 sm:h-3/4 rounded-t-3xl ">
            <div class="flex items-center h-full justify-center  sm:scale-125">
              <img :src="img" alt="" class="h-full object-cover" />
            </div>
          </div>
          <div class="h-40 border-t sm:h-1/4 border-black ">
            <div class="h-full flex-col flex justify-around p-3.5">
              <div class="text-xl">
                <slot name="name"></slot>
              </div>
              <div class="-mt-6 text-sm sm:mt-0 sm:-mb-5">
                <slot name="info"></slot>
              </div>
              <div class="text-sm text-right">
                <slot name="year"></slot>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
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
