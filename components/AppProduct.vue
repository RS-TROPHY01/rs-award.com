<template>
  <div
    class="container mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
  >
    <div
      v-for="product in products"
      :key="product.name"
      class="bg-white m-auto"
    >
      <div class="scaleup">
        <NuxtLink :to="`/product/${product.name}`">
          <img :src="product.img" />
        </NuxtLink>
        <NuxtLink :to="`/product/${product.name}`">
          <h2 class="text-lg font-semibold text-center p-1">
            โล่รางวัล
            {{ product.name }}
          </h2>
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
