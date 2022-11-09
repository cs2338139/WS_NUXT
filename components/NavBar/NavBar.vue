<script setup>
import { useI18n } from 'vue-i18n';
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";

const { locale, setLocale } = useI18n();
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
  <nav class="top-0 w-full nav-h dev">
    <NavMenu class="max-w-nav dev">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:120px" />
      </template>

      <NavMenuItem href="/about"> {{ $t('nav.about') }}</NavMenuItem>

      <NavMenuList href="/achievement" menuListOffset="-translate-x-4">
        <template #menuName> {{ $t('nav.achievement.title') }}</template>
        <MenuListItem href="/achievement/modelView">{{ $t('nav.achievement.child.modelView') }}</MenuListItem>
        <MenuListItem href="/achievement/islandOfBaku">{{ $t('nav.achievement.child.islandOfBaku') }}</MenuListItem>
        <MenuListItem href="/achievement/game1940">{{ $t('nav.achievement.child.game1940') }}</MenuListItem>
        <MenuListItem href="/achievement/birdsOfLife">{{ $t('nav.achievement.child.birdsOfLife') }}</MenuListItem>
        <MenuListItem href="/achievement/hideWordsMan">{{ $t('nav.achievement.child.hideWordsMan') }}</MenuListItem>
      </NavMenuList>

      <NavMenuItem href="/eventRecord"> {{ $t('nav.eventRecord') }}</NavMenuItem>

      <li class=" text-center max-h-7">
        <button @click="ChangeLang()">
          <div class=" px-4 py-2 bg-white rounded-full font-bold">
            {{ $t('nav.lang') }}
          </div>
        </button>
      </li>

    </NavMenu>
  </nav>
</template>

<style scoped>
.nav-h {
  height: 230px;
}

.max-w-nav
{
  max-width:88%
}
</style>
