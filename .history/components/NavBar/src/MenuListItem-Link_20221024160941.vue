<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
  target: String,
  enable: { type: Boolean, default: true },
});
</script>
<script>
export default {
  data() {
    return {
      hrefLink: "",
    };
  },
  methods: {
    IsEnable() {
      if (this.enable) {
        this.hrefLink = this.href;
      } else {
        this.hrefLink = "";
      }
    },
  },
  created() {
    this.IsEnable();
  },
};
</script>

<template>
  <li class="mx-0 my-2">
    <a :href="hrefLink" :target="target">
      <div class="px-4 font-bold" :class="({ IsDisabled: enable === false }, { IsEnabled: enable === true })">
        <div>
          <slot></slot>
        </div>
        <div class="text-xs font-bold">
          <slot name="en"></slot>
        </div>
      </div>
    </a>
  </li>
  <li class="last:hidden"><hr class="mx-5" :class="({ SlateBorder: enable === false }, { BlueBorder: enable === true })" /></li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.SlateBorder {
  @apply border-slate-400;
}

.BlueBorder {
  @apply border-custom-0;
}

</style>
