<template>
  <!-- Hero Section -->
  <section class="flex hero-height overflow-hidden">
    <HeroBackground />
    <!-- Hero container -->
    <div class="container flex flex-col justify-center h-full">
      <!-- Hero content -->
      <div class="md:text-center flex flex-col gap-10">
        <!-- Hero heading -->
        <h1 class="text-4xl font-medium md:max-w-2xl md:mx-auto">
          Капитальный ремонт квартир по индивидуальному дизайн‑проекту
        </h1>
        <!-- Hero action -->
        <div class="">
          <button @click="eventModal" class="btn">Узнать стоимость</button>
        </div>
        <!-- Hero benifits -->
        <div class="md:flex justify-center">
          <ul>
            <li class="flex gap-2 items-center">
              <fai icon="arrow-right" class="text-xs" />
              <span class="font-normal md:font-medium"
                >Фиксированные сроки и стоимость</span
              >
            </li>
            <li class="flex gap-2 items-center">
              <fai icon="arrow-right" class="text-xs" />
              <span class="font-normal md:font-medium"
                >Индивидуальный дизайн-проект</span
              >
            </li>
            <li class="flex gap-2 items-center">
              <fai icon="arrow-right" class="text-xs" />
              <span class="font-normal md:font-medium"
                >Персональный архитектор</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroBackground from "@/components/hero/HeroBackcround.vue";

export default {
  emits: ["eventModal"],
  components: {
    HeroBackground,
  },
  methods: {
    eventModal() {
      this.$emit("eventModal", {
        title: "Сколько будет стоить ремонт",
        text: "Стоимость ремонта зависит от многих параметров. Например, от типа дома и материалов, которые вы выберете.",
        button: "Оставить заявку",
      });
    },
  },
};
</script>

<style scoped>
.hero-height {
  height: calc(100vh - 73px);
}
</style>
