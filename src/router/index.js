import { createRouter, createWebHistory } from "vue-router";
import {
  questions,
  questionsPrice,
  questionsDuration,
  questionsProcess,
  questionsLayout,
} from "@/assets/data/questionsData";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import QuestionsView from "@/views/questions/QuestionsView.vue";
import QuestionsMainView from "@/views/questions/QuestionsMainView.vue";
import ReviewsView from "@/views/ReviewsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Главная" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "О компании" },
  },
  {
    path: "/questions",
    name: "questions",
    component: QuestionsView,
    meta: { title: "Вопросы" },
  },
  {
    path: "/questions/main",
    name: "questions-main",
    props: { title: "Главные вопросы", questions },
    component: QuestionsMainView,
    meta: { title: "Главные вопросы" },
  },
  {
    path: "/questions/price",
    name: "questions-price",
    props: { title: "Стоимость и оплата", questions: questionsPrice },
    component: QuestionsMainView,
    meta: { title: "Стоимость и оплата" },
  },
  {
    path: "/questions/duration",
    name: "questions-duration",
    props: { title: "Сроки", questions: questionsDuration },
    component: QuestionsMainView,
    meta: { title: "Сроки" },
  },
  {
    path: "/questions/process",
    name: "questions-process",
    props: { title: "Процесс", questions: questionsProcess },
    component: QuestionsMainView,
    meta: { title: "Процесс" },
  },
  {
    path: "/questions/layout",
    name: "questions-layout",
    props: { title: "Планировка", questions: questionsLayout },
    component: QuestionsMainView,
    meta: { title: "Сроки" },
  },
  {
    path: "/reviews",
    name: "reviews",
    component: ReviewsView,
    meta: { title: "Отзывы" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Change document title
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | SDELAN.OK` : "SDELAN.OK";
});

export default router;
