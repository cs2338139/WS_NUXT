<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <div class="">
    <div class="relative mr-8 mb-10">
      <NuxtLink :to="href" target="_blank" class="buttonImage bg-no-repeat py-3 px-8">
        <span class="text-xl sm:text-base"><slot /></span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.buttonImage {
  background-image: url("~/public/image/UI/Download.svg");
  background-size: 100% 100%;
}
</style>
