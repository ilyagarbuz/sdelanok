<template>
  <HeroSection @eventModal="eventModal" />
  <PortfolioSection @eventGallery="eventGallery" />
</template>

<script setup></script>

<script>
import HeroSection from "@/components/hero/HeroSection.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";

export default {
  components: {
    HeroSection,
    PortfolioSection,
  },
  methods: {
    eventModal(data) {
      this.$emit("eventModal", data);
    },
    eventGallery(images) {
      this.$emit("eventGallery", images);
    },
  },
};
</script>
