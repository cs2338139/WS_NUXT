<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
import NavPopup from "./src/NavPopup.vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();
const logoImage = new URL("../../public/Image/UI/LOGOsmall.svg", import.meta.url).href;

const navBar = ref();
const narButton = ref();
const topButton = ref();
const { currentWidth } = useGetWidthLevel();

function ChangeLang() {
  console.log(locale.value);
  if (locale.value === "en") {
    setLocale("zh");
  } else if (locale.value === "zh") {
    setLocale("en");
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
  if (currentWidth.value === "3xl") {
    if (window.top.scrollY > navBar.value.offsetHeight) {
      narButton.value.style.display = "block";
    } else {
      narButton.value.style.display = "none";
    }
  } else {
    if (window.top.scrollY > navBar.value.offsetHeight) {
      topButton.value.style.display = "block";
    } else {
      topButton.value.style.display = "none";
    }
  }
}

function OpenNavPopup() {
  popupEnable.value = true;
  document.body.style.overflow = "hidden";
}

function ScrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const popupEnable = ref(false);
</script>

<template>
  <div>
    <nav class="top-0 w-full h-32 bg-custom-0" ref="navBar">
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

        <button @click="ChangeLang()" class="ml-1">
          <li class="flex justify-center items-center aspect-square w-14 text-2xl font-bold text-center bg-white border-2 border-black">
            {{ $t("nav.lang") }}
          </li>
        </button>
      </NavMenu>
    </nav>
    <button class="fixed hidden p-4 overflow-hidden bg-white border-2 border-black rounded-full right-5 top-5 w-14 aspect-square" ref="narButton" @click="OpenNavPopup">
      <div class="flex flex-col justify-between w-full h-full">
        <hr class="border border-black" />
        <hr class="border border-black" />
        <hr class="border border-black" />
      </div>
    </button>

    <button class="fixed hidden right-5 bottom-20 w-14 aspect-square" ref="topButton" @click="ScrollToTop">
      <img class="" src="~/public/Image/UI/ToTop.svg" alt="" />
    </button>
    <NavPopup @close="ClosePopupPanel" v-if="popupEnable" @function="ChangeLang()"> </NavPopup>
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
