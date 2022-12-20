<script setup>
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import ProjectItem_4 from "~~/components/ProjectItem_4/ProjectItem_4.vue";
import HrefBottom from "~~/components/HrefBottom/HrefBottom.vue";
const route = useRoute();
const { id } = route.params;
const { locale, setLocale, t } = useI18n();
const p1 = new URL("../../public/Image/Page_3D/Cover/3D_Cover2.png", import.meta.url).href;
const p2 = new URL("../../public/Image/Page_hideWordsMan/Cover/KV1_1.png", import.meta.url).href;
const p3 = new URL("../../public/Image/Page_bird/Cover/Bird_Cover2.png", import.meta.url).href;
const p4 = new URL("../../public/Image/Page_1940/Cover/1940_Cover2.png", import.meta.url).href;
const p5 = new URL("../../public/Image/Page_WS/Cover/DreamMonster_Cover02.png", import.meta.url).href;
const variables = { limit: 500 };
const query = gql`
  query getModel($limit: Int!) {
    posts(where: { categoryName: "Events" }, first: $limit) {
      nodes {
        slug
        eventRecord {
          about
          date
          enInfo
          enTitle
          info
          place
          enPlace
          title
          image1 {
            sourceUrl
          }
          image2 {
            sourceUrl
          }
          image3 {
            sourceUrl
          }
          image4 {
            sourceUrl
          }
          image5 {
            sourceUrl
          }
        }
      }
    }
  }
`;
const { data: data } = await useAsyncQuery(query, variables);
const { posts: events } = data.value;
const ch = ref();
const en = ref();
const current = ref();
if (data.value?.posts) {
  let found = false;
  for (let i = 0; i < events.nodes.length; i++) {
    if (id === events.nodes[i].slug) {
      found = true;
      let dataCH = {
        img: [],
        title: "",
        date: "",
        place: "",
        about: [],
        info: "",
      };

      if (events.nodes[i].eventRecord.title != null) dataCH.title = events.nodes[i].eventRecord.title;
      if (events.nodes[i].eventRecord.date != null) dataCH.date = events.nodes[i].eventRecord.date;
      if (events.nodes[i].eventRecord.place != null) dataCH.place = events.nodes[i].eventRecord.place;
      if (events.nodes[i].eventRecord.about != null) dataCH.about = events.nodes[i].eventRecord.about;
      if (events.nodes[i].eventRecord.info != null) dataCH.info = events.nodes[i].eventRecord.info;

      let dataEN = {
        img: [],
        title: "",
        date: "",
        place: "",
        about: [],
        info: "",
      };

      if (events.nodes[i].eventRecord.enTitle != null) dataEN.title = events.nodes[i].eventRecord.enTitle;
      if (events.nodes[i].eventRecord.date != null) dataEN.date = events.nodes[i].eventRecord.date;
      if (events.nodes[i].eventRecord.enPlace != null) dataEN.place = events.nodes[i].eventRecord.enPlace;
      if (events.nodes[i].eventRecord.about != null) dataEN.about = events.nodes[i].eventRecord.about;
      if (events.nodes[i].eventRecord.enInfo != null) dataEN.info = events.nodes[i].eventRecord.enInfo;

      if (events.nodes[i].eventRecord.image1) {
        dataCH.img.push(events.nodes[i].eventRecord.image1.sourceUrl);
        dataEN.img.push(events.nodes[i].eventRecord.image1.sourceUrl);
      }
      if (events.nodes[i].eventRecord.image2) {
        dataCH.img.push(events.nodes[i].eventRecord.image2.sourceUrl);
        dataEN.img.push(events.nodes[i].eventRecord.image2.sourceUrl);
      }
      if (events.nodes[i].eventRecord.image3) {
        dataCH.img.push(events.nodes[i].eventRecord.image3.sourceUrl);
        dataEN.img.push(events.nodes[i].eventRecord.image3.sourceUrl);
      }
      if (events.nodes[i].eventRecord.image4) {
        dataCH.img.push(events.nodes[i].eventRecord.image4.sourceUrl);
        dataEN.img.push(events.nodes[i].eventRecord.image4.sourceUrl);
      }
      if (events.nodes[i].eventRecord.image5) {
        dataCH.img.push(events.nodes[i].eventRecord.image5.sourceUrl);
        dataEN.img.push(events.nodes[i].eventRecord.image5.sourceUrl);
      }

      ch.value = dataCH;
      en.value = dataEN;
      break;
    }
  }
  if (found === false) {
    await navigateTo("/404");
  }
}

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}

function CheckAbout(name) {
  for (let i = 0; i < current.value.about.length; i++) {
    if (current.value.about[i] === name) {
      return true;
    }
  }

  return false;
}

const _img = ref();
const imgButton = ref();
const currentImgIndex = ref(0);

onMounted(() => {
  ViewImage(currentImgIndex.value);
});
function MoveImage(move) {
  if (move === "next") {
    if (currentImgIndex.value + 1 >= _img.value.length) {
      currentImgIndex.value = 0;
    } else {
      currentImgIndex.value++;
    }
  } else if (move === "prev") {
    if (currentImgIndex.value - 1 < 0) {
      currentImgIndex.value = _img.value.length - 1;
    } else {
      currentImgIndex.value--;
    }
  }
  ViewImage(currentImgIndex.value);
}

function ViewImage(j) {
  if (currentImgIndex.value != j) currentImgIndex.value = j;

  for (let i = 0; i < _img.value.length; i++) {
    if (i === j) {
      _img.value[i].style.display = "block";
      imgButton.value[i].style.backgroundColor = "#000000";
    } else {
      _img.value[i].style.display = "none";
      imgButton.value[i].style.backgroundColor = "#ffffff";
    }
  }
}
</script>

<template>
  <div class="wrap-6">
    <div>
      <div class="aspect-video w-full bg-black mb-5 flex justify-center items-center">
        <div class="absolute flex items-center justify-between w-full" v-if="current.img.length > 1">
          <button @click="MoveImage('prev')" class="aspect-square flex items-center justify-center w-12 m-2 bg-white border border-black">
            <ion-icon name="arrow-back-outline" class="text-4xl"></ion-icon>
          </button>
          <button @click="MoveImage('next')" class="aspect-square flex items-center justify-center w-12 m-2 bg-white border border-black">
            <ion-icon name="arrow-forward-outline" class="text-4xl"></ion-icon>
          </button>
        </div>

        <img v-for="img in current.img" :src="img" class="h-full" ref="_img" />
      </div>

      <div class="flex mb-14 justify-center" v-if="current.img.length > 1">
        <button class="w-3 border aspect-square border-black rounded-full mx-1" ref="imgButton" @click="ViewImage(index)" v-for="(img, index) in current.img"></button>
      </div>
    </div>

    <PartItem>
      <template #title>{{ current.title }}</template>
      <template #word>{{ current.info }}</template>
      <template #other>
        <div class="mt-10">{{ current.date }}／{{ current.place }}</div>
      </template>
    </PartItem>

    <PartItemNull>
      <template #title>相關專案</template>
      <div class="flex flex-col justify-between mx-auto mb-10" v-if="CheckAbout('3D掃描藏品與建模計畫')">
        <ProjectItem_4 href="/achievement/modelView" :img="p1">
          <template #name>{{ $t("pages.home.child.achievement.info.content.0.title") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/hideWordsMan" :img="p2" v-if="CheckAbout('藏字人')">
          <template #name>{{ $t("pages.home.child.achievement.info.content.4.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.4.info") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/birdsOfLife" :img="p3" v-if="CheckAbout('生命之鳥')">
          <template #name>{{ $t("pages.home.child.achievement.info.content.3.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.3.info") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/game1940" :img="p4" v-if="CheckAbout('1940')">
          <template #name>{{ $t("pages.home.child.achievement.info.content.2.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.2.info") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/islandofBaku" :img="p5" v-if="CheckAbout('夢獸之島')">
          <template #name>{{ $t("pages.home.child.achievement.info.content.1.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.1.info") }}</template>
        </ProjectItem_4>
      </div>
      <div class="text-center">
        <HrefBottom href="/achievement/">{{ $t("pages.home.achievement.button") }}</HrefBottom>
      </div>
    </PartItemNull>
  </div>
</template>

<style scoped></style>
