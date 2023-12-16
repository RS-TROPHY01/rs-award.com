<template>
  <NuxtLayout>
    <div class="py-1 items-center px-2 mx-auto max-w-6xl">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "th",
      },
    };
  },
};
</script>
