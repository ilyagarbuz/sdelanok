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

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/questions",
    name: "questions",
    component: QuestionsView,
  },
  {
    path: "/questions/main",
    name: "questions-main",
    props: { title: "Главные вопросы", questions },
    component: QuestionsMainView,
  },
  {
    path: "/questions/price",
    name: "questions-price",
    props: { title: "Стоимость и оплата", questions: questionsPrice },
    component: QuestionsMainView,
  },
  {
    path: "/questions/duration",
    name: "questions-duration",
    props: { title: "Сроки", questions: questionsDuration },
    component: QuestionsMainView,
  },
  {
    path: "/questions/process",
    name: "questions-process",
    props: { title: "Процесс", questions: questionsProcess },
    component: QuestionsMainView,
  },
  {
    path: "/questions/layout",
    name: "questions-layout",
    props: { title: "Планировка", questions: questionsLayout },
    component: QuestionsMainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
