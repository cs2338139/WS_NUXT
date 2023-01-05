<script setup>
const props = defineProps({
  img: String,
  link: String,
  more: String,
  moveEnable: Boolean,
  size: String,
});
const { currentWidth } = useGetWidthLevel();

const isModel = ref(false);

if (props.link === undefined) {
  isModel.value = false;
} else {
  isModel.value = true;
}

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
const aspectTarget3 = ref();
const aspectTarget4 = ref();
const aspectTarget5 = ref();

onMounted(() => {
  FirstSetAspectValue();
  window.addEventListener("resize", ReSetAspectValue1);
  window.addEventListener("resize", ReSetAspectValue2);
  window.addEventListener("resize", ReSetAspectValue3);
  window.addEventListener("resize", ReSetAspectValue4);
  window.addEventListener("resize", ReSetAspectValue5);
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
  let CheckAspect3 = setInterval(() => {
    if (aspectTarget3.value) {
      if (aspectTarget3.value.offsetHeight > 10) {
        ReSetAspectValue3();
        clearInterval(CheckAspect3);
      }
    }
  }, 0);
  let CheckAspect4 = setInterval(() => {
    if (aspectTarget4.value) {
      if (aspectTarget4.value.offsetWidth > 10) {
        ReSetAspectValue4();
        clearInterval(CheckAspect4);
      }
    }
  }, 0);
  let CheckAspect5 = setInterval(() => {
    if (aspectTarget5.value) {
      if (aspectTarget5.value.offsetWidth > 10) {
        ReSetAspectValue5();
        clearInterval(CheckAspect5);
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

function ReSetAspectValue3() {
  if (aspectTarget3.value && aspectTarget3.value.offsetHeightoffsetWidth > 10) {
    aspectTarget3.value.style.width = aspectTarget3.value.offsetHeightoffsetWidth + "px";
  }
}

function ReSetAspectValue4() {
  if (aspectTarget4.value && aspectTarget4.value.offsetWidth > 10) {
    aspectTarget4.value.style.height = aspectTarget4.value.offsetWidth + "px";
  }
}

function ReSetAspectValue5() {
  if (aspectTarget5.value && aspectTarget5.value.offsetWidth > 10) {
    aspectTarget5.value.style.height = aspectTarget5.value.offsetWidth + "px";
  }
}

</script>

<template>
  <div class="fixed bottom-0 left-0 z-30 w-full panel bg-custom-0">
    <div class="absolute z-50 right-5 top-5">
      <button @click="$emit('close')" class="flex items-center justify-center w-12 m-2 bg-white border border-black rounded-full" ref="aspectTarget1">
        <ion-icon name="close-outline" class="text-4xl"></ion-icon>
      </button>
    </div>

    <div class="flex flex-col items-center justify-center h-full wrap-6">
      <div class="absolute flex items-center justify-between w-full h-full xl:px-20 md:px-10 sm:px-2 sm:mt-80" v-if="moveEnable">
        <button @click="$emit('previous')" class="flex items-center justify-center w-12 m-2 bg-white border border-black" ref="aspectTarget2">
          <ion-icon name="arrow-back-outline" class="text-4xl"></ion-icon>
        </button>
        <button @click="$emit('next')" class="flex items-center justify-center w-12 m-2 bg-white border border-black" ref="aspectTarget4">
          <ion-icon name="arrow-forward-outline" class="text-4xl"></ion-icon>
        </button>
      </div>

      <div class="z-50 mt-32">
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
        <div class="flex justify-center h-56 overflow-hidden border rounded-full" ref="aspectTarget3" v-if="isModel === false">
          <img :v-if="img != ''" :src="img" class="h-full" />
        </div>
      </div>
      <div class="flex flex-col z-50 w-3/5 mt-3 text-justify mb-14 h-2/5 md:w-3/4 sm:w-4/5">
        <div class="flex items-center justify-center text-center h-20 mb-4 text-2xl font-bold sm:mb-2 sm:text-xl "><slot name="name" /></div>
        <div class="z-50 -mt-2 text-xl font-bold text-center sm:text-lg  " v-if="isModel">
          <slot name="owner" />
        </div>
        <div class="z-50 mb-2 text-lg text-center sm:text-xl sm:mb-0  " v-if="isModel">
          {{ $t("pages.home.child.achievement.child.modelView.result.size") }}
          <slot name="size" />
        </div>
        <div class="z-50 overflow-y-auto text-xl text-justify h-5/6 scrollbarCustom sm:text-lg  " :class="{ 'h-1/2 sm:h-32': isModel }">
          <slot name="word" />
        </div>
        <div class="z-50 h-12 text-center sm:h-8 mt-2  ">
          <NuxtLink :to="more" target="_blank" class="flex items-center justify-center" v-if="isModel && more">
            <div class="mr-2 text-xl font-bold tracking-wider border-b border-black sm:text-xl">{{ $t("pages.home.child.achievement.child.modelView.result.more") }}</div>
            <div class="w-8 bg-white border border-black rounded-full sm:w-7" ref="aspectTarget5">
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
