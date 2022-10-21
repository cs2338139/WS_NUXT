<script setup>
import axios from "axios";
</script>

<script>
export default {
    data() {
        return {
            homeData: {
                imgs: [],
            },
            interval: null,
        };
    },
    methods: {
        ToNotFound() {
            this.$router.push({
                name: "NotFound",
                params: { pathMatch: this.$route.path.substring(1).split("/") },
                query: this.$route.query,
                hash: this.$route.hash,
            });
        },
    },
    created() {
        this.LoadJson();
    },
    mounted() {
        let target = this.$refs.target;
        let elements = [
            {
                main: this.$refs.bg,
                offset: 0,
            },
        ];
        let elements2 = [];
        this.interval = setInterval(() => {
            this.GetTargetHeight(target, elements, elements2);
        }, 100);
    },
    unmounted() {
        clearInterval(this.interval);
    },
};
</script>

<template>
    <ElementPanel ref="element" />
    <div>
        <div class="wrap">
            <div class="mb-24 px-20 lg:mb-14 md:px-0">
                <ImageBox path="Home" imgStyle="w-full aspect-video" :img="homeData.imgs" :time="3000" :auto="true" />
            </div>

            <div class="flex flex-row h-300px md:h-480px md:flex-col px-20 md:px-10" ref="target">
                <div class="w-2/3 h-full pt-3 pr-10 md:border-white md:border-b md:w-full md:pr-0 md:py-2 md:h-1/2">
                    <HomeNews />
                </div>

                <div class="w-1/3 h-full font- pt-3 pl-10 md:float-left md:w-full md:pl-0 md:h-1/2 md:pt-5">
                    <HomeVisitInformation />
                </div>
            </div>
        </div>
    </div>

    <div class="absolute w-full bottom-0 -z-50">
        <div class="bg-bg-1-image h-8"></div>
        <div class="bg-bg-1-Color h-96" ref="bg"></div>
    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
    .h-480px {
        height: 480px;
    }

    .h-300px {
        height: 300px;
    }
}
</style>