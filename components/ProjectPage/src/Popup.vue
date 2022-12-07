<script setup>
const props = defineProps({
  img: String,
  link: String,
  more: String,
  moveEnable: Boolean,
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
      <button @click="$emit('close')" class="top-5 aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black rounded-full">X</button>
    </div>

    <div class="wrap-6 flex flex-col items-center justify-center h-full">
      <div class="absolute flex items-center justify-between w-full h-full" v-if="moveEnable">
        <button @click="$emit('previous')" class="aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black">＜</button>
        <button @click="$emit('next')" class="aspect-square w-12 m-4 text-4xl font-thin bg-white border border-black">＞</button>
      </div>

      <div class="z-50">
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
        <div class="aspect-square h-56 overflow-hidden border rounded-full" v-if="isModel === false">
          <img :v-if="img != ''" :src="img" />
        </div>
      </div>
      <div class="mb-14 w-3/5 mt-8 text-justify z-50">
        <div class="mb-2 text-xl font-bold text-center">
          <slot name="name" />
        </div>
        <div class="-mt-2 text-xl font-bold text-center z-50" v-if="isModel">
          <slot name="owner" />
        </div>
        <div class="mb-2 text-lg text-center z-50" v-if="isModel">
          {{ $t("pages.home.child.achievement.child.modelView.result.size") }}
          <slot name="size" />
        </div>
        <div class="font-bold z-50">
          <slot name="word" />
        </div>
        <div class="text-center z-50">
          <NuxtLink :to="more" target="_blank" class="border-b border-black font-bold tracking-wider text-xl" v-if="isModel">
            {{ $t("pages.home.child.achievement.child.modelView.result.more") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
