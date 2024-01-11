<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลคริสตัล</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลคริสตัล
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <AppProduct :products="products" />
  </div>
</template>
<script setup lang="ts">
import productCrystal2000 from "@/assets/Crystal/productCrystal2000";
import productCrystal20000 from "@/assets/Crystal/productCrystal20000";
let products = [...productCrystal2000, ...productCrystal20000];
const title = "RS AWARD | โล่รางวัลคริสตัล";
const description =
  "บริษัทจัดจำหน่ายโล่รางวัลคริสตัลโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย";
const image = "/panel/finished_crystal.webp";
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  twitterDescription: description,
  ogDescription: description,
  ogImage: image,
  twitterImage: image,
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, ราคาโล่รางวัลคริสตัล",
});
</script>
