<template>
  <h2 class="text-center p-2">ลูกค้าของเรา</h2>
  <div id="customer">
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
<style>
#customer {
  gap: 0.5rem /* 8px */;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
</style>
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
        { name: "BBL", src: "/customer/BBL.webp" },
        { name: "GSB", src: "/customer/GSB.png" },
        { name: "KTB", src: "/customer/KTB.jpg" },
      ],
    };
  },
};
</script>
