import CompanyData from "./components/CompanyData.vue";
import CompanyPage from "./components/CompanyPage.vue";
import CompanyTable from "./components/CompanyTable.vue";


const routes = [
  {
    path: "/"
  },
  {
    path: "*",
    name: "notFound",
    // component: NotFound,
    meta: { title: "404" }
  },
  {
    path: "/companydata",
    name: "companydata",
    component: CompanyData,
    meta: {
      title: "Company Data",
      breadcrumb: [
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
            { name: "Company Page" }
          ]
      }
  }
]

export { routes }
