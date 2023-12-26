<script lang="ts" setup>
const { slug } = useRoute().params;
</script>
<template>
  <article class="bg-white rounded-2xl">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <head>
        <meta name="keyword" :content="doc.keyword" />
      </head>
      <div class="text-center p-5 grid grid-cols-1 md:grid-cols-2 m-auto">
        <div>
          <img
            v-if="doc.thumbnail"
            :src="doc.thumbnail"
            :alt="doc.title"
            :title="doc.title"
            width="592px"
            height="353px"
          />
        </div>
        <div class="m-4 content p-5 text-left my-auto">
          <h1 class="text-4xl font-bold mx-auto">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </div>
      </div>
      <SchemaOrgArticle
        :headline="doc.title"
        :description="doc.description"
        :image="doc.thumbnail"
        :date-published="doc.datePublished"
        :date-modified="doc.dateModified"
      />
    </ContentDoc>
  </article>
</template>
<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}
.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content * {
  @apply text-lg;
}
.content a {
  @apply text-blue-700;
}
</style>
