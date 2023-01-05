<script setup>
const props = defineProps({
  img: String,
});

const enabled = ref(true);
if (props.img === undefined) {
  enabled.value = false;
}

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
  <div class="">
    <div class="relative w-40 mx-5 mt-10 mb-4 lg:mx-0">
      <button @click="$emit('function')" class="w-full" v-if="enabled">
        <div>
          <div class="flex items-center justify-center h-full overflow-hidden bg-gray-300 border rounded-3xl" ref="aspectTarget"><img :v-if="img != ''" :src="img" /></div>
        </div>
        <div class="mt-2 text-center">
          <div class="text-xl font-bold line-clamp-1">
            <slot name="name" />
          </div>
          <div class="text-xl">
            <slot name="owner" />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
