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
  <li class="mx-0 my-2">
    <NuxtLink :to="hrefLink" class="">
      <div class="px-4 font-bold" :class="{ IsDisabled: enable === false }, { IsEnabled: enable === true }">
        <div>
          <slot></slot>
        </div>
      </div>
    </NuxtLink>
  </li>
  <li class="last:hidden"><hr class="mx-5" :class="{ SlateBorder: enable === false }, { BlueBorder: enable === true }" /></li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
