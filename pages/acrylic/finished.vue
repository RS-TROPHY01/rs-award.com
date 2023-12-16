<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสำเร็จรูปโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <div v-for="(f, index) in fs" :key="index">
        <img
          :src="'/catalog/finished_acrylic/' + f.src + '.webp'"
          alt="โล่รางวัลอะคริลิคสำเร็จรูป"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const fs = ref([{ src: "1" }]);

onMounted(() => {
  for (let i = 2; i <= 13; i++) {
    fs.value.push({ src: i.toString() });
  }
});
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
