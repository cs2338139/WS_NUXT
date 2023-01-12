<script setup>
import { gsap } from "gsap";

const pages = ref();
const onePageTime = ref(0.1);
const background = ref();
// const screenSize = reactive({
//   size: { width: window.innerWidth, height: window.innerHeight },
// });
const screenSize = ref();
const isLoadingEnd = ref(false);

onMounted(() => {
  ScrollControl(false);
  SetSize();
  AnimationMain();

  document.body.addEventListener("click", () => (isLoadingEnd.value = true));
});

function ScrollControl(value) {
  if (value) {
    document.body.style.overflow = "scroll";
  } else {
    document.body.style.overflow = "hidden";
  }
}

function SetSize() {
  if (window.innerWidth > window.innerHeight) {
    screenSize.value = window.innerWidth;
  } else if (window.innerWidth < window.innerHeight) {
    screenSize.value = window.innerHeight;
  } else {
    screenSize.value = window.innerHeight;
  }
  background.value.style.width = screenSize.value + "px";
  background.value.style.height = screenSize.value + "px";
}

function AnimationMain() {
  let tlMain = gsap.timeline({});

  tlMain.add(TimelineLoading());

  watchEffect(() => {
    if (isLoadingEnd.value) {
      let currentTime = tlMain.time();
      tlMain.add(TimelineLoadingEnd(), currentTime);
    }
  });
}

function TimelineLoading() {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  let ctl_1 = gsap.timeline({ repeat: 1, repeatDelay: 0.5, yoyo: true });
  for (let i = 1; i < 8; i++) {
    ctl_1.fromTo(
      pages.value.children[i],
      { opacity: 0 },
      {
        keyframes: [{ duration: onePageTime.value, opacity: 1 }],
      }
    );
  }

  let ctl_2 = gsap.timeline({});
  ctl_2.to(pages.value, { duration: 0.5, rotate: 360 });

  tl.add(ctl_1);
  tl.add(ctl_2);

  return tl;
}

function TimelineLoadingEnd() {
  let tl = gsap.timeline({
    onComplete: () => {
      ScrollControl(true);
    },
  });
  tl.fromTo(background.value, { scale: "1", "border-radius": "0px", opacity: 1 }, { duration: 1, delay: 1, "border-radius": "9999px", scale: "0", opacity: 0 });
  tl.fromTo(pages.value, { opacity: 1 }, { duration: 0.5, opacity: 0 }, "-=0.5");
  return tl;
}
</script>

<template>
  <div class="fixed z-50 flex items-center justify-center w-screen h-screen">
    <div ref="background" class="origin-center rounded-none bg-custom-0"></div>
  </div>
  <div class="fixed z-50 flex items-center justify-center w-screen h-screen">
    <div class="w-2/20">
      <svg ref="pages" class="origin-[38%_27%]" id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.35 96.13">
        <g>
          <rect x="0.39" y="0.39" width="94.56" height="50.81" />
          <path d="M95,51.59H.39L0,51.2V.39L.39,0H95l.39.39V51.2ZM.78,50.81H94.56V.78H.78Z" />
        </g>
        <g>
          <polygon points="95.87 4.33 7.63 8.51 7.63 59.32 95.87 55.14 95.87 4.33" />
          <path d="M7.65,59.71l-.41-.39V8.51l.37-.39L95.85,3.94l.41.39V55.14l-.37.39ZM8,8.89v50l87.46-4.14v-50Z" />
        </g>
        <g>
          <polygon points="98.86 7.46 22.57 15.82 22.57 66.63 98.86 58.27 98.86 7.46" />
          <path d="M22.61,67l-.43-.39V15.82l.35-.39L98.81,7.07l.44.39V58.27l-.35.39ZM23,16.17v50l75.5-8.27v-50Z" />
        </g>
        <g>
          <polygon points="102.95 9.91 38.62 22.45 38.62 73.26 102.95 60.72 102.95 9.91" />
          <path d="M38.7,73.65l-.47-.39V22.45l.32-.38L102.88,9.53l.47.38V60.72l-.32.38ZM39,22.77v50L102.56,60.4v-50Z" />
        </g>
        <g>
          <polygon points="109.09 12.23 56.72 28.95 56.72 79.77 109.09 63.04 109.09 12.23" />
          <path d="M56.83,80.14l-.51-.38V29l.28-.37L109,11.86l.51.37V63l-.27.38Zm.28-50.9v50L108.7,62.76v-50Z" />
        </g>
        <g>
          <polygon points="116.88 13.96 76.46 34.86 76.46 85.67 116.88 64.77 116.88 13.96" />
          <path d="M76.64,86l-.57-.35V34.86l.21-.35,40.42-20.9.57.35V64.77l-.21.35Zm.21-50.92V85l39.64-20.5V14.6Z" />
        </g>
        <g>
          <polygon points="123.41 14.86 94.95 39.95 94.95 90.76 123.41 65.67 123.41 14.86" />
          <path d="M95.21,91.05l-.65-.29V40l.13-.3,28.46-25.08.65.29V65.67l-.13.3Zm.13-50.93V89.89L123,65.5V15.73Z" />
        </g>
        <g>
          <polygon points="111.45 95.94 127.96 66.67 127.96 15.86 111.45 45.13 111.45 95.94" />
          <path d="M111.8,96.13l-.74-.19V45.13l0-.2,16.51-29.26.73.19V66.68l0,.19Zm0-50.9V94.45l15.72-27.88V17.36Z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style>
polygon,
rect {
  fill: #fff;
}
</style>
