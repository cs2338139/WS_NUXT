<script setup>
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
const { locale, setLocale, t } = useI18n();
// const {currentWidth} = useGetWidth();

const { currentWidth } = useGetWidthLevel();

useHead({
  title: t("pages.home.child.achievement.title"),
});

const p1 = new URL("../../public/Image/Page_3D/Cover/3D_Cover2.png", import.meta.url).href;
const p2 = new URL("../../public/Image/Page_hideWordsMan/Cover/KV1_1.png", import.meta.url).href;
const p3 = new URL("../../public/Image/Page_bird/Cover/Bird_Cover2.png", import.meta.url).href;
const p4 = new URL("../../public/Image/Page_1940/Cover/1940_Cover2.png", import.meta.url).href;
const p5 = new URL("../../public/Image/Page_WS/Cover/DreamMonster_Cover02.png", import.meta.url).href;

const itemComponent = ref();
const ProjectItem_Object = resolveComponent("ProjectItem");
const ProjectItem_2_Object = resolveComponent("ProjectItem_2");

const box = ref();
const fakeElement = ref();
const { fakeCount } = useSetFakeElement(box, fakeElement);

watchEffect(() => Resize());

function Resize() {
  if (currentWidth.value === "3xl") {
    itemComponent.value = ProjectItem_2_Object;
  } else {
    itemComponent.value = ProjectItem_Object;
  }
}
</script>

<template>
  <div class="wrap-6">
    <PartTitle class="mt-0 ml-0 mb-14">
      <template #en>Achievement</template>
      <template #title>{{ $t("pages.home.child.achievement.info.title") }}</template>
    </PartTitle>

    <div class="flex flex-col justify-between mx-auto mb-10 2xl:justify-between xl:justify-around 2xl:flex-row 2xl:flex-wrap" ref="box">
      <div>
        <component :is="itemComponent" href="/achievement/modelView" :img="p1" color="yellow" class="2xl:mb-24 2xl:mx-5 lg: mx-0 lg:scale-90">
          <template #name>{{ $t("pages.home.child.achievement.info.content.0.title") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.0.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.0.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/hideWordsMan" :img="p2" color="blue" class="2xl:mb-24 2xl:mx-5 lg: mx-0 lg:scale-90">
          <template #name>{{ $t("pages.home.child.achievement.info.content.4.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.4.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.4.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.4.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/birdsOfLife" :img="p3" color="red" class="2xl:mb-24 2xl:mx-5 lg: mx-0 lg:scale-90">
          <template #name>{{ $t("pages.home.child.achievement.info.content.3.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.3.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.3.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.3.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/game1940" :img="p4" color="blue" class="2xl:mb-24 2xl:mx-5 lg: mx-0 lg:scale-90">
          <template #name>{{ $t("pages.home.child.achievement.info.content.2.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.2.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.2.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.2.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/islandofBaku" :img="p5" color="yellow" class="2xl:mb-24 2xl:mx-5 lg: mx-0 lg:scale-90">
          <template #name>{{ $t("pages.home.child.achievement.info.content.1.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.1.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.1.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.1.words.0") }}</template>
        </component>
      </div>
      <div v-for="index in fakeCount" ref="fakeElement">
        <component :is="itemComponent" class="2xl:mb-24 2xl:mx-5 lg: mx-0 lg:scale-90"> </component>
      </div>
    </div>
  </div>
</template>

<style></style>
