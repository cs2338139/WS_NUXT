<script setup>
defineProps({
  href: String,
  img: String,
});
const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="px-16 pb-16">
    <NuxtLink :to="localePath(href)" class="rounded-3xl h-80 flex w-full p-4 border border-black " :class="{ 'h-96': locale === 'en' }">
      <div class="rounded-3xl w-1/3 h-full overflow-hidden bg-gray-300">
        <div class="flex items-center h-full">
          <img :src="img" alt="" class="scale-110" />
        </div>
      </div>

      <div class="flex items-start justify-center w-2/3 h-full px-16 py-10">
        <div class="flex flex-col w-full">
          <div class="mb-2 text-2xl font-bold tracking-widest"><slot name="name" /></div>

          <div class="flex justify-between text-lg">
            <span><slot name="info" /></span>
            <span><slot name="year" /></span>
          </div>

          <div class="mt-1 mb-4 border-b border-black"></div>

          <div class="text-xl text-justify"><slot name="word" /></div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.size {
  aspect-ratio: 1377/570;
}
</style>
