<script setup>
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
import HrefBottom2 from "~~/components/HrefBottom2/HrefBottom2.vue";
const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.about.title"),
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ToNotFound() {
      this.$router.push({
        name: "NotFound",
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        query: this.$route.query,
        hash: this.$route.hash,
      });
    },
  },
};
</script>

<template>
  <div>
    <div class="hidden 2xl:block">
      <img src="~/public/Image/UI/KV_A.svg" class="w-full mb-10 wrap-8-image" v-if="locale === 'zh'" />
      <img src="~/public/Image/UI/KV_Aen.svg" class="w-full mb-10 wrap-8-image" v-if="locale === 'en'" />
    </div>
    <div class="wrap-6 flex justify-between">
      <div class="w-5/12 self-center mb-52 2xl:w-full">
        <PartTitle class="mt-0 mb-10 ml-0">
          <template #en>About the project</template>
          <template #title>{{ $t("pages.home.child.about.info.title") }}</template>
        </PartTitle>

        <div class="mb-5 text-xl font-normal tracking-wide">
          {{ $t("pages.home.child.about.info.content.0") }}
          <br />
          <br />
          {{ $t("pages.home.child.about.info.content.1") }}
        </div>

        <template v-if="locale === 'zh'">
          <div class="mb-10 text-gray-500 text-lg font-normal tracking-wide leading-6">
            The purpose of this project, hosted by the National Museum of Taiwan Literature in response to the Culture and Technology Program by the Ministry of Culture, is to make literature more accessible to Taiwanese people through the
            interdisciplinary integration of literary collections with digital technology.",
            <br />
            <br />
            This project features the following five digital works: “3D Scanning and Modeling Project,” digital game “1940,” “Bird of Life,” “Islands of Monsters,” and “Demon-Hunting Character Capturers.”"
          </div>
        </template>

        <div class="text-right">
          <HrefBottom2 href="/achievement/">{{ $t("pages.home.achievement.button") }}</HrefBottom2>
        </div>
      </div>

      <img class="w-[45.8%] h-202 -mt-10 2xl:hidden" src="~/public/Image/UI/KV_B.svg" />
    </div>
  </div>
</template>

<style></style>
