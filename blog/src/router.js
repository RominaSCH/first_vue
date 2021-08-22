import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List"
import Head from "./components/Head"
import Detail from "./components/Detail"

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/head",
    component: Head,
  },
  {
    path: "/detail",
    component: Detail,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 