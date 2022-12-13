<script setup>
import ProjectItem_2 from "~~/components/ProjectItem_2/ProjectItem_2.vue";
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.title"),
});

const p1 = new URL("../../public/Image/Page_3D/Cover/3D_Cover2.png", import.meta.url).href;
const p2 = new URL("../../public/Image/Page_hideWordsMan/Cover/KV1_1.png", import.meta.url).href;
const p3 = new URL("../../public/Image/Page_bird/Cover/Bird_Cover2.png", import.meta.url).href;
const p4 = new URL("../../public/Image/Page_1940/Cover/1940_Cover2.png", import.meta.url).href;
const p5 = new URL("../../public/Image/Page_WS/Cover/DreamMonster_Cover02.png", import.meta.url).href;
</script>

<template>
  <div class="wrap-6">
    <PartTitle class="mt-0 mb-14 ml-0">
      <template #en>Achievement</template>
      <template #title>{{ $t("pages.home.child.achievement.info.title") }}</template>
    </PartTitle>

    <div class="flex flex-col justify-between mx-auto mb-10">
      <ProjectItem_2 href="/achievement/modelView" :img="p1">
        <template #name>{{ $t("pages.home.child.achievement.info.content.0.title") }}</template>
        <template #year>{{ $t("pages.home.child.achievement.info.content.0.year") }}</template>
        <template #word>{{ $t("pages.home.child.achievement.info.content.0.words.0") }}</template>
      </ProjectItem_2>
      <ProjectItem_2 href="/achievement/hideWordsMan" :img="p2">
        <template #name>{{ $t("pages.home.child.achievement.info.content.4.title") }}</template>
        <template #info>{{ $t("pages.home.child.achievement.info.content.4.info") }}</template>
        <template #year>{{ $t("pages.home.child.achievement.info.content.4.year") }}</template>
        <template #word>{{ $t("pages.home.child.achievement.info.content.4.words.0") }}</template>
      </ProjectItem_2>
      <ProjectItem_2 href="/achievement/birdsOfLife" :img="p3">
        <template #name>{{ $t("pages.home.child.achievement.info.content.3.title") }}</template>
        <template #info>{{ $t("pages.home.child.achievement.info.content.3.info") }}</template>
        <template #year>{{ $t("pages.home.child.achievement.info.content.3.year") }}</template>
        <template #word>{{ $t("pages.home.child.achievement.info.content.3.words.0") }}</template>
      </ProjectItem_2>
      <ProjectItem_2 href="/achievement/game1940" :img="p4">
        <template #name>{{ $t("pages.home.child.achievement.info.content.2.title") }}</template>
        <template #info>{{ $t("pages.home.child.achievement.info.content.2.info") }}</template>
        <template #year>{{ $t("pages.home.child.achievement.info.content.2.year") }}</template>
        <template #word>{{ $t("pages.home.child.achievement.info.content.2.words.0") }}</template>
      </ProjectItem_2>
      <ProjectItem_2 href="/achievement/islandofBaku" :img="p5">
        <template #name>{{ $t("pages.home.child.achievement.info.content.1.title") }}</template>
        <template #info>{{ $t("pages.home.child.achievement.info.content.1.info") }}</template>
        <template #year>{{ $t("pages.home.child.achievement.info.content.1.year") }}</template>
        <template #word>{{ $t("pages.home.child.achievement.info.content.1.words.0") }}</template>
      </ProjectItem_2>
    </div>
  </div>
</template>

<style></style>
