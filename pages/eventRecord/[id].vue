<script setup>
const route = useRoute();
const { id } = route.params;
const { locale, setLocale, t } = useI18n();

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
    }
  }
}

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}
</script>

<template></template>
