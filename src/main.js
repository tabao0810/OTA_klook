import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerGlobalComponent } from "./utils/import";
import ModalView from "./components/modal/ModalView.vue";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./assets/styles/global.css";
import "@/assets/fontawesome/css/all.css";

const app = createApp(App);
registerGlobalComponent(app);
app.use(router);
app.component("modal-view", ModalView);
app.mount("#app");
