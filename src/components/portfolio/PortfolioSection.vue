<template>
  <!-- Portfolio section -->
  <section>
    <!-- Portfolio container -->
    <div class="container pt-16">
      <!-- Portfolio heading -->
      <p
        class="text-3xl font-medium mb-12 lg:max-w-xl lg:mx-auto lg:text-center"
      >
        <span class="font-bold"
          >524 квартиры уже сделаны, 86 ремонтируются прямо сейчас.</span
        >
        Посмотрите, как выглядят готовые ремонты
      </p>

      <PortfolioList @eventGallery="eventGallery" />
    </div>
  </section>
</template>

<script>
import PortfolioList from "@/components/portfolio/PortfolioList.vue";

export default {
  components: { PortfolioList },
  methods: {
    eventGallery(images) {
      this.$emit("eventGallery", images);
    },
  },
};
</script>

<style scoped>
section {
  background-color: #f4f2f5;
}
</style>
