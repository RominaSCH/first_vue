import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List"
import Head from "./components/Head"
import Detail from "./components/Detail"

const routes = [ //같은 route에 걸리면 위에있는게 우선순위.
  {
    path: "/list",
    component: List,
  },
  {
    path: "/head",
    component: Head,
  },
  {
    path: "/detail/:id", // /:작명
    component: Detail,
  },
  // {
  //   path: "/:anything(.*)",  //404 page는 이렇게,
  //   component: Error,
  // },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 