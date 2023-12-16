<template>
  <header class="w-full bg-white sticky top-0 z-50 mx-auto">
    <div class="max-w-7xl grid grid-1 md:grid-cols-3 mx-auto">
      <router-link
        :to="{ path: '/' }"
        class="flex items-center font-medium text-gray-900 title-font m-auto"
      >
        <div class="flex gap-2 mx-auto">
          <img
            src="\logo\RSTROPHY.ico"
            alt="RS MEDAL Logo"
            width="40px"
            height="40px"
            class="m-auto"
          />
          <h2 class="m-auto font-bold">RS AWARD</h2>
        </div>
      </router-link>
      <span class="text-center m-auto col-span-1 md:col-span-2">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.href"
          class="px-2"
        >
          {{ link.text }}
        </router-link>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "หน้าแรก", href: "/" },
        { text: "โล่รางวัล", href: "/award" },
        { text: "เกี่ยวกับเรา", href: "/aboutus" },
      ],
    };
  },
};
</script>
