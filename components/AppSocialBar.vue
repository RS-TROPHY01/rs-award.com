<template>
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
            <NuxtImg
              loading="lazy"
              :src="social.src"
              :alt="social.alt"
              :title="social.alt"
              sizes="50px"
              :class="{
                'transition-transform duration-300 hover:scale-110': true,
                'lock md:hidden':
                  social.alt === 'phone logo' || social.alt === 'gmail logo',
              }"
            />
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "ถ้วยรางวัลราคาโรงงาน RS Trophy",
          href: "https://www.m.me/RSTrophy01",
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
