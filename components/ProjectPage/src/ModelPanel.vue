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
const current = reactive([]);

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
  Object.assign(current, modelsCategories.value[1]);
} else if (locale.value === "zh") {
  Object.assign(current, modelsCategories.value[0]);
}

const yearButton = ref();
const years = ref([]);
const items = ref([]);
const itemsOfYear = ref([]);
const viewMode = reactive({
  data: {
    buttonWord: t("pages.home.child.achievement.child.modelView.result.button.1"),
    viewMore: true,
  },
});

function SwitchYear(i) {
  for (let j = 0; j < years.value.length; j++) {
    if (j != i) {
      years.value[j].style.display = "none";
    } else {
      years.value[j].style.display = "block";
    }
  }
}

onMounted(() => {
  yearButton.value.click(0);
  SetItemOfYear();
  ViewSwitch();
});

function SetItemOfYear() {
  let x = 0;
  for (let i = 0; i < years.value.length; i++) {
    itemsOfYear.value.push([]);
    for (let j = 0; j < modelsCategories.value[1][i].length; j++) {
      itemsOfYear.value[i].push(items.value[x]);
      x++;
    }
  }
}

function ViewSwitch() {
  if (viewMode.data.viewMore) {
    viewMode.data.viewMore = false;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.0");

    for (let i = 0; i < itemsOfYear.value.length; i++) {
      for (let j = 10; j < itemsOfYear.value[i].length; j++) {
        itemsOfYear.value[i][j].View(false);
      }
    }
  } else {
    viewMode.data.viewMore = true;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.1");

    for (let i = 0; i < itemsOfYear.value.length; i++) {
      for (let j = 0; j < itemsOfYear.value[i].length; j++) {
        itemsOfYear.value[i][j].View(true);
      }
    }
  }
}

function SentData(i, index) {
  console.log(i, index);
  emits("open", current[i], index);
}
</script>

<template>
  <div>
    <modelPanelCategories :categories="categories" @function="SwitchYear" ref="yearButton"> </modelPanelCategories>
  </div>

  <div>
    <div v-for="(year, i) in current" ref="years">
      <div class="flex flex-wrap justify-between">
        <Item4 v-for="(model, index) in year" ref="items" :img="model.img" @function="SentData(i, index)">
          <template #name>{{ model.name }}</template>
          <template #owner>{{ model.owner }}</template>
        </Item4>
      </div>
    </div>
    <div class="text-right mt-16">
      <FunctionButton @function="ViewSwitch()">{{ viewMode.data.buttonWord }}</FunctionButton>
    </div>
  </div>
</template>
