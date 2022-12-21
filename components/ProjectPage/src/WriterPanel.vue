<script setup>
import OpenButton from "~~/components/ProjectPage/src/OpenButton.vue";
import Item2 from "~~/components/ProjectPage/src/Item2.vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale, t } = useI18n();
const emits = defineEmits(["open"]);
const variables = { limit: 50 };
const query = gql`
  query getWriter($limit: Int!) {
    posts(where: { categoryName: "Literati" }, first: $limit) {
      nodes {
        literati {
          about
          name
          enAbout
          enName
          writeryear
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
const { data: data } = await useAsyncQuery(query, variables);
const { posts: writers } = data.value;

const ch = reactive([]);
const en = reactive([]);
const current = reactive([]);

if (data.value?.posts) {
  for (let i = 0; i < writers.nodes.length; i++) {
    let dataCH = {
      img: "",
      name: "",
      sName: "",
      words: [],
      year: "",
    };

    if (writers.nodes[i].literati.image != null) dataCH.img = writers.nodes[i].literati.image.sourceUrl;
    if (writers.nodes[i].literati.name != null) dataCH.sName = writers.nodes[i].literati.name;
    if (writers.nodes[i].literati.about != null) dataCH.words.push(writers.nodes[i].literati.about);
    if (writers.nodes[i].literati.writeryear != null) dataCH.year = writers.nodes[i].literati.writeryear;
    dataCH.name = dataCH.sName + " （" + dataCH.year + "）";

    ch.push(dataCH);

    let dataEN = {
      img: "",
      name: "",
      sName: "",
      words: [],
      year: "",
    };

    if (writers.nodes[i].literati.image != null) dataEN.img = writers.nodes[i].literati.image.sourceUrl;
    if (writers.nodes[i].literati.enName != null) dataEN.sName = writers.nodes[i].literati.enName;
    if (writers.nodes[i].literati.enAbout != null) dataEN.words.push(writers.nodes[i].literati.enAbout);
    if (writers.nodes[i].literati.writeryear != null) dataEN.year = writers.nodes[i].literati.writeryear;
    dataEN.name = dataEN.sName + " （" + dataEN.year + "）";

    en.push(dataEN);
  }
  for (let i = 0; i < 2; i++) {
    ch.push(data);
    en.push(data);
  }
}

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}

function SentData(i) {
  emits("open", current, i);
}

const items = ref([]);
const viewMode = reactive({
  data: {
    buttonWord: t("pages.home.child.achievement.child.modelView.literati.button.1"),
    buttonIcon: "-",
    viewMore: true,
  },
});

onMounted(() => {
  ViewSwitch();
});

function ViewSwitch() {
  if (viewMode.data.viewMore) {
    viewMode.data.viewMore = false;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.literati.button.0");
    viewMode.data.buttonIcon = "+";
    for (let i = 5; i < items.value.length; i++) {
      items.value[i].View(false);
    }
  } else {
    viewMode.data.viewMore = true;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.literati.button.1");
    viewMode.data.buttonIcon = "-";
    for (let i = 0; i < items.value.length; i++) {
      items.value[i].View(true);
    }
  }
}
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-between">
      <Item2 v-for="(writer, index) in current" ref="items" :img="writer.img" @open="SentData(index)">
        <template #name>{{ writer.sName }}</template>
        <template #year>（{{ writer.year }}）</template>
      </Item2>
    </div>
    <div class="text-right mt-16">
      <OpenButton @function="ViewSwitch()"
        >{{ viewMode.data.buttonWord }} <template #icon>{{ viewMode.data.buttonIcon }}</template></OpenButton
      >
    </div>
  </div>
</template>
