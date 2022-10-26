<template>
  <!-- Content section -->
  <section>
    <!-- Content container -->
    <div class="container py-16">
      <!-- Content heading -->
      <p class="section-heading">
        Квартира будет выглядеть так, как вы захотите. Любые цвета и материалы
      </p>
      <!-- Content slider -->
      <div>
        <Carousel>
          <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item">
              <img
                class="mb-4"
                :src="require(`@/assets/img${slide}`)"
                alt="aprt"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { images } from "@/assets/data/contentData";

import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images,
    };
  },
};
</script>

<style scoped>
section {
  background-color: #f4f2f5;
}
</style>
