<template>
  <!-- Portfolio list -->
  <ul class="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="apart in apartments" :key="apart.id" class="flex flex-col gap-4">
      <carousel @click="eventGallery(apart.images)" :items-to-show="1">
        <slide v-for="slide in apart.images" :key="slide">
          <img class="mb-4" :src="require(`@/assets/img${slide}`)" alt="aprt" />
        </slide>

        <template #addons>
          <navigation class="hidden md:block" />
          <pagination class="md:hidden" />
        </template>
      </carousel>
      <p class="text-lg font-medium text-center">{{ apart.title }}</p>
      <ul class="flex gap-12 justify-center pr-5">
        <li class="flex flex-col items-center">
          <div><fai icon="wallet" class="text-3xl" /></div>
          <div class="text-sm">{{ apart.price }} руб.</div>
        </li>
        <li class="flex flex-col items-center">
          <div><fai icon="clock" class="text-3xl" /></div>
          <div class="text-sm">{{ apart.time }}.</div>
        </li>
        <li class="flex flex-col items-center">
          <div><fai icon="pen-square" class="text-3xl" /></div>
          <div class="text-sm">{{ apart.size }} м<sup>2</sup></div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { apartments } from "@/assets/data/portfolioData";

export default {
  emits: ["onEventGallery"],
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      apartments,
    };
  },
  methods: {
    eventGallery(images) {
      this.$emit("onEventGallery", images);
    },
  },
};
</script>

<style scoped lang="scss">
.carousel__icon {
  transition: opacity 0.3s ease;
  opacity: 0;
}

.carousel {
  cursor: pointer;
  &:hover {
    .carousel__icon {
      opacity: 0.7;
    }
  }
}

.carousel__slide--visible {
  transform: rotateY(0);
}

.carousel__slide {
  width: 370px;
  height: 250px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
