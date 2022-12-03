<script setup>
import ProjectItem_2 from '~~/components/ProjectItem_2/ProjectItem_2.vue';
import PartTitle from '~~/components/PartTitle/PartTitle.vue';
const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.child.achievement.title'),
})
</script>


<template>
    <div class="wrap-6">
        <PartTitle class="mt-0 mb-14 ml-0">
            <template #en>Achievement</template>
            <template #title>{{ $t('pages.home.child.achievement.info.title') }}</template>
        </PartTitle>

        <div class="flex flex-col justify-between mx-auto mb-10">
            <ProjectItem_2 href="" :name="$t('pages.home.child.achievement.info.content.0.title')"
                :word="$t('pages.home.child.achievement.info.content.0.words.0')"
                :year="$t('pages.home.child.achievement.info.content.0.year')">
            </ProjectItem_2>
            <ProjectItem_2 href="" :name="$t('pages.home.child.achievement.info.content.4.title')"
                :info="$t('pages.home.child.achievement.info.content.4.info')"
                :word="$t('pages.home.child.achievement.info.content.4.words.0')"
                :year="$t('pages.home.child.achievement.info.content.4.year')">
            </ProjectItem_2>
            <ProjectItem_2 href="" :name="$t('pages.home.child.achievement.info.content.3.title')"
                :info="$t('pages.home.child.achievement.info.content.3.info')"
                :word="$t('pages.home.child.achievement.info.content.3.words.0')"
                :year="$t('pages.home.child.achievement.info.content.3.year')">
            </ProjectItem_2>
            <ProjectItem_2 href="" :name="$t('pages.home.child.achievement.info.content.2.title')"
                :info="$t('pages.home.child.achievement.info.content.2.info')"
                :word="$t('pages.home.child.achievement.info.content.2.words.0')"
                :year="$t('pages.home.child.achievement.info.content.2.year')">
            </ProjectItem_2>
            <ProjectItem_2 href="" :name="$t('pages.home.child.achievement.info.content.1.title')"
                :info="$t('pages.home.child.achievement.info.content.1.info')"
                :word="$t('pages.home.child.achievement.info.content.1.words.0')"
                :year="$t('pages.home.child.achievement.info.content.1.year')">
            </ProjectItem_2>

        </div>
    </div>

</template>

<style>

</style>