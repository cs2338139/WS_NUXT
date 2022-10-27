<script setup>
import NavBar from "./components/NavBar/NavBar.vue"
import { gsap } from "gsap";
useHead({
    htmlAttrs: {
        lang: "zh-TW"
    },
    title: "數位遊戲開發暨藏品3D掃描、建模計畫 | 國立臺灣文學館",
    script: [
        {
            type: "module",
            src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
            body: true,
        },
        {
            nomodule: true,
            src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
            body: true,
        },
    ],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no',
    charset: 'utf-8',
    link: {
        rel: "icon",
        href: "favicon-32x32.ico"
    }
})
</script>


<template>
    <div class="relative z-30">
        <NavBar />
    </div>

    <div class="relative min-h-screen pt-56 pb-40">
        <NuxtPage class="dev" />
    </div>

    <!-- <div class="relative z-20 -mt-56 xl:-mt-72 sm:-mt-80" id="foot">
        <FootBar />
    </div> -->
</template>

<style>
@import "./assets/css/main.css";
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components
{
    .test{
        .dev
    }
}
</style>