<script setup>
const props = defineProps({
  color: String,
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
  <div class="">
    <div class="relative mt-10 mb-4 w-60 xl:mx-5 lg:scale-90 lg:mx-0 sm:scale-60 sm:-mx-8 sm:-my-8">
      <button @click="$emit('open')" class="w-full" v-if="enabled">
        <div>
          <div class="absolute border-2 border-black parallel right-6 -z-10 -top-6 bg-custom-0" v-if="color === 'yellow'"></div>
          <div class="absolute border-2 border-black parallel right-6 -z-10 -top-6 bg-custom-1" v-if="color === 'red'"></div>
          <div class="absolute border-2 border-black parallel right-6 -z-10 -top-6 bg-custom-2" v-if="color === 'blue'"></div>
        </div>
        <div>
          <div :v-if="img === ''" class="w-full overflow-hidden bg-gray-300 border-2 border-black rounded-3xl" ref="aspectTarget"><img :v-if="img != ''" :src="img" /></div>
        </div>
        <div class="mt-2 text-center">
          <div class="mb-3 text-xl">
            <slot />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.parallel {
  width: 40px;
  height: 60px;
  transform: skew(0, -20deg);
}
</style>
