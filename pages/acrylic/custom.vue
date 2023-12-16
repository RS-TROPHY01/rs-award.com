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

<script>
export default {
  data() {
    return {
      cs: [{ src: "0" }],
    };
  },
  mounted() {
    for (let i = 1; i <= 13; i++) {
      this.cs.push({
        src: i.toString(),
      });
    }
  },
};
</script>
