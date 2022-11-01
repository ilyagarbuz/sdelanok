<template>
  <!-- Footer -->
  <footer>
    <!-- Footer container -->
    <div class="container pt-16 pb-7 md:max-w-2xl">
      <p class="mb-7">
        Гарантийное обслуживание
        <a class="text-at-blue block" href="mailto:example@example.com"
          >example@example.com</a
        >
      </p>
      <p class="mb-7">
        <a class="text-3xl" href="tel:+375296554722">+375 29 655 47 22</a>
      </p>
      <SocialList class="mb-7" />
      <NavigationList />
    </div>
  </footer>
</template>

<script>
import SocialList from "@/components/elements/SocialList.vue";
import NavigationList from "@/components/elements/NavigationList.vue";

export default {
  components: { SocialList, NavigationList },
};
</script>

<style lang="scss">
footer {
  font-size: 18px;
  color: white;
  background-color: #333;
}
</style>
