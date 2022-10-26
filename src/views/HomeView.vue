<template>
  <HeroSection @eventModal="eventModal" />
  <PortfolioSection @eventGallery="eventGallery" />
  <BenefitsSection />
  <ContentSection />
</template>

<script setup></script>

<script>
import HeroSection from "@/components/hero/HeroSection.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
import BenefitsSection from "@/components/benefits/BenefitsSection.vue";
import ContentSection from "@/components/content/ContentSection.vue";

export default {
  components: {
    HeroSection,
    PortfolioSection,
    BenefitsSection,
    ContentSection,
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
