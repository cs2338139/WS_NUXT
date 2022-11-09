<script setup>
const { locale, setLocale, t } = useI18n();

const query = gql`query getPost($limit: Int!) {
  posts(where: {categoryName: "Literati"}, first: $limit) {
    nodes {
      id
      postId
      title
    }
  }
}`
const variables = { limit: 20 }
const { data } = await useAsyncQuery(query,variables)
const { posts } = data.value;
</script>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        ToNotFound() {
            this.$router.push({
                name: "NotFound",
                params: { pathMatch: this.$route.path.substring(1).split("/") },
                query: this.$route.query,
                hash: this.$route.hash,
            });
        },
    },
    created() {
    },
    mounted() {
    },
    unmounted() {
    },
};
</script>

<template>

    <div v-for="post in posts.nodes">
        <h1>{{ post.title }}</h1>
        <h1>{{ post.id }}</h1>
        <hr />
    </div>
</template>

<style>

</style>