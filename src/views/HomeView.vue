<template>
  <HeroSection @eventModal="$emit('eventModal', { data })" />
  <PortfolioSection />
</template>

<script setup>
import HeroSection from "@/components/hero/HeroSection.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
</script>
