<template>
  <div class="mx-auto items-center gap-x-8 gap-y-16 p-2">
    <h1 class="text-center">โล่รางวัล</h1>
  </div>
  <div class="container mx-auto px-3">
    <div>
      <h2 class="text-center p-2">ตะกร้าสินค้า</h2>
      <table class="min-w-full bg-white border border-gray-300 m-auto">
        <thead>
          <tr>
            <th class="py-2 px-3 border-b">รหัสสินค้า<br />ไซน์</th>
            <th class="py-2 px-3 border-b">จำนวน</th>
            <th class="py-2 px-3 border-b">ราคา</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in sortedCart" :key="item.name">
            <tr>
              <td class="py-2 px-3 border-b text-center" v-if="item.size">
                <NuxtLink :to="'/product/' + item.name" class="text-blue-700">{{
                  item.name
                }}</NuxtLink>
                <br />ไซน์ {{ item.size.name }}
              </td>
              <td class="py-2 px-3 text-center md:flex mx-auto">
                <div class="flex mx-auto">
                  <div class="m-auto px-2">
                    <input
                      type="number"
                      v-model="item.quantity"
                      min="1"
                      @input="updateQuantity(item)"
                      class="w-12 text-center border-2"
                    />
                  </div>
                  <button
                    @click="removeFromCart(item)"
                    class="px-2 py-1 bg-transparent hover:bg-transparent text-white rounded"
                  >
                    <img width="40px" src="/logo/bin.svg" class="" />
                  </button>
                </div>
              </td>
              <td class="py-2 px-3 border-b text-center" v-if="item.size">
                {{ item.size.price }} บาท
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="mx-auto grid grid-cols-2 gap-2 p-2">
        <button
          @click="deleteAllFromCart"
          class="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700 mx-auto"
        >
          ลบทั้งหมดในตะกร้า
        </button>
        <button
          @click="checkout"
          class="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700 mx-auto"
        >
          โหลดรายการสินค้า
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import products from "@/assets/product";
export default {
  data() {
    return {
      products,
      cart: [],
      selectedSize: null,
      quantity: 1,
    };
  },
  methods: {
    updateQuantity(item) {
      if (process.client) {
        if (item.quantity < 1) {
          item.quantity = 1;
        }
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    generateCSVContent() {
      const header = "Name,Size,Price,Quantity\n";
      const content = this.sortedCart
        .map(
          (item) =>
            `${item.name},${item.size.name},${item.size.price},${item.quantity}`,
        )
        .join("\n");
      return header + content;
    },
    deleteAllFromCart() {
      if (process.client) {
        this.cart = [];
        localStorage.removeItem("cart");
      }
    },
    removeFromCart(item) {
      if (process.client) {
        this.cart = this.cart.filter(
          (cartItem) =>
            cartItem.name !== item.name || cartItem.size !== item.size,
        );
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    checkout() {
      if (process.client) {
        const csvContent = this.generateCSVContent();
        const blob = new Blob([csvContent], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "checkout.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
  },
  computed: {
    sortedCart() {
      return this.cart.slice().sort((a, b) => {
        const nameComparison = a.name.localeCompare(b.name);
        if (nameComparison === 0) {
          return a.size.name.localeCompare(b.size.name);
        }
        return nameComparison;
      });
    },
  },
  created() {
    if (process.client) {
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
  },
};
</script>
