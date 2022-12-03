<script setup>
const { locale, setLocale, t } = useI18n();

</script>

<template>
    <div>
        <template v-if="locale === 'zh'">
            <span class="text-2xl text-custom-1 -tracking-wider">
                <slot name="en"></slot>
            </span>
            <br>
        </template>
        <span class="text-3xl font-bold" :class="({ 'tracking-custom-0' :locale === 'zh' })">
            <slot name="title"></slot>
        </span>
    </div>
</template>

<style scoped>


</style>