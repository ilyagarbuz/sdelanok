import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import maska from "maska";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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

createApp(App)
  .use(maska)
  .use(VueSweetalert2)
  .use(router)
  .component("fai", FontAwesomeIcon)
  .mount("#app");
