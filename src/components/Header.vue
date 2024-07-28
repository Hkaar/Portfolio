<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
    active: String
})

function toggleMenu() {
    const menu = document.getElementById("headerMenu") as HTMLElement;
    const submenus = menu.querySelectorAll(".menu");

    if (menu.classList.contains("h-52")) {
        menu.classList.remove("h-52");
        menu.classList.add("h-0");

        submenus.forEach((e) => {
            e.classList.add("hidden");
        });
    } else {
        menu.classList.remove("h-0");
        menu.classList.add("h-52");

        submenus.forEach((e) => {
            e.classList.remove("hidden");
        });
    }
}

window.addEventListener("scroll", () => {
    const headerNav = document.getElementById("headerNav") as HTMLElement;

    if (window.scrollY > 30) {
        headerNav.classList.add("bg-opacity-50", "backdrop-blur-md", "drop-shadow-lg");
    } else {
        headerNav.classList.remove("bg-opacity-50", "backdrop-blur-md", "drop-shadow-lg");
    }
});
</script>

<template>
    <header id="headerNav"
        class="px-3 flex flex-col md:flex-row items-center w-full justify-between bg-primary duration-200 transition-all ease-in-out text-white fill-white shadow-md sticky left-0 top-0">
        <div class="flex flex-row w-full justify-between">
            <div class="flex items-center gap-2">
                <h3 class="text-lg font-medium">
                    <\> Hkaar.dev
                </h3>
            </div>

            <button type="button" class="py-4 md:hidden" @click="toggleMenu">
                <i class="material-symbols-rounded">
                    menu
                </i>
            </button>
        </div>

        <div id="headerMenu" class="md:flex items-center gap-5 flex-col md:flex-row w-full md:w-fit transition-all duration-200 ease-in-out h-0 md:h-fit">
            <nav class="flex items-center flex-col md:flex-row gap-2 w-full md:w-fit">
                <router-link :class="active === 'home' ? 'menu-active' : ''" :to="{ name: 'home' }"
                    class="py-4 px-2 w-full md:w-fit menu hidden md:block">Home</router-link>
                <router-link :class="active === 'blog' ? 'menu-active' : ''" :to="{ name: 'blog' }"
                    class="py-4 px-2 w-full md:w-fit menu hidden md:block">Blog</router-link>
                <router-link :class="active === 'projects' ? 'menu-active' : ''" :to="{ name: 'projects' }"
                    class="py-4 px-2 w-full md:w-fit menu hidden md:block">Projects</router-link>
            </nav>
        </div>
    </header>
</template>

<style lang="postcss" scoped>
.menu-active {
    @apply border-b-4 border-tertiary bg-secondary
}
</style>