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
  <div>
    <button @click="$emit('function')">
      <div class="flex items-center justify-center">
        <div class="mr-2 text-xl font-bold tracking-wider border-b border-black sm:text-base"><slot /></div>
        <div class="flex items-center justify-center w-12 text-4xl rounded-full bg-custom-0 sm:w-8 sm:text-2xl" ref="aspectTarget">
          <slot name="icon" />
        </div>
      </div>
    </button>
  </div>
</template>
