<template>
  <div class="mx-auto">
    <h2 class="text-center">ผลงานที่ผ่านมา</h2>
    <div class="gap-2 grid grid-cols-3">
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
