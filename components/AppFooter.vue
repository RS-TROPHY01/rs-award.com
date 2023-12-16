<template>
  <footer class="shadow bg-gray-900 bottom-0 z-50">
    <div
      class="grid grid-cols-2 lg:grid-cols-4 text-white mx-auto text-center p-4 max-w-7xl"
    >
      <div class="text-center mx-auto my-auto col-span-1">
        <p class="text-center p-2 font-bold text-2xl text-white">สินค้าอื่นๆ</p>
        <div v-for="product in otherProducts" :key="product.name" class="p-1">
          <a :href="product.href" class="hover:text-blue-500">
            <h6 class="font-bold text-xl text-white">{{ product.name }}</h6>
          </a>
        </div>
      </div>
      <div class="text-center mx-auto my-auto col-span-1">
        <p class="text-center p-2 font-bold text-2xl text-white">เบอร์โทร</p>
        <div class="p-1 text-white">
          <ul>
            <li class="text-white">0649370011</li>
            <li class="text-white">0649370033</li>
            <li class="text-white">0649370066</li>
          </ul>
        </div>
      </div>
      <div class="col-span-2 rounded-lg w-full h-60 p-4">
        <iframe
          title="RS AWARD Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.01552442906!2d100.54981097587556!3d13.957681286455957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281423d9ee0cb%3A0xc0c6c349cc115b53!2zUnMgdHJvcGh5IOC4o-C5iOC4p-C4oeC4quC4uOC4guC4luC5ieC4p-C4ouC4o-C4suC4h-C4p-C4seC4pQ!5e0!3m2!1sth!2sth!4v1695441505250!5m2!1sth!2sth"
          loading="lazy"
          class="w-full h-full rounded-lg"
        ></iframe>
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
