<template>
  <!-- Reviews section -->
  <section>
    <!-- Reviews container -->
    <div class="container py-16">
      <!-- Reviews heading -->
      <p class="section-heading--left">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</p>
      <!-- Reviews content -->
      <div class="grid grid-cols-1 gap-8">
        <!-- Review -->
        <div v-for="review in reviews" :key="review.title">
          <div
            class="review_gallery grid grid-flow-col grid-rows-2 mb-6 gap-3 h-32 sm:h-64 md:h-96"
          >
            <figure class="col-span-1 row-span-1">
              <img
                :src="require(`@/assets/img${review.images[1]}`)"
                alt="Квартира"
              />
            </figure>
            <figure class="col-span-1 row-span-1">
              <img
                :src="require(`@/assets/img${review.images[2]}`)"
                alt="Квартира"
              />
            </figure>
            <figure class="row-span-2 col-span-2">
              <img
                :src="require(`@/assets/img${review.images[0]}`)"
                alt="Квартира"
              />
            </figure>
          </div>
          <p class="mb-4">
            <strong class="text-lg">{{ review.title }}</strong>
          </p>
          <p class="mb-3">
            {{ review.text }}
          </p>
          <p class="text-gray-400">{{ review.date }}</p>
          <p>
            <strong>{{ review.name }}</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reviews } from "@/assets/data/reviewsData";
export default {
  data() {
    return {
      reviews,
    };
  },
};
</script>

<style lang="scss" scoped>
.review_gallery {
  figure {
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
