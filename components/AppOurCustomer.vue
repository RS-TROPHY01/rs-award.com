<template>
  <h2 class="text-center p-2">ลูกค้าของเรา</h2>
  <div class="gap-2 grid grid-cols-4 md:grid-cols-6">
    <div v-for="(customer, index) in customers" :key="index" class="m-auto">
      <img
        width="240px"
        class="m-auto"
        :alt="customer.name"
        :title="customer.name"
        :aria-label="customer.name"
        :src="customer.src"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customers: [
        { name: "ธนาคารไทยพาณิชย์", src: "/customer/SCB.webp" },
        { name: "ธนาคารกสิกรไทย", src: "/customer/KBank.webp" },
        { name: "ธนาคารกรุงเทพ", src: "/customer/BBL.webp" },
        { name: "ธนาคารออมสิน", src: "/customer/GSB.webp" },
        { name: "ธนาคารกรุงไทย", src: "/customer/KTB.webp" },
        { name: "Lazada", src: "/customer/lazada.webp" },
        { name: "Shopee", src: "/customer/shopee.webp" },
        { name: "KFC", src: "/customer/kfc.webp" },
        { name: "การท่าอากาศยานแห่งประเทศไทย", src: "/customer/aot.webp" },
        { name: "Toyota", src: "/customer/toyota.webp" },
        { name: "ปูนซิเมนต์ไทย", src: "/customer/SCG.webp" },
      ],
    };
  },
};
</script>
