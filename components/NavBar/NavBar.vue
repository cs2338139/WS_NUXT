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
    };
  },
  methods: {
    ChangeLang() {
      console.log(this.locale);
      if (this.locale === "en") {
        this.setLocale("zh");
      } else if (this.locale === "zh") {
        this.setLocale("en");
      }
    },
  }
}; 1
</script>

<template>
  <nav class="fixed top-0 w-full text-item">
    <NavMenu _class="h-32">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:120px" />
      </template>

      <NavMenuItem href="/about"> {{$t('nav.about')}}</NavMenuItem>

      <NavMenuList href="/achievement" menuListOffset="-translate-x-4">
        <template #menuName> {{$t('nav.achievement.title')}}</template>
        <MenuListItem href="/achievement/modelView">{{$t('nav.achievement.child.modelView')}}</MenuListItem>
        <MenuListItem href="/achievement/islandOfBaku">{{$t('nav.achievement.child.islandOfBaku')}}</MenuListItem>
        <MenuListItem href="/achievement/game1940">{{$t('nav.achievement.child.game1940')}}</MenuListItem>
        <MenuListItem href="/achievement/birdsOfLife">{{$t('nav.achievement.child.birdsOfLife')}}</MenuListItem>
        <MenuListItem href="/achievement/hideWordsMan">{{$t('nav.achievement.child.hideWordsMan')}}</MenuListItem>
      </NavMenuList>

      <NavMenuItem href="/eventRecord"> {{$t('nav.eventRecord')}}</NavMenuItem>

      <li class=" text-center max-h-7">
        <button @click="ChangeLang()">
          <div class=" px-4 py-2 bg-white rounded-full font-bold">
            {{$t('nav.lang')}}
          </div>
        </button>
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
