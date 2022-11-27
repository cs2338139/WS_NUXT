<script setup>

const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.title'),
})

</script>

<script>
export default {
    data() {
        return {
            homeImage: ""

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
    },
    mounted() {
    },
    unmounted() {
    },
};
</script>

<template>
    <div>
        <div class="aspect-video bg-slate-400 wrap-8 w-full mb-3"> </div>

        <div class="wrap-6 dev-black mb-10">
            <div class="dev-pink mt-0 mb-5 ml-0">
                <span class="text-lg">About</span>
                <br>
                <span class="text-xl">關於計畫</span>
            </div>

            <div class="relative max-w-4xl mx-auto my-0">
                <div class="dev-green mb-3 text-3xl text-blue-400">
                    “透過專業研究詮釋故事，轉化成為通俗易懂之故事，<br>
                    再嘗試與觀眾個人經驗連結，亦能活化文物。“
                </div>
                <div>
                    本計畫目的透過將典藏品以3D掃描與進行建模，<br>
                    向公眾徵選遊戲腳本，<br>
                    提供機關藏品作為發想、設計為必要元素，<br>
                    將館內藏品轉譯成不同的故事文本。<br>
                    最終透過VR互動、線上遊戲、體感互動遊戲的開發， <br>
                    將臺灣文學內容轉化成社會大眾更容易親近的對象，拉近民眾與文學的距離。
                </div>
                <button class="right-6 absolute p-1 text-sm bg-gray-400 border border-black">Read More</button>
            </div>
        </div>

        <div class="wrap-6 dev-black">
            <div class="dev-pink mt-0 mb-5 ml-0">
                <span class="text-lg">Project</span>
                <br>
                <span class="text-xl">計畫成果</span>
            </div>
            <div class="dev-blue flex">
                <div class="w-80 h-96 border border-black">

                </div>
            </div>
        </div>


    </div>


</template>

<style  scoped>

</style>