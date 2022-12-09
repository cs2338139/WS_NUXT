<script setup>
const { locale, setLocale, t } = useI18n();
const props = defineProps({
  href: String,
});
</script>

<template>
  <div>
    <NuxtLink :to="href">
      <template v-if="locale === 'zh'">
        <span class="text-2xl text-custom-2 -tracking-wider">
          <slot name="en"></slot>
        </span>
        <br />
      </template>
      <span class="text-3xl font-bold" :class="{ 'tracking-custom-0': locale === 'zh' }">
        <slot />
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
