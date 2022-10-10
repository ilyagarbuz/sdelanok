<template>
  <!-- Contact Bar -->
  <div class="fixed bottom-0 left-0 right-0 max-h-min shadow-top bg-white">
    <!-- Container -->
    <div class="container flex items-center gap-5 md:h-12">
      <!-- Actions only mobile -->
      <div class="border-r py-2 pr-4 md:hidden">
        <!-- Phone link -->
        <div>
          <a href="tel:+375296554722" class="hover:opacity-70">
            <fai icon="phone" class="text-2xl text-at-blue" />
          </a>
        </div>
      </div>
      <!-- Content -->
      <div class="w-full">
        <div>
          <p
            class="text-center text-sm md:text-base md:text-default-text-color font-normal text-light-text-color"
          >
            <a
              @click.prevent="eventModal"
              href="#"
              class="hidden md:inline-block text-at-blue hover:opacity-70 mr-1"
              >Закажите обратный звонок
            </a>
            <span class="hidden md:inline-block mr-1"> или позвоните </span>
            <a
              href="tel:+375296554722"
              class="hidden md:inline-block text-at-blue hover:opacity-70 font-number mr-1"
            >
              +375 (29) 655-47-22</a
            >
            Работаем без выходных
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    eventModal() {
      this.$emit("eventModal", {
        title: "Заказать обратный звонок",
        button: "Оставить заявку",
      });
    },
  },
};
</script>
