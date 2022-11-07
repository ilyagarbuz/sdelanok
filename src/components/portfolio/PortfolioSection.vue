<template>
  <!-- Portfolio section -->
  <section>
    <!-- Portfolio container -->
    <div class="container py-16">
      <!-- Portfolio heading -->
      <p
        class="text-3xl font-medium mb-12 lg:max-w-xl lg:mx-auto lg:text-center"
      >
        <span class="font-bold">Более 100 квартир уже сделаны.</span>
        Посмотрите, как выглядят готовые ремонты
      </p>

      <PortfolioList @onEventGallery="eventGallery" />
    </div>
  </section>
</template>

<script>
import PortfolioList from "@/components/portfolio/PortfolioList.vue";

export default {
  emits: ["onEventGallery"],
  components: { PortfolioList },
  methods: {
    eventGallery(images) {
      this.$emit("onEventGallery", images);
    },
  },
};
</script>

<style scoped>
section {
  background-color: #f4f2f5;
}
</style>
