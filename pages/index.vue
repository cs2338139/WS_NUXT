<script setup>
import ProjectItem from ".././components/ProjectItem/ProjectItem.vue";
import EventItem from ".././components/EventItem/EventItem.vue";
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
import HrefBottom from "~~/components/HrefBottom/HrefBottom.vue";
const { locale, setLocale, t } = useI18n();
const lgProjectItemImage1 = new URL("../public/Image/Page_3D/Cover/3D_Cover2.png", import.meta.url).href;
const lgProjectItemImage2 = new URL("../public/Image/Page_hideWordsMan/Cover/KV1_1.png", import.meta.url).href;
const lgProjectItemImage3 = new URL("../public/Image/Page_bird/Cover/Bird_Cover2.png", import.meta.url).href;
const smProjectItemImage1 = new URL("../public/Image/Page_3D/Cover/3D_Cover.png", import.meta.url).href;
const smProjectItemImage2 = new URL("../public/Image/Page_hideWordsMan/Cover/KV1377_570.png", import.meta.url).href;
const smProjectItemImage3 = new URL("../public/Image/Page_bird/Cover/Bird_Cover.png", import.meta.url).href;
const ProjectItemImage1 = ref();
const ProjectItemImage2 = ref();
const ProjectItemImage3 = ref();
const { currentWidth } = useGetWidthLevel();

useHead({
  title: t("pages.home.title"),
});

const variables = { limit: 500 };
const query = gql`
  query getModel($limit: Int!) {
    posts(where: { categoryName: "Events" }, first: $limit) {
      nodes {
        slug
        eventRecord {
          date
          enTitle
          info
          place
          enPlace
          title
          image1 {
            sourceUrl
          }
        }
      }
    }
  }
`;
const { data: data } = await useAsyncQuery(query, variables);
const { posts: events } = data.value;
const ch = reactive([]);
const en = reactive([]);
const current = reactive([]);
if (data.value?.posts) {
  for (let i = 0; i < events.nodes.length; i++) {
    let dataCH = {
      img: "",
      title: "",
      date: "",
      place: "",
      slug: "",
    };

    dataCH.img = events.nodes[i].eventRecord.image1.sourceUrl;
    dataCH.title = events.nodes[i].eventRecord.title;
    dataCH.date = events.nodes[i].eventRecord.date;
    dataCH.place = events.nodes[i].eventRecord.place;
    dataCH.slug = events.nodes[i].slug;

    ch.push(dataCH);

    let dataEN = {
      img: "",
      title: "",
      date: "",
      place: "",
      slug: "",
    };

    dataEN.img = events.nodes[i].eventRecord.image1.sourceUrl;
    dataEN.title = events.nodes[i].eventRecord.enTitle;
    dataEN.date = events.nodes[i].eventRecord.date;
    dataEN.place = events.nodes[i].eventRecord.enPlace;
    dataEN.slug = events.nodes[i].slug;

    en.push(dataEN);
  }
}

onMounted(() => {
  watchEffect(() => {
    ReSize();
  });
});

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}

function ReSize() {
  if (currentWidth.value === "sm") {
    ProjectItemImage1.value = smProjectItemImage1;
    ProjectItemImage2.value = smProjectItemImage2;
    ProjectItemImage3.value = smProjectItemImage3;
  } else {
    ProjectItemImage1.value = lgProjectItemImage1;
    ProjectItemImage2.value = lgProjectItemImage2;
    ProjectItemImage3.value = lgProjectItemImage3;
  }
}
</script>

<template>
  <div>
    <img src="~/public/Image/UI/KV_A.svg" class="w-full mb-10 wrap-8-image" v-if="locale === 'zh'" />
    <img src="~/public/Image/UI/KV_Aen.svg" class="w-full mb-10 wrap-8-image" v-if="locale === 'en'" />

    <div class="mb-10 wrap-6">
      <PartTitle class="mt-0 mb-10 ml-0">
        <template #en>About the project</template>
        <template #title>{{ $t("pages.home.info.title") }}</template>
      </PartTitle>

      <div class="relative max-w-4xl mx-auto my-0">
        <div class="mb-10 text-3xl sm:text-xl text-blue-400">
          {{ $t("pages.home.info.title2") }}
        </div>
        <div class="mb-3">
          {{ $t("pages.home.info.content.0") }}<br /><br />
          {{ $t("pages.home.info.content.1") }}<br />
        </div>
        <div class="text-right">
          <HrefBottom href="/about">{{ $t("pages.home.info.button") }}</HrefBottom>
        </div>
      </div>
    </div>

    <div class="mb-32 wrap-6 2xl:mb-10">
      <PartTitle class="mt-0 mb-5 ml-0 2xl:-mb-5 sm:mb-5">
        <template #en>Achievement</template>
        <template #title>{{ $t("pages.home.achievement.title") }}</template>
      </PartTitle>
      <div class="inline-flex justify-between w-full mb-28 2xl:mb-0 2xl:overflow-x-auto 2xl:scrollbar-none sm:flex sm:flex-col sm:overflow-visible">
        <ProjectItem class="transform translate-y-32 2xl:translate-y-0 2xl:scale-75 sm:scale-100 sm:mb-16" href="/achievement/modelView" color="yellow" :img="ProjectItemImage1">
          <template #name>
            {{ $t("pages.home.achievement.content.0.title") }}
          </template>
          <template #year>
            {{ $t("pages.home.achievement.content.0.year") }}
          </template>
        </ProjectItem>
        <ProjectItem class="transform translate-y-16 2xl:translate-y-0 2xl:scale-75 sm:scale-100 sm:mb-16" href="/achievement/hideWordsMan" color="blue" :img="ProjectItemImage2">
          <template #name>
            {{ $t("pages.home.achievement.content.4.title") }}
          </template>
          <template #info>
            {{ $t("pages.home.achievement.content.4.info") }}
          </template>
          <template #year>
            {{ $t("pages.home.achievement.content.4.year") }}
          </template>
        </ProjectItem>
        <ProjectItem href="/achievement/birdsOfLife" class="2xl:scale-75 sm:scale-100 sm:mb-16" color="red" :img="ProjectItemImage3">
          <template #name>
            {{ $t("pages.home.achievement.content.3.title") }}
          </template>
          <template #info>
            {{ $t("pages.home.achievement.content.3.info") }}
          </template>
          <template #year>
            {{ $t("pages.home.achievement.content.3.year") }}
          </template>
        </ProjectItem>
      </div>
      <div class="max-w-4xl mx-auto text-right 2xl:text-center">
        <HrefBottom href="/achievement/">{{ $t("pages.home.achievement.button") }}</HrefBottom>
      </div>
    </div>

    <div class="wrap-6">
      <PartTitle class="mt-0 mb-5 ml-0">
        <template #en>Event</template>
        <template #title>{{ $t("pages.home.Event.title") }}</template>
      </PartTitle>

      <div class="flex flex-col justify-between max-w-4xl mx-auto mb-8">
        <div ref="items" class="mb-8" v-for="(event, index) in current">
          <EventItem :href="'/eventRecord/' + event.slug" :img="event.img" :index="index">
            <template #name>{{ event.title }}</template>
            <template #date>{{ event.date }}</template>
            <template #place>{{ event.place }}</template>
          </EventItem>
        </div>
      </div>
      <div class="text-center">
        <HrefBottom href="/eventRecord/">{{ $t("pages.home.Event.button") }}</HrefBottom>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
