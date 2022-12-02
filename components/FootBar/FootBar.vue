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
            <FootMenuItem href="">{{$t('foot.copyright')}}</FootMenuItem>
            <FootMenuItem href="">{{$t('foot.address')}}</FootMenuItem>
            <FootMenuItem href="">{{$t('foot.tel')}}</FootMenuItem>
            <FootMenuItem href="">{{$t('foot.fax')}}</FootMenuItem>
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
