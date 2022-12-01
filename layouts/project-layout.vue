<script setup>
import PartItem from '~~/components/ProjectLayoutItem/PartItem.vue'
import PartItem2 from '~~/components/ProjectLayoutItem/PartItem2.vue'
import PartItemNull from '~~/components/ProjectLayoutItem/PartItemNull.vue';
import Item from '~~/components/ProjectLayoutItem/Item.vue';
import Popup from '~~/components/ProjectLayoutItem/Popup.vue';

defineProps({
    img: String,
});

const popupEnable = ref(false);

function OpenPopupPanel() {
    popupEnable.value = true;
    document.body.style.overflow = "hidden";
}

function ClosePopupPanel() {
    popupEnable.value = false;
    document.body.style.overflow = "scroll";
}

</script>

<script>
export default {
    components: { PartItemNull }
};
</script>

<template>

    <div class="aspect-video wrap-8 mb-14 w-full bg-gray-300"> </div>

    <div class="wrap-6 mb-10">
        <div class="mb-14 mt-0 ml-0 text-5xl">
            生命之鳥
        </div>
        <PartItem class="rounded-xl p-3 mb-10 bg-gray-100">
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

        <PartItem>
            <template #title>遊戲原作者</template>
            <template #name>郭孟修</template>
            <template #word>1997年生，屏東人。現就讀臺灣大學物理所碩士班。
                曾於臺北地方異聞工作室參與設計製作實境遊戲《小封神藏寶圖》、《文學將死》及《光之屋》。對文史轉化有興趣而迷途的物理研究生。</template>
        </PartItem>

        <PartItem2 img="" @open="OpenPopupPanel()">
            <template #title>文學家介紹</template>
            <template #name>吳瀛濤</template>
            <template #year>1916-1971</template>
            <template
                #word>台北士紳吳江山之孫，臺灣重要詩人、民俗研究者。求學期間就開始參加文藝活動，投稿詩作在公學校的校刊上。21歲時加入臺灣文藝聯盟臺北支部，24歲時開始日文詩的創作。由於家族經營大稻埕最著名的酒樓「江山樓」，以為靈感的小說〈藝妲〉入選了《臺灣藝術》小說懸賞。</template>
        </PartItem2>

        <PartItemNull>
            <template #title>著作介紹</template>
            <div class="flex flex-wrap justify-between">
                <Item @open="OpenPopupPanel()">〈藝妲〉</Item>
                <Item @open="OpenPopupPanel()">〈藝妲〉</Item>
                <Item @open="OpenPopupPanel()">〈藝妲〉</Item>
                <Item @open="OpenPopupPanel()">〈藝妲〉</Item>
                <Item @open="OpenPopupPanel()">〈藝妲〉</Item>
                <Item @open="OpenPopupPanel()">〈藝妲〉</Item>
            </div>
        </PartItemNull>

        <PartItemNull>
            <template #title>精彩畫面</template>
            <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" class="aspect-video mb-14 relative w-full"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div class="aspect-video mb-14 w-full bg-gray-300"> </div>
            <div class="aspect-video mb-14 w-full bg-gray-300"> </div>
            <div class="aspect-video mb-14 w-full bg-gray-300"> </div>
        </PartItemNull>
    </div>

    <Popup @close="ClosePopupPanel" img="" v-if="popupEnable">
        <template #name>吳瀛濤</template>
        <template #word>
            台北士紳吳江山之孫，臺灣重要詩人、民俗研究者。求學期間就開始參加文藝活動，投稿詩作在公學校的校刊上。21歲時加入臺灣文藝聯盟臺北支部，24歲時開始日文詩的創作。由於家族經營大稻埕最著名的酒樓「江山樓」，以為靈感的小說〈藝妲〉入選了《臺灣藝術》小說懸賞。
            28歲時旅居香港期間，與詩人戴望舒有交往，同時開始發表中文詩作。臺後在《中華日報》副刊發表中文與日文詩作與隨筆。在當時臺灣多數作家因為語言轉換而輟筆時，他的作品其詩作多在《現代詩》、《藍星週刊》、《創世紀》上發表，在當時的主流詩刊極為活躍的臺灣詩人。
            從事詩創作的他認為詩離不開生活，除了詩、散文外，也對台灣民俗與兒童文學所有探究。曾翻譯日本童話集，改寫兒童文學作品外，《臺灣民俗》收錄了近百篇的民間故事與地方傳說，而《臺灣諺語》一書中更收了50首的「童謠」與「兒戲歌」。
            1953年他提出「原子詩論」，主張以科學與自由的精神寫詩。1964年時他與11位臺灣詩人合作創立「笠」詩社，一生熱心推動本土文學與文化。</template>
    </Popup>

</template>

<style scoped>

</style>