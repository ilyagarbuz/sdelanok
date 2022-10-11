<template>
  <div class="min-h-full font-Raleway text-default-text-color box-border pb-11">
    <BaseHeader />
    <!-- Main -->
    <main>
      <router-view @eventModal="openModal" />
    </main>
    <ContactBar @eventModal="openModal" />
    <BaseModal :open="isOpenModal" @close="isOpenModal = !isOpenModal">
      <ModalContent :title="modalData.title" :text="modalData.text" />
      <BaseForm
        @close="isOpenModal = !isOpenModal"
        :button="modalData.button"
      />
    </BaseModal>
  </div>
</template>

<script setup>
import BaseHeader from "@/components/header/BaseHeader.vue";
import ContactBar from "@/components/elements/ContactBar.vue";
import BaseModal from "@/components/elements/modal/BaseModal.vue";
import ModalContent from "@/components/elements/modal/ModalContent.vue";
import BaseForm from "@/components/elements/form/BaseForm.vue";
import { ref } from "vue";

// Modal
const isOpenModal = ref(false);
const modalData = ref({});
const openModal = (data) => {
  modalData.value = data;
  isOpenModal.value = true;
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
</style>
