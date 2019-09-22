import Vue from "vue";
import Router from "vue-router";
import CompanyData from "./components/CompanyData.vue";
import CompanyPage from "./components/CompanyPage.vue";
import CompanyTable from "./components/CompanyTable.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/companydata",
      name: "companydata",
      component: CompanyData,
      meta: {
        title: "Company Data",
        breadcrumb: [
            { name: "Home" },
            { name: "Company Data" }
          ]
      }
    },
    {
      path: "/companytable",
      name: "companytable",
      component: CompanyTable,
      meta: {
        title: "Company Table",
        breadcrumb: [
            { name: "Home" },
            { name: "Company Table" }
          ]
      }
    },
    {
        path: "/companypage",
        name: "companypage",
        component: CompanyPage,
        meta: {
          title: "Company Page",
          breadcrumb: [
              { name: "Home" },
              { name: "Company Page" }
            ]
        }
    }
    ]
});
