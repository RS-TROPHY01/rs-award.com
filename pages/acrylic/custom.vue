<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสั่งทำ</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสั่งทำ
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <div v-for="(c, index) in cs" :key="index">
        <img :src="'/catalog/custom_acrylic/' + c.src + '.webp'" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลอะคริลิคสั่งทำ",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่อะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสั่งทำ, ราคาโล่รางวัลอะคริลิคสั่งทำ",
});
const cs = ref([{ src: "0" }]);
onMounted(() => {
  for (let i = 1; i <= 13; i++) {
    cs.value.push({
      src: i.toString(),
    });
  }
});
</script>
