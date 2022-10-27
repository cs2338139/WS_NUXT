<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import MenuListItemLink from "./src/MenuListItem-Link.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
import NavMenuItemLink from "./src/NavMenuItem-Link.vue";
const homeImage = new URL("../../assets/Image/UI/Logo.png", import.meta.url).href;
</script>

<template>
  <nav class="fixed top-0 z-10 w-full text-item">
    <NavMenu _class="h-32">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:120px" />
      </template>
      <NavMenuItem href="/">首頁</NavMenuItem>

      <NavMenuItem href="/Information">關於策展</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-4">
        <template #menuName>線上展覽+</template>
        <MenuListItem href="/OnlineTour">策展人導覽<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItemLink href="/3DWeb/3Dindex.html" target="_blank">虛擬實境<template #en>Virtual Reality Tours</template></MenuListItemLink>
      </NavMenuList>

      <NavMenuItem href="/Reserve">預約導覽</NavMenuItem>
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
