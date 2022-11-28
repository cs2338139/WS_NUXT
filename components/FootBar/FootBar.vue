<script setup>
import FootMenuItem from "./src/FootMenuItem.vue";
</script>

<script>
export default {
  data() {
    return {
      logoImage: "/assets/Image/UI/logo.png"
    };
  },
};
</script>

<template>
  <footer>
    <div class="h-40 bg-gray-300">
      <div class="w-full relative h-24 ">
        <ul class="flex flex-row items-center justify-between h-full mx-auto my-0 max-w-8xl ">
          <div class="flex flex-col h-1/2 justify-between">
            <FootMenuItem href="">承辦單位：可睿創意</FootMenuItem>
            <FootMenuItem href="">備註：本網站不支援IE</FootMenuItem>
            <FootMenuItem href="">備註：本網站不支援IE</FootMenuItem>
            <FootMenuItem href="">備註：本網站不支援IE</FootMenuItem>
          </div>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
