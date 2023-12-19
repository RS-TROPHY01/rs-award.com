<template>
  <h2 class="text-center p-2">ลูกค้าของเรา</h2>
  <div class="gap-2 grid grid-cols-5 md:grid-cols-10">
    <div v-for="(customer, index) in customers" :key="index">
      <img width="100px" height="100px" :src="customer.src" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customers: [
        { name: "KFC", src: "/customer/kfc.png" },
        { name: "Lazada", src: "/customer/lazada.png" },
        { name: "Shopee", src: "/customer/shopee.webp" },
        { name: "SCB", src: "/customer/SCB.webp" },
        { name: "KBank", src: "/customer/KBank.webp" },
      ],
    };
  },
};
</script>
