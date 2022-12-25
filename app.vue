<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import FootBar from "./components/FootBar/FootBar.vue";
import { gsap } from "gsap";
// import { useI18n } from 'vue-i18n'
// const { locale, getLocaleCookie } = useI18n()

// const defaultLocaleCode = locale.value

// locale.value = getLocaleCookie() ?? defaultLocaleCode
</script>

<template>
  <div class="relative z-10 mb-10 ">
    <NavBar />
  </div>

  <div class="relative min-h-screen md:mt-44 pb-footer">
    <NuxtPage />
  </div>

  <div class="relative -mt-footer">
    <FootBar />
  </div>
</template>

<style></style>
