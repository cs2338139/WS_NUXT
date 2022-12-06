<script setup>
import FunctionButton from "~~/components/ProjectPage/src/FunctionButton.vue";
import Item4 from "~~/components/ProjectPage/src/Item4.vue";
import modelPanelCategories from "~~/components/ProjectPage/src/modelPanelCategories.vue";

const { locale, setLocale, t } = useI18n();
const emits = defineEmits(["open"]);
const variables = { limit: 500 };
const query = gql`
  query getModel($limit: Int!) {
    posts(where: { categoryName: "Result" }, first: $limit) {
      nodes {
        models {
          about
          enAbout
          enName
          enOwner
          link
          more
          name
          owner
          size
          image {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;
const { data: data } = await useAsyncQuery(query, variables);
const { posts: models } = data.value;

const categories = ref();
const modelsCategories = ref([]);
const currentLang = reactive([]);
// const current = reactive({ list: [] });

if (data.value?.posts) {
  GetCategories();
  SetModelsCategories();
}

function GetCategories() {
  let categoriesAll = [];
  for (let i = 0; i < models.nodes.length; i++) {
    categoriesAll.push(models.nodes[i].categories.nodes[0].name);
  }
  categories.value = categoriesAll.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });

  for (let j = 0; j < 2; j++) {
    modelsCategories.value.push([]);
    for (let i = 0; i < categories.value.length; i++) {
      modelsCategories.value[j].push([]);
    }
  }
}

function SetModelsCategories() {
  for (let i = 0; i < models.nodes.length; i++) {
    for (let j = 0; j < categories.value.length; j++) {
      if (models.nodes[i].categories.nodes[0].name === categories.value[j]) {
        let dataCH = {
          img: "",
          name: "",
          words: [],
          year: "",
          link: "",
          size: "",
          owner: "",
          more: "",
        };
        dataCH.img = models.nodes[i].models.image.sourceUrl;
        dataCH.name = models.nodes[i].models.name;
        dataCH.words.push(models.nodes[i].models.about);
        dataCH.year = categories.value[j];
        dataCH.link = models.nodes[i].models.link;
        dataCH.size = models.nodes[i].models.size;
        dataCH.owner = models.nodes[i].models.owner;
        dataCH.more = models.nodes[i].models.more;

        modelsCategories.value[0][j].push(dataCH);

        let dataEN = {
          img: "",
          name: "",
          words: [],
          year: "",
          link: "",
          size: "",
          owner: "",
          more: "",
        };
        dataEN.img = models.nodes[i].models.image.sourceUrl;
        dataEN.name = models.nodes[i].models.enName;
        dataEN.words.push(models.nodes[i].models.enAbout);
        dataEN.year = categories.value[j];
        dataEN.link = models.nodes[i].models.link;
        dataEN.size = models.nodes[i].models.size;
        dataEN.owner = models.nodes[i].models.enOwner;
        dataEN.more = models.nodes[i].models.more;

        modelsCategories.value[1][j].push(dataEN);
      }
    }
  }
  for (let j = 0; j < categories.value.length; j++) {
    if (modelsCategories.value[0][j].length % 5 != 0) {
      let count = 5 - (modelsCategories.value[0][j].length % 5);
      for (let i = 0; i < count; i++) {
        modelsCategories.value[0][j].push(data);
        modelsCategories.value[1][j].push(data);
      }
    }
  }

  console.log(modelsCategories.value);
}

if (locale.value === "en") {
  // currentLang.value = modelsCategories.value[1];
  Object.assign(currentLang, modelsCategories.value[1]);
} else if (locale.value === "zh") {
  // currentLang.value = modelsCategories.value[0];

  Object.assign(currentLang, modelsCategories.value[0]);
}

function SwitchYear(i) {
  // current.list = currentLang.value[i];
  // console.log(current.list);
}

const button = ref();
const years = ref([]);
const items = ref([]);
const viewMode = reactive({
  data: {
    buttonWord: t("pages.home.child.achievement.child.modelView.result.button.1"),
    viewMore: true,
  },
});

onMounted(() => {
  button.value.click(0);
  // ViewSwitch();
});

function ViewSwitch() {
  if (viewMode.data.viewMore) {
    viewMode.data.viewMore = false;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.0");
    for (let i = 10; i < items.value.length; i++) {
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
    <modelPanelCategories :categories="categories" @function="SwitchYear" ref="button"> </modelPanelCategories>
  </div>

  <div>
    <div v-for="year in currentLang" ref="years" class="flex flex-wrap justify-between dev-pink">
        <Item4 v-for="(model, index) in year" ref="items" :img="model.img" @open="SentData(index)">
          <template #name>{{ model.name }}</template>
          <template #owner>{{ model.owner }}</template>
        </Item4>
    </div>
    <div class="text-right mt-16">
      <FunctionButton @function="ViewSwitch()">{{ viewMode.data.buttonWord }}</FunctionButton>
    </div>
  </div>
</template>
