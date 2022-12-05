<script setup>
import FunctionButton from "~~/components/ProjectPage/src/FunctionButton.vue";
import Item4 from "~~/components/ProjectPage/src/Item4.vue";

const { locale, setLocale, t } = useI18n();
const emits = defineEmits(["open"]);
const variables = { limit: 80 };
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

    dataCH.img = writers.nodes[i].literati.image.sourceUrl;
    dataCH.sName = writers.nodes[i].literati.name;
    dataCH.words.push(writers.nodes[i].literati.about);
    dataCH.year = writers.nodes[i].literati.writeryear;
    dataCH.name = dataCH.sName + " （" + dataCH.year + "）";

    ch.push(dataCH);

    let dataEN = {
      img: "",
      name: "",
      sName: "",
      words: [],
      year: "",
    };

    dataEN.img = writers.nodes[i].literati.image.sourceUrl;
    dataEN.sName = writers.nodes[i].literati.enName;
    dataEN.words.push(writers.nodes[i].literati.enAbout);
    dataEN.year = writers.nodes[i].literati.writeryear;
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
    buttonWord: t("pages.home.child.achievement.child.modelView.result.button.1"),
    viewMore: true,
  },
});

onMounted(() => {
  ViewSwitch();
});

function ViewSwitch() {
  console.log(items.value.length);
  if (viewMode.data.viewMore) {
    viewMode.data.viewMore = false;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.0");
    for (let i = 5; i < items.value.length; i++) {
      items.value[i].View(false);
    }
  } else {
    viewMode.data.viewMore = true;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.1");
    for (let i = 0; i < items.value.length; i++) {
      items.value[i].View(true);
    }
  }
}
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-between">
      <Item4 v-for="(writer, index) in current" ref="items" :img="writer.img" @open="SentData(index)">
        <template #name>{{ writer.sName }}</template>
        <template #owner>{{ writer.year }}</template>
      </Item4>
    </div>
    <div class="text-right mt-16">
      <FunctionButton @function="ViewSwitch()">{{ viewMode.data.buttonWord }}</FunctionButton>
    </div>
  </div>
</template>
