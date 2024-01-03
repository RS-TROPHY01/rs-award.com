<template>
  <div>
    <h2 class="text-center p-2">ลูกค้าของเรา</h2>
    <div class="gap-2 grid grid-cols-4 lg:grid-cols-8 max-w-4xl mx-auto">
      <img
        v-for="(customer, index) in customers"
        :key="index"
        width="194px"
        height="194px"
        class="m-auto scaleup"
        :alt="customer.name"
        :title="customer.name"
        :aria-label="customer.name"
        :src="customer.src"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const customers = [
  { name: "ธนาคารไทยพาณิชย์", src: "/logo/scb.webp" },
  { name: "ธนาคารกสิกรไทย", src: "/logo/kbank.webp" },
  { name: "ธนาคารกรุงเทพ", src: "/logo/bbl.webp" },
  { name: "ธนาคารออมสิน", src: "/logo/gsb.webp" },
  { name: "ธนาคารกรุงไทย", src: "/logo/ktb.webp" },
  { name: "ธนาคารกรุงศรีอยุธยา", src: "/logo/kma.webp" },
  { name: "Lazada", src: "/logo/lazada.webp" },
  { name: "Shopee", src: "/logo/shopee.webp" },
  { name: "ช่องเวิร์คพอยท์", src: "/logo/workpoint.webp" },
  { name: "KFC", src: "/logo/kfc.webp" },
  { name: "Toyota", src: "/logo/toyota.webp" },
  { name: "ปูนซิเมนต์ไทย", src: "/logo/scg.webp" },
  { name: "การท่าอากาศยานแห่งประเทศไทย", src: "/logo/aot.webp" },
  { name: "สิงห์ คอร์เปอเรชั่น", src: "/logo/singha.webp" },
  { name: "ปตท.", src: "/logo/ptt.webp" },
  { name: "มหาวิทยาลัยธรรมศาสตร์", src: "/logo/tu.webp" },
];
</script>
