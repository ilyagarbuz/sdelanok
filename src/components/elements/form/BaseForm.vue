<template>
  <!-- Base form -->
  <form
    @submit.prevent="submit"
    class="flex flex-col gap-6 max-w-md group-focus-within:border-at-blue"
  >
    <div class="group flex flex-col gap-2">
      <BaseInput
        :label="'Имя'"
        v-model="formData.name"
        @input="errorMsg = ''"
        type="text"
      />
    </div>
    <div class="group flex flex-col gap-2">
      <BaseInput
        :label="'Телефон'"
        :maska="'+375 (##) ###-##-##'"
        v-model="formData.phone"
        @input="errorMsg = ''"
        type="text"
      />
    </div>
    <div>
      <div class="text-red-500 text-sm" v-if="errorMsg">{{ errorMsg }}</div>
      <button type="submit" class="flex btn mt-5">
        <div v-if="isSending" class="flex items-center justify-center mr-3">
          <div
            class="w-6 h-6 border-b-2 border-white rounded-full animate-spin"
          ></div>
        </div>
        <span v-if="!isSending">{{ button }}</span>
        <span v-else>Отправляю...</span>
      </button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/elements/form/fields/BaseInput.vue";
import { sendMessage } from "@/api/tgApi";
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
      errorMsg: "",
      isSending: false,
    };
  },
  methods: {
    async submit() {
      if (!this.formData || !this.formData.name || !this.formData.phone) {
        this.errorMsg = "Пожалуйтса, заполните все поля.";
        return;
      }
      let message = `<b>Заявка с сайта!</b>\n`;
      message += `\n`;
      message += `<b>Имя: ${this.formData.name}</b>\n`;
      message += `<b>Телефон: ${this.formData.phone}</b>\n`;
      this.isSending = true;
      try {
        await sendMessage(message);
        this.formData = {};
        this.$emit("close");
        this.$swal({
          icon: "success",
          title: "Отлично!",
          text: "Наш специалист свяжется с вами в ближайшее время.",
          confirmButtonText: "Хорошо",
        });
      } catch (error) {
        console.log(error);
        this.formData = {};
        this.$emit("close");
        this.$swal({
          icon: "error",
          title: "Ошибка!",
          text: "К сожалению что-то пошло не так. Пожалуйста свяжитесь с нами по телефону.",
          confirmButtonText: "Хорошо",
          footer:
            '<a class="underline text-at-blue" href="tel:+375296554722">+375 29 655 47 22</a>',
        });
      } finally {
        this.isSending = false;
      }
    },
  },
};
</script>
