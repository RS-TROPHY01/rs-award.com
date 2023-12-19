<template>
  <div class="mx-auto">
    <h2 class="text-center">ผลงานที่ผ่านมา</h2>
    <div id="pastwork">
      <img
        v-for="index in 3"
        :key="index"
        :src="`/pastwork/${index}.jpg`"
        loading="lazy"
        alt="ผลงานโล่รางวัลที่ผ่านมา"
        title="ผลงานโล่รางวัลที่ผ่านมา"
        aria-label="ผลงานโล่รางวัลที่ผ่านมา"
      />
    </div>
  </div>
</template>
<style>
#pastwork {
  gap: 0.5rem /* 8px */;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>
