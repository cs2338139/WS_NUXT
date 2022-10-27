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
    <div class="absolute z-10 w-full">
      <div class="w-8 image h-11 bg-Star-image right-10 top-10 4xl:scale-150"></div>
      <div class="w-8 image h-11 bg-Star-image left-32 top-8 4xl:scale-150 4xl:left-60 3xl:opacity-0"></div>
      <div class="w-8 image h-11 bg-Star-image right-154 top-28 4xl:scale-150"></div>
      <div class="w-8 rotate-45 image h-11 bg-Star-image left-80 top-32 4xl:scale-150 4xl:left-100"></div>
      <div class="h-32 image w-36 bg-Spaceship-image right-24 top-24 4xl:scale-150 4xl:right-44"></div>
      <div class="h-48 image w-48 bg-Cloud-image left-0 top-16 2xl:hidden 4xl:scale-150 4xl:origin-left"></div>
    </div>
    <NavMenu _class="h-32">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:120px" />
      </template>
      <NavMenuItem href="/">首頁</NavMenuItem>

      <NavMenuItem href="/Information">關於策展</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-3">
        <template #menuName>展覽介紹+</template>
        <MenuListItem href="/Exhibitions/GoodNight">晚安屋<template #en>Goodnight Room</template></MenuListItem>
        <MenuListItem href="/Exhibitions/Dream">夢境房<template #en>Dreamland Room</template></MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-4">
        <template #menuName>線上展覽+</template>
        <MenuListItem href="/OnlineTour">策展人導覽<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItemLink href="/3DWeb/3Dindex.html" target="_blank">虛擬實境<template #en>Virtual Reality Tours</template></MenuListItemLink>
        <MenuListItemLink href="/「夢境漫遊：繪本藝術展」導覽教育手冊.pdf" target="_blank">導覽教育手冊<template #en>Brochure</template></MenuListItemLink>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-7">
        <template #menuName>推廣活動+</template>
        <MenuListItem href="/Activities/WorkShops">工作坊<template #en>Workshops</template></MenuListItem>
        <MenuListItem href="/Activities/Forums">分享會<template #en>Lectures</template></MenuListItem>
        <MenuListItem href="/Activities/Meetings/0">研習營<template #en>Workshop</template></MenuListItem>
        <MenuListItem href="/Activities/ChildrenArts">兒童美學活動<template #en>Child Activities Lessons</template></MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-4">
        <template #menuName>宣導影片+</template>
        <MenuListItem href="/Videos/PreVideos">前導宣傳片<template #en>Teaser Trailer</template></MenuListItem>
        <MenuListItem href="/Videos/RecordVideos">訪談紀錄片<template #en>Documentary</template></MenuListItem>
        <MenuListItem href="/Videos/Animations">繪本小動畫<template #en>Animated promo</template></MenuListItem>
      </NavMenuList>

      <!-- <NavMenuItemLink href="" target="_blank">預約導覽</NavMenuItemLink> -->
      <NavMenuItem href="/Reserve">預約導覽</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-4">
        <template #menuName>活動花絮+</template>
        <MenuListItem href="/Albums/Activity">活動紀錄<template #en>Exhibition Records</template></MenuListItem>
        <MenuListItem href="/Albums/Exhibition">展覽花絮<template #en>Event Records</template></MenuListItem>
      </NavMenuList>

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
  .image {
    @apply absolute bg-no-repeat bg-w100%;
  }
}
</style>
