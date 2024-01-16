<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <img
        :src="'/product/' + product.name + '.webp'"
        width="506px"
        height="758px"
        :alt="'โล่รางวัล ' + product.name"
      />
    </div>
    <div class="m-auto grid grid-cols-1 text-center">
      <h1 class="p-4">{{ product.name }}</h1>
      <div>
        <div v-for="(item, index) in product.size" :key="index" class="p-2">
          <div class="">
            <div class="text-2xl">
              <span v-if="item.name != 'no size'">{{ item.name }}</span
              >{{ item.price }} บาท
            </div>
            <div v-if="item.productWidth != 0" class="text-2xl">
              ตัวโล่กว้าง: {{ item.productWidth }} mm
            </div>
            <div v-if="item.productLength != 0" class="text-2xl">
              ตัวโล่ยาว: {{ item.productLength }} mm
            </div>
            <div v-if="item.productHeight != 0" class="text-2xl">
              ตัวโล่สูง: {{ item.productHeight }} mm
            </div>
            <!-- Base -->
            <div v-if="item.baseWidth != 0" class="text-2xl">
              ฐานกว้าง: {{ item.baseWidth }} mm
            </div>
            <div v-if="item.baseLength != 0" class="text-2xl">
              ฐานยาว: {{ item.baseLength }} mm
            </div>
            <div v-if="item.baseHeight != 0" class="text-2xl">
              ฐานหนา: {{ item.baseHeight }} mm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SchemaOrgProduct
    :name="'โล่รางวัล ' + product.name"
    :sku="product.name"
    :image="'/product/' + product.name + '.webp'"
    :offers="product.size[0].price"
  />
</template>
<script>
import productCrystal2000 from "@/assets/Crystal/productCrystal2000";
import productCrystal20000 from "@/assets/Crystal/productCrystal20000";
import productAcrylic1000 from "@/assets/Acrylic/productAcrylic1000";
import productAcrylic3000 from "@/assets/Acrylic/productAcrylic3000";
import productAcrylic300 from "@/assets/Acrylic/productAcrylic300";
let products = [
  ...productCrystal2000,
  ...productCrystal20000,
  ...productAcrylic1000,
  ...productAcrylic3000,
  ...productAcrylic300,
];
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
