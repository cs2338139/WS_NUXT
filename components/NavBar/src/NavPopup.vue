<script setup>
import HrefButton from "~~/components/NavBar/src/HrefButton.vue";

</script>

<template>
  <div class="bg-custom-0 fixed bottom-0 left-0 z-30 w-full h-screen">
    {{ imageUrl}}
    <div class="absolute right-0">
      <button @click="$emit('close')" class="top-5 aspect-square w-12 m-2 flex items-center justify-center bg-white border border-black rounded-full">
        <ion-icon name="close-outline" class="text-4xl"></ion-icon>
      </button>
    </div>
    <div class="flex items-center justify-center w-full h-full">
      <div class="h-4/5 flex justify-between w-3/5">
        <!-- <div class="h-72 w-96 bg-gray-300 border-2 border-black"></div> -->
        <img src="~/public/Image/UI/LOGOlarge.svg" style="width:400px" class="h-72 w-full" />
        <div class="h-142 w-120 self-end">
          <div class="h-100 flex flex-col items-start justify-between">
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
            <button @click="$emit('function')" class="px-3 py-2 text-xl font-bold text-center bg-white border-2 border-black">
              {{ $t("nav.lang") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
