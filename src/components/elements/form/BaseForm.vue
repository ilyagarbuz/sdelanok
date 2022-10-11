<template>
  <!-- Base form -->
  <form
    @submit.prevent="submit"
    class="flex flex-col gap-6 max-w-md group-focus-within:border-at-blue"
  >
    <div class="group flex flex-col gap-2">
      <BaseInput :label="'Имя'" v-model="formData.name" type="text" />
    </div>
    <div class="group flex flex-col gap-2">
      <BaseInput
        :label="'Телефон'"
        :maska="'+375 (##) ###-##-##'"
        v-model="formData.phone"
        type="text"
      />
    </div>
    <div>
      <button type="submit" class="btn mt-5">{{ button }}</button>
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
  methods: {
    submit() {
      console.log(this.formData);
      this.formData = {};
      this.$emit("close");
      this.$swal({
        icon: "success",
        title: "Отлично!",
        text: "Менеджер свяжется с вами в ближайшее время.",
        confirmButtonText: "Хорошо",
      });
    },
  },
};
</script>
