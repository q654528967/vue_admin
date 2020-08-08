import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MyHttpServer from "@/plugins/http.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(MyHttpServer);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
