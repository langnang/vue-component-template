import Vue from "vue";
import App from "./App.vue";
import VueComponent from "./../lib/vue-component-template.umd.min";

Vue.config.productionTip = false;
Vue.use(VueComponent);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
