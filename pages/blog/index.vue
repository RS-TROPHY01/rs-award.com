<script setup lang="ts">
const title = "RS AWARD | บทความ";
const description = "บทความ";
const image = "/panel/hero_section.webp";
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: image,
  twitterImage: image,
  keywords: "RS AWARD, บทความ",
});
</script>
<template>
  <h1 class="text-center p-1">บทความ</h1>
  <div>
    <ContentList
      class=""
      path="/blog"
      fields="title,thumbnail"
      :query="{
        draft: false,
        sort: [
          {
            title: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
          v-for="blog in list"
          :key="blog._path"
          class="grid grid-cols-2 gap-2"
        >
          <div class="p-1">
            <NuxtLink :to="'/blog/' + blog.slug">
              <img
                v-if="blog.thumbnail"
                :src="blog.thumbnail"
                :alt="blog.title"
                :title="blog.title"
              />
            </NuxtLink>
          </div>
          <div class="my-auto p-1">
            <h2 class="text-2xl font-bold">
              <NuxtLink :to="'/blog/' + blog.slug">{{ blog.title }}</NuxtLink>
            </h2>
            <p>{{ blog.description }}</p>
            <div class="mx-auto">
              <NuxtLink :to="'/blog/' + blog.slug"
                ><button>ดูเพิ่มเติม</button></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>
