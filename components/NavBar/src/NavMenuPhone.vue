<script setup>
const aspectTarget = ref();
onMounted(() => {
  FirstSetAspectValue();
  window.addEventListener("resize", ReSetAspectValue);
});

function FirstSetAspectValue() {
  let CheckAspect = setInterval(() => {
    if (aspectTarget.value) {
      if (aspectTarget.value.offsetWidth != 0) {
        ReSetAspectValue();
        clearInterval(CheckAspect);
      }
    }
  }, 0);
}

function ReSetAspectValue() {
  if (aspectTarget.value) aspectTarget.value.style.height = aspectTarget.value.offsetWidth + "px";
}
</script>

<template>
  <div class="top-0 w-full h-full">
    <div class="relative flex items-center h-full justify-between px-10 mx-auto my-0 wrap-8 ">
      <slot name="logo"></slot>

      <button class="w-16 py-4 px-3 bg-white border-2 border-black right-5 top-5 sm:w-12" ref="aspectTarget" @click="$emit('function')">
        <div class="flex flex-col justify-between w-full h-full">
          <hr class="border border-black" />
          <hr class="border border-black" />
          <hr class="border border-black" />
        </div>
      </button>
    </div>
  </div>
</template>

<style></style>
