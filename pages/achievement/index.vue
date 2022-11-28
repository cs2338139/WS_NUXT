<script setup>
import ProjectItem_2 from '~~/components/ProjectItem_2/ProjectItem_2.vue';
const { locale, setLocale, t } = useI18n();
useHead({
    title: t('pages.home.child.achievement.title'),
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
    <div class="wrap-6 flex flex-col justify-between  mx-auto mb-10">
        <ProjectItem_2 href="" name="生命之鳥" info="電子繪本互動遊戲"
            word="一兩行的簡短介紹一兩行的簡短介紹，一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹。" year="2020-2022"></ProjectItem_2>
        <ProjectItem_2 href="" name="生命之鳥" info="電子繪本互動遊戲"
            word="一兩行的簡短介紹一兩行的簡短介紹，一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹。" year="2020-2022"></ProjectItem_2>
        <ProjectItem_2 href="" name="生命之鳥" info="電子繪本互動遊戲"
            word="一兩行的簡短介紹一兩行的簡短介紹，一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹。" year="2020-2022"></ProjectItem_2>
        <ProjectItem_2 href="" name="生命之鳥" info="電子繪本互動遊戲"
            word="一兩行的簡短介紹一兩行的簡短介紹，一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹。" year="2020-2022"></ProjectItem_2>
        <ProjectItem_2 href="" name="生命之鳥" info="電子繪本互動遊戲"
            word="一兩行的簡短介紹一兩行的簡短介紹，一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹一兩行的簡短介紹。" year="2020-2022"></ProjectItem_2>
    </div>

</template>

<style>

</style>