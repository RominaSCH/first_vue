import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List"
import Head from "./components/Head"

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/head",
    component: Head,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 