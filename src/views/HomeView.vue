<template>
  <HeroSection @eventModal="eventModal" />
  <PortfolioSection @onEventGallery="eventGallery" />
  <BenefitsSection />
  <ContentSection />
  <QualitySection />
  <FormSection />
  <QuestionsSection />
</template>

<script setup></script>

<script>
import HeroSection from "@/components/hero/HeroSection.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
import BenefitsSection from "@/components/benefits/BenefitsSection.vue";
import ContentSection from "@/components/content/ContentSection.vue";
import QualitySection from "@/components/quality/QualitySection.vue";
import FormSection from "@/components/form/FormSection.vue";
import QuestionsSection from "@/components/questions/QuestionsSection.vue";

export default {
  emits: ["eventModal", "onEventGallery"],
  components: {
    HeroSection,
    PortfolioSection,
    BenefitsSection,
    ContentSection,
    QualitySection,
    FormSection,
    QuestionsSection,
  },
  methods: {
    eventModal(data) {
      this.$emit("eventModal", data);
    },
    eventGallery(images) {
      this.$emit("onEventGallery", images);
    },
  },
};
</script>
