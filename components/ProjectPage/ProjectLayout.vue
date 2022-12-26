<script setup>
import Popup from "~~/components/ProjectPage/src/Popup.vue";

defineProps({
  img: String,
});

// let popupDatas = reactive([]);
const popupDatas = reactive({ list: [] });

const currentPopupInfo = reactive({
  data: {
    index: "",
    img: "",
    name: "",
    words: "",

    link: "",
    size: "",
    owner: "",
    more: "",
  },
});

const popupEnable = ref(false);

function OpenPopupPanel(datas, i) {
  popupEnable.value = true;
  document.body.style.overflow = "hidden";
  popupDatas.list = [];
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].name != undefined) {
      popupDatas.list.push(datas[i]);
    }
  }

  SetData(i);
}

function SetData(i) {
  if (popupDatas.list[i].link == undefined) {
    currentPopupInfo.data = {
      index: i,
      img: popupDatas.list[i].img,
      name: popupDatas.list[i].name,
      words: popupDatas.list[i].words,
    };
  } else {
    currentPopupInfo.data = {
      index: i,
      img: popupDatas.list[i].img,
      name: popupDatas.list[i].name,
      words: popupDatas.list[i].words,
      link: popupDatas.list[i].link,
      size: popupDatas.list[i].size,
      owner: popupDatas.list[i].owner,
      more: popupDatas.list[i].more,
    };
  }
  console.log(popupDatas.list[i].size);

}

function ClosePopupPanel() {
  popupEnable.value = false;
  document.body.style.overflow = "scroll";
}

function NextData() {
  let i = currentPopupInfo.data.index;
  if (i + 1 < popupDatas.list.length) {
    i++;
  } else {
    i = 0;
  }

  SetData(i);
}

function PreviousData() {
  let i = currentPopupInfo.data.index;
  if (i - 1 > -1) {
    i--;
  } else {
    i = popupDatas.list.length - 1;
  }

  SetData(i);
}

defineExpose({
  OpenPopupPanel,
});
</script>

<template>
  <div>
    <div class="aspect-KV wrap-8-image mb-14 w-full">
      <img :src="img" class="w-full" />
    </div>

    <div class="wrap-6 mb-10">
      <div class="mb-14 mt-0 ml-0 text-5xl font-bold">
        <slot name="title"></slot>
      </div>
      <slot name="info"></slot>
    </div>

    <Popup @close="ClosePopupPanel" @previous="PreviousData" @next="NextData" :moveEnable="popupDatas.list.length > 1" :more="currentPopupInfo.data.more" :link="currentPopupInfo.data.link" :img="currentPopupInfo.data.img" v-if="popupEnable">
      <template #name>{{ currentPopupInfo.data.name }}</template>
      <template #owner>{{ currentPopupInfo.data.owner }}</template>
      <template #size>{{ currentPopupInfo.data.size }}</template>
      <template #word>
        <template v-for="word in currentPopupInfo.data.words">
          <div class="mb-4">{{ word }}</div>
        </template>
      </template>
    </Popup>
  </div>
</template>

<style scoped>
.aspect-KV {
  aspect-ratio: 1377 / 530;
}
</style>
