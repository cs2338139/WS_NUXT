<script setup>
defineProps({
  href: String,
});

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
  <span>
    <NuxtLink :to="localePath(href)">
      <div class="inline-flex items-center">
        <div class="text-lg font-bold tracking-wide border-b border-black mr-2 sm:text-base"><slot /></div>
        <div class="w-8 bg-custom-0 rounded-full sm:w-8" ref="aspectTarget">
          <img class="" src="~/public/Image/UI/Arrow2.svg" alt="" />
        </div>
      </div>
    </NuxtLink>
  </span>
</template>
