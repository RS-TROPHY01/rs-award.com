<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสั่งทำ</h1>
      <img
        alt="โล่รางวัลอะคริลิคสั่งทำ"
        title="โล่รางวัลอะคริลิคสั่งทำ"
        class="mx-auto"
        src="/panel/custom_acrylic.webp"
      />
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสั่งทำ
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <img
        v-for="index in 14"
        :key="index"
        :src="`/catalog/custom_acrylic/${index}.webp`"
        loading="lazy"
        alt="โล่รางวัลอะคริลิคสั่งทำ"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลอะคริลิคสั่งทำ",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่อะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสั่งทำ, ราคาโล่รางวัลอะคริลิคสั่งทำ",
  ogTitle: "RS AWARD | ราคาโล่รางวัลอะคริลิคสั่งทำ",
  ogDescription:
    "RS AWARD, โล่รางวัล, โล่อะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสั่งทำ, ราคาโล่รางวัลอะคริลิคสั่งทำ",
  ogImage: "/catalog/custom_acrylic/",
});
</script>
