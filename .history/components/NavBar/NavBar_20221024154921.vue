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

      <NavMenuItemLink href="https://www.arte.gov.tw/" target="_blank">國立臺灣藝術教育館</NavMenuItemLink>
      <NavMenuItemLink href="https://www.facebook.com/%E5%A4%A2%E5%A2%83%E6%BC%AB%E9%81%8A%E7%B9%AA%E6%9C%AC%E8%97%9D%E8%A1%93%E5%B1%95-105928812151999" target="_blank" _class="bg-inherit"><ion-icon name="logo-facebook" /></NavMenuItemLink>
    </NavMenu>
    <div class="h-10 bg-nav-image mt-28"></div>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: rgb(255, 255, 255);
  font-size: 48px;
  transform: translate(0, -25%);
}

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
@layer base {
  nav span {
  }
}

@layer components {

}
</style>
