<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
    active: String
})
</script>

<template>    
    <header class="py-4 px-3 flex items-center justify-between bg-primary text-white fill-white shadow-md">
        <div class="flex items-center gap-2">
            <h3 class="text-lg font-semibold">
                <\> Hkaar.dev
            </h3>
        </div>

        <div class="flex items-center gap-5">
            <div class="flex items-center gap-4">
                <router-link :class="active === 'home' ? 'border-b border-tertiary' : ''" :to="{ name: 'home' }">Home</router-link>
                <router-link :class="active === 'blog' ? 'border-b border-tertiary' : ''" :to="{ name: 'blog' }">Blog</router-link>
                <router-link :class="active === 'projects' ? 'border-b border-tertiary' : ''" :to="{ name: 'projects' }">Projects</router-link>
            </div>

            <div class="flex items-center gap-2">
                <a href="https://github.com/Hkaar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"
                        class="fill-inherit">
                        <path
                            d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                    </svg>
                </a>
                <a href="www.twitter.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px"
                        class="fill-inherit">
                        <path
                            d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                    </svg>
                </a>
            </div>
        </div>
    </header>
</template>