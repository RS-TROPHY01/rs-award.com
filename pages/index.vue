<script setup lang="ts">
const title = "RS AWARD | โล่รางวัลคริสตัล โล่อะคริลิค คุณภาพดีแข็งแรงทนทาน";
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
  <AppHeroSection />
  <div class="mx-auto items-center gap-x-8 gap-y-16 p-2 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <h2 class="text-3xl text-gray-900 sm:text-4xl mx-auto">
        RS AWARD โล่รางวัลคุณภาพดี
      </h2>
      <p class="mt-4 text-gray-500 mx-auto">
        RS AWARD บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน มีให้เลือกทั้ง
        โล่รางวัลคริสตัล โล่รางวัลอะคริลิคสำเร็จรูป โล่รางวัลอะคริลิคสั่งทำ
        พร้อมมีทีมกราฟิกดีไซน์บริการการออกแบบฟรี
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </p>
    </div>
    <div class="py-4">
      <h1 class="text-center">โล่รางวัล</h1>
      <AppCategory />
      <div class="mx-auto">
        <h2 class="text-center">ผลงานที่ผ่านมา</h2>
        <div class="gap-2 grid grid-cols-2 md:grid-cols-4">
          <img
            v-for="index in [3, 4, 5, 6]"
            :key="index"
            :src="`/custom_acrylic/${index}.webp`"
            width="295px"
            height="295px"
            loading="lazy"
            alt="ผลงานโล่รางวัลที่ผ่านมา"
            title="ผลงานโล่รางวัลที่ผ่านมา"
            aria-label="ผลงานโล่รางวัลที่ผ่านมา"
            class="scaleup"
          />
        </div>
      </div>
      <AppOurCustomer />
    </div>
  </div>
</template>
