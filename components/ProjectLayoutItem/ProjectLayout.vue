<script setup>
import PartItem from '~~/components/ProjectLayoutItem/PartItem.vue'
import PartItem2 from '~~/components/ProjectLayoutItem/PartItem2.vue'
import PartItemNull from '~~/components/ProjectLayoutItem/PartItemNull.vue';
import Item from '~~/components/ProjectLayoutItem/Item.vue';
import Popup from '~~/components/ProjectLayoutItem/Popup.vue';

defineProps({
    img: String,
});

const popupInfo = reactive({
    img: '',
    name: '',
    word: ''
})

const popupEnable = ref(false);

function OpenPopupPanel(img, name, word) {
    popupEnable.value = true;
    document.body.style.overflow = "hidden";
    Object.assign(popupInfo, {
        img: img,
        name: name,
        word: word
    })
}

function ClosePopupPanel() {
    popupEnable.value = false;
    document.body.style.overflow = "scroll";
}

defineExpose({
    OpenPopupPanel
})

</script>

<template>

    <div>
        <div class="aspect-video wrap-8 mb-14 w-full bg-gray-300"> </div>

        <div class="wrap-6 mb-10">
            <div class="mb-14 mt-0 ml-0 text-5xl">
                <slot name="title"></slot>
            </div>
            <slot name="info"></slot>
        </div>

        <Popup @close="ClosePopupPanel" :img="popupInfo.img" v-if="popupEnable">
            <template #name>{{ popupInfo.name }}</template>
            <template #word>
                {{ popupInfo.word }}</template>
        </Popup>
    </div>

</template>

<style scoped>

</style>