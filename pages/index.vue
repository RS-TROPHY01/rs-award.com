<template>
  <AppHeroSection />
  <div class="bg-white py-4">
    <div class="mx-auto items-center gap-x-8 gap-y-16 p-2 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-3xl text-gray-900 sm:text-4xl mx-auto">
          RS AWARD โล่รางวัลคุณภาพดี
        </h2>
        <p class="mt-4 text-gray-500 mx-auto">
          บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน
          มีให้เลือกทั้งโล่รางวัลคริสตัล โล่รางวัลอะคริลิค
          โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
        </p>
      </div>
      <div class="py-4">
        <h1 class="text-center">โล่รางวัล</h1>
        <AppCategory />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title:
    "RS AWARD | จัดจำหน่าย โล่รางวัลคริสตัล โล่อะคริลิค คุณภาพดีแข็งแรงทนทาน",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน มีให้เลือกทั้งโล่รางวัลคริสตัล โล่รางวัลอะคริลิค โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, โล่อะคริลิค, โล่รางวัลอะคริลิค",
});
</script>
