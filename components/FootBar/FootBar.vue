<script setup>
import FootMenuItem from "./src/FootMenuItem.vue";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();
</script>

<template>
  <footer class="relative w-full overflow-hidden h-112">
    <div class="h-full bg-custom-0 parallel">
      <div class="relative h-full -parallel border-3">
        <div class="flex flex-row justify-between h-full wrap-8 xl:flex-col">
          <div class="self-end my-16 xl:mb-12">
            <img src="~/public/Image/UI/LOGOmidCH.svg" style="width: 400px" v-if="locale === 'zh'" />
            <img src="~/public/Image/UI/LOGOmidEN.svg" style="width: 400px" v-if="locale === 'en'" />
          </div>

          <div class="flex flex-col items-end self-center justify-between h-2/5 xl:h-3/5 xl:mb-5 xl:items-start xl:self-start">
            <FootMenuItem href="">{{ $t("foot.copyright") }}</FootMenuItem>
            <FootMenuItem href="">{{ $t("foot.address") }}</FootMenuItem>
            <FootMenuItem href="">{{ $t("foot.tel") }}</FootMenuItem>
            <FootMenuItem href="">{{ $t("foot.fax") }}</FootMenuItem>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.-parallel {
  @apply origin-top-right;
  transform: skew(0, 7deg);
}

.parallel {
  @apply origin-top-right;
  transform: skew(0, -7deg);
}
</style>
