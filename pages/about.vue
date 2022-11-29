<script setup>
const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.child.about.title'),
})
</script>

<script>
export default {
    data() {
        return {
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
};
</script>

<template>
    <div class="wrap-6 flex justify-between">

        <div class="w-5/12">
            <div class="mt-0 mb-10">
                <span class="text-2xl">About</span>
                <br>
                <span class="text-3xl">關於計畫</span>
            </div>

            <div class="mb-10">
                國立臺灣文學館「數位遊戲開發暨藏品3D掃描、建模計畫」為「臺灣行卷—博物館示範計畫」分項計畫之一， 該計畫是以臺灣各地重要空間（含博物館典藏品）為基礎，透過專業研究充實詮釋內涵與故事，
                轉化成為通俗易懂之故事或文字，再嘗試與觀眾個人情感記憶或生命經驗連結，亦能活化文物。
                <br> <br>
                本計畫目的透過將典藏品以3D掃描與進行建模，向公眾徵選遊戲腳本，提供機關藏品作為發想、設計為必要元素， 將館內藏品轉譯成不同的故事文本。最終透過VR互動、線上遊戲、體感互動遊戲的開發，
                將臺灣文學內容轉化成社會大眾更容易親近的對象，拉近民眾與文學的距離。
                <br> <br>
                本計畫下有四個完成的項目，分別是數位遊戲開發「1940」、「生命之鳥」、「夢獸之島」與「3D掃描與建模計畫」。
            </div>
            <div class="">
                <NuxtLink to="/achievement/" class="p-1 mr-16 text-sm bg-gray-300 border border-black">All Works
                </NuxtLink>
            </div>
        </div>

        <div class="aspect-square  w-5/12 bg-gray-300"> </div>
    </div>
</template>

<style>

</style>