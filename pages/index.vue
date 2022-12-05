<script setup>
import ProjectItem from '.././components/ProjectItem/ProjectItem.vue'
import EventItem from '.././components/EventItem/EventItem.vue'
import PartTitle from '~~/components/PartTitle/PartTitle.vue';
import HrefBottom from '~~/components/HrefBottom/HrefBottom.vue';
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
}; 345
</script>

<template>

    <div>
        <div class="aspect-video wrap-8 w-full mb-10 bg-gray-300"> </div>

        <div class="wrap-6 mb-10">
            <PartTitle class="mt-0 mb-10 ml-0">
                <template #en>About the project</template>
                <template #title>{{ $t('pages.home.info.title') }}</template>
            </PartTitle>

            <div class="relative max-w-4xl mx-auto my-0 ">
                <div class="mb-10 text-3xl text-blue-400 ">
                    {{ $t('pages.home.info.title2') }}
                </div>
                <div class="mb-3 ">
                    {{ $t('pages.home.info.content.0') }}<br>
                    {{ $t('pages.home.info.content.1') }}<br>
                    {{ $t('pages.home.info.content.2') }}<br>
                    {{ $t('pages.home.info.content.3') }}<br>
                    {{ $t('pages.home.info.content.4') }}<br>
                    {{ $t('pages.home.info.content.5') }}<br>
                    {{ $t('pages.home.info.content.4') }}<br>
                    {{ $t('pages.home.info.content.6') }}<br>
                </div>
                <div class="text-right">
                    <HrefBottom href="/about">{{ $t('pages.home.info.button') }}</HrefBottom>
                </div>
            </div>
        </div>

        <div class="wrap-6 mb-32">
            <PartTitle class="mt-0 mb-5 ml-0">
                <template #en>Achievement</template>
                <template #title>{{ $t('pages.home.achievement.title') }}</template>
            </PartTitle>

            <div class="inline-flex justify-between w-full mb-28">
                <ProjectItem class="transform translate-y-32" href="/achievement/modelView" color="yellow">
                    <template #name>
                        {{ $t('pages.home.achievement.content.0.title') }}
                    </template>
                    <template #year>
                        {{ $t('pages.home.achievement.content.0.year') }}
                    </template>
                </ProjectItem>
                <ProjectItem class="transform translate-y-16" href="/achievement/hideWordsMan" color="blue">
                    <template #name>
                        {{ $t('pages.home.achievement.content.4.title') }}
                    </template>
                    <template #info>
                        {{ $t('pages.home.achievement.content.4.info') }}
                    </template>
                    <template #year>
                        {{ $t('pages.home.achievement.content.4.year') }}
                    </template>
                </ProjectItem>
                <ProjectItem href="/achievement/birdsOfLife" color="red">
                    <template #name>
                        {{ $t('pages.home.achievement.content.3.title') }}
                    </template>
                    <template #info>
                        {{ $t('pages.home.achievement.content.3.info') }}
                    </template>
                    <template #year>
                        {{ $t('pages.home.achievement.content.3.year') }}
                    </template>
                </ProjectItem>
            </div>
            <div class="text-right max-w-4xl mx-auto">
                <HrefBottom href="/achievement/">{{ $t('pages.home.achievement.button') }}</HrefBottom>
            </div>
        </div>

        <div class="wrap-6 ">
            <PartTitle class="mt-0 mb-5 ml-0">
                <template #en>Events</template>
                <template #title>{{ $t('pages.home.Event.title') }}</template>
            </PartTitle>

            <div class="flex flex-col justify-between max-w-4xl mx-auto mb-8">
                <EventItem href="" img="" isNew="true">
                    <template #name>象偶奇遇記A</template>
                    <template #place>國立臺灣文學館 兒童樂園</template>
                    <template #year>2022.07.21</template>
                </EventItem>
                <EventItem href="" img="" isNew="true">
                    <template #name>象偶奇遇記A</template>
                    <template #place>國立臺灣文學館 兒童樂園</template>
                    <template #year>2022.07.21</template>
                </EventItem>
                <EventItem href="" img="">
                    <template #name>象偶奇遇記A</template>
                    <template #place>國立臺灣文學館 兒童樂園</template>
                    <template #year>2022.07.21</template>
                </EventItem>
                <EventItem href="" img="" >
                    <template #name>象偶奇遇記A</template>
                    <template #place>國立臺灣文學館 兒童樂園</template>
                    <template #year>2022.07.21</template>
                </EventItem>
                <EventItem href="" img="" >
                    <template #name>象偶奇遇記A</template>
                    <template #place>國立臺灣文學館 兒童樂園</template>
                    <template #year>2022.07.21</template>
                </EventItem>

            </div>
            <div class="text-center">
                <HrefBottom href="/eventRecord/">{{ $t('pages.home.Event.button') }}</HrefBottom>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>