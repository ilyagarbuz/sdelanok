<template>
  <!-- Base form -->
  <form class="flex flex-col gap-6 max-w-md">
    <div class="group flex flex-col gap-2">
      <BaseInput :label="'Имя'" v-model="formData.name" type="text" />
    </div>
    <div class="group flex flex-col gap-2">
      <BaseInput :label="'Телефон'" v-model="formData.phone" type="number" />
    </div>
    <div>
      <button class="btn mt-5">{{ button }}</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/elements/form/fields/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
  props: {
    button: {
      type: String,
      default: "Отправить",
    },
  },
  data() {
    return {
      formData: {},
    };
  },
};
</script>
