<template>
  <div
    class="container mx-auto grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <div
      v-for="product in products"
      :key="product.name"
      class="bg-white m-auto"
    >
      <div class="scaleup text-center">
        <NuxtLink
          :to="`/product/${product.name}`"
          :aria-label="'โล่รางวัล ' + product.name"
        >
          <img
            :src="'/product/' + product.name + '.webp'"
            :alt="'โล่รางวัล ' + product.name"
            width="400px"
            height="600px"
          />
        </NuxtLink>
        <NuxtLink
          :to="`/product/${product.name}`"
          :aria-label="'โล่รางวัล ' + product.name"
        >
          <h2 class="text-lg font-semibold p-1">
            โล่รางวัล
            {{ product.name }}
          </h2>
        </NuxtLink>
        <div v-if="product.size[0].name == 'no size'">
          {{ product.size[0].price }} บาท
        </div>
        <div v-else>
          {{ product.size[product.size.length - 1].price }} -
          {{ product.size[0].price }} บาท
        </div>
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
