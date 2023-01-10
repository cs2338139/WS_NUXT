<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import FootBar from "./components/FootBar/FootBar.vue";
import LoadingAnimation from "~~/components/AnimationComponents/LoadingAnimation.vue";

</script>

<template>

  <LoadingAnimation></LoadingAnimation>
  <div class="relative z-10 mb-10 ">
    <NavBar />
  </div>

  <div class="relative min-h-screen md:mt-44  sm:mt-24 pb-footer">
    <NuxtPage />
  </div>

  <div class="relative -mt-footer">
    <FootBar />
  </div>
</template>

<style></style>
