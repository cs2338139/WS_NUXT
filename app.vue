<script setup>
import NavBar from "./components/NavBar/NavBar.vue"

import { gsap } from "gsap";
</script>


<template>
    <div class="dev-red relative z-10 h-40">
        <NavBar />
    </div>

    <div class="dev-green relative min-h-screen pb-40">
        <NuxtPage />
    </div>

    <!-- <div class="xl:-mt-72 sm:-mt-80 relative z-20 -mt-56" id="foot">
        <FootBar />
    </div> -->
</template>

<style>

</style>