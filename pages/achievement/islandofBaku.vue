<script setup>
import ProjectLayout from "~~/components/ProjectPage/ProjectLayout.vue";
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import DownloadButton from "~~/components/ProjectPage/src/DownloadButton.vue";
import PartItem4 from "~~/components/ProjectPage/src/PartItem4.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import Item2 from "~~/components/ProjectPage/src/Item2.vue";
import ScreenShots from "~~/components/ProjectPage/src/ScreenShots.vue";

const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.child.islandOfBaku.title"),
});

const projectLayout = ref(null);

const literatiData = reactive([]);

onMounted(() => {
  GetDate();
});

function GetDate() {
  for (let i = 0; i < 5; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = null;
    data.name = t("pages.home.child.achievement.child.islandOfBaku.literati.content[" + i + "].name") + " (" + t("pages.home.child.achievement.child.islandOfBaku.literati.content[" + i + "].year") + ")";

    for (let j = 0; j < 1; j++) {
      let word = t("pages.home.child.achievement.child.islandOfBaku.literati.content[" + i + "].info." + j);
      data.words.push(word);
    }

    literatiData.push(data);
  }
}

function SentData(datas, i) {
  projectLayout.value.OpenPopupPanel(datas, i);
}
</script>

<template>
  <div>
    <ProjectLayout ref="projectLayout">
      <template #title>{{ $t("pages.home.child.achievement.child.islandOfBaku.info.title") }}</template>
      <template #info>
        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.islandOfBaku.info.about.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.islandOfBaku.info.about.content.0") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.islandOfBaku.info.introduction.title") }}</template>
          <template #word>
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.introduction.content.0") }}
            <br />
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.introduction.content.1") }}
            <br />
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.introduction.content.2") }}
          </template>
        </PartItem>

        <PartItem4>
          <template #title>
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.writer.title") }}
          </template>
          <template #name>
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.writer.content[0].nameDesktop") }}
          </template>
          <template #word>
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.writer.content[0].infoDesktop[0]") }}
          </template>
          <template #name2>
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.writer.content[1].nameDesktop") }}
          </template>
          <template #word2>
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.writer.content[1].infoDesktop[0]") }}
            <br />
            {{ $t("pages.home.child.achievement.child.islandOfBaku.info.writer.content[1].infoDesktop[1]") }}
          </template>
        </PartItem4>

        <PartItemNull>
          <template #title
            >{{ $t("pages.home.child.achievement.child.islandOfBaku.info.download.title") }}
            <div class="mt-5 flex">
              <DownloadButton href="https://store.steampowered.com/app/1758360/Isles_of_Monsters/">Windows </DownloadButton>
              <DownloadButton href="https://apps.apple.com/tw/app/%E5%A4%A2%E7%8D%B8%E4%B9%8B%E5%B3%B6/id1543158659"> iOS</DownloadButton>
              <DownloadButton href="https://play.google.com/store/apps/details?id=com.Axis3d.WSNew_0514"> Android</DownloadButton>
            </div>
          </template>
        </PartItemNull>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.title") }}</template>
          <div class="flex flex-wrap justify-between">
            <Item2 @open="SentData(literatiData, 0)">
              <template #name>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.0.name") }}</template>
              <template #year>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.0.year") }}</template>
            </Item2>
            <Item2 @open="SentData(literatiData, 1)">
              <template #name>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.1.name") }}</template>
              <template #year>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.1.year") }}</template>
            </Item2>
            <Item2 @open="SentData(literatiData, 2)">
              <template #name>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.2.name") }}</template>
              <template #year>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.2.year") }}</template>
            </Item2>
            <Item2 @open="SentData(literatiData, 3)">
              <template #name>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.3.name") }}</template>
              <template #year>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.3.year") }}</template>
            </Item2>
            <Item2 @open="SentData(literatiData, 4)">
              <template #name>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.4.name") }}</template>
              <template #year>{{ $t("pages.home.child.achievement.child.islandOfBaku.literati.content.4.year") }}</template>
            </Item2>
          </div>
        </PartItemNull>

        <ScreenShots url="https://www.youtube.com/embed/oqjG2gUBO4g">
          <template #title>{{ $t("pages.home.child.achievement.child.islandOfBaku.screen.title") }}</template>
          <div class="aspect-video mb-14 w-full bg-gray-300"></div>
          <div class="aspect-video mb-14 w-full bg-gray-300"></div>
          <div class="aspect-video mb-14 w-full bg-gray-300"></div>
        </ScreenShots>
      </template>
    </ProjectLayout>
  </div>
</template>

<style scoped></style>
