<template>
  <!-- Form section -->
  <section>
    <!-- Form container -->
    <div class="container py-16 md:max-w-2xl">
      <!-- Form heading -->
      <p class="section-heading--left">Оставьте заявку на расчет стоимости</p>
      <!-- Form text -->
      <p class="font-medium mb-9">
        <span class="font-bold">Оставьте свой номер,</span> наш менеджер
        расспросит об особенностях квартиры, расскажет о материалах и
        сориентирует по стоимости.
      </p>
      <!-- Form -->
      <BaseForm :button="'Отправить заявку'" />
    </div>
  </section>
</template>

<script>
import BaseForm from "@/components/elements/form/BaseForm.vue";
export default {
  components: {
    BaseForm,
  },
};
</script>

<style scoped>
section {
  background-color: #f4f2f5;
}
</style>
