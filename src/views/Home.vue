<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <Header active="home"></Header>

    <section class="min-h-screen grid justify-items-center bg-gray-100">
        <div class="flex container">
            <div class="flex-1 grid items-center justify-items-center text-center md:justify-items-start md:text-start">
                <article class="flex flex-col gap-5 items-center md:items-start">
                    <h1 class="text-5xl lg:text-6xl font-bold tracking-tighter">Hey there!</h1>

                    <div class="flex flex-col gap-1 w-75">
                        <h3 class="text-xl tracking-normal">
                            I'm Hkaar, a hobbyist software developer making projects in Python, PHP, JavaScript & Zig
                        </h3>

                        <span class="text-gray-400 tracking-wide">
                            Want to know more? then click the button below!
                        </span>
                    </div>

                    <a href="#"
                        class="p-3 bg-primary text-white rounded-md shadow-md w-fit hover:scale-105 active:scale-90 duration-200 ease-in-out hover:shadow-lg flex items-center gap-2">
                        <i class="material-symbols-rounded">
                            keyboard_double_arrow_down
                        </i>
                        See more
                    </a>
                </article>
            </div>

            <div class="flex-1 place-items-center hidden md:grid">
                <svg width="1121" height="866" viewBox="0 0 1121 866" fill="none" class="size-3/4"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1120 520.5V6C1120 3.23858 1117.76 1 1115 1H208C205.239 1 203 3.23859 203 6.00001V520.5M1120 520.5H203M1120 520.5L985 849.5M1120 520.5V540.047C1120 540.677 1119.88 541.301 1119.65 541.886L1018.68 797.044C1018.56 797.347 1018.41 797.638 1018.23 797.912L985 849.5M985 849.5H124H1M985 849.5L874.5 865H118L1 849.5M203 520.5L1 849.5M1100 21.5V478C1100 480.761 1097.76 483 1095 483H226C223.239 483 221 480.761 221 478V21.5C221 18.7386 223.239 16.5 226 16.5H1095C1097.76 16.5 1100 18.7386 1100 21.5Z"
                        stroke="black" />
                    <path d="M108.5 731L218.271 543H1077L992.088 731H108.5Z" stroke="black" />
                    <path d="M411 829L440.785 751H628L602.5 829H411Z" stroke="black" />
                    <path d="M492 139.298V123H721V139.298M492 139.298V342H721V139.298M492 139.298H721" stroke="black" />
                    <path d="M653 73.2977V57H882V73.2977M653 73.2977V276H882V73.2977M653 73.2977H882" stroke="black" />
                    <path
                        d="M247.5 44.5L250.5 47.5H257.5M247.5 44.5H239V47.5V70H273V47.5H257.5M247.5 44.5H254.5L257.5 47.5"
                        stroke="black" />
                    <path d="M247.5 84L250.5 87H257.5M247.5 84H239V87V109.5H273V87H257.5M247.5 84H254.5L257.5 87"
                        stroke="black" />
                    <path d="M246 148.5V123H262L266 128V148.5H246Z" stroke="black" />
                </svg>
            </div>
        </div>
    </section>

    <section class="py-10 grid justify-items-center">
        <div class="container">
            <div class="flex items-center">
                <article class="flex-1">
                    <article class="flex flex-col gap-5 border border-primary rounded px-6 py-4 shadow-md ">
                        <h3 class="text-4xl font-bold tracking-tight">
                            About me
                        </h3>

                        <p class="w-3/4 tracking-wide">
                            Hello! I'm Hkaar, a hobbyist software developer with over 3 years of experience. My primary
                            focus is on creating CLI applications, desktop GUI applications, full-stack web
                            applications.
                        </p>
                    </article>
                </article>

                <div class="flex-1 grid place-items-center">
                    image
                </div>
            </div>
        </div>
    </section>

    <section class="py-10 grid justify-items-center">
        <div class="container">
            <div class="flex">
                <div class="flex-1 grid place-items-center">
                    <figure
                        class="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                        <div
                            class=" relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                            <div class="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                                <span class="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span class="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span class="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                            </div>
                            <div
                                class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
                                www.hkaar.pages.dev</div>
                        </div>

                        <div class="bg-gray-800 rounded-b-lg">
                            <img class="max-w-full h-auto rounded-b-lg" src="../assets/img/1618x1010/img1.jpg"
                                alt="Browser Placeholder">
                        </div>
                    </figure>
                </div>

                <article class="flex-1 flex flex-col gap-5 border border-primary rounded px-6 py-4 shadow-md">
                    <h3 class="text-4xl font-bold">
                        What can i do?
                    </h3>

                    <p class="w-3/4">
                        As a software developer for
                    </p>
                </article>
            </div>
        </div>
    </section>

    <section class="py-10 grid justify-items-center">
        <div class="container">
            <div class="flex">
                <article class="flex-1 flex flex-col gap-5 border border-primary rounded px-6 py-4 shadow-md">
                    <h3 class="text-4xl font-bold">
                        What can i do?
                    </h3>

                    <p class="w-3/4">
                        I'm a software developer primary focused on making CLI apps, Desktop GUI apps,
                        Full-stack web apps, and some data science utilities.
                    </p>
                </article>

                <div class="flex-1 grid place-items-center">
                    image
                </div>
            </div>
        </div>
    </section>

    <Footer></Footer>
</template>