<script setup>
import OpenButton from "~~/components/ProjectPage/src/OpenButton.vue";
import Item4 from "~~/components/ProjectPage/src/Item4.vue";
import modelPanelCategories from "~~/components/ProjectPage/src/modelPanelCategories.vue";
import modelPanelOfYear from "~~/components/ProjectPage/src/modelPanelOfYear.vue";
import { useI18n } from "vue-i18n";

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
        if (models.nodes[i].models.image != null) dataCH.img = models.nodes[i].models.image.sourceUrl;
        if (models.nodes[i].models.name != null) dataCH.name = models.nodes[i].models.name;
        if (models.nodes[i].models.about != null) dataCH.words.push(models.nodes[i].models.about);
        dataCH.year = categories.value[j];
        if (models.nodes[i].models.link != null) dataCH.link = models.nodes[i].models.link;
        if (models.nodes[i].models.size === null) {
          dataCH.size = "--";
        } else {
          dataCH.size = models.nodes[i].models.size;
        }
        if (models.nodes[i].models.owner != null) dataCH.owner = models.nodes[i].models.owner;
        if (models.nodes[i].models.more != null) dataCH.more = models.nodes[i].models.more;

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
        if (models.nodes[i].models.image != null) dataEN.img = models.nodes[i].models.image.sourceUrl;
        if (models.nodes[i].models.enName != null) dataEN.name = models.nodes[i].models.enName;
        if (models.nodes[i].models.enAbout != null) dataEN.words.push(models.nodes[i].models.enAbout);
        dataEN.year = categories.value[j];
        if (models.nodes[i].models.link != null) dataEN.link = models.nodes[i].models.link;
        if (models.nodes[i].models.size === null) {
          dataEN.size = "--";
        } else {
          dataEN.size = models.nodes[i].models.size;
        }
        if (models.nodes[i].models.enOwner != null) dataEN.owner = models.nodes[i].models.enOwner;
        if (models.nodes[i].models.more != null) dataEN.more = models.nodes[i].models.more;

        modelsCategories.value[1][j].push(dataEN);
      }
    }
  }
}

if (locale.value === "en") {
  Object.assign(current, modelsCategories.value[1]);
} else if (locale.value === "zh") {
  Object.assign(current, modelsCategories.value[0]);
}

const yearButton = ref();
const years = ref([]);
const currentYear = ref(0);
const modelPanelOfYearElement = ref();

const viewMode = reactive({
  data: {
    buttonWord: t("pages.home.child.achievement.child.modelView.result.button.1"),
    buttonIcon: "－",
    viewMore: true,
  },
});

function SetCurrentYear(i) {
  currentYear.value = i;
}

function SwitchYear() {
  for (let j = 0; j < years.value.length; j++) {
    if (j != currentYear.value) {
      years.value[j].style.display = "none";
    } else {
      years.value[j].style.display = "flex";
      ControlViewBoxHeight(currentYear.value, viewMode.data.viewMore);
    }
  }
}

onMounted(() => {
  yearButton.value.click(currentYear.value);
  watchEffect(() => {
    SwitchYear();
  });
  setTimeout(() => {
    ViewSwitch();
  }, 0.05);
});

function ViewSwitch() {
  if (viewMode.data.viewMore) {
    viewMode.data.viewMore = false;
    viewMode.data.buttonIcon = "＋";
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.0");
  } else {
    viewMode.data.viewMore = true;
    viewMode.data.buttonIcon = "－";
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.result.button.1");
  }
  ControlViewBoxHeight(currentYear.value, viewMode.data.viewMore);
}

function ControlViewBoxHeight(index, enabled) {
  modelPanelOfYearElement.value[index].ControlViewBoxHeight(enabled);
}

function SentData(i, index) {
  emits("open", current[i], index);
}
</script>

<template>
  <div>
    <modelPanelCategories :categories="categories" @function="SetCurrentYear" ref="yearButton"> </modelPanelCategories>
  </div>

  <div>
    <div v-for="(yearModels, i) in current" ref="years">
      <modelPanelOfYear :models="yearModels" :year="i" @function="SentData" ref="modelPanelOfYearElement"></modelPanelOfYear>
    </div>
    <div class="text-right mt-16">
      <OpenButton @function="ViewSwitch()">
        {{ viewMode.data.buttonWord }} <template #icon>{{ viewMode.data.buttonIcon }}</template>
      </OpenButton>
    </div>
  </div>
</template>
