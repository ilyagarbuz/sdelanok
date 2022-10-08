import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrowelBricks,
  faBars,
  faXmark,
  faPhone,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faViber } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/tailwind.css";

library.add(
  faTrowelBricks,
  faBars,
  faXmark,
  faPhone,
  faArrowRight,
  faInstagram,
  faViber,
  faEnvelope
);

createApp(App).use(router).component("fai", FontAwesomeIcon).mount("#app");
