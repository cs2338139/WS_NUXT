<script setup>
const props = defineProps({
  img: String,
  link: String,
  more: String,
  moveEnable: Boolean,
  size: String,
});

const isModel = ref(false);

if (props.link === undefined) {
  isModel.value = false;
} else {
  isModel.value = true;
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

</script>

<template>
  <div class="fixed bottom-0 left-0 z-30 w-full panel bg-custom-0">
    <div class="absolute z-50 right-5 top-5">
      <button @click="$emit('close')" class="flex items-center justify-center w-12 m-2 bg-white border border-black rounded-full aspect-square">
        <ion-icon name="close-outline" class="text-4xl"></ion-icon>
      </button>
    </div>

    <div class="flex flex-col items-center justify-center h-full wrap-6">
      <div class="absolute flex items-center justify-between w-full h-full xl:px-20 md:px-10" v-if="moveEnable">
        <button @click="$emit('previous')" class="flex items-center justify-center w-12 m-2 bg-white border border-black aspect-square">
          <ion-icon name="arrow-back-outline" class="text-4xl"></ion-icon>
        </button>
        <button @click="$emit('next')" class="flex items-center justify-center w-12 m-2 bg-white border border-black aspect-square">
          <ion-icon name="arrow-forward-outline" class="text-4xl"></ion-icon>
        </button>
      </div>

      <div class="z-50 mt-40">
        <div>
          <iframe
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="350"
            height="350"
            :src="link"
            v-if="isModel"
            class="bg-white rounded-2xl h-80 w-80"
          >
          </iframe>
        </div>
        <div class="flex justify-center h-56 overflow-hidden border rounded-full aspect-square" v-if="isModel === false">
          <img :v-if="img != ''" :src="img" class="h-full" />
        </div>
      </div>
      <div class="z-50 w-3/5 mt-8 text-justify mb-14 h-2/5 md:w-3/4">
        <div class="mb-4 text-2xl font-bold text-center">
          <slot name="name" />
        </div>
        <div class="z-50 -mt-2 text-2xl font-bold text-center" v-if="isModel">
          <slot name="owner" />
        </div>
        <div class="z-50 mb-2 text-xl text-center" v-if="isModel">
          {{ $t("pages.home.child.achievement.child.modelView.result.size") }}
          <slot name="size" />
        </div>
        <div class="z-50 overflow-y-auto text-xl text-justify h-5/6 scrollbarCustom" :class="{ 'h-1/2': isModel }">
          <div class="m-2 text-justify"><slot name="word" /></div>
        </div>
        <div class="z-50 h-12 text-center">
          <NuxtLink :to="more" target="_blank" class="flex items-center justify-center" v-if="isModel && more">
            <div class="mr-2 text-2xl font-bold tracking-wider border-b border-black">{{ $t("pages.home.child.achievement.child.modelView.result.more") }}</div>
            <div class="w-12 bg-white border border-black rounded-full aspect-square">
              <img class="" src="~/public/Image/UI/Arrow2.svg" alt="" />
            </div>
          </NuxtLink>
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
