<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลคริสตัล</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลคริสตัล
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <AppProduct :products="productCrystal" />
  </div>
</template>
<script setup lang="ts">
import productCrystal from "@/assets/productCrystal";
useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลคริสตัล",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลคริสตัลโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, ราคาโล่รางวัลคริสตัล",
  ogTitle: "RS AWARD | ราคาโล่รางวัลคริสตัล",
  ogDescription:
    "บริษัทจัดจำหน่ายโล่รางวัลคริสตัลโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  ogImage: "/catalog/finished_crystal/",
});
</script>
