<template>
    <nav class="bg-gray-900 border-gray-700 fixed top-0 w-full z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 px-4">
            <a href="#" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">RS Plaques</span>
            </a>
            <button data-collapse-toggle="navbar-multi-level" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-multi-level" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li v-for="link in links" :key="link.label">
                        <template v-if="link.dropdown">
                            <button :id="link.dropdownId" :data-dropdown-toggle="link.dropdownId" class="
                    relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent
                  " :aria-expanded="link.dropdownOpen ? 'true' : 'false'">
                                <NuxtLink :to="link.url" @click="closeDropdown()">
                                    {{ link.label }}
                                </NuxtLink>

                                <svg @click="toggleDropdown(link.dropdownId)" class="w-2.5 h-2.5 ml-2.5 " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                <div v-if="link.dropdownOpen" :id="link.dropdownId" class="
                      absolute top-full left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600
                    ">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400"
                                        :aria-labelledby="link.dropdownId">
                                        <li class="w-full px-16"></li>
                                        <li class="px-4" v-for="item in link.dropdownItems" :key="item.label">
                                            <NuxtLink :to="item.url"
                                                class=" py-2 block hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">{{
                                                    item.label
                                                    }}</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                        </template>
                        <template v-else>
                            <NuxtLink :to="link.url" @click="closeDropdown()"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                {{ link.label }}
                            </NuxtLink>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(() => {
    const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-multi-level"]');
    const dropdownToggle = document.querySelector('[data-dropdown-toggle="dropdownNavbar"]');
    const doubleDropdownToggle = document.querySelector('[data-dropdown-toggle="doubleDropdown"]');
    const navbarMultiLevel = document.getElementById('navbar-multi-level');
    const dropdownNavbar = document.getElementById('dropdownNavbar');
    const doubleDropdown = document.getElementById('doubleDropdown');
    navbarToggle?.addEventListener('click', () => {
        navbarMultiLevel?.classList.toggle('hidden');
        const expanded = navbarToggle.getAttribute('aria-expanded');
        navbarToggle.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
    });
    dropdownToggle?.addEventListener('click', () => {
        dropdownNavbar?.classList.toggle('hidden');
        const expanded = dropdownToggle.getAttribute('aria-expanded');
        dropdownToggle.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
    });
    doubleDropdownToggle?.addEventListener('click', () => {
        doubleDropdown?.classList.toggle('hidden');
        const expanded = doubleDropdownToggle.getAttribute('aria-expanded');
        doubleDropdownToggle.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
    });
});
const links = ref([
    { label: 'หน้าแรก', url: '/', dropdown: false },
    {
        label: 'โล่รางวัล',
        url: '/plaques' ,
        dropdown: true,
        dropdownId: 'dropdownNavbarLink1',
        dropdownOpen: false,
        dropdownItems: [
            { label: 'กล่องโล่รางวัล', url: '/plaques/box' },
            { label: 'โล่รางวัลอะคริลิค', url: '/plaques/acrylic' },
            { label: 'โล่รางวัลไม้', url: '/plaques/wooden' },
            { label: 'โล่รางวัลคริสตัล', url: '/plaques/crystal' },
        ],
    },
    {
        label: 'สินค้าอื่นๆ',
        dropdown: true,
        dropdownId: 'dropdownNavbarLink2',
        dropdownOpen: false,
        dropdownItems: [
            { label: 'ถ้วยรางวัล', url: 'https://www.rs-trophy.com/' },
            { label: 'เหรียญรางวัล', url: 'https://www.rs-medal.com/' },
            { label: 'โล่รางวัล', url: '/plaques' },
            { label: 'เสื้อกีฬา', url: '#' },
        ],
    },
    { label: 'ติดต่อเรา', url: '/contactus' },
    { label: 'เกี่ยวกับเรา', url: '/aboutus' },
]);


const toggleDropdown = (dropdownId: string | undefined) => {
    const link = links.value.find((item) => item.dropdownId === dropdownId);
    if (link) {
        link.dropdownOpen = !link.dropdownOpen;
    }
    links.value.forEach((link) => {
        if (link.dropdown && link.dropdownId != dropdownId && link.dropdownOpen == true) {
            link.dropdownOpen = !link.dropdownOpen;
        }
    });
};
const closeDropdown = () => {
    links.value.forEach((link) => {
        link.dropdownOpen = false;
    });
};
</script>
  