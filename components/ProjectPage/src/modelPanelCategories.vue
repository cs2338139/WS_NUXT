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
        // buttons.value[i].children[0].style.transform = "scale(1, 1.2)";
        buttons.value[i].children[0].style.marginTop = "0.4rem";
        buttons.value[i].children[0].style.backgroundColor = "#F3D344";
        buttons.value[i].children[0].style.fontWeight = 700;
        emits("function", index);
      } else {
        // buttons.value[i].children[0].style.transform = "scale(1, 1)";
        buttons.value[i].children[0].style.marginTop = "0rem";
        buttons.value[i].children[0].style.backgroundColor = "#FFFFFF";
        buttons.value[i].children[0].style.fontWeight = 400;
      }
    }
  } else {
    // emits("function", index);
    select.value.value = index;
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
        <button v-for="(category, index) in categories" class="overflow-hidden border-2 border-b-0 border-black rounded-t-xl bg-custom-0" @click="click(index)" ref="buttons">
          <div class="w-20 h-7 flex justify-center items-center">
            {{ category }}
          </div>
        </button>
      </div>
      <hr class="border-black" />
    </div>
    <div v-if="currentWidth === 'sm'">
      <div class="text-right">
        <select class="border border-black py-0.5 px-14 rounded-xl text-xl font-bold" v-model="selectValue" ref="select" @change="$emit('function', selectValue)">
          <option v-for="(category, index) in categories" class="w-20 border-2 border-b-0 border-black rounded-t-xl h-7" :value="index">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
