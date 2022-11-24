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
            homeImage:""
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
    </div>


</template>

<style>

</style>