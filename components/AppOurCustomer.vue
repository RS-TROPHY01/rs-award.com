<template>
  <h2 class="text-center p-2">ลูกค้าของเรา</h2>
  <div class="gap-2 grid grid-cols-4">
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
        { name: "KFC", src: "/customer/kfc.webp" },
        { name: "Lazada", src: "/customer/lazada.webp" },
        { name: "Shopee", src: "/customer/shopee.webp" },
        { name: "SCB", src: "/customer/SCB.webp" },
        { name: "KBank", src: "/customer/KBank.webp" },
        { name: "BBL", src: "/customer/BBL.webp" },
        { name: "GSB", src: "/customer/GSB.webp" },
        { name: "KTB", src: "/customer/KTB.webp" },
      ],
    };
  },
};
</script>
