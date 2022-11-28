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
        <div class="flex flex-row items-center justify-between h-full mx-auto my-0 max-w-8xl ">
          <img :src="logoImage" style="width:120px" />

          <div class="flex flex-col h-1/2 justify-between">
            <FootMenuItem href="">國立臺灣文學館著作所有權©2020</FootMenuItem>
            <FootMenuItem href="">地址：70041臺南市中西區中正路1號</FootMenuItem>
            <FootMenuItem href="">電話：(06)221-7201</FootMenuItem>
            <FootMenuItem href="">傳真：(06)222-6115</FootMenuItem>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
