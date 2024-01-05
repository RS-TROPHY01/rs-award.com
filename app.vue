<template>
  <AppHeader />
  <div class="py-1 items-center px-2 mx-auto max-w-5xl">
    <NuxtPage />
  </div>
  <AppFooter />
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-M86WK6ZW"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe>
  </noscript>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "th",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});
</script>
