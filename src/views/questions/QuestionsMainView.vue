<template>
  <!-- Questions section -->
  <section>
    <!-- Questions container -->
    <div class="container md:max-w-2xl pb-20 pt-16 md:pt-28">
      <!-- Questions heading -->
      <router-link
        class="link text-lg flex gap-2 items-center mb-4"
        :to="{ name: 'questions' }"
      >
        <fai class="text-sm" icon="chevron-left" />
        Назад
      </router-link>
      <p class="section-heading--left">{{ title }}</p>
      <!-- Questions content -->
      <ul class="flex flex-col gap-5">
        <li v-for="question in questions" :key="question.title">
          <a class="text-lg font-bold mb-1 inline-block">{{
            question.title
          }}</a>
          <p class="text-lg">
            {{ question.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    questions: {
      type: Object,
      required: true,
    },
  },
};
</script>
