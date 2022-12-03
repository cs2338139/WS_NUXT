<script setup>
import PartTitle from '~~/components/PartTitle/PartTitle.vue';
import HrefBottom from '~~/components/HrefBottom/HrefBottom.vue';
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
    <div>
        <div class="wrap-6 flex justify-between">

            <div class="w-5/12">
                <PartTitle class="mt-0 mb-10 ml-0">
                    <template #en>About the project</template>
                    <template #title>{{ $t('pages.home.child.about.info.title')
                    }}</template>
                </PartTitle>

                <div class="mb-10">
                    {{ $t('pages.home.child.about.info.content.0') }}
                    <br> <br>
                    {{ $t('pages.home.child.about.info.content.1') }}
                    <br> <br>
                    {{ $t('pages.home.child.about.info.content.2') }}
                </div>
                <div class="text-right">
                    <HrefBottom href="/achievement/">{{ $t('pages.home.achievement.button')
                    }}</HrefBottom>
                </div>
            </div>

            <div class="w-5/12 bg-gray-300 h-162"> </div>
        </div>
    </div>
</template>

<style>

</style>