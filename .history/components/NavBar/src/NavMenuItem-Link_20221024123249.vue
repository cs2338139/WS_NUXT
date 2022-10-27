<script setup>
defineProps({
  href: String,
  target: String,
  _class: String,
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
  <li class=" text-center max-h-7">
    <a :href="hrefLink" :target="target">
      <div class="px-4 py-2 bg-white rounded-full font-bold" :class="_class, { IsDisabled: enable === false },{ IsEnabled: enable === true }">
        <slot> </slot>
      </div>
    </a>
  </li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer component {
  .IsDisabled {
    @apply text-slate-400;
  }
  .IsEnabled {
    @apply text-text-0-Color;
  }
}
</style>
