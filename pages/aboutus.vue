<script setup lang="ts">
const title = "RS AWARD | เกี่ยวกับเรา";
const description =
  "บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย";
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
  keywords: "RS AWARD, เกี่ยวกับเรา",
});
</script>
<template>
  <div>
    <img
      src="/panel/hero_section.webp"
      alt="logo"
      title="logo"
      class="z-10 w-full rounded"
    />
    <div class="w-full px-6 mb-10 lg:mb-0">
      <div class="pl-4 mb-6 border-l-4 border-blue-500">
        <h1 class="text-sm uppercase m-2">เกี่ยวกับเรา ?</h1>
        <h2 class="mt-2 text-3xl font-black md:text-5xl">RS AWARD</h2>
      </div>
      <p class="mb-6 text-base leading-7">
        RS AWARD
        เป็นบริษัทจัดจำหน่วยโล่รางวัลชั้นนำในประเทศด้วยราคาโรงงานโดยจัดจำหน่ายโล่รางวัล
        ราคาย่อมเยา เปี่ยมคุณภาพ
      </p>
      <div class="m-auto">
        <h2>วิธีการชำระเงิน</h2>
        <div class="flex m-auto p-2">
          <img class="w-10" src="\logo\scb.webp" alt="scb logo" />
          <div class="my-auto p-1">329 2 66927 8</div>
        </div>
        <div class="flex m-auto p-2">
          <img class="w-10" src="\logo\kbank.webp" alt="kbank logo" />
          <div class="my-auto p-1">018 8 83682 8</div>
        </div>
      </div>
    </div>
  </div>
</template>
