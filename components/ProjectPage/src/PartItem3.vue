<template>
  <div class="relative px-20 md:px-0">
    <div class="absolute border-2 border-black parallel -top-6 right-32 bg-custom-1 sm:right-10"></div>
    <div class="py-6 mb-10 bg-white border-2 border-black rounded-xl px-14 sm:p-4">
      <div class="mb-3 text-2xl font-bold">
        <slot name="title" />
      </div>
      <div class="mb-1">
        <slot name="name" />
      </div>
      <div class="text-justify">
        <slot name="word" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallel {
  @apply w-10 h-14;
  transform: skew(0, -20deg);
}
</style>
