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
}

if (locale.value === "en") {
  Object.assign(current, en);
} else if (locale.value === "zh") {
  Object.assign(current, ch);
}

function SentData(i) {
  emits("open", current, i);
}

const box = ref();
const fakeElement = ref();
const { fakeCount, countOfRows, isFirstFakeCheck } = useSetFakeElement(box, fakeElement);

const viewMode = reactive({
  data: {
    buttonWord: t("pages.home.child.achievement.child.modelView.literati.button.1"),
    buttonIcon: "-",
    viewMore: true,
  },
});

onMounted(() => {
  watch(isFirstFakeCheck, () => {
    // console.log(isFirstFakeCheck.value);
    ViewSwitch();
  });
});

function ViewSwitch() {
  if (viewMode.data.viewMore) {
    viewMode.data.viewMore = false;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.literati.button.0");
    viewMode.data.buttonIcon = "＋";
  } else {
    viewMode.data.viewMore = true;
    viewMode.data.buttonWord = t("pages.home.child.achievement.child.modelView.literati.button.1");
    viewMode.data.buttonIcon = "－";
  }
  ControlViewBoxHeight(viewMode.data.viewMore);
}

function ControlViewBoxHeight(enabled) {
  if (enabled) {
    box.value.style.height = "auto";
  } else {
    box.value.style.height = box.value.children[0].getBoundingClientRect().height + "px";
  }
}
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-between overflow-hidden" ref="box">
      <div v-for="(writer, index) in current" class="lg:scale-90">
        <Item2 :img="writer.img" @open="SentData(index)" :isWriter="true">
          <template #name>{{ writer.sName }}</template>
          <template #year>（{{ writer.year }}）</template>
        </Item2>
      </div>
      <div v-for="index in fakeCount" class="lg:scale-90">
        <Item2 ref="fakeElement"></Item2>
      </div>
    </div>
    <div class="mt-16 text-right">
      <OpenButton @function="ViewSwitch()"
        >{{ viewMode.data.buttonWord }} <template #icon>{{ viewMode.data.buttonIcon }}</template></OpenButton
      >
    </div>
  </div>
</template>
