<template>
  <!-- Questions section -->
  <section>
    <!-- Questions container -->
    <div class="container py-16 md:max-w-2xl">
      <!-- Questions heading -->
      <p class="section-heading--left">Часто задаваемые вопросы</p>
      <!-- Questions accordion -->
      <AccordionBase>
        <AccordionItem v-for="question in questions" :key="question.title">
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template v-slot:accordion-trigger>
            <h3
              class="font-bold text-lg mb-1 hover:text-at-blue transition-colors"
            >
              {{ question.title }}
            </h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template v-slot:accordion-content>
            <span class="text-base">{{ question.text }}</span>
          </template>
        </AccordionItem>
      </AccordionBase>
    </div>
  </section>
</template>

<script>
import AccordionBase from "@/components/elements/accordion/AccordionBase.vue";
import AccordionItem from "@/components/elements/accordion/AccordionItem.vue";
import { questions } from "@/assets/data/questionsData";
export default {
  components: {
    AccordionBase,
    AccordionItem,
  },
  data() {
    return {
      questions,
    };
  },
};
</script>
