<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import FunctionButton from "~~/components/ProjectPage/src/FunctionButton.vue";

defineProps({
  img: String,
});
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
  if (aspectTarget.value && aspectTarget.value.offsetHeight > 10) aspectTarget.value.style.width = aspectTarget.value.offsetHeight + "px";
}
</script>

<template>
  <PartItemNull class="">
    <template #title>
      <slot name="title" />
    </template>
    <div class="flex justify-between mt-5 h-52 w-full">
      <div class="">
        <div class="flex items-center h-full overflow-hidden bg-gray-300 border-2 border-black rounded-full mr-10 sm:h-3/5 sm:mr-5" ref="aspectTarget">
          <img :v-if="img != ''" :src="img" />
        </div>
      </div>

      <div class="max-w-4xl h-full">
        <div class="mt-5">
          <div class="mb-1 text-xl font-bold"><slot name="name" /> ( <slot name="year" />)</div>
          <div class="text-justify line-clamp-6">
            <slot name="word" />
          </div>
        </div>
      </div>
    </div>

    <div class="text-right">
      <FunctionButton @function="$emit('function')">
        <slot name="bottom" />
      </FunctionButton>
    </div>
  </PartItemNull>
</template>
