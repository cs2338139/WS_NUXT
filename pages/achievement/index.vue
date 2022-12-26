<script setup>
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
const { locale, setLocale, t } = useI18n();
// const {currentWidth} = useGetWidth();

const { currentWidth } = useGetWidthLevel();

useHead({
  title: t("pages.home.child.achievement.title"),
});

const lgProjectItemImage1 = new URL("../../public/Image/Page_3D/Cover/3D_Cover2.png", import.meta.url).href;
const lgProjectItemImage2 = new URL("../../public/Image/Page_hideWordsMan/Cover/KV1_1.png", import.meta.url).href;
const lgProjectItemImage3 = new URL("../../public/Image/Page_bird/Cover/Bird_Cover2.png", import.meta.url).href;
const lgProjectItemImage4 = new URL("../../public/Image/Page_1940/Cover/1940_Cover2.png", import.meta.url).href;
const lgProjectItemImage5 = new URL("../../public/Image/Page_WS/Cover/DreamMonster_Cover02.png", import.meta.url).href;

const smProjectItemImage1 = new URL("../../public/Image/Page_3D/Cover/3D_Cover.png", import.meta.url).href;
const smProjectItemImage2 = new URL("../../public/Image/Page_hideWordsMan/Cover/KV1377_570.png", import.meta.url).href;
const smProjectItemImage3 = new URL("../../public/Image/Page_bird/Cover/Bird_Cover.png", import.meta.url).href;
const smProjectItemImage4 = new URL("../../public/Image/Page_1940/Cover/1940_Cover.jpg", import.meta.url).href;
const smProjectItemImage5 = new URL("../../public/Image/Page_WS/Cover/DreamMonster_Cover01.png", import.meta.url).href;

const ProjectItemImage1 = ref();
const ProjectItemImage2 = ref();
const ProjectItemImage3 = ref();
const ProjectItemImage4 = ref();
const ProjectItemImage5 = ref();

const itemComponent = ref();
const ProjectItem_Object = resolveComponent("ProjectItem");
const ProjectItem_2_Object = resolveComponent("ProjectItem_2");

const box = ref();
const fakeElement = ref();
const { fakeCount } = useSetFakeElement(box, fakeElement);

onMounted(() => {
  watchEffect(() => {
    ReSize();
  });
});

function ReSize() {
  if (currentWidth.value === "3xl") {
    itemComponent.value = ProjectItem_2_Object;
  } else {
    itemComponent.value = ProjectItem_Object;
  }

  if (currentWidth.value === "sm") {
    ProjectItemImage1.value = smProjectItemImage1;
    ProjectItemImage2.value = smProjectItemImage2;
    ProjectItemImage3.value = smProjectItemImage3;
    ProjectItemImage4.value = smProjectItemImage4;
    ProjectItemImage5.value = smProjectItemImage5;
  } else {
    ProjectItemImage1.value = lgProjectItemImage1;
    ProjectItemImage2.value = lgProjectItemImage2;
    ProjectItemImage3.value = lgProjectItemImage3;
    ProjectItemImage4.value = lgProjectItemImage4;
    ProjectItemImage5.value = lgProjectItemImage5;
  }
}


</script>

<template>
  <div class="wrap-6">
    <PartTitle class="mt-0 ml-0 mb-14">
      <template #en>Achievement</template>
      <template #title>{{ $t("pages.home.child.achievement.info.title") }}</template>
    </PartTitle>

    <div class="flex flex-col justify-between mx-auto mb-10 2xl:justify-between xl:justify-around 2xl:flex-row 2xl:flex-wrap sm:flex-col" ref="box">
      <div>
        <component :is="itemComponent" href="/achievement/modelView" :img="ProjectItemImage1" color="yellow" class="item">
          <template #name>{{ $t("pages.home.child.achievement.info.content.0.title") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.0.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.0.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/hideWordsMan" :img="ProjectItemImage2" color="blue" class="item">
          <template #name>{{ $t("pages.home.child.achievement.info.content.4.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.4.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.4.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.4.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/birdsOfLife" :img="ProjectItemImage3" color="red" class="item">
          <template #name>{{ $t("pages.home.child.achievement.info.content.3.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.3.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.3.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.3.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/game1940" :img="ProjectItemImage4" color="blue" class="item">
          <template #name>{{ $t("pages.home.child.achievement.info.content.2.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.2.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.2.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.2.words.0") }}</template>
        </component>
      </div>
      <div>
        <component :is="itemComponent" href="/achievement/islandofBaku" :img="ProjectItemImage5" color="yellow" class="item">
          <template #name>{{ $t("pages.home.child.achievement.info.content.1.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.1.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.1.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.1.words.0") }}</template>
        </component>
      </div>
      <div v-for="index in fakeCount" ref="fakeElement">
        <component :is="itemComponent" class="item"> </component>
      </div>
    </div>
  </div>
</template>

<style>
.item {
  @apply 2xl:mb-24 2xl:mx-5 lg:mx-0 lg:scale-90 md:-mx-3 sm:scale-100 sm:mb-16;
}
</style>
