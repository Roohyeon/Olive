import { createRouter, createWebHistory } from "vue-router";
import pageRouter from "./modules/pageRouter";

const router = createRouter({
  history: createWebHistory(),
  routes: [pageRouter],
});

export default router;