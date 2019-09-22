import Vue from "vue";
import Vuex from "vuex";
import companyInformation from "./modules/companyInformation.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    companyInformation : companyInformation
  }
});