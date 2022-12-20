<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <div class="relative mr-8">
    <NuxtLink :to="href" target="_blank" class="buttonImage bg-no-repeat py-3 px-8">
      <span class="text-xl"><slot /></span>
    </NuxtLink>
  </div>
</template>

<style scoped>
/* .triangle2 {
    border-color: transparent transparent #6395CE #6395CE;
    border-style: solid solid solid solid;

    border-width: 4px 4px 4px 4px
} */

.buttonImage {
  background-image: url("~/public/image/UI/Download.svg");
  background-size: 100% 100%;
}
</style>
