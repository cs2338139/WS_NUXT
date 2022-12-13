<script setup>
const { locale, setLocale, t } = useI18n();
</script>

<template>
<div class="flex justify-center">
      <div class="flex w-52 justify-between">
        <button class="font-bold text-lg p-1">1</button>
        <button class="font-bold text-lg p-1">2</button>
        <button class="font-bold text-lg p-1">3</button>
        <button class="border border-black px-1">
          <div class="flex justify-end items-center">
            <div class="text-lg font-bold tracking-wider mr-2"> <slot name='ButtonName' /></div>
            <div class="aspect-square w-8 rotate-45">
              <img class="" src="~/public/Image/UI/Arrow2.svg" alt="" />
            </div>
          </div>
        </button>
      </div>
    </div>
</template>