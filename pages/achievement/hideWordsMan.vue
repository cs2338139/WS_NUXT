<script setup>
import ProjectLayout from "~~/components/ProjectPage/ProjectLayout.vue";
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import PartItem2 from "~~/components/ProjectPage/src/PartItem2.vue";
import PartItem3 from "~~/components/ProjectPage/src/PartItem3.vue";
import PartItem4 from "~~/components/ProjectPage/src/PartItem4.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import Item from "~~/components/ProjectPage/src/Item.vue";
import ScreenShots from "~~/components/ProjectPage/src/ScreenShots.vue";

const KV = new URL("../../public/Image/Page_hideWordsMan/Cover/KV1377_570.png", import.meta.url).href;
const p1 = new URL("../../public/Image/Page_hideWordsMan/Portrait/P.png", import.meta.url).href;
const m1 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M1.png", import.meta.url).href;
const m2 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M2.png", import.meta.url).href;
const m3 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M3.png", import.meta.url).href;
const m4 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M4.png", import.meta.url).href;
const m5 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M5.png", import.meta.url).href;
const m6 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M6.png", import.meta.url).href;
const m7 = new URL("../../public/Image/Page_hideWordsMan/Portrait/M7.png", import.meta.url).href;
const NPC1 = new URL("../../public/Image/Page_hideWordsMan/Portrait/NPC1.png", import.meta.url).href;
const NPC2 = new URL("../../public/Image/Page_hideWordsMan/Portrait/NPC2.png", import.meta.url).href;
const s1 = new URL("../../public/Image/Page_hideWordsMan/Portrait/S1.png", import.meta.url).href;
const s2 = new URL("../../public/Image/Page_hideWordsMan/Portrait/S2.png", import.meta.url).href;

const authorImg = ref([]);
const workImg = ref([]);
const NPCImg = ref([]);
const monsterImg = ref([]);

const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.child.hideWordsMan.title"),
});

const projectLayout = ref(null);

const authorData = reactive([]);
const workData = reactive([]);
const NPCData = reactive([]);
const monsterData = reactive([]);

onMounted(() => {
  GetDate();
});

function GetDate() {
  authorImg.value.push(p1);
  for (let i = 0; i < 1; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = authorImg.value[i];
    data.name = t("pages.home.child.achievement.child.hideWordsMan.author.content[" + i + "].name") + " (" + t("pages.home.child.achievement.child.hideWordsMan.author.content[" + i + "].year") + ")";

    for (let j = 0; j < 3; j++) {
      let word = t("pages.home.child.achievement.child.hideWordsMan.author.content[" + i + "].info." + j);
      data.words.push(word);
    }

    authorData.push(data);
  }

  workImg.value.push(s1);
  workImg.value.push(s2);
  for (let i = 0; i < 2; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = workImg.value[i];
    data.name = t("pages.home.child.achievement.child.hideWordsMan.works.content[" + i + "].name");

    for (let j = 0; j < 2; j++) {
      let word = t("pages.home.child.achievement.child.hideWordsMan.works.content[" + i + "].info." + j);
      data.words.push(word);
    }
    workData.push(data);
  }

  NPCImg.value.push(NPC1);
  NPCImg.value.push(NPC2);
  for (let i = 0; i < 2; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = NPCImg.value[i];
    data.name = t("pages.home.child.achievement.child.hideWordsMan.NPCs.content[" + i + "].name");

    for (let j = 0; j < 1; j++) {
      let word = t("pages.home.child.achievement.child.hideWordsMan.NPCs.content[" + i + "].info." + j);
      data.words.push(word);
    }
    NPCData.push(data);
  }

  monsterImg.value.push(m1);
  monsterImg.value.push(m2);
  monsterImg.value.push(m3);
  monsterImg.value.push(m4);
  monsterImg.value.push(m5);
  monsterImg.value.push(m6);
  monsterImg.value.push(m7);
  for (let i = 0; i < 7; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = monsterImg.value[i];
    data.name = t("pages.home.child.achievement.child.hideWordsMan.monsters.content[" + i + "].name");

    for (let j = 0; j < 4; j++) {
      let word = t("pages.home.child.achievement.child.hideWordsMan.monsters.content[" + i + "].info." + j);
      data.words.push(word);
    }
    monsterData.push(data);
  }
}

function SentData(datas, i) {
  projectLayout.value.OpenPopupPanel(datas, i);
}
</script>

<template>
  <div>
    <ProjectLayout ref="projectLayout" :img="KV">
      <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.title") }}</template>
      <template #info>
        <PartItem3>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.exhibition.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.exhibition.content") }}</template>
        </PartItem3>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.about.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.about.content[0]") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.introduction.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.introduction.content[0]") }}</template>
        </PartItem>

        <PartItem4>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.writer.title") }}</template>
          <template #name>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.writer.content[0].name") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.writer.content[0].info[0]") }}</template>
          <template #name2>{{ $t("pages.home.child.achievement.child.hideWordsMan.info.writer.content[1].name") }}</template>
          <template #word2>
            {{ $t("pages.home.child.achievement.child.hideWordsMan.info.writer.content[1].info.0") }}<br />
            {{ $t("pages.home.child.achievement.child.hideWordsMan.info.writer.content[1].info.1") }}</template
          >
        </PartItem4>

        <PartItem2 :img="p1" @function="SentData(authorData, 0)">
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.author.title") }}</template>
          <template #name>{{ $t("pages.home.child.achievement.child.hideWordsMan.author.content[0].name") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.child.hideWordsMan.author.content[0].year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.hideWordsMan.author.content[0].infoShort") }}</template>
          <template #bottom>{{ $t("pages.home.child.achievement.child.hideWordsMan.author.bottom") }}</template>
        </PartItem2>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.works.title") }}</template>
          <div class="flex flex-wrap justify-between">
            <Item color="yellow" @open="SentData(workData, 0)" :img="s1"> {{ $t("pages.home.child.achievement.child.hideWordsMan.works.content[0].name") }}</Item>
            <Item color="blue" @open="SentData(workData, 1)" :img="s2"> {{ $t("pages.home.child.achievement.child.hideWordsMan.works.content[1].name") }}</Item>
            <Item :enabled="false"></Item>
            <Item :enabled="false"></Item>
          </div>
        </PartItemNull>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.NPCs.title") }}</template>
          <div class="flex flex-wrap justify-between">
            <Item color="yellow" @open="SentData(NPCData, 0)" :img="NPC1"> {{ $t("pages.home.child.achievement.child.hideWordsMan.NPCs.content[0].name") }}</Item>
            <Item color="red" @open="SentData(NPCData, 1)" :img="NPC2"> {{ $t("pages.home.child.achievement.child.hideWordsMan.NPCs.content[1].name") }}</Item>
            <Item :enabled="false"></Item>
            <Item :enabled="false"></Item>
          </div>
        </PartItemNull>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.title") }}</template>
          <div class="flex flex-wrap justify-between">
            <Item color="yellow" @open="SentData(monsterData, 0)" :img="m1"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[0].name") }}</Item>
            <Item color="blue" @open="SentData(monsterData, 1)" :img="m2"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[1].name") }}</Item>
            <Item color="red" @open="SentData(monsterData, 2)" :img="m3"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[2].name") }}</Item>
            <Item color="blue" @open="SentData(monsterData, 3)" :img="m4"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[3].name") }}</Item>
            <Item color="red" @open="SentData(monsterData, 4)" :img="m5"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[4].name") }}</Item>
            <Item color="yellow" @open="SentData(monsterData, 5)" :img="m6"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[5].name") }}</Item>
            <Item color="blue" @open="SentData(monsterData, 6)" :img="m7"> {{ $t("pages.home.child.achievement.child.hideWordsMan.monsters.content[6].name") }}</Item>
            <Item :enabled="false"></Item>
          </div>
        </PartItemNull>

        <ScreenShots url="https://www.youtube.com/embed/7iWcglHSEQ0">
          <template #title>{{ $t("pages.home.child.achievement.child.hideWordsMan.screen.title") }}</template>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_hideWordsMan/Scene/game_image_01.png" alt="" />
          </div>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_hideWordsMan/Scene/game_image_02.png" alt="" />
          </div>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_hideWordsMan/Scene/game_image_03.png" alt="" />
          </div>
        </ScreenShots>
      </template>
    </ProjectLayout>
  </div>
</template>

<style scoped></style>
