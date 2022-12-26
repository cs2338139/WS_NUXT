<script setup></script>

<template>
  <div>
    <button @click="$emit('function')">
      <div class="flex justify-center items-center">
        <div class="text-xl font-bold tracking-wider border-b border-black mr-2 sm:text-base"><slot /></div>
        <div class="aspect-square w-12 bg-custom-0 rounded-full text-4xl sm:w-8 sm:text-2xl">
          <slot name="icon" />
        </div>
      </div>
    </button>
  </div>
</template>
