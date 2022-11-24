<script setup>
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
const { data } = await useAsyncQuery(query, variables)
const { posts } = data.value;
</script>


<template>
    <div>{{ posts.nodes.length }}</div>

    <div v-for="post in posts.nodes">
        <h1>{{ post.title }}</h1>
        <h1>{{ post.id }}</h1>
        <hr />
    </div>
</template>
