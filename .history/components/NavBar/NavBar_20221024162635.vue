<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import MenuListItemLink from "./src/MenuListItem-Link.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
import NavMenuItemLink from "./src/NavMenuItem-Link.vue";
const homeImage = new URL("/assets/Image/UI/logo.png", import.meta.url).href;
</script>

<template>
  <nav class="fixed top-0 z-10 w-full text-item">
    <NavMenu _class="h-32">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:120px" />
      </template>

      <NavMenuItem href="/about">關於計畫</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-4">
        <template #menuName>計畫成果</template>
        <MenuListItem href="/OnlineTour">3D掃描<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItem href="/OnlineTour">夢獸之島<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItem href="/OnlineTour">1940<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItem href="/OnlineTour">生命之鳥<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItem href="/OnlineTour">藏字人<template #en>Online Curator Tour</template></MenuListItem>
      </NavMenuList>

    </NavMenu>
    <div class="h-10 bg-nav-image mt-28"></div>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer component {
  .text-item {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
