<template>
  <div>
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center py-2">โล่รางวัลอะคริลิคสำเร็จรูป</h1>
      <div class="mx-auto">
        s บริษัทจัดจำหน่ายโล่รางวัลอะคริลิคสำเร็จรูป
        โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <div v-for="(f, index) in fs" :key="index">
        <img
          :src="'/catalog/finished_acrylic/' + f.src + '.jpg'"
          alt="Finished Acrylic"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fs: [{ src: "1" }],
    };
  },
  mounted() {
    for (let i = 2; i <= 13; i++) {
      this.fs.push({ src: i.toString() });
    }
  },
};
</script>
