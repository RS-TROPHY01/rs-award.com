<template>
  <div class="mx-auto items-center gap-x-8 gap-y-16 p-2">
    <h1 class="text-center">โล่รางวัล</h1>
  </div>
  <div class="container mx-auto px-3">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div
        v-for="product in products"
        :key="product.name"
        class="bg-white rounded-lg m-auto grid grid-cols-2 gap-2 p-2"
      >
        <div>
          <img src="/test/800800.png" />
          <h3 class="text-lg font-semibold text-center p-1">
            {{ product.name }}
          </h3>
        </div>
        <div class="m-auto grid grid-cols-1">
          <div class="mx-auto text-center">
            <div class="mx-auto grid grid-cols-1">
              <div class="grid grid-cols-1">
                <div class="flex">
                  <label class="mx-auto p-1" for="size">ไซน์:</label>
                  <select v-model="selectedSize" id="size" class="p-1">
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
            </div>
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
    </div>
  </div>
</template>
<script>
import products from "@/public/data/product";
export default {
  data() {
    return {
      products,
      cart: [],
      selectedSize: "A",
      quantity: 1,
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
};
</script>
