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
    <div class="mt-10 mb-4 w-48 relative">
        <button @click="$emit('function')" class="w-full" v-if="enabled">
            <div>
                <div class="aspect-square w-full rounded-3xl overflow-hidden"><img :v-if="img != ''" :src="img" /></div>
            </div>
            <div class="text-center mt-2">
                <div class="mb-3 text-xl">
                    <slot name="name"/>
                </div>
                <div class="mb-3 text-xl">
                    <slot name="owner"/>
                </div>
            </div>
        </button>
    </div>
</template>

<style scoped>
</style>
