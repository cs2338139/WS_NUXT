<script setup>
import ProjectLayout from "~~/components/ProjectPage/ProjectLayout.vue";
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import WriterPanel from "~~/components/ProjectPage/src/WriterPanel.vue";
import ModelPanel from "~~/components/ProjectPage/src/ModelPanel.vue";

const KV = new URL("../../public/Image/Page_3D/Cover/3D_Cover.png", import.meta.url).href;
const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.child.modelView.title"),
});

const projectLayout = ref(null);

function SentData(datas, i) {
  projectLayout.value.OpenPopupPanel(datas, i);
}

</script>

<template>
  <div>
    <ProjectLayout ref="projectLayout" :img="KV">
      <template #title>{{ $t("pages.home.child.achievement.child.modelView.info.title") }}</template>
      <template #info>
        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.info.about.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.modelView.info.about.content.0") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.info.introduction.title") }}</template>
          <template #word>
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.0") }}
            <br />
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.1") }}
            <br />
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.2") }}
            <br />
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.3") }}
            <br />
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.4") }}
          </template>
        </PartItem>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.literati.title") }}</template>
          <WriterPanel @open="SentData"></WriterPanel>
        </PartItemNull>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.result.title") }}</template>
          <ModelPanel @open="SentData"></ModelPanel>
        </PartItemNull>
      </template>
    </ProjectLayout>
  </div>
</template>

<style scoped></style>
