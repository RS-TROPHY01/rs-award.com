<template>
  <footer class="shadow bg-gray-900 bottom-0 z-50">
    <div
      class="grid grid-cols-2 lg:grid-cols-4 text-white mx-auto text-center p-4 max-w-7xl"
    >
      <div class="text-center mx-auto my-auto col-span-1">
        <p class="text-center p-2 font-bold text-2xl text-white">สินค้าอื่นๆ</p>
        <ul v-for="product in otherProducts" :key="product.name" class="p-1">
          <li class="font-bold text-xl text-white" :href="product.href">
            {{ product.name }}
          </li>
        </ul>
      </div>
      <div class="text-cente r mx-auto my-auto col-span-1">
        <p class="text-center p-2 font-bold text-2xl text-white">เบอร์โทร</p>
        <div class="p-1 text-white">
          <ul>
            <li class="font-bold text-xl text-white">0649370011</li>
            <li class="font-bold text-xl text-white">0649370033</li>
            <li class="font-bold text-xl text-white">0649370066</li>
          </ul>
        </div>
      </div>
      <div class="col-span-2 rounded-lg w-full h-60 p-4">
        <a
          aria-label="RS AWARD GOOGLE MAP"
          href="https://maps.app.goo.gl/U1C7R9aiBJHprLfx8"
        >
          <NuxtImg
            class="mx-auto"
            sizes="733px"
            alt="RS AWARD GOOGLE MAP"
            src="/panel/map.png"
        /></a>
      </div>
    </div>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
      <span class="block text-sm sm:text-center text-gray-400">
        © 2023 <router-link to="/">RS AWARD</router-link>. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      otherProducts: [
        {
          name: "ถ้วยรางวัล",
          href: "https://www.rs-trophy.com/",
        },
        {
          name: "เหรียญรางวัล",
          href: "https://www.rs-meddal.com/",
        },
        {
          name: "โล่รางวัล",
          href: "https://www.rs-award.com/",
        },
      ],
    };
  },
};
</script>
