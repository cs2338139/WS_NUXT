<script setup>
const aspectTarget = ref();

onMounted(() => {
  FirstSetAspectValue();
  window.addEventListener("resize", ReSetAspectValue);
});

function FirstSetAspectValue() {
  let CheckAspect = setInterval(() => {
    if (aspectTarget.value) {
      if (aspectTarget.value.offsetWidth > 10) {
        ReSetAspectValue();
        clearInterval(CheckAspect);
      }
    }
  }, 0);
}

function ReSetAspectValue() {
  if (aspectTarget.value && aspectTarget.value.offsetWidth > 10) aspectTarget.value.style.height = aspectTarget.value.offsetWidth + "px";
}
</script>

<template>
  <div class="mb-14 flex justify-between items-start">
    <div class="bg-custom-0 rounded-full w-8 m-1 mr-3" ref="aspectTarget"></div>
    <div class="w-400">
      <div class="font-bold text-2xl mb-3">
        <slot name="title" />
      </div>
      <slot />
    </div>
  </div>
</template>
