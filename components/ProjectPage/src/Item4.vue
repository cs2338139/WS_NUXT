<script setup>
const props = defineProps({
  img: String,
});

const enabled = ref(true);
if (props.img === undefined) {
  enabled.value = false;
}

</script>

<template>
  <div class="dev-blue">
    <div class="relative w-48 mt-10 mb-4 dev-pink">
      <button @click="$emit('function')" class="w-full" v-if="enabled">
        <div>
          <div class="w-full overflow-hidden aspect-square rounded-3xl"><img :v-if="img != ''" :src="img" /></div>
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
