<template>
  <!-- Modal content -->
  <div class="mb-16">
    <h1 class="text-3xl font-bold mb-7">{{ title }}</h1>
    <p v-if="text" class="font-medium mb-5">{{ text }}</p>
    <p class="font-medium">
      <span class="font-bold">Оставьте свой номер,</span> наш менеджер
      расспросит об особенностях квартиры, расскажет о материалах и сориентирует
      по стоимости.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Оставить заявку",
    },
    text: {
      type: String,
    },
  },
};
</script>
