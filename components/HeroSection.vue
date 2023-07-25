<template>
    <section class="bg-gray-900 w-full">
        <div class="w-full grid max-w-screen-xl p-10 mx-auto lg:grid-cols-12">
            <div class="block lg:hidden">
                <img class="transition-transform duration-300 hover:scale-125" src="../public/product.webp" alt="mockup">
            </div>
            <div class="mr-auto place-self-center lg:col-span-7">
                <h2
                    class="text-4xl max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-white">
                    RS Awards <br>โล่รางวัลราคาโรงงาน
                </h2>
                <p class="max-w-2xl mb-6 font-light lg:mb-8  text-gray-400 hidden sm:block">
                    บริษัทจัดจำหน่ายโล่รางวัลราคาถูกและดี โดยเรามีทั้งในรูปแบบหน้าร้าน และออนไลน์
                    อีกทั้งยังมีร้านในเครือให้คุณได้เลือกใช้บริการในหลากหลาย
                </p>
                <NuxtLink to="/plaues"
                    class="transition-transform duration-300 hover:scale-110 inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900">
                    ดูราคาโล่รางวัล
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </NuxtLink>
                <NuxtLink to="/contactus"
                    class="transition-transform duration-300 hover:scale-110 inline-flex items-center justify-center px-5 py-3 font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                    ติดต่อสอบถาม
                </NuxtLink>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img class="transition-transform duration-300 hover:scale-125" src="/product.webp" alt="mockup">
            </div>
        </div>
    </section>
</template>