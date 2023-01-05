<script setup>
defineProps({
  href: String,
  img: String,

  name: String,
  info: String,
  year: String,
  word: String,
});
const aspectTarget = ref();
const { currentWidth } = useGetWidthLevel();

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
      aspectTarget.value.style.width = "25%";
    }
  }
}
</script>

<template>
  <div class="px-12 pb-8 sm:px-0">
    <NuxtLink :to="localePath(href)" class="rounded-3xl h-52 flex w-full p-4 border border-black lg:h-32 lg:p-3 bg-white">
      <div class="rounded-3xl w-1/4 h-full overflow-hidden sm:w-auto bg-gray-300" ref="aspectTarget">
        <div class="flex items-center h-full">
          <img :src="img" alt="" class="scale-110 object-cover sm:scale-125" />
        </div>
      </div>

      <div class="flex items-center justify-center w-3/4 h-full px-16 py-10 sm:px-4 sm:w-3/5">
        <div class="flex flex-col w-full">
          <div class="text-2xl font-bold tracking-widest"><slot name="name" /></div>
          <div class="font-bold"><slot name="info" /></div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
