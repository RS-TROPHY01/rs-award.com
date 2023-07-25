<script setup lang="ts">
const features = [
    { name: 'ทดทาน', description: 'Designed by Good Goods, Inc.' },
    { name: 'สีสันสดใส', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'ส่งทั่วไทย', description: 'บริการจัดส่งทั่วประเทศไทย' },
]
</script>
<template>
    <div class="bg-white pb-4">
        <h2 class="text-center m-4">
            โล่รางวัล
        </h2>
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">RS Awards</h2>
                <p class="mt-4 text-gray-500 ">
                    บริษัทจัดจำหน่ายโล่รางวัลราคาถูกและดี โดยเรามีทั้งในรูปแบบหน้าร้าน และออนไลน์
                    อีกทั้งยังมีร้านในเครือให้คุณได้เลือกใช้บริการในหลากหลาย
                </p>

                <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
                        <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
                    </div>
                </dl>
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img src="/1000750.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    class="rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-110" />
                <img src="/1000750.png" alt="Top down view of walnut card tray with embedded magnets and card groove."
                    class="rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-110" />
                <img src="/1000750.png" alt="Side of walnut card tray with card groove and recessed card area."
                    class="rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-110" />
                <img src="/1000750.png" alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    class="rounded-lg bg-gray-100 transition-transform duration-300 hover:scale-110" />
            </div>
        </div>
    </div>
</template>