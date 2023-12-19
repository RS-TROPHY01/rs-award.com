<template>
  <footer class="shadow bg-gray-900 bottom-0 z-50">
    <div
      class="grid grid-cols-2 lg:grid-cols-4 text-white mx-auto text-center p-4 max-w-7xl"
    >
      <div class="text-center mx-auto my-auto col-span-1">
        <p class="text-center p-2 font-bold text-2xl text-white">สินค้าอื่นๆ</p>
        <div v-for="contact in contacts" :key="contact.name" class="p-1">
          <a class="font-bold text-xl text-white" :href="contact.href">
            {{ contact.name }}
          </a>
        </div>
      </div>
      <div class="text-center mx-auto my-auto col-span-1">
        <p class="text-center p-2 font-bold text-2xl text-white">เบอร์โทร</p>
        <div v-for="tel in tels" :key="tel.name" class="p-1">
          <a class="font-bold text-xl text-white" :href="tel.href">
            {{ tel.name }}
          </a>
        </div>
      </div>
      <AppGoogleMap class="col-span-2" />
    </div>
    <AppCopyRight />
  </footer>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
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
      tels: [
        {
          name: "0649370011",
          href: "tel:0649370011",
        },
        {
          name: "0649370033",
          href: "tel:0649370033",
        },
        {
          name: "0649370066",
          href: "tel:0649370066",
        },
      ],
    };
  },
};
</script>
