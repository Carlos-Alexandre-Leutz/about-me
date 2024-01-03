import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "../src/assets/css/esdr.css";
import "../src/assets/css/myFrameworks.css";
import "../src/assets/css/paginas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(store).use(router).use(i18n).mount("#app");
