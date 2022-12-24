<script setup>
import ProjectItem_3 from "~~/components/ProjectItem_3/ProjectItem_3.vue";
import PartTitle from "~~/components/PartTitle/PartTitle.vue";
// import PageButton from "~~/components/PageButton/PageButton.vue";

const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.eventRecord.title"),
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

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}

</script>

<template>
  <div class="wrap-6">
    <PartTitle class="mt-0 mb-14 ml-0">
      <template #en>Event</template>
      <template #title>{{ $t("pages.home.child.eventRecord.info.title") }}</template>
    </PartTitle>

    <div class="flex flex-col justify-between mx-auto mb-10">
      <div ref="items" v-for="(event, index) in current">
        <ProjectItem_3 :href="'/eventRecord/' + event.slug" :img="event.img" :index="index">
          <template #name>{{ event.title }}</template>
          <template #date>{{ event.date }}</template>
          <template #place>{{ event.place }}</template>
        </ProjectItem_3>
      </div>
    </div>

    <!-- <PageButton
      ><template #ButtonName>{{ t("pages.home.child.eventRecord.info.button") }}</template>
    </PageButton> -->
  </div>
</template>

<style></style>
