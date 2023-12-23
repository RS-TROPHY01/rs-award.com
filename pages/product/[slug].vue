<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <img :src="'/product/' + product.name + '.webp'" />
    </div>
    <div class="m-auto grid grid-cols-1 text-center">
      <h1 class="p-4">{{ product.name }}</h1>
      <div>
        <div v-if="product.size[0].name == 'no size'">
          <div class="text-2xl">{{ product.size[0].price }} บาท</div>
          <div>
            <div class="text-2xl">กว้าง: {{ product.size[0].w }} mm</div>
            <div class="text-2xl">ยาว: {{ product.size[0].l }} mm</div>
            <div class="text-2xl">สูง: {{ product.size[0].h }} mm</div>
          </div>
        </div>
        <div v-else>
          <div v-for="(item, index) in product.size" :key="index" class="p-2">
            <div class="">
              <div class="text-2xl">{{ item.name }} {{ item.price }} บาท</div>
              <div class="text-2xl">กว้าง: {{ item.w }} mm</div>
              <div class="text-2xl">ยาว: {{ item.l }} mm</div>
              <div class="text-2xl">สูง: {{ item.h }} mm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productAcrylic from "@/assets/productAcrylic";
import productCrystal from "@/assets/productCrystal";
let products = [...productAcrylic, ...productCrystal];
let product;
export default {
  data() {
    return {
      products,
      product,
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
