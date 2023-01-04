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
  <div>
    <button @click="$emit('function')">
      <div class="flex justify-center items-center">
        <div class="text-xl font-bold tracking-wider border-b border-black mr-2 sm:text-base"><slot /></div>
        <div class="w-12 bg-custom-0 rounded-full sm:w-8" ref="aspectTarget">
          <!-- <ion-icon class="text-5xl flex justify-center items-center -rotate-45" name="arrow-forward-outline"></ion-icon> -->
          <img class="" src="~/public/Image/UI/Arrow2.svg" alt="" />
        </div>
      </div>
    </button>
  </div>
</template>
