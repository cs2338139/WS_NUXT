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
  <NuxtLink :to="hrefLink">
    <li class="px-4 py-2 font-bold text-center bg-gray-300 border border-black"
      :class="{ IsDisabled: enable === false }, { IsEnabled: enable === true }">
      <slot> </slot>
    </li>
  </NuxtLink>
</template>

<style scoped>

</style>
