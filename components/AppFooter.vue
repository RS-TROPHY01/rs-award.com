<template>
  <!-- Social -->
  <div
    class="mx-auto rounded-t-xl shadow bg-gray-900 sticky bottom-0 w-full py-1 z-50"
  >
    <div
      class="mx-auto max-w-screen-xl px-3 flex justify-center items-center w-full h-full"
    >
      <div class="flex-shrink-0 flex items-center space-x-4 md:space-x-0">
        <template v-for="(social, index) in socials" :key="index">
          <a
            :aria-label="social.alt"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              :src="social.src"
              :alt="social.alt"
              :title="social.alt"
              width="40px"
              height="40px"
              :class="{
                scaleup: true,
                'lock md:hidden':
                  social.alt === 'phone logo' || social.alt === 'gmail logo',
              }"
            />
          </a>
        </template>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer class="shadow bg-gray-900 bottom-0 z-50">
    <div class="text-white mx-auto text-center p-4 max-w-7xl">
      <div class="grid grid-cols-2">
        <div class="text-center mx-auto my-auto">
          <p class="text-center p-2 font-bold text-2xl text-white">
            สินค้าอื่นๆ
          </p>
          <div
            v-for="contact in contacts"
            :key="contact.name"
            class="p-1 scaleup"
          >
            <a
              class="font-bold text-xl text-white scaleup"
              :href="contact.href"
            >
              {{ contact.name }}
            </a>
          </div>
        </div>
        <div class="text-center mx-auto my-auto">
          <p class="text-center p-2 font-bold text-2xl text-white">เบอร์โทร</p>
          <div v-for="tel in tels" :key="tel.name" class="p-1 scaleup">
            <a class="font-bold text-xl text-white scaleup" :href="tel.href">
              {{ tel.name }}
            </a>
          </div>
        </div>
      </div>
      <!-- Goole Map -->
      <div class="rounded-lg w-full h-60 p-4 scaleup">
        <a
          aria-label="RS AWARD GOOGLE MAP"
          href="https://maps.app.goo.gl/U1C7R9aiBJHprLfx8"
        >
          <img
            class="mx-auto"
            alt="RS AWARD GOOGLE MAP"
            title="RS AWARD GOOGLE MAP"
            src="/panel/map.webp"
            width="593px"
            height="206px"
        /></a>
      </div>
    </div>
    <!-- Copy Right -->
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
      <span class="block text-sm sm:text-center text-gray-400">
        © 2023
        <router-link to="/">RUAMSUK PLATING LIMITED PARTNERSHIP</router-link>.
        All Rights Reserved.
      </span>
    </div>
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
          href: "https://www.rs-medal.com/",
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
      socials: [
        {
          name: "ถ้วยรางวัลราคาโรงงาน RS Trophy",
          href: "https://www.facebook.com/RSTrophy01",
          src: "/logo/facebook.svg",
          alt: "facebook logo",
        },
        {
          name: "@rs.trophy",
          href: "http://line.me/ti/p/@rs.trophy",
          src: "/logo/line.svg",
          alt: "line logo",
        },
        {
          name: "0649370011",
          href: "tel:0649370011",
          src: "/logo/phone.svg",
          alt: "phone logo",
        },
        {
          name: "ruamsukplating@gmail.com",
          href: "mailto:ruamsukplating@gmail.com",
          src: "/logo/gmail.svg",
          alt: "gmail logo",
        },
        {
          name: "Rs trophy ร่วมสุขถ้วยรางวัล",
          href: "https://goo.gl/maps/yNtcKifRHViNarrv6",
          src: "/logo/googlemaps.svg",
          alt: "google map logo",
        },
      ],
    };
  },
};
</script>
