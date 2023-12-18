<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
      <NuxtImg
        alt="โล่รางวัลอะคริลิคสำเร็จรูป"
        title="โล่รางวัลอะคริลิคสำเร็จรูป"
        class="mx-auto"
        src="/panel/finished_acrylic.webp"
      />
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสำเร็จรูปโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <NuxtImg
        v-for="imageIndex in 13"
        :key="imageIndex"
        :src="`/catalog/finished_acrylic/${imageIndex}.webp`"
        loading="lazy"
        alt="โล่รางวัลอะคริลิคสำเร็จรูป"
        title="โล่รางวัลอะคริลิคสำเร็จรูป"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่อะคริลิคสำเร็จรูป, โล่รางวัลอะคริลิคสำเร็จรูป, ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
  ogTitle: "RS AWARD | ราคาโล่รางวัลอะคริลิคสำเร็จรูป",
  ogDescription:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  ogImage: "/catalog/finished_acrylic/",
});
</script>
