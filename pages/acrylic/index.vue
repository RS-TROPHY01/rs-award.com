<template>
  <div class="py-4">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center">โล่รางวัลอะคริลิค</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิค
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-2">
      <div
        v-for="image in images"
        :key="image.name"
        class="relative h-full transition-transform duration-300 hover:scale-105"
      >
        <router-link :to="image.link">
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            class="w-full h-auto rounded-lg bg-gray-100"
            aria-label="โล่รางวัลอะคริลิค"
          />
          <div class="mx-auto text-center">
            <h2>{{ image.name }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลอะคริลิค",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่อะคริลิค, โล่รางวัลอะคริลิค, ราคาโล่รางวัลอะคริลิค",
});
const images = [
  {
    name: "โล่อะคริลิคสำเร็จรูป",
    link: "/acrylic/finished",
    src: "/panel/finished_acrylic.webp",
    alt: "",
  },
  {
    name: "โล่อะคริลิคสั่งทำ",
    link: "/acrylic/custom",
    src: "/panel/custom_acrylic.webp",
    alt: "",
  },
];
</script>
