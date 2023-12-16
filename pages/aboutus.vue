<script setup lang="ts">
useSeoMeta({
  title: "RS AWARD | เกี่ยวกับเรา",
  description:
    "บริษัทจัดจำหน่ายโล่รางวัลคุณภาพดีแข็งแรงทนทาน โดยเรามีทั้งในรูปแบบหน้าร้านและออนไลน์พร้อมบริการจัดส่งทั่วประเทศไทย",
  keywords: "RS AWARD, โล่รางวัล",
});
</script>
<template>
  <div>
    <section class="flex items-center py-4 font-poppins">
      <div class="justify-center flex-1 mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div class="relative lg:max-w-md">
              <img
                src="\logo\RSTROPHY.ico"
                alt="aboutimage"
                class="relative z-10 object-cover w-full rounded h-96"
              />
              <div
                class="absolute bottom-0 right-0 z-10 p-4 bg-gray-900 rounded shadow -mr-11"
              >
                <p class="text-lg font-semibold md:w-72">
                  <span class="text-white">นึงถึงโล่รางวัล</span>
                  <br />
                  <span class="text-white">นึงถึง RS AWARD</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0">
            <div class="pl-4 mb-6 border-l-4 border-blue-500">
              <span class="text-sm uppercase">เกี่ยวกับเรา ?</span>
              <h1 class="mt-2 text-3xl font-black md:text-5xl">RS AWARD</h1>
            </div>
            <p class="mb-6 text-base leading-7">
              Rs AWARD เป็นบริษัทจัดจำหน่วยโล่รางวัลชั้นนำในประเทศด้วยราคาโรงงาน
              โดยจัดจำหน่ายโล่รางวัล ราคาย่อมเยา เปี่ยมคุณภาพ
            </p>
            <div class="m-auto">
              <h3>วิธีการชำระเงิน</h3>
              <div class="flex m-auto p-2">
                <img class="w-10" src="\logo\SCB.jpg" />
                <div class="my-auto p-1">329 2 66927 8</div>
              </div>
              <div class="flex m-auto p-2">
                <img class="w-10" src="\logo\KBank.jpg" />
                <div class="my-auto p-1">018 8 83682 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
