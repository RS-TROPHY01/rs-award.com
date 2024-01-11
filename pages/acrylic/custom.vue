<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสั่งทำ</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสั่งทำ
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <img
        v-for="index in 6"
        :key="index"
        :src="`/custom_acrylic/${index}.webp`"
        loading="lazy"
        alt="โล่รางวัลอะคริลิคสั่งทำ"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const title = "RS AWARD | ราคาโล่รางวัลอะคริลิคสั่งทำ";
const description =
  "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย";
const image = "/panel/custom_acrylic.webp";
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
    "RS AWARD, โล่รางวัล, โล่อะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสั่งทำ, ราคาโล่รางวัลอะคริลิคสั่งทำ",
});
</script>
