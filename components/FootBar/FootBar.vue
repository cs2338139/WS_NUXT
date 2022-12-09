<script setup>
import FootMenuItem from "./src/FootMenuItem.vue";
</script>

<template>
  <footer class="h-footer relative w-full overflow-hidden">
    <div class="bg-custom-0 parallel h-full">
      <div class="-parallel border-3 relative h-full">
        <div class="max-w-8xl flex flex-row justify-between h-full mx-auto my-0">
          <img src="~/public/Image/UI/LOGOlarge.svg" style="width:400px" class="self-end my-16" />

          <div class="h-2/5 flex flex-col justify-between items-end self-center">
            <FootMenuItem href="">{{ $t('foot.copyright') }}</FootMenuItem>
            <FootMenuItem href="">{{ $t('foot.address') }}</FootMenuItem>
            <FootMenuItem href="">{{ $t('foot.tel') }}</FootMenuItem>
            <FootMenuItem href="">{{ $t('foot.fax') }}</FootMenuItem>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-custom-0  h-40">

    </div> -->
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
