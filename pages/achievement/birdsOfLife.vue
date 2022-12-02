<script setup>
import ProjectLayout from '~~/components/ProjectLayoutItem/projectLayout.vue';
import PartItem from '~~/components/ProjectLayoutItem/PartItem.vue'
import PartItem2 from '~~/components/ProjectLayoutItem/PartItem2.vue'
import PartItemNull from '~~/components/ProjectLayoutItem/PartItemNull.vue';
import Item from '~~/components/ProjectLayoutItem/Item.vue';
import ScreenShots from '~~/components/ProjectLayoutItem/ScreenShots.vue';

const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.child.achievement.child.birdsOfLife.title'),
})

const projectLayout = ref(null);

function GetData(img, name, word) {
    projectLayout.value.OpenPopupPanel(img, name, word);
}

</script>

<template>
    <div>
        <ProjectLayout ref="projectLayout">
            <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.title') }}</template>
            <template #info>
                <PartItem class="rounded-xl p-3 mb-10 bg-gray-100">
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.exhibition.title')
                    }}</template>
                    <template #word>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.exhibition.content')
                    }}</template>
                </PartItem>

                <PartItem>
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.about.title')
                    }}</template>
                    <template #word>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.about.content[0]')
                    }}</template>
                </PartItem>

                <PartItem>
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.introduction.title')
                    }}</template>
                    <template #word>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.introduction.content[0]')
                    }}</template>
                </PartItem>

                <PartItem>
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.writer.title')
                    }}</template>
                    <template #name>{{ $t('pages.home.child.achievement.child.birdsOfLife.info.writer.content[0].name')
                    }}</template>
                    <template #word>{{
                            $t('pages.home.child.achievement.child.birdsOfLife.info.writer.content[0].info[0]')
                    }}</template>
                </PartItem>

                <PartItem2 img="" @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.author.content[0].name'),$t('pages.home.child.achievement.child.birdsOfLife.author.content[0].info.0'))">
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.author.title') }}</template>
                    <template #name>{{ $t('pages.home.child.achievement.child.birdsOfLife.author.content[0].name')
                    }}</template>
                    <template #year>{{ $t('pages.home.child.achievement.child.birdsOfLife.author.content[0].year')
                    }}</template>
                    <template #word>{{ $t('pages.home.child.achievement.child.birdsOfLife.author.content[0].infoShort')
                    }}</template>
                </PartItem2>

                <PartItemNull>
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.works.title') }}</template>
                    <div class="flex flex-wrap justify-between">
                        <Item @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.works.content[0].name'),$t('pages.home.child.achievement.child.birdsOfLife.works.content[0].info'))">
                            {{ $t('pages.home.child.achievement.child.birdsOfLife.works.content[0].name') }}</Item>
                        <Item @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.works.content[1].name'),$t('pages.home.child.achievement.child.birdsOfLife.works.content[1].info'))">
                            {{ $t('pages.home.child.achievement.child.birdsOfLife.works.content[1].name') }}</Item>
                        <Item @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.works.content[2].name'),$t('pages.home.child.achievement.child.birdsOfLife.works.content[2].info'))">
                            {{ $t('pages.home.child.achievement.child.birdsOfLife.works.content[2].name') }}</Item>
                        <Item @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.works.content[3].name'),$t('pages.home.child.achievement.child.birdsOfLife.works.content[3].info'))">
                            {{ $t('pages.home.child.achievement.child.birdsOfLife.works.content[3].name') }}</Item>
                        <Item @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.works.content[4].name'),$t('pages.home.child.achievement.child.birdsOfLife.works.content[4].info'))">
                            {{ $t('pages.home.child.achievement.child.birdsOfLife.works.content[4].name') }}</Item>
                        <Item @open="GetData(null,$t('pages.home.child.achievement.child.birdsOfLife.works.content[5].name'),$t('pages.home.child.achievement.child.birdsOfLife.works.content[5].info'))">
                            {{ $t('pages.home.child.achievement.child.birdsOfLife.works.content[5].name') }}</Item>
                    </div>
                </PartItemNull>

                <ScreenShots url="https://www.youtube.com/embed/6kkuhbDiyOw">
                    <template #title>{{ $t('pages.home.child.achievement.child.birdsOfLife.screen.title') }}</template>
                    <div class="aspect-video mb-14 w-full bg-gray-300"> </div>
                    <div class="aspect-video mb-14 w-full bg-gray-300"> </div>
                    <div class="aspect-video mb-14 w-full bg-gray-300"> </div>
                </ScreenShots>
            </template>
        </ProjectLayout>
    </div>

</template>

<style scoped>

</style>