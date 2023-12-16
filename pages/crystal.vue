<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลคริสตัล</h1>
      <div class="mx-auto">
        บริษัทจัดจำหน่ายโล่รางวัลคริสตัล
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <div v-for="(photo, index) in photos" :key="index">
        <img :src="'/catalog/finished_crystal/' + photo.src + '.jpg'" />
      </div>
    </div>
  </div>
</template>

<script>
useSeoMeta({
  title: "RS AWARD | ราคาโล่รางวัลคริสตัล",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลคริสตัลโดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords:
    "RS AWARD, โล่รางวัล, โล่คริสตัล, โล่รางวัลคริสตัล, ราคาโล่รางวัลคริสตัล",
});
export default {
  data() {
    return {
      photos: [{ src: "1" }],
    };
  },
  mounted() {
    for (let i = 2; i <= 10; i++) {
      this.photos.push({ src: i.toString() });
    }
  },
};
</script>
