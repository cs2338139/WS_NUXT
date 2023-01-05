<script setup>
defineProps({
  index: Number,
  href: String,
  img: String,
});
const { currentWidth } = useGetWidthLevel();
const aspectTarget = ref();

onMounted(() => {
  FirstSetAspectValue();
  window.addEventListener("resize", ReSetAspectValue);
});

function FirstSetAspectValue() {
  let CheckAspect = setInterval(() => {
    if (aspectTarget.value) {
      if (aspectTarget.value.offsetHeight > 10) {
        ReSetAspectValue();
        clearInterval(CheckAspect);
      }
    }
  }, 0);
}

function ReSetAspectValue() {
  if (aspectTarget.value && aspectTarget.value.offsetHeight > 10) {
    if (currentWidth.value === "sm") {
      aspectTarget.value.style.width = aspectTarget.value.offsetHeight + "px";
    } else {
      aspectTarget.value.style.width = "40%";
    }
  }
}
</script>

<template>
  <NuxtLink :to="localePath(href)">
    <div class="relative">
      <div class="absolute p-1 text-lg text-center border border-black parallel right-14 -top-4 bg-custom-0 sm:right-0 sm:-top-5" v-if="index < 2">NEW!</div>
      <div class="flex justify-start w-full h-32 bg-white border border-black rounded-3xl sm:rounded-full sm:h-24 sm:p-2">
        <div class="w-2/5 overflow-hidden bg-gray-300 rounded-l-3xl sm:rounded-full sm:h-full" ref="aspectTarget">
          <div class="flex items-center justify-center h-full w-full">
            <img :src="img" alt="" class="object-cover" />
          </div>
        </div>

        <div class="flex items-center justify-center w-3/5 h-full border-l border-black sm:border-0 sm:w-auto sm:px-2 sm:ml-1">
          <div class="flex flex-col w-4/5 sm:w-full sm:px-2">
            <div class="text-xl font-bold sm:text-lg sm:font-bold">
              <slot name="name" />
            </div>
            <div class="">
              <div class="inline text-sm mr-2 md:block">
                <slot name="place" />
              </div>

              <div class="inline text-sm mr-2 md:hidden">/</div>

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
