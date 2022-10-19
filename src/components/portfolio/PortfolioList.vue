<template>
  <!-- Portfolio list -->
  <ul class="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="apart in apartments" :key="apart.id" class="flex flex-col gap-4">
      <img class="mb-4" src="@/assets/img/portfolio/apart_1/1.jpg" alt="aprt" />
      <p class="text-lg font-medium">{{ apart.title }}</p>
      <p class="text-base mb-3">{{ apart.address }}</p>
      <ul class="flex gap-12">
        <li class="flex flex-col items-center">
          <div><fai icon="wallet" class="text-3xl" /></div>
          <div>{{ apart.price }} руб.</div>
        </li>
        <li class="flex flex-col items-center">
          <div><fai icon="clock" class="text-3xl" /></div>
          <div>{{ apart.time }} мес.</div>
        </li>
        <li class="flex flex-col items-center">
          <div><fai icon="pen-square" class="text-3xl" /></div>
          <div>{{ apart.size }} м<sup>2</sup></div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { apartments } from "@/assets/data/portfolioData";
</script>
