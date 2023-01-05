<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
import NavMenuPhone from "./src/NavMenuPhone.vue";
import NavPopup from "./src/NavPopup.vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();
const logoImage = new URL("../../public/Image/UI/LOGOsmall.svg", import.meta.url).href;

const navBar = ref();
const navButton = ref();
const topButton = ref();
const aspectTarget = ref();

const { currentWidth } = useGetWidthLevel();

function ChangeLang() {
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
  if (window.top.scrollY > navBar.value.offsetHeight) {
    if (currentWidth.value === "3xl") {
      navButton.value.style.display = "block";
    } else {
      topButton.value.style.display = "block";
    }
  } else {
    navButton.value.style.display = "none";
    topButton.value.style.display = "none";
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

onMounted(() => {
  FirstSetAspectValue();
  window.addEventListener("resize", ReSetAspectValue);
  window.addEventListener("resize", ReSetNavButton);
  window.addEventListener("resize", ReSetTopButton);
});

function FirstSetAspectValue() {
  let CheckAspect = setInterval(() => {
    if (aspectTarget.value) {
      if (aspectTarget.value.offsetWidth > 10) {
        ReSetAspectValue();
        clearInterval(CheckAspect);
      }
    }
  }, 0);

  let CheckNavButton = setInterval(() => {
    if (navButton.value) {
      if (navButton.value.offsetWidth > 10) {
        ReSetNavButton();
        clearInterval(CheckNavButton);
      }
    }
  }, 0);

  let CheckTopButton = setInterval(() => {
    if (topButton.value) {
      if (topButton.value.offsetWidth > 10) {
        ReSetTopButton();
        clearInterval(CheckTopButton);
      }
    }
  }, 0);
}

function ReSetAspectValue() {
  if (aspectTarget.value && aspectTarget.value.offsetWidth > 10) {
    aspectTarget.value.style.height = aspectTarget.value.offsetWidth + "px";
  }
}
function ReSetNavButton() {
  if (navButton.value && navButton.value.offsetWidth > 10) {
    navButton.value.style.height = navButton.value.offsetWidth + "px";
  }
}
function ReSetTopButton() {
  if (topButton.value && topButton.value.offsetWidth > 10) {
    topButton.value.style.height = topButton.value.offsetWidth + "px";
  }
}
</script>

<template>
  <div>
    <nav class="top-0 w-full h-32 bg-custom-0 md:fixed sm:h-20" ref="navBar">
      <NavMenu class="top-0 md:hidden">
        <template #logo>
          <Logo href="/" :img="logoImage" class="w-32" />
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

        <button @click="ChangeLang()" class="ml-1 mb-1">
          <li class="flex items-center justify-center text-lg font-bold text-center bg-white border border-black w-10" ref="aspectTarget">
            {{ $t("nav.lang") }}
          </li>
        </button>
      </NavMenu>

      <NavMenuPhone class="hidden md:block" @function="OpenNavPopup">
        <template #logo>
          <Logo href="/" :img="logoImage" class="w-32 sm:w-20" />
        </template>
      </NavMenuPhone>
    </nav>

    <button class="fixed hidden p-4 overflow-hidden bg-white border-2 border-black rounded-full right-5 top-5 w-14" ref="navButton" @click="OpenNavPopup">
      <div class="flex flex-col justify-between w-full h-full">
        <hr class="border border-black" />
        <hr class="border border-black" />
        <hr class="border border-black" />
      </div>
    </button>

    <button class="fixed hidden right-5 bottom-20 w-14" ref="topButton" @click="ScrollToTop">
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
