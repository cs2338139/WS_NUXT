<script setup>
import ProjectLayout from "~~/components/ProjectPage/ProjectLayout.vue";
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import DownloadButton from "~~/components/ProjectPage/src/DownloadButton.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import Item2 from "~~/components/ProjectPage/src/Item2.vue";
import Item3 from "~~/components/ProjectPage/src/Item3.vue";
import ScreenShots from "~~/components/ProjectPage/src/ScreenShots.vue";

const KV = new URL("../../public/Image/Page_1940/Cover/1940_Cover.jpg", import.meta.url).href;
const p1 = new URL("../../public/Image/Page_1940/Portrait/1940_Portrait01.jpg", import.meta.url).href;
const p2 = new URL("../../public/Image/Page_1940/Portrait/1940_Portrait03.png", import.meta.url).href;
const p3 = new URL("../../public/Image/Page_1940/Portrait/1940_Portrait02.png", import.meta.url).href;

const audio_file = new URL("../../public/audio/01_1940.mp3", import.meta.url).href;

const img = ref([]);

const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.child.game1940.title"),
});

const projectLayout = ref(null);

const charactersData = reactive([]);

onMounted(() => {
  GetDate();
});

function GetDate() {
  img.value.push(p1);
  img.value.push(p2);
  img.value.push(p3);
  for (let i = 0; i < 3; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = img.value[i];
    let name = t("pages.home.child.achievement.child.game1940.characters.content[" + i + "].name");
    let year = t("pages.home.child.achievement.child.game1940.characters.content[" + i + "].year");

    if (year === "") {
      data.name = t("pages.home.child.achievement.child.game1940.characters.content[" + i + "].name");
    } else {
      data.name = t("pages.home.child.achievement.child.game1940.characters.content[" + i + "].name") + " (" + t("pages.home.child.achievement.child.game1940.characters.content[" + i + "].year") + ")";
    }

    for (let j = 0; j < 2; j++) {
      let word = t("pages.home.child.achievement.child.game1940.characters.content[" + i + "].info." + j);
      data.words.push(word);
    }

    charactersData.push(data);
  }
}

function SentData(datas, i) {
  projectLayout.value.OpenPopupPanel(datas, i);
}
</script>

<template>
  <div>
    <ProjectLayout ref="projectLayout" :img="KV">
      <template #title>{{ $t("pages.home.child.achievement.child.game1940.info.title") }}</template>
      <template #info>
        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.game1940.info.about.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.game1940.info.about.content.0") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.game1940.info.introduction.title") }}</template>
          <template #word>
            {{ $t("pages.home.child.achievement.child.game1940.info.introduction.content.0") }}
            <br />
            <br />
            {{ $t("pages.home.child.achievement.child.game1940.info.introduction.content.1") }}
            <br />
            {{ $t("pages.home.child.achievement.child.game1940.info.introduction.content.2") }}
          </template>
        </PartItem>

        <PartItem>
          <template #title>
            {{ $t("pages.home.child.achievement.child.game1940.info.writer.title") }}
          </template>
          <template #name>
            {{ $t("pages.home.child.achievement.child.game1940.info.writer.content[0].name") }}
          </template>
          <template #word>
            {{ $t("pages.home.child.achievement.child.game1940.info.writer.content[0].info[0]") }}
          </template>
        </PartItem>

        <PartItemNull>
          <template #title
            >{{ $t("pages.home.child.achievement.child.game1940.info.music.title") }}
            <div class="mt-5">
              <audio :src="audio_file" loop controls class="w-full"></audio>
            </div>
          </template>
        </PartItemNull>

        <PartItemNull>
          <template #title
            >{{ $t("pages.home.child.achievement.child.game1940.info.download.title") }}
            <div class="mt-5 flex flex-wrap sm:justify-between last:sm: -mb-10">
              <DownloadButton href="https://store.steampowered.com/app/1798300/1940/">Windows</DownloadButton>
              <DownloadButton href="https://apps.apple.com/tw/app/1940/id1546034482">　iOS　</DownloadButton>
              <DownloadButton href="https://play.google.com/store/apps/details?id=com.axis3d.ws_1940"> Android</DownloadButton>
            </div>
          </template>
        </PartItemNull>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.game1940.characters.title") }}</template>
          <div class="flex flex-wrap  -mt-6 justify-start sm:justify-between">
            <Item2 @open="SentData(charactersData, 0)" class="mr-16 sm:mr-0" :img="p1">
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.characters.content.0.name") }}</template>
              <template #year>（{{ $t("pages.home.child.achievement.child.game1940.characters.content.0.year") }}）</template>
            </Item2>
            <Item2 @open="SentData(charactersData, 1)" class="mr-16 sm:mr-0" :img="p2">
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.characters.content.1.name") }}</template>
              <template #year>（{{ $t("pages.home.child.achievement.child.game1940.characters.content.1.year") }}）</template>
            </Item2>
            <Item2 @open="SentData(charactersData, 2)" :img="p3">
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.characters.content.2.name") }}</template>
              <template #year>（{{ $t("pages.home.child.achievement.child.game1940.characters.content.1.year") }}）</template>
            </Item2>
          </div>
        </PartItemNull>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.game1940.event.title") }}</template>
          <div class="flex flex-col justify-start mt-8">
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.0.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.0.info") }}</template>
            </Item3>
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.1.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.1.info") }}</template>
            </Item3>
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.2.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.2.info") }}</template>
            </Item3>
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.3.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.3.info") }}</template>
            </Item3>
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.4.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.4.info") }}</template>
            </Item3>
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.5.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.5.info") }}</template>
            </Item3>
            <hr class="border-black" />
            <Item3>
              <template #name>{{ $t("pages.home.child.achievement.child.game1940.event.content.6.name") }}</template>
              <template #info>{{ $t("pages.home.child.achievement.child.game1940.event.content.6.info") }}</template>
            </Item3>
            <hr class="border-black" />
          </div>
        </PartItemNull>

        <ScreenShots url="https://www.youtube.com/embed/7iWcglHSEQ0">
          <template #title>{{ $t("pages.home.child.achievement.child.game1940.screen.title") }}</template>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_1940/Scene/1940_Scene01.png" alt="" />
          </div>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_1940/Scene/1940_Scene03.png" alt="" />
          </div>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_1940/Scene/1940_Scene06.png" alt="" />
          </div>
        </ScreenShots>
      </template>
    </ProjectLayout>
  </div>
</template>

<style scoped></style>
