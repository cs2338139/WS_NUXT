<script setup>
const props = defineProps({
  imgStyle: String,
  path: String,
  time: Number,
  auto: Boolean,
  img: {
    type: Array,
    default: [],
  },
  dot: {
    type: Boolean,
    default: true,
  },
});
</script>

<script>
export default {
  data() {
    return {
      slideIndex: 0,
      timeID: null,
    };
  },
  methods: {
    autoSlides() {
      this.timeID = setInterval(() => {
        this.plusSlides(1);
      }, 3000);
    },
    plusSlides(n) {
      this.slideIndex += n;
      this.showSlides();
    },
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlides();
    },
    showSlides() {
      let dots = this.$refs.dots;
      let slides = this.$refs.slides;

      clearInterval(this.timeID);
      if (slides.length > 1) {
        if (this.$props.auto === true) this.autoSlides();

        if (this.slideIndex > slides.length - 1) {
          this.slideIndex = 0;
        }
        if (this.slideIndex < 0) {
          this.slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[this.slideIndex].style.display = "block";
        dots[this.slideIndex].className += " active";
      }
    },
  },
  mounted() {
    if (this.$props.img.length != 0) this.showSlides(0);
    this.$emitter.on("emitIndex", (msg) => {
      this.currentSlide(msg);
    });
  },
  updated() {
    if (this.$props.img.length != 0) this.showSlides(0);
  },
};

// showSlides(slideIndex);
</script>

<template>
  <div class="relative overflow-hidden" :class="imgStyle">
    <div class="absolute w-full h-full" v-if="img.length > 1">
      <button @click="plusSlides(-1)" class="left-3 dirButton">
        <ion-icon name="chevron-back-circle" />
      </button>

      <button @click="plusSlides(1)" class="right-3 dirButton">
        <ion-icon name="chevron-forward-circle" />
      </button>

      <div class="absolute left-0 right-0 text-center bottom-2" v-show="dot">
        <span v-for="(i, index) in img" class="dot" @click="currentSlide(index)" ref="dots"></span>
      </div>
    </div>

    <div>
      <img v-for="i in img" :src="'Data/' + path + '/Image/' + i" class="mySlides w-full" ref="slides" />
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: white;
}

@layer components {
  .dirButton {
    @apply absolute top-1/2 -translate-y-1/2 text-5xl opacity-50 hover:opacity-100 sm:text-2xl;
  }

  .dot {
    @apply cursor-pointer h-3 w-3 mx-1 bg-zinc-200 rounded-lg inline-block sm:h-2 sm:w-2;
  }

  .active {
    @apply bg-zinc-400;
  }
}

@layer utilities {
  .h-630px {
    height: 630px;
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}

/* .dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
} */
</style>
