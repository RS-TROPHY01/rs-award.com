<template>
  <div class="gap-4 py-2">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <NuxtImg
        src="/panel/finished_crystal.webp"
        width="480"
        alt="โล่คริสตัล"
        class="w-full h-auto rounded-lg bg-gray-100"
        aria-label="โล่คริสตัล"
      />
      <div class="m-auto text-center">
        <NuxtLink to="/crystal" class="m-1">
          <h2>โล่คริสตัล</h2>
        </NuxtLink>
        <p>โล่รางวัลคริสตัล แข็งแรงทนทาน</p>
        <NuxtLink to="/crystal">
          <AppButton> ดูเพิ่มเติม </AppButton>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <NuxtImg
        src="/panel/finished_acrylic.webp"
        width="480"
        height="270"
        alt="โล่อะคริลิคสำเร็จรูป"
        class="w-full h-auto rounded-lg bg-gray-100 order-1 md:order-2"
        aria-label="โล่อะคริลิคสำเร็จรูป"
      />
      <div class="m-auto text-center order-2 md:order-1">
        <NuxtLink to="/acrylic/finished" class="m-1">
          <h2>โล่อะคริลิคสำเร็จรูป</h2>
        </NuxtLink>
        <p>โล่รางวัลอะคริลิคสำเร็จรูป แข็งแรงทนทาน</p>
        <NuxtLink to="/acrylic/finished">
          <AppButton> ดูเพิ่มเติม </AppButton>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <NuxtImg
        src="/panel/custom_acrylic.webp"
        width="480"
        height="270"
        alt="โล่อะคริลิคสั่งทำ"
        class="w-full h-auto rounded-lg bg-gray-100"
        aria-label="โล่อะคริลิคสั่งทำ"
      />
      <div class="m-auto text-center">
        <NuxtLink to="/acrylic/custom" class="m-1">
          <h2>โล่อะคริลิคสั่งทำ</h2>
        </NuxtLink>
        <p>โล่รางวัลอะคริลิคสั่งทำ แข็งแรง ราคาถูก</p>
        <NuxtLink to="/acrylic/custom">
          <AppButton> ดูเพิ่มเติม </AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
