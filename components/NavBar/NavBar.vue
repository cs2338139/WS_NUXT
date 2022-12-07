<script setup>
import { useI18n } from "vue-i18n";
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
import NavPopup from "./src/NavPopup.vue";

const { locale, setLocale } = useI18n();
const logoImage = ref("/assets/Image/UI/logo.png");

const navBar = ref();
const narButton = ref();

function ChangeLang() {
  if (this.locale === "en") {
    this.setLocale("zh");
  } else if (this.locale === "zh") {
    this.setLocale("en");
  }
}

function ClosePopupPanel() {
  popupEnable.value = false;
  document.body.style.overflow = "scroll";
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

function onScroll() {
  if (window.top.scrollY > navBar.value.offsetHeight) {
    narButton.value.style.display = "block";
  } else {
    narButton.value.style.display = "none";
  }
}

function OpenNavPopup() {
  // console.log(navBar.value.clientHeight);
  popupEnable.value = true;
  document.body.style.overflow = "hidden";
}
const popupEnable = ref(false);
</script>

<template>
  <div>
    <nav class="top-0 w-full bg-custom-0 h-32" ref="navBar">
      <NavMenu class="top-0">
        <template #logo>
          <Logo href="/" :img="logoImage" width="width:120px" />
        </template>

        <NavMenuItem href="/about"> {{ $t("nav.about") }}</NavMenuItem>

        <NavMenuList href="/achievement" menuListOffset="-translate-x-20">
          <template #menuName> {{ $t("nav.achievement.title") }}</template>
          <MenuListItem href="/achievement/modelView">{{ $t("nav.achievement.child.modelView") }}</MenuListItem>
          <MenuListItem href="/achievement/islandOfBaku">{{ $t("nav.achievement.child.islandOfBaku") }}</MenuListItem>
          <MenuListItem href="/achievement/game1940">{{ $t("nav.achievement.child.game1940") }}</MenuListItem>
          <MenuListItem href="/achievement/birdsOfLife">{{ $t("nav.achievement.child.birdsOfLife") }}</MenuListItem>
          <MenuListItem href="/achievement/hideWordsMan">{{ $t("nav.achievement.child.hideWordsMan") }}</MenuListItem>
        </NavMenuList>
        <NavMenuItem href="/eventRecord"> {{ $t("nav.eventRecord") }}</NavMenuItem>

        <button @click="ChangeLang()">
          <li class="px-4 py-3 text-2xl font-bold text-center bg-white border-2 border-black">
            {{ $t("nav.lang") }}
          </li>
        </button>
      </NavMenu>
    </nav>
    <button class="fixed right-5 top-5 w-14 aspect-square border-black border-2 rounded-full p-4 overflow-hidden bg-white hidden" ref="narButton" @click="OpenNavPopup">
      <div class="flex-col flex justify-between w-full h-full">
        <hr class="border border-black" />
        <hr class="border border-black" />
        <hr class="border border-black" />
      </div>
    </button>
    <NavPopup @close="ClosePopupPanel" v-if="popupEnable" @function="ChangeLang"> </NavPopup>
  </div>
</template>

<style scoped>
.nav-h {
  height: 230px;
}

.max-w-nav {
  max-width: 88%;
}
</style>
