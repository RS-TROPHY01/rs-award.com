<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="mt-6 grid gap-x-6 gap-y-10 xl:gap-x-6 grid-cols-2 lg:grid-cols-4">
                <div v-for="product in products" :key="product.id"
                    class="group relative rounded-lg border border-gray-100 shadow-md p-4">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 transition-transform duration-300 hover:scale-110">
                        <NuxtLink to="/"><img :src="product.imageSrc" :alt="product.imageAlt"
                                class="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-110" />
                        </NuxtLink>

                    </div>
                    <div class="mt-4 justify-between">
                        <div>
                            <h3 class="text-lg text-gray-700">
                                <a :href="product.href">
                                    {{ product.name }}
                                </a>
                            </h3>
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-900">฿{{ product.price }}</p>
                        </div>
                        <div>
                            <NuxtLink to="">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-sm transition-transform duration-300 hover:scale-110">
                                    ดูสินค้า
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const products = [
    {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    }, {
        id: 1,
        sku: 'RS 2302-3',
        name: 'โล่รางวัล RS 2302-3',
        description: 'โล่รางวัล RS 2302-3 description',
        href: '#',
        imageSrc: '/1000750.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1800',
    },
]
</script>
