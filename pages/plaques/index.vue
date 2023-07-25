<template>
    <div class="w-full container mx-auto p-4">
        <h1 class="text-center my-4">โล่รางวัล</h1>

        <div v-for="(category, index) in awardCategories" :key="index" class=" flex justify-center items-center py-2">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" v-if="index % 2 !== 0">
                <div class="w-5/6 text-center mx-auto order-1 lg:order-2">
                    <img class="rounded-lg transition-transform duration-300 hover:scale-110" :src="category.imageSrc">
                </div>
                <div class="text-center order-2 lg:order-2">
                    <h2 class="my-2">{{ category.title }}</h2>
                    <p class="mx-10">{{ category.description }}</p>
                    <NuxtLink to="">
                        <button
                            class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4 transition-transform duration-300 hover:scale-110">
                            ดูสินค้า
                        </button>
                    </NuxtLink>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" v-else>
                <div class="text-center order-2 lg:order-2">
                    <h2 class="my-2">{{ category.title }}</h2>
                    <p class="mx-10">{{ category.description }}</p>
                    <NuxtLink to="">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4 transition-transform duration-300 hover:scale-110">
                            ดูสินค้า
                        </button>
                    </NuxtLink>
                </div>
                <div class="w-5/6 text-center mx-auto order-1 lg:order-2">
                    <img class="rounded-lg transition-transform duration-300 hover:scale-110" :src="category.imageSrc">
                </div>
            </div>
        </div>

    </div>
    <whyrsplaques />
</template>
<script setup lang="ts">
const awardCategories = [
    {
        title: 'กล่องโล่รางวัล',
        description: 'โล่รางวัลอะคริลิคสั่งทำโล่รางวัลอะคริลิคสั่งทำ...',
        imageSrc: '/1500500.png',
    },
    {
        title: 'โล่รางวัลอะคริลิค',
        description: 'โล่รางวัลอะคริลิคสั่งทำโล่รางวัลอะคริลิคสั่งทำ...',
        imageSrc: '/1500500.png',
    },
    {
        title: 'โล่รางวัลไม้',
        description: 'โล่รางวัลอะคริลิคสั่งทำโล่รางวัลอะคริลิคสั่งทำ...',
        imageSrc: '/1500500.png',
    },
    {
        title: 'โล่รางวัลคริสตัล',
        description: 'โล่รางวัลอะคริลิคสั่งทำโล่รางวัลอะคริลิคสั่งทำ...',
        imageSrc: '/1500500.png',
    },
];
</script>