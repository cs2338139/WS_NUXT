<script setup>
import HrefButton from "~~/components/NavBar/src/HrefButton.vue";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

</script>

<template>
  <div class="fixed bottom-0 left-0 z-30 w-full panel bg-custom-0">
    <div class="absolute right-5 top-5">
      <button @click="$emit('close')" class="flex items-center justify-center w-12 m-2 bg-white border border-black rounded-full aspect-square">
        <ion-icon name="close-outline" class="text-4xl"></ion-icon>
      </button>
    </div>
    <div class="flex items-center justify-center w-full h-full">
      <div class="flex justify-between max-w-5xl w-full h-4/5 md:flex-col md:max-w-xl">
        <div class="w-100 md:w-120">
          <img src="~/public/Image/UI/LOGOlargeCH.svg" v-if="locale === 'zh'" />
          <img src="~/public/Image/UI/LOGOlargeEN.svg" v-if="locale === 'en'" />
        </div>
        <div class="self-end h-142 w-100 md:self-start md:h-112">
          <div class="flex flex-col items-start justify-between h-100">
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
            <button @click="$emit('function')" class="px-3 py-2 text-xl font-bold text-center bg-white border-2 border-black aspect-square md:text-4xl">
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
