<script setup>
import NavBar from "./components/NavBar/NavBar.vue"

import { gsap } from "gsap";
</script>


<template>
    <div class="devss relative z-10">
        <NavBar />
    </div>

    <div class="relative min-h-screen pt-56 pb-40">
        <NuxtPage />
    </div>

    <!-- <div class="relative z-20 -mt-56 xl:-mt-72 sm:-mt-80" id="foot">
        <FootBar />
    </div> -->
</template>

<style>

</style>