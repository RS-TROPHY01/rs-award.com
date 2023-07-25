<script setup lang="ts">
import { onMounted, ref } from 'vue';

useSeoMeta({
  title: 'RS Awards | โล่รางวัลราคาโรงงาน',
  keywords: 'โล่รางวัล, โล่รางวัล, โล่รางวัลอะคริลิค, โล่รางวัลอะคริลิคสั่งทำ, โล่รางวัลอะคริลิคสำเร็จรูป, โล่รางวัลไม้, โล่รางวัลคริสตัล',
  description: 'โล่รางวัลราคาโรงงาน',
  ogTitle: 'RS Awards | โล่รางวัลราคาโรงงาน',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

</script>

<template>
  <HeroSection />
  <Categories />
  <whyrsplaques />
  <product/>
</template>
