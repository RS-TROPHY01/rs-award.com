<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสำเร็จรูปโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <AppProduct :products="products" />
  </div>
</template>
<script setup lang="ts">
import productAcrylic1000 from "@/assets/Acrylic/productAcrylic1000";
import productAcrylic3000 from "@/assets/Acrylic/productAcrylic3000";
import productAcrylic300 from "@/assets/Acrylic/productAcrylic300";
let products = [
  ...productAcrylic1000,
  ...productAcrylic3000,
  ...productAcrylic300,
];

useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
  ogTitle: "RS AWARD | ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
  twitterTitle: "RS AWARD | ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  ogDescription:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  twitterDescription:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  ogImage: "/panel/finished_acrylic.webp",
  twitterImage: "/panel/finished_acrylic.webp",
  keywords:
    "RS AWARD, โล่รางวัล, โล่อะคริลิคสำเร็จรูป, โล่รางวัลอะคริลิคสำเร็จรูป, ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
});
</script>
