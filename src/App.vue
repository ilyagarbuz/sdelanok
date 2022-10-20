<template>
  <div class="min-h-full font-Raleway text-default-text-color box-border pb-11">
    <BaseHeader />
    <!-- Main -->
    <main>
      <router-view @eventModal="openModal" @eventGallery="openGallery" />
    </main>
    <ContactBar @eventModal="openModal" />
    <BaseModal :open="isOpenModal" @close="isOpenModal = !isOpenModal">
      <ModalContent :title="modalData.title" :text="modalData.text" />
      <BaseForm
        @close="isOpenModal = !isOpenModal"
        :button="modalData.button"
      />
    </BaseModal>
    <BaseModal :open="isOpenGallery" @close="isOpenGallery = !isOpenGallery">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide v-for="slide in galleryImages" :key="slide">
          <div class="carousel__item">
            <img
              class="mb-4"
              :src="require(`@/assets/img${slide}`)"
              alt="aprt"
            />
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="3"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(slide, index) in galleryImages" :key="slide">
          <div class="carousel__item" @click="slideTo(index - 1)">
            <img
              class="mb-4"
              :src="require(`@/assets/img${slide}`)"
              alt="aprt"
            />
          </div>
        </Slide>
      </Carousel>
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

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

// Modal
const isOpenModal = ref(false);
const isOpenGallery = ref(false);
const modalData = ref({});
const galleryImages = ref([]);
const openModal = (data) => {
  modalData.value = data;
  isOpenModal.value = true;
};
const openGallery = (images) => {
  galleryImages.value = images;
  isOpenGallery.value = true;
};

const currentSlide = ref(0);

function slideTo(val) {
  currentSlide.value = val;
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
.carousel__slide {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
