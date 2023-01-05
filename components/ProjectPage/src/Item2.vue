<script setup>
const props = defineProps({
  img: String,
  isWriter: {
    Boolean,
    default: false,
  },
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
  if (aspectTarget.value && aspectTarget.value.offsetHeight > 10) {
    aspectTarget.value.style.width = aspectTarget.value.offsetHeight + "px";
  }
}
</script>

<template>
  <div class="">
    <div class="relative w-40 mx-5 mt-10 mb-4 md:mx-0" :class="{ 'lg:mx-0': isWriter }">
      <button @click="$emit('open')" class="w-full" v-if="enabled">
        <div>
          <div class="flex items-center justify-center h-full overflow-hidden bg-gray-300 border rounded-full" ref="aspectTarget">
            <img :v-if="img != ''" :src="img" />
          </div>
        </div>
        <div class="mt-2 text-center">
          <div class="mb-3 text-xl font-bold">
            <slot name="name" />
          </div>
          <div><slot name="year" /></div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
