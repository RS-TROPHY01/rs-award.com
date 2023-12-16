<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-2">
    <div
      class="relative h-full transition-transform duration-300 hover:scale-105"
      v-for="image in images"
      :key="image.name"
    >
      <NuxtLink :to="image.link">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-auto rounded-lg bg-gray-100"
          aria-label=""
        />
        <div class="mx-auto text-center">
          <h2>{{ image.name }}</h2>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          name: "โล่คริสตัล",
          link: "/crystal",
          description: "",
          src: "/panel/finished_crystal.webp",
          alt: "",
        },
        {
          name: "โล่อะคริลิคสำเร็จรูป",
          link: "/acrylic/finished",
          description: "",
          src: "/panel/finished_acrylic.webp",
          alt: "",
        },
        {
          name: "โล่อะคริลิคสั่งทำ",
          link: "/acrylic/custom",
          description: "",
          src: "/panel/custom_acrylic.webp",
          alt: "",
        },
      ],
    };
  },
};
</script>
