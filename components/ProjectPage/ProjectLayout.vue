<script setup>
import Popup from '~~/components/ProjectPage/src/Popup.vue';

defineProps({
    img: String,
});

const popupInfo = reactive({
    img: '',
    name: '',
    words: []
})

const popupEnable = ref(false);

function OpenPopupPanel(img, name, word) {
    popupEnable.value = true;
    document.body.style.overflow = "hidden";
    popupInfo.img = img;
    popupInfo.name = name;
    popupInfo.words = word;

    console.log(popupInfo.word);
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
            <div class="mb-14 mt-0 ml-0 text-5xl font-bold">
                <slot name="title"></slot>
            </div>
            <slot name="info"></slot>
        </div>

        <Popup @close="ClosePopupPanel" :img="popupInfo.img" v-if="popupEnable">
            <template #name>{{ popupInfo.name }}</template>
            <template #word>
                <template v-for=" word in popupInfo.words">
                    <div> {{ word }}</div>
                    <br>
                </template>
            </template>
        </Popup>
    </div>

</template>

<style scoped>

</style>