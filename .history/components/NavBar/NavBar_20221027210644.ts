<script setup>
import { useI18n } from 'vue-i18n';
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";

const { locale, setLocale } = useI18n();
// const homeImage = new URL("/assets/Image/UI/logo.png", import.meta.url).href;
// let lang: string = "EN"
// function ChangeLangTS() {
//   console.log(this.locale);
// }


</script>

<script>
export default {
  data() {
    return {
      // lang: "EN",
    };
  },
  methods: {
    // ChangeLang() {
    //   // if (document.documentElement.lang === "zh-TW") {
    //   //   document.documentElement.lang = "en";
    //   //   this.lang = "中文";
    //   // }
    //   // else if (document.documentElement.lang === "en") {
    //   //   document.documentElement.lang = "zh-TW";
    //   //   this.lang = "EN";
    //   // }
    //   console.log(this.locale);
    //   if (this.locale === "en") {
    //     this.setLocale("zh-TW");
    //     this.lang = "EN";
    //     // head
    //     // document.documentElement.lang = "zh-TW";
    //   } else if (this.locale === "zh-TW") {
    //     this.setLocale("en");
    //     this.lang = "中文";
    //     // document.documentElement.lang = "en";
    //   }
    // },
  }
}; 1
</script>

<template>
  <nav class="fixed top-0 w-full text-item">
    <NavMenu _class="h-32">
      <template #logo>
        <!-- <Logo href="/" :img="homeImage" width="width:120px" /> -->
      </template>

      <NavMenuItem href="/about">關於計畫</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-4">
        <template #menuName>計畫成果</template>
        <MenuListItem href="/projects/modelView">3D掃描<template #en>3D Scanning and Modeling</template></MenuListItem>
        <MenuListItem href="/projects/islandOfBaku">夢獸之島<template #en>Island of Baku</template></MenuListItem>
        <MenuListItem href="/projects/game1940">1940<template #en>1940</template></MenuListItem>
        <MenuListItem href="/projects/birdOfLife">生命之鳥<template #en>Birds of Life－Wu Ying-tao</template></MenuListItem>
        <MenuListItem href="/projects/hideWordMan">藏字人<template #en>Hide Word Man</template></MenuListItem>
      </NavMenuList>

      <li class=" text-center max-h-7">
        <!-- <button @click="ChangeLangTS()">
          <div class=" px-4 py-2 bg-white rounded-full font-bold">
            {{lang}}
          </div>
        </button> -->
      </li>



    </NavMenu>
    <div class="h-10 bg-nav-image mt-28"></div>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer component {
  .text-item {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
