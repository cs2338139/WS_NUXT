<script setup>
import ProjectLayout from "~~/components/ProjectPage/ProjectLayout.vue";
import PartItem from "~~/components/ProjectPage/src/PartItem.vue";
import PartItem4 from "~~/components/ProjectPage/src/PartItem4.vue";
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue";
import Item2 from "~~/components/ProjectPage/src/Item2.vue";

const { locale, setLocale, t } = useI18n();
useHead({
  title: t("pages.home.child.achievement.child.modelView.title"),
});

const projectLayout = ref(null);

const literatiData = reactive([]);
const modellData = reactive([]);

function SentData(datas, i) {
  projectLayout.value.OpenPopupPanel(datas, i);
}

const query = gql`query getPost($limit: Int!) {
  posts(where: {categoryName: "Literati"}, first: $limit) {
      nodes {
        literati {
          about
          enAbout
          enName
          name
          writeryear
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;


const variables = { limit: 100 };
const { data } = await useAsyncQuery(query, variables);
const { posts } = data.value;
</script>

<template>

  <div v-for="post in posts.nodes">
    <h1>{{ post.literati.name }}</h1>
    <h1>{{ post.literati.enName }}</h1>
    <hr />
  </div>

  <div>
    <ProjectLayout ref="projectLayout">
      <template #title>{{ $t("pages.home.child.achievement.child.modelView.info.title") }}</template>
      <template #info>
        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.info.about.title") }}</template>
          <template #word>{{ $t("pages.home.child.achievement.child.modelView.info.about.content.0") }}</template>
        </PartItem>

        <PartItem>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.info.introduction.title") }}</template>
          <template #word>
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.0") }}
            <br />
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.1") }}
            <br />
            {{ $t("pages.home.child.achievement.child.modelView.info.introduction.content.2") }}
          </template>
        </PartItem>

        <PartItemNull>
          <template #title>{{ $t("pages.home.child.achievement.child.modelView.literati.title") }}</template>
          <div class="flex flex-wrap justify-between"></div>
        </PartItemNull>
      </template>
    </ProjectLayout>
  </div>
</template>

<style scoped></style>
