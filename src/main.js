import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./bootstrap/plugins.bootstrap";
import "./bootstrap/fontawesome.bootstrap";
import "./bootstrap/components.bootstrap";
import "./bootstrap/directives.bootstrap";
import "./scss/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
