<script setup>
import Item4 from "~~/components/ProjectPage/src/Item4.vue";
const props = defineProps({
  year: Number,
  models: [],
});

const box = ref();
const fakeElement = ref();
const { fakeCount, GetFakeCount } = useSetFakeElement(box, fakeElement);

function ControlViewBoxHeight(enabled) {
  if (box.value.children[0].getBoundingClientRect().height != 0) {
    SetViewBoxHeight(enabled);
  } else {
    let reControlViewBoxHeight = setInterval(() => {
      if (box.value.children[0].getBoundingClientRect().height != 0) {
        SetViewBoxHeight(enabled);
        clearInterval(reControlViewBoxHeight);
      }
    }, 0);
  }
}

function SetViewBoxHeight(enabled) {
  if (enabled) {
    box.value.style.height = "auto";
  } else {
    box.value.style.height = box.value.children[0].getBoundingClientRect().height + "px";
  }
}

defineExpose({
  ControlViewBoxHeight,
});
</script>

<template>
  <div class="flex flex-wrap justify-between overflow-hidden" ref="box">
    <div v-for="(model, index) in models" class="lg:scale-90">
      <Item4 :img="model.img" @function="$emit('function', year, index)">
        <template #name>{{ model.name }}</template>
        <template #owner>{{ model.owner }}</template>
      </Item4>
    </div>
    <div v-for="index in fakeCount" class="lg:scale-90">
      <Item4 ref="fakeElement"></Item4>
    </div>
  </div>
</template>
