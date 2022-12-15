<script setup>
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import ProjectItem_4 from "~~/components/ProjectItem_4/ProjectItem_4.vue";
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
  for (let i = 0; i < events.nodes.length; i++) {
    if (id === events.nodes[i].slug) {
      let dataCH = {
        img: [],
        title: "",
        date: "",
        place: "",
        about: [],
        info: "",
      };

      dataCH.title = events.nodes[i].eventRecord.title;
      dataCH.date = events.nodes[i].eventRecord.date;
      dataCH.place = events.nodes[i].eventRecord.place;
      dataCH.about = events.nodes[i].eventRecord.about;
      dataCH.info = events.nodes[i].eventRecord.info;

      let dataEN = {
        img: [],
        title: "",
        date: "",
        place: "",
        about: [],
        info: "",
      };

      dataEN.title = events.nodes[i].eventRecord.enTitle;
      dataEN.date = events.nodes[i].eventRecord.date;
      dataEN.place = events.nodes[i].eventRecord.enPlace;
      dataEN.about = events.nodes[i].eventRecord.about;
      dataEN.info = events.nodes[i].eventRecord.enInfo;

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
    } else {
      await navigateTo('/404');
    }
  }
}

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}

const img = ref();
const imgButton = ref();
const currentImgIndex = ref(0);

onMounted(() => {
  ViewImage(currentImgIndex.value);
});
function MoveImage(move) {
  if (move === "next") {
    if (currentImgIndex.value + 1 <= img.value.length) {
      currentImgIndex.value = 0;
    } else {
      currentImgIndex.value++;
    }
  } else if (move === "prev") {
    if (currentImgIndex.value - 1 < 0) {
      currentImgIndex.value = img.value.length - 1;
    } else {
      currentImgIndex.value--;
    }
  }
  ViewImage(currentImgIndex.value);
}

function ViewImage(j) {
  for (let i = 0; i < img.value.length; i++) {
    if (i === j) {
      img.value[i].style.display = "block";
      imgButton.value[i].style.backgroundColor = "#000000";
    } else {
      img.value[i].style.display = "none";
      imgButton.value[i].style.backgroundColor = "#ffffff";
    }
  }
}
</script>

<template>
  <div class="wrap-8">
    <div class="aspect-KV w-full bg-black mb-5 flex justify-center items-center">
      <img v-for="img in current.img" :src="img" class="h-full" ref="img" />
    </div>
    <div class="flex mb-14 justify-center">
      <button class="w-3 border aspect-square border-black rounded-full mx-1" ref="imgButton" @click="ViewImage(index)" v-for="(img, index) in current.img"></button>
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
      <div class="flex flex-col justify-between mx-auto mb-10">
        <ProjectItem_4 href="/achievement/modelView" :img="p1">
          <template #name>{{ $t("pages.home.child.achievement.info.content.0.title") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.0.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.0.words.0") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/hideWordsMan" :img="p2">
          <template #name>{{ $t("pages.home.child.achievement.info.content.4.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.4.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.4.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.4.words.0") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/birdsOfLife" :img="p3">
          <template #name>{{ $t("pages.home.child.achievement.info.content.3.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.3.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.3.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.3.words.0") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/game1940" :img="p4">
          <template #name>{{ $t("pages.home.child.achievement.info.content.2.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.2.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.2.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.2.words.0") }}</template>
        </ProjectItem_4>
        <ProjectItem_4 href="/achievement/islandofBaku" :img="p5">
          <template #name>{{ $t("pages.home.child.achievement.info.content.1.title") }}</template>
          <template #info>{{ $t("pages.home.child.achievement.info.content.1.info") }}</template>
          <template #year>{{ $t("pages.home.child.achievement.info.content.1.year") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.info.content.1.words.0") }}</template>
        </ProjectItem_4>
      </div>
    </PartItemNull>
  </div>
</template>

<style scoped>
.aspect-KV {
  aspect-ratio: 1377 / 530;
}
</style>
