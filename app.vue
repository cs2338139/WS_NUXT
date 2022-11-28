<script setup>
import NavBar from "./components/NavBar/NavBar.vue"
import FootBar from "./components/FootBar/FootBar.vue"

import { gsap } from "gsap";
</script>


<template>
    <div class="dev-black relative z-10 h-40">
        <NavBar />
    </div>

    <div class="relative min-h-screen pb-56">
        <NuxtPage />
    </div>

    <div class="relative z-10 -mt-40">
        <FootBar />
    </div>
</template>

<style>

</style>