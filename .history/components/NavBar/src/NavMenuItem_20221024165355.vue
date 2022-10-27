<script setup>
defineProps({
  href: String,
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
    <NuxtLink :to="hrefLink">
      <div class="px-4 py-2 bg-white rounded-full font-bold"
        :class="{ IsDisabled: enable === false },{ IsEnabled: enable === true }">
        <slot> </slot>
      </div>
    </NuxtLink>
  </li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
