<script setup>
import ProjectItem_3 from "~~/components/ProjectItem_3/ProjectItem_3.vue";
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
import PageButton from "~~/components/PageButton/PageButton.vue";

const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.eventRecord.title"),
});
</script>

<template>
  <div class="wrap-6">
    <PartTitle class="mt-0 mb-14 ml-0">
      <template #en>Event</template>
      <template #title>{{ $t("pages.home.child.eventRecord.info.title") }}</template>
    </PartTitle>

    <div class="flex flex-col justify-between mx-auto mb-10">
      <ProjectItem_3 href="/achievement/modelView" :isNew="true" v-for="i in 5">
        <template #name>{{ $t("pages.home.child.achievement.info.content.0.title") }}</template>
        <template #date>{{ $t("pages.home.child.achievement.info.content.0.year") }}</template>
        <template #place>國立台灣文學館 兒童樂園</template>
      </ProjectItem_3>
    </div>

    <PageButton
      ><template #ButtonName>{{ t("pages.home.child.eventRecord.info.button") }}</template>
    </PageButton>
  </div>
</template>

<style></style>
