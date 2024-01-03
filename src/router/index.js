import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import GraduationView from "../views/GraduationView.vue";
import NetworkView from "../views/NetworkView.vue";
import PortifolioView from "../views/PortifolioView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SkillsViews from "../views/SkillsViews.vue";

const routes = [
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/graduation",
    name: "graduation",
    component: GraduationView,
  },
  {
    path: "/networks",
    name: "network",
    component: NetworkView,
  },
  {
    path: "/portfolio",
    name: "portifolio",
    component: PortifolioView,
  },
  {
    path: "/",
    name: "skills",
    component: SkillsViews,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
