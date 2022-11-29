<script setup>
import PartItem from '~~/components/ProjectLayoutItem/PartItem.vue'
import GameCreatorItem from '~~/components/ProjectLayoutItem/GameCreatorItem.vue'

defineProps({
    img: String,
});
</script>

<script>
export default {

};
</script>

<template>

    <div class="aspect-video wrap-8 mb-14 w-full bg-gray-300"> </div>

    <div class="wrap-6 mb-10">
        <div class="mb-14 mt-0 ml-0 text-5xl">
            生命之鳥
        </div>

        <PartItem class="p-3 bg-gray-100 rounded-xl mb-10">
            <template #title>展出資訊</template>
            <template #word>本位於國立臺灣文學館B1文學樂園，於開館時常態展示。</template>
        </PartItem>

        <PartItem>
            <template #title>關於遊戲</template>
            <template #word>本作以日治時期現代詩詩人、民俗學研究者、笠詩社共同創辦人吳瀛濤的文學生命作為故事主軸，以「詩離不開生活」為敘事概念，以吳瀛濤作為角色旁白，
                向低年級兒童娓娓道來關於自己的童年生活、江山樓的生活經驗、從台灣各地民俗風情田調與蒐集而來的習俗與故事，同時也向觀眾介紹作家的重要著作。
                本作設計成文學電子繪本讓觀眾進行體驗，適合國小一年級以上、親子團體能夠一同遊玩的互動體感遊戲。</template>
        </PartItem>

        <PartItem>
            <template #title>遊戲介紹</template>
            <template #word>吳瀛濤為臺灣重要詩人與台灣民俗研究者，作為當時主流詩刊極為活躍的台灣詩人，他愛好海，愛好詩，愛好民俗，認為詩離不開生活。
                重視臺灣現實狀況的他與另外11為詩人成立笠詩社，發行《笠詩刊》。 他的一切都環繞在推動本土文學與文化上，現在就來認識他的文學世界吧。</template>
        </PartItem>

        <GameCreatorItem>
            <template #title>遊戲原作者</template>
            <template #name>郭孟修</template>
            <template #word>1997年生，屏東人。現就讀臺灣大學物理所碩士班。
                曾於臺北地方異聞工作室參與設計製作實境遊戲《小封神藏寶圖》、《文學將死》及《光之屋》。對文史轉化有興趣而迷途的物理研究生。</template>
        </GameCreatorItem>

    </div>


</template>

<style scoped>

</style>