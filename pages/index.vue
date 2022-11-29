<script setup>
import ProjectItem from '.././components/ProjectItem/ProjectItem.vue'
import EventItem from '.././components/EventItem/EventItem.vue'
const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.title'),
})

</script>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<template>

    <div>
        <div class="aspect-video wrap-8 w-full mb-3 bg-gray-300"> </div>

        <div class="wrap-6 mb-10">
            <div class="mt-0 mb-5 ml-0">
                <span class="text-lg">About</span>
                <br>
                <span class="text-xl">關於計畫</span>
            </div>

            <div class="relative max-w-4xl mx-auto my-0">
                <div class="mb-3 text-3xl text-blue-400">
                    “透過專業研究詮釋故事，轉化成為通俗易懂之故事，<br>
                    再嘗試與觀眾個人經驗連結，亦能活化文物。“
                </div>
                <div class="mb-3">
                    本計畫目的透過將典藏品以3D掃描與進行建模，<br>
                    向公眾徵選遊戲腳本，<br>
                    提供機關藏品作為發想、設計為必要元素，<br>
                    將館內藏品轉譯成不同的故事文本。<br>
                    最終透過VR互動、線上遊戲、體感互動遊戲的開發， <br>
                    將臺灣文學內容轉化成社會大眾更容易親近的對象，拉近民眾與文學的距離。
                </div>
                <div class="text-right">
                    <button class="p-1 mr-16 text-sm bg-gray-300 border border-black">Read More</button>
                </div>
            </div>
        </div>

        <div class="wrap-6 mb-10">
            <div class="mt-0 mb-5 ml-0">
                <span class="text-lg">Project</span>
                <br>
                <span class="text-xl">計畫成果</span>
            </div>
            <div class="inline-flex justify-between w-full mb-10">
                <ProjectItem href="/achievement/modelView" name="藏品3D掃描、建模計畫" year="2018-2022"></ProjectItem>
                <ProjectItem href="/achievement/modelView" name="藏字人" info="電子繪本體感互動遊戲" year="2018-2022"></ProjectItem>
                <ProjectItem href="/achievement/modelView" name="生命之鳥" info="電子繪本體感互動遊戲" year="2018-2022"></ProjectItem>
            </div>
            <div class="text-center">
                <button class="p-1 mr-16 text-sm bg-gray-300 border border-black">Explore All Projects</button>
            </div>
        </div>

        <div class="wrap-6 ">
            <div class=" mt-0 mb-5 ml-0">
                <span class="text-lg">Events</span>
                <br>
                <span class="text-xl">系列活動</span>
            </div>
            <div class="flex flex-col justify-between max-w-4xl mx-auto mb-10">
                <EventItem href="" name="象偶奇遇記A" place="國立臺灣文學館 兒童樂園" year="2022.07.21"></EventItem>
                <EventItem href="" name="象偶奇遇記A" place="國立臺灣文學館 兒童樂園" year="2022.07.21"></EventItem>
                <EventItem href="" name="象偶奇遇記A" place="國立臺灣文學館 兒童樂園" year="2022.07.21"></EventItem>
                <EventItem href="" name="象偶奇遇記A" place="國立臺灣文學館 兒童樂園" year="2022.07.21"></EventItem>
            </div>
            <div class="text-center">
                <button class="p-1 mr-16 text-sm bg-gray-300 border border-black">Explore All</button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>