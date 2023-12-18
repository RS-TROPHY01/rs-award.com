<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลคริสตัล</h1>
      <NuxtImg
        alt="โล่รางวัลคริสตัล"
        title="โล่รางวัลคริสตัล"
        class="mx-auto"
        src="/panel/finished_crystal.webp"
      />
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลคริสตัล
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <NuxtImg
        v-for="imageIndex in 10"
        :key="imageIndex"
        :src="`/catalog/finished_crystal/${imageIndex}.webp`"
        loading="lazy"
        sizes="1654px"
        title="โล่รางวัลคริสตัล"
        alt="โล่รางวัลคริสตัล"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
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
