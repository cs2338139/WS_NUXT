<script setup>
import HrefButton from "~~/components/NavBar/src/HrefButton.vue";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
const { currentWidth } = useGetWidthLevel();

const vh = ref();
function CheckVhView() {
  vh.value = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh.value}px`);
}

CheckVhView();
let timeoutID = window.setInterval(() => CheckVhView(), 100);
window.addEventListener("resize", () => {
  CheckVhView();
});

const aspectTarget1 = ref();
const aspectTarget2 = ref();

onMounted(() => {
  FirstSetAspectValue();
  window.addEventListener("resize", ReSetAspectValue1);
  window.addEventListener("resize", ReSetAspectValue2);
});

function FirstSetAspectValue() {
  let CheckAspect1 = setInterval(() => {
    if (aspectTarget1.value) {
      if (aspectTarget1.value.offsetWidth > 10) {
        ReSetAspectValue1();
        clearInterval(CheckAspect1);
      }
    }
  }, 0);
  let CheckAspect2 = setInterval(() => {
    if (aspectTarget2.value) {
      if (aspectTarget2.value.offsetWidth > 10) {
        ReSetAspectValue2();
        clearInterval(CheckAspect2);
      }
    }
  }, 0);
}

function ReSetAspectValue1() {
  if (aspectTarget1.value && aspectTarget1.value.offsetWidth > 10) {
    aspectTarget1.value.style.height = aspectTarget1.value.offsetWidth + "px";
  }
}

function ReSetAspectValue2() {
  if (aspectTarget2.value && aspectTarget2.value.offsetWidth > 10) {
    aspectTarget2.value.style.height = aspectTarget2.value.offsetWidth + "px";
  }
}
</script>

<template>
  <div class="fixed bottom-0 left-0 z-30 w-full panel bg-custom-0">
    <div class="absolute right-5 top-5">
      <button @click="$emit('close')" class="flex items-center justify-center w-12 m-2 bg-white border border-black rounded-full" ref="aspectTarget1">
        <ion-icon name="close-outline" class="text-4xl"></ion-icon>
      </button>
    </div>
    <div class="flex items-center justify-center w-full h-full">
      <div class="flex justify-between max-w-5xl w-full h-4/5 md:flex-col md:max-w-xl sm:px-10">
        <div class="w-2/5 md:w-4/5 sm:w-4/5" v-if="currentWidth === '3xl' || currentWidth === '2xl' || currentWidth === 'xl' || currentWidth === 'lg'">
          <img src="~/public/Image/UI/LOGOlargeCH.svg" v-if="locale === 'zh'" />
          <img src="~/public/Image/UI/LOGOlargeEN.svg" v-if="locale === 'en'" />
        </div>
        <div class="w-2/5 md:w-4/5 sm:w-4/5" v-if="currentWidth === 'md' || currentWidth === 'sm'">
          <img src="~/public/Image/UI/LOGOlargeCH.svg" v-if="locale === 'zh'" />
          <img src="~/public/Image/UI/LOGOlargeEN.svg" v-if="locale === 'en'" />
        </div>
        <div class="self-end h-3/4 w-2/5 md:w-full md:self-start md:h-3/5">
          <div class="flex flex-col items-start justify-between h-full">
            <HrefButton href="/about" @click="$emit('close')">
              <template #en>About the project</template>
              {{ $t("nav.about") }}
            </HrefButton>
            <HrefButton href="/achievement" @click="$emit('close')">
              <template #en>Achievement</template>
              {{ $t("nav.achievement.title") }}
            </HrefButton>
            <HrefButton href="/eventRecord" @click="$emit('close')">
              <template #en>Event</template>
              {{ $t("nav.eventRecord") }}
            </HrefButton>
            <button @click="$emit('function')" class="px-3 py-2 text-xl font-bold text-center bg-white border-2 border-black" ref="aspectTarget2">
              {{ $t("nav.lang") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.panel {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
</style>
