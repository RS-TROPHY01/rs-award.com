<template>
  <div class="gap-4 py-2">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <img
        src="/panel/finished_crystal.webp"
        width="603"
        height="339"
        alt="โล่คริสตัล"
        title="โล่คริสตัล"
        class="w-full h-auto rounded-lg bg-gray-100 scaleup"
        aria-label="โล่คริสตัล"
      />
      <div class="m-auto text-center">
        <NuxtLink to="/crystal" class="m-1">
          <h2>โล่คริสตัล</h2>
        </NuxtLink>
        <p>โล่รางวัลคริสตัล ทำจากวัสดุแข็งแรง <br />คุณภาพดี ราคาโรงงาน</p>
        <NuxtLink to="/crystal">
          <button>ดูเพิ่มเติม</button>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <img
        src="/panel/finished_acrylic.webp"
        width="603"
        height="339"
        alt="โล่อะคริลิคสำเร็จรูป"
        title="โล่อะคริลิคสำเร็จรูป"
        class="w-full h-auto rounded-lg bg-gray-100 order-1 md:order-2 scaleup"
        aria-label="โล่อะคริลิคสำเร็จรูป"
      />
      <div class="m-auto text-center order-2 md:order-1">
        <NuxtLink to="/acrylic/finished" class="m-1">
          <h2>โล่อะคริลิคสำเร็จรูป</h2>
        </NuxtLink>
        <p>
          โล่รางวัลอะคริลิคสำเร็จรูป แข็งแรงทนทาน<br />มีให้เลือกหลากหลาย
          ตามความต้องการ
        </p>
        <NuxtLink to="/acrylic/finished">
          <button>ดูเพิ่มเติม</button>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <img
        src="/panel/custom_acrylic.webp"
        width="603"
        height="339"
        alt="โล่อะคริลิคสั่งทำ"
        title="โล่อะคริลิคสั่งทำ"
        class="w-full h-auto rounded-lg bg-gray-100 scaleup"
        aria-label="โล่อะคริลิคสั่งทำ"
      />
      <div class="m-auto text-center">
        <NuxtLink to="/acrylic/custom" class="m-1">
          <h2>โล่อะคริลิคสั่งทำ</h2>
        </NuxtLink>
        <p>โล่รางวัลอะคริลิคสั่งทำ ราคาถูก <br />ออกแบบฟรี ตามความต้องการ</p>
        <NuxtLink to="/acrylic/custom">
          <button>ดูเพิ่มเติม</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
