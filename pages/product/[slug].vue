<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <img :src="product.img" />
    </div>
    <div class="m-auto grid grid-cols-1 text-center">
      <h1 class="p-4">{{ product.name }}</h1>
      <div>
        <div v-if="product.size[0].name == 'no size'">
          <div>{{ product.size[0].price }} บาท</div>
          <div class="grid grid-cols-3 gap-2">
            <div>กว้าง: {{ product.size[0].w }}</div>
            <div>ยาว: {{ product.size[0].l }}</div>
            <div>สูง: {{ product.size[0].h }}</div>
          </div>
        </div>
        <div v-else>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productAcrylic from "@/assets/productAcrylic";
import productCrystal from "@/assets/productCrystal";
let products = [...productAcrylic, ...productCrystal];
export default {
  data() {
    return {
      products,
    };
  },
  created() {
    const slug = this.$route.params.slug;
    this.product = this.products.find((product) => product.name === slug);
    if (!this.product) {
      this.$router.push("/404");
    }
  },
};
</script>
