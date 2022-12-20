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
</script>

<template>
  <div class="bg-custom-0 fixed bottom-0 left-0 z-30 w-full h-screen">
    <div class="absolute right-0">
      <button @click="$emit('close')" class="top-5 aspect-square flex items-center justify-center w-12 m-2 bg-white border border-black rounded-full">
        <ion-icon name="close-outline" class="text-4xl"></ion-icon>
      </button>
    </div>

    <div class="wrap-6 flex flex-col items-center justify-center h-full">
      <div class="absolute flex items-center justify-between w-full h-full" v-if="moveEnable">
        <button @click="$emit('previous')" class="aspect-square flex items-center justify-center w-12 m-2 bg-white border border-black">
          <ion-icon name="arrow-back-outline" class="text-4xl"></ion-icon>
        </button>
        <button @click="$emit('next')" class="aspect-square flex items-center justify-center w-12 m-2 bg-white border border-black">
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
            class="rounded-2xl h-80 w-80 bg-white"
          >
          </iframe>
        </div>
        <div class="aspect-square flex justify-center h-56 overflow-hidden border rounded-full" v-if="isModel === false">
          <img :v-if="img != ''" :src="img" class="h-full" />
        </div>
      </div>
      <div class="mb-14 z-50 w-3/5 mt-8 text-justify">
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
        <div class="h-80 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl scrollbar-track-gray-100 z-50 overflow-y-auto text-xl text-justify" :class="{ 'h-52': isModel }">
          <div class="m-2"><slot name="word" /></div>
        </div>
        <div class="z-50 h-12 text-center">
          <NuxtLink :to="more" target="_blank" class="flex items-center justify-center" v-if="isModel && more">
            <div class="mr-2 text-2xl font-bold tracking-wider border-b border-black">{{ $t("pages.home.child.achievement.child.modelView.result.more") }}</div>
            <div class="aspect-square w-12 bg-white border border-black rounded-full">
              <img class="" src="~/public/Image/UI/Arrow2.svg" alt="" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
