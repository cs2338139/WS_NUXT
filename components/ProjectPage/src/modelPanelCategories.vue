<script setup>
const props = defineProps({
  categories: [],
});
const { currentWidth } = useGetWidthLevel();
const emits = defineEmits(["function"]);

const buttons = ref();
const select = ref();
const selectValue = ref();

function click(index) {
  if (currentWidth.value != "sm") {
    for (let i = 0; i < buttons.value.length; i++) {
      if (i === index) {
        buttons.value[i].style.transform = "scale(1, 1.2)";
        buttons.value[i].style.backgroundColor = "#F3D344";
        buttons.value[i].style.fontWeight = 700;
        buttons.value[i].children[0].style.transform = "scale(1, 0.8333)";
        emits("function", index);
      } else {
        buttons.value[i].style.transform = "scale(1, 1)";
        buttons.value[i].style.backgroundColor = "#FFFFFF";
        buttons.value[i].style.fontWeight = 400;
        buttons.value[i].children[0].style.transform = "scale(1, 1)";
      }
    }
  } else {
    // emits("function", index);
    select.value.value = index;
    console.log(index);
  }
}

// watchEffect(() => emits("function", selectValue.value));
defineExpose({
  click,
});
</script>

<template>
  <div>
    <div v-if="currentWidth != 'sm'">
      <div class="text-right">
        <button v-for="(category, index) in categories" class="border-2 border-b-0 border-black rounded-t-xl w-20 h-7 origin-bottom" @click="click(index)" ref="buttons">
          <div class="origin-bottom">{{ category }}</div>
        </button>
      </div>
      <hr class="border-black" />
    </div>
    <div v-if="currentWidth === 'sm'">
      <div class="text-right">
        <select class="border border-black py-0.5 px-14 rounded-xl text-xl font-bold" v-model="selectValue" ref="select" @change="$emit('function', selectValue);">
          <option v-for="(category, index) in categories" class="border-2 border-b-0 border-black rounded-t-xl w-20 h-7" :value="index">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
