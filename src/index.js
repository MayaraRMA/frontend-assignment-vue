import 'Styles/main.scss';
import Vue from 'vue';
import VueRouter from "vue-router";
import store from "./store/index.js";
import App from './App.vue';
import { routes } from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: createElement => createElement(App),
  el: '#app'
});
