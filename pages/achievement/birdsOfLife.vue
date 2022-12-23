<script setup>
import ProjectLayout from "~~/components/ProjectPage/ProjectLayout.vue";
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import PartItem2 from "~~/components/ProjectPage/src/PartItem2.vue";
import PartItem3 from "~~/components/ProjectPage/src/PartItem3.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import Item from "~~/components/ProjectPage/src/Item.vue";
import ScreenShots from "~~/components/ProjectPage/src/ScreenShots.vue";

const KV = new URL("../../public/Image/Page_bird/Cover/Bird_Cover.png", import.meta.url).href;
const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.child.birdsOfLife.title"),
});
const box = ref();
const fakeElement = ref();
const { fakeCount } = useSetFakeElement(box, fakeElement);

const m = new URL("../../public/Image/Page_bird/Portrait/Bird_Portrait01.png", import.meta.url).href;
const p1 = new URL("../../public/Image/Page_bird/Portrait/Bird_Book01.png", import.meta.url).href;
const p2 = new URL("../../public/Image/Page_bird/Portrait/Bird_Book02.png", import.meta.url).href;
const p3 = new URL("../../public/Image/Page_bird/Portrait/Bird_Book03.png", import.meta.url).href;
const p4 = new URL("../../public/Image/Page_bird/Portrait/Bird_Book04.png", import.meta.url).href;
const p5 = new URL("../../public/Image/Page_bird/Portrait/Bird_Book05.png", import.meta.url).href;
const p6 = new URL("../../public/Image/Page_bird/Portrait/Bird_Book06.png", import.meta.url).href;

const img = ref([]);

const projectLayout = ref(null);

const AuthorData = reactive([]);
const workData = reactive([]);

onMounted(() => {
  GetDate();
});


function GetDate() {
  for (let i = 0; i < 1; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = m;
    data.name = t("pages.home.child.achievement.child.birdsOfLife.author.content[" + i + "].name") + " (" + t("pages.home.child.achievement.child.birdsOfLife.author.content[" + i + "].year") + ")";

    for (let j = 0; j < 4; j++) {
      let word = t("pages.home.child.achievement.child.birdsOfLife.author.content[" + i + "].info." + j);
      data.words.push(word);
    }

    AuthorData.push(data);
  }

  img.value.push(p1);
  img.value.push(p2);
  img.value.push(p3);
  img.value.push(p4);
  img.value.push(p5);
  img.value.push(p6);
  for (let i = 0; i < 6; i++) {
    let data = {
      img: "",
      name: "",
      words: [],
    };
    data.img = img.value[i];
    data.name = t("pages.home.child.achievement.child.birdsOfLife.works.content[" + i + "].name");
    data.words.push(t("pages.home.child.achievement.child.birdsOfLife.works.content[" + i + "].info.0"));
    workData.push(data);
  }
}

function SentData(datas, i) {
  projectLayout.value.OpenPopupPanel(datas, i);
}
</script>

<template>
  <div>
    <ProjectLayout ref="projectLayout" :img="KV">
      <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.title") }}</template>
      <template #info>
        <PartItem3>
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.exhibition.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.exhibition.content") }}</template>
        </PartItem3>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.about.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.about.content[0]") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.introduction.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.introduction.content[0]") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.writer.title") }}</template>
          <template #name>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.writer.content[0].name") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.birdsOfLife.info.writer.content[0].info[0]") }}</template>
        </PartItem>

        <PartItem2 :img="m" @function="SentData(AuthorData, 0)">
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.author.title") }}</template>
          <template #name>{{ $t("pages.home.child.achievement.child.birdsOfLife.author.content[0].name") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.child.birdsOfLife.author.content[0].year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.birdsOfLife.author.content[0].infoShort") }}</template>
          <template #bottom>{{ $t("pages.home.child.achievement.child.birdsOfLife.author.bottom") }}</template>
        </PartItem2>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.works.title") }}</template>
          <div class="flex flex-wrap justify-between xl:justify-around" ref="box">
            <Item color="yellow" @open="SentData(workData, 0)" :img="p1"> {{ $t("pages.home.child.achievement.child.birdsOfLife.works.content[0].name") }}</Item>
            <Item color="blue" @open="SentData(workData, 1)" :img="p2"> {{ $t("pages.home.child.achievement.child.birdsOfLife.works.content[1].name") }}</Item>
            <Item color="red" @open="SentData(workData, 2)" :img="p3"> {{ $t("pages.home.child.achievement.child.birdsOfLife.works.content[2].name") }}</Item>
            <Item color="yellow" @open="SentData(workData, 3)" :img="p4"> {{ $t("pages.home.child.achievement.child.birdsOfLife.works.content[3].name") }}</Item>
            <Item color="red" @open="SentData(workData, 4)" :img="p5"> {{ $t("pages.home.child.achievement.child.birdsOfLife.works.content[4].name") }}</Item>
            <Item color="blue" @open="SentData(workData, 5)" :img="p6"> {{ $t("pages.home.child.achievement.child.birdsOfLife.works.content[5].name") }}</Item>
            <Item v-for="index in fakeCount" ref="fakeElement"></Item>
          </div>
        </PartItemNull>

        <ScreenShots url="https://www.youtube.com/embed/6kkuhbDiyOw">
          <template #title>{{ $t("pages.home.child.achievement.child.birdsOfLife.screen.title") }}</template>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_bird/Scene/Bird_Scene01.png" alt="" />
          </div>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_bird/Scene/Bird_Scene04.png" alt="" />
          </div>
          <div class="mb-14 w-full bg-gray-300">
            <img src="~/public/Image/Page_bird/Scene/Bird_Scene03.png" alt="" />
          </div>
        </ScreenShots>
      </template>
    </ProjectLayout>
  </div>
</template>

<style scoped></style>
