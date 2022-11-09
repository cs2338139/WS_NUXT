<script setup>
const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.child.achievement.child.birdsOfLife.title'),
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
        <div class="wrap">
            <div class="mb-24 px-20 lg:mb-14 md:px-0">
            </div>

            <div class="flex flex-row h-300px md:h-480px md:flex-col px-20 md:px-10" ref="target">
            </div>
        </div>
    </div>

    <div class="absolute w-full bottom-0">
        <div class="bg-bg-1-image h-8"></div>
        <div class="bg-bg-1-Color h-96" ref="bg"></div>
    </div>
</template>

<style>

</style>