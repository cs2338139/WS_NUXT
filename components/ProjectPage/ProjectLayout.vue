<script setup>
import Popup from '~~/components/ProjectPage/src/Popup.vue';

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
        words: ""
    }
})

const popupEnable = ref(false);

function OpenPopupPanel(datas, i) {
    popupEnable.value = true;
    document.body.style.overflow = "hidden";
    popupDatas.list = datas;
    SetData(i);
}

function SetData(i) {
    currentPopupInfo.data = {
        index: i,
        img: popupDatas.list[i].img,
        name: popupDatas.list[i].name,
        words: popupDatas.list[i].words
    }
}

function ClosePopupPanel() {
    popupEnable.value = false;
    document.body.style.overflow = "scroll";
}

function NextData() {
    let i = currentPopupInfo.data.index;
    if ((i + 1) < popupDatas.list.length) {
        i++;
    } else {
        i = 0;
    }

    SetData(i);
}

function PreviousData() {
    let i = currentPopupInfo.data.index;
    if ((i - 1) > -1) {
        i--;
    } else {
        i = popupDatas.list.length - 1;
    }

    SetData(i);
}

defineExpose({
    OpenPopupPanel
})

</script>

<template>

    <div>
        <div class="aspect-video wrap-8 mb-14 w-full bg-gray-300"> </div>

        <div class="wrap-6 mb-10">
            <div class="mb-14 mt-0 ml-0 text-5xl font-bold">
                <slot name="title"></slot>
            </div>
            <slot name="info"></slot>
        </div>

        <Popup @close="ClosePopupPanel" @previous="PreviousData" @next="NextData"
            :moveEnable="(popupDatas.list.length>1)" :img="currentPopupInfo.data.img" v-if="popupEnable">
            <template #name>{{ currentPopupInfo.data.name }}</template>
            <template #word>
                <template v-for=" word in currentPopupInfo.data.words">
                    <div> {{ word }}</div>
                    <br>
                </template>
            </template>
        </Popup>
    </div>

</template>

<style scoped>

</style>