<template>
  <h2 class="text-center p-2">ลูกค้าของเรา</h2>
  <div id="loop">
    <div v-for="(customer, index) in customers" :key="index">
      <img width="100px" height="100px" :src="customer.src" />
    </div>
  </div>
</template>
<style>
#loop {
  gap: 0.5rem /* 8px */;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
@media (min-width: 768px) {
  #loop {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
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
      ],
    };
  },
};
</script>
