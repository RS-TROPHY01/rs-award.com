<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <img src="/test/1600900.png" />
    </div>
    <div class="m-auto grid grid-cols-1">
      <h1 class="text-center p-4">{{ product.name }}</h1>
      <div class="flex">
        <label class="mx-auto p-1" for="size">ไซน์:</label>
        <select v-model="selectedSize" id="size" class="p-1 border-2">
          <option
            v-for="size in product.size"
            :key="size.name"
            :value="size.name"
            :disabled="!size.inStock"
          >
            {{ size.name }}:{{ size.price }} บาท
            {{ !size.inStock ? " หมด" : "" }}
          </option>
        </select>
      </div>
      <div class="m-auto flex">
        <span class="p-1">จำนวน:</span>
        <input
          type="number"
          v-model="quantity"
          min="1"
          class="w-12 text-center border-2"
        />
      </div>
      <div class="p-1 m-auto">
        <button
          @click="addToCart(product, selectedSize, quantity)"
          class="mx-auto text-xs m-auto"
        >
          เพิ่มลงตะกร้า
        </button>
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
      cart: [],
      selectedSize: null,
      quantity: 1,
      product: {},
    };
  },
  methods: {
    addToCart(product, selectedSize, quantity) {
      if (process.client) {
        if (!selectedSize) {
          alert("กรุณาเลือกขนาด ก่อนเพิ่มสินค้าลงตะกร้า");
          return;
        }
        const existingItem = this.cart.find(
          (item) =>
            item.name === product.name && item.size.name === selectedSize,
        );
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          const sizeInfo = product.size.find(
            (size) => size.name === selectedSize,
          );
          const cartItem = {
            name: product.name,
            size: { name: selectedSize, price: sizeInfo.price },
            quantity: quantity,
          };
          this.cart.push(cartItem);
        }
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
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
