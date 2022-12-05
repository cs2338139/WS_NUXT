<script setup>
const props = defineProps({
  img: String,
});

const enabled = ref(true);
const view = ref(true);
if (props.img === undefined) {
  enabled.value = false;
}

function View(_enabled) {
  view.value = _enabled;
}

defineExpose({
  View,
});
</script>

<template>
  <div class="mt-10 mb-4 w-40 mx-5 relative" v-show="view">
    <button @click="$emit('open')" class="w-full" v-if="enabled">
      <div>
        <div class="aspect-square w-full rounded-full overflow-hidden border"><img :v-if="img != ''" :src="img" /></div>
      </div>
      <div class="text-center mt-2">
        <div class="mb-3 text-xl font-bold">
          <slot name="name" />
        </div>
        <div><slot name="year" /></div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.parallel {
  width: 40px;
  height: 60px;
  transform: skew(0, -20deg);
}
</style>
