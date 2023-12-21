<template>
  <div
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
  >
    <div
      v-for="product in products"
      :key="product.name"
      class="bg-white m-auto"
    >
      <div>
        <NuxtLink :to="`/product/${product.name}`">
          <img src="/test/1600900.png" />
        </NuxtLink>
        <NuxtLink :to="`/product/${product.name}`">
          <h3 class="text-lg font-semibold text-center p-1">
            {{ product.name }}
          </h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
