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
  <div class="flex justify-center">
    <div class="flex w-52 justify-between">
      <button class="font-bold text-lg p-1">1</button>
      <button class="font-bold text-lg p-1">2</button>
      <button class="font-bold text-lg p-1">3</button>
      <button class="border border-black px-1">
        <div class="flex justify-end items-center">
          <div class="text-lg font-bold tracking-wider mr-2"><slot name="ButtonName" /></div>
          <div class="w-8 rotate-45" ref="aspectTarget">
            <img class="" src="~/public/Image/UI/Arrow2.svg" alt="" />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
