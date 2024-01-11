<script setup lang="ts">
const title =
  "RS AWARD | จัดจำหน่าย โล่รางวัลคริสตัล โล่อะคริลิค คุณภาพดีแข็งแรงทนทาน";
const description =
  "บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน มีให้เลือกทั้งโล่รางวัลคริสตัล โล่รางวัลอะคริลิค โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย";
const image = "/panel/hero_section.webp";
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: image,
  twitterImage: image,
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, โล่อะคริลิค, โล่รางวัลอะคริลิค",
});
</script>
<template>
  <div class="mx-auto items-center gap-x-8 gap-y-16 p-2">
    <h1 class="text-center">โล่รางวัล</h1>
    <AppCategory />
  </div>
</template>
