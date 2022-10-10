<template>
  <!-- Header -->
  <header>
    <!-- Hidden menu -->
    <div
      class="absolute z-10 top-0 left-0 right-0 bg-light-grey drop-shadow-md transition transform ease-in-out duration-300"
      :class="{ '-translate-y-full': isHideMenu }"
    >
      <div class="container pt-9 pb-5">
        <!-- Close menu button -->
        <div>
          <button
            @click="isHideMenu = true"
            class="absolute top-4 right-5 hover:opacity-70"
          >
            <fai icon="xmark" class="text-3xl text-at-blue" />
          </button>
        </div>
        <NavigationList />
        <SocialList />
      </div>
    </div>
    <!-- Container -->
    <div class="container flex justify-between items-center pt-8">
      <!-- Logo Block -->
      <div class="logo header__logo">
        <a href="#">
          <!-- <fai
            icon="trowel-bricks"
            class="text-5xl md:text-6xl lg:text-7xl text-at-light-green"
          /> -->
          <span class="text-4xl font-bold"
            >SDELAN.<span class="text-at-blue">OK</span></span
          >
        </a>
      </div>
      <!-- Buttons Block -->
      <div class="flex items-center gap-10">
        <!-- Phone link -->
        <div>
          <a href="tel:+375296554722" class="hover:opacity-70">
            <fai icon="phone" class="text-2xl text-at-blue md:hidden" />
            <span
              class="hidden md:inline-block text-2xl text-at-blue font-number"
              >+375 (29) 655-47-22</span
            >
          </a>
        </div>
        <!-- Burger button -->
        <div>
          <button @click="isHideMenu = !isHideMenu" class="lg:hover:opacity-70">
            <fai icon="bars" class="text-3xl text-at-blue" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import NavigationList from "@/components/elements/NavigationList.vue";
import SocialList from "@/components/elements/SocialList.vue";
import { ref } from "vue";
const isHideMenu = ref(true);
</script>
